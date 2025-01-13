import React from 'react';

import Edem from '../assets/Team/pro.jpeg'
import Skepta from '../assets/Team/skepta.jpg'
import Eric from '../assets/Team/eric.jpg'
import Derrick from '../assets/Team/derrick.jpg'
import User from '../assets/Team/user.jpg'
import Riches from '../assets/Team/riches.jpg'
//import Bismark from '../assets/Team/pro.jpeg'


interface Member {
  id: number;
  name: string;
  technologies: string;
  image?: string;
  github?: string;
  linkedIn: string;
  field: string;
  gravatar?:string;
  portfolio?:string;
}

const members: Member[] = [
  {
    id: 1,
    name: "Danku Kennedy Edem",
    technologies: "HTML,CSS, PHP, Laravel, React, Node.js, TypeScript, Express.js",
    image: Edem,
    github: "https://github.com/dankukennedy",
    linkedIn: "https://www.linkedin.com/in/kennedy-edem-danku-839108137/",
    field: "Full-Stack Developer",
    gravatar:"https://gravatar.com/happilywise8526b101c9",
    portfolio:"https://dankukennedy.github.io/portfolio/",
  },
  {
    id: 2,
    name: "Prosper Paul Lawer",
    technologies: "HTML, PHP, CSS, React Native, React.js",
    image: Skepta,
    github: "https://github.com/1skepta",
    linkedIn: "https://www.linkedin.com/in/paul-prosper-lawer-23419021a/",
    field: "Frontend Developer",
  },
  {
    id: 3,
    name: "Eric Boateng",
    technologies: "HTML, CSS, JavaScript, React",
    image: Eric,
    github: "https://github.com/Ricky4412",
    linkedIn: "https://www.linkedin.com/in/eric-boateng-9511b32b2/",
    field: "Frontend Developer",
  },
  
  {
    id: 4,
    name: "Derrick Owusu",
    technologies: "HTML, CSS, JavaScript",
    image: Derrick,
    github: "#",
    linkedIn: "#",
    field: "Frontend Developer",
  },
  {
    id: 5,
    name: "Bismark Labi",
    technologies: "Marketing manager",
    image: User,
    //github: "#",
    linkedIn: "#",
    field: "Project Manager",
  },
  {
    id: 6,
    name: "Riches Amissah Nunoo",
    technologies: "Audit",
    image: Riches,
    //github: "#",
    linkedIn: "https://www.linkedin.com/in/riches-nunoo-b46664301/",
    field: "Finance Manager",
  },
];

const Team: React.FC = () => {
  return (
    <div className="bg-gradient-to-r  from-black to-blue-950 py-2" id='team'>
      <div className="container px-8 mx-auto md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold text-center text-white m-6 font-serif ">Our Team Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-gradient-to-r from-indigo-600 to-blue-900 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt="profile"
                  className="rounded-md mb-4 w-42 h-37 object-cover mx-auto"
                />
              ) : (
                <div className="rounded-full mb-4 w-32 h-32 bg-gray-600 flex items-center justify-center text-gray-300 mx-auto font-serif">
                  No Image Available
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-white text-center font-serif">{member.name}</h3>
              <h4 className="text-xl font-semibold mb-2 text-white text-center font-serif">{member.field}</h4>
              <p className="text-gray-400 mb-4 text-center font-serif">{member.technologies}</p>
              <div className="flex justify-center space-x-2 flex-wrap  gap-2">
                {member.github && (
                  <a
                    href={member.github}
                    className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-serif"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {member.linkedIn && (
                  <a
                    href={member.linkedIn}
                    className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-serif"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                )}
                {member.portfolio && (
                  <a
                    href={member.portfolio}
                    className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-serif"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                     Portfolio
                  </a>
                )}
                {member.gravatar && (
                  <a
                    href={member.gravatar}
                    className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-serif"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gravatar
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
