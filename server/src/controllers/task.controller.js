import * as taskService from "../services/task.service.js";
import sendApiResponse from "../utils/sendApiResponse.js";

// for creating tasks
async function createTask(request, response) {
  const taskData = request.body;

  try {
    const result = await taskService.createTask(taskData);

    if (!result.success) {
      return sendApiResponse(response, {
        success: false,
        statusCode: 400,
        error: result.error,
      });
    }

    return sendApiResponse(response, {
      success: true,
      statusCode: 201,
      message: result.message,
    });
  } catch (error) {
    return sendApiResponse(response, {
        success: false,
        statusCode: 400,
        error: error.message,
      });
  }
}

// for searching tasks
async function searchTaskByTitle(request, response) {
  const { title, match } = request.query;
  const {userId} = request;

  try {
    const result = await taskService.searchTaskByTitle(title, match, userId);
    // if (!result.success) {
    //   return sendApiResponse(response, {
    //     success: false,
    //     statusCode: 200,
    //     error: result.error,
    //   });
    // }

    return sendApiResponse(response, {
      data: result.data,
      success: true,
      statusCode: 200,
      message: result.message,
    });
  } catch (error) {
    console.log(error);
    response.send("error from catch block while searching for task by title!");
  }
}

// for fetching all tasks
async function getAllTasks(request, response) {
  const { userId } = request;

  try {
    const result = await taskService.getAllTasks(userId);

    if (!result.success) {
      return sendApiResponse(response, {
        success: false,
        statusCode: 500,
        error: result.error,
      });
    }

    return sendApiResponse(response, {
      data: result.data,
      success: true,
      statusCode: 200,
      message: result.message
    })

  } catch (error) {
    return sendApiResponse(response, {
      success: false,
      statusCode: 500,
      error: error,
    });
  }
}



export { createTask, searchTaskByTitle, getAllTasks };
