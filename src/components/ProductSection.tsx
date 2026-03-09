import { Leaf, Zap, Heart, Recycle } from "lucide-react";

import lemonImg from "@/assets/flavours/lemon.png";
import iceTeaImg from "@/assets/flavours/ice-tea.png";
import cranberryHibiscusImg from "@/assets/flavours/cranberry-hibiscus.png";
import roseMintImg from "@/assets/flavours/rose-mint.png";
import gingerLimeImg from "@/assets/flavours/ginger-lime.png";
import mateImg from "@/assets/flavours/mate.png";
import peachWhiteTeaImg from "@/assets/flavours/peach-white-tea.png";
import raspberryGrapefruitImg from "@/assets/flavours/raspberry-grapefruit.png";

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
  { name: "Lemon", tag: null, image: lemonImg },
  { name: "Ice Tea", tag: "New", image: iceTeaImg },
  { name: "Cranberry Hibiscus", tag: "New", image: cranberryHibiscusImg },
  { name: "Rose Mint", tag: "New", image: roseMintImg },
  { name: "Ginger Lime", tag: "Focus", image: gingerLimeImg },
  { name: "Maté", tag: "Energy", image: mateImg },
  { name: "Peach White Tea", tag: "Vitamin Boost", image: peachWhiteTeaImg },
  { name: "Raspberry Grapefruit", tag: "Vitamin Boost", image: raspberryGrapefruitImg },
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
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {flavours.map((flavour) => (
              <div
                key={flavour.name}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={flavour.image}
                  alt={flavour.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-display text-lg font-bold text-white leading-tight">
                    {flavour.name}
                  </p>
                  {flavour.tag && (
                    <span className="mt-1 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                      {flavour.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
