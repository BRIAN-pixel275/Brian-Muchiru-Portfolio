import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import TimelineCard from "../ui/TimelineCard";

import { experience } from "../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <Container>

        <SectionHeading
          badge="Journey"
          title="My Learning Journey"
          subtitle="Every project and technology has helped shape my skills as a software developer. Here's a look at the milestones that have brought me to where I am today."
        />

        <div className="mx-auto max-w-4xl">
          {experience.map((item, index) => (
            <TimelineCard
              key={item.year}
              item={item}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Experience;