import { motion } from "framer-motion";

import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

const About = () => {
  return (
    <section
      id="about"
      className="py-32"
    >
      <Container>

        <SectionHeading
          badge="About Me"
          title="Passionate About Building Digital Products"
          subtitle="I enjoy solving real-world problems by creating fast, responsive and user-friendly web applications."
        />

        <div className="grid gap-8 lg:grid-cols-2">

          <GlassCard className="p-8">

            <h3 className="text-2xl font-semibold">
              My Journey
            </h3>

            <p className="mt-6 leading-8 text-slate-400">

              My journey into software development started
              with curiosity about how websites work. Since then,
              I've focused on mastering React, JavaScript,
              Tailwind CSS and Java while building projects that
              sharpen my problem-solving skills.

            </p>

          </GlassCard>

          <GlassCard className="p-8">

            <h3 className="text-2xl font-semibold">
              What I Love
            </h3>

            <ul className="mt-6 space-y-5 text-slate-400">

              <li> Building responsive web applications</li>

              <li> Designing clean user interfaces</li>

              <li> Learning modern technologies</li>

              <li> Collaborating with teams</li>

              <li> Solving real-world problems</li>

            </ul>

          </GlassCard>

        </div>

      </Container>
    </section>
  );
};

export default About;