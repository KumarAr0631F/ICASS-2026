import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const trackList = [
  {
    title: "Track-8: Generative AI in Action: Driving Sustainable Solutions Across Smart Cities, Energy, Agriculture and Healthcare.",
    content: [
      "Applications of Generative AI in Complex System Simulation",
      "Optimizing Real-World Systems with Generative AI",
      "Synthetic Data Generation for Low-Resource Environments",
      "Leveraging Generative AI to Solve Data Scarcity Issues",
      "Cross-Domain Impact of Generative AI in Environmental Sustainability",
      "Generative AI for Climate Change Modeling and Prediction",
      "Generative AI in Urban Planning and Sustainable Cities",
      "Challenges in Creating Ethical and Transparent Generative AI Systems",
      "Designing Trustworthy Generative AI Frameworks for Critical Applications",
      "Generative AI for Solving Water and Food Security Issues",
      "Societal Impacts of Generative AI in Healthcare Systems",
      "Cross-Sector Collaboration in Generative AI for Sustainability",
      "Evaluating the Ethical Implications of Synthetic Data Use",
      "Real-World Case Studies of Generative AI Driving Social Good",
      "Advancements in Generative AI for Environmental Monitoring",
    ],
  },
  {
    title: "Track-9: AI-Driven Cybersecurity and Digital Forensics for Sustainable Intelligent Systems",
    content: [
      "AI and ML for intelligent threat detection and response",
      "Digital forensics in AI-driven and IoT-based environments",
      "Cybersecurity frameworks for smart cities and Industry 5.0",
      "Blockchain and distributed ledgers for secure automation",
      "Privacy-preserving AI and federated learning in cyber-physical systems",
      "Adversarial machine learning and robust AI security models",
      "Intrusion detection/prevention systems powered by AI",
      "Forensic readiness in intelligent and automated infrastructures",
      "Green AI and energy-efficient security mechanisms",
      "Legal, ethical, and societal issues in AI-driven cybersecurity",
    ],
  },
  {
    title: "Track-10: Artificial Intelligence and Data-Driven Automation for Sustainable Development",
    content: [
      "AI and Machine Learning applications for sustainability",
      "Intelligent automation and control systems",
      "Data analytics for smart and sustainable decision-making",
      "Internet of Things (IoT) and Edge Computing for energy efficiency",
      "Green computing and eco-friendly intelligent systems",
      "Smart city frameworks and sustainable urban planning",
      "Autonomous systems for environmental monitoring",
      "Predictive analytics in renewable energy systems",
      "AI for water, waste, and resource management",
      "Sustainable manufacturing and Industry 5.0",
    ],
  },
  {
    title: "Track 11: AI-Enabled Big Data for Climate, Agriculture, and Smart Cities",
    content: [
      "AI-driven Big Data frameworks for climate monitoring, carbon forecasting,and renewable energy optimization.",
      "Precision agriculture using data analytics, computer vision, and predictive modeling for crop yield enhancement and pest management.",
      "Smart city intelligence leveraging IoT, digital twins, and real-time analytics for urban mobility, energy efficiency, and infrastructure resilience.",
      "Federated and privacy-preserving learning for distributed environmental and agricultural data.",
      "Green and ethical AI frameworks for sustainable data processing and decision-making.",
      "Integration of edge, cloud, and quantum computing for large-scale environmental and societal data analytics.",
    ],
  },
  {
    title: "Track 12: Next-Generation Cyber-Physical Systems Empowered by Artificial Intelligence and IoT",
    content: [
      "AI-driven architectures and frameworks for intelligent Cyber-Physical Systems.",
      "Internet of Things (IoT) integration and communication models for CPS.",
      "Edge and Fog Computing for real-time data analytics and decision-making.",
      "Machine Learning and Deep Learning applications in IoT-enabled CPS.",
      "Security, privacy, and trust management in IoT-based Cyber-Physical Systems.",
      "Human–Machine Interaction and ethical AI in smart cyber-physical ecosystems.",
      "Applications of IoT and CPS in smart cities, healthcare, transportation.",
    ],
  },
];

const TrackDropDown2 = () => {
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
              <span className="font-semibold mr-3">{track.title}</span>
              <ChevronDown
                className={`transition-transform duration-300 w-14 ${
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

export default TrackDropDown2;
