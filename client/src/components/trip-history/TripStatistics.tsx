interface TripStatisticsProps {
  totalDistance: string;
  totalTime: string;
  fuelConsumed: string;
}

export default function TripStatistics({ 
  totalDistance,
  totalTime,
  fuelConsumed
}: TripStatisticsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-500 dark:text-primary-400 mr-4">
            <i className="fas fa-road"></i>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Distance</p>
            <p className="text-xl font-bold">{totalDistance}</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-500 dark:text-primary-400 mr-4">
            <i className="fas fa-clock"></i>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Time</p>
            <p className="text-xl font-bold">{totalTime}</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-500 dark:text-primary-400 mr-4">
            <i className="fas fa-gas-pump"></i>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Fuel Consumed</p>
            <p className="text-xl font-bold">{fuelConsumed}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
