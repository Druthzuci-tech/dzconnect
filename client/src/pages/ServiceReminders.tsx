import ServiceAlertBanner from "../components/service-reminders/ServiceAlertBanner";
import UpcomingServices from "../components/service-reminders/UpcomingServices";
import CompletedServices from "../components/service-reminders/CompletedServices";
import AddCustomReminder from "../components/service-reminders/AddCustomReminder";
import { upcomingServices, completedServices } from "../data/mockData";

export default function ServiceReminders() {
  return (
    <div className="p-4 fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-display font-bold mb-1">Service Reminders</h2>
        <p className="text-gray-600 dark:text-gray-400">Keep track of your vehicle maintenance schedule</p>
      </div>

      {/* Alert Banner */}
      <ServiceAlertBanner service="Oil change" distance="200 km" />

      {/* Upcoming Services */}
      <UpcomingServices services={upcomingServices} />

      {/* Completed Services */}
      <CompletedServices services={completedServices} />

      {/* Add Custom Reminder */}
      <AddCustomReminder />
    </div>
  );
}
