import Workitem from "../../../models/workitem.model.js";

async function createWorkItem({ title, description, priority, workspaceId }) {
  const createdWorkitem = await Workitem.create({
    title,
    description,
    priority,
    workspaceId,
  });

  console.log(createdWorkitem);
}

export { createWorkItem };
