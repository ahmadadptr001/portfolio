import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: '06+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
  ];

  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-10" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16 md:mb-24"
        >
          <span className="text-accent font-mono text-xs">01</span>
          <div className="w-12 h-[1px] bg-dark-border" />
          <span className="text-text-muted text-xs tracking-[0.3em] uppercase">About</span>
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Left - Big statement */}
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-[2.5rem] leading-[1.3] font-display text-text-primary"
            >
              I believe in the power of{' '}
              <span className="italic text-accent">thoughtful design</span>{' '}
              and clean code to transform ideas into memorable digital experiences that{' '}
              <span className="italic text-accent">resonate</span> with users.
            </motion.p>
          </div>

          {/* Right - Details */}
          <div className="md:col-span-4 md:col-start-9 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-text-secondary text-sm leading-relaxed"
            >
              Based in Jakarta, Indonesia. I'm a creative developer with a passion 
              for building beautiful, functional, and user-centered digital 
              experiences. With 6+ years of experience in web development and 
              design, I bring a unique blend of technical expertise and creative vision.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-text-secondary text-sm leading-relaxed"
            >
              I specialize in crafting high-performance web applications with 
              modern technologies, ensuring every pixel serves a purpose and every 
              interaction feels natural.
            </motion.p>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6 border-t border-dark-border"
            >
              <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind', 'Figma', 'Framer Motion', 'PostgreSQL'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-text-secondary border border-dark-border px-3 py-1.5 hover:border-accent/30 hover:text-accent transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 md:mt-32 grid grid-cols-3 gap-8 border-t border-dark-border pt-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-3xl md:text-5xl font-display text-text-primary mb-2">{stat.number}</p>
              <p className="text-text-muted text-xs tracking-[0.15em] uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
