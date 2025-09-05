export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'technical' | 'administrative' | 'communication';
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  profileSummary: string;
  skills: Skill[];
  workExperience: WorkExperience[];
}