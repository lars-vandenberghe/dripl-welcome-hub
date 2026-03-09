import { Droplets } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Droplets className="h-7 w-7 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">
            Dripl
          </span>
          <span className="ml-2 rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
            Customer Portal
          </span>
        </div>
        <nav className="hidden gap-6 md:flex">
          {["Getting Started", "Product", "Ordering", "FAQ", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
