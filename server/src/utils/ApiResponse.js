/**
 * For creating a standard response object
 */
class ApiResponse {
  constructor({
    data = null,
    success,
    message,
    statusCode = 200,
    error = "",
  }) {
    this.data = data;
    this.success = success;
    this.message = message;
    this.statusCode = statusCode;
    this.error = error;
  }
}

export default ApiResponse;
