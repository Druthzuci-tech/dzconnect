import GeofenceMap from "../components/geofencing/GeofenceMap";
import GeofenceList from "../components/geofencing/GeofenceList";
import GeofenceAlerts from "../components/geofencing/GeofenceAlerts";
import GeofenceSettings from "../components/geofencing/GeofenceSettings";
import { geofenceData, geofenceAlerts } from "../data/mockData";

export default function Geofencing() {
  return (
    <div className="p-4 fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-display font-bold mb-1">Geofencing</h2>
        <p className="text-gray-600 dark:text-gray-400">Create virtual boundaries for your vehicle</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Area */}
        <div className="lg:col-span-2">
          <GeofenceMap />
        </div>

        {/* Geofence Controls */}
        <div className="space-y-4">
          <GeofenceList geofences={geofenceData} />
          <GeofenceAlerts alerts={geofenceAlerts} />
          <GeofenceSettings />
        </div>
      </div>
    </div>
  );
}
