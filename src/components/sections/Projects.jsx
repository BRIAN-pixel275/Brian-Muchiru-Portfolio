import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <Container>

        <SectionHeading
          badge="Projects"
          title="Featured Work"
          subtitle="A selection of projects that demonstrate my ability to design, build and deliver modern software."
        />

        <div className="space-y-16">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Projects;