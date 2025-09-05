import { Resume } from '@/components/Resume';
import { resumeData } from '@/data/resume-data';

export default function HomePage() {
  return <Resume data={resumeData} />;
}

export const metadata = {
  title: 'Orbillee Kline Tomas - Professional Resume',
  description: 'Professional resume for Orbillee Kline Tomas - Radiologic Technologist and Administrative Support Professional',
};