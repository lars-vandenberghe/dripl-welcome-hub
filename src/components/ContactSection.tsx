import { Mail, Phone, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          Need Help?
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
          Our team is here for you. Get in touch and we'll respond as quickly as possible.
        </p>
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-3">
          <a
            href="mailto:support@dripl.be"
            className="card-shadow flex flex-col items-center gap-3 rounded-xl bg-card p-6 transition-all hover:card-hover-shadow"
          >
            <div className="rounded-lg bg-accent p-3">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <span className="font-medium text-card-foreground">Email</span>
            <span className="text-sm text-primary">support@dripl.be</span>
          </a>
          <a
            href="tel:+3200000000"
            className="card-shadow flex flex-col items-center gap-3 rounded-xl bg-card p-6 transition-all hover:card-hover-shadow"
          >
            <div className="rounded-lg bg-accent p-3">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <span className="font-medium text-card-foreground">Phone</span>
            <span className="text-sm text-muted-foreground">Mon–Fri, 9:00–17:00</span>
          </a>
          <a
            href="https://en.dripl.be"
            target="_blank"
            rel="noopener noreferrer"
            className="card-shadow flex flex-col items-center gap-3 rounded-xl bg-card p-6 transition-all hover:card-hover-shadow"
          >
            <div className="rounded-lg bg-accent p-3">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <span className="font-medium text-card-foreground">Website</span>
            <span className="text-sm text-primary">dripl.be</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
