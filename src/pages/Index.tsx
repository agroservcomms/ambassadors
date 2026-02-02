import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AmbassadorCard from "@/components/AmbassadorCard";
import { ambassadors } from "@/data/ambassadors";
import { ArrowRight, Users, Globe, Leaf } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-card-green via-background to-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">Agroecology Champions</span>
                <h1 className="heading-xl text-foreground mb-6">AgroServ Ambassadors</h1>
                <p className="body-text mb-8 max-w-lg">Through its Transnational/Virtual access calls for projects, AgroServ established a wide network of experts who are working to advance the agroecological transition. The Ambassadors Programme aims to promote and connect leading users across Europe to accelerate and strengthen their commitment to build a more sustainable future for European agriculture.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="#ambassadors" className="btn-primary">
                    Meet Our Ambassadors
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="https://agroserv.eu" target="_blank" rel="noopener noreferrer" className="btn-outline">
                    Learn More
                  </a>
                </div>
              </div>
              
              {/* Stats/Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold text-2xl text-foreground mb-1">50+ TNA users</h3>
                  <p className="text-sm text-muted-foreground">A wide network of researchers and practitioners </p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <Globe className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-bold text-2xl text-foreground mb-1">15+ countries</h3>
                  <p className="text-sm text-muted-foreground">International applicants</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm sm:col-span-2">
                  <Leaf className="w-8 h-8 text-accent-green mb-3" />
                  <h3 className="font-bold text-lg text-foreground mb-1">Driving Change</h3>
                  <p className="text-sm text-muted-foreground">
                    Supporting the agroecological transition through knowledge sharing, 
                    collaboration, and innovative research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg text-foreground mb-6">
              What is the Ambassadors Programme?
            </h2>
            <p className="body-text mb-8">
              The AgroServ Ambassadors Programme brings together distinguished researchers, 
              scientists, and practitioners from across Europe who are dedicated to advancing 
              sustainable agriculture. Our ambassadors serve as bridges between research 
              institutions, fostering collaboration and accelerating the adoption of 
              agroecological practices throughout the continent.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-card-green p-6 rounded-xl">
                <h3 className="font-semibold text-foreground mb-2">Knowledge Exchange</h3>
                <p className="text-sm text-muted-foreground">
                  Facilitating the sharing of research findings and best practices across borders.
                </p>
              </div>
              <div className="bg-card-orange p-6 rounded-xl">
                <h3 className="font-semibold text-foreground mb-2">Network Building</h3>
                <p className="text-sm text-muted-foreground">
                  Creating connections between institutions and researchers throughout Europe.
                </p>
              </div>
              <div className="bg-card-blue p-6 rounded-xl">
                <h3 className="font-semibold text-foreground mb-2">Impact Amplification</h3>
                <p className="text-sm text-muted-foreground">
                  Maximizing the reach and influence of agroecological research outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ambassadors Grid */}
        <section id="ambassadors" className="section-padding bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Successful Transnational/Virtual Access users</span>
              <h2 className="heading-lg text-foreground">Meet the first AgroServ Ambassadors</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {ambassadors.map(ambassador => <AmbassadorCard key={ambassador.id} {...ambassador} />)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">
              Join the AgroServ Network
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Are you an AgroServ user interested in becoming an AgroServ Ambassador or learning more about our Catalogue of Services? Get in touch.</p>
            <a className="inline-flex items-center gap-2 bg-background text-foreground font-semibold py-3 px-6 rounded-lg hover:bg-background/90 transition-colors" href="mailto:daniele.baldo@anaee.eu">
              REACH OUT 
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Index;