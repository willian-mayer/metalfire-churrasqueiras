import Hero from "@/components/hero";
import routesJson from "@/data/routes.json";
import { Route } from "@/types/routes";
import heroData from "@/data/hero.json";
import AboutUs from "@/components/Aboutus";
import AboutUsData from "@/data/about-us.json";
import ServiciosCarousel from "@/components/Services";
import data from "@/data/servicos.json"
import ContactSection from "@/components/ContactSection";
import contacts from "@/data/contact.json"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="snap-start">
        <Hero
          title={heroData.title}
          description={heroData.description}
          backgroundVideo={heroData.backgroundVideo}
          routes={routesJson as Route[]}
        />
      </section>
      <section className="snap-start"> 
      <ServiciosCarousel title={data.title} description={data.description} items={data.items} />;


      </section>
      <section className="snap-start">
        <AboutUs
          title={AboutUsData.title}
          description={AboutUsData.description}
          image1={AboutUsData.images1}
          image2={AboutUsData.images2}
          image3={AboutUsData.images3}
        />
      </section>
      <section className="snap-start">
      <ContactSection contacts={contacts} />;
      <Footer />
      </section>
    </div>
  );
}
