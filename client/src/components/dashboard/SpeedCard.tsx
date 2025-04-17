interface SpeedCardProps {
  currentSpeed: number;
  maxSpeed: number;
}

export default function SpeedCard({ currentSpeed, maxSpeed }: SpeedCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Current Speed</h3>
        <i className="fas fa-tachometer-alt text-primary-500"></i>
      </div>
      <div className="flex items-end">
        <span className="text-3xl font-bold">{currentSpeed}</span>
        <span className="text-lg ml-1 mb-0.5 text-gray-500 dark:text-gray-400">km/h</span>
      </div>
      <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">Max Today: {maxSpeed} km/h</div>
    </div>
  );
}
