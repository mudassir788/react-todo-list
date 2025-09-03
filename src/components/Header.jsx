const Header = ({ newTask, setNewTask, addTask, Plus }) => (
  <div className="bg-gradient-to-r from-[#23243a] to-[#393e46] rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 text-white shadow-2xl border border-[#23243a]/60">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center text-[#ffb86c] drop-shadow-lg">
      Todo Task
    </h1>
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
      <input
        type="text"
        placeholder="Enter Tasks For Today"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && addTask()}
        className="flex-1 px-3 py-2 sm:px-4 sm:py-3 rounded-2xl bg-[#23243a]/80 text-[#f8f8f2] placeholder-[#bdbdbd] border border-[#393e46] outline-none focus:bg-[#23243a]/90 focus:border-[#ffb86c] transition-all min-w-0 shadow-inner"
      />
      <button
        onClick={addTask}
        className="bg-[#ffb86c] hover:bg-[#ff9f43] px-4 py-2 sm:px-6 sm:py-3 rounded-2xl font-semibold transition-colors flex items-center gap-2 w-full sm:w-auto justify-center text-[#23243a] shadow-md"
      >
        <Plus size={20} />
        <span className="hidden xs:inline">ADD TASK</span>
      </button>
    </div>
  </div>
);

export default Header;
