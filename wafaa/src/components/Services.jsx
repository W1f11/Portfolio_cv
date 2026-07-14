import { motion } from "framer-motion";
import { FiCode, FiLayout, FiServer, FiLayers } from "react-icons/fi";
import { services } from "../data/data.js";

const iconMap = {
  code: <FiCode />,
  layout: <FiLayout />,
  server: <FiServer />,
  layers: <FiLayers />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">How I can help</p>
          <h2 className="section-title">
            My <span>Services</span>
          </h2>
          <p className="section-sub">
            End-to-end web development, from pixel-perfect interfaces to reliable backend
            systems.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card glass"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="service-icon">{iconMap[s.icon]}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
