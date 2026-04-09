import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { label: 'GitHub', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Dribbble', href: '#' },
    { label: 'Twitter', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-10" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16 md:mb-24"
        >
          <span className="text-accent font-mono text-xs">05</span>
          <div className="w-12 h-[1px] bg-dark-border" />
          <span className="text-text-muted text-xs tracking-[0.3em] uppercase">Contact</span>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-16">
          {/* Left side */}
          <div className="md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display text-text-primary leading-[1.1] mb-8"
            >
              Let's create
              <br />
              something{' '}
              <span className="italic text-accent">extraordinary</span>
              <br />
              together.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="mailto:hello@arfan.dev"
                className="group inline-flex items-center gap-4 mt-4"
              >
                <div className="w-14 h-14 border border-accent/40 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-all duration-500">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <span className="text-text-primary text-lg md:text-xl font-display group-hover:text-accent transition-colors duration-300">
                  hello@arfan.dev
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right side */}
          <div className="md:col-span-4 md:col-start-9 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-4">Location</p>
                <p className="text-text-primary text-sm">Jakarta, Indonesia</p>
                <p className="text-text-secondary text-sm">GMT+7</p>
              </div>

              <div>
                <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-4">Socials</p>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="group/link flex items-center justify-between py-2 border-b border-dark-border hover:border-accent/20 transition-colors duration-300"
                    >
                      <span className="text-text-secondary text-sm group-hover/link:text-text-primary transition-colors">
                        {link.label}
                      </span>
                      <svg className="w-3 h-3 text-text-muted group-hover/link:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
