// Drawn icons in one stroke weight, matching the sheet linework.
const base = { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, 'aria-hidden': true } as const;

export const DownloadIcon = () => (
  <svg {...base}><path d="M8 2v9M4 7.5 8 11.5l4-4M2.5 14h11" strokeLinecap="square" /></svg>
);

export const ExternalIcon = () => (
  <svg {...base}><path d="M6 3h7v7M13 3 3.5 12.5" strokeLinecap="square" /></svg>
);

export const ChevronDown = () => (
  <svg {...base}><path d="m3.5 6 4.5 4.5L12.5 6" strokeLinecap="square" /></svg>
);

export const RevTriangle = ({ label }: { label: string }) => (
  <svg width="34" height="30" viewBox="0 0 34 30" aria-hidden="true" className="rev-tri">
    <path d="M17 2 32 28H2Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <text x="17" y="23" textAnchor="middle">{label}</text>
  </svg>
);
