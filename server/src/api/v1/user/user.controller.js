import sendApiResponse from "../../../utils/sendApiResponse.js";
import * as userService from "./user.service.js";

async function createUser(request, response) {
  const userData = request.body;

  // creating UserService object
  const result = await userService.createUser(userData);

  console.log(result);

  return sendApiResponse(response, {
    data: result.data,
    success: true,
    statusCode: result.statusCode,
    message: result.message,
  });
}

export { createUser };
