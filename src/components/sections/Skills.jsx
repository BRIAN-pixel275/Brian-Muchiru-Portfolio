import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import SkillCard from "../ui/SkillCard";

import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <Container>

        <SectionHeading
          badge="Skills"
          title="Technologies I Work With"
          subtitle="These are the tools and technologies I use to design, build and deploy modern web applications."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
            />
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Skills;