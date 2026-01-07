import formatDate from "../../utils/formatDate";
import { FaEye } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import {
  taskPriority,
  taskStatus,
  type TaskPriority,
  type TaskStatus,
} from "../../constants/constants";

function AllTasks() {
  const tasks = [
    {
      title: "Learn DSA",
      workspace: "Study",
      status: "not-started",
      priority: "high",
      startDate: "2025-12-25T00:00:00.000+00:00",
      endDate: "2025-12-30T00:00:00.000+00:00",
    },
    {
      title: "Revise JavaScript Concepts",
      workspace: "Study",
      status: "in-progress",
      priority: "medium",
      startDate: "2025-12-26T00:00:00.000+00:00",
      endDate: "2025-12-28T00:00:00.000+00:00",
    },
    {
      title: "Practice React Hooks",
      workspace: "Study",
      status: "not-started",
      priority: "high",
      startDate: "2025-12-27T00:00:00.000+00:00",
      endDate: "2025-12-31T00:00:00.000+00:00",
    },
    {
      title: "Complete Office Report",
      workspace: "Office",
      status: "in-progress",
      priority: "high",
      startDate: "2025-12-25T00:00:00.000+00:00",
      endDate: "2025-12-26T00:00:00.000+00:00",
    },
    {
      title: "Fix Bugs in Task Manager App",
      workspace: "Office",
      status: "not-started",
      priority: "medium",
      startDate: "2025-12-26T00:00:00.000+00:00",
      endDate: "2025-12-29T00:00:00.000+00:00",
    },
    {
      title: "Write API Documentation",
      workspace: "Office",
      status: "completed",
      priority: "low",
      startDate: "2025-12-23T00:00:00.000+00:00",
      endDate: "2025-12-24T00:00:00.000+00:00",
    },
    {
      title: "Workout Session",
      workspace: "Personal",
      status: "completed",
      priority: "medium",
      startDate: "2025-12-24T00:00:00.000+00:00",
      endDate: "2025-12-24T00:00:00.000+00:00",
    },
    {
      title: "Plan Weekly Schedule",
      workspace: "Personal",
      status: "not-started",
      priority: "low",
      startDate: "2025-12-28T00:00:00.000+00:00",
      endDate: "2025-12-28T00:00:00.000+00:00",
    },
    {
      title: "Learn Redis Basics",
      workspace: "Study",
      status: "not-started",
      priority: "medium",
      startDate: "2025-12-29T00:00:00.000+00:00",
      endDate: "2026-01-02T00:00:00.000+00:00",
    },
    {
      title: "Refactor Backend Code",
      workspace: "Office",
      status: "in-progress",
      priority: "high",
      startDate: "2025-12-27T00:00:00.000+00:00",
      endDate: "2025-12-30T00:00:00.000+00:00",
    },
  ];

  return (
    <section className="w-full h-full">
      <h2 className="mt-2 py-2 px-4 text-center text-3xl font-bold w-fit mx-auto rounded-lg dark:bg-neutral-800">
        All Tasks
      </h2>

      {/* main area */}
      <div className="mt-4 px-2 h-[75%] overflow-auto">
        <table className="w-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
          <thead className="sticky top-0 left-0">
            <tr className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm uppercase tracking-wide">
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Workspace</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Priority</th>
              <th className="px-4 py-3 text-left">Start Date</th>
              <th className="px-4 py-3 text-left">End Date</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
            {tasks.map((task, i) => (
              <tr
                key={i}
                className="hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                <td className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">
                  {i + 1}
                </td>

                <td className="px-4 py-3 font-medium text-neutral-900 dark:text-neutral-100">
                  {task.title}
                </td>

                <td className="px-4 py-3 text-neutral-700 dark:text-neutral-300">
                  {task.workspace}
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`w-full block text-center px-2 py-1 rounded-full text-xs font-semibold
              ${task.status === "completed"
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                        : task.status === "in-progress"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                          : "bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300"
                      }`}
                  >
                    {taskStatus.filter((st) => st.key === task.status)[0].val}
                  </span>
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`w-full block text-center px-2 py-1 rounded-full text-xs font-semibold
              ${task.priority === "high"
                        ? "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                        : task.priority === "medium"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                          : "bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300"
                      }`}
                  >
                    {taskPriority.filter((prt) => prt.key === task.priority)[0].val}
                  </span>
                </td>

                <td className="text-sm px-4 py-3 text-neutral-600 dark:text-neutral-400">
                  {formatDate(task.startDate)}
                </td>

                <td className="text-sm px-4 py-3 text-neutral-600 dark:text-neutral-400">
                  {formatDate(task.endDate)}
                </td>
                <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">
                  <button
                    title="View"
                    className="mx-1 bg-neutral-700 text-amber-400 text-xl p-1 rounded-md font-bold cursor-pointer hover:scale-105"
                  >
                    <FaEye />
                  </button>
                  <button
                    title="Delete"
                    className="mx-1 bg-neutral-700 text-red-500 text-xl p-1 rounded-md font-bold cursor-pointer hover:scale-105"
                  >
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AllTasks;
