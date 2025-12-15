export default function ModelCard({ image, name, bio }) {
  return (
    <div className="text-center group">
      <div className="w-full bg-gray-100 overflow-hidden mb-6" style={{ aspectRatio: '3/4' }}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-103"
        />
      </div>
      <h3 className="text-2xl font-black uppercase tracking-tight text-blocked-black mb-2">
        {name}
      </h3>
      <p className="text-sm text-gray-500 mb-6 max-w-[80%] mx-auto">
        {bio}
      </p>
      <a
        href="https://fanvue.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-blocked-red text-blocked-red px-8 py-3 text-xs font-extrabold uppercase tracking-widest transition-all duration-300 hover:bg-blocked-red hover:text-blocked-white"
      >
        Subscribe
      </a>
    </div>
  );
}