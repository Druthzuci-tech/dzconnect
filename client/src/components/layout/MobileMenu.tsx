import { Link, useRoute } from "wouter";
import { useAuth } from "../../context/AuthContext";
import { useApp } from "../../context/AppContext";
import { useEffect, useRef } from "react";

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  const { user } = useAuth();
  const { closeMobileMenu, toggleDarkMode, isDarkMode } = useApp();
  const menuRef = useRef<HTMLDivElement>(null);
  
  const [isHomeActive] = useRoute("/");
  const [isTripHistoryActive] = useRoute("/trip-history");
  const [isGeofencingActive] = useRoute("/geofencing");
  const [isServiceRemindersActive] = useRoute("/service-reminders");

  // Handle animation transitions
  useEffect(() => {
    if (!menuRef.current) return;
    
    if (isOpen) {
      menuRef.current.classList.remove('hidden');
      // Animate menu in
      setTimeout(() => {
        if (menuRef.current) {
          menuRef.current.querySelector('.menu-content')?.classList.remove('translate-x-full', '-translate-x-full');
        }
      }, 10);
    } else {
      if (menuRef.current.querySelector('.menu-content')) {
        menuRef.current.querySelector('.menu-content')?.classList.add('-translate-x-full');
        // Wait for animation to finish before hiding
        setTimeout(() => {
          if (menuRef.current) {
            menuRef.current.classList.add('hidden');
          }
        }, 300);
      }
    }
  }, [isOpen]);

  return (
    <div 
      ref={menuRef}
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-20 ${isOpen ? '' : 'hidden'}`}
      onClick={closeMobileMenu}
    >
      <div 
        className="menu-content fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-800 transform transition-transform duration-300 ease-in-out -translate-x-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h1 className="text-xl font-display font-bold text-primary-500">
            DZ <span className="text-secondary-500">Connect</span>
          </h1>
          <button 
            className="text-gray-600 dark:text-gray-300 focus:outline-none"
            onClick={closeMobileMenu}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <nav className="p-4 space-y-1">
          <Link href="/">
            <a className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${isHomeActive ? 'bg-primary-50 dark:bg-slate-700 text-primary-500 dark:text-primary-400' : 'text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-500 dark:hover:text-primary-400'}`}>
              <i className="fas fa-tachometer-alt w-5 h-5 mr-2"></i>
              Dashboard
            </a>
          </Link>
          <Link href="/trip-history">
            <a className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${isTripHistoryActive ? 'bg-primary-50 dark:bg-slate-700 text-primary-500 dark:text-primary-400' : 'text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-500 dark:hover:text-primary-400'}`}>
              <i className="fas fa-route w-5 h-5 mr-2"></i>
              Trip History
            </a>
          </Link>
          <Link href="/geofencing">
            <a className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${isGeofencingActive ? 'bg-primary-50 dark:bg-slate-700 text-primary-500 dark:text-primary-400' : 'text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-500 dark:hover:text-primary-400'}`}>
              <i className="fas fa-map-marker-alt w-5 h-5 mr-2"></i>
              Geofencing
            </a>
          </Link>
          <Link href="/service-reminders">
            <a className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${isServiceRemindersActive ? 'bg-primary-50 dark:bg-slate-700 text-primary-500 dark:text-primary-400' : 'text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-500 dark:hover:text-primary-400'}`}>
              <i className="fas fa-bell w-5 h-5 mr-2"></i>
              Service Reminders
            </a>
          </Link>
        </nav>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center text-primary-500 dark:text-primary-300">
              <i className="fas fa-user"></i>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{user?.phone}</p>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <button 
            className="flex items-center w-full px-3 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
            onClick={toggleDarkMode}
          >
            <i className={`${isDarkMode ? 'fas fa-sun' : 'fas fa-moon'} w-5 h-5 mr-2`}></i>
            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
