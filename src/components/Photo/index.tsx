import Image from "next/image";
import React, { useState } from "react";
import { skillsIcons, SkillsProps } from "../../constants/skillsIcons";
import { Container, Icon } from "../../styles/components/photo";

interface Props {
  active: boolean;
}

export default function Photo({ active }: Props) {
  const [showSkills, setShowSkills] = useState(false);

  return <Container />;
}
