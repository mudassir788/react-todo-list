import { Edit3, Trash2 } from "lucide-react";

const TaskList = ({
  tasks,
  toggleTask,
  deleteTask,
  editingId,
  editText,
  setEditText,
  saveEdit,
  cancelEdit,
  startEdit,
}) => (
  <div className="space-y-3 sm:space-y-4">
    {tasks.map((task) => (
      <div
        key={task.id}
        className={`bg-gradient-to-r from-[#23243a] to-[#393e46] rounded-2xl p-4 sm:p-6 shadow-md border border-[#393e46]/60 transition-all hover:shadow-lg ${
          task.completed ? "opacity-60" : ""
        }`}
      >
        <div className="flex items-center gap-4">
          {/* Toggle */}
          <button
            onClick={() => toggleTask(task.id)}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
              task.completed
                ? "bg-[#ffb86c] border-[#ffb86c] text-[#23243a]"
                : "border-[#ffb86c] hover:border-[#ff9f43]"
            }`}
          >
            {task.completed && <span className="text-sm font-bold">✓</span>}
          </button>

          {/* Editing */}
          {editingId === task.id ? (
            <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") saveEdit();
                  if (e.key === "Escape") cancelEdit();
                }}
                className="flex-1 px-2 py-2 sm:px-3 rounded-lg bg-[#181824] border border-[#8be9fd] focus:border-[#ffb86c] outline-none min-w-0 text-[#f8f8f2]"
                autoFocus
              />
              <button
                onClick={saveEdit}
                className="px-3 py-1 bg-[#50fa7b] text-[#23243a] rounded-lg hover:bg-[#3ae379] transition-colors text-sm w-full sm:w-auto font-semibold"
              >
                Save
              </button>
              <button
                onClick={cancelEdit}
                className="px-3 py-1 bg-[#23243a] text-[#f8f8f2] rounded-lg hover:bg-[#23247a] transition-colors text-sm w-full sm:w-auto"
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <span
                className={`flex-1 text-lg ${
                  task.completed
                    ? "line-through text-[#8be9fd]/60"
                    : "text-[#f8f8f2]"
                }`}
              >
                {task.text}
              </span>
              <button
                onClick={() => startEdit(task.id, task.text)}
                className="p-2 text-[#ffb86c] hover:bg-[#23243a]/60 rounded-lg transition-colors mr-2"
              >
                <Edit3 size={20} />
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="p-2 text-[#ff5555] hover:bg-[#23243a]/60 rounded-lg transition-colors ml-auto"
              >
                <Trash2 size={20} />
              </button>
            </>
          )}
        </div>
      </div>
    ))}

    {tasks.length === 0 && (
      <div className="text-center py-12 text-[#8be9fd]/60">
        <p className="text-xl">No tasks yet!</p>
        <p className="mt-2">Add your first task above to get started.</p>
      </div>
    )}
  </div>
);

export default TaskList;
