function Header() {
  return (
    <header className="h-[10%] px-8 flex items-center justify-between">
      <h1 className="text-xl font-bold tracking-wide dark:text-white">
        TASK MANAGER {"{ TM }"}
      </h1>

      <div>
        <picture>
          <img
            className="h-9 border-2 border-neutral-600 rounded-full"
            src="/user-dark.png"
            title={"User"}
          />
        </picture>
      </div>
    </header>
  );
}

export default Header;
