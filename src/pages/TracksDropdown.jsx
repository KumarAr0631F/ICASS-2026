import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const trackList = [
  {
    title: "Track-1: Computational Intelligent Systems and Applications",
    content: [
      "AI, Machine Learning & its Applications",
      "Human-Computer Interaction",
      "Computer Vision and Image Processing",
      "Natural Language Processing, Understanding & Generation",
      "Cognitive and Computational Neuroscience",
      "Soft Computing Techniques in Decision-Making",
      "Applications of Fuzzy Systems in Industry and Research",
      "Cloud Computing and IoT in Manufacturing",
      "Privacy-Preserving Computation and Data Handling",
      "Intelligent Optimization Techniques",
      "Nature-Inspired Algorithms",
      "Security and Privacy in Intelligent Systems",
    ],
  },
  {
    title: "Track-2: Data Analytics and Decision Sciences",
    content: [
      "Data Analytics and Big Data Technologies with Applications",
      "AI-Driven Decision Support Systems ",
      "Predictive and Prescriptive Analytics",
      "Data Engineering and Management",
      "Computational Complexity in Decision-Making Models",
      "Human-Centric Data Science",
      "Decision and Statistical Inference",
      "Cognitive and Behavioral Aspects of Data Interpretation",
      "Data Integrity and Security",
      "Business Intelligence and Data Mining",
    ],
  },
  {
    title: "Track-3: Futuristic Tools, Technologies & Applications",
    content: [
      "Computational Mechanics and Simulations",
      "Artificial Intelligence and Machine Learning in Mechanical Systems",
      "Generative AI and LLMs",
      "Edge and Fog Computing",
      "Autonomic Computing",
      "AR/VR Technology",
      "Hybrid Intelligent Systems",
      "Bio-Inspired Engineering",
      "AI & Emotions",
      "Quantum Computing",
      "DNA Computing",
      "Blockchain Systems",
    ],
  },
  {
    title: "Track-4: Smart Electronics and Next-Gen Communication",
    content: [
      "5G and 6G Technology",
      "Electronic Devices, Circuits, and Systems",
      "Renewable Energy Sources and Technology including hydrogen.",
      "RF, Microwaves, Wireless and Optical Communication",
      "VLSI and Low Power Electronics",
      "Biosensors",
      "Robotics, Control, Automation and Instrumentation",
      "Power Electronics and Applications",
      "Power Generation, Transmission and Distribution",
      "Solar, Wind, and Battery Technology",
      "Biomedical Electronics",
      "Photonic Technologies",
    ],
  },
  {
    title: "Track-5: Smart Cities and Sustainability",
    content: [
      "Smart Energy Efficient Systems",
      "Sustainable Manufacturing Practices",
      "Smart Grids and Green Energy Systems",
      "Smart Internet of Things",
      "Energy Efficiency in Mechanical Systems",
      "Renewable Energy Systems",
      "Sustainable Transportation and Mobility",
      "Smart Waste Management Systems",
    ],
  },
  {
    title: "Track-6: Industry 5.0 and Cyber Physical Systems",
    content: [
      "Advanced Robotics and Automation",
      "Additive Manufacturing and 3D Printing",
      "Smart Sensors and Actuators",
      "Smart Buildings",
      "Digital Manufacturing and Smart Factories",
      "Human-Machine Interaction",
      "Autonomous vehicles",
      "Smart Healthcare",
    ],
  },
  {
    title: "Track-7: Smart Materials for Sustainable Technology",
    content: [
      "Eco-friendly Smart Materials",
      "Recyclable and Reusable Smart Materials",
      "Smart Materials for Energy Applications",
      "Green Synthesis of Smart Materials",
      "Solid State and Thin-film Batteries",
      "Smart Materials for Sensors and Related Technology",
      "Applications of AI for Sustainable Technology",
      "Artificial Intelligence and Materials Innovation",
      "Energy Storage and Sustainability",
      "AI for Materials Synthesis & Discovery",
      "AI for batteries, supercapacitors, and other energy devices",
      "Smart materials & AI for data storage",
    ],
  },
];

const TracksDropdown = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [closingIndex, setClosingIndex] = useState(null);
  const [pendingOpenIndex, setPendingOpenIndex] = useState(null);
  const timeoutRef = useRef(null);

  const handleToggle = (idx) => {
    if (openIndex === idx) {
      setClosingIndex(idx);
      setOpenIndex(null);
      timeoutRef.current = setTimeout(() => {
        setClosingIndex(null);
      }, 500);
    } else {
      if (openIndex !== null) {
        setClosingIndex(openIndex);
        setPendingOpenIndex(idx);
        setOpenIndex(null);
        timeoutRef.current = setTimeout(() => {
          setClosingIndex(null);
          setOpenIndex(idx); 
          setPendingOpenIndex(null);
        }, 500);
      } else {
        setOpenIndex(idx);
      }
    }
  };

  React.useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  React.useEffect(() => {
    // If closing animation finished and a new track is pending, open it
    if (
      openIndex === null &&
      pendingOpenIndex !== null &&
      closingIndex === null
    ) {
      setOpenIndex(pendingOpenIndex);
      setPendingOpenIndex(null);
    }
  }, [openIndex, pendingOpenIndex, closingIndex]);

  return (
    <div>
      <ul className="list-inside space-y-4">
        {trackList.map((track, idx) => (
          <li key={track.title}>
            <div
              className="cursor-pointer bg-blue-200 py-3 px-2.5 rounded-lg flex items-center justify-between"
              onClick={() => handleToggle(idx)}
            >
              <span className="font-semibold">{track.title}</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
                size={22}
              />
            </div>
            <div
              className={`overflow-hidden ${
                openIndex === idx
                  ? "animate-dropdown-open"
                  : closingIndex === idx
                  ? "animate-dropdown-close"
                  : ""
              }`}
            >
              {(openIndex === idx || closingIndex === idx) && (
                <ul className="list-inside ml-5 py-2">
                  {track.content.map((item, i) => (
                    <li className="list-disc" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TracksDropdown;
