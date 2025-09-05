import { WorkExperience as WorkExp } from '@/types/resume';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface WorkExperienceProps {
  experiences: WorkExp[];
}

export function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
          Professional Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div key={experience.id}>
              <div className="space-y-3">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {experience.position}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-700">
                      {experience.company}
                    </h4>
                  </div>
                  <div className="text-right lg:text-right">
                    <p className="text-sm font-medium text-gray-600">
                      {experience.startDate} – {experience.endDate}
                    </p>
                    <p className="text-sm text-gray-500">
                      {experience.location}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-justify">
                  {experience.description}
                </p>
              </div>
              
              {index < experiences.length - 1 && (
                <Separator className="mt-6" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}