export default function TopBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-5 text-center">
      <a
        href="https://huggingface.co/spaces/akhaliq/anycoder"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs uppercase tracking-[0.1em] text-gray-300 hover:text-blocked-red transition-colors duration-300"
      >
        Built with anycoder
      </a>
    </header>
  );
}