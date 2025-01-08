import React from "react";

const Event = () => {
  return (
    <div
      onClick={scrollTo(0, 0)}
      className="min-h-screen bg-gray-700 flex items-center justify-center"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-100">Updating soon...</h2>
      </div>
    </div>
  );
};

export default Event;
