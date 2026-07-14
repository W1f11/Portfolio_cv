import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";

const infos = [
  {
    icon: <FiMail />,
    title: "Email",
    value: "essalhiwafaa05@email.com",
  },
  {
    icon: <FiPhone />,
    title: "Phone",
    value: "+212 6 99 42 51 35",
  },
  {
    icon: <FiMapPin />,
    title: "Location",
    value: "Morocco",
  },
  {
    icon: <FiGithub />,
    title: "GitHub",
    value: "https://github.com/W1f11",
  },
  {
    icon: <FiLinkedin />,
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/wafaa-essalhi-910573330/",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
    },
  }),
};

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("sending");

    const sendEmail = async (e) => {
  e.preventDefault();

  setStatus("sending");

  try {
    await emailjs.sendForm(
      "service_4e8jvhd",
      "template_ny5d58k",
      form.current,
      "UFMRgh1W0xxnEJQNy"
    );

    setStatus("sent");
    form.current.reset();

    setTimeout(() => {
      setStatus("idle");
    }, 3000);
  } catch (error) {
    console.error("EmailJS Error:", error);
    setStatus("error");
  }
};
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Let's Talk</p>

          <h2 className="section-title">
            Contact <span>Me</span>
          </h2>

          <p className="section-sub">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </div>

        <div className="contact-grid">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary"
              style={{ justifySelf: "start" }}
              whileTap={{ scale: 0.96 }}
              disabled={status === "sending"}
            >
              <FiSend />

              {status === "idle" && " Send Message"}
              {status === "sending" && " Sending..."}
              {status === "sent" && " Message Sent ✓"}
              {status === "error" && " Try Again"}
            </motion.button>
          </motion.form>

          <div className="contact-info">
            {infos.map((info, i) => (
              <motion.div
                key={info.title}
                className="contact-info-card glass"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="icon">{info.icon}</div>

                <div>
                  <h4>{info.title}</h4>
                  <p>{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}