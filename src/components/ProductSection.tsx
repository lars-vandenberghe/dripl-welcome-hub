import { Leaf, Zap, Heart, Recycle } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural Ingredients",
    description: "All our flavours use natural ingredients — no artificial sweeteners, colours or preservatives.",
  },
  {
    icon: Zap,
    title: "Functional Beverages",
    description: "From energy-boosting Maté to vitamin-packed fruit blends, drinks that do more than just hydrate.",
  },
  {
    icon: Heart,
    title: "Healthy & Sugar-free",
    description: "Zero sugar, maximum taste. Dripl drinks are designed to support a healthier workplace.",
  },
  {
    icon: Recycle,
    title: "Zero Packaging Waste",
    description: "No bottles, no cans, no waste. Your Refill Point connects directly to the water supply.",
  },
];

const ProductSection = () => {
  return (
    <section id="product" className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          About the Refill Point
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
          A smart, award-winning system that delivers filtered water and
          functional beverages — without a single piece of packaging.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 rounded-xl bg-card p-6 card-shadow"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-lg font-semibold text-card-foreground">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-card p-8 card-shadow">
          <h3 className="mb-4 font-display text-xl font-semibold text-card-foreground">
            Available Flavours
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Classic Lemon", color: "bg-yellow-100 text-yellow-700" },
              { name: "Rose-Mint", color: "bg-pink-100 text-pink-700" },
              { name: "Raspberry Grapefruit", color: "bg-red-100 text-red-700" },
              { name: "Maté Energiser", color: "bg-green-100 text-green-700" },
            ].map((flavour) => (
              <div
                key={flavour.name}
                className={`rounded-lg px-4 py-3 text-center font-medium ${flavour.color}`}
              >
                {flavour.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
