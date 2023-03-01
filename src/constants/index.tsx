import { GitHub, Instagram, Facebook, LinkedIn } from "@mui/icons-material";

interface ILinkProps {
  element: any;
  path: string;
}

interface ICurrentWork {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  year: number;
  haveWorked: string[];
}

interface IFolders {
  githubLink: string;
  externalLink: string;
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

export const currentWork: ICurrentWork[] = [
  {
    companyName: "FPT Software",
    position: "Internship",
    startDate: "August",
    endDate: "October",
    year: 2021,
    haveWorked: [
      "Learn about the workings of a system and build basic website interfaces as required",
      "Basic interface bug fixes",
    ],
  },

  {
    companyName: "HDWEBSOFT",
    position: "Fresher Front-end",
    startDate: "May",
    endDate: "November",
    year: 2022,
    haveWorked: [
      "Build websites according to customer requirements",
      "Building websites related to virtual money, e-wallets",
      "Learn and analyze according to customer requirements",
    ],
  },

  {
    companyName: "HDWEBSOFT",
    position: "Fresher Front-end",
    startDate: "May",
    endDate: "November",
    year: 2022,
    haveWorked: [
      "Build websites according to customer requirements",
      "Building websites related to virtual money, e-wallets",
      "Learn and analyze according to customer requirements",
    ],
  },

  {
    companyName: "HDWEBSOFT",
    position: "Fresher Front-end",
    startDate: "May",
    endDate: "November",
    year: 2022,
    haveWorked: [
      "Build websites according to customer requirements",
      "Building websites related to virtual money, e-wallets",
      "Learn and analyze according to customer requirements",
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
  },

  {
    title: "Order summary card",
    description:
      "This project built a simple card UI with the main content as order summary card product and  responsive for multiples devices",
    technologies: ["HTML5", "CSS"],
    externalLink: "https://marvelous-bunny-d5f39d.netlify.app/",
    githubLink: "https://github.com/nguyenlase171120/order__summary",
  },

  {
    title: "Coder Wikipedia",
    description:
      "This project built a simple NextJS project. It is going to help people to understand NextJS knowledge",
    technologies: ["HTML5", "CSS", "JS", "NextJS"],
    externalLink: "",
    githubLink: "https://github.com/nguyenlase171120/Coder-wikipedia",
  },

  {
    title: "QR code component",
    description:
      "This project built a simple card UI with the main content as QR Code component and  responsive for multiples devices",
    technologies: ["HTML5", "CSS"],
    externalLink: "https://cozy-seahorse-2ffcba.netlify.app/",
    githubLink: "https://github.com/nguyenlase171120/qr_code",
  },
];
