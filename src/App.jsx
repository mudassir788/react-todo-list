import { useState } from "react";
import { Plus } from "lucide-react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import TaskList from "./components/TaskList";

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Go to market", completed: true },
    { id: 2, text: "Pickup vegetables", completed: false },
    { id: 3, text: "Do my assignment", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // --- Logic ---
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask.trim(), completed: false },
      ]);
      setNewTask("");
    }
  };

  const toggleTask = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = () => {
    if (editText.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === editingId ? { ...task, text: editText.trim() } : task
        )
      );
    }
    setEditingId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const remainingTasks = tasks.filter((t) => !t.completed).length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181824] via-[#23243a] to-[#1a1a2e] p-2 sm:p-4 md:p-6">
      <div className="max-w-2xl mx-auto w-full px-2 sm:px-4 md:px-0">
        <Header
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
          Plus={Plus}
        />

        <Stats
          remainingTasks={remainingTasks}
          completedTasks={completedTasks}
          totalTasks={totalTasks}
        />

        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editingId={editingId}
          editText={editText}
          setEditText={setEditText}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
          startEdit={startEdit}
        />
      </div>
    </div>
  );
};

export default TodoApp;
