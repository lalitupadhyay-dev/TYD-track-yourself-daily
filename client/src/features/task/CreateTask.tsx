import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createTaskFormSchema, type CreateTaskFromSchema } from "../../schemas/createTask.schema.ts";
import { taskPriority, taskStatus } from "../../constants/constants.ts";
import Error from "../../components/Error.tsx";

function CreateTask() {
  const { register, handleSubmit, formState } = useForm<CreateTaskFromSchema>({
    resolver: zodResolver(createTaskFormSchema),
    mode: "onSubmit",
  });


  const onSubmit = (formData: CreateTaskFromSchema) => {
    console.log(formData);
  }


  return (
    <section className="w-full h-full text-white overflow-auto">
      <h2 className="mt-4 py-3 px-6 text-center text-3xl font-bold w-fit mx-auto rounded-lg bg-neutral-900 border border-neutral-700">
        Create Task
      </h2>

      <form className="mx-4 my-4 p-6 bg-neutral-900 border border-neutral-800 rounded-xl shadow-lg space-y-6" onSubmit={handleSubmit(onSubmit)}>

        {/* Title & Workspace */}
        <div className="grid grid-cols-3 gap-6">

          {/* Task Title */}
          <div className="col-span-2 flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-300">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Enter task title..."
              {...register("title")}
              className="rounded-md bg-zinc-950 border border-neutral-700 px-4 py-2 text-sm outline-none placeholder:text-neutral-500 focus:border-neutral-500 transition"
            />
            {
              formState?.errors?.title?.message ? <Error message={formState.errors.title.message} /> : ""
            }
          </div>

          {/* Workspace Select */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-300">
              Select Workspace
            </label>
            <select
              defaultValue=""
              className="rounded-md bg-zinc-950 border border-neutral-700 px-4 py-2 text-sm outline-none focus:border-neutral-500 transition"
            >
              <option value="" disabled>Choose workspace</option>
              <option value="workspace-1">Workspace One</option>
              <option value="workspace-2">Workspace Two</option>
              <option value="workspace-3">Workspace Three</option>
            </select>
          </div>

        </div>


        {/* Description */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-neutral-300">
            Description
          </label>
          <textarea
            rows={4}
            placeholder="Describe the task..."
            {...register("description")}
            className="rounded-md bg-zinc-950 border border-neutral-700 px-4 py-2 text-sm outline-none placeholder:text-neutral-500 focus:border-neutral-500 transition resize-none"
          />
        </div>

        {/* Status & Priority */}
        <div className="grid grid-cols-2 gap-6">

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-300">
              Status
            </label>
            <select
              {...register("status")}
              defaultValue=""
              className="rounded-md bg-zinc-950 border border-neutral-700 px-4 py-2 text-sm outline-none focus:border-neutral-500 transition"
            >
              <option value="" disabled>Select status</option>

              {
                taskStatus.map((st) => <option value={st.key}>{st.val}</option>)
              }
            </select>

            {
              formState?.errors?.status?.message ? <Error message={formState.errors.status.message} /> : ""
            }

          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-300">
              Priority
            </label>
            <select
              {...register("priority")}
              defaultValue=""
              className="rounded-md bg-zinc-950 border border-neutral-700 px-4 py-2 text-sm outline-none focus:border-neutral-500 transition"
            >
              <option value="" disabled>Select priority</option>
              {
                taskPriority.map((prt) => <option value={prt.key}>{prt.val}</option>)
              }
            </select>

            {
              formState?.errors?.priority?.message ? <Error message={formState.errors.priority.message} /> : ""
            }

          </div>

        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-6">

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-300">
              Start Date
            </label>
            <input
              type="date"
              {...register("startDate", { valueAsDate: true })}
              className="rounded-md bg-zinc-950 border border-neutral-700 px-4 py-2 text-sm outline-none focus:border-neutral-500 transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-300">
              End Date
            </label>
            <input
              type="date"
              {...register("endData", { valueAsDate: true })}
              className="rounded-md bg-zinc-950 border border-neutral-700 px-4 py-2 text-sm outline-none focus:border-neutral-500 transition"
            />
          </div>

        </div>

        {/* Submit */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="cursor-pointer rounded-md bg-neutral-200 text-black px-6 py-2 text-sm font-semibold hover:bg-white transition"
          >
            Create Task
          </button>
        </div>

      </form>
    </section>
  );
}

export default CreateTask;
