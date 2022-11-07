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
  name?: string;
  description?: string;
  element?: React.FC;
  icon?: any;
}

export const skillsIcons: SkillsProps[] = [
  {
    name: "ícone html",
    description: "",
    element: Html,
    icon: Html,
  },

  {
    name: "ícone css",
    description: "",
    element: Css,
    icon: Css,
  },
  {
    name: "ícone javascript",
    description: "",
    element: JavaScript,
    icon: JavaScript,
  },
  {
    name: "ícone typescript",
    description: "",
    element: TypeScript,
    icon: TypeScript,
  },
  {
    name: "ícone react",
    description: "",
    element: React,
    icon: React,
  },
  {
    name: "ícone redux",
    description: "",
    element: Redux,
    icon: Redux,
  },
  {
    name: "ícone styled",
    description: "",
    element: Styled,
    icon: Styled,
  },
  {
    name: "ícone next",
    description: "",
    element: Next,
    icon: Next,
  },
  {
    name: "ícone tailwind",
    description: "",
    element: Tailwind,
    icon: Tailwind,
  },
  {
    name: "ícone sass",
    description: "",
    element: Sass,
    icon: Sass,
  },
  {
    name: "ícone figma",
    description: "",
    element: Figma,
    icon: Figma,
  },
  {
    name: "ícone jest",
    description: "",
    element: Jest,
    icon: Jest,
  },
  {
    name: "ícone git",
    description: "",
    element: Git,
    icon: Git,
  },
  {
    name: "ícone postgres",
    description: "",
    element: Postgres,
    icon: Postgres,
  },
  {
    name: "ícone node",
    description: "",
    element: Node,
    icon: Node,
  },
];
