import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the Refill Point work?",
    a: "The Refill Point connects to your building's water supply and filters the water on-site. Simply choose a flavour on the screen, hold your bottle or cup under the tap, and enjoy a fresh, healthy drink.",
  },
  {
    q: "How often does the machine need maintenance?",
    a: "Our team handles all maintenance. We perform regular check-ups and replace filters as needed. You don't have to worry about a thing.",
  },
  {
    q: "What if the machine breaks down?",
    a: "Contact our support team immediately. We aim to resolve all issues within 24 hours during business days.",
  },
  {
    q: "Can we change or add flavours?",
    a: "Absolutely! You can swap flavours at any time when ordering new cartridges. We regularly introduce new flavours too.",
  },
  {
    q: "Is there a minimum contract period?",
    a: "Please check your specific agreement or contact your account manager for details about your contract terms.",
  },
  {
    q: "How do I clean the dispensing area?",
    a: "Simply wipe the drip tray and nozzle area with a damp cloth daily. Our team handles the deep cleaning during scheduled maintenance visits.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-secondary py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
          Quick answers to common questions.
        </p>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border bg-card px-6 card-shadow"
            >
              <AccordionTrigger className="text-left font-medium text-card-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
