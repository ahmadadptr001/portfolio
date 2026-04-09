import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    period: '2023 — Present',
    role: 'Senior Creative Developer',
    company: 'Freelance',
    description: 'Leading end-to-end digital projects for global clients, from concept to deployment.',
  },
  {
    period: '2021 — 2023',
    role: 'Frontend Developer',
    company: 'Zenith Digital Agency',
    description: 'Built performant web applications and led the design system initiative.',
  },
  {
    period: '2019 — 2021',
    role: 'UI/UX Designer & Developer',
    company: 'Pulse Studios',
    description: 'Designed and developed user interfaces for SaaS products and mobile apps.',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-40 px-6 md:px-10 bg-dark-light" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="text-accent font-mono text-xs">—</span>
              <span className="text-text-muted text-xs tracking-[0.3em] uppercase">Experience</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-display text-text-primary mb-6"
            >
              Career <span className="italic text-accent">Journey</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-text-secondary text-sm leading-relaxed"
            >
              A timeline of professional growth, from early design exploration to leading complex digital projects.
            </motion.p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="group border-b border-dark-border py-8 md:py-10 first:pt-0"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <span className="text-text-muted text-xs font-mono tracking-wider shrink-0 md:w-36 pt-1">
                    {exp.period}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-display text-text-primary group-hover:text-accent transition-colors duration-300 mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-accent/70 text-sm mb-3">{exp.company}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
