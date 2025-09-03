const Stats = ({ remainingTasks, completedTasks, totalTasks }) => (
  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 sm:mb-8 text-center justify-center">
    <div className="bg-[#23243a] text-[#ffb86c] px-4 py-2 rounded-full flex items-center gap-2 justify-center border border-[#393e46]/60 shadow">
      <span className="font-medium">Remaining</span>
      <span className="bg-[#ffb86c]/20 px-2 py-1 rounded-full text-sm text-[#f8f8f2]">
        {remainingTasks}
      </span>
    </div>
    <div className="bg-[#23243a] text-[#50fa7b] px-4 py-2 rounded-full flex items-center gap-2 justify-center border border-[#393e46]/60 shadow">
      <span className="font-medium">Completed</span>
      <span className="bg-[#50fa7b]/20 px-2 py-1 rounded-full text-sm text-[#f8f8f2]">
        {completedTasks}
      </span>
    </div>
    <div className="bg-[#23243a] text-[#8be9fd] px-4 py-2 rounded-full flex items-center gap-2 justify-center border border-[#393e46]/60 shadow">
      <span className="font-medium">Total Tasks</span>
      <span className="bg-[#8be9fd]/20 px-2 py-1 rounded-full text-sm text-[#f8f8f2]">
        {totalTasks}
      </span>
    </div>
  </div>
);

export default Stats;
