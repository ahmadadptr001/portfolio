import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Working with Arfan was an absolute pleasure. His attention to detail and creative problem-solving elevated our project beyond our expectations.",
    name: 'Sarah Chen',
    role: 'CEO, Zenith Labs',
    initial: 'S',
  },
  {
    id: 2,
    quote: "The level of craftsmanship in both design and code is remarkable. He delivers not just a product, but an experience that our users genuinely love.",
    name: 'Marcus Johnson',
    role: 'Product Lead, Noir Inc.',
    initial: 'M',
  },
  {
    id: 3,
    quote: "Arfan combines technical expertise with genuine creative vision. He understood our brand perfectly and translated it into a stunning digital presence.",
    name: 'Elena Rossi',
    role: 'Founder, Aura Studio',
    initial: 'E',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 md:py-40 px-6 md:px-10 bg-dark-light" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16 md:mb-24"
        >
          <span className="text-accent font-mono text-xs">04</span>
          <div className="w-12 h-[1px] bg-dark-border" />
          <span className="text-text-muted text-xs tracking-[0.3em] uppercase">Testimonials</span>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12">
          {/* Left - Quote */}
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Quote mark */}
              <span className="text-accent/20 text-8xl md:text-[10rem] font-display leading-none select-none block -mb-8 md:-mb-16">
                "
              </span>
              
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-3xl lg:text-4xl font-display text-text-primary leading-[1.4] mb-10"
              >
                {testimonials[active].quote}
              </motion.p>

              <motion.div
                key={`author-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="text-accent text-sm font-mono">{testimonials[active].initial}</span>
                </div>
                <div>
                  <p className="text-text-primary text-sm font-medium">{testimonials[active].name}</p>
                  <p className="text-text-muted text-xs">{testimonials[active].role}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right - Navigation */}
          <div className="md:col-span-3 md:col-start-10 flex md:flex-col gap-4 md:justify-center">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 p-4 border transition-all duration-500 w-full text-left ${
                  active === i 
                    ? 'border-accent/30 bg-accent/5' 
                    : 'border-dark-border hover:border-dark-border/80'
                }`}
              >
                <span className={`text-xs font-mono transition-colors ${
                  active === i ? 'text-accent' : 'text-text-muted'
                }`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="hidden md:block">
                  <p className={`text-sm transition-colors ${
                    active === i ? 'text-text-primary' : 'text-text-secondary'
                  }`}>{t.name}</p>
                  <p className="text-text-muted text-xs">{t.role}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
