"use client";

import Image from "next/image";

type ButtonPromps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: Boolean;
  link?: string;
};

const Button = ({ type, title, icon, variant, full, link }: ButtonPromps) => {
  const handleClick = () => {
    if (link) {
      if (link.startsWith("#")) {
        // Handle internal link
        window.location.hash = link;
      } else {
        // Handle external link
        window.open(link, "_blank");
      }
    }
  };

  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && "w-full"}`}
      type={type}
      onClick={handleClick}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
