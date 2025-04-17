import { ReactNode, useEffect } from "react";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";
import StolenModeBanner from "./StolenModeBanner";
import { useApp } from "../../context/AppContext";
import { useLocation } from "wouter";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isMobileMenuOpen, closeMobileMenu, isStolenMode } = useApp();
  const [location] = useLocation();

  // Close mobile menu when location changes
  useEffect(() => {
    closeMobileMenu();
  }, [location, closeMobileMenu]);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar for desktop */}
        <Sidebar />

        {/* Mobile menu */}
        <MobileMenu isOpen={isMobileMenuOpen} />

        {/* Main content */}
        <main className="flex-1 overflow-auto pt-16 md:pt-0">
          {/* Stolen Mode Banner */}
          {isStolenMode && <StolenModeBanner />}

          {/* Page content */}
          {children}
        </main>
      </div>
    </div>
  );
}
