import SERVICE_ERRORS from "../../../constants/errors/serviceErrors.js";
import SERVICE_MESSAGES from "../../../constants/messages/serviceMessages.js";

import { User, Workspace } from "../../../models/index.js";
import ServiceResult from "../../../utils/ServiceResult.js";
import findExistenceInDbById from "../../../utils/findExistenceInDB.js";
import validateMongoDbObjectId from "../../../utils/validateMongoDbObjectId.js";

async function createWorkspace({ name, description }, createdBy) {
  // const isValidMongoDbObjectId = validateMongoDbObjectId(createdBy);

  // if (!isValidMongoDbObjectId) {
  //   ServiceResult.failure(
  //     400,
  //     SERVICE_ERRORS.INVALID_MONGODB_OBJECT_ID.getMessage("User"),
  //   );
  // }

  const isUserExist = await findExistenceInDbById(User, createdBy);
  if (!isUserExist) {
    // throws error
    ServiceResult.failure(401, SERVICE_ERRORS.UNAUTHORIZED.message);
  }
  try {
    const createdWorkspace = await Workspace.create({
      name: name.toLowerCase(),
      description,
      createdBy,
    });
    return ServiceResult.success(
      { workspaceId: createdWorkspace._id },
      201,
      SERVICE_MESSAGES.WORKSPACE_CREATED.message
    );
  } catch (error) {
    if (error.code === 11000) {
      ServiceResult.failure(400, SERVICE_ERRORS.DUP_WORKSPACE_NAME.message);
    } else {
      ServiceResult.failure(500, SERVICE_ERRORS.INTERNAL_SERVER_ERROR.message);
    }
  }
}

async function getAllWorkspacesOfUser(userId) {
  // const isValidMongoDbObjectId = validateMongoDbObjectId(userId);

  // if (!isValidMongoDbObjectId) {
  //   return ServiceResult.failure(
  //     SERVICE_ERRORS.INVALID_MONGODB_OBJECT_ID.getMessage("User"),
  //     400
  //   );
  // }

  const isUserExist = await findExistenceInDbById(User, userId);
  if (!isUserExist) {
    // throws error
    ServiceResult.failure(401, SERVICE_ERRORS.UNAUTHORIZED.message);
  }

  try {
    const workspacesOfUser = await Workspace.find({ createdBy: userId }).select(
      "-createdBy -createdAt -updatedAt -__v"
    );

    return ServiceResult.success(
      workspacesOfUser,
      200,
      SERVICE_MESSAGES.WORKSPACES_FOUND.message
    );
  } catch (error) {
    console.log("Error from getAllWorkspacesOfUser()", error);
  }
}

async function updateWorkspaceDetailsById(userId, workspaceId, updates) {
  const isValidMongoDbObjectId = validateMongoDbObjectId(workspaceId);

  if (!isValidMongoDbObjectId) {
    ServiceResult.failure(
      400,
      SERVICE_ERRORS.INVALID_MONGODB_OBJECT_ID.getMessage("Workspace")
    );
  }

  try {
    const foundWorkspace = await Workspace.findOne({
      _id: workspaceId,
      createdBy: userId,
    }).select("-createdBy -createdAt -updatedAt -__v");

    if (!foundWorkspace) {
      ServiceResult.failure(400, SERVICE_ERRORS.INVALID_REQUEST.message);
    }

    Object.assign(foundWorkspace, updates);

    console.log(foundWorkspace);

    await foundWorkspace.save();

    return ServiceResult.success(
      foundWorkspace,
      200,
      SERVICE_MESSAGES.WORKSPACE_UPDATED.message
    );
  } catch (error) {
    ServiceResult.failure(error.statusCode, error.message);
  }
}

export { createWorkspace, getAllWorkspacesOfUser, updateWorkspaceDetailsById };
