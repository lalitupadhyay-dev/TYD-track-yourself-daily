const SERVICE_ERRORS = {
  UNAUTHORIZED: {
    code: "UNAUTHORIZED",
    message: "Unauthorized access!",
  },
  DUP_WORKSPACE_NAME: {
    code: "",
    message: "Workspace with this name already exists!",
  },
  USER_ALREADY_EXISTS: {
    code: "USER_ALREADY_EXISTS",
    message: "User already exists!",
  },
  USER_NOT_FOUND: {
    code: "USER_NOT_FOUND",
    message: "User not found!",
  },
  INCORRECT_CREDS: {
    code: "USER_LOGIN",
    message: "Incorrect email or password!",
  },
  DUPLICATE_TITLE_TASK: {
    code: "DUPLICATE_TITLE_TASK",
    message: "Task with this title already exists!",
  },
  TASK_NOT_CREATED: {
    code: "TASK_NOT_CREATED",
    message: "Task not created successfully!",
  },
  INVALID_MONGODB_OBJECT_ID: {
    code: "INVALID_MONGODB_OBJECT_ID",
    getMessage: (ctx) => `Invalid ${ctx} ID!`,
  },
  INTERNAL_SERVER_ERROR: {
    code: "INTERNAL_SERVER_ERROR",
    message: "Internal server error!",
  },
  INVALID_REQUEST: {
    code: "INVALID_REQUEST",
    message: "Invalid request!",
  },
};

export default SERVICE_ERRORS;
