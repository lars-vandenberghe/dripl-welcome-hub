import { Package, RefreshCw, Clock } from "lucide-react";

const OrderingSection = () => {
  return (
    <section id="ordering" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          Ordering & Refills
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
          Running low on flavour cartridges? Here's how to order.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="card-shadow rounded-xl bg-card p-6 text-center">
            <div className="mx-auto mb-4 inline-flex rounded-lg bg-accent p-3">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">
              How to Order
            </h3>
            <p className="text-sm text-muted-foreground">
              Email your account manager or send an order to{" "}
              <a href="mailto:orders@dripl.be" className="font-medium text-primary underline">
                orders@dripl.be
              </a>
              . Include your company name and flavours needed.
            </p>
          </div>

          <div className="card-shadow rounded-xl bg-card p-6 text-center">
            <div className="mx-auto mb-4 inline-flex rounded-lg bg-accent p-3">
              <RefreshCw className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">
              Automatic Refills
            </h3>
            <p className="text-sm text-muted-foreground">
              Prefer a hands-off approach? Ask about our automatic refill
              programme and we'll send cartridges on a regular schedule.
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
              Orders are typically delivered within 3–5 business days.
              Urgent? Contact us and we'll do our best to speed things up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderingSection;
