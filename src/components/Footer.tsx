import agroservLogo from "@/assets/agroserv-logo.png";
const Footer = () => {
  const quickLinks = [{
    label: "About AgroServ",
    href: "https://agroserv.eu/about"
  }, {
    label: "Research Services",
    href: "https://agroserv.eu/research-services/explore-our-catalogue"
  }, {
    label: "News",
    href: "https://agroserv.eu/news"
  }];
  const socialLinks = [{
    label: "LinkedIn",
    href: "https://linkedin.com/company/agroserv"
  }];
  return <footer id="contact" className="bg-foreground text-background">
      <div className="px-5 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img alt="AgroServ" className="h-32 w-auto object-cover saturate-100 brightness-100 " src="/lovable-uploads/161fd4b7-4ea8-45a1-b89e-6c6442c931f7.png" />
            <p className="text-background/70 text-sm max-w-md leading-relaxed">
              The AgroServ Ambassadors Programme connects leading researchers and 
              institutions across Europe to accelerate the agroecological transition 
              and promote sustainable food systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-header text-background">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-background/70 hover:text-secondary transition-colors">
                  {link.label}
                </a>)}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="footer-header text-background">Connect</h3>
            <nav className="flex flex-col gap-2">
              {socialLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-background/70 hover:text-secondary transition-colors">
                  {link.label}
                </a>)}
              <a href="mailto:ambassadors@agroserv.eu" className="text-sm text-background/70 hover:text-secondary transition-colors">
            </a>
            </nav>
          </div>
        </div>

        {/* EU Funding Notice */}
        <div className="mt-12 pt-6 border-t border-background/20">
          <p className="text-xs text-background/60 text-center md:text-left bg-transparent font-sans">This project has received funding from the European Union’s Horizon Europe research and innovation programme under grant agreement No. 101058020 (AgroServ). Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Research Executive Agency (REA). Neither the European Union nor the granting authority can be held responsible for them.</p>
          <p className="text-xs text-background/40 text-center md:text-left mt-2">© 2026 AgroServ</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
