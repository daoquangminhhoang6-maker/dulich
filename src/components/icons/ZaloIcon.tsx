export default function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3C6.9 3 2.75 6.6 2.75 11c0 2.55 1.38 4.83 3.53 6.3-.12.9-.45 2.02-1.13 3.05a.4.4 0 0 0 .47.6c1.53-.5 2.78-1.24 3.6-1.82.87.22 1.8.34 2.78.34 5.1 0 9.25-3.6 9.25-8.47S17.1 3 12 3Z"
        fill="#0068FF"
      />
      <text x="12" y="14.6" textAnchor="middle" fontSize="7.2" fontWeight="700" fill="white" fontFamily="Arial, sans-serif">
        Zalo
      </text>
    </svg>
  );
}
