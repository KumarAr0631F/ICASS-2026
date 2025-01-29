import React from "react";

const Patrons = () => {
  return (
    <div>
      {/* Content Section */}
      <div className="container mx-auto px-6 md:px-12">
        {/* Patrons Section */}
        <div className="mb-12">
          <hr className="border-t border-blue-500 mb-6" />

          {/* Chief Patrons */}
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Chief Patrons
          </h2>
          <ul className="list-disc ml-6 mb-8 text-justify text-gray-700">
            <li>Dr Prashant Bhalla, Hon'ble Chancellor, MRU, Faridabad</li>
            <li>Dr Amit Bhalla, Hon'ble Vice President, MRU, Faridabad</li>
          </ul>

          {/* Patrons */}
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Patron(s)
          </h2>
          <ul className="list-disc ml-6 text-justify mb-8 text-gray-700">
            <li>
              Prof (Dr.) Deependra Kr Jha, Hon'ble Vice Chancellor, MRU,
              Faridabad
            </li>
            <li>
              Prof (Dr.) Sangita Banga, Pro-Vice-Chancellor, MRU, Faridabad
            </li>
            <li>
              Prof (Dr) Shruti Vashisht, Professor and Dean (Academics), MRU,
              Faridabad
            </li>
            <li>Sh Ramesh Nair, Registrar, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Chairs Section */}
        <div className="mb-12">
          {/* General Chair */}
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            General Chair
          </h2>
          <ul className="list-disc text-justify ml-6 mb-8 text-gray-700">
            <li>
              Prof (Dr) Dipali Bansal, Professor and Dean, SoE, MRU, Faridabad
            </li>
          </ul>

          {/* Conference Chair */}
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            Conference Chair
          </h2>
          <ul className="list-disc text-justify  ml-6 mb-8 text-gray-700">
            <li>
              Prof (Dr) Manpreet Kaur, Professor and Head, DoCST,MRU, Faridabad
            </li>
          </ul>
        </div>

        {/* Additional Sections */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Convener(s)
          </h2>
          <ul className="list-disc text-justify ml-6 mb-8 text-gray-700">
            <li>
              Dr Meenakshi Gupta, Associate Professor, Associate Head, DoECE,
              MRU, Faridabad
            </li>
            <li>
              Dr Ganga Sharma, Associate Professor, DoCST, SoE, MRU, Faridabad
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Conference Secretary(s)
          </h2>
          <ul className="list-disc text-justify ml-6 mb-8 text-gray-700">
            <li>
              Dr Prashant Bhardwaj, Associate Professor, DoME, MRU, Faridabad
            </li>
            <li>
              Dr Gianender Kajal, Assistant Professor, DoME, MRU, Faridabad
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Technical Program Chair
          </h2>
          <ul className="list-disc text-justify ml-6 mb-8 text-gray-700">
            <li>
              Dr D K Sharma, Professor, Department of Physics, MRU, Faridabad
            </li>
            <li>Dr Joginder Singh, Professor, DoME, MRU, Faridabad</li>
            <li>Dr Mrinal Pandey, Professor, DoCST,MRU, Faridabad</li>
            <li>Dr Niharika Thakur, DoECE, MRU, Faridabad</li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Steering Committee Chair
          </h2>
          <ul className="list-disc text-justify ml-6 mb-8 text-gray-700">
            <li>Dr Ajit Katiyar, Professor and Head, DoME, MRU, Faridabad</li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Finance Chair/ Treasurer
          </h2>
          <ul className="list-disc text-justify ml-6 mb-8 text-gray-700">
            <li>
              Dr Sandeep Singh, Professor, Department of Physics, MRU, Faridabad
            </li>
            <li>Dr Chandni Magoo, Associate Head, DoCST, MRU, Faridabad</li>
            <li>Dr. J. P. Sharma, Associate Professor, DoME, MRU, Faridabad</li>
            <li>Dr Nitika, DoECE, MRU, Faridabad</li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Publication chair(s)
          </h2>
          <ul className="list-disc text-justify ml-6 mb-8 text-gray-700">
            <li>Dr Sachin Lakra, Professor, DoCST,MRU, Faridabad</li>
            <li>
              Dr Urmila Pilania, Associate Professor, DoCST,MRU, Faridabad
            </li>
            <li>
              Dr Priyanka Bansal, Associate Professor, DoECE,MRU, Faridabad
            </li>
            <li>
              Dr. Jitender Kumar, Assistant Professor, Department of Physics,
              MRU, Faridabad
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Publicity chair(s)
          </h2>
          <ul className="list-disc text-justify ml-6 mb-8 text-gray-700">
            <li>Dr. Parneeta Dhariwal, Professor, DoCST,MRU, Faridabad</li>
            <li>Dr Mamta Arora, Associate ProfessorDoCST,MRU, Faridabad</li>
            <li>Dr Smriti Sharma, Associate Professor, DoME,MRU, Faridabad</li>
            <li>
              Dr Arpit Sand, Assistant Professor, Department of Chemistry, MRU,
              Faridabad
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Patrons;
