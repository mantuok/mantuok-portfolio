export const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
];

export const NAV_ITEM = {
  home: {
    label: "Home",
    href: "#",
  },
  about: {
    label: "About Me",
    href: "#about",
  },
  projects: {
    label: "Projects",
    href: "#projects",
  },
  contact: {
    label: "Contact Me",
    href: "#contact",
  },
};

// .icon:nth-child(1) { left: 225px; top: 225px; }
// .icon:nth-child(2) { left: 360px; top: 225px; }
// .icon:nth-child(3) { left: 305px; top: 320px; }
// .icon:nth-child(4) { left: 195px; top: 320px; }
// .icon:nth-child(5) { left: 140px; top: 225px; }
// .icon:nth-child(6) { left: 195px; top: 130px; }
// .icon:nth-child(7) { left: 305px; top: 130px; }
// .icon:nth-child(8) { left: 445px; top: 225px; }
// .icon:nth-child(9) { left: 395px; top: 375px; }
// .icon:nth-child(10) { left: 205px; top: 395px; }
// .icon:nth-child(11) { left: 55px; top: 225px; }
// .icon:nth-child(12) { left: 205px; top: 55px; }
// .icon:nth-child(13) { left: 395px; top: 75px; }

export const SkillsIcons = [
  {
    id: 1,
    name: "chakraui",
    label: "Chakra-UI",
    path: "/img/icon_chakraui.svg",
    position: {
      top: 225, // Center
      left: 225, // Center
    },
  },
  {
    id: 2,
    name: "reactjs",
    label: "React.js",
    path: "/img/icon_reactjs.svg",
    position: {
      top: 225, // Ring 2, angle 0°
      left: 360,
    },
  },
  {
    id: 3,
    name: "nodejs",
    label: "Node.js",
    path: "/img/icon_nodejs.svg",
    position: {
      top: 320, // Ring 2, angle 60°
      left: 305,
    },
  },
  {
    id: 4,
    name: "css3",
    label: "CSS3",
    path: "/img/icon_css3.svg",
    position: {
      top: 320, // Ring 2, angle 120°
      left: 195,
    },
  },
  {
    id: 5,
    name: "Material-UI",
    label: "materialui",
    path: "/img/icon_materialui.svg",
    position: {
      top: 185, // Ring 2, angle 180°
      left: 120,
    },
  },
  {
    id: 6,
    name: "Python",
    label: "python",
    path: "/img/icon_python.svg",
    position: {
      top: 225, // Ring 3, angle 0°
      left: 445,
    },
  },
  {
    id: 7,
    name: "HTML5",
    label: "html5",
    path: "/img/icon_html5.svg",
    position: {
      top: 130, // Ring 2, angle 300°
      left: 305,
    },
  },
  {
    id: 8,
    name: "Sass",
    label: "sass",
    path: "/img/icon_sass.svg",
    position: {
      top: 130, // Ring 2, angle 240°
      left: 195,
    },
  },
  {
    id: 9,
    name: "Next.js",
    label: "nextjs",
    path: "/img/icon_nextjs.svg",
    position: {
      top: 55, // Ring 3, angle 240°
      left: 205,
    },
  },
  {
    id: 10,
    name: "TypeScript",
    label: "typescript",
    path: "/img/icon_typescript.svg",
    position: {
      top: 75, // Ring 3, angle 300°
      left: 395,
    },
  },
  {
    id: 11,
    name: "Figma",
    label: "figma",
    path: "/img/icon_figma.svg",
    position: {
      top: 295, // Ring 3, angle 180°
      left: 115,
    },
  },
  {
    id: 12,
    name: "Jest",
    label: "jest",
    path: "/img/icon_jest.svg",
    position: {
      top: 375, // Ring 3, angle 60°
      left: 395,
    },
  },
  {
    id: 13,
    name: "Bootstrap5",
    label: "bootstrap5",
    path: "/img/icon_bootstrap5.svg",
    position: {
      top: 395, // Ring 3, angle 120°
      left: 205,
    },
  },
];

export const ProjectsData = [
  {
    id: 1,
    name: "iUjex",
    title: "Local Transport Company Web App",
    description:
      "This project enhances user experience for customers and drivers by connecting them through a multi-role web application.",
    skillset: [
      "Using ",
      <strong key="1">React.js, TypeScript, and Material UI</strong>,
      ", I implemented responsive interfaces and provide ongoing support to ensure the application functions correctly.",
    ],
    image: {
      src: "/img/project_iujex.png",
      width: 527,
      height: 446,
      alt: "iUjex Project",
    },
    url: "https://iujex.com/",
    github: "https://gist.github.com/mantuok/2935074bdc6250e0f14bd24af3584c85",
  },
  {
    id: 2,
    name: "Earthquake",
    title: "Earthquake Preparedness Web App",
    description:
      "This project improves earthquake preparedness awareness in San Francisco with responsive user interfaces. ",
    skillset: [
      "Using ",
      <strong key="1">Next.js, TypeScript, and Chakra UI</strong>,
      ", I design an intuitive experience and ensure reliability through Jest testing.",
    ],
    image: {
      src: "/img/project_earthquake.png",
      width: 356,
      height: 384,
      alt: "Earthquake Preparedness Project",
    },
    url: "",
    github: "https://github.com/sfbrigade/datasci-earthquake",
  },
  {
    id: 3,
    name: "Liga Bank",
    title: "Local Bank Web App",
    description:
      "This project enhances the banking experience by providing tools for calculating mortgage and loan options.",
    skillset: [
      "Using ",
      <strong key="1">React, Redux, and Sass</strong>,
      ", I developed an  interface with efficient state management to ensure accurate calculations and a seamless user experience.",
    ],
    image: {
      src: "/img/project_ligabank.png",
      width: 516,
      height: 438,
      alt: "Liga Bank Project",
    },
    url: "",
    github: "https://github.com/mantuok/liga-bank",
  },
  {
    id: 4,
    name: "Avto Moto",
    title: "Car Dealership Website",
    description:
      "This project improves the user experience for car buyers by providing a platform to explore vehicles and read customer reviews.",
    skillset: [
      "Using ",
      <strong key="1">React, Redux, and Sass</strong>,
      ", I developed an  interface that allows seamless browsing and effective state management for enhanced functionality.",
    ],
    image: {
      src: "/img/project_avtomoto.png",
      width: 496,
      height: 413,
      alt: "Avto Moto Project",
    },
    url: "",
    github: "https://github.com/mantuok/avto-moto",
  },
  {
    id: 5,
    name: "Cat Energy",
    title: "Cat Food Manufacturer Website",
    description:
      "This project provides a responsive and adaptive web site for innovative cat food  and facilitates orders through catalog and order form.",
    skillset: [
      "Using ",
      <strong key="1">HTML5, LESS, and BEM methodology</strong>,
      ", I implemented clean and maintainable code to create an engaging and user-friendly interface.",
    ],
    image: {
      src: "/img/project_catenergy.png",
      width: 550,
      height: 506,
      alt: "Cat Energy Project",
    },
    url: "https://mantuok.github.io/cat-energy/",
    github: "https://github.com/mantuok/cat-energy",
  },
  {
    id: 6,
    name: "Gllacy",
    title: "Ice-Cream Parlour Website",
    description:
      "This project enhances user experience for customers and drivers by connecting them through a multi-role web application.",
    skillset: [
      "Using ",
      <strong key="1">HTML5 and CSS3</strong>,
      ", I built a visually appealing interface to engage users and highlight the brand’s offerings.",
    ],
    image: {
      src: "/img/project_gllacy.png",
      width: 521,
      height: 423,
      alt: "Gllacy Project",
    },
    url: "https://mantuok.github.io/gllacy-parlour/",
    github: "https://github.com/mantuok/gllacy-parlour",
  },
];
