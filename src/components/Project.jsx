import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Second Hand Book Market Place",
      github_link: "https://github.com/",
    },
    {
      img: project2,
      name: "Vehicle Rental Mobile App UI design",
      github_link:
        "https://www.figma.com/proto/b9tVo91vS0tamPKjCChB3W/One?node-id=7-1782&p=f&t=urvMqzlG9JcXjKFB-1&scaling=min-zoom&content-scaling=fixed&page-id=7%3A1474",
    },
    {
      img: project3,
      name: "E-Commerce Website UI design",
      github_link:
        "https://www.figma.com/proto/b9tVo91vS0tamPKjCChB3W/One?node-id=7-15848&p=f&t=bmHoGAPpjTN1bG6s-1&scaling=scale-down-width&content-scaling=fixed&page-id=7%3A6627",
    },
    {
      img: project4,
      name: "ERP Website UI design",
      github_link:
        "https://www.figma.com/proto/b9tVo91vS0tamPKjCChB3W/One?node-id=7-424&p=f&t=FhILa9Hr7YQDYHfO-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
    },
    {
      img: project5,
      name: "ePOS UI design",
      github_link:
        "https://www.figma.com/proto/b9tVo91vS0tamPKjCChB3W/One?node-id=7-26988&p=f&t=w0WcKsdVLp2djk3w-1&scaling=scale-down-width&content-scaling=fixed&page-id=7%3A19473",
    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg"></p>
      </div>
      <br />
      <div className="flex justify-center max-w-full px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={3} // Show 3 projects at a time
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3, // Show 3 projects on larger screens
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination", // Adding custom pagination class
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-[400px] w-full p-4 bg-slate-700 rounded-xl flex flex-col items-center">
                  {/* Image with fixed height */}
                  <img
                    src={project_info.img}
                    alt=""
                    className="rounded-lg w-full h-[200px] object-cover"
                  />
                  <h3 className="text-xl my-4 text-center">{project_info.name}</h3>
                  <div className="mt-auto">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-md"
                    >
                      Link
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
