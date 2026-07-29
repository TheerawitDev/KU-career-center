export type StudentTalent = {
  id: string;
  codeName: string; // Anonymous ID e.g., "นิสิตวิศวกรรมคอมพิวเตอร์ #KU-8492"
  realName: string; // "นนทนันท์ วงศ์เกษม" (masked until paid)
  maskedAvatar: string; // Blurred placeholder avatar
  realAvatar: string; // High quality profile photo
  major: string; // e.g., "วิศวกรรมคอมพิวเตอร์ (CPE)"
  batch: string; // e.g., "E80"
  gpa: number;
  gradYear: string; // e.g., "2026"
  lookingFor: "ฝึกงานฤดูร้อน" | "สหกิจศึกษา" | "งานประจำ (Full-time)" | "Part-time";
  topSkills: string[];
  bio: string;
  assessmentScore: number; // e.g., 94% match
  projects: {
    name: string;
    description: string;
    tech: string[];
  }[];
  certifications: string[];
  email: string; // masked until paid
  phone: string; // masked until paid
  resumeUrl: string; // masked until paid
  unlocked?: boolean;
  unlockCost: number; // in credits or THB
};

export const studentsMockData: StudentTalent[] = [
  {
    id: "ku-8492",
    codeName: "แคนดิเดต #KU-8492 (วิศวกรรมคอมพิวเตอร์)",
    realName: "นนทนันท์ วงศ์เกษม",
    maskedAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop&blur=20",
    realAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    major: "วิศวกรรมคอมพิวเตอร์ (CPE)",
    batch: "E80",
    gpa: 3.82,
    gradYear: "2026",
    lookingFor: "สหกิจศึกษา",
    topSkills: ["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL"],
    bio: "นิสิตชั้นปีที่ 3 สนใจการพัฒนา Full-Stack Web Application และ Microservices มีประสบการณ์สร้างโครงงานระดับคณะและ Hackathon",
    assessmentScore: 96,
    projects: [
      {
        name: "KU Event Hub Platform",
        description: "ระบบจองตั๋วและลงทะเบียนกิจกรรมชมรมภายในมหาวิทยาลัย รองรับผู้ใช้งานกว่า 3,000 คน/วัน",
        tech: ["Next.js", "Express", "MongoDB", "Redis"]
      },
      {
        name: "AI Smart Resume Matcher",
        description: "โปรเจกต์จับคู่เรซูเม่ของนิสิตกับตำแหน่งงานด้วย NLP และ Vector Database",
        tech: ["Python", "FastAPI", "Pinecone", "OpenAI API"]
      }
    ],
    certifications: ["AWS Certified Cloud Practitioner", "Google Data Analytics Certificate"],
    email: "nonthanan.w@ku.th",
    phone: "081-234-5678",
    resumeUrl: "#",
    unlocked: false,
    unlockCost: 1
  },
  {
    id: "ku-7321",
    codeName: "แคนดิเดต #KU-7321 (วิศวกรรมคอมพิวเตอร์)",
    realName: "พิชญ์ชาภา ศิริรัตน์",
    maskedAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop&blur=20",
    realAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
    major: "วิศวกรรมคอมพิวเตอร์ (CPE)",
    batch: "E80",
    gpa: 3.91,
    gradYear: "2026",
    lookingFor: "ฝึกงานฤดูร้อน",
    topSkills: ["Python", "PyTorch", "Data Science", "SQL", "Tableau", "Machine Learning"],
    bio: "หลงใหลการวิเคราะห์ข้อมูลและ AI Model Optimization มีผลงานวิจัยย่อยด้าน Computer Vision ที่ได้รับการตอบรับในงานประชุมวิชาการ",
    assessmentScore: 94,
    projects: [
      {
        name: "Predictive Maintenance for Factory Equipment",
        description: "โมเดลคาดการณ์ความเสียหายของเครื่องจักรโรงงานด้วยข้อมูล IoT Sensors Accuracy 94.2%",
        tech: ["Python", "Scikit-Learn", "Grafana", "TimescaleDB"]
      }
    ],
    certifications: ["Deep Learning Specialization (Coursera)", "TensorFlow Developer Certificate"],
    email: "pitchapa.s@ku.th",
    phone: "089-876-5432",
    resumeUrl: "#",
    unlocked: false,
    unlockCost: 1
  },
  {
    id: "ku-6109",
    codeName: "แคนดิเดต #KU-6109 (วิศวกรรมไฟฟ้า)",
    realName: "กิตติพงษ์ เดชอนันต์",
    maskedAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop&blur=20",
    realAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    major: "วิศวกรรมไฟฟ้า (EE)",
    batch: "E79",
    gpa: 3.65,
    gradYear: "2025",
    lookingFor: "งานประจำ (Full-time)",
    topSkills: ["Power Systems", "PLC Programming", "MATLAB/Simulink", "AutoCAD", "IoT Hardware"],
    bio: "วิศวกรรมไฟฟ้าชั้นปีสุดท้าย เชี่ยวชาญระบบควบคุมอัตโนมัติและพลังงานหมุนเวียน พร้อมเริ่มงานทันทีหลังสำเร็จการศึกษา",
    assessmentScore: 89,
    projects: [
      {
        name: "Smart Solar Inverter Monitor",
        description: "ระบบติดตามและควบคุมการจ่ายไฟของอินเวอร์เตอร์โซลาร์เซลล์ผ่านโปรโตคอล Modbus RTU",
        tech: ["ESP32", "C++", "MATLAB", "MQTT"]
      }
    ],
    certifications: ["ใบอนุญาตประกอบวิชาชีพวิศวกรรมควบคุม (กว. กรอง)", "Schneider Electric Certified Trainee"],
    email: "kittipong.d@ku.th",
    phone: "086-555-1234",
    resumeUrl: "#",
    unlocked: false,
    unlockCost: 1
  },
  {
    id: "ku-9044",
    codeName: "แคนดิเดต #KU-9044 (วิศวกรรมโยธา)",
    realName: "ธนกฤต วิเศษกุล",
    maskedAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop&blur=20",
    realAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    major: "วิศวกรรมโยธา (CE)",
    batch: "E81",
    gpa: 3.48,
    gradYear: "2027",
    lookingFor: "ฝึกงานฤดูร้อน",
    topSkills: ["AutoCAD", "Revit BIM", "Structural Analysis", "BIM 360", "Microsoft Project"],
    bio: "สนใจงานบริหารโครงการก่อสร้าง และการออกแบบโครงสร้างอาคารด้วยเทคโนโลยี Building Information Modeling (BIM)",
    assessmentScore: 88,
    projects: [
      {
        name: "Campus Green Building Structure Design",
        description: "ถอดแบบและคำนวณโครงสร้างคอนกรีตอัดแรงอาคารประหยัดพลังงานในมหาลัย",
        tech: ["Revit", "ETABS", "Excel VBA"]
      }
    ],
    certifications: ["Autodesk Certified Professional: Revit Structure"],
    email: "thanakrit.v@ku.th",
    phone: "082-999-8877",
    resumeUrl: "#",
    unlocked: false,
    unlockCost: 1
  },
  {
    id: "ku-5288",
    codeName: "แคนดิเดต #KU-5288 (วิศวกรรมอุตสาหการ)",
    realName: "ณิชารีย์ โชติช่วง",
    maskedAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop&blur=20",
    realAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    major: "วิศวกรรมอุตสาหการ (IE)",
    batch: "E80",
    gpa: 3.76,
    gradYear: "2026",
    lookingFor: "สหกิจศึกษา",
    topSkills: ["Lean Manufacturing", "Supply Chain", "Six Sigma", "Minitab", "Power BI", "Python"],
    bio: "เชี่ยวชาญการปรับปรุงกระบวนการผลิต (Process Optimization) และวางแผนห่วงโซ่อุปทาน ได้รับรางวัลชนะเลิศ Lean Innovation Contest",
    assessmentScore: 92,
    projects: [
      {
        name: "Warehouse Layout Redesign & Line Balancing",
        description: "ลดระยะทางการเคลื่อนย้ายสินค้าในคลังลง 28% และเพิ่ม efficiency ของสายการผลิต",
        tech: ["Arena Simulation", "Power BI", "Lean Tools"]
      }
    ],
    certifications: ["Six Sigma Green Belt", "Certified Supply Chain Associate (CSCA)"],
    email: "nicharee.c@ku.th",
    phone: "084-111-2233",
    resumeUrl: "#",
    unlocked: false,
    unlockCost: 1
  },
  {
    id: "ku-3910",
    codeName: "แคนดิเดต #KU-3910 (วิศวกรรมซอฟต์แวร์และความรู้)",
    realName: "ปัณณธร เจริญสุข",
    maskedAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300&auto=format&fit=crop&blur=20",
    realAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300&auto=format&fit=crop",
    major: "วิศวกรรมซอฟต์แวร์และความรู้ (SKE)",
    batch: "E80",
    gpa: 3.89,
    gradYear: "2026",
    lookingFor: "ฝึกงานฤดูร้อน",
    topSkills: ["DevOps", "Docker", "Kubernetes", "AWS", "Go (Golang)", "CI/CD Pipeline"],
    bio: "สาย Cloud Infrastructure & Cloud Native Software Engineer ชอบการทำ Automation และเพิ่มความเสถียรของระบบ",
    assessmentScore: 95,
    projects: [
      {
        name: "Kubernetes Microservice Deployment Engine",
        description: "สร้าง CI/CD Pipeline อัตโนมัติด้วย GitHub Actions & ArgoCD ปรับสเกลแอปพลิเคชันอย่างราบรื่น",
        tech: ["Golang", "Docker", "K8s", "Terraform"]
      }
    ],
    certifications: ["Certified Kubernetes Administrator (CKA)", "AWS Solutions Architect Associate"],
    email: "pannathorn.c@ku.th",
    phone: "083-444-5566",
    resumeUrl: "#",
    unlocked: false,
    unlockCost: 1
  }
];
