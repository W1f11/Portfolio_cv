import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/data.js";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
    },
  }),
};

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ background: "var(--second-bg-color)" }}
    >
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Selected Work</p>

          <h2 className="section-title">
            My <span>Projects</span>
          </h2>

          <p className="section-sub">
            A selection of full-stack projects where I designed the user
            interface, developed the backend, and delivered complete,
            end-to-end solutions.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              className="project-card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <h3 className="project-title">{p.title}</h3>

              <p className="project-desc">{p.desc}</p>

              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-features">
                {p.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn solid"
                >
                  Review Project
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn icon-only"
                  aria-label={`${p.title} GitHub repository`}
                  title="View on GitHub"
                >
                  <FiGithub />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://github.com/W1f11"
            target="_blank"
            rel="noreferrer"
            className="view-all-btn"
          >
            <FiGithub />
            <span>View All Projects on GitHub</span>
            <FiExternalLink className="arrow" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}