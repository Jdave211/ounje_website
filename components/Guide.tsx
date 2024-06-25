import Image from "next/image";

const Guide = () => {
  return (
    <section id="guide" className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/cooking.png" alt="camp" width={50} height={40} />
        <p className="regular-18 -mt-1 mb-3 text-green-50">
          WE ARE HERE FOR YOU
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">How we work</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            We begin by understanding your needs, preferences, and nutritional
            requirements. Then you have to upload a picture of your fridge or
            pantry, and we will store the items in your virtual inventory. We
            will then suggest recipes based on your needs and the items in your
            inventory.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full h-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={280}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50"> 30 min</p>
              </div>
              <p className="bold-20 mt-2">Delicious meal</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start Track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Cluttered fridge
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
