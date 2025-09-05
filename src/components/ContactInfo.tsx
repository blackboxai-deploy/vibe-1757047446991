'use client';

import { PersonalInfo } from '@/types/resume';
import { Card, CardContent } from '@/components/ui/card';

interface ContactInfoProps {
  personalInfo: PersonalInfo;
}

export function ContactInfo({ personalInfo }: ContactInfoProps) {
  return (
    <Card className="bg-blue-50 border-blue-200">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Contact Information</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-blue-600 flex-shrink-0 mt-0.5"></div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-blue-700 hover:text-blue-800 transition-colors font-medium"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-blue-600 flex-shrink-0 mt-0.5"></div>
            <div>
              <p className="text-sm text-gray-600">Phone / WhatsApp</p>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="text-blue-700 hover:text-blue-800 transition-colors font-medium"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-blue-600 flex-shrink-0 mt-0.5"></div>
            <div>
              <p className="text-sm text-gray-600">Location</p>
              <p className="text-gray-800 font-medium">{personalInfo.location}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}