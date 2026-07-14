import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-logo">
            WAFAA <span>ESSALHI</span>
          </div>
          <p className="footer-copy">&copy; 2026 All Rights Reserved.</p>
        </div>
      </footer>

      <AnimatePresence>
        {show && (
          <motion.a
            href="#home"
            className="back-to-top"
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            whileHover={{ y: -4 }}
          >
            <FiArrowUp />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
