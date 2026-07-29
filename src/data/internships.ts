export type Internship = {
  id: number;
  title: string;
  company: string;
  category: string;
  location: string;
  workplaceType: "On-site" | "Hybrid" | "Remote";
  type: "ฝึกงานฤดูร้อน" | "สหกิจศึกษา" | "Part-time ระหว่างเรียน";
  stipend: string;
  rating: number;
  reviews: number;
  tags: string[];
  posted: string;
  logo: string;
  matchTags: string[];
  description: string;
  responsibilities: string[];
  qualifications: string[];
};

export const internships: Internship[] = [
  // ==================== SOFTWARE & COMPUTING ====================
  {
    id: 1,
    title: "Software Engineering Intern (Backend / Microservices)",
    company: "Agoda Services Co., Ltd.",
    category: "คอมพิวเตอร์ & ซอฟต์แวร์",
    location: "Bangkok (Central World)",
    workplaceType: "Hybrid",
    type: "ฝึกงานฤดูร้อน",
    stipend: "฿18,000 - ฿25,000 / เดือน",
    rating: 4.8,
    reviews: 34,
    tags: ["Java", "C#", "Scala", "Kubernetes", "Microservices"],
    posted: "ใหม่",
    logo: "AG",
    matchTags: ["software", "code", "backend", "web"],
    description: "ร่วมพัฒนาและดูแลรักษาระบบค้นหาห้องพักและตั๋วเครื่องบินที่มีผู้ใช้งานนับล้านคนทั่วโลก ร่วมกับวิศวกรระดับโลกในสถาปัตยกรรม High-Scale Microservices",
    responsibilities: [
      "เขียนและทดสอบโค้ดระบบ Backend ด้วยภาษา Java หรือ C#",
      "พัฒนาและปรับแต่งการประมวลผลคำสั่งซื้อและชำระเงิน",
      "ร่วมทำ Code Review และร่วมวางแผนระบบกับทีม Senior Engineers"
    ],
    qualifications: [
      "นิสิตชั้นปีที่ 3 หรือ 4 สาขาวิชาวิศวกรรมคอมพิวเตอร์ หรือสาขาที่เกี่ยวข้อง",
      "เข้าใจพื้นฐาน Data Structures, Algorithms และ Object-Oriented Programming",
      "มีความสามารถในการสื่อสารภาษาอังกฤษในระดับดี"
    ]
  },
  {
    id: 2,
    title: "Full-Stack Web Developer Intern",
    company: "LINE MAN Wongnai",
    category: "คอมพิวเตอร์ & ซอฟต์แวร์",
    location: "Bangkok (T-One Building)",
    workplaceType: "Hybrid",
    type: "สหกิจศึกษา",
    stipend: "฿15,000 - ฿20,000 / เดือน",
    rating: 4.7,
    reviews: 28,
    tags: ["React", "Next.js", "Go", "PostgreSQL", "Tailwind"],
    posted: "2 วันที่แล้ว",
    logo: "LMW",
    matchTags: ["software", "code", "frontend", "backend", "web"],
    description: "สร้างและพัฒนาเว็บแอปพลิเคชันสำหรับแพลตฟอร์มฟู้ดดิลิเวอรีและบริการไลฟ์สไตล์อันดับหนึ่งของไทย มุ่งเน้นการมอบประสบการณ์การใช้งานที่รวดเร็วและราบรื่น",
    responsibilities: [
      "พัฒนาฟีเจอร์ใหม่บนระบบการจัดการร้านค้าและระบบสั่งอาหาร",
      "ออกแบบและพัฒนา API ด้วยภาษา Go และ PostgreSQL",
      "ปรับปรุง UI/UX ด้วย React และ Next.js ให้ตรงตามมาตรฐานการออกแบบของบริษัท"
    ],
    qualifications: [
      "กำลังศึกษาระดับปริญญาตรี สาขาวิชาวิศวกรรมคอมพิวเตอร์ หรือวิทยาการคอมพิวเตอร์",
      "เคยทำโครงงานพัฒนาเว็บแอปพลิเคชันด้วย React หรือ Node.js",
      "มีทักษะการทำงานเป็นทีมและกล้าเรียนรู้เทคโนโลยีใหม่ๆ"
    ]
  },
  {
    id: 3,
    title: "DevOps & Cloud Infrastructure Trainee",
    company: "KASIKORN Business-Technology Group (KBTG)",
    category: "คลาวด์ & ความมั่นคงปลอดภัย",
    location: "Nonthaburi (KBTG Building)",
    workplaceType: "On-site",
    type: "สหกิจศึกษา",
    stipend: "฿16,000 - ฿22,000 / เดือน",
    rating: 4.9,
    reviews: 42,
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    posted: "ใหม่",
    logo: "KBTG",
    matchTags: ["cloud", "infrastructure", "network", "devops"],
    description: "ดูแลและบริหารจัดการโครงสร้างพื้นฐานคลาวด์ของแอปพลิเคชันการเงินอันดับหนึ่ง Make by KBank และ MAKE API รองรับทราฟฟิกธุรกรรมการเงินระดับล้านรายการต่อวัน",
    responsibilities: [
      "เขียนสคริปต์อัตโนมัติสำหรับไปป์ไลน์ CI/CD ด้วย Jenkins หรือ GitHub Actions",
      "มอนิเตอร์และดูแลเสถียรภาพคลัสเตอร์ Kubernetes บนคลาวด์",
      "ร่วมกำหนดมาตรฐานการตั้งค่ารักษาความปลอดภัยของระบบโครงสร้างพื้นฐาน"
    ],
    qualifications: [
      "นิสิตสาขาวิชาวิศวกรรมคอมพิวเตอร์ หรือวิศวกรรมโทรคมนาคม/เครือข่าย",
      "เข้าใจหลักการทำงานของระบบปฏิบัติการ Linux, คำสั่ง Bash และคำสั่งการเครือข่าย",
      "สนใจเรื่องระบบคลาวด์และ Containerization"
    ]
  },
  {
    id: 4,
    title: "Data Analyst & Business Intelligence Intern",
    company: "Shopee (Thailand) Co., Ltd.",
    category: "ข้อมูล & ปัญญาประดิษฐ์",
    location: "Bangkok (Singha Complex)",
    workplaceType: "Hybrid",
    type: "ฝึกงานฤดูร้อน",
    stipend: "฿15,000 - ฿18,000 / เดือน",
    rating: 4.6,
    reviews: 19,
    tags: ["SQL", "Python", "Tableau", "Data Pipelines", "A/B Testing"],
    posted: "3 วันที่แล้ว",
    logo: "SP",
    matchTags: ["data", "analysis", "database", "python"],
    description: "วิเคราะห์พฤติกรรมการซื้อสินค้าของผู้ใช้งานและประสิทธิภาพแคมเปญการตลาดของแพลตฟอร์มอีคอมเมิร์ซ เพื่อสรุปข้อมูลและทำข้อเสนอแนะเชิงกลยุทธ์แก่ผู้บริหาร",
    responsibilities: [
      "เขียนคำสั่ง SQL เพื่อดึงข้อมูลเชิงลึกจากคลังข้อมูลขนาดใหญ่ Big Data",
      "สร้างภาพข้อมูลสรุปผล Interactive Dashboards บน Tableau หรือ Power BI",
      "วิเคราะห์และวัดผลการทดสอบ A/B Testing ในแคมเปญการตลาด"
    ],
    qualifications: [
      "นิสิตสาขาวิชาวิศวกรรมคอมพิวเตอร์, วิศวกรรมอุตสาหการ หรือสถิติประยุกต์",
      "เชี่ยวชาญการใช้ภาษา SQL และการวิเคราะห์ข้อมูลด้วย Python (Pandas/NumPy)",
      "มีทักษะการคิดวิเคราะห์เชิงตรรกะและการนำเสนอข้อมูลเชิงภาพ"
    ]
  },
  {
    id: 5,
    title: "AI / Machine Learning Engineer Intern",
    company: "SCB 10X Co., Ltd.",
    category: "ข้อมูล & ปัญญาประดิษฐ์",
    location: "Bangkok (SCB Park)",
    workplaceType: "Hybrid",
    type: "ฝึกงานฤดูร้อน",
    stipend: "฿20,000 - ฿28,000 / เดือน",
    rating: 4.9,
    reviews: 25,
    tags: ["PyTorch", "LLM", "RAG", "Python", "Computer Vision"],
    posted: "ใหม่",
    logo: "SCB",
    matchTags: ["software", "data", "ai", "machine learning", "research"],
    description: "ร่วมทีมวิจัยและพัฒนาโมเดลภาษาขนาดใหญ่ (LLM) ภาษาไทย และระบบสกัดสารสนเทศเอกสารการเงินอัตโนมัติด้วยเทคโนโลยี Generative AI ล่าสุด",
    responsibilities: [
      "ปรับแต่งโมเดลประมวลผลภาษาธรรมชาติ NLP และสถาปัตยกรรม Transformer",
      "พัฒนาและทดสอบระบบค้นหาเวกเตอร์ Vector Search และ RAG Pipeline",
      "จัดทำแบบประเมินและคัดกรองข้อมูลสำหรับใช้ฝึกฝนโมเดล AI"
    ],
    qualifications: [
      "นิสิตระดับปริญญาตรี หรือโท สาขาวิชาวิศวกรรมคอมพิวเตอร์ หรือวิทยาการข้อมูล",
      "มีประสบการณ์เขียนโปรแกรมภาษา Python และใช้งาน PyTorch หรือ TensorFlow",
      "เข้าใจทฤษฎี Deep Learning และกระดาษงานวิจัยวิชาการ"
    ]
  },

  // ==================== ELECTRICAL & ELECTRONICS ====================
  {
    id: 6,
    title: "Electrical Power Systems Engineering Trainee",
    company: "Gulf Energy Development PCL",
    category: "วิศวกรรมไฟฟ้า & พลังงาน",
    location: "Rayong / Bangkok",
    workplaceType: "On-site",
    type: "สหกิจศึกษา",
    stipend: "฿16,000 - ฿22,000 / เดือน",
    rating: 4.6,
    reviews: 18,
    tags: ["Power Grid", "Substation", "ETAP", "High Voltage", "Renewable Energy"],
    posted: "4 วันที่แล้ว",
    logo: "GED",
    matchTags: ["electrical", "power", "hardware", "field"],
    description: "เรียนรู้และสนับสนุนวิศวกรไฟฟ้าในการออกแบบ และควบคุมการจ่ายไฟของสถานีไฟฟ้าแรงสูง ตลอดจนโครงการโซลาร์ฟาร์มและโรงไฟฟ้าก๊าซธรรมชาติ",
    responsibilities: [
      "ร่วมคำนวณและจำลองการไหลของกำลังไฟฟ้า Load Flow Study ด้วยโปรแกรม ETAP",
      "ตรวจสอบแบบแปลนวงจรไฟฟ้า Single Line Diagram ของสถานีไฟฟ้าย่อย",
      "ลงพื้นที่ตรวจเช็กความเรียบร้อยของอุปกรณ์สวิตช์เกียร์และหม้อแปลงไฟฟ้า"
    ],
    qualifications: [
      "นิสิตชั้นปีที่ 3 หรือ 4 สาขาวิชาวิศวกรรมไฟฟ้ากำลัง",
      "เข้าใจหลักการทำงานของระบบไฟฟ้ากำลัง สวิตช์เกียร์ และรีเลย์ป้องกัน",
      "สามารถเดินทางไปปฏิบัติงานฝึกงานในพื้นที่นิคมอุตสาหกรรม จ.ระยอง ได้"
    ]
  },
  {
    id: 7,
    title: "Embedded Systems & Firmware Engineer Intern",
    company: "Benchmark Electronics (Thailand)",
    category: "อิเล็กทรอนิกส์ & เซมิคอนดักเตอร์",
    location: "Chonburi (Amata City)",
    workplaceType: "On-site",
    type: "ฝึกงานฤดูร้อน",
    stipend: "฿14,000 - ฿18,000 / เดือน",
    rating: 4.5,
    reviews: 15,
    tags: ["C/C++", "ARM Cortex", "STM32", "PCB Layout", "FreeRTOS"],
    posted: "5 วันที่แล้ว",
    logo: "BM",
    matchTags: ["embedded", "electrical", "hardware", "robotics"],
    description: "ออกแบบและเขียนเฟิร์มแวร์ภาษา C/C++ สำหรับบอร์ดไมโครคอนโทรลเลอร์ประมวลผลอุปกรณ์การแพทย์และชิ้นส่วนอิเล็กทรอนิกส์ยานยนต์",
    responsibilities: [
      "เขียนสคริปต์ทดสอบเฟิร์มแวร์ไมโครคอนโทรลเลอร์ STM32 และ ESP32",
      "ทดสอบสัญญาณไฟฟ้าบอร์ด PCB ด้วยเครื่อง Oscilloscope และ Logic Analyzer",
      "จัดทำเอกสารข้อกำหนดทางเทคนิคร่วมกับทีมออกแบบวงจร"
    ],
    qualifications: [
      "นิสิตสาขาวิชาวิศวกรรมไฟฟ้า, อิเล็กทรอนิกส์ หรือวิศวกรรมคอมพิวเตอร์",
      "เชี่ยวชาญการเขียนโปรแกรมภาษา C/C++ สำหรับอุปกรณ์ embedded",
      "อ่านแบบวงจรอิเล็กทรอนิกส์ Schematic และใช้อุปกรณ์วัดไฟฟ้าได้"
    ]
  },

  // ==================== MECHANICAL, AUTOMOTIVE & ROBOTICS ====================
  {
    id: 8,
    title: "EV Powertrain & Battery R&D Intern",
    company: "Toyota Motor Thailand Co., Ltd.",
    category: "ยานยนต์ & EV",
    location: "Samut Prakan (สำโรง)",
    workplaceType: "On-site",
    type: "สหกิจศึกษา",
    stipend: "฿17,000 - ฿23,000 / เดือน",
    rating: 4.9,
    reviews: 50,
    tags: ["EV Battery", "BMS", "MATLAB/Simulink", "CAN Bus", "Thermal Mgt"],
    posted: "ใหม่",
    logo: "TMT",
    matchTags: ["automotive", "electrical", "hardware", "mechanical"],
    description: "ศึกษาและร่วมทำวิจัยพัฒนาระบบควบคุมแบตเตอรี่รถยนต์ไฟฟ้า (BMS) และการจัดการความร้อนในแพ็กแบตเตอรี่ตระกูลรถยนต์ลูกครึ่งและไฟฟ้าล้วน",
    responsibilities: [
      "จำลองแบบพฤติกรรมการถ่ายเทความร้อนในแพ็กแบตเตอรี่ด้วย MATLAB/Simulink",
      "ทดสอบสัญญาณสื่อสาร CAN Bus ระหว่างกล่อง ECU และชุดแบตเตอรี่",
      "ร่วมวิเคราะห์ผลการทดสอบการใช้งานแบตเตอรี่ในสภาวะอุณหภูมิสูง"
    ],
    qualifications: [
      "นิสิตสาขาวิชาวิศวกรรมเครื่องกล, วิศวกรรมยานยนต์ หรือวิศวกรรมไฟฟ้า",
      "มีความรู้พื้นฐานเกี่ยวกับระบบยานยนต์ไฟฟ้า และอิเล็กทรอนิกส์กำลัง",
      "สามารถใช้งานโปรแกรม MATLAB/Simulink หรือ SolidWorks ได้"
    ]
  },
  {
    id: 9,
    title: "Robotics & Automation Systems Engineer Intern",
    company: "KUKA Robotics (Thailand)",
    category: "หุ่นยนต์ & เมคคาทรอนิกส์",
    location: "Bangkok (Laksi)",
    workplaceType: "On-site",
    type: "ฝึกงานฤดูร้อน",
    stipend: "฿15,000 - ฿20,000 / เดือน",
    rating: 4.7,
    reviews: 22,
    tags: ["ROS2", "PLC", "Python", "SolidWorks", "Inverse Kinematics"],
    posted: "3 วันที่แล้ว",
    logo: "KUKA",
    matchTags: ["robotics", "automation", "hardware", "control"],
    description: "เขียนโปรแกรมควบคุมแขนกลหุ่นยนต์อุตสาหกรรมในสายการประกอบเครื่องจักร และพัฒนาระบบการเคลื่อนที่ของหุ่นยนต์หยิบจับชิ้นงานอัตโนมัติ",
    responsibilities: [
      "เขียนและทดสอบคำสั่งการเคลื่อนที่แขนกลหุ่นยนต์ industrial robots",
      "ปรับแต่งค่าพารามิเตอร์ระบบป้อนกลับเซอร์โวมอเตอร์เพื่อความแม่นยำสูง",
      "ร่วมเชื่อมต่อระบบควบคุม PLC เข้ากับระบบการมองเห็นกล้อง 3D Vision"
    ],
    qualifications: [
      "นิสิตสาขาวิชาวิศวกรรมหุ่นยนต์และสารสนเทศ, วิศวกรรมเมคคาทรอนิกส์ หรือวิศวกรรมเครื่องกล",
      "มีความเข้าใจในคณิตศาสตร์ Kinematics & Dynamics ของหุ่นยนต์",
      "เคยมีประสบการณ์ใช้งานซอฟต์แวร์จำลองหุ่นยนต์ หรือเขียนโค้ดภาษา C++/Python"
    ]
  },

  // ==================== CIVIL & INFRASTRUCTURE ====================
  {
    id: 10,
    title: "Structural Design & BIM Engineer Trainee",
    company: "Ch. Karnchang PCL (ช.การช่าง)",
    category: "โยธา & โครงสร้าง",
    location: "Bangkok / Nonthaburi",
    workplaceType: "On-site",
    type: "สหกิจศึกษา",
    stipend: "฿15,000 - ฿20,000 / เดือน",
    rating: 4.5,
    reviews: 31,
    tags: ["AutoCAD", "Revit BIM", "ETABS", "Structural Analysis", "Concrete"],
    posted: "1 สัปดาห์ที่แล้ว",
    logo: "CK",
    matchTags: ["civil", "construction", "field", "structure"],
    description: "ร่วมทีมวิศวกรโยธาในการเขียนและถอดแบบอาคารโครงสร้างคอนกรีตอัดแรง และโครงสร้างเหล็กของอุโมงค์และรถไฟฟ้าสายสีต่างๆ ด้วยระบบ BIM 3D",
    responsibilities: [
      "จัดทำแบบจำลองโครงสร้างอาคารและงานคอนกรีตด้วยโปรแกรม Autodesk Revit",
      "คำนวณและตรวจสอบรายการคำนวณความเค้นรับแรงด้วยโปรแกรม ETABS",
      "ลงพื้นที่ควบคุมงานเทคอนกรีตและตรวจผูกเหล็กโครงสร้างร่วมกับวิศวกรคุมงาน"
    ],
    qualifications: [
      "นิสิตชั้นปีที่ 3 หรือ 4 สาขาวิชาวิศวกรรมโยธา",
      "สามารถใช้งานโปรแกรม AutoCAD หรือ Autodesk Revit ได้ดี",
      "มีความตั้งใจ ลุยงาน และรับฟังคำแนะนำจากวิศวกรผู้ควบคุมงาน"
    ]
  },

  // ==================== INDUSTRIAL & LOGISTICS ====================
  {
    id: 11,
    title: "Industrial & Lean Manufacturing Engineer Intern",
    company: "CP ALL PCL (ศูนย์กระจายสินค้า)",
    category: "อุตสาหการ & โลจิสติกส์",
    location: "Nonthaburi (บางบัวทอง)",
    workplaceType: "On-site",
    type: "ฝึกงานฤดูร้อน",
    stipend: "฿14,000 - ฿18,000 / เดือน",
    rating: 4.4,
    reviews: 20,
    tags: ["Lean Six Sigma", "Line Balancing", "FlexSim", "WMS", "Process Improvement"],
    posted: "ใหม่",
    logo: "CP",
    matchTags: ["industrial", "supply_chain", "quality", "logistics"],
    description: "วิเคราะห์และปรับปรุงกระบวนการจัดเก็บและคัดแยกสินค้าในคลังสินค้าอัตโนมัติ เพิ่มประสิทธิภาพรอบเวลา Takt Time และลดความสูญเสียในสายการคัดแยก",
    responsibilities: [
      "ทำการจับเวลาการทำงานและวิเคราะห์จัดสมดุลสายงานจัดส่ง (Line Balancing)",
      "ทำซิมมูเลชันจำลองความหนาแน่นคลังสินค้าด้วยซอฟต์แวร์ FlexSim",
      "เสนอแนะข้อปรับปรุง Kaizen เพื่อลดการคอขวดและเพิ่มความปลอดภัย"
    ],
    qualifications: [
      "นิสิตสาขาวิชาวิศวกรรมอุตสาหการ หรือวิศวกรรมโลจิสติกส์",
      "เข้าใจทฤษฎีการวิจัยดำเนินงาน Operations Research และหลักการ Lean",
      "มีทักษะในการประสานงานและการเก็บข้อมูลสถิติหน้างาน"
    ]
  },

  // ==================== CHEMICAL & MATERIALS ====================
  {
    id: 12,
    title: "Process Chemical Engineering Trainee",
    company: "PTT Global Chemical PCL (GC)",
    category: "เคมี & วัสดุ",
    location: "Rayong (มาบตาพุด)",
    workplaceType: "On-site",
    type: "สหกิจศึกษา",
    stipend: "฿18,000 - ฿24,000 / เดือน",
    rating: 4.8,
    reviews: 38,
    tags: ["Aspen HYSYS", "P&ID", "Mass Balance", "Thermodynamics", "HAZOP"],
    posted: "2 วันที่แล้ว",
    logo: "GC",
    matchTags: ["chemical", "materials", "petroleum", "environmental"],
    description: "ศึกษาและทำความเข้าใจกระบวนการกลั่นน้ำมันและปิโตรเคมีในหอกลั่นจริง ร่วมประเมินประสิทธิภาพความร้อนของเครื่องแลกเปลี่ยนความร้อนและสมดุลมวลสาร",
    responsibilities: [
      "จำลองแบบสมดุลพลังงานและมวลสารหอกลั่นด้วยโปรแกรม Aspen HYSYS",
      "ตรวจสอบแบบแปลนท่อและอุปกรณ์ P&ID หน้างานในโรงงานปิโตรเคมี",
      "ร่วมทำประเมินความเสี่ยงด้านความปลอดภัยทางเคมี HAZOP Study"
    ],
    qualifications: [
      "นิสิตสาขาวิชาวิศวกรรมเคมี ชั้นปีที่ 3 หรือ 4",
      "มีความรู้แน่นในวิชา Thermodynamics, Fluid Mechanics และ Heat Transfer",
      "สามารถผ่านเกณฑ์การตรวจสุขภาพเพื่อปฏิบัติงานในพื้นที่อุตสาหกรรมได้"
    ]
  }
];
