import { response } from "express";
import sendApiResponse from "../../../utils/sendApiResponse.js";
import * as workspaceService from "./workspace.service.js";

async function createWorkspace(request, response) {
  const data = request.body;
  // here userId will come from auth middleware
  const createdBy = "694cfeafd1882d822d80adfb";

  const result = await workspaceService.createWorkspace(data, createdBy);

  return sendApiResponse(response, {
    data: result.data,
    success: true,
    statusCode: result.statusCode,
    message: result.message,
  });
}

async function getAllWorkspacesOfUser(request, response) {
  // here userId will come from auth middleware
  const userId = "694cfeafd1882d822d80adf5";

  const result = await workspaceService.getAllWorkspacesOfUser(userId);

  return sendApiResponse(response, {
    data: result.data,
    success: true,
    statusCode: result.statusCode,
    message: result.message,
  });
}

async function updateWorkspaceDetailsById(request, response) {
  // here userId will come from auth middleware
  const userId = "694cfe82d1882d822d80adf8";

  const { workspaceId } = request.params;
  const updates = request.body;


  const result = await workspaceService.updateWorkspaceDetailsById(
    userId,
    workspaceId,
    updates
  );

  return sendApiResponse(response, {
    data: result.data,
    success: true,
    statusCode: result.statusCode,
    message: result.message,
  });
}

export { createWorkspace, getAllWorkspacesOfUser, updateWorkspaceDetailsById };
