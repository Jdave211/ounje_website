import React from "react";

const PartnershipWorkshop = () => {
  return (
    <div
      id="partnership-workshop"
      className="p-6 max-w-3xl mx-auto font-sans border-2 border-black bg-gray-200"
      style={{ marginBottom: "60px", padding: "24px" }}
    >
      <h1 className="text-4xl font-bold text-center text-black mb-8">
        Partnership & Workshops
      </h1>
      <p className="text-black text-center mb-8">
        If you would like to partner with us or have us host a workshop, reach
        out at our contact info:
      </p>
      <p className="text-black text-center mb-4">
        Email:{" "}
        <a href="mailto:thisisounje@gmail.com" className="underline">
          thisisounje@gmail.com
        </a>
      </p>
      <p className="text-black text-center">
        Phone:{" "}
        <a href="tel:+14168712611" className="underline">
          416-871-2611
        </a>
      </p>
    </div>
  );
};

export default PartnershipWorkshop;
