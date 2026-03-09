import { Droplets, Brain, Zap, Heart, Apple, GlassWater } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Stay Hydrated",
    description:
      "Proper hydration improves concentration, reduces fatigue and supports overall well-being. Dripl makes it easy to drink more throughout the day — with flavours that make water exciting.",
  },
  {
    icon: Brain,
    title: "Focus — Ginger Lime",
    description:
      "Our Focus drink contains vitamin B6, B12 and natural caffeine to support cognitive performance and reduce tiredness. Perfect for a productive afternoon.",
  },
  {
    icon: Zap,
    title: "Energy — Maté",
    description:
      "Powered by natural Maté extract and caffeine, our Energy drink gives you a gentle, sustained boost — without the crash of sugary energy drinks.",
  },
  {
    icon: Apple,
    title: "Vitamin Boost — Peach & Raspberry",
    description:
      "Enriched with vitamins B6 and B12, our Vitamin Boost drinks support your immune system and energy metabolism — a healthy pick-me-up any time of day.",
  },
  {
    icon: Heart,
    title: "Zero Sugar, Zero Guilt",
    description:
      "All Dripl drinks are sugar-free and low in calories, using sucralose for a touch of sweetness without impacting blood sugar or energy levels.",
  },
  {
    icon: GlassWater,
    title: "Filtered Water On Tap",
    description:
      "Every drink starts with filtered water directly from the supply. Choose still or sparkling, cold or ambient — always fresh, always clean.",
  },
];

const HealthSection = () => {
  return (
    <section id="health" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          Healthy Hydration
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
          Dripl drinks are designed to keep your team hydrated, focused and energised — without sugar, without waste.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="card-shadow flex gap-4 rounded-xl bg-card p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-lg font-semibold text-card-foreground">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthSection;
