import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { bom, CV_URL, EMAIL, GITHUB, LINKEDIN, notes, results, revisions } from '../data';
import { DownloadIcon, ExternalIcon, RevTriangle } from './icons';

const EASE = [0.16, 1, 0.3, 1] as const;

// The "after" bar is machined away from 3 h to zero as the drawing scrolls into view.
function DowntimeDrawing() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'center 0.5'] });
  const width = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['100%', '0%']);
  const hours = useTransform(scrollYProgress, (v) => `${reduce ? 0 : Math.round(3 - 3 * v)} h`);
  const dimOpacity = useTransform(scrollYProgress, [0.75, 1], reduce ? [1, 1] : [0, 1]);

  return (
    <figure className="downtime" ref={ref}>
      <figcaption>App downtime at MAX, before and after</figcaption>
      <div className="bar-row">
        <span className="bar-label">Before</span>
        <div className="bar-track">
          <div className="bar bar-before" />
        </div>
        <span className="dim">3 h</span>
      </div>
      <div className="bar-row">
        <span className="bar-label">After</span>
        <div className="bar-track">
          <motion.div className="bar bar-after" style={{ width }} />
          <motion.div className="dimension" style={{ opacity: dimOpacity }}>
            <span>−100%</span>
          </motion.div>
        </div>
        <motion.span className="dim">{hours}</motion.span>
      </div>
    </figure>
  );
}

export function Notes() {
  return (
    <div className="notes-grid">
      <div>
        <h2 id="notes-title">General notes</h2>
        <ol className="notes">
          {notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ol>
        <p className="uos">Unless otherwise specified, all apps to be shipped.</p>
      </div>
      <div className="measure">
        <h3>Measured on the job</h3>
        <DowntimeDrawing />
        <table className="spec">
          <tbody>
            {results.map((r) => (
              <tr key={r.label}>
                <th scope="row">{r.label}</th>
                <td>{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Revisions() {
  return (
    <>
      <div className="sheet-head">
        <h2 id="revisions-title">Revision history</h2>
        <p className="sheet-intro">Newest revision on top. Two of them are still open.</p>
      </div>
      <div className="rev-head" aria-hidden="true">
        <span>Rev</span>
        <span>Date</span>
        <span>Description</span>
      </div>
      <ol className="revs">
        {revisions.map((r) => (
          <motion.li
            key={r.rev}
            className={r.current ? 'is-current' : undefined}
            initial={{ rotateX: -70, opacity: 0.3 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            viewport={{ once: true, margin: '0px 0px -12% 0px' }}
            transition={{ duration: 0.9, ease: EASE }}
            style={{ transformPerspective: 1200, transformOrigin: '50% 0%' }}
          >
            <RevTriangle label={r.rev} />
            <p className="rev-date">{r.period}</p>
            <div className="rev-body">
              <h3>
                {r.role} <span>· {r.company}</span>
              </h3>
              <p className="rev-place">
                {r.place}
                {r.current && <span className="tag">Current</span>}
              </p>
              {r.changes.length > 0 && (
                <ul>
                  {r.changes.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </>
  );
}

export function Bom() {
  return (
    <>
      <div className="sheet-head">
        <h2 id="bom-title">Bill of materials</h2>
        <p className="sheet-intro">The parts I reach for, grouped by assembly.</p>
      </div>
      <table className="bom">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Assembly</th>
            <th scope="col">Parts</th>
          </tr>
        </thead>
        <tbody>
          {bom.map((b, i) => (
            <tr key={b.group}>
              <td>
                <motion.span
                  className="balloon"
                  initial={{ scale: 0.4 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 420, damping: 18, delay: i * 0.05 }}
                >
                  {i + 1}
                </motion.span>
              </td>
              <th scope="row">{b.group}</th>
              <td>{b.parts.join(' · ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export function SignOff() {
  const reduce = useReducedMotion();
  const today = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  return (
    <div className="signoff">
      <h2 id="signoff-title">Sign off on this drawing</h2>
      <p className="signoff-lede">
        Need a mobile engineer who ships, leads, and can explain a streaming LLM reasoning engine over lunch? This
        drawing is one approval away.
      </p>
      <div className="actions">
        <a className="btn btn-primary" href={CV_URL} download="Caleb-Adjuya-CV.pdf">
          <DownloadIcon /> Download CV
        </a>
        <a className="btn btn-ghost btn-email" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </div>

      <div className="signoff-grid">
        <dl className="approval">
          <div>
            <dt>Drawn by</dt>
            <dd>
              <svg className="signature" viewBox="0 0 150 46" aria-hidden="true">
                <motion.path
                  key={reduce ? 'still' : 'draw'}
                  d="M8 34C2 20 14 6 26 10c8 3 0 20-10 22M30 30c4-12 14-12 12 0-1 4 6 4 8-2M52 30c6-20 10-26 8-16-2 10-4 18 2 18 4 0 8-8 12-6 6 2-2 8 6 8 6 0 8-10 12-8M94 30c6-22 12-26 8-14-3 10-4 18 4 16 8-2 10-12 4-10-6 2 2 12 10 8M70 41c20-2 50-4 76-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1.1, ease: 'easeInOut' }}
                />
              </svg>
              <span className="sr-only">Adjuya Avwerosuo Caleb</span>
            </dd>
          </div>
          <div>
            <dt>Approved by</dt>
            <dd className="sign-line">You</dd>
          </div>
          <div>
            <dt>Date</dt>
            <dd>{today}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Awaiting your signature</dd>
          </div>
        </dl>

        <ul className="contact-list">
          <li>
            <span>Email</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
          <li>
            <span>LinkedIn</span>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              /in/calebadjuya <ExternalIcon />
            </a>
          </li>
          <li>
            <span>GitHub</span>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              6lackGuy <ExternalIcon />
            </a>
          </li>
          <li>
            <span>Based in</span>
            <p>Lagos, Nigeria · open to remote</p>
          </li>
        </ul>
      </div>

      <footer className="colophon">
        <p>Unless otherwise specified, all apps to be shipped.</p>
        <p>Drawn in React &amp; Framer Motion · © {new Date().getFullYear()} Adjuya Avwerosuo Caleb</p>
      </footer>
    </div>
  );
}
