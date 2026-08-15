import React from "react";
import TaskCard from "./taskCard";

function TaskList({ tasks = [], onToggleComplete }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400 text-sm">
        🎉 All clean! Create a task to get started.
      </div>
    );
  }

  return (
    <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          category={task.category}
          deadline={task.deadline}
          completed={task.completed}
          onToggle={() => onToggleComplete(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;