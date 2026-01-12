import { useEffect, useState } from "react";

export default function Visitor() {
  const [dailyVisitors, setDailyVisitors] = useState(0);

  const getTodayKey = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // YYYY-MM-DD
  };

  useEffect(() => {
    const todayKey = getTodayKey();
    const visitorMarkerKey = `visited-${todayKey}`;

    // Check if this visitor already counted today
    const alreadyVisited = localStorage.getItem(visitorMarkerKey);

    let dailyCount = parseInt(localStorage.getItem(todayKey)) || 0;

    if (!alreadyVisited) {
      // Only increment if not already counted today
      dailyCount += 1;
      localStorage.setItem(todayKey, dailyCount);
      localStorage.setItem(visitorMarkerKey, "true");
    }

    setDailyVisitors(dailyCount);

    // Total visitors are always 100+ for display
    if (!localStorage.getItem("totalVisitors")) {
      localStorage.setItem("totalVisitors", "100");
    }

    // Reset daily visitors at midnight
    const now = new Date();
    const msUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() -
      now.getTime();

    const timeout = setTimeout(() => {
      const dailyCount = parseInt(localStorage.getItem(todayKey)) || 0;
      const prevTotal = parseInt(localStorage.getItem("totalVisitors")) || 100;
      const newTotal = prevTotal + dailyCount;

      localStorage.setItem("totalVisitors", newTotal);
      localStorage.removeItem(todayKey);
      localStorage.removeItem(visitorMarkerKey);

      setDailyVisitors(0);
    }, msUntilMidnight);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="hidden sm:flex fixed bottom-4 right-4 gap-4">
      {/* Daily Visitors Box */}
      <div className="bg-white border border-gray-300 rounded-lg p-4 w-32 text-center">
        <p className="text-gray-700 text-sm font-semibold">Daily Visitors</p>
        <p className="text-gray-900 text-lg font-bold">{dailyVisitors}</p>
      </div>

      {/* Total Visitors Box */}
      <div className="bg-white border border-gray-300 rounded-lg p-4 w-32 text-center">
        <p className="text-gray-700 text-sm font-semibold">Total Visitors</p>
        <p className="text-gray-900 text-lg font-bold">100+</p>
      </div>
    </div>
  );
}
