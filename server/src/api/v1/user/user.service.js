
import ServiceResult from "../../../utils/ServiceResult.js";
import { User } from "../../../models/index.js";
import SERVICE_ERRORS from "../../../constants/errors/serviceErrors.js";
import SERVICE_MESSAGES from "../../../constants/messages/serviceMessages.js";

async function createUser(userData) {
  const isExistedUser = await User.findOne({ email: userData.email });

  if (isExistedUser) {
    ServiceResult.failure(409, SERVICE_ERRORS.USER_ALREADY_EXISTS.message);
  }

  try {
    const createdUser = await User.create(userData);
    
    return ServiceResult.success(
        createdUser,
        201,
        SERVICE_MESSAGES.USER_CREATED.message
    );
  } catch (error) {
    ServiceResult.failure(
      500,
      "Internal Server Error - from (UserService - createUser)" + error.message
    );
  }
}

export { createUser };
