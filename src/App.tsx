import { MotionConfig, motion, useScroll } from 'framer-motion';
import Hero from './components/Hero';
import Assemblies from './components/Assemblies';
import { Bom, Notes, Revisions, SignOff } from './components/Sections';
import { Sheet } from './components/Sheet';
import { DownloadIcon } from './components/icons';
import { CV_URL } from './data';

const SHEETS = [
  { id: 'notes', label: 'Notes' },
  { id: 'assemblies', label: 'Apps' },
  { id: 'revisions', label: 'Experience' },
  { id: 'bom', label: 'Skills' },
  { id: 'signoff', label: 'Contact' },
];

function Nav() {
  const { scrollYProgress } = useScroll();
  return (
    <header className="nav">
      <a className="nav-mark" href="#top">
        C. Adjuya
      </a>
      <nav aria-label="Sheets">
        <ol>
          {SHEETS.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>
                <span className="nav-no">{i + 2}</span>
                <span className="nav-label">{s.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <a className="btn btn-primary btn-small" href={CV_URL} download="Caleb-Adjuya-CV.pdf">
        <DownloadIcon /> CV
      </a>
      <motion.span className="nav-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
    </header>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#notes">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Sheet id="notes" sheet={2} title="General notes">
          <Notes />
        </Sheet>
        <Sheet id="assemblies" sheet={3} title="Assemblies">
          <Assemblies />
        </Sheet>
        <Sheet id="revisions" sheet={4} title="Revision history">
          <Revisions />
        </Sheet>
        <Sheet id="bom" sheet={5} title="Bill of materials">
          <Bom />
        </Sheet>
        <Sheet id="signoff" sheet={6} title="Approval">
          <SignOff />
        </Sheet>
      </main>
    </MotionConfig>
  );
}
