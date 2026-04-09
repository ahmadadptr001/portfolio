import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Zenith Studio',
    category: 'Web Design & Development',
    year: '2025',
    description: 'A premium creative agency website with immersive 3D elements and seamless animations.',
    tags: ['Next.js', 'Three.js', 'GSAP'],
    color: '#2a2520',
    image: '🏔️',
  },
  {
    id: 2,
    title: 'Noir Commerce',
    category: 'E-Commerce Platform',
    year: '2025',
    description: 'Luxury fashion e-commerce with personalized shopping experience and AI recommendations.',
    tags: ['React', 'Node.js', 'Stripe'],
    color: '#1a1a24',
    image: '🛍️',
  },
  {
    id: 3,
    title: 'Pulse Dashboard',
    category: 'SaaS Application',
    year: '2024',
    description: 'Analytics dashboard for fintech startup with real-time data visualization and reporting.',
    tags: ['TypeScript', 'D3.js', 'PostgreSQL'],
    color: '#1a2420',
    image: '📊',
  },
  {
    id: 4,
    title: 'Aura Health',
    category: 'Mobile App Design',
    year: '2024',
    description: 'Mental wellness app with meditation tracking, mood journaling, and community features.',
    tags: ['React Native', 'Firebase', 'Figma'],
    color: '#241a20',
    image: '🧘',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="project-card group border-b border-dark-border"
    >
      <div className="grid md:grid-cols-12 gap-6 py-10 md:py-16 items-center cursor-pointer">
        {/* Number */}
        <div className="md:col-span-1">
          <span className="text-text-muted font-mono text-xs">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Image placeholder */}
        <div className="md:col-span-3">
          <div
            className="aspect-[4/3] rounded-sm overflow-hidden flex items-center justify-center transition-all duration-700"
            style={{ backgroundColor: project.color }}
          >
            <motion.span
              animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl project-image"
            >
              {project.image}
            </motion.span>
          </div>
        </div>

        {/* Title & Category */}
        <div className="md:col-span-4">
          <h3 className="text-xl md:text-3xl font-display text-text-primary group-hover:text-accent transition-colors duration-500 mb-1">
            {project.title}
          </h3>
          <p className="text-text-muted text-xs tracking-[0.15em] uppercase">{project.category}</p>
        </div>

        {/* Description & Tags */}
        <div className="md:col-span-3">
          <p className="text-text-secondary text-sm leading-relaxed mb-4 hidden md:block">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] text-text-muted border border-dark-border px-2 py-1 font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Year + Arrow */}
        <div className="md:col-span-1 flex md:flex-col items-center md:items-end gap-3">
          <span className="text-text-muted text-xs font-mono">{project.year}</span>
          <motion.div
            animate={isHovered ? { x: 4, y: -4 } : { x: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 md:py-40 px-6 md:px-10" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="text-accent font-mono text-xs">02</span>
              <div className="w-12 h-[1px] bg-dark-border" />
              <span className="text-text-muted text-xs tracking-[0.3em] uppercase">Selected Work</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-display text-text-primary"
            >
              Featured <span className="italic text-accent">Projects</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-text-secondary text-sm max-w-xs"
          >
            A curated selection of projects that showcase my approach to design and development.
          </motion.p>
        </div>

        {/* Project list */}
        <div className="border-t border-dark-border">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
