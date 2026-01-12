import React from "react";
import {
  Crown,
  Star,
  Users,
  UserCheck,
  UserCog,
  ClipboardList,
  FileText,
  Coins,
  BookOpen,
  Share2,
  Globe2,
  Sparkles,
} from "lucide-react";

const Patrons = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-12 grid gap-6">

        {/* Chief Patron(s) */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <Crown className="w-6 h-6 text-yellow-500 mr-2" />
            Chief Patron(s)
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 text-justify">
            <li>Dr Prashant Bhalla, Hon'ble Chancellor, MRU, Faridabad</li>
            <li>Dr Amit Bhalla, Hon'ble Vice President, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Patron(s) */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <Star className="w-6 h-6 text-blue-500 mr-2" />
            Patron(s)
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 text-justify">
            <li>Prof (Dr) Deependra Kumar Jha, Hon'ble Vice Chancellor, MRU, Faridabad</li>
            <li>Prof (Dr) Sangeeta Banga, Pro-Vice-Chancellor, MRU, Faridabad</li>
            <li>Prof (Dr) Shruti Vashist, Professor and Dean (Academics), MRU, Faridabad</li>
            <li>Shri Ramesh Nair, Registrar, MRU, Faridabad</li>
          </ul>
        </div>

        {/* General Chair */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <Users className="w-6 h-6 text-green-500 mr-2" />
            General Chair
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 text-justify">
            <li>Prof (Dr) Dipali Bansal, Professor and Dean, SoE, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Conference Chair */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <UserCheck className="w-6 h-6 text-purple-500 mr-2" />
            Conference Chair
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 text-justify">
            <li>Prof (Dr) Manpreet Kaur, Director E-Learning and Professor, DoCST, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Executive Chair(s) */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <UserCog className="w-6 h-6 text-pink-500 mr-2" />
            Executive Chair(s)
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 text-justify">
            <li>Prof (Dr) Jyotsna Pandit, Dean & HOD Sciences, MRU, Faridabad</li>
            <li>Prof (Dr) Deepa Arora, Director QAA and Professor, SoSc, MRU, Faridabad</li>
            <li>Prof (Dr) Meena Kapahi, Director International Relations and Professor, SoSc, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Convener(s) */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <ClipboardList className="w-6 h-6 text-teal-500 mr-2" />
            Convener(s)
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 text-justify">
            <li>Dr Meenakshi Gupta, Associate Professor, Associate Head, DoECE, MRU, Faridabad</li>
            <li>Dr Ganga Sharma, Associate Professor, DoCST, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Conference Secretary(s) */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <FileText className="w-6 h-6 text-indigo-500 mr-2" />
            Conference Secretary(s)
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 text-justify">
            <li>Dr Prashant Bhardwaj, Associate Professor, DoME, MRU, Faridabad</li>
            <li>Dr Gianender Kajal, Assistant Professor, DoME, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Technical Program Chair(s) */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <Sparkles className="w-6 h-6 text-red-500 mr-2" />
            Technical Program Chair(s)
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 text-justify">
            <li>Prof (Dr) Bhim Singh, Director Publications & Patents and Head, DoME, MRU, Faridabad</li>
            <li>Dr Jimmy Mehta, Assistant Professor, DoME, MRU, Faridabad</li>
            <li>Prof (Dr) Kavita Singh, Professor, DoECE, MRU, Faridabad</li>
            <li>Prof (Dr) D K Sharma, Dean Examination and Professor, SoSc, MRU, Faridabad</li>
            <li>Prof (Dr) Joginder Singh, Professor, DoME, MRU, Faridabad</li>
            <li>Prof (Dr) Mrinal Pandey, Professor, DoCST, MRU, Faridabad</li>
            <li>Dr Niharika Thakur, Associate Professor, DoECE, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Steering Committee Chair(s) */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <Globe2 className="w-6 h-6 text-green-600 mr-2" />
            Steering Committee Chair(s)
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 text-justify">
            <li>Prof (Dr) Prinima Gupta, Director PhD and Professor, DoCST, MRU, Faridabad</li>
            <li>Prof (Dr) Jyoti Pruthi, Director Regional Outreach and Professor, DoCST, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Finance Chair / Treasurer(s) */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <Coins className="w-6 h-6 text-yellow-600 mr-2" />
            Finance Chair / Treasurer(s)
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 text-justify">
            <li>Dr Chandni Magoo, Associate Professor and Associate Head, DoCST, MRU, Faridabad</li>
            <li>Prof (Dr) Ajit, Professor, DoME, MRU, Faridabad</li>
            <li>Dr J P Sharma, Associate Professor, DoME, MRU, Faridabad</li>
            <li>Ms Shefali Chopra, Dy Registrar Examination and R&S, MRU, Faridabad</li>
            <li>Dr Nitika, Associate Professor, DoECE, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Publication Chair(s) */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <BookOpen className="w-6 h-6 text-orange-500 mr-2" />
            Publication Chair(s)
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 text-justify">
            <li>Prof (Dr) Sachin Lakra, Professor, DoCST, MRU, Faridabad</li>
            <li>Dr Aparna Vyas, Associate Professor, SoSc, MRU, Faridabad</li>
            <li>Dr Urmila Pilania, Associate Professor, DoCST, MRU, Faridabad</li>
            <li>Dr Priyanka Bansal, Professor, DoECE, MRU, Faridabad</li>
            <li>Dr Jitendra Pal Singh, Ramanujan Fellow, SoSc, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Special Session Chair */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <Sparkles className="w-6 h-6 text-purple-500 mr-2" />
            Special Session Chair
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 text-justify">
            <li>Dr Jitendra Pal Singh, Ramanujan Fellow, SoSc, MRU, Faridabad</li>
            <li>Dr Monika Lamba, Assistant Professor, DoCST, MRU, Faridabad</li>
            <li>Dr Mamta Kaushik, Deputy Librarian, MRU</li>
            <li>Dr Ranjana Jain, Associate Professor, DoCST, MRU, Faridabad</li>
             <li>Dr Pooja Ahuja, Assistant Professor, DoCST, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Publicity Chair(s) */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <Share2 className="w-6 h-6 text-blue-600 mr-2" />
            Publicity Chair(s)
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1 text-justify">
            <li>Prof (Dr) Parneeta Dhaliwal, Professor, DoCST, MRU, Faridabad</li>
            <li>Dr Mamta Arora, Associate Professor, DoCST, MRU, Faridabad</li>
            <li>Dr Smriti Mishra, Associate Professor, DoME, MRU, Faridabad</li>
            <li>Dr Arpit Sand, Professor, SoSc, MRU, Faridabad</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Patrons;
