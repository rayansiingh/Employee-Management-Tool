import React from "react";

function CreateTask() {
  return (
    <div className="p-5 bg-[#7e7f83] mt-5 rounded-lg border-2 border-black">
      <form className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 style={{ color: "#fffbff" }} className="text-base  mb-0.5">
              Task title
            </h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none border-1 bg-[#fffbff] mb-4 placeholder:text-zinc-700"
              style={{ color: "black" }}
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 style={{ color: "#fffbff" }} className="text-base  mb-0.5">
              Date
            </h3>
            <input
              style={{ color: "#374151" }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none border-1 bg-[#fffbff] mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 style={{ color: "#fffbff" }} className="text-base  mb-0.5">
              Assign to
            </h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none border-1 bg-[#fffbff] mb-4 placeholder:text-zinc-700"
              style={{ color: "black" }}
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 style={{ color: "#fffbff" }} className="text-base  mb-0.5">
              Category
            </h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none border-1 bg-[#fffbff] mb-4 placeholder:text-zinc-700"
              type="text"
              placeholder="Task category"
              style={{ color: "black" }}
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-base text-[#fffbff] mb-0.5">Description</h3>
          <textarea
            style={{ color: "black" }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none border-1 bg-[#fffbff] mb-4"
            name=""
            id=""
          ></textarea>
          <input
            className="bg-[#90FFDC] hover:bg-emerald-300 py-3 px-5 rounded text-sm mt-4 w-full border-1 font-base"
            type="submit"
            value="Create Task"
            style={{ color: "black" }}
          />
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
