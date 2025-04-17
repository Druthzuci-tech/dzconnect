interface ServiceAlertBannerProps {
  service: string;
  distance: string;
}

export default function ServiceAlertBanner({ service, distance }: ServiceAlertBannerProps) {
  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-500 p-4 rounded-md mb-6">
      <div className="flex">
        <div className="flex-shrink-0">
          <i className="fas fa-exclamation-triangle text-yellow-400 dark:text-yellow-500"></i>
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700 dark:text-yellow-200">
            <strong>Upcoming service:</strong> {service} due in {distance}
          </p>
        </div>
      </div>
    </div>
  );
}
