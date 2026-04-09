import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building performant, scalable web applications with modern frameworks and best practices. From SPAs to full-stack solutions.',
    details: ['React / Next.js', 'TypeScript', 'API Development', 'Performance Optimization'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Designing intuitive interfaces that prioritize user experience. Research-driven approach with attention to every detail.',
    details: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Brand Identity',
    description: 'Creating cohesive brand identities that communicate values and connect with target audiences across all touchpoints.',
    details: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Digital Assets'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Creative Consulting',
    description: 'Strategic guidance for digital products. Helping businesses define their digital presence and achieve their goals.',
    details: ['Product Strategy', 'Technical Consulting', 'Code Review', 'Team Mentoring'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onClick={() => setExpanded(!expanded)}
      className="group border border-dark-border p-8 md:p-10 hover:border-accent/20 transition-all duration-500 cursor-pointer relative overflow-hidden"
    >
      {/* Background number */}
      <span className="absolute -right-4 -top-6 text-[8rem] font-display text-dark-light/80 select-none pointer-events-none">
        {String(index + 1).padStart(2, '0')}
      </span>
      
      <div className="relative z-10">
        {/* Icon + Title */}
        <div className="flex items-start justify-between mb-6">
          <div className="text-accent/60 group-hover:text-accent transition-colors duration-500">
            {service.icon}
          </div>
          <motion.div
            animate={{ rotate: expanded ? 45 : 0 }}
            className="w-6 h-6 border border-dark-border rounded-full flex items-center justify-center group-hover:border-accent/30 transition-colors"
          >
            <svg className="w-3 h-3 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </motion.div>
        </div>

        <h3 className="text-xl md:text-2xl font-display text-text-primary mb-3 group-hover:text-accent transition-colors duration-500">
          {service.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Expanded details */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <div className="pt-6 mt-6 border-t border-dark-border">
            <div className="grid grid-cols-2 gap-3">
              {service.details.map((detail) => (
                <div key={detail} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent/60" />
                  <span className="text-text-secondary text-xs">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-40 px-6 md:px-10" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-accent font-mono text-xs">03</span>
          <div className="w-12 h-[1px] bg-dark-border" />
          <span className="text-text-muted text-xs tracking-[0.3em] uppercase">Services</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-display text-text-primary"
          >
            What I <span className="italic text-accent">Do</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-text-secondary text-sm max-w-xs"
          >
            Comprehensive digital services tailored to bring your vision to life.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
