import { FaHome, FaNetworkWired } from "react-icons/fa";
import { MdTask, MdOutlineTaskAlt } from "react-icons/md";
import type { IconType } from "react-icons/lib";
import { MdWorkspaces } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaFolderPlus } from "react-icons/fa6";

export const logoText = "Task Manager";
export const companyName = "BD Technologies";

export interface Sidebar {
  name: string;
  route: string;
  icon: IconType;
  children?: Sidebar[];
}

export const sidebar: Sidebar[] = [
  {
    name: "Dashboard",
    route: "/users/dashboard",
    icon: FaHome,
    children: [],
  },
  {
    name: "Tasks",
    route: "tasks",
    icon: MdOutlineTaskAlt,
    children: [
      {
        name: "All Tasks",
        route: "/tasks/all-tasks",
        icon: MdTask,
      },
      {
        name: "Create Task",
        route: "/tasks/create-task",
        icon: IoAddCircleOutline,
      },
    ],
  },
  {
    name: "Workspaces",
    route: "workspaces",
    icon: MdWorkspaces,
    children: [
      {
        name: "All Workspaces",
        route: "/workspaces/all-workspaces",
        icon: FaNetworkWired,
      },
      {
        name: "Create Workspace",
        route: "/workspaces/create-workspace",
        icon: FaFolderPlus,
      },
    ],
  },
  {
    name: "Filters Pipeline",
    route: "filters-pipeline",
    icon: FaFilter,
  },
];

interface TaskStatus {
  key: string;
  val: string;
}

const taskStatus: TaskStatus[] = [
  {
    key: "not-started",
    val: "NOT STARTED",
  },
  {
    key: "in-progress",
    val: "IN PROGRESS",
  },
  {
    key: "completed",
    val: "COMPLETED",
  },
];

interface TaskPriority {
  key: string;
  val: string;
}

const taskPriority: TaskPriority[] = [
  {
    key: "low",
    val: "LOW",
  },
  {
    key: "medium",
    val: "MEDIUM",
  },
  {
    key: "high",
    val: "HIGH",
  },
];

export { taskStatus, taskPriority };

export type { TaskStatus, TaskPriority };
