export function AuroraSun({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 48"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="2.3" strokeLinecap="round">
        <path d="M17 38a15 15 0 0 1 30 0M7 45h50M32 2v10M8 12l8 8M56 12l-8 8M1 34h10M53 34h10M19 4l4 10M45 4l-4 10" />
      </g>
    </svg>
  );
}

export default function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Café Aurora, inicio">
      <AuroraSun />
      <span>
        aurora<span className="brand-caption">CAFÉ DE ESPECIALIDAD</span>
      </span>
    </a>
  );
}
