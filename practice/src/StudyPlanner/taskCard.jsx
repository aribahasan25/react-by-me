import React from "react";

function TaskCard({ title, category, deadline, completed, onToggle }) {
  // Category-specific tag colors for aesthetics
  const getCategoryStyles = (cat) => {
    switch (cat?.toLowerCase()) {
      case "react":
        return "bg-cyan-50 text-cyan-600 border-cyan-150";
      case "dbms":
        return "bg-emerald-50 text-emerald-600 border-emerald-150";
      case "dsa":
        return "bg-purple-50 text-purple-600 border-purple-150";
      default:
        return "bg-amber-50 text-amber-600 border-amber-150";
    }
  };

  return (
    <div className={`flex items-center justify-between border rounded-xl p-4 hover:shadow-sm transition-all duration-200 bg-white ${completed ? "bg-gray-50/50 border-gray-100" : "border-gray-150"}`}>
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
        />

        <div className="min-w-0 flex-1">
          <h3 className={`font-semibold text-sm truncate ${
            completed ? "line-through text-gray-400 font-normal" : "text-gray-700"
          }`}>
            {title}
          </h3>

          <p className="text-xs text-gray-400 mt-0.5">
            Deadline: {deadline}
          </p>
        </div>
      </div>

      <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${getCategoryStyles(category)}`}>
        {category}
      </span>
    </div>
  );
}

export default TaskCard;