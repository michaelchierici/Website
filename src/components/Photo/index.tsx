import { reverse } from "dns";
import Image from "next/image";
import React, { useState } from "react";
import { skillsIcons, SkillsProps } from "../../constants/skillsIcons";
import { Circle, Container, Icon } from "../../styles/components/photo";

interface Props {
  active: boolean;
}

export default function Photo({ active }: Props) {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <Container>
      <Circle>
        {skillsIcons.map((item: SkillsProps, index) => (
          <Icon ammount={Number(item.id)} key={index}>
            <Image
              style={{
                transform: `rotate(${item.rotate}deg)`,
              }}
              alt={String(item.name)}
              src={item.icon}
              width={50}
              height={50}
            />
          </Icon>
        ))}
      </Circle>
    </Container>
  );
}
