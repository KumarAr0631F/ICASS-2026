import React from "react";

const Patrons = () => {
  return (
    <div>
      {/* Content Section */}
      <div className="container mx-auto px-6 md:px-12">
        {/* Patrons Section */}
        <div className="mb-3">
          <hr className="border-t border-blue-500 mb-5" />

          {/* Chief Patrons */}
          <h2 className="text-xl font-semibold text-gray-700">
            Chief Patron(s)
          </h2>
          <ul className="list-disc ml-6 mb-3 text-justify text-gray-700">
            <li>Dr Prashant Bhalla, Hon'ble Chancellor, MRU, Faridabad</li>
            <li>Dr Amit Bhalla, Hon'ble Vice President, MRU, Faridabad</li>
          </ul>

          {/* Patrons */}
          <h2 className="text-xl font-semibold text-gray-700">
            Patron(s)
          </h2>
          <ul className="list-disc ml-6 text-justify text-gray-700">
            <li>
              Prof (Dr) Deependra Kr Jha, Hon'ble Vice Chancellor, MRU,
              Faridabad
            </li>
            <li>
              Prof (Dr) Sangeeta Banga, Pro-Vice-Chancellor, MRU, Faridabad
            </li>
            <li>
              Prof (Dr) Shruti Vashist, Professor and Dean (Academics), MRU,
              Faridabad
            </li>
            <li>Shree Ramesh Nair, Registrar, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Chairs Section */}
        <div>
          {/* General Chair */}
          <h2 className="text-lg font-medium text-gray-700">
            General Chair
          </h2>
          <ul className="list-disc text-justify ml-6 text-gray-700 mb-3">
            <li>
              Prof (Dr) Dipali Bansal, Professor and Dean, SoE, MRU, Faridabad
            </li>
          </ul>

          {/* Conference Chair */}
          <h2 className="text-lg font-medium text-gray-700">
            Conference Chair
          </h2>
          <ul className="list-disc text-justify  ml-6 text-gray-700 mb-3">
            <li>
              Prof (Dr) Manpreet Kaur, Professor and Head, DoCST, MRU, Faridabad
            </li>
          </ul>
        </div>

        {/* Additional Sections */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Convener(s)
          </h2>
          <ul className="list-disc text-justify ml-6 text-gray-700 mb-3">
            <li>
              Dr Meenakshi Gupta, Associate Professor, Associate Head, DoECE, MRU, Faridabad
            </li>
            <li>
              Dr Ganga Sharma, Associate Professor, DoCST, MRU, Faridabad
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800">
            Conference Secretary(s)
          </h2>
          <ul className="list-disc text-justify ml-6 text-gray-700 mb-3">
            <li>
              Dr Prashant Bhardwaj, Associate Professor, DoME, MRU, Faridabad
            </li>
            <li>
              Dr Gianender Kajal, Assistant Professor, DoME, MRU, Faridabad
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800">
            Technical Program Chair(s)
          </h2>
          <ul className="list-disc text-justify ml-6 text-gray-700 mb-3">
            <li>
              Dr D K Sharma, Professor, DoSc, MRU, Faridabad
            </li>
            <li>Dr Joginder Singh, Professor, DoME, MRU, Faridabad</li>
            <li>Dr Mrinal Pandey, Professor, DoCST, MRU, Faridabad</li>
            <li>Dr Niharika Thakur, Associate Professor, DoECE, MRU, Faridabad</li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800">
            Steering Committee Chair
          </h2>
          <ul className="list-disc text-justify ml-6 text-gray-700 mb-3">
            <li>Dr Ajit Katiyar, Professor and Head, DoME, MRU, Faridabad</li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800">
            Finance Chair/ Treasurer(s)
          </h2>
          <ul className="list-disc text-justify ml-6 text-gray-700 mb-3">
            <li>
              Dr Sandeep Kumar, Professor, DoSc, MRU, Faridabad
            </li>
            <li>Dr Chandni Magoo, Associate Head, DoCST, MRU, Faridabad</li>
            <li>Dr J. P. Sharma, Associate Professor, DoME, MRU, Faridabad</li>
            <li>Dr Nitika, Associate Professor, DoECE, MRU, Faridabad</li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800">
            Publication Chair(s)
          </h2>
          <ul className="list-disc text-justify ml-6 text-gray-700 mb-3">
            <li>Dr Sachin Lakra, Professor, DoCST, MRU, Faridabad</li>
            <li>
              Dr Urmila Pilania, Associate Professor, DoCST, MRU, Faridabad
            </li>
            <li>
              Dr Priyanka Bansal, Associate Professor, DoECE, MRU, Faridabad
            </li>
            <li>
              Dr Jitendra Pal Singh, Ramanujan Fellow, DoSc, MRU, Faridabad
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800">
            Publicity Chair(s)
          </h2>
          <ul className="list-disc text-justify ml-6 text-gray-700 mb-3">
            <li>Dr Parneeta Dhariwal, Professor, DoCST, MRU, Faridabad</li>
            <li>Dr Mamta Arora, Associate Professor, DoCST, MRU, Faridabad</li>
            <li>Dr Smriti Mishra, Associate Professor, DoME, MRU, Faridabad</li>
            <li>
              Dr Arpit Sand, Professor, DoSc, MRU, Faridabad
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Patrons;
