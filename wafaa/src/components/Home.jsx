import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiSend } from "react-icons/fi";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "React Developer",
  "Laravel Developer",
  "Full Stack Developer",
];

function useTypingEffect(words, speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)));
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

const codeLines = [
  { n: 1, tokens: [{ t: "const", c: "tok-key" }, { t: " developer", c: "tok-var" }, { t: " = ", c: "tok-punc" }, { t: "{", c: "tok-punc" }] },
  { n: 2, tokens: [{ t: "  name", c: "tok-var" }, { t: ": ", c: "tok-punc" }, { t: "'Wafaa Essalhi'", c: "tok-str" }, { t: ",", c: "tok-punc" }] },
  { n: 3, tokens: [{ t: "  role", c: "tok-var" }, { t: ": ", c: "tok-punc" }, { t: "'Full Stack Developer'", c: "tok-str" }, { t: ",", c: "tok-punc" }] },
  { n: 4, tokens: [{ t: "  stack", c: "tok-var" }, { t: ": ", c: "tok-punc" }, { t: "['React', 'Laravel', 'MySQL']", c: "tok-str" }, { t: ",", c: "tok-punc" }] },
  { n: 5, tokens: [{ t: "  passion", c: "tok-var" }, { t: ": ", c: "tok-punc" }, { t: "100", c: "tok-fn" }, { t: ",", c: "tok-punc" }] },
  { n: 6, tokens: [{ t: "};", c: "tok-punc" }] },
  { n: 7, tokens: [{ t: "" }] },
  { n: 8, tokens: [{ t: "function", c: "tok-key" }, { t: " buildAwesome", c: "tok-fn" }, { t: "() {", c: "tok-punc" }] },
  { n: 9, tokens: [{ t: "  return", c: "tok-key" }, { t: " ", c: "tok-punc" }, { t: "'Modern, Fast & Scalable'", c: "tok-str" }, { t: ";", c: "tok-punc" }] },
  { n: 10, tokens: [{ t: "}", c: "tok-punc" }] },
];

export default function Home() {
  const typed = useTypingEffect(roles);

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="hero-eyebrow">Hello, I'm</p>
          <h1 className="hero-name">
            WAFAA <span className="accent glow-text">ESSALHI</span>
          </h1>
          <p className="hero-role">Full Stack Web Developer</p>
          <div className="typing-line">
            <span>{typed}</span>
            <span className="typing-cursor" />
          </div>
          <p className="hero-desc">
            Passionate Full Stack Web Developer who loves building modern, responsive and
            user-friendly web applications using the latest technologies.
          </p>
          <div className="hero-actions">
            <a href="/CV_Wafaa.pdf" download className="btn btn-primary">
              <FiDownload /> Download CV
            </a>
            <a href="#contact" className="btn btn-outline">
              <FiSend /> Hire Me
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/W1f11" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/wafaa-essalhi-910573330/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:essalhiwafaa05@email.com" className="social-icon" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <motion.div
            className="code-panel"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="code-panel-header">
              <span className="code-dot red" />
              <span className="code-dot yellow" />
              <span className="code-dot green" />
              <span className="code-filename">developer.js</span>
            </div>
            <div className="code-body">
              {codeLines.map((line) => (
                <div className="code-line" key={line.n}>
                  <span className="code-lineno">{line.n}</span>
                  <span>
                    {line.tokens.map((tok, i) => (
                      <span key={i} className={tok.c}>
                        {tok.t}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
