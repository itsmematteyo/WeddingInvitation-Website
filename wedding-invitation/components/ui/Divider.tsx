export default function Divider({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 12"
      className={`mx-auto h-3 w-48 text-rose-ink ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M0 6h82M118 6h82" />
      <path d="M86 6c4-6 8-6 14 0 6-6 10-6 14 0-4 6-8 6-14 0-6 6-10 6-14 0z" />
    </svg>
  );
}
