import Image from "next/image";
import { Button } from "./ui/button";

const PopularCategories = () => {
  return (
    <div className="px-12">
      <h1 className="text-center pb-8 text-xl">Popular Categories</h1>

      <div className="grid grid-cols-3 gap-16">
        <div>
          <Image src="/sainz.png" alt="sainz" width={435} height={138} />
          <h2 className="py-4 font-bold">
            New Season Chaos: Where Will Sainz Land in 2025?
          </h2>
          <p className="pb-4">
            With Carlos Sainz leaving Ferrari, the driver market is in turmoil.
            We explore the potential landing spots for the talented Spaniard,
            from Audi's ambitious project to possible openings at other top
            teams
          </p>
          <Button variant="link">Read More</Button>
        </div>

        <div>
          <Image src="/kimi.png" alt="sainz" width={435} height={138} />
          <h2 className="py-4 font-bold">
            The Rise of Antonelli, Mercedes' Next Star
          </h2>
          <p className="pb-4">
            With Lewis Hamilton departing, Mercedes is looking to the future.
            Kimi Andrea is generating massive buzz. We explore his junior
            career, his potential, and whether he could be the next big thing
            for the Silver Arrows
          </p>
          <Button variant="link">Read More</Button>
        </div>

        <div>
          <Image src="/william.png" alt="sainz" width={435} height={138} />
          <h2 className="py-4 font-bold">2026 Power Unit Revolution</h2>
          <p className="pb-4">
            The 2026 F1 regulations are bringing massive changes to power units.
            We break down the technical innovations, the challenges for teams,
            and how these changes could dramatically alter the competitive
            landscape
          </p>
          <Button variant="link">Read More</Button>
        </div>

        <div className="flex flex-col w-full">
          <div className="relative h-50 w-full">
            <Image
              src="/lando.png"
              alt="lando norris"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="py-4 font-bold">
              McLaren's Miami Miracle Challenges Red Bull
            </h2>
            <p className="pb-4">
              Lando Norris's stunning victory in Miami has ignited the F1
              season. We analyze McLaren's upgrades, their race pace, and
              whether they pose a genuine threat to Red Bull's dominance. Dive
              into the strategy and driving that led to this historic win
            </p>
            <Button variant="link">Read More</Button>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="relative h-50 w-full">
            <Image
              src="/sf25.png"
              alt="scuderia ferrari"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="py-4 font-bold">
              How Ferrari Outsmarted the Field in Monaco
            </h2>
            <p className="pb-4">
              The Monaco Grand Prix is a tactical minefield. We dissect
              Ferrari's winning strategy, analyzing their pit stops, tire
              management, and crucial decisions that secured victory. Did they
              capitalize on luck, or was it pure strategic brilliance?
            </p>
            <Button variant="link">Read More</Button>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="relative h-50 w-full">
            <Image
              src="/verstappen.png"
              alt="verstappen"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="py-4 font-bold">
              Verstappen in Shifting the F1 Narrative Itself
            </h2>
            <p className="pb-4">
              While the spotlight shines on his on-track victories, Verstappen's
              influence extends far beyond the podium. Examining how his
              approach to racing, technology, and team dynamics, we look at how
              he is changing the sport, without always making loud statements
            </p>
            <Button variant="link">Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
