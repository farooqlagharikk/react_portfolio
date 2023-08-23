import React, { useState } from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "Farooqlgahri82@gmail.com" },
    { logo: "logo-whatsapp", text: "+923110541871" },
    {
      logo: "location",
      text: "Zulfiqarabad Gilgit Baltistan",
    },
  ];

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formspree.io/f/xeqbgzgq", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            className="flex flex-col flex-1 gap-5"
            onSubmit={handleSubmit}
          >
            <input type="text" placeholder="Your Name" name="name" />
            <input type="email" name="_replyto" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" rows={10} name="message"></textarea>
            {isSubmitted ? (
              <p className="text-green-500">Thank you for your message!</p>
            ) : (
              <button type="submit" className="btn-primary w-fit">Send Message</button>
            )}
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
