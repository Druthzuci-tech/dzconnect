import { useAuth } from "../context/AuthContext";
import VehicleStatusCard from "../components/dashboard/VehicleStatusCard";
import LastLocationCard from "../components/dashboard/LastLocationCard";
import SpeedCard from "../components/dashboard/SpeedCard";
import BatteryStatusCard from "../components/dashboard/BatteryStatusCard";
import QuickActions from "../components/dashboard/QuickActions";
import DealerContact from "../components/dashboard/DealerContact";
import { vehicleData, dealerData } from "../data/mockData";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="p-4 fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-display font-bold mb-1">
          Welcome back, {user?.firstName}!
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Here's the latest status of your vehicle
        </p>
      </div>

      {/* Vehicle Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <VehicleStatusCard 
          status={vehicleData.status} 
          statusSince={vehicleData.statusSince} 
          ignition={vehicleData.ignition}
        />
        <LastLocationCard location={vehicleData.location} />
        <SpeedCard 
          currentSpeed={vehicleData.speed.current} 
          maxSpeed={vehicleData.speed.maxToday} 
        />
        <BatteryStatusCard percentage={vehicleData.battery.percentage} />
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Dealer Contact */}
      <DealerContact 
        name={dealerData.name} 
        phone={dealerData.phone} 
        address={dealerData.address} 
      />
    </div>
  );
}
