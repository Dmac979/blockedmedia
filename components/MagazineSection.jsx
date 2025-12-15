import ImageCard from './ImageCard';

const magazines = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    meta: 'Issue 001',
    title: 'The Void',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1000&auto=format&fit=crop',
    meta: 'Issue 002',
    title: 'Silence',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop',
    meta: 'Issue 003',
    title: 'Redacted',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    meta: 'Issue 004',
    title: 'Obscured',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    meta: 'Issue 005',
    title: 'Censored',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop',
    meta: 'Issue 006',
    title: 'Hidden',
  },
];

export default function MagazineSection() {
  return (
    <section id="magazine" className="py-32 px-8 bg-blocked-white">
      <div className="max-w-7xl mx-auto reveal">
        <h2 className="text-blocked-red font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-16 tracking-tighter uppercase">
          MAGAZINE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {magazines.map((item) => (
            <ImageCard
              key={item.id}
              image={item.image}
              meta={item.meta}
              title={item.title}
              aspectRatio="3/4"
            />
          ))}
        </div>
        
        <p className="text-center text-blocked-black text-sm tracking-[0.2em] uppercase mt-16 opacity-70">
          Limited issues. Exclusive features.
        </p>
      </div>
    </section>
  );
}