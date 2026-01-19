
import {BadgePercent, CreditCard, IdCard, RotateCcw } from "lucide-react";

const guidelines = [
  {
    icon: <CreditCard className="w-6 h-6 text-amber-600" />,
    title: "Payment Authorization",
    description:
      "Payment should only be made after your paper is accepted and you receive an official acceptance email from us. Do not make payment without acceptance confirmation.",
    bg: "bg-amber-50 border-amber-200"
  },
  {
    icon: <IdCard className="w-6 h-6 text-purple-600" />,
    title: "Membership Verification",
    description:
      "IEEE members must provide valid membership details during registration. Students must upload valid student ID for student rates.",
    bg: "bg-purple-100 border-purple-200"
  },
  {
    icon: <RotateCcw className="w-6 h-6 text-gray-600" />,
    title: "Refund Policy",
    description:
      "Registration fees are non-refundable and non-transferable. Please ensure all details are correct before completing payment.",
    bg: "bg-gray-100 border-gray-200"
  },
  {
    icon: <BadgePercent className="w-6 h-6 text-green-600" />,
    title: "Discount Policy",
    description: [
      "Early Bird Discount (As Mentioned in the Early Bird Registration Table)",
      <><span className="font-bold">Second Paper Registration:</span> In Case of more than one registration by a single author, 10% discount on registration amount of one paper will be provided.</>,
      "Author can avail only one type of discount.",
    ],
    bg: "bg-green-100 border-green-200"
  }
];

export default function RegistrationGuidelines() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
        Registration Guidelines
      </h1>

      <div className="space-y-4">
        {guidelines.map((item, index) => (
          <div
            key={index}
            className={`flex items-start gap-4 p-4 rounded-lg border ${item.bg}`}
          >
            <div className="shrink-0">{item.icon}</div>
            <div>
              <h2 className="font-semibold text-lg mb-1">{item.title}</h2>
              {Array.isArray(item.description) ? (
                <ul className="text-gray-700 text-sm leading-relaxed list-disc list-inside space-y-1">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
