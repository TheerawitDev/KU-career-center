export type QuestionOption = {
  id: string;
  label: string;
  detail: string;
  tags: string[]; // Tag mapping for career scoring
  competencyBonus: {
    systemLogic: number;
    quantitative: number;
    hardwarePhysics: number;
    operationsMgmt: number;
  };
};

export type Question = {
  id: number;
  section: string;
  title: string;
  description: string;
  type: "radio" | "checkbox";
  options: QuestionOption[];
};

export const diagnosticQuestions: Question[] = [
  {
    id: 1,
    section: "ส่วนที่ 1: กระบวนการคิดเชิงวิศวกรรมและการแก้ปัญหา (System Logic & Problem Solving)",
    title: "เมื่อคุณเจอวิกฤตระบบหรืออุปกรณ์หยุดทำงานกลางคัน (Critical System Failure) คุณจะเริ่มต้นวิเคราะห์อย่างไร?",
    description: "เลือกแนวทางในการเข้าถึงปัญหาทางวิศวกรรมที่ตรงกับสัญชาตญาณของคุณมากที่สุด",
    type: "radio",
    options: [
      {
        id: "q1_a",
        label: "สืบหา Root Cause จากข้อมูลบันทึกระบบ (Logs, Metrics, Traces) ย้อนหลัง และจำลองสภาวะการทดสอบเชิงซอฟต์แวร์",
        detail: "มุ่งเน้นการวิเคราะห์ร่องรอยข้อมูลเชิงดิจิทัล ค้นหา Bug หรือสภาวะผิดปกติของโปรแกรม",
        tags: ["software", "cloud", "devops", "qa"],
        competencyBonus: { systemLogic: 25, quantitative: 20, hardwarePhysics: 5, operationsMgmt: 10 }
      },
      {
        id: "q1_b",
        label: "ลงพื้นที่ตรวจสอบอุปกรณ์กายภาพ สัญญาณไฟฟ้า แรงดัน วงจร หรือโครงสร้างหน้างานจริงโดยตรง",
        detail: "เน้นการสัมผัสอุปกรณ์จริง ใช้เครื่องมือวัดทางไฟฟ้า เครื่องมือกลศาสตร์ เพื่อหาความเสียหายทางกายภาพ",
        tags: ["electrical", "mechanical", "civil", "robotics", "embedded"],
        competencyBonus: { systemLogic: 15, quantitative: 10, hardwarePhysics: 25, operationsMgmt: 10 }
      },
      {
        id: "q1_c",
        label: "วิเคราะห์กระบวนการทำงานและสายการผลิต เพื่อหาจุดคอขวด (Bottleneck) และขจัดความสูญเสีย",
        detail: "เน้นภาพรวมกระบวนการ (Process Alignment) ปรับปรุงประสิทธิภาพของเวลา แรงงาน และการไหลของวัตถุดิบ",
        tags: ["industrial", "supply_chain", "quality", "chemical"],
        competencyBonus: { systemLogic: 15, quantitative: 15, hardwarePhysics: 10, operationsMgmt: 25 }
      },
      {
        id: "q1_d",
        label: "ศึกษาวิจัยจากทฤษฎี สมการฟิสิกส์ แบบจำลองคณิตศาสตร์ หรือเอกสารงานวิจัยเพื่อคิดค้นโซลูชันใหม่",
        detail: "ใช้วิธีทางวิทยาศาสตร์ลึกซึ้ง สร้างแบบจำลองคำนวณความเสี่ยง และหาหลักการใหม่ในการป้องกันปัญหา",
        tags: ["research", "ai", "data", "bio", "nano"],
        competencyBonus: { systemLogic: 20, quantitative: 25, hardwarePhysics: 15, operationsMgmt: 5 }
      }
    ]
  },
  {
    id: 2,
    section: "ส่วนที่ 2: ความเชี่ยวชาญเทคโนโลยีและเครื่องมือ (Technical Stack & Tooling)",
    title: "เครื่องมือหรือเทคโนโลยีชิ้นไหนที่คุณถนัดและสนุกในการใช้งานมากที่สุด?",
    description: "เลือกกลุ่มเครื่องมือที่สะท้อนทักษะที่คุณใช้ได้อย่างคล่องแคล่ว",
    type: "radio",
    options: [
      {
        id: "q2_a",
        label: "ภาษาโปรแกรมมิ่งและระบบนิเวศซอฟต์แวร์ (Python, TypeScript, React, Golang, Next.js, Docker, SQL)",
        detail: "สร้างแอปพลิเคชัน เขียน API จัดการฐานข้อมูลความเร็วสูง และวางระบบคลาวด์คอนเทนเนอร์",
        tags: ["software", "web", "backend", "frontend", "cloud"],
        competencyBonus: { systemLogic: 25, quantitative: 20, hardwarePhysics: 5, operationsMgmt: 10 }
      },
      {
        id: "q2_b",
        label: "เครื่องมือวิเคราะห์ข้อมูลเชิงลึกและ AI (PyTorch, TensorFlow, Pandas, Spark, RAG, Scikit-Learn)",
        detail: "ทำความสะอาดข้อมูล สร้างโมเดล Machine Learning เทรน AI ปัญญาประดิษฐ์ และวิเคราะห์สถิติขั้นสูง",
        tags: ["data", "ai", "ml", "analytics", "quant"],
        competencyBonus: { systemLogic: 20, quantitative: 25, hardwarePhysics: 5, operationsMgmt: 10 }
      },
      {
        id: "q2_c",
        label: "ซอฟต์แวร์ออกแบบสามมิติและจำลองเชิงกลศาสตร์ (SolidWorks, Ansys, AutoCAD, Revit BIM, CATIA)",
        detail: "ถอดแบบอาคาร ออกแบบโครงสร้างเหล็ก ชิ้นส่วนเครื่องกล การถ่ายเทความร้อน และวิเคราะห์ความเค้น",
        tags: ["mechanical", "civil", "automotive", "aerospace", "structure"],
        competencyBonus: { systemLogic: 10, quantitative: 15, hardwarePhysics: 25, operationsMgmt: 10 }
      },
      {
        id: "q2_d",
        label: "ภาษาฮาร์ดแวร์และระบบอัตโนมัติ (C/C++, STM32, FreeRTOS, PLC Siemens, ROS2, Altium PCB)",
        detail: "เขียนเฟิร์มแวร์ฝังตัว บอร์ดวงจรอิเล็กทรอนิกส์ การควบคุมหุ่นยนต์ และระบบสายการผลิตอัตโนมัติ",
        tags: ["embedded", "robotics", "automation", "electrical", "electronics"],
        competencyBonus: { systemLogic: 20, quantitative: 10, hardwarePhysics: 25, operationsMgmt: 5 }
      },
      {
        id: "q2_e",
        label: "ซอฟต์แวร์วิเคราะห์กระบวนการและบริหารอุตสาหกรรม (Aspen HYSYS, SAP ERP, Minitab, Arena Simulation)",
        detail: "คำนวณสมดุลมวลและพลังงาน วางแผนความต้องการวัตถุดิบ (MRP) และจำลองแบบสายการผลิตโรงงาน",
        tags: ["chemical", "industrial", "supply_chain", "environmental"],
        competencyBonus: { systemLogic: 15, quantitative: 20, hardwarePhysics: 10, operationsMgmt: 25 }
      }
    ]
  },
  {
    id: 3,
    section: "ส่วนที่ 3: สภาพแวดล้อมการทำงานทางวิศวกรรม (Engineering Environment Fit)",
    title: "สภาพแวดล้อมการทำงานแบบใดที่เอื้อให้คุณส่งมอบผลงานได้อย่างท็อปฟอร์ม?",
    description: "เลือกบรรยากาศการทำงานที่คุณต้องการใช้เวลาปฏิบัติงานจริง",
    type: "radio",
    options: [
      {
        id: "q3_a",
        label: "ออฟฟิศเทคโนโลยีสมัยใหม่ หรือการทำงานแบบยืดหยุ่น (Hybrid/Remote Work)",
        detail: "ทำงานผ่านคอมพิวเตอร์ความเร็วสูง สื่อสารออนไลน์อย่างรวดเร็ว เน้นผลงานความสมบูรณ์ของซอฟต์แวร์",
        tags: ["software", "cloud", "data", "ai", "web"],
        competencyBonus: { systemLogic: 20, quantitative: 15, hardwarePhysics: 5, operationsMgmt: 10 }
      },
      {
        id: "q3_b",
        label: "ห้องปฏิบัติการวิจัยและพัฒนาขั้นสูง (High-Tech R&D Lab / Semiconductor Cleanroom)",
        detail: "ทำการทดลองเชิงลึก ปราศจากสิ่งรบกวน ใช้เครื่องมือทดสอบความแม่นยำสูงในห้องสะอาดปิด",
        tags: ["electronics", "research", "bio", "nano", "aerospace"],
        competencyBonus: { systemLogic: 15, quantitative: 20, hardwarePhysics: 20, operationsMgmt: 5 }
      },
      {
        id: "q3_c",
        label: "โรงงานอุตสาหกรรมขนาดใหญ่ โรงไฟฟ้า นิคมอุตสาหกรรม หรือแท่นขุดเจาะปิโตรเลียม",
        detail: "ทำงานกับเครื่องจักรขนาดใหญ่ ควบคุมกระบวนการผลิต และดูแลความปลอดภัยในอุตสาหกรรมหนัก",
        tags: ["chemical", "electrical", "mechanical", "industrial", "petroleum"],
        competencyBonus: { systemLogic: 10, quantitative: 10, hardwarePhysics: 20, operationsMgmt: 20 }
      },
      {
        id: "q3_d",
        label: "หน้างานก่อสร้างจริง (Construction Site) โครงสร้างคมนาคม หรือลงพื้นที่ชุมชนสิ่งแวดล้อม",
        detail: "ประสานงานหน้างาน คุมผู้รับเหมา ลุยแดดลม ตรวจสอบความปลอดภัยและความถูกต้องของอาคารสถานที่",
        tags: ["civil", "field", "environmental", "water", "infrastructure"],
        competencyBonus: { systemLogic: 10, quantitative: 10, hardwarePhysics: 20, operationsMgmt: 20 }
      }
    ]
  },
  {
    id: 4,
    section: "ส่วนที่ 4: สถานการณ์ทดสอบการตัดสินใจทางวิศวกรรม (Engineering Crisis Scenario)",
    title: "สถานการณ์จำลอง: องค์กรเจอปัญหาวิกฤตฉุกเฉิน คุณต้องการเสนอตัวเข้าควบคุมและแก้ไขในจุดใด?",
    description: "ประเมินความสามารถในการรับมือกับความท้าทายจริงในโลกการทำงาน",
    type: "radio",
    options: [
      {
        id: "q4_a",
        label: "ระบบเซิร์ฟเวอร์และฐานข้อมูลล่มเนื่องจากทราฟฟิกพุ่งสูงขึ้น 100 เท่า: บัญชาการขยายคลาวด์และแก้ปัญหาซอฟต์แวร์ทันที",
        detail: "แก้ปัญหาระดับสถาปัตยกรรมดิจิทัล ปรับแต่งคิวข้อมูล และกู้คืนการให้บริการออนไลน์",
        tags: ["cloud", "devops", "software", "backend"],
        competencyBonus: { systemLogic: 25, quantitative: 15, hardwarePhysics: 5, operationsMgmt: 15 }
      },
      {
        id: "q4_b",
        label: "พบจุดบกพร่องร้ายแรงในสายการผลิตชิ้นส่วนยานยนต์/หุ่นยนต์: เข้าคุมระบบรีเซ็ต PLC และปรับแก้พิกัดการทำงาน",
        detail: "หยุดความเสียหายของการผลิตชิ้นส่วนเสีย ตรวจเช็คฮาร์ดแวร์เซ็นเซอร์ และปรับแก้โปรแกรมควบคุม",
        tags: ["automation", "robotics", "automotive", "industrial"],
        competencyBonus: { systemLogic: 15, quantitative: 10, hardwarePhysics: 25, operationsMgmt: 15 }
      },
      {
        id: "q4_c",
        label: "พบสัญญาณดินเคลื่อนตัวผิดปกติบริเวณฐานรากอาคารสูง: สั่งการระงับงาน ประเมินการรับน้ำหนัก และเสริมเสาเข็มฉุกเฉิน",
        detail: "รักษาชีวิตผู้ปฏิบัติงานหน้างาน คำนวณเสถียรภาพดินและโครงสร้างใหม่ทันท่วงที",
        tags: ["civil", "field", "structure", "geotechnical"],
        competencyBonus: { systemLogic: 15, quantitative: 15, hardwarePhysics: 25, operationsMgmt: 15 }
      },
      {
        id: "q4_d",
        label: "พบการรั่วไหลของสารเคมี/ของเสียในระบบบำบัด: สั่งการปิดวาล์วฉุกเฉิน เดินเครื่องบำบัดสารเคมี และควบคุมมลพิษ",
        detail: "จัดการความปลอดภัยสารเคมี ป้องกันมลพิษแพร่กระจายสู่ภายนอกโรงงาน",
        tags: ["chemical", "environmental", "safety", "water"],
        competencyBonus: { systemLogic: 15, quantitative: 15, hardwarePhysics: 15, operationsMgmt: 25 }
      }
    ]
  },
  {
    id: 5,
    section: "ส่วนที่ 5: เป้าหมายและคุณค่าในสายอาชีพวิศวกรรม (Engineering Impact & Ambition)",
    title: "อะไรคือผลงานที่คุณภาคภูมิใจและต้องการส่งมอบให้แก่โลกมากที่สุด?",
    description: "เลือกเจตจำนงเป้าหมายสายอาชีพของคุณ",
    type: "radio",
    options: [
      {
        id: "q5_a",
        label: "การสร้างแพลตฟอร์มดิจิทัลหรือระบบ AI ที่เปลี่ยนวิถีชีวิตผู้คนนับล้านคนทั่วโลก",
        detail: "มุ่งเน้นอิมแพคทางเทคโนโลยีซอฟต์แวร์ การเชื่อมต่อผู้คน และปัญญาประดิษฐ์",
        tags: ["software", "ai", "data", "web", "mobile"],
        competencyBonus: { systemLogic: 25, quantitative: 20, hardwarePhysics: 5, operationsMgmt: 10 }
      },
      {
        id: "q5_b",
        label: "การคิดค้นและพัฒนาหุ่นยนต์ อุปกรณ์การแพทย์ หรือยานยนต์ไฟฟ้าอนาคตที่ก้าวล้ำยุค",
        detail: "มุ่งเน้นการปฏิวัติฮาร์ดแวร์ เทคโนโลยีเพื่อสุขภาพ และนวัตกรรมการเดินทาง",
        tags: ["robotics", "automotive", "embedded", "bio", "electronics"],
        competencyBonus: { systemLogic: 15, quantitative: 15, hardwarePhysics: 25, operationsMgmt: 5 }
      },
      {
        id: "q5_c",
        label: "การสร้างอาคาร สิ่งก่อสร้าง สะพาน หรือโครงสร้างพื้นฐานระดับชาติที่คงทนถาวรนับร้อยปี",
        detail: "มุ่งเน้นการฝากผลงานทางสถาปัตยกรรมวิศวกรรมที่จับต้องได้และมีประโยชน์ต่อสาธารณชน",
        tags: ["civil", "infrastructure", "water", "structure"],
        competencyBonus: { systemLogic: 10, quantitative: 15, hardwarePhysics: 25, operationsMgmt: 10 }
      },
      {
        id: "q5_d",
        label: "การเพิ่มประสิทธิภาพห่วงโซ่อุตสาหกรรม การลดคาร์บอน และสร้างความยั่งยืนให้แก่โลกใบนี้",
        detail: "มุ่งเน้นการขับเคลื่อน Net-Zero ความเป็นมิตรต่อสิ่งแวดล้อม และกระบวนการที่ยั่งยืน",
        tags: ["industrial", "environmental", "chemical", "energy", "supply_chain"],
        competencyBonus: { systemLogic: 15, quantitative: 15, hardwarePhysics: 10, operationsMgmt: 25 }
      }
    ]
  }
];

export type DiagnosticResult = {
  primaryRoleTitle: string;
  primaryCategory: string;
  matchScore: number;
  description: string;
  radarScores: {
    systemLogic: number;
    quantitative: number;
    hardwarePhysics: number;
    operationsMgmt: number;
  };
  recommendedSkills: string[];
  careerMilestones: string[];
};

export function calculateFateDiagnostic(selectedOptionIds: string[]): DiagnosticResult {
  let systemLogic = 40;
  let quantitative = 40;
  let hardwarePhysics = 40;
  let operationsMgmt = 40;

  const tagCounts: Record<string, number> = {};

  diagnosticQuestions.forEach((q) => {
    q.options.forEach((opt) => {
      if (selectedOptionIds.includes(opt.id)) {
        systemLogic += opt.competencyBonus.systemLogic;
        quantitative += opt.competencyBonus.quantitative;
        hardwarePhysics += opt.competencyBonus.hardwarePhysics;
        operationsMgmt += opt.competencyBonus.operationsMgmt;

        opt.tags.forEach((tag) => {
          tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
      }
    });
  });

  // Clamp radar scores max 98
  systemLogic = Math.min(98, systemLogic);
  quantitative = Math.min(98, quantitative);
  hardwarePhysics = Math.min(98, hardwarePhysics);
  operationsMgmt = Math.min(98, operationsMgmt);

  // Find top tag
  let topTag = "software";
  let maxCount = 0;
  Object.entries(tagCounts).forEach(([tag, count]) => {
    if (count > maxCount) {
      maxCount = count;
      topTag = tag;
    }
  });

  // Decision logic mapped to engineering disciplines
  if (topTag === "software" || topTag === "web" || topTag === "code" || topTag === "backend") {
    return {
      primaryRoleTitle: "วิศวกรซอฟต์แวร์และสถาปัตยกรรมดิจิทัล (Software & Systems Architect)",
      primaryCategory: "คอมพิวเตอร์ & ซอฟต์แวร์",
      matchScore: 96,
      description: "คุณมีความโดดเด่นอย่างมากในด้านการคิดเชิงระบบ (System Logic) การแก้ปัญหาด้วยรหัส และการวางสถาปัตยกรรมซอฟต์แวร์ คุณเหมาะสำหรับบทบาทในการสร้างและขยายระบบเว็บ คลาวด์ และแพลตฟอร์มดิจิทัลระดับองค์กร",
      radarScores: { systemLogic, quantitative, hardwarePhysics, operationsMgmt },
      recommendedSkills: ["System Architecture Design", "Microservices & Go/Java", "Cloud Native (AWS/Kubernetes)", "PostgreSQL Performance Tuning"],
      careerMilestones: ["Junior Engineer", "Senior Software Architect", "Principal Systems Specialist", "VP of Engineering / CTO"]
    };
  } else if (topTag === "data" || topTag === "ai" || topTag === "ml" || topTag === "quant") {
    return {
      primaryRoleTitle: "วิศวกรปัญญาประดิษฐ์และวิทยาการข้อมูล (AI & Data Science Specialist)",
      primaryCategory: "ข้อมูล & ปัญญาประดิษฐ์",
      matchScore: 95,
      description: "คุณมีทักษะโดดเด่นในด้านการวิเคราะห์เชิงปริมาณ (Quantitative Reasoning) คณิตศาสตร์ และการค้นหาคำตอบจากข้อมูล เหมาะสำหรับบทบาทในการเทรนโมเดล AI/LLMs การทำ MLOps และการขับเคลื่อนธุรกิจด้วยข้อมูลงเชิงลึก",
      radarScores: { systemLogic, quantitative, hardwarePhysics, operationsMgmt },
      recommendedSkills: ["Python & PyTorch", "RAG & LLM Fine-Tuning", "Data Pipelines (Spark/Airflow)", "Vector Databases & MLOps"],
      careerMilestones: ["Data Scientist", "Senior AI Engineer", "Head of AI & Data Analytics", "Chief Data Officer"]
    };
  } else if (topTag === "cloud" || topTag === "devops" || topTag === "qa") {
    return {
      primaryRoleTitle: "วิศวกรคลาวด์และความมั่นคงปลอดภัย (Cloud & DevOps Infrastructure Engineer)",
      primaryCategory: "คลาวด์ & ความมั่นคงปลอดภัย",
      matchScore: 94,
      description: "คุณมีความสามารถพิเศษในการวางรากฐานระบบเครือข่าย ความปลอดภัย และระบบอัตโนมัติในการดูแลระบบคลาวด์องค์กร เพื่อให้แน่ใจว่าระบบทำงานได้อย่างเสถียร 24/7 โดยไม่มีระบบล่ม",
      radarScores: { systemLogic, quantitative, hardwarePhysics, operationsMgmt },
      recommendedSkills: ["Terraform & Infrastructure as Code", "Kubernetes Orchestration", "CI/CD & Security Automation", "AWS/Azure Cloud Solutions"],
      careerMilestones: ["Cloud Engineer", "DevOps Architect", "Site Reliability Engineering Lead", "Head of Cloud Infrastructure"]
    };
  } else if (topTag === "robotics" || topTag === "embedded" || topTag === "electronics" || topTag === "automation") {
    return {
      primaryRoleTitle: "วิศวกรหุ่นยนต์และระบบฝังตัวอัจฉริยะ (Robotics & Embedded Systems Engineer)",
      primaryCategory: "หุ่นยนต์ & เมคคาทรอนิกส์",
      matchScore: 94,
      description: "คุณมีจุดแข็งในการผสมผสานซอฟต์แวร์ระดับต่ำเข้ากับอุปกรณ์ทางกายภาพและวงจรอิเล็กทรอนิกส์ เหมาะสมอย่างยิ่งกับการพัฒนาหุ่นยนต์ อุปกรณ์ IoT รถยนต์ EV และระบบอัตโนมัติอุตสาหกรรม",
      radarScores: { systemLogic, quantitative, hardwarePhysics, operationsMgmt },
      recommendedSkills: ["C/C++ & FreeRTOS", "ROS2 Robotics Framework", "PCB Design (Altium)", "Industrial PLC & SCADA"],
      careerMilestones: ["Embedded Developer", "Robotics Lead Architect", "Automation R&D Manager", "Chief Hardware Officer"]
    };
  } else if (topTag === "civil" || topTag === "field" || topTag === "structure" || topTag === "geotechnical") {
    return {
      primaryRoleTitle: "วิศวกรโยธาและแบบจำลองโครงสร้างสารสนเทศ (Civil Structural & BIM Engineer)",
      primaryCategory: "โยธา & โครงสร้าง",
      matchScore: 93,
      description: "คุณมีทักษะยอดเยี่ยมในด้านกลศาสตร์โครงสร้าง การคิดคำนวณเชิงมิติสามมิติ และการบริหารจัดการงานก่อสร้างหน้างาน เหมาะสำหรับบทบาทในการออกแบบอาคารสูง โครงสร้างคมนาคม และโครงการสาธารณูปโภคขนาดใหญ่",
      radarScores: { systemLogic, quantitative, hardwarePhysics, operationsMgmt },
      recommendedSkills: ["Autodesk Revit BIM", "ETABS & FEA Structural Analysis", "Primavera P6 Project Management", "Construction Site Safety & Contracts"],
      careerMilestones: ["Site Engineer", "Senior Structural Consultant", "Construction Project Director", "Infrastructure Principal Lead"]
    };
  } else if (topTag === "mechanical" || topTag === "automotive" || topTag === "aerospace") {
    return {
      primaryRoleTitle: "วิศวกรเครื่องกลและยานยนต์ขั้นสูง (Mechanical & EV Powertrain Engineer)",
      primaryCategory: "เครื่องกล & ยานยนต์",
      matchScore: 92,
      description: "คุณมีความถนัดในการออกแบบชิ้นส่วนทางกล การวิเคราะห์ความเค้นและความร้อน ตลอดจนการพัฒนาเทคโนโลยียานยนต์ไฟฟ้า EV เหมาะสำหรับอุตสาหกรรมผลิตยานยนต์ การบิน และเครื่องจักรกล",
      radarScores: { systemLogic, quantitative, hardwarePhysics, operationsMgmt },
      recommendedSkills: ["SolidWorks & CATIA 3D Design", "Ansys FEA & CFD Thermal Simulation", "EV Battery Management (BMS)", "GD&T & DFM Tolerances"],
      careerMilestones: ["Mechanical Designer", "Senior FEA Specialist", "EV Powertrain R&D Lead", "Chief Mechanical Engineer"]
    };
  } else if (topTag === "industrial" || topTag === "supply_chain" || topTag === "quality") {
    return {
      primaryRoleTitle: "วิศวกรอุตสาหการและบริหารห่วงโซ่อุปทาน (Industrial & Supply Chain Engineer)",
      primaryCategory: "อุตสาหการ & โลจิสติกส์",
      matchScore: 94,
      description: "คุณมีความสามารถโดดเด่นในการบริหารจัดการกระบวนการ (Operations Management) การขจัดความสูญเสีย และการเพิ่มผลผลิต เหมาะสมกับการคุมสายการผลิตโรงงาน การวางระบบโลจิสติกส์ และระบบคุณภาพ SQC",
      radarScores: { systemLogic, quantitative, hardwarePhysics, operationsMgmt },
      recommendedSkills: ["Lean Six Sigma Black Belt", "Arena Simulation & Optimization", "SAP ERP & Supply Chain Analytics", "Statistical Quality Control"],
      careerMilestones: ["Industrial Engineer", "Continuous Improvement Manager", "Plant Operations Director", "VP of Global Supply Chain"]
    };
  } else if (topTag === "chemical" || topTag === "materials" || topTag === "petroleum") {
    title: "วิศวกรเคมีและกระบวนการปิโตรเคมี (Chemical Process & Materials Engineer)";
    return {
      primaryRoleTitle: "วิศวกรเคมีและกระบวนการปิโตรเคมี (Chemical Process & Materials Engineer)",
      primaryCategory: "เคมี & วัสดุ",
      matchScore: 93,
      description: "คุณมีความเข้าใจในกระบวนการทางเคมี อุณหโมดายนิกส์ และสมดุลมวลสาร เหมาะสมอย่างยิ่งกับการออกแบบและควบคุมกระบวนการผลิตในโรงกลั่นน้ำมัน โรงงานปิโตรเคมี และการพัฒนาวัสดุศาสตร์ชั้นสูง",
      radarScores: { systemLogic, quantitative, hardwarePhysics, operationsMgmt },
      recommendedSkills: ["Aspen HYSYS Process Design", "HAZOP Safety Standards", "Chemical Reactor Kinetics", "Polymer & Battery Materials Tech"],
      careerMilestones: ["Process Engineer", "Production Superintendent", "Refinery Plant Manager", "Chief Process Officer"]
    };
  } else {
    return {
      primaryRoleTitle: "วิศวกรสิ่งแวดล้อมและความยั่งยืน (Environmental & ESG Sustainability Engineer)",
      primaryCategory: "สิ่งแวดล้อม & ความปลอดภัย",
      matchScore: 92,
      description: "คุณมีวิสัยทัศน์ในการดูแลรักษาสภาพแวดล้อมและการปรับปรุงกระบวนการอย่างยั่งยืน เหมาะสำหรับบทบาทในการวางระบบบำบัดของเสีย การประเมินคาร์บอนฟุตพริ้นท์ และการขับเคลื่อนเป้าหมาย Net-Zero ขององค์กรชั้นนำ",
      radarScores: { systemLogic, quantitative, hardwarePhysics, operationsMgmt },
      recommendedSkills: ["ESG Reporting Frameworks", "Wastewater Treatment Systems", "ISO 14001 & Life Cycle Assessment", "Air Emission Monitoring"],
      careerMilestones: ["Environmental Engineer", "Sustainability Specialist", "EHS Director", "Chief Sustainability Officer (CSO)"]
    };
  }
}
