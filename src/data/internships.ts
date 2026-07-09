export type Internship = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  rating: number;
  reviews: number;
  tags: string[];
  posted: string;
  logo: string;
  matchTags: string[]; // Used for assessment matching
};

export const internships: Internship[] = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Tech Innovation Co., Ltd.",
    location: "Bangkok / Hybrid",
    type: "ฝึกงานฤดูร้อน",
    rating: 4.8,
    reviews: 12,
    tags: ["React", "Node.js", "TypeScript"],
    posted: "2 วันที่แล้ว",
    logo: "T",
    matchTags: ["software", "code", "frontend", "backend", "web"]
  },
  {
    id: 2,
    title: "Data Analyst Intern",
    company: "FinTech Thailand",
    location: "Sathon, Bangkok",
    type: "สหกิจศึกษา",
    rating: 4.5,
    reviews: 8,
    tags: ["Python", "SQL", "Tableau"],
    posted: "1 สัปดาห์ที่แล้ว",
    logo: "F",
    matchTags: ["data", "analysis", "database", "python"]
  },
  {
    id: 3,
    title: "Electrical Engineering Trainee",
    company: "Siam Energy",
    location: "Rayong",
    type: "ฝึกงานฤดูร้อน",
    rating: 4.2,
    reviews: 24,
    tags: ["Power Systems", "AutoCAD"],
    posted: "3 วันที่แล้ว",
    logo: "S",
    matchTags: ["electrical", "power", "hardware", "field"]
  },
  {
    id: 4,
    title: "Cloud Infrastructure Intern",
    company: "CloudTech",
    location: "Remote",
    type: "ฝึกงานฤดูร้อน",
    rating: 4.9,
    reviews: 15,
    tags: ["AWS", "Linux", "Networking"],
    posted: "ใหม่",
    logo: "C",
    matchTags: ["cloud", "infrastructure", "network", "devops"]
  },
  {
    id: 5,
    title: "Civil Engineer Co-op",
    company: "BuildRight Construction",
    location: "Chiang Mai",
    type: "สหกิจศึกษา",
    rating: 4.3,
    reviews: 5,
    tags: ["AutoCAD", "Structural Analysis"],
    posted: "5 วันที่แล้ว",
    logo: "B",
    matchTags: ["civil", "construction", "field", "structure"]
  },
  {
    id: 6,
    title: "AI/ML Researcher",
    company: "NextGen Labs",
    location: "Bangkok",
    type: "Part-time ระหว่างเรียน",
    rating: 4.7,
    reviews: 30,
    tags: ["Python", "TensorFlow", "Research"],
    posted: "ใหม่",
    logo: "N",
    matchTags: ["software", "data", "ai", "machine learning", "research"]
  }
];
