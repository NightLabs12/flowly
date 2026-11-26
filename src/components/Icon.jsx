const paths = {
  tasks: (
    <>
      <path d="M4 7h3l2 2 4-4" />
      <path d="M4 15h3l2 2 4-4" />
      <path d="M15 7h5M15 15h5" />
    </>
  ),
  planning: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M8 14h3v3H8z" />
    </>
  ),
  collaboration: (
    <>
      <circle cx="9" cy="9" r="3" />
      <circle cx="17" cy="11" r="2.5" />
      <path d="M3.5 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M16 16c2.6-.3 4.5 1.4 4.5 4" />
    </>
  ),
  progress: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4a8 8 0 0 1 7 4.2" />
      <path d="M12 12l4-3" />
    </>
  ),
  workspace: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M3 11h18M7 7V5h5v2" />
      <path d="M8 15h5" />
    </>
  ),
  workflow: (
    <>
      <path d="M4 7h10M4 12h16M4 17h7" />
      <circle cx="18" cy="7" r="1.6" />
      <circle cx="22" cy="17" r="1.6" />
    </>
  ),
}

export default function Icon({ name, className = '' }) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  )
}
