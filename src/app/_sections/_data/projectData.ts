import { ProjectCardProps, ProjectModalProps } from "../_types/projectType";
import RestomaticImage from "@/public/images/projects/restomatic.png";
import DanceRTOSImage from "@/public/images/projects/Attendance.png";
import JagaImage from "@/public/images/projects/jaga.png";
import VaultLockImage from "@/public/images/projects/electronicVault.png";

export const ProjectData: ProjectCardProps[] = [
  {
    title: "Restomatic",
    description:
      "A web platform for easy food and drink ordering. Users can browse restaurant menus, add funds, and leave ratings.",
    date: "May 2023",
    languages: ["typescript", "tailwindcss", "react", "nextjs"],
    image: RestomaticImage,
    github_repo: "https://github.com/SistemBasisData2023/RestoMatic",
  },
  {
    title: "DanceRTOS",
    description:
      "An attendance system using FreeRTOS ESP32 and RFID, with a web server and Blynk integration for class and schedule management.",
    date: "December 2023",
    languages: ["typescript", "nestjs", "dart", "flutter"],
    image: DanceRTOSImage,
    github_repo: "https://github.com/cattyman919/AbsenceSystem",
  },
  {
    title: "Jaga",
    description:
      "A vehicle maintenance app with GPS tracking to monitor kilometers and notify users of service needs based on distance and time.",
    date: "November 2023",
    languages: ["typescript", "nestjs", "dart", "flutter"],
    image: JagaImage,
    github_repo: "https://github.com/cattyman919/Jaga",
  },
  {
    title: "Electronic Vault Lock",
    description:
      "A secure 4-digit combination lock for protecting items, offering a simple and reliable locking mechanism.",
    date: "Nov 2022",
    image: VaultLockImage,
    github_repo: "https://github.com/rroiii/Electronic-Vault-Lock",
  },
];

export const DetailedProjectData: ProjectModalProps[] = [
  {
    title: "Restomatic",
    detailed_description:
      "RestoMatic is a user-friendly web platform designed to simplify and streamline the process of ordering food and drinks from various restaurants. The platform offers users a convenient way to navigate through a wide range of restaurants, each with its own unique menu. Additionally, users can add funds to their balance to make payments and share their experiences by leaving ratings and reviews for specific restaurants.",
    contribution: [
      "Frontend Development: Led the frontend development of the RestoMatic project, creating an intuitive and user-friendly interface.",
      "Login and Sign Up Pages: Designed and implemented the login and sign up pages, ensuring a smooth user experience from the very beginning.",
      "Restaurant Listing: Developed the list of restaurants feature, allowing users to effortlessly browse through a wide range of restaurant options.",
      "Filter Feature: Created a filter feature on the frontend side, enabling users to find menus based on ratings and discover the most highly regarded dishes and drinks.",
      "Order Carts: Built the Order Carts functionality, providing a clear and concise overview of selected items, their quantities, and total prices.",
      "Payment System: Implemented the payment system, performing thorough checks to verify whether the customer’s balance is adequate for payment and preventing customers from placing orders without having sufficient funds.",
    ],
    credits: [
      {
        name: "Althaf Nafi Anwar",
        github: "https://github.com/althafnafi",
        linkedIn: "https://www.linkedin.com/in/althafnafi",
      },
      {
        name: "Zalfy Putra Rezky",
        github: "https://github.com/zalfyputra",
        linkedIn: "https://www.linkedin.com/in/zalfyputra/",
      },
    ],
  },
  {
    title: "DanceRTOS",
    detailed_description:
      "Leveraging FreeRTOS ESP32 and RFID technology, this project offers a sophisticated attendance system integrated with a web server for efficient tracking and management, while also offering Blynk to be used by officers responsible for changing class and week the device is installed.",
    contribution: [
      "Fullstack Development: Led the fullstack development of the AbsenceSystem (DanceRTOS) project, creating both the frontend and backend infrastructure.",
      "Login and Sign Up Pages: Designed and implemented the login and sign up pages for lecturers, ensuring a smooth user experience from the very beginning.",
      "Student Login: Developed a unique student login system using MQTT protocol with Flutter to connect to ESP32 using RFID, providing a seamless and secure login experience for students.",
      "Data Collection: Created a system to collect data from the backend to track student absences, enabling lecturers to see which students are not in class.",
      "Absence Tables: Implemented a feature where each class has its own absence table for students for specific weeks, providing a clear and organized view of student attendance.",
      "Collaboration: Worked in collaboration with a team member who created the IoT hardware for the RFID absence system, demonstrating teamwork and cross-functional collaboration.",
    ],
    credits: [
      {
        name: "Satya Ananda",
        github: "https://github.com/styxnanda",
        linkedIn: "https://www.linkedin.com/in/satyaand/",
      },
      {
        name: "Akmal Rabbani",
        github: "https://github.com/Akmalrbn",
        linkedIn: "https://www.linkedin.com/in/akmal-rabbani-8a76bb235/",
      },
    ],
  },
  {
    title: "Jaga",
    detailed_description:
      "Jaga is an innovative vehicle maintenance reminder application. By leveraging GPS tracking technology, Jaga is capable of collecting kilometer data from user vehicles. The application not only gathers information but also has the ability to determine the appropriate time for vehicle servicing. This decision is based on both the distance traveled and the time elapsed since the last maintenance. Thus, Jaga provides an intelligent solution to ensure that vehicles are always in optimal condition and safe on the road.",
    contribution: [
      "Fullstack Development: Led the fullstack development of the Jaga project using Flutter and NestJS, creating both the frontend and backend infrastructure.",
      "Data Collection: Created a system to collect data from the backend to get car model and car maintenance information, providing users with the necessary details for their vehicles.",
      "Maintenance Reminder: Developed the main function of the app to keep the car/motorcycle data for maintenance reminder, helping users to stay on top of their vehicle maintenance schedules.",
      "Multiple Vehicles: Implemented a feature that allows users to create multiple car/motorcycle entries for maintenance, catering to users with more than one vehicle.",
      "Collaboration: Worked in collaboration with a team member who created the IoT hardware EPS32 for GPS tracking, demonstrating teamwork and cross-functional collaboration.",
    ],
    credits: [
      {
        name: "Roy Oswalda",
        github: "https://github.com/rroiii",
        linkedIn: "https://www.linkedin.com/in/royoswaldha/",
      },
      {
        name: "Eldisja Hadasa",
        github: "https://github.com/Eldisja",
        linkedIn: "https://www.linkedin.com/in/eldisja-hadasa/",
      },
    ],
  },
  {
    title: "Electronic Vault Lock",
    detailed_description:
      "A combination lock is a tool used to lock an item to ensure security for the item. The combination lock can be in the form of a 4 digit combination, where the user must enter the correct 4 digit combination so that the lock can be opened. This combination lock is very useful, because the mechanism is simple but safe.",
    contribution: [
      "Played a pivotal role in developing the VHDL code, ensuring the system's functionality and reliability.",
      "Contributed to creating and executing simulations on ModelSim, verifying the system's performance under various scenarios.",
      "Led the synthesis of the system in Quartus, optimizing for efficiency and effectiveness.",
      "Participated in the project's documentation and presentation, including producing a detailed video explanation, showcasing the project's value and application.",
      "Collaborated in a team to engineer an innovative Electronic Vault Lock system, enhancing security through a 4-digit combination mechanism.",
    ],
    credits: [
      {
        name: "Roy Oswalda",
        github: "https://github.com/rroiii",
        linkedIn: "https://www.linkedin.com/in/royoswaldha/",
      },
      {
        name: "Akmal Rabbani",
        github: "https://github.com/Akmalrbn",
        linkedIn: "https://www.linkedin.com/in/akmal-rabbani-8a76bb235/",
      },
      {
        name: "Sulthan Satrya Yudha Darmawan",
        github: "https://github.com/Sulsyd",
        linkedIn:
          "https://www.linkedin.com/in/sulthan-satrya-yudha-darmawan-4bb705178/",
      },
    ],
  },
];
