import { Geofence } from "../../data/mockData";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface GeofenceListProps {
  geofences: Geofence[];
}

export default function GeofenceList({ geofences }: GeofenceListProps) {
  const [fences, setFences] = useState(geofences);
  const { toast } = useToast();

  const handleEdit = (id: number) => {
    // In a real app, this would open an edit interface
    toast({
      title: "Edit Geofence",
      description: `Editing geofence with ID ${id} would open an editor in a real application.`,
    });
  };

  const handleDelete = (id: number) => {
    setFences(fences.filter(fence => fence.id !== id));
    toast({
      title: "Geofence Deleted",
      description: "The geofence has been successfully removed.",
    });
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-3">Active Geofences</h3>
      <div className="space-y-3">
        {fences.map((geofence) => (
          <div key={geofence.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
            <div>
              <div className="text-sm font-medium">{geofence.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{geofence.description}</div>
            </div>
            <div className="flex space-x-2">
              <button 
                className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400"
                onClick={() => handleEdit(geofence.id)}
              >
                <i className="fas fa-edit"></i>
              </button>
              <button 
                className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                onClick={() => handleDelete(geofence.id)}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        ))}

        {fences.length === 0 && (
          <div className="p-3 text-center text-sm text-gray-500 dark:text-gray-400">
            No geofences created yet. Draw a geofence on the map to get started.
          </div>
        )}
      </div>
    </div>
  );
}
