export type CompanyInfo = {
  name: string;
  tagline: string;
  industry: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  logo: string;
  coverImage: string;
  description: string;
  culture: string;
  benefits: string[];
};

export type CompanyJob = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "ฝึกงานฤดูร้อน" | "สหกิจศึกษา" | "งานประจำ (Full-time)";
  postedDate: string;
  applicantCount: number;
  status: "เปิดรับสมัคร" | "ปิดรับสมัคร";
  tags: string[];
  description: string;
  requirements: string[];
};

export type CompanyApplication = {
  id: string;
  jobId: string;
  jobTitle: string;
  candidateCode: string;
  realName: string;
  avatar: string;
  major: string;
  gpa: number;
  appliedDate: string;
  status: "รอการพิจารณา" | "นัดสัมภาษณ์" | "ผ่านการคัดเลือก" | "ปฏิเสธ";
  resumeUrl: string;
};

export const initialCompanyInfo: CompanyInfo = {
  name: "Tech Innovation Co., Ltd.",
  tagline: "ผู้นำด้านการพัฒนาซอฟต์แวร์แพลตฟอร์มและโซลูชัน Cloud สำหรับองค์กรยุคใหม่",
  industry: "Software & IT Solutions",
  location: "อาคารวิทยกิตติ์ ชั้น 12, กรุงเทพมหานคร (หรือ Hybrid Work)",
  email: "careers@techinnovation.co.th",
  phone: "02-123-4567",
  website: "https://techinnovation.co.th",
  logo: "T",
  coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  description: "เราเป็นบริษัทเทคโนโลยีที่มุ่งเน้นการพัฒนาระบบซอฟต์แวร์ระดับองค์กร (Enterprise Application) และ Cloud Native Solutions ที่รองรับการใช้งานของผู้บริโภคหลายล้านคนต่อวัน บรรยากาศการทำงานเป็นกันเอง เปิดโอกาสให้นิสิตได้ลงมือทำโปรเจกต์จริงร่วมกับวิศวกรผู้เชี่ยวชาญ",
  culture: "เน้นการทำงานแบบ Agile ให้ความสำคัญกับการเติบโตและพัฒนาตนเอง (Continuous Learning) เปิดรับความคิดเห็นของทุกคนในทีม",
  benefits: [
    "เบี้ยเลี้ยงฝึกงาน/สหกิจศึกษา 12,000 - 18,000 บาท/เดือน",
    "เวลาทำงานยืดหยุ่น (Flexible Working Hours) & Work from Home 2 วัน/สัปดาห์",
    "จัดหาแล็ปท็อป (MacBook Pro / High-spec Laptop) ให้ใช้ตลอดระยะเวลาฝึกงาน",
    "สนับสนุนค่าสอบใบรับรองวิชาชีพ (AWS / Google Cloud / Scrum Master)",
    "ฟรีเครื่องดื่ม กาแฟสด และขนมขบเคี้ยวในออฟฟิศ"
  ]
};

export const initialCompanyJobs: CompanyJob[] = [
  {
    id: "job-1",
    title: "Software Engineering Intern (Full-Stack)",
    department: "Software Engineering",
    location: "Bangkok / Hybrid",
    type: "ฝึกงานฤดูร้อน",
    postedDate: "15 ก.ค. 2026",
    applicantCount: 8,
    status: "เปิดรับสมัคร",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    description: "ร่วมทีมพัฒนา Web Application และ APIs สำหรับระบบการจัดการคลังสินค้าและ E-commerce Platform",
    requirements: [
      "นิสิตชั้นปีที่ 3 หรือ 4 สาขาวิชาวิศวกรรมคอมพิวเตอร์, ซอฟต์แวร์ หรือที่เกี่ยวข้อง",
      "เข้าใจพื้นฐาน JavaScript / TypeScript และ RESTful API",
      "คุ้นเคยกับ React หรือ Framework อื่นๆ"
    ]
  },
  {
    id: "job-2",
    title: "Data Analyst / Data Engineer Co-op",
    department: "Data & Analytics",
    location: "Bangkok / Hybrid",
    type: "สหกิจศึกษา",
    postedDate: "10 ก.ค. 2026",
    applicantCount: 5,
    status: "เปิดรับสมัคร",
    tags: ["Python", "SQL", "Tableau", "ETL"],
    description: "วิเคราะห์ข้อมูล พัฒนา Data Pipeline และ Dashboard แสดงผลดัชนีชี้วัดหลักทางธุรกิจ (KPIs)",
    requirements: [
      "นิสิตสหกิจศึกษาปีที่ 3-4",
      "เขียนคำสั่ง SQL และ Python สำหรับจัดการข้อมูลได้ดี",
      "มีทักษะการนำเสนอข้อมูลด้วย BI Tools (Tableau / Power BI)"
    ]
  },
  {
    id: "job-3",
    title: "Cloud & DevOps Engineer Trainee",
    department: "Cloud Infrastructure",
    location: "Remote",
    type: "ฝึกงานฤดูร้อน",
    postedDate: "01 ก.ค. 2026",
    applicantCount: 3,
    status: "เปิดรับสมัคร",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    description: "ออกแบบและสร้างระบบอัตโนมัติ (Automated Pipeline) บน AWS และจัดการ Container Infrastructure",
    requirements: [
      "เข้าใจระบบปฏิบัติการ Linux และการจัดการ Networking พื้นฐาน",
      "สนใจเทคโนโลยี Container (Docker, Kubernetes)",
      "มีทักษะการเขียนสคริปต์ (Bash / Python / Go)"
    ]
  }
];

export const initialCompanyApplications: CompanyApplication[] = [
  {
    id: "app-101",
    jobId: "job-1",
    jobTitle: "Software Engineering Intern (Full-Stack)",
    candidateCode: "แคนดิเดต #KU-8492",
    realName: "นนทนันท์ วงศ์เกษม",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    major: "วิศวกรรมคอมพิวเตอร์ (CPE)",
    gpa: 3.82,
    appliedDate: "20 ก.ค. 2026",
    status: "นัดสัมภาษณ์",
    resumeUrl: "#"
  },
  {
    id: "app-102",
    jobId: "job-2",
    jobTitle: "Data Analyst / Data Engineer Co-op",
    candidateCode: "แคนดิเดต #KU-7321",
    realName: "พิชญ์ชาภา ศิริรัตน์",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
    major: "วิศวกรรมคอมพิวเตอร์ (CPE)",
    gpa: 3.91,
    appliedDate: "18 ก.ค. 2026",
    status: "รอการพิจารณา",
    resumeUrl: "#"
  },
  {
    id: "app-103",
    jobId: "job-3",
    jobTitle: "Cloud & DevOps Engineer Trainee",
    candidateCode: "แคนดิเดต #KU-3910",
    realName: "ปัณณธร เจริญสุข",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300&auto=format&fit=crop",
    major: "วิศวกรรมซอฟต์แวร์ (SKE)",
    gpa: 3.89,
    appliedDate: "16 ก.ค. 2026",
    status: "ผ่านการคัดเลือก",
    resumeUrl: "#"
  }
];
