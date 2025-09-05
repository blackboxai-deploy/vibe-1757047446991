'use client';

import { ResumeData } from '@/types/resume';
import { ContactInfo } from './ContactInfo';
import { ProfileSummary } from './ProfileSummary';
import { Skills } from './Skills';
import { WorkExperience } from './WorkExperience';
import { Button } from '@/components/ui/button';

interface ResumeProps {
  data: ResumeData;
}

export function Resume({ data }: ResumeProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 px-4 print:bg-blue-900 print:text-white print:py-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-2">
              {data.personalInfo.name}
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 font-light">
              Radiologic Technologist & Administrative Support Professional
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4 lg:p-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <ContactInfo personalInfo={data.personalInfo} />
            
            {/* Print Button - Hidden on print */}
            <div className="print:hidden">
              <Button 
                onClick={handlePrint}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                size="lg"
              >
                Print / Download PDF
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <ProfileSummary summary={data.profileSummary} />
            <Skills skills={data.skills} />
            <WorkExperience experiences={data.workExperience} />
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .print\\:bg-blue-900 {
            background-color: #1e3a8a !important;
          }
          
          .print\\:text-white {
            color: white !important;
          }
          
          .print\\:py-6 {
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
          }
          
          @page {
            size: A4;
            margin: 0.75in;
          }
          
          * {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
}