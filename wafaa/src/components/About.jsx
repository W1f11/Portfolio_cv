import { motion } from "framer-motion";
import { FiBriefcase, FiFolder, FiCode, FiCheckCircle } from "react-icons/fi";

const cards = [
  { icon: <FiBriefcase />, title: "Experience", desc: "3+ years building web apps" },
  { icon: <FiFolder />, title: "Projects Completed", desc: "20+ delivered projects" },
  { icon: <FiCode />, title: "Technologies", desc: "10+ tools mastered" },
  { icon: <FiCheckCircle />, title: "Availability", desc: "Open to new opportunities" },
];

const stats = [
  { num: "20+", label: "Projects" },
  { num: "10+", label: "Technologies" },
  { num: "100%", label: "Passion" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="section-tag">Get to know me</p>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p>
              I'm a passionate Full Stack Web Developer who enjoys turning ideas into fast,
              reliable and user-friendly web applications. I work across the entire stack —
              from crafting clean, responsive interfaces with React, to building solid REST
              APIs with Laravel, PHP and Spring Boot.
            </p>
            <p>
              I care deeply about writing maintainable code, thoughtful UI/UX, and delivering
              products that feel as good to use as they are to build. Every project is an
              opportunity to learn something new and push my craft further.
            </p>

            <div className="stats-row">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="stat glass"
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="about-cards">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                className="about-card glass"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
