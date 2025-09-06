import React from "react";

const Tracks = () => {
  return (
    <div className="px-4 py-4 sm:px-6 sm:py-6 w-full overflow-x-hidden min-w-0">
      <h3 className="text-blue-700 text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center w-full">
        Conference Tracks
      </h3>
      <p className="text-justify w-full  mb-4">
        The conference <strong>ICASS-2026</strong> aims to foster on the theme
        <b>
          <em>“Harnessing AI for a Digital Future”</em>
        </b>
        , by leveraging intelligent computing, automation, and sustainable
        solutions for securing a digital future for everyone. The conference
        will feature the following tracks and related topics (but not limited
        to):
      </p>
      <div className="flex flex-col gap-4 w-full ">
        {/* Track 1 */}
        <div className="bg-white rounded-lg w-full overflow-x-hidden break-words">
          <strong>
            Track-1: Computational Intelligent Systems and Applications
          </strong>

          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>
                Dr Urmila Pilania, Associate Professor, DoCST, MRU, Faridabad
              </li>
              <li>
                Dr Deepti Thakral, Associate Professor, DoCST, MRU, Faridabad
              </li>
            </ul>
          </p>
          <ul className="list-inside ml-4 sm:ml-5 text-sm sm:text-base space-y-1">
            <li className="list-disc">
              AI, Machine Learning & its Applications
            </li>
            <li className="list-disc">Human-Computer Interaction</li>
            <li className="list-disc">Computer Vision and Image Processing</li>
            <li className="list-disc">
              Natural Language Processing, Understanding & Generation
            </li>
            <li className="list-disc">
              Cognitive and Computational Neuroscience
            </li>
            <li className="list-disc">
              Soft Computing Techniques in Decision-Making
            </li>
            <li className="list-disc">
              Applications of Fuzzy Systems in Industry and Research
            </li>
            <li className="list-disc">
              Cloud Computing and IoT in Manufacturing
            </li>
            <li className="list-disc">
              Privacy-Preserving Computation and Data Handling
            </li>
            <li className="list-disc">Intelligent Optimization Techniques</li>
            <li className="list-disc">Nature-Inspired Algorithms</li>
            <li className="list-disc">
              Security and Privacy in Intelligent Systems
            </li>
          </ul>
        </div>
        {/* Track 2 */}
        <div className="bg-white rounded-lg w-full overflow-x-hidden break-words">
          <strong>Track-2: Data Analytics and Decision Sciences</strong>
          <h3></h3>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>
                Dr Piyush Charan, Associate Professor, DoR&AI, MRU, Faridabad
              </li>
              <li>
                Dr Awwab Mohammad, Assistant Professor, DoR&AI, MRU, Faridabad
              </li>
            </ul>
          </p>
          <ul className="list-inside ml-4 sm:ml-5 text-sm sm:text-base space-y-1">
            <li className="list-disc">
              Data Analytics and Big Data Technologies with Applications
            </li>
            <li className="list-disc">AI-Driven Decision Support Systems </li>
            <li className="list-disc">Predictive and Prescriptive Analytics</li>
            <li className="list-disc">Data Engineering and Management</li>
            <li className="list-disc">
              Computational Complexity in Decision-Making Models
            </li>
            <li className="list-disc">Human-Centric Data Science</li>
            <li className="list-disc">Decision and Statistical Inference</li>
            <li className="list-disc">
              Cognitive and Behavioral Aspects of Data Interpretation
            </li>
            <li className="list-disc">Data Integrity and Security</li>
            <li className="list-disc">Business Intelligence and Data Mining</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg w-full overflow-x-hidden break-words">
          <strong>
            Track-3: Futuristic Tools, Technologies & Applications
          </strong>
          <h3></h3>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>
                Dr Mamta Arora, Associate Professor, DoCST, MRU, Faridabad
              </li>
              <li>
                Dr Monika Garg, Associate Professor, DoR&AI, MRU, Faridabad
              </li>
            </ul>
          </p>
          <ul className="list-inside ml-5">
            <li className="list-disc">
              Computational Mechanics and Simulations
            </li>
            <li className="list-disc">
              Artificial Intelligence and Machine Learning in Mechanical Systems
            </li>
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

        <div>
          <strong>Track-4: Smart Electronics and Next-Gen Communication</strong>
          <h3></h3>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>
                Dr Mohit Kumar Singh, Associate Professor, DoECE, MRU, Faridabad
              </li>
              <li>
                Dr Neetu Chauhan, Associate Professor, DoECE, MRU, Faridabad
              </li>
            </ul>
          </p>
          <ul className="list-inside ml-5">
            <li className="list-disc">5G and 6G Technology</li>
            <li className="list-disc">
              Electronic Devices, Circuits, and Systems
            </li>
            <li className="list-disc">
              Renewable Energy Sources and Technology including hydrogen.
            </li>
            <li className="list-disc">
              RF, Microwaves, Wireless and Optical Communication
            </li>
            <li className="list-disc">VLSI and Low Power Electronics</li>
            <li className="list-disc">Biosensors</li>
            <li className="list-disc">
              Robotics, Control, Automation and Instrumentation
            </li>
            <li className="list-disc">Power Electronics and Applications</li>
            <li className="list-disc">
              Power Generation, Transmission and Distribution
            </li>
            <li className="list-disc">Solar, Wind, and Battery Technology</li>
            <li className="list-disc">Biomedical Electronics</li>
            <li className="list-disc">Photonic Technologies</li>
          </ul>
        </div>

        <div>
          <strong>Track-5: Smart Cities and Sustainability</strong>
          <h3></h3>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>
                Dr Neha Chaudhary, Assistant Professor, DoR&AI, MRU, Faridabad
              </li>
              <li>
                Dr Richa Adlakha, Assistant Professor, DoME, MRU, Faridabad
              </li>
            </ul>
          </p>
          <ul className="list-inside ml-5">
            <li className="list-disc">Smart Energy Efficient Systems</li>
            <li className="list-disc">Sustainable Manufacturing Practices</li>
            <li className="list-disc">Smart Grids and Green Energy Systems</li>
            <li className="list-disc">Smart Internet of Things</li>
            <li className="list-disc">
              Energy Efficiency in Mechanical Systems
            </li>
            <li className="list-disc">Renewable Energy Systems</li>
            <li className="list-disc">
              Sustainable Transportation and Mobility
            </li>
            <li className="list-disc">Smart Waste Management Systems</li>
          </ul>
        </div>

        <div>
          <strong>Track-6: Industry 5.0 and Cyber Physical Systems</strong>
          <h3></h3>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>
                Dr Smriti Mishra, Associate Professor, DoME, MRU, Faridabad
              </li>
              <li>Dr Rajnesh, Assistant Professor, DoME, MRU, Faridabad</li>
            </ul>
          </p>
          <ul className="list-inside ml-5">
            <li className="list-disc">Advanced Robotics and Automation</li>
            <li className="list-disc">
              Additive Manufacturing and 3D Printing
            </li>
            <li className="list-disc">Smart Sensors and Actuators</li>
            <li className="list-disc">Smart Buildings</li>
            <li className="list-disc">
              Digital Manufacturing and Smart Factories
            </li>
            <li className="list-disc">Human-Machine Interaction</li>
            <li className="list-disc">Autonomous vehicles</li>
            <li className="list-disc">Smart Healthcare</li>
          </ul>
        </div>

        <div>
          <strong>Track-7: Smart Materials for Sustainable Technology</strong>
          <h3></h3>
          <p className="flex">
            <b>Track Chairs:</b>
            <ul className="ml-2 mb-3">
              <li>Dr Javed Idrisi, Professor, DoSc, MRU, Faridabad</li>
              <li>
                Dr Anshuman Sahai, Associate Professor, DoSc, MRU, Faridabad
              </li>
            </ul>
          </p>
          <ul className="list-inside ml-5">
            <li className="list-disc">Eco-friendly Smart Materials</li>
            <li className="list-disc">
              Recyclable and Reusable Smart Materials
            </li>
            <li className="list-disc">
              Smart Materials for Energy Applications
            </li>
            <li className="list-disc">Green Synthesis of Smart Materials</li>
            <li className="list-disc">Solid State and Thin-film Batteries</li>
            <li className="list-disc">
              Smart Materials for Sensors and Related Technology
            </li>
            <li className="list-disc">
              Applications of AI for Sustainable Technology
            </li>
            <li className="list-disc">
              Artificial Intelligence and Materials Innovation
            </li>
            <li className="list-disc">Energy Storage and Sustainability</li>
            <li className="list-disc">
              AI for Materials Synthesis & Discovery
            </li>
            <li className="list-disc">
              AI for batteries, supercapacitors, and other energy devices
            </li>
            <li className="list-disc">Smart materials & AI for data storage</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
