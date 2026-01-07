import ApiResponse from "./ApiResponse.js";

function sendApiResponse(response, result) {
  // checking for cookies
  const { cookies } = result;
  if (Array.isArray(cookies)) {
    cookies.forEach((cookie) => {
      response.cookie(cookie.name, cookie.value, cookie.options);
    });
  }

  return response.status(result.statusCode).json(new ApiResponse(result));
}

export default sendApiResponse;
