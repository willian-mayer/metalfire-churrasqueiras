import Hero from "@/components/hero";
import routesJson from "@/data/routes.json"
import { Route } from "@/types/routes"
import heroData from "@/data/hero.json"

export default function Home() {
  return (
    <div>
      <Hero
          title={heroData.title}
          description={heroData.description}
          backgroundVideo={heroData.backgroundVideo}
          routes={routesJson as Route[]} 
        />
    </div>
  );
}
