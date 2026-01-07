import * as workitemService from "./workitem.service.js";

async function createWorkitem(request, response) {
  const data = request.body;

  const result = await workitemService.createWorkItem(data);
  return response.send("created");
}

// paginated
async function getWorkitems(request, response) {}

async function deleteWorkitem(request, response) {}

async function updateWorkitem() {}

async function getAllWorkitems(request, response) {
  return response.send("Workitem route is working");
}

export {
  createWorkitem,
  getWorkitems,
  deleteWorkitem,
  updateWorkitem,
  getAllWorkitems,
};
