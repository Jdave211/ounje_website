import Image from "next/image";
import Button from "./Button";
const Hero = () => {
  return (
    <section
      id="home"
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
    >
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Ounje</h1>
        <h2 className="bold-36 lg:bold-52 text-blue-70">Home of food</h2>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to take you on a journey of exciting recipes origininating
          from different countries and cultures right in your very own kitchen.
          We can help you save money on groceries, reduce food waste, and
          explore the world through food.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            {" "}
            100+ Excellent Reviews
          </p>
        </div>

        <div className="flex flex-col  w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Download App"
            variant="btn_green"
            link="https://apps.apple.com/ca/app/ounje/id6504951799"
          />
          <Button
            type="button"
            title="Try a feature?"
            icon="/play.svg"
            variant="btn_white_text"
            link="#generaterecipe"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Recipe</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Jollof Rice</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regualar-16 block text-gray-20">Prep Time</p>
              <p className="bold-20 text-white">60 m</p>
            </div>
            <div className="flex flex-col">
              <p className="regualar-16 block text-gray-20">Servings</p>
              <p className="bold-20 text-white">5 plates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
