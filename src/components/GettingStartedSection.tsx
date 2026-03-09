import { CheckCircle, Users, Droplets, Mail } from "lucide-react";

const steps = [
  {
    icon: CheckCircle,
    title: "1. Installation",
    description:
      "Our team installs the Refill Point at your office. We handle everything — water connection, setup and testing.",
  },
  {
    icon: Users,
    title: "2. Introduce to your team",
    description:
      "Share the exciting news with your colleagues! Use our communication templates to announce Dripl at your workplace.",
  },
  {
    icon: Droplets,
    title: "3. Start drinking",
    description:
      "Pick a flavour, tap your drink, and enjoy. It's that simple. Filtered water, functional beverages — zero packaging.",
  },
  {
    icon: Mail,
    title: "4. Stay in touch",
    description:
      "We're always here. Reach out for refills, support or any questions. Your dedicated account manager is one email away.",
  },
];

const GettingStartedSection = () => {
  return (
    <section id="getting-started" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          Getting Started
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
          Four simple steps to get Dripl up and running at your workplace.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="card-shadow group rounded-xl bg-card p-6 transition-all hover:card-hover-shadow"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent p-3">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
