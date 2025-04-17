import { Link, useRoute } from "wouter";
import { useAuth } from "../../context/AuthContext";
import { useApp } from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTachometerAlt, 
  faRoute, 
  faMapMarkerAlt, 
  faBell, 
  faUser, 
  faSun, 
  faMoon, 
  faBars,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const { user, logout } = useAuth();
  const { toggleDarkMode, isDarkMode, openMobileMenu } = useApp();
  
  const [isHomeActive] = useRoute("/");
  const [isTripHistoryActive] = useRoute("/trip-history");
  const [isGeofencingActive] = useRoute("/geofencing");
  const [isServiceRemindersActive] = useRoute("/service-reminders");

  return (
    <>
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex md:w-64 flex-col bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-gray-700">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-display font-bold text-primary-500">
            DZ <span className="text-secondary-500">Connect</span>
          </h1>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/">
            <a className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${isHomeActive ? 'bg-primary-50 dark:bg-slate-700 text-primary-500 dark:text-primary-400' : 'text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-500 dark:hover:text-primary-400'}`}>
              <FontAwesomeIcon icon={faTachometerAlt} className="w-5 h-5 mr-2" />
              Dashboard
            </a>
          </Link>
          <Link href="/trip-history">
            <a className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${isTripHistoryActive ? 'bg-primary-50 dark:bg-slate-700 text-primary-500 dark:text-primary-400' : 'text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-500 dark:hover:text-primary-400'}`}>
              <FontAwesomeIcon icon={faRoute} className="w-5 h-5 mr-2" />
              Trip History
            </a>
          </Link>
          <Link href="/geofencing">
            <a className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${isGeofencingActive ? 'bg-primary-50 dark:bg-slate-700 text-primary-500 dark:text-primary-400' : 'text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-500 dark:hover:text-primary-400'}`}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 mr-2" />
              Geofencing
            </a>
          </Link>
          <Link href="/service-reminders">
            <a className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${isServiceRemindersActive ? 'bg-primary-50 dark:bg-slate-700 text-primary-500 dark:text-primary-400' : 'text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-500 dark:hover:text-primary-400'}`}>
              <FontAwesomeIcon icon={faBell} className="w-5 h-5 mr-2" />
              Service Reminders
            </a>
          </Link>
        </nav>
        
        {/* User Profile */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center text-primary-500 dark:text-primary-300">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{user?.phone}</p>
            </div>
          </div>
          
          {/* Logout Button */}
          <button 
            className="flex items-center w-full px-3 py-2 mt-3 text-sm font-medium rounded-md text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
            onClick={logout}
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5 mr-2" />
            <span>Logout</span>
          </button>
        </div>
        
        {/* Theme Toggle */}
        <div className="p-4">
          <button 
            className="flex items-center justify-center w-full px-3 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
            onClick={toggleDarkMode}
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="w-5 h-5 mr-2" />
            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between md:hidden z-10">
        <h1 className="text-xl font-display font-bold text-primary-500">
          DZ <span className="text-secondary-500">Connect</span>
        </h1>
        <button 
          className="text-gray-600 dark:text-gray-300 focus:outline-none"
          onClick={openMobileMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </>
  );
}
