import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-10 md:right-20 w-[1px] h-40 bg-dark-border" />
      <div className="absolute top-1/3 right-10 md:right-20 w-20 h-[1px] bg-dark-border" />
      
      <div className="absolute top-32 left-6 md:left-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-text-muted text-xs font-mono tracking-widest writing-vertical hidden md:block"
          style={{ writingMode: 'vertical-lr' }}
        >
          SCROLL TO EXPLORE
        </motion.p>
      </div>

      <div className="max-w-[1400px] mx-auto w-full">
        {/* Status line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-text-secondary text-xs font-mono tracking-wider uppercase">
            Available for new projects
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="space-y-2 md:space-y-4">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[clamp(2.5rem,8vw,7rem)] font-display font-medium leading-[0.9] tracking-[-0.02em] text-text-primary"
            >
              Creative
            </motion.h1>
          </div>
          <div className="overflow-hidden flex items-baseline gap-4 md:gap-8">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[clamp(2.5rem,8vw,7rem)] font-display italic font-medium leading-[0.9] tracking-[-0.02em] text-accent"
            >
              Developer
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="hidden md:block text-text-muted text-outline text-[clamp(1.5rem,4vw,4rem)] font-display"
            >
              &
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[clamp(2.5rem,8vw,7rem)] font-display font-medium leading-[0.9] tracking-[-0.02em] text-text-primary"
            >
              Designer
            </motion.h1>
          </div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 md:mt-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-md">
            Crafting digital experiences that blend aesthetics with functionality. 
            Specializing in modern web applications, brand identity, and interactive design.
          </p>

          <div className="flex items-center gap-4">
            <a 
              href="#work"
              className="group flex items-center gap-3 border border-dark-border px-6 py-3 hover:border-accent/40 transition-all duration-500"
            >
              <span className="text-text-primary text-sm tracking-wide">View Work</span>
              <svg className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute bottom-0 left-6 right-6 md:left-10 md:right-10 h-[1px] bg-dark-border origin-left"
      />
    </section>
  );
}
