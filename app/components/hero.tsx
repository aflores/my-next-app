type HeroProps = {
  version: string;
};

export function Hero({ version }: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-[radial-gradient(circle_at_20%_20%,#fef3c7_0%,transparent_36%),radial-gradient(circle_at_85%_10%,#bae6fd_0%,transparent_30%),linear-gradient(145deg,#ffffff_0%,#f8fafc_40%,#f1f5f9_100%)] p-8 shadow-[0_18px_55px_-28px_rgba(15,23,42,0.55)] sm:p-12">
      <div className="absolute -right-16 top-10 h-40 w-40 rounded-full bg-amber-300/30 blur-3xl" />
      <div className="absolute -left-8 bottom-0 h-36 w-36 rounded-full bg-sky-300/30 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-7">
        <span className="w-fit rounded-full border border-black/15 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 backdrop-blur">
          Hatchboard
        </span>

        <h1 className="max-w-3xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
          Ship faster with a clean Next.js starting point.
        </h1>

        <p className="max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
          This hero is rendered in the App Router and reads your current application
          version directly from package metadata.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900">
            Current version: v{version}
          </span>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            View Docs
          </a>
        </div>
      </div>
    </section>
  );
}