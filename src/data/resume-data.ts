import { ResumeData } from '@/types/resume';

export const resumeData: ResumeData = {
  personalInfo: {
    name: 'Orbillee Kline Tomas',
    email: 'orbilleetomasrrt@gmail.com',
    phone: '09606227689',
    location: 'Tarlac City, Philippines'
  },
  profileSummary: 'Dedicated and detail-oriented Radiologic Technologist with extensive experience in healthcare administration and patient care. Proven track record in managing administrative tasks, scheduling, documentation, and maintaining accurate records while delivering exceptional customer service. Skilled in multitasking, interdepartmental communication, and ensuring operational efficiency in fast-paced medical environments.',
  skills: [
    { name: 'Communication', category: 'communication' },
    { name: 'Time Management', category: 'administrative' },
    { name: 'Customer Service', category: 'communication' },
    { name: 'Canva', category: 'technical' },
    { name: 'Photoshop', category: 'technical' },
    { name: 'CapCut', category: 'technical' },
    { name: 'Content Creation', category: 'technical' },
    { name: 'Scheduling', category: 'administrative' },
    { name: 'Documentation', category: 'administrative' },
    { name: 'Record Keeping', category: 'administrative' },
    { name: 'Multitasking', category: 'administrative' },
    { name: 'Healthcare Administration', category: 'administrative' }
  ],
  workExperience: [
    {
      id: '1',
      company: 'The Medical City Clark',
      position: 'Radiologic Technologist / Admin Support',
      location: 'Clark Global City, Pampanga',
      startDate: 'Oct 2024',
      endDate: 'Aug 2025',
      description: 'Efficiently handled scheduling, documentation, inquiries, and administrative support while balancing customer service and maintaining accurate records daily.'
    },
    {
      id: '2',
      company: 'LabLife Specialty Clinics and Laboratory',
      position: 'Radiologic Technologist',
      location: 'Baguio City',
      startDate: 'Jul 2024',
      endDate: 'Sep 2024',
      description: 'Organized patient logs, updated records, and coordinated with healthcare staff, ensuring smooth communication, multitasking, and efficient administrative workflow.'
    },
    {
      id: '3',
      company: 'Central Luzon Doctors\' Hospital & Angeles Medical Center',
      position: 'Intern',
      location: 'Tarlac & Pampanga',
      startDate: '2022',
      endDate: '2023',
      description: 'Performed clerical tasks, updated records, and supported interdepartmental communication while maintaining confidentiality and ensuring smooth operational efficiency daily.'
    }
  ]
};