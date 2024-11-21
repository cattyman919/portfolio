"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
// import { FaPaperPlane } from "react-icons/fa";
import { forwardRef, LegacyRef } from "react";
import { FaInstagram } from "react-icons/fa";

const Contact = forwardRef(function Contact(
  props,
  ref: LegacyRef<HTMLElement>
) {
  // const onSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   // const formData = new FormData(event.currentTarget as HTMLFormElement);
  //   // const emailData = formData.get("email");
  //   // const subjectData = formData.get("subject");
  //   // const messsageData = formData.get("message");
  //   //console.log(emailData, subjectData, messsageData);
  // };

  return (
    <section ref={ref} id="contact" className="pb-10 overflow-x-hidden">
      <h1 className=" w-full mb-12 lg:mb-32 pt-4 text-6xl text-center lg:text-7xl  text-primary-accent font-bold animate-bounce">
        Contact
      </h1>
      <div className="grid grid-cols-1 gap-16 items-center  lg:gap-12 lg:grid-cols-2 text-2xl">
        <div className="flex flex-col gap-8 lg:gap-0  lg:justify-between px-10 lg:px-0 lg:pr-8">
          <div className="flex flex-col gap-6">
            <h4 className="text-primary-accent font-bold text-4xl">
              {"Let's connect"}
            </h4>
            <p className="text-justify leading-10">
              {
                "I welcome your inquiries and connections! Please don't hesitate to reach out to me via email or connect with me on LinkedIn and Github"
              }
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/cattyman919" target="_blank">
                <FaGithub className="w-[48px] h-[48px] hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/seno-pamungkas-rahman-714341192"
                target="_blank"
              >
                <FaLinkedin className="w-[48px] h-[48px] hover:scale-110 transition-transform" />
              </Link>
              <Link href="https://www.instagram.com/senohebat/" target="_blank">
                <FaInstagram className="w-[48px] h-[48px] hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="mailto:senopamungkasraehman@gmail.com"
                target="_blank"
              >
                <IoMdMail className="w-[48px] h-[48px] hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        {/* <form onSubmit={onSubmit} className="flex flex-col gap-8 px-10 lg:px-0">
          <h3 className="text-4xl text-center text-primary-accent font-bold">
            {"Send me a message :)"}
          </h3>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                required
                type="email"
                placeholder="yourgmail@gmail.com"
                className="p-2 rounded-lg placeholder:text-lg text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                required
                type="text"
                placeholder="Hello Seno, I want to introduce myself"
                className="p-2 rounded-lg placeholder:text-lg text-black"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your message..."
                className="h-[250px] p-2 rounded-lg placeholder:text-lg text-black"
              />
            </div>
            <button
              type="submit"
              className={` bg-primary-accent p-2 rounded-lg hover:bg-white hover:text-primary-accent transition-colors text-white font-bold`}
            >
              <div className="relative w-fit mx-auto">
                <p>Send Message</p>
                <FaPaperPlane className="absolute w-[24px] h-[24px] right-0 top-1/2 -translate-y-1/2 translate-x-[120%]" />
              </div>
            </button>
          </div>
        </form> */}
      </div>
    </section>
  );
});

export default Contact;
