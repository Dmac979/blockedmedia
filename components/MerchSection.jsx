import ImageCard from './ImageCard';

const products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop',
    meta: 'Apparel',
    title: 'Oversized Hoodie',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop',
    meta: 'Apparel',
    title: 'Signature Tee',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop',
    meta: 'Accessories',
    title: 'Tote Bag',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1622445275576-721325763afe?q=80&w=1000&auto=format&fit=crop',
    meta: 'Apparel',
    title: 'Essential Cap',
  },
];

export default function MerchSection() {
  return (
    <section id="merch" className="py-32 px-8 bg-blocked-white">
      <div className="max-w-7xl mx-auto reveal">
        <h2 className="text-blocked-red font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-16 tracking-tighter uppercase">
          MERCH
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {products.map((item) => (
            <ImageCard
              key={item.id}
              image={item.image}
              meta={item.meta}
              title={item.title}
              aspectRatio="1/1"
            />
          ))}
        </div>
        
        <p className="text-center text-blocked-black text-sm tracking-[0.2em] uppercase mt-16 opacity-70">
          Drops coming soon.
        </p>
      </div>
    </section>
  );
}