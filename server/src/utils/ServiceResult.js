import ApiError from "./ApiError.js";

/**
 * Standard result object for services
 */

class ServiceResult {
  constructor({
    data = null,
    success,
    statusCode = 200,
    message = "",
    error = "",
    cookies = [],
  }) {
    this.data = data;
    this.success = success;
    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
    this.cookies = cookies;
  }
  static success(data, statusCode, message, cookies) {
    return new ServiceResult({
      success: true,
      statusCode,
      data,
      message,
      cookies,
    });
  }
  static failure(statusCode, message) {
    throw new ApiError({ statusCode, message });
  }
}

export default ServiceResult;
