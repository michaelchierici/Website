import Html from "../../assets/skills/html.svg";
import Css from "../../assets/skills/css.svg";
import JavaScript from "../../assets/skills/javaScript.svg";
import TypeScript from "../../assets/skills/typescript.svg";
import React from "../../assets/skills/react.svg";
import Redux from "../../assets/skills/redux.svg";
import Styled from "../../assets/skills/styled.svg";
import Next from "../../assets/skills/next.svg";
import Tailwind from "../../assets/skills/tailwind.svg";
import Sass from "../../assets/skills/sass.svg";
import Jest from "../../assets/skills/jest.svg";
import Figma from "../../assets/skills/figma.svg";
import Git from "../../assets/skills/git.svg";
import Postgres from "../../assets/skills/postgre.svg";
import Node from "../../assets/skills/node.svg";

export interface SkillsProps {
  id: number;
  name?: string;
  description?: string;
  element?: React.FC;
  icon?: any;
  rotate?: string;
}

export const skillsIcons: SkillsProps[] = [
  {
    id: 15,
    name: "ícone html",
    description: "",
    element: Html,
    icon: Html,
    rotate: "-1.2",
  },

  {
    id: 14,
    name: "ícone css",
    description: "",
    element: Css,
    icon: Css,
    rotate: "18",
  },
  {
    id: 13,
    name: "ícone javascript",
    description: "",
    element: JavaScript,
    icon: JavaScript,
    rotate: "37.5",
  },
  {
    id: 12,
    name: "ícone typescript",
    description: "",
    element: TypeScript,
    icon: TypeScript,
    rotate: "57",
  },
  {
    id: 11,
    name: "ícone react",
    description: "",
    element: React,
    icon: React,
    rotate: "17",
  },
  {
    id: 10,
    name: "ícone redux",
    description: "",
    element: Redux,
    icon: Redux,
    rotate: "94.5",
  },
  {
    id: 9,
    name: "ícone styled",
    description: "",
    element: Styled,
    icon: Styled,
    rotate: "115",
  },
  {
    id: 8,
    name: "ícone next",
    description: "",
    element: Next,
    icon: Next,
    rotate: "135",
  },
  {
    id: 7,
    name: "ícone tailwind",
    description: "",
    element: Tailwind,
    icon: Tailwind,
    rotate: "140",
  },
  {
    id: 6,
    name: "ícone sass",
    description: "",
    element: Sass,
    icon: Sass,
    rotate: "181.5",
  },
  {
    id: 5,
    name: "ícone figma",
    description: "",
    element: Figma,
    icon: Figma,
    rotate: "194",
  },
  {
    id: 4,
    name: "ícone jest",
    description: "",
    element: Jest,
    icon: Jest,
    rotate: "210",
  },
  {
    id: 3,
    name: "ícone git",
    description: "",
    element: Git,
    icon: Git,
    rotate: "277.7",
  },
  {
    id: 2,
    name: "ícone postgres",
    description: "",
    element: Postgres,
    icon: Postgres,
    rotate: "255",
  },
  {
    id: 1,
    name: "ícone node",
    description: "",
    element: Node,
    icon: Node,
    rotate: "271.5",
  },
];
