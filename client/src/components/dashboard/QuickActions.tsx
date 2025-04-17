import { Link } from "wouter";
import { useApp } from "../../context/AppContext";

export default function QuickActions() {
  const { toggleStolenMode } = useApp();

  return (
    <div className="mb-8">
      <h3 className="text-lg font-display font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link href="/trip-history">
          <a className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
            <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-500 dark:text-primary-400 mb-2">
              <i className="fas fa-route"></i>
            </div>
            <span className="text-sm font-medium">Trip History</span>
          </a>
        </Link>
        <Link href="/geofencing">
          <a className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
            <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-500 dark:text-primary-400 mb-2">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <span className="text-sm font-medium">Geofencing</span>
          </a>
        </Link>
        <Link href="/service-reminders">
          <a className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
            <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-500 dark:text-primary-400 mb-2">
              <i className="fas fa-bell"></i>
            </div>
            <span className="text-sm font-medium">Service Reminders</span>
          </a>
        </Link>
        <button 
          onClick={toggleStolenMode}
          className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-500 dark:text-red-400 mb-2">
            <i className="fas fa-shield-alt"></i>
          </div>
          <span className="text-sm font-medium">Stolen Mode</span>
        </button>
      </div>
    </div>
  );
}
