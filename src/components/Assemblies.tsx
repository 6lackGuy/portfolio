import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { apps, type Schematic } from '../data';
import { ExternalIcon } from './icons';

// Line drawings of each app's main screen. Schematics, not screenshots.
function ScreenSchematic({ kind }: { kind: Schematic }) {
  switch (kind) {
    case 'pams':
      return (
        <>
          <i className="sx-steps"><b /><b /><b /></i>
          <i className="sx-field" />
          <i className="sx-field" />
          <i className="sx-field" />
          <i className="sx-match"><b /><b /></i>
          <i className="sx-btn" />
        </>
      );
    case 'drive':
      return (
        <>
          <i className="sx-code" />
          <i className="sx-row tick" />
          <i className="sx-row tick" />
          <i className="sx-row tick" />
          <i className="sx-row" />
          <i className="sx-btn" />
        </>
      );
    case 'chairman':
      return (
        <>
          <i className="sx-count"><b /><b /><b /></i>
          <i className="sx-row dot" />
          <i className="sx-row dot" />
          <i className="sx-row dot off" />
          <i className="sx-row dot" />
          <i className="sx-row dot" />
        </>
      );
    case 'swap':
      return (
        <>
          <i className="sx-map">
            <b className="pin p1" />
            <b className="pin p2" />
            <b className="pin p3" />
          </i>
          <i className="sx-battery"><b /></i>
          <i className="sx-btn" />
        </>
      );
    case 'test':
      return (
        <>
          <i className="sx-lang" />
          <i className="sx-question" />
          <i className="sx-option" />
          <i className="sx-option picked" />
          <i className="sx-option" />
          <i className="sx-option" />
        </>
      );
  }
}

function AppRow({ app, index }: { app: (typeof apps)[number]; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const reduce = useReducedMotion();
  // Projects the drawing from an isometric view into a flat front elevation as it reaches the middle of the screen.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const rotateX = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [58, 0]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [index % 2 ? 40 : -40, 0]);
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [80, 0]);
  const viewLabel = useTransform(scrollYProgress, (v): string => (v < 0.92 ? 'View: isometric' : 'View A: front elevation'));
  // Callouts and the dimension only make sense once the drawing has settled into its flat elevation.
  const annotate = useTransform(scrollYProgress, [0.82, 1], reduce ? [1, 1] : [0, 1]);

  return (
    <li ref={ref} className={`app-row${index % 2 ? ' flip' : ''}`}>
      <div className="app-copy">
        <h3>{app.name}</h3>
        <p>{app.summary}</p>
        <a className="link" href={app.url} target="_blank" rel="noopener noreferrer">
          View on Google Play <ExternalIcon />
        </a>
      </div>
      <figure className="app-figure">
        <div className="elevation">
          <div className="device-zoom" aria-hidden="true">
            <motion.div className="device" style={{ rotateX, rotateZ, y, transformPerspective: 1400 }}>
              <span className="device-notch" />
              <ScreenSchematic kind={app.schematic} />
            </motion.div>
          </div>
          <motion.ol className="elev-callouts" style={{ opacity: annotate }} aria-label={`${app.name} features`}>
            {app.callouts.map((c, i) => (
              <li key={c.label} style={{ top: `${c.at}%` }}>
                <span className="leader" aria-hidden="true" />
                <span className="balloon" aria-hidden="true">{i + 1}</span>
                <span className="elev-label">{c.label}</span>
              </li>
            ))}
          </motion.ol>
          <motion.div className="dim-h" style={{ opacity: annotate }} aria-hidden="true">
            <span>360 dp</span>
          </motion.div>
        </div>
        <figcaption className="figure-label">
          {app.part} · <motion.span>{viewLabel}</motion.span> · schematic
        </figcaption>
      </figure>
    </li>
  );
}

export default function Assemblies() {
  return (
    <>
      <div className="sheet-head">
        <h2 id="assemblies-title">Five apps, live on Google Play</h2>
        <p className="sheet-intro">
          Every one of these is in production at MAX, used by riders, drivers and fleet chairmen. Tap through to the
          store. They’re real.
        </p>
      </div>
      <ol className="app-list">
        {apps.map((app, i) => (
          <AppRow key={app.part} app={app} index={i} />
        ))}
      </ol>
    </>
  );
}
