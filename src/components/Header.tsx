import { Link } from "react-router-dom";
import agroservLogo from "@/assets/agroserv-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="px-5 md:px-12 lg:px-20 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={agroservLogo} 
              alt="AgroServ" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="https://agroserv.eu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              About AgroServ
            </a>
            <a 
              href="#ambassadors"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Our Ambassadors
            </a>
            <a 
              href="#contact"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* CTA */}
          <a 
            href="https://agroserv.eu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Visit AgroServ
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
