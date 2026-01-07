function Loader() {
  return (
    <section className="w-full border border-green-400 flex items-center justify-center h-full text-5xl overflow-hidden dark:text-white">
      <div className="loader-outer w-16 h-16 bg-conic from-black to-neutral-400 animate-spin flex items-center justify-center rounded-full">
        <div className="loader-inner h-14 w-14 bg-black rounded-full"></div>
      </div>
    </section>
  );
}

export default Loader;
