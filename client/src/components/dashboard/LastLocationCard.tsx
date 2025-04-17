interface LastLocationCardProps {
  location: string;
}

export default function LastLocationCard({ location }: LastLocationCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Known Location</h3>
        <i className="fas fa-map-marker-alt text-secondary-500"></i>
      </div>
      <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative mb-2">
        {/* Mock Map */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <i className="fas fa-map-marked-alt text-xl"></i>
        </div>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{location}</div>
    </div>
  );
}
