import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card py-8">
      <div className="container mx-auto flex flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2">
          <Droplets className="h-5 w-5 text-primary" />
          <span className="font-display text-sm font-semibold text-foreground">
            Dripl
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dripl. Healthy drinks, without the packaging.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
