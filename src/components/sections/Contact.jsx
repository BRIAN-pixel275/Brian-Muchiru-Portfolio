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
              className="w-full rounded-sm border border-ink-line bg-ink p-4 text-paper outline-none transition focus:border-brass"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-sm border border-ink-line bg-ink p-4 text-paper outline-none transition focus:border-brass"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-sm border border-ink-line bg-ink p-4 text-paper outline-none transition focus:border-brass"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-sm bg-brass px-8 py-4 font-semibold text-ink transition hover:bg-brass-deep disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="font-mono-ledger text-sm text-moss">
                Thanks! Your message has been sent — I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="font-mono-ledger text-sm text-red-400">
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