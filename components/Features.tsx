"use client";

import { FEATURES } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { RECIPE } from "@/constants/prompts";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const Features = () => {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState<string[] | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState(false);

  const handleGenerateRecipes = async () => {
    const lastRequestTime = localStorage.getItem("lastRecipeRequestTime");
    const currentTime = Date.now();

    if (
      lastRequestTime &&
      currentTime - parseInt(lastRequestTime) < 24 * 60 * 60 * 1000
    ) {
      alert(
        "You can only request one recipe every 24 hours. Please try again later.",
      );
      return;
    }

    if (!ingredients.trim()) {
      setInputError(true);
      return;
    }

    setLoading(true);
    setShowModal(true);

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `Generate 1 exciting recipe with these criteria: ${RECIPE}. You do not have to use all the ingredients for this particular recipe. Fix up the format (embolden titles, index ingredients and stuff like that). Check for dangerous items and remove them from consideration. If there are no edible ingredients to use, return 'no recipe found'. Use the following ingredients: ${ingredients}`,
          },
        ],
      });

      const message = completion.choices?.[0]?.message?.content?.trim();
      if (message) {
        const cleanedMessage = message.replace(/\*\*/g, ""); // Remove all double asterisks
        setRecipes([cleanedMessage]);
        console.log(cleanedMessage); // Log the cleaned recipe
      } else {
        setRecipes(["No recipes found."]);
      }
      localStorage.setItem("lastRecipeRequestTime", currentTime.toString());
    } catch (error) {
      console.error("Error generating recipes:", error);
      setRecipes(["Error generating recipes. Please try again."]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleGenerateRecipes();
    }
  };

  const handleFocus = () => {
    setInputError(false);
  };

  return (
    <section
      id="features"
      className="mr-28 flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24"
    >
      <div className="max-container padding-container relative w-full flex justify-between">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/inventory.png"
            alt="phone"
            width={590}
            height={10}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[50%]">
          <div className="relative">
            <Image
              src="/cooking.png"
              alt="pan"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-32px] w-10 lg:w-[50px] lg:top-[-36px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul
            id="generaterecipe"
            className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20"
          >
            {FEATURES.map((feature) => (
              <FeatureItem
                title={feature.title}
                key={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
          <div className="mt-20 w-11/12 mx-auto flex items-center">
            <input
              type="text"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={handleFocus}
              placeholder="Enter your ingredients"
              className={`p-2 border rounded-lg w-full size-full text-center shadow-sm focus:shadow-lg transition-shadow duration-200 focus:outline-none ${
                inputError
                  ? "border-red-500 border-2"
                  : "border-gray-10 focus:border-green-500"
              }`}
              style={{ borderRadius: "15px", margin: "10px 0" }}
            />

            <button
              onClick={handleGenerateRecipes}
              className="ml-2 p-2 bg-green-500 text-white rounded-full"
              style={{
                height: "40px",
                width: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>&#10148;</span>
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full md:w-4/5 lg:w-3/5 mt-15 mb-15 overflow-y-auto h-3/4">
            <h2 className="text-xl font-bold mb-4">Your Generated Recipe</h2>
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="loader"></div>{" "}
                {/* Replace this with any loader you like */}
                <p>Loading...</p>
              </div>
            ) : (
              <div>
                {recipes && recipes.length > 0 ? (
                  recipes.map((recipe, index) => (
                    <div key={index} className="mb-4">
                      <pre className="whitespace-pre-wrap">
                        <strong>{recipe}</strong>
                      </pre>
                    </div>
                  ))
                ) : (
                  <p>No recipes found.</p>
                )}
              </div>
            )}
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 p-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt={title} width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 bg-white/80 mt-5 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
