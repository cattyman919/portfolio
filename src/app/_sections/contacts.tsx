"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";
import { forwardRef, LegacyRef } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = forwardRef(function Contact(
  props,
  ref: LegacyRef<HTMLElement>
) {
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget as HTMLFormElement);
    // const emailData = formData.get("email");
    // const subjectData = formData.get("subject");
    // const messsageData = formData.get("message");
    //console.log(emailData, subjectData, messsageData);
  };

  return (
    <section ref={ref} id="contact" className="pb-10 overflow-x-hidden">
      <h1 className=" w-full mb-12 lg:mb-32 pt-4 text-6xl text-center lg:text-7xl  text-primary-accent font-bold animate-bounce">
        Contact
      </h1>
      <div className="grid grid-cols-1 gap-16  lg:gap-12 lg:grid-cols-2 text-2xl">
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
          <div className="flex items-center gap-4 h-full">
            <p className="text-primary-accent font-bold">
              Access my Resume Here
            </p>
            <Link
              href="https://seno-portfolio.s3.ap-southeast-1.amazonaws.com/Seno+Pamungkas+Rahman+-+CV.pdf"
              target="_blank"
              className="bg-primary-accent p-2 rounded-lg hover:scale-110 transition-transform text-white font-bold"
            >
              Resume
            </Link>
          </div>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-8 px-10 lg:px-0">
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
        </form>
      </div>
      <div>
        <FaArrowRightLong
          id="arrow"
          size={64}
          fill="none"
          className=" [&_path]:stroke-[20] [&_path]:[stroke-dasharray:1700] [&_path]:[stroke-dashoffset:1700] [&_path]:animate-path"
        />
        <svg width="64" height="64" viewBox="0 0 64 64">
          <path
            d="M32 0 L64 32 L32 64 L0 32 Z"
            fill="white"
            stroke="white"
            stroke-width="2"
          />
        </svg>
        <svg
          viewBox="0 0 256 256"
          width="256"
          height="256"
          fill="#03f"
          xmlns="http://www.w3.org/2000/svg"
          className="[&_path]:[stroke:#ffffff] [&_path]:stroke-[2] [&_path]:[stroke-dasharray:1700] [&_path]:[stroke-dashoffset:1700] [&_path]:animate-path"
          preserveAspectRatio="xMidYMid"
        >
          <path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" />
          <path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" />
        </svg>
        <svg
          viewBox="0 0 256 256"
          width="256"
          height="256"
          xmlns="http://www.w3.org/2000/svg"
          className="[&_path]:[stroke:#ffffff] [&_path]:stroke-[2] [&_path]:[stroke-dasharray:1700] [&_path]:[stroke-dashoffset:1700] [&_path]:animate-path"
          preserveAspectRatio="xMidYMid"
        >
          <path
            d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
            fill="#3178C6"
            stroke="#3178C6"
          />
          <path
            d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"
            fill="#FFF"
          />
        </svg>
      </div>
    </section>
  );
});

export default Contact;
