import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      logo: "code", // Logo for Development
      title: "Development",
      skills: [
        "React",
        "Laravel",
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
      ],
    },
    {
      logo: "stats-chart", // Logo for Data Science
      title: "Data Science",
      skills: [
        "Python",
        "R",
        "Power BI",
        "Pandas",
        "Orange",
        "MS Excel",
        "R Studio",
      ],
    },
    {
      logo: "brush", // Logo for UI/UX Design
      title: "UI/UX Design",
      skills: [
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Prototyping",
        "Canva",
        "Adobe XD",
      ],
    },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center">
              <ion-icon
  name={category.logo}
  style={{ fontSize: "4rem" }}
  className="text-cyan-600 transition-all duration-300 hover:text-cyan-400"
></ion-icon>

              </div>
              <h4 className="text-2xl font-semibold text-cyan-600 mb-4 transition-all duration-300 hover:text-cyan-400">
                {category.title}
              </h4>
              <ul className="text-gray-400 text-lg">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="mb-2 transition-all duration-300 hover:text-cyan-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
