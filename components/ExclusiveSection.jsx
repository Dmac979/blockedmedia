import ModelCard from './ModelCard';

const models = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop',
    name: 'Aria',
    bio: 'Digital artist & muse based in Tokyo.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1000&auto=format&fit=crop',
    name: 'Elena',
    bio: 'Fashion icon redefining minimalist luxury.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop',
    name: 'Sasha',
    bio: 'Creative director & runway specialist.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop',
    name: 'Kai',
    bio: 'Avant-garde stylist & influencer.',
  },
];

export default function ExclusiveSection() {
  return (
    <section id="exclusive" className="py-32 px-8 bg-blocked-white">
      <div className="max-w-7xl mx-auto reveal">
        <h2 className="text-blocked-red font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-16 tracking-tighter uppercase">
          EXCLUSIVE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {models.map((model) => (
            <ModelCard
              key={model.id}
              image={model.image}
              name={model.name}
              bio={model.bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
}