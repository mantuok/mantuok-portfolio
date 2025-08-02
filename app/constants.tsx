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

export const SkillsIcons = [
  {
    id: 1,
    name: "chakraui",
    label: "Chakra-UI",
    path: "/img/skills/icon_chakraui.svg",
    position: {
      top: 130,
      left: 195,
    },
  },
  {
    id: 2,
    name: "reactjs",
    label: "React.js",
    path: "/img/skills/icon_reactjs.svg",
    position: {
      top: 225,
      left: 340,
    },
  },
  {
    id: 3,
    name: "nodejs",
    label: "Node.js",
    path: "/img/skills/icon_nodejs.svg",
    position: {
      top: 320,
      left: 305,
    },
  },
  {
    id: 4,
    name: "css3",
    label: "CSS3",
    path: "/img/skills/icon_css3.svg",
    position: {
      top: 308,
      left: 207,
    },
  },
  {
    id: 5,
    name: "MaterialUI",
    label: "materialui",
    path: "/img/skills/icon_materialui.svg",
    position: {
      top: 195,
      left: 110,
    },
  },
  {
    id: 6,
    name: "Python",
    label: "python",
    path: "/img/skills/icon_python.svg",
    position: {
      top: 205,
      left: 475,
    },
  },
  {
    id: 7,
    name: "HTML5",
    label: "html5",
    path: "/img/skills/icon_html5.svg",
    position: {
      top: 130,
      left: 305,
    },
  },
  {
    id: 8,
    name: "Sass",
    label: "sass",
    path: "/img/skills/icon_sass.svg",
    position: {
      top: 225,
      left: 225,
    },
  },
  {
    id: 9,
    name: "Next.js",
    label: "nextjs",
    path: "/img/skills/icon_nextjs.svg",
    position: {
      top: 55,
      left: 205,
    },
  },
  {
    id: 10,
    name: "TypeScript",
    label: "typescript",
    path: "/img/skills/icon_typescript.svg",
    position: {
      top: 75,
      left: 395,
    },
  },
  {
    id: 11,
    name: "Figma",
    label: "figma",
    path: "/img/skills/icon_figma.svg",
    position: {
      top: 295,
      left: 115,
    },
  },
  {
    id: 12,
    name: "Jest",
    label: "jest",
    path: "/img/skills/icon_jest.svg",
    position: {
      top: 375,
      left: 395,
    },
  },
  {
    id: 13,
    name: "Bootstrap5",
    label: "bootstrap5",
    path: "/img/skills/icon_bootstrap5.svg",
    position: {
      top: 395,
      left: 245,
    },
  },
  {
    id: 14,
    name: "Lua",
    label: "lua",
    path: "/img/skills/icon_lua.svg",
    position: {
      top: "383px",
      left: "134px",
    },   
  },
  {
    id: 15,
    name: "Docker",
    label: "docker",
    path: "/img/skills/icon_docker.svg",
    position: {
      top: "150px",
      left: "414px",
    },   
  },
  {
    id: 15,
    name: "Less",
    label: "less",
    path: "/img/skills/icon_less.svg",
    position: {
      top: "340px",
      left: "474px",
    },   
  },
  {
    id: 16,
    name: "Webpack",
    label: "webpack",
    path: "/img/skills/icon_webpack.svg",
    position: {
      top: "110px",
      left: "84px",
    },   
  },
  {
    id: 17,
    name: "Photoshop",
    label: "photoshop",
    path: "/img/skills/icon_photoshop.svg",
    position: {
      top: "280px",
      left: "404px",
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
      <strong key="1">React.js, TypeScript, Redux, and Sass</strong>,
      ", I implemented responsive interfaces and provide ongoing support to ensure the application functions correctly.",
    ],
    image: {
      src: "/img/project_iujex_v2.png",
      width: 500,
      height: 481,
      alt: "iUjex Project",
    },
    url: "https://iujex.com/",
    github:
      "https://gist.github.com/mantuok/04aa4a4d1b69752f71a4981847cdb85e.js",
  },
  {
    id: 2,
    name: "SafeHome SF",
    title: "Earthquake Preparedness Web App",
    description:
      "This project improves earthquake preparedness awareness in San Francisco with responsive user interfaces. ",
    skillset: [
      "Using ",
      <strong key="1">Next.js, TypeScript, and Chakra UI</strong>,
      ", I design an intuitive experience and ensure reliability through Jest testing.",
    ],
    image: {
      src: "/img/project_safehome.png",
      width: 500,
      height: 437,
      alt: "SafeHome SF project",
    },
    url: "https://www.safehome.report/",
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
