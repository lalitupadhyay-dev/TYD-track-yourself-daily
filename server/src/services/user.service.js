import SERVICE_ERRORS from "../constants/errors/serviceErrors.js";
import SERVICE_MESSAGES from "../constants/messages/serviceMessages.js";
import User from "../models/user.model.js";
import ServiceResult from "../utils/ServiceResult.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// for creating the user
async function createUser(userData) {
  try {
    // check if user already exists
    const existedUser = await User.findOne({ email: userData.email });

    // if user already exists
    if (existedUser) {
      return ServiceResult.failure(SERVICE_ERRORS.USER_ALREADY_EXISTS.message);
    }

    const createdUser = await User.create(userData);

    return ServiceResult.success(
      createdUser,
      SERVICE_MESSAGES.USER_CREATED.message
    );
  } catch (error) {
    console.log(error);
  }
}

// for login the user
async function login(payload) {
  try {
    // find the user with email id;
    const foundUser = await User.findOne({ email: payload.email }).select(
      "_id email password"
    );

    // if user is not found return with error
    if (!foundUser) {
      return ServiceResult.failure(SERVICE_ERRORS.USER_NOT_FOUND.message);
    }

    // compare the password
    const isMatched = await bcrypt.compare(
      payload.password,
      foundUser.password
    );

    if (!isMatched) {
      return ServiceResult.failure(SERVICE_ERRORS.INCORRECT_CREDS.message);
    }

    // create JWT token for session maintenance
    const token = jwt.sign(
      { userId: foundUser._id, email: foundUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "60s",
      }
    );

    return ServiceResult.success(
      token,
      SERVICE_MESSAGES.LOGIN_SUCCEED.message,
      [
        {
          name: "token",
          value: token,
          options: {
            httpOnly: true,
            secure: true,
          },
        },
      ]
    );
  } catch (error) {
    console.log(error);
  }
}

// for getting user profile
async function getProfile(userId) {
  try {
    // check if user exists by that id
    const foundUser = await User.findById({ _id: userId }).select(
      "-_id -__v -createdAt -updatedAt"
    );

    if (!foundUser) {
      return ServiceResult.failure(SERVICE_ERRORS.USER_NOT_FOUND.message);
    }

    return ServiceResult.success(
      foundUser,
      SERVICE_MESSAGES.USER_FOUND.message
    );
  } catch (error) {
    console.log(error);
  }
}

export { createUser, login, getProfile };
