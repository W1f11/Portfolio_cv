import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const links = ["Home", "About", "Skills", "Services", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    const sections = links.map((l) => document.getElementById(l.toLowerCase()));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => s && observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      sections.forEach((s) => s && observer.unobserve(s));
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#home" className="logo">
          Wafaa<span>.</span>
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className={active === l ? "active" : ""}>
              {l}
            </a>
          ))}
        </nav>
        <button className="nav-toggle" onClick={() => setOpen(true)} aria-label="Open menu">
          <FiMenu />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="nav-toggle"
              style={{ position: "absolute", top: "1.4rem", right: "1.6rem" }}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <FiX />
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className={active === l ? "active" : ""}
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
