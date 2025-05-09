import Hero from "@/components/hero";
import routesJson from "@/data/routes.json";
import { Route } from "@/types/routes";
import heroData from "@/data/hero.json";
import AboutUs from "@/components/Aboutus";
import AboutUsData from "@/data/about-us.json";
import Whatsapp from "@/components/Whatsapp";
import whatsappData from "@/data/whatsapp.json";

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
        <AboutUs
          title={AboutUsData.title}
          description={AboutUsData.description}
          image1={AboutUsData.images1}
          image2={AboutUsData.images2}
          image3={AboutUsData.images3}
        />
      </section>
      <section className="snap-start">
        <Whatsapp
          {...whatsappData}
        />
      </section>
    </div>
  );
}
