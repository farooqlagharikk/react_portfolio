import React from "react";
import hero from "../assets/images/me.png";
const Hero = () => {
  const social_media = [
    {
      icon: "logo-instagram",
      link: "https://instagram.com/farooq_laghari_kk82?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
    },
    {
      icon: "logo-facebook",
      link: "https://www.facebook.com/farooq.laghari.882",
    },
    {
      icon: "logo-linkedin",
      link: "https://www.linkedin.com/in/farooq-laghari-kk",
    },
    {
      icon: "logo-github",
      link: "https://github.com/farooqlagharikk",
    },
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
          <h1 className="md:text-5xl text-[40px] md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            This is{" "}
            <span className="text-[40px] text-cyan-600">Farooq Laghari</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Front-End & Wordpress Developer
          </h4>
          <a href="http://localhost:8001/contact">
          <button className="btn-primary mt-8">Contact Me</button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((val) => (
              <div
                key={val.icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={val.link} target="blank">
                  <ion-icon name={val.icon}></ion-icon>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
