import React from 'react'

const Sponsorships = () => {
  return (
    <div>
      <div className='bg-red-500 text-white flex justify-center items-center text-3xl font-bold w-full h-32'>Call For Sponsorships</div>
      <div className="overflow-x-auto my-8 ml-10 mr-10">
        <table className="table-auto w-full max-w-[100vw] border border-gray-300 bg-white rounded-lg text-xs sm:text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 py-2 border border-gray-300">Benefits</th>
              <th className="px-2 py-2 border border-gray-300">Platinum<br/>(₹ 1 Lakhs)</th>
              <th className="px-2 py-2 border border-gray-300">Gold<br/>(₹ 80 Thousand)</th>
              <th className="px-2 py-2 border border-gray-300">Silver<br/>(₹ 50 Thousand)</th>
              <th className="px-2 py-2 border border-gray-300">Bronze<br/>(₹ 25 Thousand)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-2 py-2 border border-gray-300">Free conference attendance passes*</td>
              <td className="px-2 py-2 border border-gray-300">5</td>
              <td className="px-2 py-2 border border-gray-300">4</td>
              <td className="px-2 py-2 border border-gray-300">3</td>
              <td className="px-2 py-2 border border-gray-300">2</td>
            </tr>
            <tr>
              <td className="px-2 py-2 border border-gray-300">Special thanks during the opening ceremony</td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">&#10003;</td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">&#10003;</td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">&#10003;</td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">&#10003;</td>
              
            </tr>
            
            <tr>
              <td className="px-2 py-2 border border-gray-300">Live talks by Leader(s) of the company</td>
              <td className="px-2 py-2 border border-gray-300">15-mins (Banquet/Reception)</td>
              <td className="px-2 py-2 border border-gray-300">10-mins (Partner Session)</td>
              <td className="px-2 py-2 border border-gray-300">5-mins (Partner Session)</td>
              <td className="px-2 py-2 border border-gray-300 text-red-500 font-bold">&#10007;</td>
             
            </tr>
            <tr>
              <td className="px-2 py-2 border border-gray-300">Logo and link on the conference website</td>
              <td className="px-2 py-2 border border-gray-300">2nd row</td>
              <td className="px-2 py-2 border border-gray-300">3rd row</td>
              <td className="px-2 py-2 border border-gray-300">4th row</td>
              <td className="px-2 py-2 border border-gray-300">5th row</td>
              
            </tr>
            <tr>
              <td className="px-2 py-2 border border-gray-300">Logos in the conference background</td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">&#10003;</td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">&#10003;</td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">&#10003;</td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">&#10003;</td>
             
            </tr>
            <tr>
              <td className="px-2 py-2 border border-gray-300">Mention in the social media posts</td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">&#10003;</td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">&#10003;</td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">&#10003;</td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">&#10003;</td>
              
            </tr>
            
            
            <tr>
              <td className="px-2 py-2 border border-gray-300">Sponsors’ Booths (space and position of booths vary depending on tier of sponsorship)</td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">&#10003;</td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">&#10003;</td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">&#10003;</td>
              <td className="px-2 py-2 border border-gray-300 text-green-600 font-bold">&#10003;</td>
              
            </tr>
           
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Sponsorships