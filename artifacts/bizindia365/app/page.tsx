export default function HomePage() {
  return (
    <main className="relative isolate grid min-h-svh place-items-center overflow-hidden bg-[#f5f4ef] px-6 py-8 text-[#202b29] antialiased">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[1.4rem] -z-10 border border-[#45564d]/10 max-sm:inset-3"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-square w-[min(62vw,39rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#45564d]/[0.055] max-sm:w-[88vw]"
      />
      <section
        aria-labelledby="brand-name"
        className="motion-safe:animate-brand-arrive w-full max-w-[46rem] text-center"
      >
        <h1
          id="brand-name"
          className="m-0 font-sans text-[clamp(2.8rem,8.2vw,6.45rem)] font-medium leading-[1.04] tracking-[-0.075em]"
        >
          BizIndia365
        </h1>
        <div
          aria-hidden="true"
          className="my-[clamp(1.5rem,4vw,2.4rem)] flex items-center justify-center"
        >
          <span className="h-px w-[clamp(2.8rem,8vw,5.4rem)] bg-[#45564d]/20" />
          <span className="mx-[0.85rem] size-[5px] rounded-full bg-[#b47d51]" />
          <span className="h-px w-[clamp(2.8rem,8vw,5.4rem)] bg-[#45564d]/20" />
        </div>
        <p className="m-0 font-sans text-[clamp(0.78rem,1.65vw,0.94rem)] leading-[1.6] tracking-[0.14em] text-[#69736d] sm:tracking-[0.19em]">
          Digital Business Solutions
        </p>
      </section>
    </main>
  );
}