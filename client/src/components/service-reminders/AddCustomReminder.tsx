import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function AddCustomReminder() {
  const [serviceType, setServiceType] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [odometer, setOdometer] = useState("");
  const [notes, setNotes] = useState("");
  const { toast } = useToast();

  const handleAddReminder = () => {
    if (!serviceType || !dueDate) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would save the reminder to state or database
    toast({
      title: "Reminder Added",
      description: "Your custom service reminder has been created.",
    });

    // Reset form
    setServiceType("");
    setDueDate("");
    setOdometer("");
    setNotes("");
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
      <h3 className="text-lg font-semibold mb-4">Add Custom Reminder</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Service Type
          </label>
          <Select value={serviceType} onValueChange={setServiceType}>
            <SelectTrigger id="service-type">
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="oil-change">Oil Change</SelectItem>
              <SelectItem value="tire-rotation">Tire Rotation</SelectItem>
              <SelectItem value="brake-inspection">Brake Inspection</SelectItem>
              <SelectItem value="air-filter">Air Filter Replacement</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="due-date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Due Date
          </label>
          <Input 
            type="date" 
            id="due-date" 
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="odometer" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Odometer Reading (km)
          </label>
          <Input 
            type="number" 
            id="odometer" 
            placeholder="e.g. 12500" 
            value={odometer}
            onChange={(e) => setOdometer(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Notes
          </label>
          <Input 
            type="text" 
            id="notes" 
            placeholder="Optional notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Button onClick={handleAddReminder}>
          <i className="fas fa-plus mr-2"></i> Add Reminder
        </Button>
      </div>
    </div>
  );
}
