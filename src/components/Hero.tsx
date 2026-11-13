import { useEffect, useRef, useSyncExternalStore, type CSSProperties } from 'react';
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { CV_URL, EMAIL } from '../data';
import { SheetFrame, useExitTilt } from './Sheet';
import { ChevronDown, DownloadIcon } from './icons';

// Geometry shared by the CSS (.assembly, .stage-inner) and the callout projection below.
const PERSPECTIVE = 1800;
const OFFSET_Y = 30;
// Phones: smaller and re-centred so the callouts stay inside the sheet frame at a readable size.
const GEOMETRY = {
  wide: { ox: -140, scale: 1, gap: [60, 118] },
  small: { ox: -120, scale: 0.46, gap: [84, 112] }, // <= 860px
  tiny: { ox: -120, scale: 0.42, gap: [84, 112] }, // <= 370px
};
const QUERIES = [['tiny', '(max-width: 370px)'], ['small', '(max-width: 860px)']] as const;

function useScreenSize(): keyof typeof GEOMETRY {
  return useSyncExternalStore(
    (cb) => {
      const mqs = QUERIES.map(([, q]) => window.matchMedia(q));
      mqs.forEach((mq) => mq.addEventListener('change', cb));
      return () => mqs.forEach((mq) => mq.removeEventListener('change', cb));
    },
    () => QUERIES.find(([, q]) => window.matchMedia(q).matches)?.[0] ?? 'wide',
  );
}
const HALF_W = 115;
// Callouts anchor near each layer's bottom-right corner, the one point upper layers never cover.
const ANCHOR_Y = 150;
const DEG = Math.PI / 180;

// Bottom to top, the way the app is actually built.
const LAYERS = [
  { key: 'release', name: 'Release', spec: 'CI/CD · Shorebird · Google Play' },
  { key: 'data', name: 'Data', spec: 'Firebase · SQLite · PostgreSQL' },
  { key: 'services', name: 'Services', spec: 'REST · FCM push · Youverify KYC' },
  { key: 'state', name: 'State', spec: 'Bloc · Riverpod · Provider' },
  { key: 'ui', name: 'Interface', spec: 'Flutter widgets · Rive' },
] as const;

type LayerKey = (typeof LAYERS)[number]['key'];

function LayerArt({ kind }: { kind: LayerKey }) {
  const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5 } as const;
  return (
    <svg className="layer-art" viewBox="0 0 230 460" aria-hidden="true">
      {kind === 'ui' && (
        <>
          <rect x="80" y="14" width="70" height="16" rx="8" {...s} />
          <rect x="22" y="48" width="186" height="28" rx="6" {...s} />
          <rect x="22" y="92" width="186" height="80" rx="10" {...s} opacity=".7" />
          <rect x="22" y="186" width="88" height="80" rx="10" {...s} opacity=".7" />
          <rect x="120" y="186" width="88" height="80" rx="10" {...s} opacity=".7" />
          <rect x="22" y="280" width="186" height="44" rx="10" {...s} opacity=".7" />
          <rect x="22" y="394" width="186" height="40" rx="20" {...s} className="stroke-orange" />
        </>
      )}
      {kind === 'state' && (
        <>
          <path d="M84 132 146 206M146 254 92 314" {...s} className="stroke-orange" />
          <circle cx="66" cy="112" r="26" {...s} />
          <circle cx="164" cy="230" r="26" {...s} />
          <circle cx="76" cy="336" r="26" {...s} />
        </>
      )}
      {kind === 'services' && (
        <>
          <rect x="55" y="180" width="120" height="100" rx="10" {...s} />
          <path d="M0 140h55v60M230 230h-55M0 330h55v-50" {...s} className="stroke-orange" />
          <rect x="0" y="124" width="14" height="32" {...s} />
          <rect x="216" y="214" width="14" height="32" {...s} />
          <rect x="0" y="314" width="14" height="32" {...s} />
        </>
      )}
      {kind === 'data' && (
        <>
          {[110, 270].map((y) => (
            <g key={y}>
              <ellipse cx="115" cy={y} rx="56" ry="15" {...s} />
              <path d={`M59 ${y}v70a56 15 0 0 0 112 0v-70`} {...s} />
              <path d={`M59 ${y + 35}a56 15 0 0 0 112 0`} {...s} opacity=".5" />
            </g>
          ))}
        </>
      )}
      {kind === 'release' && (
        <>
          <path d="M115 96v268" {...s} strokeDasharray="4 6" />
          {[80, 170, 260].map((y) => (
            <rect key={y} x="96" y={y} width="38" height="38" {...s} />
          ))}
          <rect x="96" y="350" width="38" height="38" className="fill-orange" />
        </>
      )}
    </svg>
  );
}

function Layer({ index, kind, gap }: { index: number; kind: LayerKey; gap: MotionValue<number> }) {
  const z = useTransform(gap, (g) => g * (index - 2));
  return (
    <motion.div className={`layer layer-${kind}`} style={{ z }}>
      <LayerArt kind={kind} />
    </motion.div>
  );
}

// Projects the layer's anchor point through the same CSS transforms, so the 2D callout sits exactly on it.
function project(g: number, index: number, a: number, b: number, ox: number, scale: number) {
  const z = g * (index - 2);
  const x1 = HALF_W * Math.cos(b * DEG) - ANCHOR_Y * Math.sin(b * DEG);
  const y1 = HALF_W * Math.sin(b * DEG) + ANCHOR_Y * Math.cos(b * DEG);
  const y2 = y1 * Math.cos(a * DEG) - z * Math.sin(a * DEG);
  const z2 = y1 * Math.sin(a * DEG) + z * Math.cos(a * DEG);
  const k = PERSPECTIVE / (PERSPECTIVE - z2);
  return { x: (ox + x1) * k * scale, y: (OFFSET_Y + y2) * k * scale };
}

function Callout({
  index,
  layer,
  gap,
  rotateX,
  rotateZ,
  opacity,
  geo,
}: {
  geo: { ox: number; scale: number };
  index: number;
  layer: (typeof LAYERS)[number];
  gap: MotionValue<number>;
  rotateX: MotionValue<number>;
  rotateZ: MotionValue<number>;
  opacity: MotionValue<number>;
}) {
  const x = useTransform([gap, rotateX, rotateZ], ([g, a, b]: number[]) => project(g, index, a, b, geo.ox, geo.scale).x);
  const y = useTransform([gap, rotateX, rotateZ], ([g, a, b]: number[]) => project(g, index, a, b, geo.ox, geo.scale).y);
  return (
    <motion.div className="callout" style={{ x, y, opacity }}>
      <span className="leader" />
      <span className="balloon">{LAYERS.length - index}</span>
      <span className="callout-text">
        <b>{layer.name}</b>
        <small>{layer.spec}</small>
      </span>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const geo = GEOMETRY[useScreenSize()];
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  // Intro: the assembly eases apart on load, then scroll takes over and explodes it fully.
  const intro = useMotionValue(reduce ? 1 : 0.1);
  useEffect(() => {
    if (reduce) return;
    const controls = animate(intro, 1, { duration: 1.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [intro, reduce]);

  // Rests part-exploded and labelled; scroll pulls it fully apart.
  const [g0, g1] = geo.gap;
  const gap = useTransform([p, intro], ([s, i]: number[]) => (reduce ? g1 : (g0 + (g1 - g0) * Math.min(s / 0.7, 1)) * i));
  const rotateX = useTransform(p, [0, 1], reduce ? [56, 56] : [56, 61]);
  const rotateZ = useTransform(p, [0, 1], reduce ? [-42, -42] : [-42, -34]);
  const labelOpacity = useTransform(intro, [0.75, 1], [0, 1]);
  const hintOpacity = useTransform(p, [0, 0.08], [1, 0]);
  const spacing = useTransform(gap, (g) => `${Math.round(g)}`);
  const dimWidth = useTransform(gap, (g) => g * geo.scale);
  const tilt = useExitTilt(ref);

  return (
    <section id="top" ref={ref} className="hero" aria-labelledby="top-title">
      <motion.div className="hero-pin sheet" style={tilt}>
        <SheetFrame sheet={1} title="General assembly" />
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 id="top-title" className="hero-name">
              Caleb
              <br />
              Adjuya
            </h1>
            <p className="hero-role">Lead Mobile Engineer · Flutter &amp; full-stack · Lagos, open to remote</p>
            <p className="hero-lede">
              Mechanical engineer by degree, mobile engineer by obsession. I ship Flutter apps that thousands of field
              agents across Nigeria, Ghana and Cameroon open every day, then go break ankles on the basketball court.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href={CV_URL} download="Caleb-Adjuya-CV.pdf">
                <DownloadIcon /> Download CV
              </a>
              <a className="btn btn-ghost" href={`mailto:${EMAIL}`}>
                Email me
              </a>
            </div>
          </div>

          <div
            className="stage"
            role="img"
            aria-label="Exploded isometric drawing of a mobile app in five layers: interface, state, services, data and release"
          >
            <div className="stage-inner" style={{ '--ox': `${geo.ox}px`, scale: geo.scale } as CSSProperties}>
              <motion.div className="assembly" style={{ rotateX, rotateZ }}>
                {LAYERS.map((layer, i) => (
                  <Layer key={layer.key} index={i} kind={layer.key} gap={gap} />
                ))}
              </motion.div>
            </div>
            {LAYERS.map((layer, i) => (
              <Callout key={layer.key} index={i} layer={layer} gap={gap} rotateX={rotateX} rotateZ={rotateZ} opacity={labelOpacity} geo={geo} />
            ))}
            <div className="readout" aria-hidden="true">
              <span className="readout-label">Layer spacing</span>
              <motion.span className="dim-live" style={{ width: dimWidth }}>
                <motion.b>{spacing}</motion.b>
              </motion.span>
              <span className="readout-label">View: isometric</span>
            </div>
          </div>
        </div>
        <motion.p className="scroll-hint" style={{ opacity: hintOpacity }} aria-hidden="true">
          Scroll to explode the assembly <ChevronDown />
        </motion.p>
      </motion.div>
    </section>
  );
}
