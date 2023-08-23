import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project7 from "../assets/images/project-7.png";
import project8 from "../assets/images/project-8.png";
import project9 from "../assets/images/project-9.png";
import project10 from "../assets/images/project-10.png";
import project11 from "../assets/images/project-11.png";
import project12 from "../assets/images/project-12.png";
import project13 from "../assets/images/project-13.png";
import project14 from "../assets/images/project-14.png";
import project15 from "../assets/images/project-15.png";
import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "../components/swiper/custom-swiper.css";

import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";



const Project = () => {
  const projects = [
    {
      img: project1,
      name: " Best weight loss Recipes",
      github_link: "https://github.com/farooqlagharikk",
      live_link: "https://gracioza.ancorathemes.com/home-2/",
    },
    {
      img: project2,
      name: "Job search Web App",
      github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
      live_link: "https://myjobsearch.netlify.app",
    },
    {
      img: project3,
      name: "Highking",
      github_link: "https://github.com/Sridhar-C-25/highking",
      live_link: "https://highking01.netlify.app",
    },
    {
      img: project4,
      name: "accelerate prosperity",
      github_link: "#",
      live_link: "https://accelerateprosperity.org/",
    },
  
    {
      img: project5,
      name: "Empowering Women Digitally",
      github_link: "#",
      live_link: "https://shedev.pk",
    },

    {
      img: project6,
      name: "Happy house Sitters",
      github_link: "https://github.com/farooqlagharikk",
      live_link: "https://olab-hhs-one.vercel.app/",
    },
    {
      img: project7,
      name: "zwayonline",
      github_link: "https://github.com/farooqlagharikk",
      live_link: "https://www.zwayonline.com/",
    },
    {
      img: project8,
      name: "truetxgerenergy",
      github_link: "https://github.com/farooqlagharikk",
      live_link: "http://truetxgerenergy.com/",
    },
   
    {
      img: project9,
      name: "abayasar fashion",
      github_link: "https://github.com/farooqlagharikk",
      live_link: "https://abayasarfashion.com/",
    },
    {
      img: project10,
      name: "Tech company",
      github_link: "#",
      live_link: "https://techscape.pk",
    },
    {
      img: project11,
      name: "Arona Soft",
      github_link: "#",
      live_link: "https://aronasoft.com/",
    },
    {
      img: project12,
      name: "Q pros Graphic Design",
      github_link: "#",
      live_link: "https://qprosgraphicdesign.com/",
    },
    {
      img: project13,
      name: "Ak Green Life",
      github_link: "#",
      live_link: "http://akgreenlife.com"
    },
    {
      img: project14,
      name: "Ak Orphan Relief",
      github_link: "#",
      live_link: "https://akorphanrelief.com"
    },
    {
      img: project15,
      name: "Solution Techscape",
      github_link: "#",
      live_link: "https://solutions.techscape.pk"
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex  gap-6 px-8 mx-auto items-center relative">
        <div className=" w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
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









