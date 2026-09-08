import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, serviceDetails } from "@/lib/services";
import { capabilityTabs, platforms, siteConfig } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import PortfolioPlaceholder from "@/components/PortfolioPlaceholder";
import MagneticButton from "@/components/MagneticButton";

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} — ${siteConfig.name}`,
    description: service.overview,
  };
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 8.5l3 3 6-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${service.heroImage}')`,
              filter: "saturate(0.8) brightness(0.5)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-base/70 via-bg-base/80 to-bg-base" />
        </div>

        <div className="mx-auto w-full max-w-[1280px] px-6">
          <Link
            href="/#carousel"
            className="text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            ← All services
          </Link>

          <span className="text-gradient mt-6 block text-xs font-semibold uppercase tracking-[0.2em]">
            Service
          </span>
          <h1 className="mt-3 max-w-2xl text-balance font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-text-primary">
            {service.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-text-secondary">
            {service.tagline}
          </p>

          <div className="mt-8">
            <MagneticButton className="accent-border relative rounded-full bg-white px-7 py-3 text-sm font-semibold text-bg-base">
              Start a project
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="section-divider relative py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 md:grid-cols-2">
          <SectionHeading
            eyebrow="Overview"
            title="What's included."
            description={service.overview}
          />

          <ul className="grid grid-cols-1 gap-4">
            {service.highlights.map((point) => (
              <li key={point} className="flex items-start gap-3 text-text-secondary">
                <span className="mt-0.5 shrink-0 text-accent-solid">
                  <CheckIcon />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {service.showPlatforms && (
        <section className="section-divider section-tint relative py-20 md:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <SectionHeading
              eyebrow="Platforms"
              title="Wherever your site needs to live."
              className="mb-10"
            />
            <div className="flex flex-wrap gap-3">
              {platforms.map((platform) => (
                <span
                  key={platform.id}
                  className="glass rounded-full px-4 py-2 text-sm text-text-secondary"
                >
                  {platform.title}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-divider relative py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeading
            eyebrow="Our process"
            title="How this gets delivered."
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {capabilityTabs.map((step, index) => (
              <div key={step.id} className="glass rounded-xl2 p-6">
                <span className="text-gradient font-display text-sm font-bold">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-text-primary">
                  {step.headline}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioPlaceholder serviceName={service.title} />

      <section className="relative py-20 md:py-28">
        <div className="glass mx-auto flex max-w-[1000px] flex-col items-center gap-6 rounded-xl2 px-8 py-14 text-center md:mx-6 lg:mx-auto">
          <h2 className="font-display text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
            Ready to start your {service.title.toLowerCase()} project?
          </h2>
          <p className="max-w-md text-text-secondary">
            Tell us what you're building — we'll follow up with a scoped
            proposal, not a sales pitch.
          </p>
          <MagneticButton className="accent-border relative rounded-full bg-white px-7 py-3 text-sm font-semibold text-bg-base">
            Start a project
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
