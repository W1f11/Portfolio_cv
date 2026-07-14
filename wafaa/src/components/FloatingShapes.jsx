import { motion } from "framer-motion";

const shapes = [
  { top: "12%", left: "8%", size: 90, duration: 9, shape: "circle", opacity: 0.12 },
  { top: "65%", left: "5%", size: 60, duration: 7, shape: "square", opacity: 0.1 },
  { top: "20%", left: "85%", size: 120, duration: 11, shape: "circle", opacity: 0.1 },
  { top: "75%", left: "80%", size: 70, duration: 8, shape: "triangle", opacity: 0.12 },
  { top: "45%", left: "45%", size: 50, duration: 10, shape: "square", opacity: 0.06 },
  { top: "5%", left: "45%", size: 40, duration: 6, shape: "circle", opacity: 0.1 },
];

function ShapeSVG({ shape, size, opacity }) {
  const color = "#ea580c";
  if (shape === "square") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" style={{ opacity }}>
        <rect x="10" y="10" width="80" height="80" rx="16" fill="none" stroke={color} strokeWidth="2" />
      </svg>
    );
  }
  if (shape === "triangle") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" style={{ opacity }}>
        <polygon points="50,10 90,90 10,90" fill="none" stroke={color} strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ opacity }}>
      <circle cx="50" cy="50" r="42" fill="none" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export default function FloatingShapes() {
  return (
    <div className="floating-shapes" aria-hidden="true">
      <div className="gradient-bg" />
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="shape"
          style={{ top: s.top, left: s.left }}
          animate={{ y: [0, -26, 0], rotate: [0, 12, 0] }}
          transition={{ duration: s.duration, repeat: Infinity, ease: "easeInOut" }}
        >
          <ShapeSVG shape={s.shape} size={s.size} opacity={s.opacity} />
        </motion.div>
      ))}
    </div>
  );
}
