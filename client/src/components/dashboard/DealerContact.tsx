import { Button } from "@/components/ui/button";

interface DealerContactProps {
  name: string;
  phone: string;
  address: string;
}

export default function DealerContact({ name, phone, address }: DealerContactProps) {
  const handleCall = () => {
    window.location.href = `tel:${phone.replace(/\s/g, '')}`;
  };

  const handleBookAppointment = () => {
    // In a real app, this would open a booking form or navigate to a booking page
    alert("This would open a booking form in a real application.");
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
      <h3 className="text-lg font-display font-semibold mb-4">Dealer Contact</h3>
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <div className="text-sm font-medium">{name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{phone}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{address}</div>
        </div>
        <div className="flex mt-4 md:mt-0 space-x-3">
          <Button onClick={handleCall} className="flex items-center">
            <i className="fas fa-phone-alt mr-2"></i> Call
          </Button>
          <Button onClick={handleBookAppointment} variant="outline" className="flex items-center text-primary-500 dark:text-primary-400">
            <i className="fas fa-calendar-alt mr-2"></i> Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}
