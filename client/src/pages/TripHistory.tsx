import { useState } from "react";
import TripTable from "../components/trip-history/TripTable";
import TripStatistics from "../components/trip-history/TripStatistics";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { tripHistoryData, tripStatistics } from "../data/mockData";

export default function TripHistory() {
  const [dateRange, setDateRange] = useState("last7days");
  const [tripType, setTripType] = useState("all");

  return (
    <div className="p-4 fade-in">
      <div className="mb-6">
        <h2 className="text-2xl font-display font-bold mb-1">Trip History</h2>
        <p className="text-gray-600 dark:text-gray-400">View your past trips and routes</p>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
        <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label htmlFor="trip-date-range" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Date Range
            </label>
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger id="trip-date-range">
                <SelectValue placeholder="Select date range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last7days">Last 7 days</SelectItem>
                <SelectItem value="last30days">Last 30 days</SelectItem>
                <SelectItem value="last90days">Last 90 days</SelectItem>
                <SelectItem value="custom">Custom range</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <label htmlFor="trip-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Trip Type
            </label>
            <Select value={tripType} onValueChange={setTripType}>
              <SelectTrigger id="trip-type">
                <SelectValue placeholder="Select trip type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Trips</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="personal">Personal</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="pt-6">
            <Button className="w-full md:w-auto">
              <i className="fas fa-filter mr-2"></i> Filter
            </Button>
          </div>
        </div>
      </div>

      {/* Trip Table */}
      <TripTable trips={tripHistoryData} />

      {/* Trip Statistics */}
      <TripStatistics 
        totalDistance={tripStatistics.totalDistance}
        totalTime={tripStatistics.totalTime}
        fuelConsumed={tripStatistics.fuelConsumed}
      />
    </div>
  );
}
