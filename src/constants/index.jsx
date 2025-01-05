import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/Portfolio.gif";
import projectImage2 from "../assets/Database_Mgmt.gif";
import projectImage3 from "../assets/Mobile_Application.gif";
import projectImage4 from "../assets/File_Structure.gif";
import projectImage5 from "../assets/IOT_Project.gif";
// import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { DiCss3, DiDjango, DiHtml5, DiJava, DiMysql, DiPython } from "react-icons/di";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  // { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "MOHAMMED FAHEEM ADIL",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web pages.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "My Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information. I hope you liked it.",
    image: projectImage1,
    githubLink: "",
  },
  {
    id: 2,
    name: "Database Management System Mini Project",
    description:
      "Created a database management system (DBMS) for an online bike rental management system that streamlined the payment, search, and booking procedures. Added User administration features to the comprehensive operational control system.",
    image: projectImage2,
    githubLink: "https://github.com/Mohammedadil878/Bike_Rental_Management_System_php_mysql",
  },
  {
    id: 3,
    name: "Mobile Application Development Mini Project",
    description:
      "Developed a mini-project for a mobile application that was centered on an online grocery store app, which allowed consumers to personalize their grocery items and bookings. This tackled issues with the avalability of grocery items and queue management in real-time, providing a veriety of grocery item options.",
    image: projectImage3,
    githubLink: "https://github.com/Mohammedadil878/Online_Grocery_Store_App",
  },
  {
    id: 4,
    name: "File Structure Mini Project",
    description:
      "Using the hashing technique, a coaching institute management system was designed and implemented, creating a solid project that made it possible to perform tasks like indexing, deletion, search, insertion, and modification.",
    image: projectImage4,
    githubLink: "https://github.com/Mohammedadil878/Coaching_Institute_Management_System_Cplusplus",
  },
  {
    id: 5,
    name: "IOT Project with Implementation",
    description:
      "Designed a vision-based boat height prediction and crash avoidance system, integrating bridge height detection and condition monitoring. The system employs IoT-powered sensors and computer vision to predict boat height and ensure safe passage under bridges, reducing risks of collisions. Additionally, it monitors bridge conditions, issuing alerts for structural anamolies.",
    image: projectImage5,
    githubLink: "#",
  },
  // {
  //   id: 6,
  //   name: "Chat Application",
  //   description:
  //     "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
  //   image: projectImage6,
  //   githubLink: "https://github.com/user/chat-application",
  // },
];

export const BIO = [
  "A recent B.E graduate with a major in Information Science and Engineering from HKBK College of Engineering, Bengaluru, I have achieved a First Class with Distinction.",
  "With strong programming skills and a passion for software development, I am actively seeking an entry-level role to apply my technical expertise and contribute to innovative projects.",
  "My commitment to excellence is evident in my academic achievements, and I am eager to bring this dedication to a dynamic team.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "Intermediate +",
  },
  {
    icon: <DiJava className="text-4xl text-white lg:text-5xl" />,
    name: "Java",
    experience: "Basic",
  },
  {
    icon: <DiMysql className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "MySQL",
    experience: "Basic",
  },
  {
    icon: <DiPython className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "Python",
    experience: "Intermediate +",
  },
  {
    icon: <DiHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "HTML5",
    experience: "Intermediate +",
  },
  {
    icon: <DiCss3 className="text-4xl text-sky-400 lg:text-5xl" />,
    name: "CSS3",
    experience: "Intermediate +",
  },
  {
    icon: <TbBrandJavascript className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "JavaScript",
    experience: "Intermediate +",
  },
  {
    icon: <DiDjango className="text-4xl text-emerald-700 lg:text-5xl" />,
    name: "Django",
    experience: "Intermediate +",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering in Information Science & Engineering",
    institution: "HKBK College of Engineering",
    duration: "October 2020 - June 2024",
    percentage: "76.86 %",
    description: "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
  {
    degree: "Pre-University College",
    institution: "Shaheen Falcon PU College, Bangalore",
    duration: "February 2019 - June 2020",
    percentage: "78.16 %",
    description: "Focused on achieving distinction marks in the board exam. More focused on achieving government seat for Engineering College through KCET / JEE Mains.",
  },
  {
    degree: "Secondary High School",
    institution: "B.M.S English High School",
    duration: "February 2017 - June 2018",
    percentage: "70.88 %",
    description: "Focused on achieving distinction marks in the board exam. And in the Extra curricular activities as well as in the Sports event.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/mohammed.adil.963",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80 text-sky-400" />,
  },
  {
    href: "https://www.instagram.com/_a_dil_9964",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80 text-red-600" />,
  },
  {
    href: "https://x.com/Fa90959Adil",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80 text-slate-100" />,
  },
  {
    href: "https://github.com/Mohammedadil878",
    icon: <FaGithub fontSize={25} className="hover:opacity-80 text-slate-100" />,
  },
  {
    href: "https://www.linkedin.com/in/mohammed-faheem-adil-a40525202",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80 text-sky-500" />,
  },
];
