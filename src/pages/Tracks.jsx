import React from "react";

const Tracks = () => {
  return (
    <div className="px-4 py-4 sm:px-6 sm:py-6 w-full overflow-x-hidden min-w-0">
      {/* Page Heading */}
      <h3 className="text-blue-700 text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center w-full">
        Conference Tracks
      </h3>

      {/* Intro Paragraph */}
      <p className="text-justify w-full mb-6">
        The conference <strong>ICASS-2026</strong> aims to foster on the theme
        <b>
          <em> “Harnessing AI for a Digital Future” </em>
        </b>
        , by leveraging intelligent computing, automation, and sustainable
        solutions for securing a digital future for everyone. The conference
        will feature the following tracks and related topics (but not limited
        to):
      </p>

      {/* Tracks Grid */}
      <div className="grid gap-6 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        
        {/* Track 1 */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <strong className="block text-center text-blue-700 text-lg font-semibold mb-2">
            Track-1: Computational Intelligent Systems and Applications
          </strong>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>Dr Urmila Pilania, Associate Professor, DoCST, MRU, Faridabad</li>
              <li>Dr Deepti Thakral, Associate Professor, DoCST, MRU, Faridabad</li>
              <li>Dr Manoj Kumar, Associate Professor, DoCST, MRU, Faridabad</li>
            </ul>
          </p>
          <ul className="list-inside ml-5 text-sm sm:text-base space-y-1">
            <li className="list-disc">AI, Machine Learning & its Applications</li>
            <li className="list-disc">Human-Computer Interaction</li>
            <li className="list-disc">Computer Vision and Image Processing</li>
            <li className="list-disc">Natural Language Processing, Understanding & Generation</li>
            <li className="list-disc">Cognitive and Computational Neuroscience</li>
            <li className="list-disc">Soft Computing Techniques in Decision-Making</li>
            <li className="list-disc">Applications of Fuzzy Systems in Industry and Research</li>
            <li className="list-disc">Cloud Computing and IoT in Manufacturing</li>
            <li className="list-disc">Privacy-Preserving Computation and Data Handling</li>
            <li className="list-disc">Intelligent Optimization Techniques</li>
            <li className="list-disc">Nature-Inspired Algorithms</li>
            <li className="list-disc">Security and Privacy in Intelligent Systems</li>
          </ul>
        </div>

        {/* Track 2 */}
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <strong className="block text-center text-green-700 text-lg font-semibold mb-2">
            Track-2: Data Analytics and Decision Sciences
          </strong>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-1 mb-3">
              <li>Dr Piyush Charan, Associate Professor, DoR&AI, MRU, Faridabad</li>
              <li>Dr Awwab Mohammad, Assistant Professor, DoR&AI, MRU, Faridabad</li>
            </ul>
          </p>
          <ul className="list-inside ml-5 text-sm sm:text-base space-y-1">
            <li className="list-disc">Data Analytics and Big Data Technologies with Applications</li>
            <li className="list-disc">AI-Driven Decision Support Systems</li>
            <li className="list-disc">Predictive and Prescriptive Analytics</li>
            <li className="list-disc">Data Engineering and Management</li>
            <li className="list-disc">Computational Complexity in Decision-Making Models</li>
            <li className="list-disc">Human-Centric Data Science</li>
            <li className="list-disc">Decision and Statistical Inference</li>
            <li className="list-disc">Cognitive and Behavioral Aspects of Data Interpretation</li>
            <li className="list-disc">Data Integrity and Security</li>
            <li className="list-disc">Business Intelligence and Data Mining</li>
          </ul>
        </div>

        {/* Track 3 */}
        <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <strong className="block text-center text-purple-700 text-lg font-semibold mb-2">
            Track-3: Futuristic Tools, Technologies & Applications
          </strong>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>Dr Mamta Arora, Associate Professor, DoCST, MRU, Faridabad</li>
              <li>Dr Monika Garg, Associate Professor, DoR&AI, MRU, Faridabad</li>
            </ul>
          </p>
          <ul className="list-inside ml-5 text-sm sm:text-base space-y-1">
            <li className="list-disc">Computational Mechanics and Simulations</li>
            <li className="list-disc">AI and Machine Learning in Mechanical Systems</li>
            <li className="list-disc">Generative AI and LLMs</li>
            <li className="list-disc">Edge and Fog Computing</li>
            <li className="list-disc">Autonomic Computing</li>
            <li className="list-disc">AR/VR Technology</li>
            <li className="list-disc">Hybrid Intelligent Systems</li>
            <li className="list-disc">Bio-Inspired Engineering</li>
            <li className="list-disc">AI & Emotions</li>
            <li className="list-disc">Quantum Computing</li>
            <li className="list-disc">DNA Computing</li>
            <li className="list-disc">Blockchain Systems</li>
          </ul>
        </div>

        {/* Track 4 */}
        <div className="bg-pink-50 border border-pink-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <strong className="block text-center text-pink-700 text-lg font-semibold mb-2">
            Track-4: Smart Electronics and Next-Gen Communication
          </strong>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>Dr Mohit Kumar Singh, Associate Professor, DoECE, MRU, Faridabad</li>
              <li>Dr Neetu Chauhan, Associate Professor, DoECE, MRU, Faridabad</li>
            </ul>
          </p>
          <ul className="list-inside ml-5 text-sm sm:text-base space-y-1">
            <li className="list-disc">5G and 6G Technology</li>
            <li className="list-disc">Electronic Devices, Circuits, and Systems</li>
            <li className="list-disc">Renewable Energy Sources and Technology including hydrogen</li>
            <li className="list-disc">RF, Microwaves, Wireless and Optical Communication</li>
            <li className="list-disc">VLSI and Low Power Electronics</li>
            <li className="list-disc">Biosensors</li>
            <li className="list-disc">Robotics, Control, Automation and Instrumentation</li>
            <li className="list-disc">Power Electronics and Applications</li>
            <li className="list-disc">Power Generation, Transmission and Distribution</li>
            <li className="list-disc">Solar, Wind, and Battery Technology</li>
            <li className="list-disc">Biomedical Electronics</li>
            <li className="list-disc">Photonic Technologies</li>
          </ul>
        </div>

        {/* Track 5 */}
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <strong className="block text-center text-yellow-700 text-lg font-semibold mb-2">
            Track-5: Smart Cities and Sustainability
          </strong>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>Dr Neha Chaudhary, Assistant Professor, DoR&AI, MRU, Faridabad</li>
              <li>Dr Richa Adlakha, Assistant Professor, DoME, MRU, Faridabad</li>
            </ul>
          </p>
          <ul className="list-inside ml-5 text-sm sm:text-base space-y-1">
            <li className="list-disc">Smart Energy Efficient Systems</li>
            <li className="list-disc">Sustainable Manufacturing Practices</li>
            <li className="list-disc">Smart Grids and Green Energy Systems</li>
            <li className="list-disc">Smart Internet of Things</li>
            <li className="list-disc">Energy Efficiency in Mechanical Systems</li>
            <li className="list-disc">Renewable Energy Systems</li>
            <li className="list-disc">Sustainable Transportation and Mobility</li>
            <li className="list-disc">Smart Waste Management Systems</li>
          </ul>
        </div>

        {/* Track 6 */}
        <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <strong className="block text-center text-teal-700 text-lg font-semibold mb-2">
            Track-6: Industry 5.0 and Cyber Physical Systems
          </strong>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>Dr Smriti Mishra, Associate Professor, DoME, MRU, Faridabad</li>
              <li>Dr Rajnesh, Assistant Professor, DoME, MRU, Faridabad</li>
            </ul>
          </p>
          <ul className="list-inside ml-5 text-sm sm:text-base space-y-1">
            <li className="list-disc">Advanced Robotics and Automation</li>
            <li className="list-disc">Additive Manufacturing and 3D Printing</li>
            <li className="list-disc">Smart Sensors and Actuators</li>
            <li className="list-disc">Smart Buildings</li>
            <li className="list-disc">Digital Manufacturing and Smart Factories</li>
            <li className="list-disc">Human-Machine Interaction</li>
            <li className="list-disc">Autonomous Vehicles</li>
            <li className="list-disc">Smart Healthcare</li>
          </ul>
        </div>

        {/* Track 7 */}
        <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <strong className="block text-center text-indigo-700 text-lg font-semibold mb-2">
            Track-7: Smart Materials for Sustainable Technology
          </strong>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>Dr Anshuman Sahai, Associate Professor, DoSc, MRU, Faridabad</li>
              <li>Dr Vinayak Vandan, Assistant Professor, DoSc, MRU, Faridabad</li>
            </ul>
          </p>
          <ul className="list-inside ml-5 text-sm sm:text-base space-y-1">
            <li className="list-disc">Eco-friendly Smart Materials</li>
            <li className="list-disc">Recyclable and Reusable Smart Materials</li>
            <li className="list-disc">Smart Materials for Energy Applications</li>
            <li className="list-disc">Green Synthesis of Smart Materials</li>
            <li className="list-disc">Solid State and Thin-film Batteries</li>
            <li className="list-disc">Smart Materials for Sensors and Related Technology</li>
            <li className="list-disc">Applications of AI for Sustainable Technology</li>
            <li className="list-disc">Artificial Intelligence and Materials Innovation</li>
            <li className="list-disc">Energy Storage and Sustainability</li>
            <li className="list-disc">AI for Materials Synthesis & Discovery</li>
            <li className="list-disc">AI for Batteries, Supercapacitors & Energy Devices</li>
            <li className="list-disc">Smart Materials & AI for Data Storage</li>
          </ul>
        </div>

      </div>
      <h3 className="text-blue-700 text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center w-full mt-8">
        Special Tracks
      </h3>
      <div className="grid gap-6 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <strong className="block text-center text-indigo-700 text-lg font-semibold mb-2">
            Track-8: Generative AI in Action: Driving Sustainable Solutions Across Smart Cities, Energy, Agriculture and Healthcare.
          </strong>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>Dr Kushagra Agrawal, MRIIRS, Faridabad</li>
              <li>Ms Shaveta Jain, MRIIRS, Faridabad</li>
            </ul>
          </p>
          <ul className="list-inside ml-5 text-sm sm:text-base space-y-1">
            <li className="list-disc">Applications of Generative AI in Complex System Simulation</li>
            <li className="list-disc">Optimizing Real-World Systems with Generative AI</li>
            <li className="list-disc">Synthetic Data Generation for Low-Resource Environments</li>
            <li className="list-disc">Leveraging Generative AI to Solve Data Scarcity Issues</li>
            <li className="list-disc">Cross-Domain Impact of Generative AI in Environmental Sustainability</li>
            <li className="list-disc">Generative AI for Climate Change Modeling and Prediction</li>
            <li className="list-disc">Generative AI in Urban Planning and Sustainable Cities</li>
            <li className="list-disc">Challenges in Creating Ethical and Transparent Generative AI Systems</li>
            <li className="list-disc">Designing Trustworthy Generative AI Frameworks for Critical Applications</li>
            <li className="list-disc">Generative AI for Solving Water and Food Security Issues</li>
            <li className="list-disc">Cross-Sector Collaboration in Generative AI for Sustainability</li>
            <li className="list-disc">Evaluating the Ethical Implications of Synthetic Data Use</li>
            <li className="list-disc">Real-World Case Studies of Generative AI Driving Social Good</li>
            <li className="list-disc">Advancements in Generative AI for Environmental Monitoring</li>
          </ul>
        </div>
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <strong className="block text-center text-green-700 text-lg font-semibold mb-2">
            Track-9: AI-Driven Cybersecurity and Digital Forensics for Sustainable Intelligent Systems.
          </strong>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>Dr Manvi Breja, Department of CSE, The NorthCap University,Gurugram, Haryana, India</li>
              <li>Dr Keshav Kaushik, Center for Cyber Security and Cryptology, Sharda School of Computer Science & Engineering,Sharda University, Greater Noida, India</li>
            </ul>
          </p>
          <ul className="list-inside ml-5 text-sm sm:text-base space-y-1">
            <li className="list-disc">AI and ML for intelligent threat detection and response</li>
            <li className="list-disc">Digital forensics in AI-driven and IoT-based environments</li>
            <li className="list-disc">Cybersecurity frameworks for smart cities and Industry 5.0</li>
            <li className="list-disc">Blockchain and distributed ledgers for secure automation</li>
            <li className="list-disc">Privacy-preserving AI and federated learning in cyber-physical systems</li>
            <li className="list-disc">Adversarial machine learning and robust AI security models</li>
            <li className="list-disc">Intrusion detection/prevention systems powered by AI</li>
            <li className="list-disc">Forensic readiness in intelligent and automated infrastructures</li>
            <li className="list-disc">Green AI and energy-efficient security mechanisms</li>
            <li className="list-disc">Legal, ethical, and societal issues in AI-driven cybersecurity</li>
          </ul>
        </div>
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <strong className="block text-center text-amber-700 text-lg font-semibold mb-2">
            Track-10: Artificial Intelligence and Data-Driven Automation for Sustainable Development.
          </strong>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>Dr Dinesh Goyal, Professor, Poornima Institute of Engineering and Technology, Jaipur</li>
              <li>Dr Budesh Kanwar, Professor, Poornima Institute of Engineering and Technology, Jaipur</li>
            </ul>
          </p>
          <ul className="list-inside ml-5 text-sm sm:text-base space-y-1">
            <li className="list-disc">AI and Machine Learning applications for sustainability</li>
            <li className="list-disc">Intelligent automation and control systems</li>
            <li className="list-disc">Data analytics for smart and sustainable decision-making</li>
            <li className="list-disc">Internet of Things (IoT) and Edge Computing for energy efficiency</li>
            <li className="list-disc">Green computing and eco-friendly intelligent systems</li>
            <li className="list-disc">Smart city frameworks and sustainable urban planning</li>
            <li className="list-disc">Autonomous systems for environmental monitoring</li>
            <li className="list-disc">Predictive analytics in renewable energy systems</li>
            <li className="list-disc">AI for water, waste, and resource management</li>
            <li className="list-disc">Sustainable manufacturing and Industry 5.0</li>
          </ul>
        </div>
        <div className="bg-amber-50 border border-purple-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <strong className="block text-center text-purple-700 text-lg font-semibold mb-2">
            Track 11: AI-Enabled Big Data for Climate, Agriculture, and Smart Cities
          </strong>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>Dr Hemant Kumar Saini, School of Computer Science and Engineering, Bennett University, Greater Noida</li>
              <li>Dr Fadi Al-Turjman, Professor, Faculty of AI and Informatics, Director of the International Research Center for AI and IoT, Near East University, Nicosia - Mersin 10, Turkey</li>
              <li>Dr Aditya Dev Mishra, Bennett University, Greater Noida</li>
            </ul>
          </p>
          <ul className="list-inside ml-5 text-sm sm:text-base space-y-1">
            <li className="list-disc"> AI-driven Big Data frameworks for climate monitoring, carbon forecasting,and renewable energy optimization.</li>
            <li className="list-disc">Precision agriculture using data analytics, computer vision, and predictive modeling for crop yield enhancement and pest management.</li>
            <li className="list-disc">Smart city intelligence leveraging IoT, digital twins, and real-time analytics for urban mobility, energy efficiency, and infrastructure resilience.</li>
            <li className="list-disc">Federated and privacy-preserving learning for distributed environmental and agricultural data.</li>
            <li className="list-disc">Green and ethical AI frameworks for sustainable data processing and decision-making.</li>
            <li className="list-disc">Integration of edge, cloud, and quantum computing for large-scale environmental and societal data analytics.</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <strong className="block text-center text-red-700 text-lg font-semibold mb-2">
            Track 12: Next-Generation Cyber-Physical Systems Empowered by Artificial Intelligence and IoT
          </strong>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>Dr. Rohit Tanwar, Shri Mata Vaishno Devi University, Katra, UT of J&K</li>
            </ul>
          </p>
          <ul className="list-inside ml-5 text-sm sm:text-base space-y-1">
            <li className="list-disc">AI-driven architectures and frameworks for intelligent Cyber-Physical Systems.</li>
            <li className="list-disc">Internet of Things (IoT) integration and communication models for CPS.</li>
            <li className="list-disc">Edge and Fog Computing for real-time data analytics and decision-making.</li>
            <li className="list-disc">Machine Learning and Deep Learning applications in IoT-enabled CPS.</li>
            <li className="list-disc">Security, privacy, and trust management in IoT-based Cyber-Physical Systems.</li>
            <li className="list-disc">Human–Machine Interaction and ethical AI in smart cyber-physical ecosystems.</li>
            <li className="list-disc">Applications of IoT and CPS in smart cities, healthcare, transportation.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
