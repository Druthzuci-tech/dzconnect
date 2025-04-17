import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function GeofenceSettings() {
  const [smsEnabled, setSmsEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [pushEnabled, setPushEnabled] = useState(true);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-3">Alert Settings</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="sms-toggle" className="text-sm">Send SMS Notifications</Label>
          <Switch 
            id="sms-toggle" 
            checked={smsEnabled} 
            onCheckedChange={setSmsEnabled}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="email-toggle" className="text-sm">Send Email Alerts</Label>
          <Switch 
            id="email-toggle" 
            checked={emailEnabled} 
            onCheckedChange={setEmailEnabled}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="push-toggle" className="text-sm">Push Notifications</Label>
          <Switch 
            id="push-toggle" 
            checked={pushEnabled} 
            onCheckedChange={setPushEnabled}
          />
        </div>
      </div>
    </div>
  );
}
