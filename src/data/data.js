import {faInstagram, faLinkedinIn, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import myImage from '../assets/image/badmus.jpg';
import chatApp from '../assets/image/chatApp.png';
import blog from '../assets/image/blog.png';
import travel from '../assets/image/travel.png';
import pocket from '../assets/image/pocket.png';

const phoneNumber = +2348183337363;
const message = 'Hi, olusola badmus'

export const resume_path = 'src/assets/Badmus Sodiq.pdf';
export const twitterLink = 'https://x.com/olusola_badmus1';
export const instagramLink = 'https://www.instagram.com/olusola_badmus';
export const linkedinLink = 'https://www.linkedin.com/in/badmus-sodiq-b75441185';
export const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export const java = 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png';
export const node_js = 'https://img.icons8.com/?size=48&id=54087&format=png&color=000000';
export const spring_boot = 'https://img.icons8.com/?size=48&id=90519&format=png&color=000000';
export const javascript = 'https://img.icons8.com/color/48/000000/javascript--v1.png';
export const react = 'https://img.icons8.com/ultraviolet/48/000000/react--v1.png';
export const html = 'https://img.icons8.com/color/48/000000/html-5--v1.png';
export const css = 'https://img.icons8.com/?size=48&id=21278&format=png&color=000000';
export const database = 'https://img.icons8.com/?size=48&id=11400&format=png&color=000000';
export const aws = 'https://img.icons8.com/?size=48&id=wU62u24brJ44&format=png&color=000000';
export const typescript = 'https://img.icons8.com/?size=48&id=uJM6fQYqDaZK&format=png&color=000000';
export const php = 'https://img.icons8.com/?size=48&id=fAMVO_fuoOuC&format=png&color=000000';
export const laravel = 'https://img.icons8.com/?size=48&id=hUvxmdu7Rloj&format=png&color=000000'

// about data
export const aboutdata = {
  intro: "Hi i am Badmus Sodiq Olusola.I am passionate about developing complex applications that solve real-world" +
    " problems impacting millions of users",
  description: 'Software developer with 3+ years of experience, proficient with technologies like React JS,' +
    ' TypeScript, SpringBoot, JavaScript, ExpressJS, Php, Laravel, Spring, Agile and DevOps engineer',
  image: myImage,
}

// home data
export const homedata = {
  name: "Badmus Sodiq Olusla",
  intro: "Hello, I am",
  tech: ['Programmer', 'Backend Developer', 'React Developer', "Software Engineer"],

}

// social links
export const socialLinksObjectArray = [
  {
    id: 1,
    link: twitterLink,
    icon: faXTwitter
  },
  {
    id: 2,
    link: instagramLink,
    icon: faInstagram
  },
  {
    id: 3,
    link: linkedinLink,
    icon: faLinkedinIn
  }
]

// experience data
export const experiencedata = [
  {
    id: 1,
    title: "Software Engineer",
    subtitle: 'Tegritech, Lagos, Nigeria',
    description: "Worked as a backend developer helped me to gain tech skills ",
    image: "./image/project.jpg",
    githubLink: "https://github.com/sodmod",
    // website: "https://google.com",
  },
  {
    id: 2,
    title: "Software Engineer",
    subtitle: "Momas Electricity Meter Manufacturing Company, Lagos, Nigeria.",
    description: 'My First Internship helped me to gain some knowledge on backend development.',
    image: "./image/project.jpg",
    githubLink: "https://github.com/sodmod",
    // website: "https://google.com",
  }
]

// project data
export const projectsdata = [
  {
    id: 1,
    title: 'Olutan Chat Application',
    subtitle: 'Fullstack Based Personal Application',
    description: 'Interactive Chat Application: Developed a demo web application enabling users to share moments and communicate effectively',
    image: chatApp,
    githubLink: 'https://github.com/sodmod',
    websiteLink: 'https://chatting-application-interface.vercel.app/',
    downloadLink: null,
    tech: ['SPRING BOOT, ', 'REACT']

  },
  {
    id: 2,
    title: `Blog Application`,
    subtitle: `Fullstack Based Personal Application`,
    description: 'Dynamic Blogging Platform: Designed and developed a demo web application for blogging, enabling users to share content effortlessly.',
    image: blog,
    githubLink: `https://github.com/sodmod`,
    websiteLink: 'https://blog-app-gilt-alpha.vercel.app/',
    downloadLink: null,
    tech: ['SPRING BOOT, ', 'NEXTJS, ', 'TYPESCRIPT']
  },
  {
    id: 3,
    title: `Travel Application`,
    subtitle: `Frontend Based Personal Application`,
    description: 'Innovative Travel Application: Created a demo web application for sharing travel experiences, enabling users to document and share their journeys.',
    image: travel,
    githubLink: `https://github.com/sodmod`,
    websiteLink: 'https://travel-wide.vercel.app/',
    downloadLink: null,
    tech: ['REACTJS, ', 'CSS']
  },
  {
    id: 4,
    title: 'Paystack Application',
    subtitle: 'Fullstack Based Personal Application',
    description: 'Secure Payment Integration: Designed and developed a Java-based application to interface with the Paystack payment web service, facilitating secure and reliable transactions.'
    , image: chatApp,
    githubLink: `https://github.com/sodmod`,
    websiteLink: 'https://paystack-interface.vercel.app/',
    downloadLink: null,
    tech: [' SPRING BOOT, ', 'REACT, ', 'PAYSTACK API']
  },
  {
    id: 4,
    title: 'Pocket Application',
    subtitle: 'Fullstack Based Personal Application',
    description: '',
    image: pocket,
    githubLink: `https://github.com/sodmod`,
    websiteLink: 'https://pocket-app-zeta.vercel.app/',
    downloadLink: null,
    tech: [' SPRING BOOT, ', 'REACT, ', 'PAYSTACK API']
  }
]

// skills data
export const skillsdata = [
  {
    id: 1,
    name: 'spring Boot',
    image: spring_boot
  },
  {
    id: 2,
    name: 'java',
    image: java
  },
  {
    id: 3,
    name: 'javascript',
    image: javascript
  },
  {
    id: 4,
    name: 'node_js',
    image: node_js
  },

  {
    id: 4,
    name: 'react',
    image: react
  },
  {
    id: 5,
    name: 'typescript',
    image: typescript
  },
  {
    id: 6,
    name: 'html',
    image: html
  },
  {
    id: 7,
    name: 'css',
    image: css
  },
  {
    id: 8,
    name: 'database',
    image: database
  },
  {
    id: 9,
    name: 'aws',
    image: aws
  },
  {
    id: 10,
    name: 'php',
    image: php,
  },
  {
    id: 11,
    name: 'laravel',
    image: laravel,
  }

]

// education data
export const educationdata = [
  {
    id: 1,
    logo: 'src/assets/image/funaab_logo.png',
    data: {
      degree: 'BSc Computer Science',
      institute: 'Federal University of Agriculture Abeokuta (FUNAAB), Ogun state, Nigeria',
      year: '2018-2023',
    },
    classname: {
      div_direction: 'left-container',
    }
  },
  {
    id: 2,
    logo: 'src/assets/image/command_logo.png',
    data: {
      degree: 'West African Senior School Certificate Examination (WAEC)',
      institute: 'Command Day Secondary School (CDSS) Oshodi, Lagos state, Nigeria',
      year: '2014-2017',
    },
    classname: {
      div_direction: 'right-container',
    }
  },
  {
    id: 3,
    logo: 'src/assets/image/ewutuntun_logo.jpeg',
    data: {
      degree: 'Basic Education Certificate Examination (BECE)',
      institute: 'Ewutuntun Grammar School (EGS), Lagos state, Nigeria.',
      year: '2011-2014',
    },
    classname: {
      div_direction: 'left-container',
    }
  },

]