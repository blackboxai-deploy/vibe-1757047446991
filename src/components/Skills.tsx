import { Skill } from '@/types/resume';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  const groupedSkills = {
    technical: skills.filter(skill => skill.category === 'technical'),
    administrative: skills.filter(skill => skill.category === 'administrative'),
    communication: skills.filter(skill => skill.category === 'communication')
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'technical':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'administrative':
        return 'bg-gray-100 text-gray-800 border-gray-300';
      case 'communication':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'technical':
        return 'Technical Skills';
      case 'administrative':
        return 'Administrative Skills';
      case 'communication':
        return 'Communication Skills';
      default:
        return category;
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
          Skills & Competencies
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">
                {getCategoryTitle(category)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className={`${getCategoryColor(category)} px-3 py-1.5 text-sm font-medium`}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}