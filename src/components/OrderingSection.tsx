import { Package, Droplets, Clock, ExternalLink } from "lucide-react";

const OrderingSection = () => {
  return (
    <section id="ordering" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          Ordering & Refills
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-center text-muted-foreground">
          Order your flavour boxes and CO2 bottles via MyDripl — your personal account on our ordering platform.
        </p>
        <div className="mb-14 text-center">
          <a
            href="https://shop.dripl.be/login-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          >
            Go to MyDripl <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="card-shadow rounded-xl bg-card p-6 text-center">
            <div className="mx-auto mb-4 inline-flex rounded-lg bg-accent p-3">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">
              Flavour Boxes
            </h3>
            <p className="text-sm text-muted-foreground">
              Order flavour boxes through your MyDripl account in sets of <strong>4 boxes</strong> — mix and match flavours as you like. This way we optimise delivery and lower our impact on the planet. Delivery takes <strong>2–3 business days</strong>.
            </p>
          </div>

          <div className="card-shadow rounded-xl bg-card p-6 text-center">
            <div className="mx-auto mb-4 inline-flex rounded-lg bg-accent p-3">
              <Droplets className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">
              CO2 Bottles
            </h3>
            <p className="text-sm text-muted-foreground">
              Delivered by our technicians within <strong>5–14 days</strong>. Order when your last full CO2 bottle is put in the Refill Point. Orders are per 4 bottles.
            </p>
          </div>

          <div className="card-shadow rounded-xl bg-card p-6 text-center">
            <div className="mx-auto mb-4 inline-flex rounded-lg bg-accent p-3">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">
              Delivery Times
            </h3>
            <p className="text-sm text-muted-foreground">
              Flavour boxes: <strong>2–3 days</strong>. CO2 bottles: <strong>5–14 days</strong> (delivered by a technician). Plan ahead to avoid running out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderingSection;
