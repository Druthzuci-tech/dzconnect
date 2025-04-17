interface BatteryStatusCardProps {
  percentage: number;
}

export default function BatteryStatusCard({ percentage }: BatteryStatusCardProps) {
  // Determine battery color based on percentage
  const getBatteryColor = () => {
    if (percentage > 60) return "bg-green-500";
    if (percentage > 20) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Battery Status</h3>
        <i className="fas fa-battery-three-quarters text-secondary-500"></i>
      </div>
      <div className="flex items-end">
        <span className="text-3xl font-bold">{percentage}</span>
        <span className="text-lg ml-1 mb-0.5 text-gray-500 dark:text-gray-400">%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
        <div className={`${getBatteryColor()} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
