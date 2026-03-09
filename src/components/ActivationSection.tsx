import { Download, Mail, Image, FileText, Copy, Check } from "lucide-react";
import { useState } from "react";
import posterChoice from "@/assets/poster-choice.jpg";
import posterGeneral from "@/assets/poster-general.jpg";

const emailTemplates = [
  {
    title: "Launch Announcement",
    subject: "🎉 Say hello to Dripl — healthy drinks at the office!",
    body: `Hi team,

Great news! We're introducing Dripl at our office — a smart Refill Point that serves filtered water and delicious, healthy drinks without any packaging waste.

Starting [DATE], you'll find the Refill Point in [LOCATION]. Simply grab your favourite cup or bottle and choose from flavours like Classic Lemon, Rose-Mint, Raspberry Grapefruit or Maté Energiser.

No sugar, no plastic, no hassle. Just great-tasting, healthy drinks — on tap.

Give it a try and let us know what you think!

Best,
[YOUR NAME]`,
  },
  {
    title: "Reminder / Follow-up",
    subject: "💧 Have you tried Dripl yet?",
    body: `Hi team,

Just a quick reminder that our Dripl Refill Point is up and running in [LOCATION]!

Here are some things you might not know:
• All drinks are sugar-free and made with natural ingredients
• You can choose from 4 different flavours
• Every drink means zero packaging waste

Bring your favourite cup or bottle and give it a go today!

Cheers,
[YOUR NAME]`,
  },
  {
    title: "New Flavour Announcement",
    subject: "🍋 New Dripl flavour alert!",
    body: `Hi team,

Exciting update — we've just added a new flavour to our Dripl Refill Point: [FLAVOUR NAME]!

Head to [LOCATION] and try it out. As always, it's sugar-free, packaging-free and delicious.

Happy sipping!

[YOUR NAME]`,
  },
];

const posters = [
  {
    title: "What's Your Choice?",
    description: "Highlight the difference between sugary cans and healthy Dripl drinks.",
    image: posterChoice,
    downloadUrl: "/posters/Dripl_Poster-Choice.pdf",
  },
  {
    title: "Healthy Drinks, Zero Waste",
    description: "General poster showcasing Dripl's benefits: sugar-free, zero packaging, functional.",
    image: posterGeneral,
    downloadUrl: "/posters/ENG_Dripl_Posters-General.pdf",
  },
];

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
};

const ActivationSection = () => {
  const [openTemplate, setOpenTemplate] = useState<number | null>(null);

  return (
    <section id="activation" className="bg-secondary py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          Activation Material
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
          Ready-to-use templates and posters to announce Dripl at your workplace and keep the momentum going.
        </p>

        {/* Email Templates */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent p-2">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground">
              Email Templates
            </h3>
          </div>
          <p className="mb-8 max-w-lg text-sm text-muted-foreground">
            Copy these email templates and customise them with your company details. Replace the [BRACKETS] with your own info.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {emailTemplates.map((template, i) => (
              <div
                key={i}
                className="card-shadow flex flex-col rounded-xl bg-card overflow-hidden"
              >
                <div className="flex items-center justify-between border-b p-5">
                  <div>
                    <h4 className="font-display text-base font-semibold text-card-foreground">
                      {template.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                      Subject: {template.subject}
                    </p>
                  </div>
                  <FileText className="h-5 w-5 shrink-0 text-muted-foreground" />
                </div>
                <div className="flex-1 p-5">
                  {openTemplate === i ? (
                    <pre className="whitespace-pre-wrap text-xs leading-relaxed text-muted-foreground font-sans">
                      {template.body}
                    </pre>
                  ) : (
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {template.body.slice(0, 120)}…
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 border-t px-5 py-3">
                  <button
                    onClick={() => setOpenTemplate(openTemplate === i ? null : i)}
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    {openTemplate === i ? "Collapse" : "Preview full email"}
                  </button>
                  <div className="ml-auto flex gap-2">
                    <CopyButton text={`Subject: ${template.subject}\n\n${template.body}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Posters */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-accent p-2">
              <Image className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground">
              Posters & Signage
            </h3>
          </div>
          <p className="mb-8 max-w-lg text-sm text-muted-foreground">
            Print these posters and place them near your Refill Point or in common areas to drive awareness.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl">
            {posters.map((poster) => (
              <div
                key={poster.title}
                className="card-shadow group overflow-hidden rounded-xl bg-card"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={poster.image}
                    alt={`${poster.title} poster`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-lg font-semibold text-card-foreground">
                    {poster.title}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {poster.description}
                  </p>
                  <a
                    href={poster.image}
                    download={`dripl-poster-${poster.title.toLowerCase().replace(/\s/g, "-")}.jpg`}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download Poster
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivationSection;
