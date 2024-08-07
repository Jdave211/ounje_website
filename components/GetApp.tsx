import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section id="download" className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get it for free!
          </h2>
          <p className="regular-16 text-gray-10">
            Coming soon to Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
              link="https://apps.apple.com/ca/app/ounje/id6504951799"
            />
            <Button
              type="button"
              title="Give us feedback"
              icon="/ideas.png"
              variant="btn_dark_green_outline"
              full
              link="https://tally.so/r/mZdrez"
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/welcome-recipe.png"
            alt="phones"
            width={700}
            height={700}
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
