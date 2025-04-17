import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrawPolygon, faMapMarkedAlt, faSave } from "@fortawesome/free-solid-svg-icons";

export default function GeofenceMap() {
  const [isDrawing, setIsDrawing] = useState(false);

  const handleDrawGeofence = () => {
    setIsDrawing(true);
    // In a real app, this would activate drawing tools on the map
  };

  const handleSaveGeofence = () => {
    setIsDrawing(false);
    // In a real app, this would save the drawn geofence
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="h-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative">
        {/* Mock Map */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <FontAwesomeIcon icon={faMapMarkedAlt} className="text-4xl" />
        </div>

        {/* Drawing Overlay - Would be visible when isDrawing is true */}
        {isDrawing && (
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg">
              <p className="text-sm text-center mb-2">Click on the map to create your geofence</p>
              <Button size="sm" variant="outline" onClick={() => setIsDrawing(false)}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-end space-x-3 mt-4">
        <Button 
          variant="outline" 
          onClick={handleDrawGeofence}
          disabled={isDrawing}
        >
          <FontAwesomeIcon icon={faDrawPolygon} className="mr-2" /> Draw Geofence
        </Button>
        <Button 
          onClick={handleSaveGeofence}
          disabled={!isDrawing}
        >
          <FontAwesomeIcon icon={faSave} className="mr-2" /> Save Geofence
        </Button>
      </div>
    </div>
  );
}
