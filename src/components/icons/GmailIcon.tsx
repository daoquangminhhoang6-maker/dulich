export default function GmailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4.5" width="20" height="15" rx="2" fill="white" stroke="#E5E7EB" strokeWidth="0.5" />
      <path d="M2.5 5.5 12 12.5 21.5 5.5" fill="none" stroke="#EA4335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 6.3V18a1 1 0 0 0 1 1h1V8.2L2 6.3Z" fill="#4285F4" />
      <path d="M22 6.3V18a1 1 0 0 1-1 1h-1V8.2l2-1.9Z" fill="#34A853" />
      <path d="M4 8.2 2 6.3v-.6A1.7 1.7 0 0 1 3.7 4h.3l8 6.2L20 4h.3A1.7 1.7 0 0 1 22 5.7v.6l-2 1.9V6.9l-8 6.2-8-6.2v1.3Z" fill="#EA4335" />
    </svg>
  );
}
