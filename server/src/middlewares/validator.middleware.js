import sendApiResponse from "../utils/sendApiResponse.js";

function validator(schema) {
  return (request, response, next) => {
    const result = schema.safeParse(request.body);

    if (!result.success) {
      return sendApiResponse(response, {
        success: false,
        statusCode: 400,
        error: result.error?.issues?.[0].message,
      })
    }

    next();
  };
}

export default validator;