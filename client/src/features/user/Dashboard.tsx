function Dashboard() {
  return <section className="w-full p-2">

    <fieldset className="border border-neutral-700 rounded-lg">
      <legend className="text-xl font-bold px-4">#Tasks</legend>

      <div className="grid grid-cols-4 p-4 gap-4">
        <div className="flex flex-col gap-4 p-8 rounded-lg transition-all duration-200 shadow-neutral-800 dark:bg-neutral-800 hover:scale-102 hover:shadow-2xl">
          <p className="text-7xl font-bold text-center">40</p>
          <span className="text-center text-sm font-semibold">Total</span>
        </div>

        <div className="flex flex-col gap-4 p-8 rounded-lg transition-all duration-200 shadow-neutral-800 dark:bg-neutral-800 hover:scale-102 hover:shadow-2xl">
          <p className="text-7xl font-bold text-center text-green-600">20</p>
          <span className="text-center text-sm font-semibold">Completed</span>
        </div>

        <div className="flex flex-col gap-4 p-8 rounded-lg transition-all duration-200 shadow-neutral-800 dark:bg-neutral-800 hover:scale-102 hover:shadow-2xl">
          <p className="text-7xl font-bold text-center text-neutral-500">5</p>
          <span className="text-center text-sm font-semibold">Not started</span>
        </div>

        <div className="flex flex-col gap-4 p-8 rounded-lg transition-all duration-200 shadow-neutral-800 dark:bg-neutral-800 hover:scale-102 hover:shadow-2xl">
          <p className="text-7xl font-bold text-center text-blue-500">15</p>
          <span className="text-center text-sm font-semibold">In progress</span>
        </div>
      </div>

    </fieldset>


  </section>;
}

export default Dashboard;
