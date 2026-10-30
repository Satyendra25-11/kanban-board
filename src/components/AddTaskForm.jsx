import React, { useContext, useState } from "react";
import { Mycontext } from "../context/MyContext";

const AddTaskForm = () => {

    let {onSubmit, closeForm, editingTask} = useContext(Mycontext)
    

  const [formData, setFormData] = useState(
    editingTask || {
      title: "",
      description: "",
      priority: "Medium",
      status: "Todo",
      dueDate: "",
    }
  );

  const handleChange = (e) => {
    
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...formData,
      id: editingTask?.id || Date.now(),
    });
    closeForm()
    if (!editingTask) {
      setFormData({
        title: "",
        description: "",
        priority: "Medium",
        status: "Todo",
        dueDate: "",
        category: "",
      });
    }
  };

  return (
    <div className="absolute left-1/2  -translate-x-1/2 z-20 w-full bg-white/60">
        <div className=" max-w-2xl w-full mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {editingTask ? "Edit Task" : "Add New Task"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {/* Title */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Title *
          </label>

          <input
            type="text"
            required
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter task title"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Description *
          </label>

          <textarea
            rows="4"
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            placeholder="Task description..."
            className="w-full border rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Priority + Status */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Priority
            </label>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              disabled
              onChange={handleChange}
              className="w-full border rounded-lg px-4 text-gray-600 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>Todo</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        {/* Category + Due Date */}
        <div className="grid md:grid-cols-1 gap-5">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Due Date *
            </label>

            <input
              type="date"
              required
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4 pt-3">
          <button
            onClick={closeForm}
            className="px-6 py-3 rounded-lg border border-gray-500 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
          >
            {editingTask ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddTaskForm;