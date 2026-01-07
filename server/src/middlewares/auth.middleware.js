import jwt from "jsonwebtoken";
import sendApiResponse from "../utils/sendApiResponse.js";
import AUTH_ERRORS from "../constants/errors/authErrors.js";

function auth(request, response, next) {
  const { token } = request.cookies;

  try {
    const userPayload = jwt.verify(token, process.env.JWT_SECRET);
    request.userId = userPayload.userId;
    next();
  } catch (error) {
    return sendApiResponse(response, {
      success: false,
      statusCode: 401,
      error: AUTH_ERRORS.JWT_EXPIRED.message,
    });
  }
}

export default auth;
