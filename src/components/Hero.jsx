import { curve } from "../assets";
import Section from "./Section";

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      id="Hero"
      customPadding
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center md:mb:20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the possibilities Of AI chatting with brainwaveCurve
            <span className="inline-block relative">
              Brainwave
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl">
            Unleash the power of AI within brainwave. Upgrade your productivity
            with brainwave,The open AI chat app
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
