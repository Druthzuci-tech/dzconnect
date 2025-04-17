interface GeofenceAlert {
  id: number;
  type: "enter" | "exit";
  zone: string;
  time: string;
}

interface GeofenceAlertsProps {
  alerts: GeofenceAlert[];
}

export default function GeofenceAlerts({ alerts }: GeofenceAlertsProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-3">Recent Alerts</h3>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div 
            key={alert.id} 
            className={`p-3 ${
              alert.type === "exit" 
                ? "bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800" 
                : "bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800"
            } rounded-lg`}
          >
            <div className="flex items-start">
              <i className={`${
                alert.type === "exit" 
                  ? "fas fa-exclamation-circle text-red-500 dark:text-red-400" 
                  : "fas fa-check-circle text-green-500 dark:text-green-400"
              } mt-0.5 mr-2`}></i>
              <div>
                <div className="text-sm font-medium">
                  Vehicle {alert.type === "exit" ? "exited" : "entered"} "{alert.zone}" zone
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{alert.time}</div>
              </div>
            </div>
          </div>
        ))}

        {alerts.length === 0 && (
          <div className="p-3 text-center text-sm text-gray-500 dark:text-gray-400">
            No recent alerts.
          </div>
        )}
      </div>
    </div>
  );
}
