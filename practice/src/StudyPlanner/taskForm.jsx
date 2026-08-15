import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("React");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    if (onAddTask) {
      onAddTask({
        title,
        category,
        deadline: deadline || "Today",
        completed: false
      });
    }
    setTitle("");
    setDeadline("");
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <span className="text-blue-500">📝</span> Add New Task
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Task Title</label>
          <input
            type="text"
            placeholder="e.g., Study React Hooks"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm bg-white"
            >
              <option value="React">React</option>
              <option value="DBMS">DBMS</option>
              <option value="DSA">DSA</option>
              <option value="General">General</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Deadline</label>
            <input
              type="text"
              placeholder="e.g., 5:00 PM"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer text-sm"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
