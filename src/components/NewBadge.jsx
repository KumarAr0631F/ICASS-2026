import React from "react";

const NewBadge = () => (
  <div className="fixed top-6 right-6 z-50 flex items-center justify-center" style={{ pointerEvents: 'none' }}>
    <div className="bg-red-600 text-white font-bold text-lg px-4 py-2 rounded-full shadow-lg flex items-center justify-center min-w-[80px] min-h-[40px]">
      New
    </div>
  </div>
);

export default NewBadge;
