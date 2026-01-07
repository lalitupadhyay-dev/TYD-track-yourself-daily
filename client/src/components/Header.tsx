function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      <h1 className="text-4xl font-bold tracking-wide dark:text-white">
        TYD
      </h1>
      <div className="flex gap-4">
        <button className="text-sm text-gray-400 hover:text-white transition">
          Features
        </button>
        <button className="text-sm text-gray-400 hover:text-white transition">
          Pricing
        </button>
        <button className="cursor-pointer rounded-md bg-neutral-800 px-5 py-2 text-sm hover:bg-neutral-700 transition dark:text-white">
          Start Free
        </button>
      </div>
    </header>
  );
}

export default Header;
