import React, { useState, useEffect } from "react";

const Countdown = () => {
  const targetDate = new Date("2026-02-12T00:00:00").getTime(); // Conference date set to 12-13 February 2026

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { years, months, days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center bg-white text-black p-4">
      <div className="text-center p-6 shadow-xl rounded-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Countdown to Conference</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-lg">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} className="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center">
              <span className="text-3xl font-semibold">{value}</span>
              <span className="text-sm uppercase text-gray-600">{key}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;