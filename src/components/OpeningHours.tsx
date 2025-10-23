import { openingHours } from '@/data/libraryData';
import { Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getCurrentStatus = () => {
  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getDay()];
  const hours = openingHours[dayOfWeek];

  if (!hours.open || !hours.close) {
    return { text: 'Closed', isOpen: false };
  }

  const openTime = new Date(now.toDateString() + ' ' + hours.open);
  const closeTime = new Date(now.toDateString() + ' ' + hours.close);

  if (now >= openTime && now <= closeTime) {
    return { text: `Open until ${hours.close}`, isOpen: true };
  }
  
  return { text: 'Closed', isOpen: false };
};

export function OpeningHours() {
  const [status, setStatus] = useState(getCurrentStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getCurrentStatus());
    }, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="flex items-center gap-2 text-xl font-semibold">
        <Clock className="h-5 w-5" />
        Opening Hours
      </h3>
      <div className="mt-4 flex items-center gap-2">
        <span className={`h-3 w-3 rounded-full ${status.isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
        <span className={`font-semibold ${status.isOpen ? 'text-green-600' : 'text-red-600'}`}>{status.text}</span>
      </div>
      <ul className="mt-4 space-y-2 text-muted-foreground">
        {Object.entries(openingHours).map(([day, hours]) => (
          <li key={day} className="flex justify-between">
            <span>{day}</span>
            <span>{hours.open ? `${hours.open} - ${hours.close}` : 'Closed'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}