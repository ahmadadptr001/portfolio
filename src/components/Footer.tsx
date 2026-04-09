import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer className="px-6 md:px-10 py-8 border-t border-dark-border" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-accent/40 rounded-full flex items-center justify-center">
              <span className="text-accent text-[9px] font-mono">A</span>
            </div>
            <span className="text-text-muted text-xs">
              © {new Date().getFullYear()} Arfan. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-text-muted text-xs font-mono">
              Designed & Built with precision
            </span>
            <div className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-accent/60" />
              <span className="w-1 h-1 rounded-full bg-accent/40" />
              <span className="w-1 h-1 rounded-full bg-accent/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
