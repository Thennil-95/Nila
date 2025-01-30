import React from "react";
import hero from "../assets/images/hero.png";

const Hero = () => {
  const social_media = [
   // { icon: "logo-instagram", link: "https://www.instagram.com/" },
    { icon: "logo-facebook", link: "https://web.facebook.com/?_rdc=1&_rdr#" },
    { icon: "logo-linkedin", link: "https://www.linkedin.com/in/thennila-mathimaaran-99ba80277/" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I´m <span>Thennila Mathimaaran</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Undergraduate Information Technology  <br />
            student at University of Kelaniya
          </h4>
          <a href="#contact">
            <button className="btn-primary mt-8">Contact Me</button>
          </a>

          <div className="mt-3 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media.map((item) => (
              <a
                key={item.icon}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={item.icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
