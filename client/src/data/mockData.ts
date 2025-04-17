// Mock data for the application

// Vehicle Data
export const vehicleData = {
  status: "Parked",
  statusSince: "2:30 PM",
  ignition: "Off",
  location: "Cyber Hub, Gurugram",
  speed: {
    current: 0,
    maxToday: 78
  },
  battery: {
    percentage: 72
  }
};

// Trip History Data
export interface Trip {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  duration: string;
  distance: string;
}

export const tripHistoryData: Trip[] = [
  {
    id: 1,
    date: "Sep 10, 2023",
    startTime: "09:30 AM",
    endTime: "10:15 AM",
    duration: "45 min",
    distance: "18.2 km"
  },
  {
    id: 2,
    date: "Sep 09, 2023",
    startTime: "03:45 PM",
    endTime: "04:30 PM",
    duration: "45 min",
    distance: "12.5 km"
  },
  {
    id: 3,
    date: "Sep 08, 2023",
    startTime: "08:15 AM",
    endTime: "09:00 AM",
    duration: "45 min",
    distance: "20.1 km"
  },
  {
    id: 4,
    date: "Sep 08, 2023",
    startTime: "06:30 PM",
    endTime: "07:15 PM",
    duration: "45 min",
    distance: "19.8 km"
  },
  {
    id: 5,
    date: "Sep 07, 2023",
    startTime: "11:30 AM",
    endTime: "12:10 PM",
    duration: "40 min",
    distance: "8.3 km"
  }
];

export const tripStatistics = {
  totalDistance: "1,248 km",
  totalTime: "42.5 hours",
  fuelConsumed: "78.4 liters"
};

// Geofence Data
export interface Geofence {
  id: number;
  name: string;
  description: string;
}

export const geofenceData: Geofence[] = [
  {
    id: 1,
    name: "Home",
    description: "500m radius"
  },
  {
    id: 2,
    name: "Office",
    description: "300m radius"
  },
  {
    id: 3,
    name: "School Zone",
    description: "Custom shape"
  }
];

export const geofenceAlerts = [
  {
    id: 1,
    type: "exit",
    zone: "Home",
    time: "Today, 09:45 AM"
  },
  {
    id: 2,
    type: "enter",
    zone: "Office",
    time: "Today, 10:15 AM"
  }
];

// Service Reminder Data
export interface Service {
  id: number;
  name: string;
  dueDate: string;
  distance: string;
  status: "Due Soon" | "Upcoming" | "Completed";
  serviceCenter?: string;
  odometer?: string;
}

export const upcomingServices: Service[] = [
  {
    id: 1,
    name: "Oil Change",
    dueDate: "Sep 20, 2023",
    distance: "In 200 km",
    status: "Due Soon"
  },
  {
    id: 2,
    name: "Brake Inspection",
    dueDate: "Oct 15, 2023",
    distance: "In 800 km",
    status: "Upcoming"
  },
  {
    id: 3,
    name: "Tire Rotation",
    dueDate: "Nov 05, 2023",
    distance: "In 1,500 km",
    status: "Upcoming"
  },
  {
    id: 4,
    name: "Air Filter Replacement",
    dueDate: "Dec 10, 2023",
    distance: "In 3,000 km",
    status: "Upcoming"
  }
];

export const completedServices: Service[] = [
  {
    id: 1,
    name: "Oil Change",
    dueDate: "Jul 10, 2023",
    distance: "",
    status: "Completed",
    serviceCenter: "DZ Motors - Gurugram",
    odometer: "10,245 km"
  },
  {
    id: 2,
    name: "Brake Pads Replacement",
    dueDate: "Jun 15, 2023",
    distance: "",
    status: "Completed",
    serviceCenter: "DZ Motors - Gurugram",
    odometer: "9,780 km"
  },
  {
    id: 3,
    name: "Regular Maintenance",
    dueDate: "May 20, 2023",
    distance: "",
    status: "Completed",
    serviceCenter: "DZ Motors - Gurugram",
    odometer: "8,500 km"
  }
];

// Dealer Data
export const dealerData = {
  name: "DZ Motors - Gurugram",
  phone: "+91 124 4567890",
  address: "Sector 15, Gurugram"
};
