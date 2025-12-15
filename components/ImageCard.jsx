export default function ImageCard({ image, meta, title, aspectRatio = '3/4' }) {
  return (
    <div className="group cursor-pointer">
      <div 
        className="w-full bg-gray-100 overflow-hidden relative mb-6 transition-all duration-500 group-hover:outline group-hover:outline-1 group-hover:outline-blocked-red group-hover:outline-offset-8"
        style={{ aspectRatio }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>
      <p className="text-xs tracking-[0.1em] uppercase text-gray-500 mb-2">
        {meta}
      </p>
      <h3 className="text-lg font-extrabold uppercase tracking-tight text-blocked-black">
        {title}
      </h3>
    </div>
  );
}