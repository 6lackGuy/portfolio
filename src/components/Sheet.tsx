import { useRef, type ReactNode, type RefObject } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const ZONES_X = ['1', '2', '3', '4', '5', '6', '7', '8'];
const ZONES_Y = ['A', 'B', 'C', 'D', 'E', 'F'];

export const SHEET_COUNT = 6;

// The drawing sheet leans back and recedes as it scrolls out, like flipping to the next sheet in a set.
export function useExitTilt(ref: RefObject<HTMLElement | null>) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'end start'] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 16]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, reduce ? 1 : 0.2]);
  return { rotateX, scale, opacity, transformPerspective: 1600, transformOrigin: '50% 100%' };
}

export function SheetFrame({ sheet, title, rev = '2026.11' }: { sheet: number; title: string; rev?: string }) {
  return (
    <>
      <div className="frame" aria-hidden="true">
        <div className="zones zones-x">{ZONES_X.map((z) => <span key={z}>{z}</span>)}</div>
        <div className="zones zones-x zones-bottom">{ZONES_X.map((z) => <span key={z}>{z}</span>)}</div>
        <div className="zones zones-y">{ZONES_Y.map((z) => <span key={z}>{z}</span>)}</div>
        <div className="zones zones-y zones-right">{ZONES_Y.map((z) => <span key={z}>{z}</span>)}</div>
      </div>
      <dl className="title-block">
        <div className="tb-title"><dt>Drawing</dt><dd>{title}</dd></div>
        <div><dt>Sheet</dt><dd>{sheet} / {SHEET_COUNT}</dd></div>
        <div><dt>Rev</dt><dd>{rev}</dd></div>
        <div className="tb-extra"><dt>Scale</dt><dd>1:1</dd></div>
        <div className="tb-extra">
          <dt>Proj.</dt>
          <dd>
            {/* Third-angle projection symbol */}
            <svg width="34" height="16" viewBox="0 0 34 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-label="Third-angle projection" role="img">
              <path d="M1 2.5 15 5.5v5L1 13.5Z" />
              <circle cx="26" cy="8" r="6" />
              <circle cx="26" cy="8" r="2.8" />
            </svg>
          </dd>
        </div>
        <div className="tb-drn"><dt>Drawn</dt><dd>C. Adjuya</dd></div>
      </dl>
    </>
  );
}

export function Sheet({
  id,
  sheet,
  title,
  children,
}: {
  id: string;
  sheet: number;
  title: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const tilt = useExitTilt(ref);
  return (
    <motion.section id={id} ref={ref} className="sheet" style={tilt} aria-labelledby={`${id}-title`}>
      <SheetFrame sheet={sheet} title={title} />
      <div className="sheet-body">{children}</div>
    </motion.section>
  );
}
