import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProfileSummaryProps {
  summary: string;
}

export function ProfileSummary({ summary }: ProfileSummaryProps) {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center gap-3">
          <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
          Profile Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 leading-relaxed text-justify">
          {summary}
        </p>
      </CardContent>
    </Card>
  );
}