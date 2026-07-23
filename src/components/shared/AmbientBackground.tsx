export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Animated aurora blobs */}
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] animate-aurora-slow rounded-full bg-[var(--blob-accent)] blur-[130px]" />
      <div className="absolute right-[-12rem] top-1/4 h-[30rem] w-[30rem] animate-aurora-mid rounded-full bg-[var(--blob-cyan)] blur-[140px]" />
      <div className="absolute bottom-[-14rem] left-1/3 h-[32rem] w-[32rem] animate-aurora-fast rounded-full bg-[var(--blob-pink)] blur-[140px]" />
      {/* Subtle noise/vignette to seat the glass */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,var(--bg)_100%)]" />
    </div>
  );
}
