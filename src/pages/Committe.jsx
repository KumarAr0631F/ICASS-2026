import React, { useRef } from "react";

const Committe = () => {
  const sectionRef = useRef(null);

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Organising Committee
        </h1>
      </div>

      {/* Content Section */}
      <div
        className="container mx-auto px-6 md:px-12"
     
      >
        {/* Patrons Section */}
        <div className="mb-12">
          <h1 className="text-2xl  font-semibold text-blue-500 mb-4">
            Patrons
          </h1>
          <hr className="border-t border-blue-500 mb-6" />

          {/* Chief Patrons */}
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Chief Patrons
          </h2>
          <ul className="list-disc ml-6 mb-8 text-justify text-gray-700">
            <li>
              Dr. Prashant Bhalla, Hon'ble Chancellor, Manav Rachna University,
              Faridabad
            </li>
            <li>
              Dr. Amit Bhalla, Hon'ble Vice President, Manav Rachna University,
              Faridabad
            </li>
          </ul>

          {/* Patrons */}
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Patron</h2>
          <ul className="list-disc ml-6 text-justify mb-8 text-gray-700">
            <li>
              Prof (Dr.) Deependra Kr Jha, Hon'ble Vice Chancellor, Manav Rachna
              University, Faridabad
            </li>
            <li>
              Prof. (Dr.) Sangita Banga, Pro-Vice-Chancellor, Manav Rachna
              University, Faridabad
            </li>
            <li>
              Prof (Dr) Shruti Vashisht, Professor and Dean (Academics), Manav
              Rachna University, Faridabad
            </li>
            <li>
              Shree Ramesh Nayar, Registrar, Manav Rachna University, Faridabad
            </li>
          </ul>
        </div>

        {/* Chairs Section */}
        <div className="mb-12" id="committe-section-2">
          <h1 className="text-2xl font-semibold text-blue-500 mb-4">Chairs</h1>
          <hr className="border-t border-blue-500 mb-6" />

          {/* General Chair */}
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            General Chair
          </h2>
          <ul className="list-disc text-justify ml-6 mb-8 text-gray-700">
            
            <li>
              Prof (Dr) Dipali Bansal, Professor and Dean, School of Engineering
              (SoE), Manav Rachna University, Faridabad
            </li>
          </ul>

          {/* Conference Chair */}
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            Conference Chair
          </h2>
          <ul className="list-disc text-justify  ml-6 mb-8 text-gray-700">
            <li>
              Prof (Dr) Manpreet Kaur, Professor and Head, Department of
              Computer Science and Technology,(DoCST), SoE, Manav Rachna
              University, Faridabad
            </li>
          </ul>
        </div>

        {/* Additional Sections */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Convener</h2>
          <ul className="list-disc text-justify ml-6 mb-8 text-gray-700">
            <li>
              Dr Meenakshi Gupta, Associate Professor, Associate Head,
              Department of Electronics & Communication (ECE), SoE, Manav Rachna
              University, Faridabad
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Co-Convener
          </h2>
          <ul className="list-disc text-justify ml-6 mb-8 text-gray-700">
            <li>
              Dr Ajit Katiyar, Professor and Head, Department of Mechanical
              Engineering (DoME), SoE, Manav Rachna University, Faridabad
            </li>
            <li>
              Dr Sandeep Singh, Professor and Head, SoS, Manav Rachna
              University, Faridabad
            </li>
            <li>
              Dr Niharika Thakur, Associate Professor, Department of Electronics
              & Communication (ECE), SoE, Manav Rachna University, Faridabad
            </li>
            <li>
              Dr Ganga Sharma, Associate Professor, Department of Computer
              Science and Technology (DoCST), SoE, Manav Rachna University,
              Faridabad
            </li>
          </ul>
        </div>
        <div className="mb-12" id="committe-section-3">
          <h1 className="text-2xl font-semibold text-blue-500 mb-4">
            Organising committee
          </h1>
          <hr className="border-t border-blue-500 mb-6" />
        </div>
      </div>
    </div>
  );
};

export default Committe;
