import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

const infos = [
  { icon: <FiMail />, title: "Email", value: "essalhiwafaa05@email.com" },
  { icon: <FiPhone />, title: "Phone", value: "+212 6 99 42 51 35" },
  { icon: <FiMapPin />, title: "Location", value: "Morocco" },
  { icon: <FiGithub />, title: "GitHub", value: "https://github.com/W1f11" },
  { icon: <FiLinkedin />, title: "LinkedIn", value: "https://www.linkedin.com/in/wafaa-essalhi-910573330/" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Let's talk</p>
          <h2 className="section-title">
            Contact <span>Me</span>
          </h2>
          <p className="section-sub">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          <motion.form
            className="contact-form glass"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@email.com" required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="What's this about?" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project..." required />
            </div>
            <motion.button
              type="submit"
              className="btn btn-primary"
              style={{ justifySelf: "start" }}
              whileTap={{ scale: 0.96 }}
            >
              <FiSend /> {status === "sent" ? "Message Sent!" : "Send Message"}
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
