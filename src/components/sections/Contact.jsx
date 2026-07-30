import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <Container>
        <SectionHeading
          badge="Contact"
          title="Let's Build Something Amazing"
          subtitle="Whether you have a project, internship opportunity, or just want to connect, I'd be happy to hear from you."
        />

        <GlassCard className="mx-auto max-w-3xl p-8">

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-blue-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-blue-500"
            />

            <button
              className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-4 font-semibold"
            >
              Send Message
            </button>

          </form>

        </GlassCard>
      </Container>
    </section>
  );
};

export default Contact;