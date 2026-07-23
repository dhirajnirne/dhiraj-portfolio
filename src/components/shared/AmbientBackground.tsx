export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[var(--blob-accent)] blur-[120px]" />
      <div className="absolute right-[-10rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-[var(--blob-emerald)] blur-[130px]" />
      <div className="absolute bottom-[-12rem] left-1/4 h-[30rem] w-[30rem] rounded-full bg-[var(--blob-amber)] blur-[130px]" />
    </div>
  );
}
