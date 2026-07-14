import { motion } from "framer-motion";
import { skillGroups, pmSkills } from "../data/data.js";
import { FiCode, FiCheckCircle } from "react-icons/fi";
import {
  SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiBootstrap,
  SiPhp, SiLaravel, SiNodedotjs, SiSpringboot, SiOpenjdk,
  SiMysql, SiMongodb,
  SiGit, SiGithub, SiPostman, SiFigma, SiIntellijidea,
} from "react-icons/si";

const iconMap = {
  HTML: { icon: <SiHtml5 />, color: "#e34f26" },
  CSS: { icon: <FiCode />, color: "#1572b6" },
  JavaScript: { icon: <SiJavascript />, color: "#f7df1e" },
  React: { icon: <SiReact />, color: "#61dafb" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "#38bdf8" },
  Bootstrap: { icon: <SiBootstrap />, color: "#7952b3" },
  PHP: { icon: <SiPhp />, color: "#777bb4" },
  Laravel: { icon: <SiLaravel />, color: "#ff2d20" },
  "Node.js": { icon: <SiNodedotjs />, color: "#68a063" },
  "Spring Boot": { icon: <SiSpringboot />, color: "#6db33f" },
  Java: { icon: <SiOpenjdk />, color: "#f89820" },
  MySQL: { icon: <SiMysql />, color: "#4479a1" },
  MongoDB: { icon: <SiMongodb />, color: "#47a248" },
  Git: { icon: <SiGit />, color: "#f05032" },
  GitHub: { icon: <SiGithub />, color: "#ffffff" },
  "VS Code": { icon: <FiCode />, color: "#007acc" },
  IntelliJ: { icon: <SiIntellijidea />, color: "#000000" },
  Postman: { icon: <SiPostman />, color: "#ff6c37" },
  Figma: { icon: <SiFigma />, color: "#a259ff" },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06 },
  }),
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">What I work with</p>
          <h2 className="section-title">
            My <span>Skills</span>
          </h2>
          <p className="section-sub">
            A snapshot of the languages, frameworks and tools I use to build complete web
            applications, from interface to database.
          </p>
        </div>

        <div className="skills-groups">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              className="skills-card glass"
              custom={gi}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="skills-card-title">{group.title}</h3>

              <div className="skills-badges">
                {group.skills.map((skill, i) => {
                  const meta = iconMap[skill.name] || {};
                  return (
                    <motion.div
                      key={skill.name}
                      className="skill-badge"
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      style={{ "--badge-color": meta.color || "#f97316" }}
                    >
                      <span className="skill-icon">{meta.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="pm-card glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="pm-title">Project Management &amp; Collaboration</h3>
          <div className="pm-list">
            {pmSkills.map((item, i) => (
              <motion.div
                key={item}
                className="pm-item"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <FiCheckCircle className="pm-icon" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}