import React from 'react'
import SpeakerCard from '../components/SpeakerCard'
import { assets } from '../assets/assets'

const Speakers = () => {
  const speakers = [
    { id: 1, image: assets.speaker_1, name: "Dr. Md Munir Hayet Khan", designation: "INTI University, Malaysia" },
    { id: 2, image: assets.speaker_2, name: "Prof. (Dr.) Parag Kulkarni", designation: "Tokyo International University, Japan" },
    
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-0">
      <div>
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Our Speakers</h1>
        <div className="m-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer ">
          {speakers.map((speaker) => (
            <SpeakerCard 
              key={speaker.id}
              image={speaker.image}
              name={speaker.name}
              designation={speaker.designation}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Speakers