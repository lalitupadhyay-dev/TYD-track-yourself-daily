import sendApiResponse from "../utils/sendApiResponse.js";
import * as userService from "../services/user.service.js";

// Response object { data = null, success, message, statusCode = 200, errors }

async function healthCheck(request, response) {
  return sendApiResponse(response, {
    success: true,
    statusCode: 200,
    message: "User health check is working fine!",
  });
}

async function createUser(request, response) {
  const userData = request.body;

  // creating UserService object
  const result = await userService.createUser(userData);

  if (!result.success) {
    return sendApiResponse(response, {
      success: false,
      statusCode: 409,
      error: result.error,
    });
  }

  return sendApiResponse(response, {
    success: true,
    statusCode: 200,
    message: result.message,
  });
}

async function login(request, response) {
  const { email, password } = request.body;

  // calling auth service
  const result = await userService.login({ email, password });

  if (!result.success) {
    return sendApiResponse(response, {
      success: false,
      statusCode: 400,
      error: result.error,
    });
  }

  return sendApiResponse(response, {
    data: result.data,
    success: true,
    statusCode: 200,
    cookies: result.cookies,
  })

}

async function getProfile(request, response) {
  // take userId from params
  const { userId } = request.params;

  // call service method
  const result = await userService.getProfile(userId);

  if (!result.success) {
    return sendApiResponse(response, {
      success: false,
      statusCode: 404,
      error: result.error,
    });
  }

  return sendApiResponse(response, {
    data: result.data,
    success: true,
    statusCode: 302,
    message: result.message,
  });
}

export { healthCheck, createUser, login, getProfile };
