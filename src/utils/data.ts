import {
  Award,
  Brain,
  Briefcase,
  Code,
  GraduationCap,
  Zap,
} from "lucide-react";

export type WorkExperience = {
  title: string;
  company: string;
  period: string;
  type: string;
  points: string[];
};

export type Project = {
  name: string;
  description: string;
  features: string[];
};

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  tagline: string;
  image: string;
  bio: string;
  skills: string[];
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export const workExperience: WorkExperience[] = [
  {
    title: "MERN Stack Developer Intern",
    company: "ThinkNEXT Technologies, Chandigarh",
    period: "July 2024 - Sept 2024 (2 months)",
    type: "Internship",
    points: [
      "Designed and implemented RESTful APIs to support dynamic application functionality",
      "Contributed to the development of scalable web applications using the MERN stack",
      "Built responsive front-end interfaces with React.js and Tailwind CSS",
    ],
  },
  {
    title: "Full Stack Development Intern",
    company: "Bunch Infotech, India",
    period: "June 2025 - July 2025 (2 months)",
    type: "Part-time",
    points: [
      "Built and integrated backend APIs for core services",
      "Reviewed and optimized frontend code to ensure smooth user experience",
      "Connected backend with frontend for seamless functionality",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "VisionAI – Personal Career Growth Assistant",
    description:
      "An AI-powered career assistant that helps users prepare for interviews, track industry trends, and create professional resumes",
    features: [
      "Mock Interviews",
      "Industry Insights",
      "Resume Builder",
      "Personalized Guidance",
      "Modern UI",
    ],
  },
  {
    name: "SQL Agent",
    description:
      "Developed an AI-driven SQL assistant using Next.js 15 and React 19, enabling users to query databases through natural language",
    features: [
      "Natural Language Processing",
      "Database Query",
      "User-Friendly Interface",
      "Real-time Feedback",
      "Seamless Integration",
    ],
  },
  {
    name: "Job Portal Application",
    description:
      "Built a MERN stack job portal with recruiter and candidate modules, job postings, applications, authentication, and protected routes",
    features: [
      "Authentication",
      "Protected Routes",
      "Job Postings",
      "Candidate Profiles",
      "Recruiter Profiles",
    ],
  },
  {
    name: "Business Name Generator",
    description:
      "AI-powered tool to generate unique business names with real-time .com domain availability check and customizable filters",
    features: [
      ".com Domain Availability Check",
      "Customizable Filters",
      "User-Friendly Interface",
      "Real-time Feedback",
      "Seamless Integration",
    ],
  },
];

export const skills: String[] = [
  "NodeJs",
  "NextJs",
  "React.js",
  "MongoDB",
  "SQL",
  "Javascript",
  "PostgreSQL",
  "Python",
  "Java",
  "C++",
  "AI/ML",
  "ExpressJs",
  "Redux",
  "GitHub",
  "Vercel",
  "DevOps",
];

export const features: Feature[] = [
  {
    icon: Brain,
    title: "AI-Powered Interviews",
    description:
      "Practice with intelligent AI that adapts to your role, experience level, and tech stack. Get real-time feedback and personalized insights.",
  },
  {
    icon: Zap,
    title: "Dynamic Questions",
    description:
      "Receive tailored interview questions based on your target role and technology preferences. Never face generic questions again.",
  },
  {
    icon: Award,
    title: "Performance Tracking",
    description:
      "Monitor your progress over time with detailed analytics. Identify your strengths and areas for improvement with data-driven feedback.",
  },
  {
    icon: Code,
    title: "Tech Stack Focused",
    description:
      "Prepare for interviews specific to your tech stack - from MERN to Next.js, from frontend to full-stack positions.",
  },
  {
    icon: GraduationCap,
    title: "Role-Based Prep",
    description:
      "Questions customized for Backend, Frontend, or Full-Stack roles with varying difficulty levels from Entry to Senior.",
  },
  {
    icon: Briefcase,
    title: "Real-World Experience",
    description:
      "Built by someone who has been through the interview process and understands what it takes to succeed.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Vishesh Verma",
    role: "Full-Stack Developer & AI Engineer",
    tagline: "Crafting intelligent solutions with code",
    image:
      "https://i.pinimg.com/1200x/7a/d8/4f/7ad84f29b8ee9388a365933f35d52bcf.jpg",
    bio: "AI-Driven Full-Stack Developer specializing in building intelligent, scalable web applications. Passionate about leveraging AI to solve real-world problems.",
    skills: ["Next.js", "React", "Node.js", "AI/ML", "PostgreSQL"],
    socials: {
      github: "https://github.com/Vishesh-21",
      linkedin: "https://www.linkedin.com/in/vishesh-verma-35b31b279/",
      website: "https://viishu-portfolio.vercel.app/",
    },
  },
  {
    name: "Karandeep Singh",
    role: "Full-Stack Developer & Designer",
    tagline: "Designing experiences that matter",
    image:
      "https://i.pinimg.com/736x/47/8b/b3/478bb3b8a89013ada49c03467d26cee2.jpg",
    bio: "Full-Stack Developer and Designer with a passion for creating visually stunning and user-friendly interfaces. Specializing in designing intuitive and engaging user experiences.",
    skills: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    },
  },
];

interface CategoryScore {
  category: string;
  score: number;
}

export interface FeedbackData {
  totalScore: number;
  categoryScores: CategoryScore[];
  strengths: string[];
  areasForImprovement: string[];
  finalAssignment: string;
}

export const dummyFeedback: FeedbackData = {
  totalScore: 78,
  categoryScores: [
    { category: "Communication Skills", score: 82 },
    { category: "Technical Skills", score: 75 },
    { category: "Problem Solving", score: 80 },
    { category: "Cultural Fit", score: 76 },
    { category: "Confidence and Clarity", score: 77 },
  ],
  strengths: [
    "Excellent articulation and structured responses throughout the interview",
    "Strong problem-solving approach with clear step-by-step explanations",
    "Good understanding of core technical concepts and frameworks",
    "Confident delivery with engaging presence",
  ],
  areasForImprovement: [
    "Could provide more specific examples from past experience",
    "Technical depth in certain areas could be strengthened",
    "Response time could be improved for complex questions",
    "Consider elaborating more on cultural fit aspects",
  ],
  finalAssignment:
    "Overall, you demonstrated strong potential with solid communication and problem-solving skills. Focus on deepening your technical knowledge and providing more concrete examples from your experience. With practice in these areas, you'll be well-prepared for your target role. Keep up the good work!",
};
