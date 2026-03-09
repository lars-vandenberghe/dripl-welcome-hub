import heroImage from "@/assets/hero-refill-point.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-20 md:py-28">
      <div className="container mx-auto flex flex-col items-center gap-12 px-6 md:flex-row">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            Welcome to Dripl
          </h1>
          <p className="max-w-lg text-lg text-primary-foreground/85">
            Everything you need to get started with your Refill Point. From
            setup to ordering — we've got you covered.
          </p>
          <a
            href="#getting-started"
            className="inline-block rounded-lg bg-card px-6 py-3 font-semibold text-primary shadow-lg transition-transform hover:scale-105"
          >
            Get Started →
          </a>
        </div>
        <div className="flex-1">
          <img
            src={heroImage}
            alt="Dripl Refill Point in a modern office"
            className="mx-auto w-full max-w-md rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
