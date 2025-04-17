interface VehicleStatusCardProps {
  status: string;
  statusSince: string;
  ignition: string;
}

export default function VehicleStatusCard({ 
  status, 
  statusSince, 
  ignition 
}: VehicleStatusCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Vehicle Status</h3>
        <i className="fas fa-car text-primary-500"></i>
      </div>
      <div className="flex items-center">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
          <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
          {status}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Since {statusSince}</span>
      </div>
      <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">Ignition: {ignition}</div>
    </div>
  );
}
