export function DashboardMetricIcon({ icon }) {
  if (icon === 'warning') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3.5L21 19H3L12 3.5zM12 9v4.5M12 16.5h.01"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (icon === 'sales') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 16l4-4 3 3 6-7M17 8h1.5A1.5 1.5 0 0120 9.5V19H4V6.5A1.5 1.5 0 015.5 5H10"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (icon === 'idle') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 7v5l3 2M12 21a9 9 0 100-18 9 9 0 000 18z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 7.5h16v11A1.5 1.5 0 0118.5 20h-13A1.5 1.5 0 014 18.5v-11zM8 7.5V6A1.5 1.5 0 019.5 4.5h5A1.5 1.5 0 0116 6v1.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
