import { Leaf, Zap, Heart, Recycle } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "All our flavours use natural ingredients and aromas for great taste you can feel good about.",
  },
  {
    icon: Zap,
    title: "Functional Beverages",
    description: "From energy-boosting Maté to vitamin-packed Focus drinks with B6, B12 and caffeine — drinks that do more than just hydrate.",
  },
  {
    icon: Heart,
    title: "Zero Sugar & Low-Cal",
    description: "Zero sugar, low calories. Dripl uses sucralose for sweetness without impacting blood sugar or energy levels.",
  },
  {
    icon: Recycle,
    title: "Zero Packaging Waste",
    description: "No bottles, no cans, no waste. Your Refill Point connects directly to the water supply — 90% less packaging than traditional vending.",
  },
];

const flavours = [
  { name: "Lemon", tag: null, color: "bg-yellow-100 text-yellow-700" },
  { name: "Ice Tea", tag: "New", color: "bg-amber-100 text-amber-700" },
  { name: "Cranberry Hibiscus", tag: "New", color: "bg-red-100 text-red-700" },
  { name: "Rose Mint", tag: "New", color: "bg-pink-100 text-pink-700" },
  { name: "Ginger Lime", tag: "Focus", color: "bg-lime-100 text-lime-700" },
  { name: "Maté Grapefruit", tag: "Energy", color: "bg-green-100 text-green-700" },
  { name: "Peach", tag: "Vitamin Boost", color: "bg-orange-100 text-orange-700" },
  { name: "Raspberry", tag: "Vitamin Boost", color: "bg-rose-100 text-rose-700" },
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
          <h3 className="mb-2 font-display text-xl font-semibold text-card-foreground">
            Our 8 Flavours
          </h3>
          <p className="mb-6 text-sm text-muted-foreground">
            Including 3 functional drinks designed to boost focus, energy, and daily wellness.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {flavours.map((flavour) => (
              <div
                key={flavour.name}
                className={`rounded-lg px-4 py-3 text-center font-medium ${flavour.color} relative`}
              >
                {flavour.name}
                {flavour.tag && (
                  <span className="ml-2 inline-block rounded-full bg-foreground/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                    {flavour.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
