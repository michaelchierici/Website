import React, { ReactNode } from "react";
import Linkedin from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import Github from "../assets/github.svg";
import Gmail from "../assets/gmail.svg";

interface ContactIcons {
  name: string;
  element: React.FC;
  value?: string;
  link?: string;
  icon: any;
}

export const contactIcons: ContactIcons[] = [
  {
    name: "ícone do linkedin",
    element: Linkedin,
    link: "https://www.linkedin.com/in/michael-chierici-1880b3208/",
    icon: Linkedin,
  },
  {
    name: "ícone do Instagram",
    element: Instagram,
    link: "https://www.instagram.com/michaelchierici/",
    icon: Instagram,
  },
  {
    name: "ícone do Github",
    element: Github,
    link: "https://github.com/michaelchierici",
    icon: Github,
  },
  {
    name: "ícone do gmail",
    element: Gmail,
    icon: Gmail,
    value: "michael.chierjr@gmail.com",
  },
];
