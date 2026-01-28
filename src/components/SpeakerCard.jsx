import React from 'react'

const SpeakerCard = ({ image, name, designation }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-xs">
      {/* Speaker Image */}
      <div className="w-full">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Speaker Info */}
      <div className="p-2 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-900 text-sm">{designation}</p>
      </div>
    </div>
  )
}

export default SpeakerCard