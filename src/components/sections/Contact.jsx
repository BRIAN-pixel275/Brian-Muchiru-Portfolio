import { useState } from "react";
import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

// Replace with your own Formspree form ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32">
      <Container>
        <SectionHeading
          badge="Contact"
          title="Let's Build Something Amazing"
          subtitle="Whether you have a project, internship opportunity, or just want to connect, I'd be happy to hear from you."
        />

        <GlassCard className="mx-auto max-w-3xl p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-blue-500"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-blue-500"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-4 font-semibold disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-green-400">
                Thanks! Your message has been sent — I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </GlassCard>
      </Container>
    </section>
  );
};

export default Contact;