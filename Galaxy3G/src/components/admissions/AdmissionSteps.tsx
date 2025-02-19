import React from 'react';
import { ClipboardCheck, FileText, Users, CheckCircle } from 'lucide-react';

const AdmissionSteps = () => {
  const steps = [
    {
      title: 'Submit Application',
      description: 'Fill out the online application form with required details.',
      icon: ClipboardCheck,
    },
    {
      title: 'Document Verification',
      description: 'Submit necessary documents for verification process.',
      icon: FileText,
    },
    {
      title: 'Entrance Test',
      description: 'Appear for entrance test and interview.',
      icon: Users,
    },
    {
      title: 'Final Admission',
      description: 'Complete admission process by paying fees.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#470A68] mb-12">Admission Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <step.icon className="w-12 h-12 text-[#6F42C1] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#470A68] mb-2">Step {index + 1}</h3>
                <h4 className="text-lg font-semibold text-[#28A745] mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#FFC107]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionSteps;