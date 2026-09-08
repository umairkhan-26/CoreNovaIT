import SectionHeading from "./SectionHeading";

/**
 * Empty-state portfolio grid. Swap these placeholder slots for real project
 * cards (image, title, one-line result, link) once work is ready to publish —
 * no layout changes needed, just replace the mapped array with real entries.
 */
export default function PortfolioPlaceholder({
  serviceName,
}: {
  serviceName: string;
}) {
  const slots = [1, 2, 3];

  return (
    <section className="section-divider relative py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title={`${serviceName} work, coming soon.`}
          description="This space is reserved for real client work — case studies, before/afters, and results will go here."
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {slots.map((slot) => (
            <div
              key={slot}
              className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-xl2 border-2 border-dashed border-white/15 bg-white/[0.03] text-text-secondary transition-colors hover:border-white/25 hover:bg-white/[0.05]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-white/20 text-lg">
                +
              </span>
              <span className="text-sm">Add a project</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
