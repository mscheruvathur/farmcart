import { SectionHeading } from './SectionHeading';

export function ContactSection() {
  return (
    <section id="contact" className="bg-surface px-4 py-16 sm:px-8 lg:px-16 lg:py-24" aria-labelledby="contact-title">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build your Farmcart experience"
        description="Update labels, validation behavior, and contact copy to match the exact Figma design and product requirements."
      />

      <div className="mx-auto grid max-w-5xl gap-10 rounded-3xl bg-white p-6 shadow-card sm:p-8 lg:grid-cols-2 lg:p-10">
        <article>
          <h3 className="text-2xl font-semibold text-text">Contact details</h3>
          <p className="mt-4 text-sm leading-7 text-muted">hello@farmcart.com</p>
          <p className="text-sm leading-7 text-muted">+1 (555) 123-4567</p>
          <p className="mt-4 text-sm leading-7 text-muted">123 Greenway Street, Harvest City</p>
        </article>

        <form className="grid gap-4" aria-label="Contact form">
          <label className="grid gap-2 text-sm font-medium text-text">
            Name
            <input
              type="text"
              name="name"
              className="h-11 rounded-lg border border-slate-300 px-3 text-sm outline-none transition focus:border-primary"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-text">
            Email
            <input
              type="email"
              name="email"
              className="h-11 rounded-lg border border-slate-300 px-3 text-sm outline-none transition focus:border-primary"
              placeholder="Your email"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-text">
            Message
            <textarea
              name="message"
              rows={4}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-primary"
              placeholder="How can we help?"
            />
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
