import React from "react";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  background: string;
  linkedIn: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  background,
  linkedIn,
  image,
}) => {
  return (
    <div className="team-member flex flex-col items-center mb-8">
      <div className="mb-4 w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
        <Image
          src={image}
          alt={`${name}'s Picture`}
          width={128}
          height={128}
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-black">{name}</h3>
      <p className="text-black text-center">{background}</p>
      <a
        href={linkedIn}
        className="text-blue-600 underline mt-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  );
};

const Teams: React.FC = () => {
  const teamMembers = [
    {
      name: "Dave Jaga",
      background: "Business, Economics, and Software Background",
      linkedIn: "https://www.linkedin.com/in/dave-jaga-96a003244/",
      image: "/dave.jpeg",
    },
    {
      name: "Brian Mbaji",
      background: "Software Engineering Background",
      linkedIn: "https://www.linkedin.com/in/brianmbaji",
      image: "/brian.jpeg",
    },
    {
      name: "Chukelu Egboga",
      background: "Software Engineering Background",
      linkedIn: "https://www.linkedin.com/in/chukeluegboga",
      image: "/chukelu.jpeg",
    },
  ];

  return (
    <div
      className="teams-container p-6 max-w-3xl mx-auto font-sans border-2 border-black bg-white"
      style={{ marginBottom: "70px", padding: "24px" }}
    >
      <h1 className="text-4xl font-bold text-center text-black mb-8">
        Our Team
      </h1>
      <div className="team-members flex flex-wrap justify-around">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            background={member.background}
            linkedIn={member.linkedIn}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Teams;
