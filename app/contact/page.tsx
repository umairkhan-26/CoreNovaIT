import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: "Tell us what you're building and we'll follow up with a scoped proposal.",
};

export default function ContactPage() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-start">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Tell us what you're building — we'll follow up with a scoped proposal, not a sales pitch."
        />
        <ContactForm />
      </div>
    </section>
  );
}
