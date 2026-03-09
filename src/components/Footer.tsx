import driplLogo from "@/assets/dripl-logo.svg";

const Footer = () => {
  return (
    <footer className="border-t bg-card py-8">
      <div className="container mx-auto flex flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:text-left">
        <img src={driplLogo} alt="Dripl" className="h-5" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dripl. Healthy drinks, without the packaging.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
