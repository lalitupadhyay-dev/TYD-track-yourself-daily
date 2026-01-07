import sendApiResponse from "../utils/sendApiResponse.js";

function globalErrorHandler(error, request, response, next) {
  return sendApiResponse(response, {
    success: false,
    statusCode: error.statusCode,
    error: error.message,
  });
}

export default globalErrorHandler;
