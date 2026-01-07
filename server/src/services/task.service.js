import SERVICE_ERRORS from "../constants/errors/serviceErrors.js";
import SERVICE_MESSAGES from "../constants/messages/serviceMessages.js";
import Task from "../models/task.model.js";
import ServiceResult from "../utils/ServiceResult.js";

// for creating tasks
async function createTask(taskData) {
  const { title, description, priority, startDate, endDate, createdBy } =
    taskData;

  const sameTitleTask = await Task.findOne({ title });

  if (sameTitleTask) {
    return ServiceResult.failure(SERVICE_ERRORS.DUPLICATE_TITLE_TASK.message);
  }

  const createdTask = await Task.create({
    title,
    description,
    priority,
    startDate,
    endDate,
    createdBy,
  });

  if (!createdTask) {
    return ServiceResult.failure(SERVICE_ERRORS.TASK_NOT_CREATED.message);
  }

  return ServiceResult.success(
    createdTask,
    SERVICE_MESSAGES.TASK_CREATED.message
  );
}

// for searching tasks
async function searchTaskByTitle(title, match, userId) {
  let fetchedTasks;

  const query = { createdBy: userId };

  match === "pattern"
    ? (query.title = { $regex: title, $options: "i" })
    : (query.title = title);

  fetchedTasks = await Task.find(query).select(
    "-createdBy -createdAt -updatedAt -__v"
  );

  if (fetchedTasks.length === 0) {
    return ServiceResult.success(
      null,
      SERVICE_MESSAGES.TASK_BY_TITLE_NOT_FOUND.message
    );
  }

  return ServiceResult.success(
    fetchedTasks,
    SERVICE_MESSAGES.TASK_BY_TITLE_FOUND.message
  );
}

// fot fetching all tasks
async function getAllTasks(userId) {
  const allTasks = await Task.find({ createdBy: userId }).select(
    "-createdBy -createdAt -updatedAt -__v"
  );

  // if (!Array.isArray(allTasks)) {
  //   return ServiceResult.failure()
  // }

  if (allTasks.length === 0) {
    return ServiceResult.success(null, SERVICE_MESSAGES.TASKS_EMPTY.message);
  }

  return ServiceResult.success(
    allTasks,
    SERVICE_MESSAGES.ALL_TASKS_FETCHED.message
  );
}

export { createTask, searchTaskByTitle, getAllTasks };
