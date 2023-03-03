import { GitHub, Instagram, Facebook, LinkedIn } from "@mui/icons-material";
import { wallpaper_1, wallpaper_2 } from "../assets/images";

interface ILinkProps {
  element: any;
  path: string;
}

export interface ICurrentWork {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  haveWorked: string[];
  mainWebsite: string;
}

interface IFolders {
  githubLink: string;
  externalLink: string;
  title: string;
  description: string;
  technologies: string[];
  delay: number;
}

interface ICurrentProjects {
  githubLink: string;
  externalLink: string;
  wallPaper: string;
  title: string;
  description: string;
  technologies: string[];
}

export const informationLink: ILinkProps[] = [
  {
    element: <GitHub />,
    path: "https://github.com/nguyenlase171120",
  },
  {
    element: <Instagram />,
    path: "https://www.instagram.com/le_nguyeen/",
  },
  {
    element: <Facebook />,
    path: "https://www.facebook.com/nguyenla20",
  },
  {
    element: <LinkedIn />,
    path: "https://www.linkedin.com/in/l%C3%AA-anh-nguy%C3%AAn-4a7194237/",
  },
];

export const currentTech: string[] = [
  "Javascript",
  "ReactJS",
  "Node.js",
  "Typescript",
  "Sass",
  "Mongoose",
];

export const CURRENT_WORK: ICurrentWork[] = [
  {
    companyName: "FPT Software",
    mainWebsite: "https://www.fpt-software.com/",
    position: "Internship",
    startDate: "August 2021 - ",
    endDate: "October 2021",
    haveWorked: [
      "Learn about the workings of a system and build basic website interfaces as required through VueJS framework",
      "Build basic interface, and learn some useful tool such as gitlab, nginx, intellji",
      "Learn some software skills such as work with my team or talk with leader how to correctly",
    ],
  },

  {
    companyName: "HD WebSoft",
    position: "Fresher Front-end",
    startDate: "May 2022 - ",
    mainWebsite: "https://www.hdwebsoft.com/",
    endDate: "November 2022",
    haveWorked: [
      "Built user interface based on user interface design ( figma ) and get requirements from client",
      "Built UI through NextJS framework and ChakraUI library and also use React-query for some mini projects in company",
      "Coded with Web3 UI such as Metamask, E-wallet for client and improve performance of product to better",
      "Integration with some websites and libraries to calculate and process payments, such as Stripe, Google Analytics, and Paypal",
      "Learn some git commands to manage projects such as merge, rebase, cherry-pick, branch, checkout",
    ],
  },
];

export const FOLDER_PROJECTS: IFolders[] = [
  {
    title: "Product preview card component",
    description:
      "This project built a simple card UI with the main content as preview card product and  responsive for multiples devices",
    technologies: ["HTML5", "CSS"],
    externalLink: "https://transcendent-faun-710a17.netlify.app/",
    githubLink: "https://github.com/nguyenlase171120/Card_frontmentor",
    delay: 1,
  },

  {
    title: "Order summary card",
    description:
      "This project built a simple card UI with the main content as order summary card product and  responsive for multiples devices",
    technologies: ["HTML5", "CSS"],
    externalLink: "https://marvelous-bunny-d5f39d.netlify.app/",
    githubLink: "https://github.com/nguyenlase171120/order__summary",
    delay: 1,
  },

  {
    title: "Coder Wikipedia",
    description:
      "This project built a simple NextJS project. It is going to help people to understand NextJS knowledge",
    technologies: ["HTML5", "CSS", "JS", "NextJS"],
    externalLink: "https://cozy-seahorse-2ffcba.netlify.app/",
    githubLink: "https://github.com/nguyenlase171120/Coder-wikipedia",
    delay: 1.2,
  },

  {
    title: "QR code component",
    description:
      "This project built a simple card UI with the main content as QR Code component and  responsive for multiples devices",
    technologies: ["HTML5", "CSS"],
    externalLink: "https://soft-chaja-b66556.netlify.app/",
    githubLink: "https://github.com/nguyenlase171120/qr_code",
    delay: 1.6,
  },
];

export const CURRENT_PROJECTS: ICurrentProjects[] = [
  {
    wallPaper: wallpaper_1,
    description:
      "The project used to introduce myself through the website. This project has some specific features such as overview information, pet project, experiences, and some mini projects. And also having full responsive for all devices is going to help people can use it easily",
    externalLink: "https://zingy-rabanadas-0dbe78.netlify.app/",
    githubLink: "https://github.com/nguyenlase171120/nguyenla171120_portfolio",
    title: "Portfolio Management",
    technologies: ["Redux", "ReactJS", "Typescript", "Material"],
  },

  {
    wallPaper: wallpaper_2,
    description:
      "The website is based on a Youtube design. So this website has some signature features of social media websites including watching the list of videos by type, watching the content of the video, searching the video by title, and login with google",
    externalLink: "https://radiant-custard-fd8e58.netlify.app",
    githubLink: "https://github.com/nguyenlase171120/youtube_v3",
    title: "Youtube v3",
    technologies: ["Firebase", "ReactJS", "Typescript", "MaterialUI"],
  },
];
