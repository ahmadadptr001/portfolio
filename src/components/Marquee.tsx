export default function Marquee() {
  const items = [
    'Web Development',
    'UI/UX Design',
    'Brand Identity',
    'Motion Design',
    'Creative Direction',
    'Frontend Architecture',
  ];

  return (
    <div className="py-8 border-y border-dark-border overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-6 mx-6">
            <span className="text-text-muted text-sm tracking-[0.2em] uppercase font-light">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
          </span>
        ))}
      </div>
    </div>
  );
}
