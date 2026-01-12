import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <div>
        <div className="text-white bg-blue-500 hidden md:flex items-center justify-around sticky top-[64px] w-full">
                {/* Navbar Container */}
                <div className="flex items-center justify-between">
                  {/* Navigation Links */}
                  <div className="flex items-center text-lg space-x-6">
                    {/* Home Link */}
                    <NavLink
                      onClick={window.scrollTo(0, 0)}
                      to="/pre-conference-workshop"
                      className="font-semibold text-sm hover:bg-blue-600 px-3 py-2 rounded-md"
                    >
                      Pre-Conference Workshop
                    </NavLink>

                    <NavLink
                      onClick={window.scrollTo(0, 0)}
                      to="/call-for-financial-supporters"
                      className="font-semibold text-sm hover:bg-blue-600 px-3 py-2 rounded-md"
                    >
                      Call for Financial Supporters
                    </NavLink>
        
                    
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Navbar2