import React from "react";
import {
  Users,
  ClipboardList,
  DollarSign,
  BookOpen,
  Megaphone,
  Truck,
  Globe,
  Home,
  Briefcase,
  Calendar,
  FileText,
  Image as ImageIcon,
} from "lucide-react"; // install: npm install lucide-react

const OrganisingCommitte = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-6 md:px-12 space-y-6">

        {/* Conference Oversight Committee */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <Users className="w-6 h-6 text-blue-600 mr-2" />
            Conference Oversight Committee
          </h2>
          <ul className="list-disc ml-6 text-justify text-gray-700 space-y-1">
            <li>Prof Rajnish Sharma (Section Vice Chair & Member-IEEE Delhi Section STDCOM on T & P Act)</li>
            <li>Prof Vivek Shrivastava (Section Exec Com Member Co-opted & Member-IEEE Delhi Section STDCOM on T & P Act)</li>
            <li>Dr Ekta Gandotra (Member-IEEE Delhi Section STDCOM on T & P Act)</li>
            <li>Prof Sneha Kabra (Section Secretary & Member-IEEE Delhi Section STDCOM on T & P Act)</li>
          </ul>
        </div>

        {/* Registration Committee */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <ClipboardList className="w-6 h-6 text-green-600 mr-2" />
            Registration Committee
          </h2>
          <ul className="list-disc ml-6 text-justify text-gray-700 space-y-1">
            
            <li>Dr Meena Chaudhary, Associate Professor, MRU, Faridabad</li>
            <li>Dr Ekta Rawat, Assistant Professor, SoSc, MRU, Faridabad</li>
            <li>Ms Jyoti Nanwal, DoCST, MRU, Faridabad</li>
            <li>Mr Nazish Ahmad Samsi, Assistant Professor, DoME, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Finance Committee */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
            Finance Committee
          </h2>
          <ul className="list-disc ml-6 text-justify text-gray-700 space-y-1">
            <li>Dr Narender, Associate Professor, DoCST, MRU, Faridabad</li>
            <li>Ms Babita Yadav, Assistant Professor, DoCST, MRU, Faridabad</li>
            <li>Mr Shyam Vij, Sr Executive, Accounts, MRU, Faridabad</li>
            <li>Mr Deepak, Superintendent, Office of Dean Engg, MRU, Faridabad</li>
            <li>Mr Sanjeev Kumar Kannojia, Office Coordinator, DoCST, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Publication Committee */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <BookOpen className="w-6 h-6 text-purple-600 mr-2" />
            Publication Committee
          </h2>
          <ul className="list-disc ml-6 text-justify text-gray-700 space-y-1">
            <li>Dr S K Shukla, Professor, SoSc, MRU, Faridabad</li>
            <li>Dr Neha Chaudhary, Assistant Professor, DoR&AI, MRU, Faridabad</li>
            <li>Dr Richa Adlakha, Assistant Professor, DoME, MRU, Faridabad</li>
            <li>Dr Piyush Charan, Associate Professor, DoR&AI, MRU, Faridabad</li>
            <li>Dr Charu Pathak, Professor, DoECE, MRU, Faridabad</li>
            <li>Dr Manoj Kumar, Associate Professor, DoCST, MRU, Faridabad</li>
            <li>Dr Shalu, Assistant Professor, DoCST, MRU, Faridabad</li>
            <li>Ms Ashima, Assistant Professor, DoCST, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Publicity Committee */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <Megaphone className="w-6 h-6 text-red-600 mr-2" />
            Publicity Committee
          </h2>
          <ul className="list-disc ml-6 text-justify text-gray-700 space-y-1">
            <li>Dr Lokesh Bhardwaj, Assistant Professor, DoECE, MRU, Faridabad</li>
            <li>Mr Vijay Kumar Gill, Assistant Professor, DoECE, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Logistic Committee */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <Truck className="w-6 h-6 text-teal-600 mr-2" />
            Logistic Committee
          </h2>
          <ul className="list-disc ml-6 text-justify text-gray-700 space-y-1">
            <li>Dr A Jayamani, Assistant Professor, SoSc, MRU, Faridabad</li>
            <li>Dr Piyush Mahendru, Assistant Professor, DoME, MRU, Faridabad</li>
            <li>Mr Agha Imran Hussain, Assistant Professor, DoCST, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Website and Social Media Committee */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <Globe className="w-6 h-6 text-indigo-600 mr-2" />
            Website and Social Media Committee
          </h2>
          <ul className="list-disc ml-6 text-justify text-gray-700 space-y-1">
            <li>Dr K Deepa, Associate Professor, DoECE, MRU, Faridabad</li>
            <li>Dr Gunjan Chandwani, Assistant Professor, DoCST, MRU, Faridabad</li>
            <li>Dr Bhanu Pratap Chaudhary, Assistant Professor, DoECE, MRU, Faridabad</li>
            <li>Ms Deepanshi Gupta, Assistant Professor, DoCST, MRU, Faridabad</li>
            <li>Ms Esha Khanna, Assistant Professor, DoCST, MRU, Faridabad</li>
            <li>Ms Tamanna Sachdeva, Assistant Professor, DoCST, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Hospitality/Accommodation Committee */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <Home className="w-6 h-6 text-pink-600 mr-2" />
            Hospitality / Accommodation Committee
          </h2>
          <ul className="list-disc ml-6 text-justify text-gray-700 space-y-1">
            <li>Dr Sanjay Singh, Associate Professor, DoCST, MRU, Faridabad</li>
            <li>Dr Jai Prakash, Associate Professor, SoSc, MRU, Faridabad</li>
            <li>Mr Pradeep Kr Mouria, Assistant Professor, DoME, MRU, Faridabad</li>
            <li>Mr Mandeep Bhadana, Assistant Professor, DoME, MRU, Faridabad</li>
            <li>Dr Deepti Maikhuri, Assistant Professor, SoSc, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Industry Collaboration and Sponsorship Committee */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <Briefcase className="w-6 h-6 text-orange-600 mr-2" />
            Industry Collaboration and Sponsorship Committee
          </h2>
          <ul className="list-disc ml-6 text-justify text-gray-700 space-y-1">
             <li>Dr Pooja Ahuja, Assistant Professor, DoCST, MRU, Faridabad</li>
            <li>Dr Abhishek Saxena, Professor, DoCST, MRU, Faridabad</li>
            <li>Dr Mamta Kaushik, Deputy Librarian, MRU</li>
          </ul>
        </div>

        {/* Event Management Committee */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <Calendar className="w-6 h-6 text-lime-600 mr-2" />
            Event Management Committee
          </h2>
          <ul className="list-disc ml-6 text-justify text-gray-700 space-y-1">
            <li>Ms Anupriya Sharma, Assistant Professor, DoCST, MRU, Faridabad</li>
            <li>Dr Monika Garg, Associate Professor, DoR&AI, MRU, Faridabad</li>
            <li>Dr Deepti Thakral, Associate Professor, DoCST, MRU, Faridabad</li>
            <li>Dr Priti Gupta, Assistant Professor, DoECE, MRU, Faridabad</li>
            <li>Dr Ananna Bardhan, Assistant Professor, SoSc, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Technical Report and Content Writing */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <FileText className="w-6 h-6 text-cyan-600 mr-2" />
            Technical Report and Content Writing
          </h2>
          <ul className="list-disc ml-6 text-justify text-gray-700 space-y-1">
            <li>Dr Javed Idrisi, Professor, SoSc, MRU, Faridabad</li>
            <li>Dr Neelu Chaudhary, Associate Professor, DoCST, MRU, Faridabad</li>
            <li>Mr Ram Chatterjee, Assistant Professor, DoCST, MRU, Faridabad</li>
          </ul>
        </div>

        {/* Graphics and Printing */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
            <ImageIcon className="w-6 h-6 text-violet-600 mr-2" />
            Graphics and Printing
          </h2>
          <ul className="list-disc ml-6 text-justify text-gray-700 space-y-1">
            <li>Mr Aniket Singh, Assistant Professor, DoCST, MRU, Faridabad</li>
            <li>Mr Anup Singh Kushwaha, Assistant Professor, DoCST, MRU, Faridabad</li>
            <li>Dr Awwab Mohammad, Assistant Professor, DoR&AI, MRU, Faridabad</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default OrganisingCommitte;
