export type QuestionOption = {
  id: string;
  label: string;
  detail: string;
  tags: string[];
  competencyBonus: {
    systemLogic: number;
    quantitative: number;
    hardwarePhysics: number;
    operationsMgmt: number;
  };
};

export type Question = {
  id: number;
  moduleIndex: number;
  section: string;
  title: string;
  description: string;
  type: "radio" | "checkbox";
  options: QuestionOption[];
};

export const diagnosticQuestions: Question[] = [
  // ==================== MODULE 1: SYSTEM LOGIC & ALGORITHMIC PROBLEM SOLVING (Q1 - Q10) ====================
  {
    id: 1,
    moduleIndex: 1,
    section: "หมวดที่ 1: ตรรกะเชิงระบบและอัลกอริทึม",
    title: "1. เมื่อพบว่าแอปพลิเคชันมีอัตราตอบสนองช้าลงอย่างมากในสภาวะ High Load สิ่งแรกที่คุณเลือกวิเคราะห์คือ?",
    description: "เลือกแนวทางตรวจสอบระบบที่ตรงกับสไตล์การทำงานของคุณ",
    type: "radio",
    options: [
      { id: "q1_a", label: "วิเคราะห์เวลาในการรันคำสั่ง Slow Queries และท่อส่งข้อมูล Data Pipelines", detail: "เน้นหาจุดคอขวดของฐานข้อมูลและการดึงข้อมูล", tags: ["software", "backend", "data"], competencyBonus: { systemLogic: 4, quantitative: 3, hardwarePhysics: 1, operationsMgmt: 2 } },
      { id: "q1_b", label: "ตรวจสอบการใช้งาน CPU, Memory, I/O และ Network Bandwidth ของเซิร์ฟเวอร์", detail: "เน้นดูทรัพยากรระดับระบบปฏิบัติการและคลาวด์", tags: ["cloud", "devops", "systems"], competencyBonus: { systemLogic: 4, quantitative: 2, hardwarePhysics: 2, operationsMgmt: 2 } },
      { id: "q1_c", label: "วิเคราะห์สถาปัตยกรรมของโค้ดและความซับซ้อนระดับ Big-O Notation", detail: "เน้นปรับปรุงโครงสร้างโค้ดและอัลกอริทึม", tags: ["software", "code", "algorithm"], competencyBonus: { systemLogic: 5, quantitative: 3, hardwarePhysics: 0, operationsMgmt: 1 } },
      { id: "q1_d", label: "ตรวจสอบเซ็นเซอร์ อุปกรณ์ฮาร์ดแวร์ และสายสัญญาณการสื่อสารหน้างาน", detail: "เน้นตรวจสอบตัวรับสัญญาณกายภาพ", tags: ["embedded", "electrical", "hardware"], competencyBonus: { systemLogic: 2, quantitative: 1, hardwarePhysics: 5, operationsMgmt: 1 } }
    ]
  },
  {
    id: 2,
    moduleIndex: 1,
    section: "หมวดที่ 1: ตรรกะเชิงระบบและอัลกอริทึม",
    title: "2. คุณชอบแก้โจทย์ประเภทใดมากที่สุดเวลาฝึกทักษะการคิด?",
    description: "เลือกสไตล์โจทย์ทางความคิดที่คุณรู้สึกท้าทาย",
    type: "radio",
    options: [
      { id: "q2_a", label: "โจทย์โครงสร้างข้อมูล Data Structures & Search Algorithms", detail: "เน้นตรรกะความเร็วและความประหยัดหน่วยความจำ", tags: ["software", "code"], competencyBonus: { systemLogic: 5, quantitative: 3, hardwarePhysics: 0, operationsMgmt: 1 } },
      { id: "q2_b", label: "โจทย์ทฤษฎีกราฟ Neural Networks และความน่าจะเป็น", detail: "เน้นคณิตศาสตร์และแบบจำลองปัญญาประดิษฐ์", tags: ["ai", "data", "math"], competencyBonus: { systemLogic: 4, quantitative: 5, hardwarePhysics: 0, operationsMgmt: 1 } },
      { id: "q2_c", label: "โจทย์จำลองแรงสั่นสะเทือน ความเค้นของวัสดุ และการเคลื่อนที่สามมิติ", detail: "เน้นกลศาสตร์ฟิสิกส์เชิงคำนวณ", tags: ["mechanical", "civil", "structure"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 5, operationsMgmt: 1 } },
      { id: "q2_d", label: "โจทย์วางแผนเส้นทางจัดส่งสินค้า VRP และการจัดสรรทรัพยากรให้คุ้มค่าที่สุด", detail: "เน้นการวิจัยดำเนินงาน Operations Research", tags: ["industrial", "supply_chain"], competencyBonus: { systemLogic: 3, quantitative: 3, hardwarePhysics: 1, operationsMgmt: 5 } }
    ]
  },
  {
    id: 3,
    moduleIndex: 1,
    section: "หมวดที่ 1: ตรรกะเชิงระบบและอัลกอริทึม",
    title: "3. ในการออกแบบ System Architecture คุณให้ความสำคัญกับปัจจัยใดมากที่สุด?",
    description: "เลือกหลักการออกแบบที่คุณยึดถือเป็นอันดับแรก",
    type: "radio",
    options: [
      { id: "q3_a", label: "การขยายตัวรองรับภาระงานมหาศาล Scalability & Fault Tolerance", detail: "ออกแบบให้ระบบไม่ล่มแม้มีทราฟฟิกมหาศาล", tags: ["cloud", "devops", "backend"], competencyBonus: { systemLogic: 5, quantitative: 2, hardwarePhysics: 1, operationsMgmt: 3 } },
      { id: "q3_b", label: "ความแม่นยำสูงสุดของผลลัพธ์และการลดความผิดพลาด Accuracy & Precision", detail: "ออกแบบให้ข้อมูลถูกต้อง 100% ไม่มีความคลาดเคลื่อน", tags: ["data", "ai", "research"], competencyBonus: { systemLogic: 4, quantitative: 5, hardwarePhysics: 1, operationsMgmt: 2 } },
      { id: "q3_c", label: "ความปลอดภัยของโครงสร้างและความทนทานต่อภัยธรรมชาติ Structural Safety Factor", detail: "เผื่อค่าความปลอดภัยสูงตามกฎหมายวิศวกรรม", tags: ["civil", "structure", "safety"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 3 } },
      { id: "q3_d", label: "ต้นทุนการผลิตต่ำที่สุดและรอบเวลาในการทำงานสั้นที่สุด Low Cost & Cycle Time", detail: "เพิ่มกำไรสูงสุดและคุ้มค่าการลงทุน", tags: ["industrial", "supply_chain"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 1, operationsMgmt: 5 } }
    ]
  },
  {
    id: 4,
    moduleIndex: 1,
    section: "หมวดที่ 1: ตรรกะเชิงระบบและอัลกอริทึม",
    title: "4. เมื่อซอฟต์แวร์หรือระบบฮาร์ดแวร์ทำงานผิดปกติโดยไม่ทราบสาเหตุชัดเจน คุณจะสืบหาสาเหตุอย่างไร?",
    description: "เลือกเทคนิคการไล่หาสาเหตุที่คุณเชื่อมั่น",
    type: "radio",
    options: [
      { id: "q4_a", label: "ใช้วิธี Binary Search ตัดส่วนประกอบระบบทีละครึ่งเพื่อจำกัดวงปัญหา", detail: "ตัดปัจจัยภายนอกและบีบวงแคบลงทีละขั้น", tags: ["software", "systems"], competencyBonus: { systemLogic: 5, quantitative: 3, hardwarePhysics: 1, operationsMgmt: 2 } },
      { id: "q4_b", label: "ใช้ Oscilloscope หรือ Multimeter ตรวจวัดสัญญาณไฟฟ้าที่โหนดต่างๆ", detail: "ตรวจสอบระดับแรงดันและลูกคลื่นสัญญาณจริง", tags: ["electronics", "embedded", "hardware"], competencyBonus: { systemLogic: 3, quantitative: 1, hardwarePhysics: 5, operationsMgmt: 1 } },
      { id: "q4_c", label: "ทำแผนผัง Fishbone Diagram และวิเคราะห์ 5-Why Analysis", detail: "ระดมความคิดหาสาเหตุหลักรากเหง้าอย่างเป็นระบบ", tags: ["industrial", "quality"], competencyBonus: { systemLogic: 3, quantitative: 2, hardwarePhysics: 1, operationsMgmt: 5 } },
      { id: "q4_d", label: "เก็บตัวอย่างสารหรือวัสดุไปทดสอบคุณสมบัติทางเคมีและกลศาสตร์ในห้องแล็บ", detail: "ทดสอบการกัดกร่อน รอยร้าว หรือการปนเปื้อน", tags: ["chemical", "materials"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 4, operationsMgmt: 2 } }
    ]
  },
  {
    id: 5,
    moduleIndex: 1,
    section: "หมวดที่ 1: ตรรกะเชิงระบบและอัลกอริทึม",
    title: "5. คุณมีมุมมองอย่างไรเกี่ยวกับการนำระบบ Automation มาใช้แทนมนุษย์?",
    description: "เลือกปรัชญาการทำงานที่คุณให้คุณค่า",
    type: "radio",
    options: [
      { id: "q5_a", label: "ควรอัตโนมัติทุกอย่างที่ทำซ้ำได้ Automate Everything ด้วยโค้ดและบอท", detail: "ประหยัดเวลาและลดมนุษย์เออเรอร์ 100%", tags: ["devops", "software", "cloud"], competencyBonus: { systemLogic: 5, quantitative: 2, hardwarePhysics: 1, operationsMgmt: 3 } },
      { id: "q5_b", label: "ควรใช้หุ่นยนต์และแขนกลเฉพาะงานที่อันตราย งานหนัก หรืองานแม่นยำสูง", detail: "เน้นความปลอดภัยของคนและคุณภาพงาน", tags: ["robotics", "automation"], competencyBonus: { systemLogic: 3, quantitative: 1, hardwarePhysics: 5, operationsMgmt: 3 } },
      { id: "q5_c", label: "ควรใช้ AI ช่วยวิเคราะห์ข้อมูล แต่การตัดสินใจสุดท้ายต้องเป็นมนุษย์ Human-in-the-loop", detail: "เน้นการผสานพลังคนกับ AI", tags: ["ai", "data"], competencyBonus: { systemLogic: 4, quantitative: 4, hardwarePhysics: 1, operationsMgmt: 2 } },
      { id: "q5_d", label: "ต้องประเมินจุดคุ้มทุน ROI และผลกระทบต่อแรงงานอย่างถี่ถ้วนก่อนลงทุน", detail: "เน้นความคุ้มค่าทางการเงินและสังคม", tags: ["industrial", "management"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 1, operationsMgmt: 5 } }
    ]
  },
  {
    id: 6,
    moduleIndex: 1,
    section: "หมวดที่ 1: ตรรกะเชิงระบบและอัลกอริทึม",
    title: "6. ในการจัดการฐานข้อมูลขนาดใหญ่ Big Data คุณคิดว่าอะไรคือความท้าทายที่สำคัญที่สุด?",
    description: "เลือกประเด็นทางเทคนิคที่คุณสนใจ",
    type: "radio",
    options: [
      { id: "q6_a", label: "การทำ Indexing และ Query Optimization เพื่อค้นหาข้อมูลเร็วในระดับ Milliseconds", detail: "เน้นความเร็วในการดึงข้อมูล", tags: ["backend", "database"], competencyBonus: { systemLogic: 5, quantitative: 3, hardwarePhysics: 0, operationsMgmt: 2 } },
      { id: "q6_b", label: "การทำ Data Cleaning และการแปลงรูปแบบข้อมูลจากหลายแหล่งให้ตรงกัน", detail: "เน้นคุณภาพและความสะอาดของข้อมูล", tags: ["data", "etl"], competencyBonus: { systemLogic: 4, quantitative: 4, hardwarePhysics: 0, operationsMgmt: 2 } },
      { id: "q6_c", label: "การรักษาความมั่นคงปลอดภัยและการปฏิบัติตามกฎหมาย PDPA และ GDPR", detail: "เน้นความปลอดภัยและการปกป้องข้อมูล", tags: ["cybersecurity", "cloud"], competencyBonus: { systemLogic: 3, quantitative: 2, hardwarePhysics: 1, operationsMgmt: 4 } },
      { id: "q6_d", label: "การประมวลผลข้อมูลสตรีมมิ่งแบบ Real-Time จากเซ็นเซอร์โรงงานนับหมื่นตัว", detail: "เน้นการประมวลผลข้อมูลไอโอที", tags: ["iot", "embedded"], competencyBonus: { systemLogic: 4, quantitative: 2, hardwarePhysics: 4, operationsMgmt: 2 } }
    ]
  },
  {
    id: 7,
    moduleIndex: 1,
    section: "หมวดที่ 1: ตรรกะเชิงระบบและอัลกอริทึม",
    title: "7. เมื่อต้องเขียนฟังก์ชันคำนวณที่ซับซ้อน คุณเลือกใช้แนวทางใด?",
    description: "เลือกสไตล์การเขียนโปรแกรมของคุณ",
    type: "radio",
    options: [
      { id: "q7_a", label: "เขียนแบบ Functional Programming ใช้ Pure Functions และ Immutable States", detail: "เน้นความปลอดภัยจาก Side Effects", tags: ["software", "code"], competencyBonus: { systemLogic: 5, quantitative: 3, hardwarePhysics: 0, operationsMgmt: 1 } },
      { id: "q7_b", label: "เขียนแบบ Object-Oriented OOP ออกแบบ Class และ Design Patterns ชัดเจน", detail: "เน้นการนำโค้ดกลับมาใช้ใหม่และขยายระบบง่าย", tags: ["software", "architecture"], competencyBonus: { systemLogic: 5, quantitative: 2, hardwarePhysics: 0, operationsMgmt: 2 } },
      { id: "q7_c", label: "ใช้ Vectorized Operations บน NumPy ในการประมวลผลพร้อมกัน", detail: "เน้นความเร็วระดับการคำนวณทางคณิตศาสตร์", tags: ["data", "ai", "python"], competencyBonus: { systemLogic: 4, quantitative: 5, hardwarePhysics: 0, operationsMgmt: 1 } },
      { id: "q7_d", label: "เขียนภาษา C หรือ Assembly จัดการ Pointer เพื่อรีดประสิทธิภาพสูงสุด", detail: "เน้นควบคุมฮาร์ดแวร์ระดับบิต", tags: ["embedded", "systems"], competencyBonus: { systemLogic: 4, quantitative: 1, hardwarePhysics: 5, operationsMgmt: 1 } }
    ]
  },
  {
    id: 8,
    moduleIndex: 1,
    section: "หมวดที่ 1: ตรรกะเชิงระบบและอัลกอริทึม",
    title: "8. การทดสอบความถูกต้องของระบบแบบใดที่คุณคิดว่าเชื่อถือได้ที่สุด?",
    description: "เลือกรูปแบบการรับประกันคุณภาพ",
    type: "radio",
    options: [
      { id: "q8_a", label: "การทำ Automated Unit Test & Integration Test ที่มี Code Coverage > 90%", detail: "เน้นทดสอบด้วยสคริปต์อัตโนมัติใน CI/CD", tags: ["qa", "devops"], competencyBonus: { systemLogic: 5, quantitative: 2, hardwarePhysics: 0, operationsMgmt: 3 } },
      { id: "q8_b", label: "การทำ Penetration Testing และ Red Team Attack เพื่อจำลองการเจาะระบบ", detail: "เน้นหาช่องโหว่ความปลอดภัยก่อนแฮกเกอร์", tags: ["cybersecurity"], competencyBonus: { systemLogic: 4, quantitative: 2, hardwarePhysics: 1, operationsMgmt: 3 } },
      { id: "q8_c", label: "การทดสอบ Stress & Fatigue Testing หน้างานจริงจนกว่าจะพัง", detail: "เน้นการทดสอบขีดจำกัดสูงสุดของฮาร์ดแวร์", tags: ["mechanical", "civil"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 2 } },
      { id: "q8_d", label: "การทดสอบการเดินเครื่องจริง Commissioning Run ต่อเนื่อง 72 ชั่วโมงในโรงงาน", detail: "เน้นความเสถียรของสายการผลิตในสภาวะจริง", tags: ["chemical", "industrial", "electrical"], competencyBonus: { systemLogic: 2, quantitative: 1, hardwarePhysics: 4, operationsMgmt: 5 } }
    ]
  },
  {
    id: 9,
    moduleIndex: 1,
    section: "หมวดที่ 1: ตรรกะเชิงระบบและอัลกอริทึม",
    title: "9. ในการสื่อสารระหว่างบริการต่างระบบ Inter-service Communication คุณนิยมใช้โปรโตคอลใด?",
    description: "เลือกเทคโนโลยีการรับส่งข้อมูลที่คุณสนใจ",
    type: "radio",
    options: [
      { id: "q9_a", label: "gRPC และ Protobuf สำหรับระบบส่งข้อมูลประสิทธิภาพสูงและความหน่วงต่ำมาก", detail: "เน้นความเร็วระดับไมโครวินาที", tags: ["backend", "systems"], competencyBonus: { systemLogic: 5, quantitative: 3, hardwarePhysics: 1, operationsMgmt: 1 } },
      { id: "q9_b", label: "RESTful API และ JSON สำหรับความง่ายในการพัฒนาและการเชื่อมต่อมาตรฐาน", detail: "เน้นความยืดหยุ่นและการทำงานร่วมกันง่าย", tags: ["web", "frontend", "software"], competencyBonus: { systemLogic: 4, quantitative: 1, hardwarePhysics: 0, operationsMgmt: 3 } },
      { id: "q9_c", label: "MQTT หรือ CoAP โปรโตคอลน้ำหนักเบาสำหรับอุปกรณ์เซ็นเซอร์และ IoT", detail: "เน้นประหยัดพลังงานและแบนด์วิดท์ต่ำ", tags: ["iot", "embedded"], competencyBonus: { systemLogic: 4, quantitative: 1, hardwarePhysics: 4, operationsMgmt: 2 } },
      { id: "q9_d", label: "Modbus หรือ CAN Bus โปรโตคอลอุตสาหกรรมสำหรับสื่อสารกับเครื่องจักรและยานยนต์", detail: "เน้นความทนทานต่อสัญญาณรบกวนในโรงงาน", tags: ["automotive", "automation"], competencyBonus: { systemLogic: 3, quantitative: 1, hardwarePhysics: 5, operationsMgmt: 2 } }
    ]
  },
  {
    id: 10,
    moduleIndex: 1,
    section: "หมวดที่ 1: ตรรกะเชิงระบบและอัลกอริทึม",
    title: "10. คุณมีวิธีจัดการความเสี่ยงด้านเทคนิค Technical Debt อย่างไร?",
    description: "เลือกแนวทางการบริหารความเสี่ยงทางวิศวกรรม",
    type: "radio",
    options: [
      { id: "q10_a", label: "จัดเวลาทำการ Refactor โค้ดและปรับปรุงสถาปัตยกรรมอย่างสม่ำเสมอในทุก Sprint", detail: "เน้นป้องกันไม่ให้หนี้เทคนิคพอกพูน", tags: ["software", "management"], competencyBonus: { systemLogic: 5, quantitative: 1, hardwarePhysics: 0, operationsMgmt: 4 } },
      { id: "q10_b", label: "ใช้แบบจำลองทางสถิติและมอนิเตอร์เพื่อพยากรณ์โอกาสเกิดความผิดพลาดล่วงหน้า", detail: "เน้นใช้ข้อมูลนำการตัดสินใจ", tags: ["data", "ai"], competencyBonus: { systemLogic: 4, quantitative: 5, hardwarePhysics: 0, operationsMgmt: 3 } },
      { id: "q10_c", label: "ทำแผนบำรุงรักษาเชิงป้องกัน Preventive Maintenance เครื่องจักรอย่างเคร่งครัด", detail: "เน้นเปลี่ยนอะไหล่ก่อนหมดอายุการใช้งาน", tags: ["mechanical", "electrical"], competencyBonus: { systemLogic: 2, quantitative: 1, hardwarePhysics: 5, operationsMgmt: 4 } },
      { id: "q10_d", label: "ทำประกันภัยโครงการและทำสัญญาตกลงระดับการให้บริการ SLA ควบคุมความเสียหาย", detail: "เน้นโอนย้ายความเสี่ยงทางการเงินและสัญญา", tags: ["industrial", "civil"], competencyBonus: { systemLogic: 1, quantitative: 2, hardwarePhysics: 1, operationsMgmt: 5 } }
    ]
  },

  // ==================== MODULE 2: MATHEMATICS, DATA & QUANTITATIVE ANALYSIS (Q11 - Q20) ====================
  {
    id: 11,
    moduleIndex: 2,
    section: "หมวดที่ 2: คณิตศาสตร์ ข้อมูล และสถิติ",
    title: "11. วิชาคณิตศาสตร์สาขาใดที่คุณรู้สึกเข้าใจได้ดีที่สุดและสนุกในการประยุกต์ใช้?",
    description: "เลือกพื้นฐานคณิตศาสตร์ที่คุณถนัด",
    type: "radio",
    options: [
      { id: "q11_a", label: "พีชคณิตเชิงเส้นและแคลคูลัสหลายตัวแปร Linear Algebra & Vector Calculus", detail: "ใช้ในกราฟิก 3D, Machine Learning และควิอนตัม", tags: ["ai", "data", "graphics"], competencyBonus: { systemLogic: 4, quantitative: 5, hardwarePhysics: 2, operationsMgmt: 1 } },
      { id: "q11_b", label: "ทฤษฎีความน่าจะเป็นและสถิติประยุกต์ Probability & Applied Statistics", detail: "ใช้ในการวิเคราะห์ข้อมูล สุ่มตัวอย่าง และไฟแนนซ์", tags: ["data", "quant", "analytics"], competencyBonus: { systemLogic: 3, quantitative: 5, hardwarePhysics: 1, operationsMgmt: 2 } },
      { id: "q11_c", label: "สมการเชิงอนุพันธ์และอนุกรมฟูเรียร์ Differential Equations & Fourier Analysis", detail: "ใช้ในการวิเคราะห์คลื่น สัญญาณไฟฟ้า และฟิสิกส์", tags: ["electrical", "mechanical", "control"], competencyBonus: { systemLogic: 3, quantitative: 4, hardwarePhysics: 5, operationsMgmt: 0 } },
      { id: "q11_d", label: "การกำหนดการเชิงเส้นและการหาค่าที่ดีที่สุด Linear Programming & Optimization", detail: "ใช้ในการวางแผนการจัดส่ง เครือข่าย และต้นทุน", tags: ["industrial", "supply_chain"], competencyBonus: { systemLogic: 3, quantitative: 4, hardwarePhysics: 0, operationsMgmt: 5 } }
    ]
  },
  {
    id: 12,
    moduleIndex: 2,
    section: "หมวดที่ 2: คณิตศาสตร์ ข้อมูล และสถิติ",
    title: "12. ในการวิเคราะห์โมเดล Machine Learning ปัจจัยใดสำคัญที่สุดในการป้องกันปัญหา Overfitting?",
    description: "เลือกเทคนิคทางสถิติและข้อมูลที่คุณเน้นย้ำ",
    type: "radio",
    options: [
      { id: "q12_a", label: "การทำ Cross-Validation และการคุมพารามิเตอร์ Regularization L1 และ L2", detail: "เน้นการควบคุมความซับซ้อนทางคณิตศาสตร์", tags: ["ai", "ml", "data"], competencyBonus: { systemLogic: 4, quantitative: 5, hardwarePhysics: 0, operationsMgmt: 1 } },
      { id: "q12_b", label: "การคัดเลือกและทำ Feature Engineering & Selection", detail: "เน้นความเข้าใจในธรรมชาติของชุดข้อมูล", tags: ["data", "analytics"], competencyBonus: { systemLogic: 3, quantitative: 5, hardwarePhysics: 0, operationsMgmt: 2 } },
      { id: "q12_c", label: "การเพิ่มขนาดและสร้างข้อมูลจำลองเพิ่ม Data Augmentation", detail: "เน้นขยายความหลากหลายของตัวอย่างทดลอง", tags: ["ai", "vision"], competencyBonus: { systemLogic: 4, quantitative: 4, hardwarePhysics: 1, operationsMgmt: 1 } },
      { id: "q12_d", label: "การสุ่มเก็บข้อมูลจากภาคสนามจริงเพิ่มในสภาวะแวดล้อมที่แตกต่างกัน", detail: "เน้นการเก็บข้อมูลหน้างานจริง", tags: ["field", "research"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 3, operationsMgmt: 3 } }
    ]
  },
  {
    id: 13,
    moduleIndex: 2,
    section: "หมวดที่ 2: คณิตศาสตร์ ข้อมูล และสถิติ",
    title: "13. เมื่อต้องประมวลผลสัญญาณดิจิทัล Digital Signal Processing คุณเน้นมิติใด?",
    description: "เลือกการวิเคราะห์สัญญาณที่ตรงกับความสนใจ",
    type: "radio",
    options: [
      { id: "q13_a", label: "การแปลงโดเมนเวลาเป็นโดเมนความถี่ Fast Fourier Transform เพื่อกรองสัญญาณรบกวน", detail: "เน้นการตัด Noise และกรองความถี่", tags: ["electronics", "telecom"], competencyBonus: { systemLogic: 3, quantitative: 5, hardwarePhysics: 4, operationsMgmt: 0 } },
      { id: "q13_b", label: "การสกัดคุณลักษณะเสียงเพื่อทำโมเดล Speech Recognition", detail: "เน้นการนำสัญญาณไปใช้ในงาน AI", tags: ["ai", "nlp"], competencyBonus: { systemLogic: 4, quantitative: 5, hardwarePhysics: 1, operationsMgmt: 1 } },
      { id: "q13_c", label: "การวิเคราะห์การสั่นสะเทือน Vibration Spectrum เพื่อตรวจหาความชำรุดเครื่องจักร", detail: "เน้นการทำ Predictive Maintenance เครื่องกล", tags: ["mechanical", "vibration"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 5, operationsMgmt: 2 } },
      { id: "q13_d", label: "การวิเคราะห์คลื่นไหวสะเทือน Seismic Wave เพื่อสำรวจชั้นหินและน้ำมันใต้ดิน", detail: "เน้นการสำรวจทางธรณีวิทยา", tags: ["petroleum", "geology"], competencyBonus: { systemLogic: 2, quantitative: 4, hardwarePhysics: 4, operationsMgmt: 1 } }
    ]
  },
  {
    id: 14,
    moduleIndex: 2,
    section: "หมวดที่ 2: คณิตศาสตร์ ข้อมูล และสถิติ",
    title: "14. เครื่องมือแดชบอร์ดและการนำเสนอข้อมูล Data Visualization แบบใดที่คุณมองว่ามีประสิทธิภาพสูงสุด?",
    description: "เลือกรูปแบบการสื่อสารข้อมูลเชิงภาพ",
    type: "radio",
    options: [
      { id: "q14_a", label: "แดชบอร์ด Power BI หรือ Tableau ที่อัปเดตอัตโนมัติ สรุปผลตอบแทนและ KPIs ธุรกิจ", detail: "เน้นการบริหารจัดการและตัดสินใจระดับผู้บริหาร", tags: ["analytics", "bi", "management"], competencyBonus: { systemLogic: 3, quantitative: 4, hardwarePhysics: 0, operationsMgmt: 5 } },
      { id: "q14_b", label: "ระบบมอนิเตอร์ Grafana แสดงกราฟความเร็วเซิร์ฟเวอร์ ทราฟฟิก และอัตราเออเรอร์แบบ Real-time", detail: "เน้นประสิทธิภาพระบบไอทีและคลาวด์", tags: ["devops", "cloud"], competencyBonus: { systemLogic: 5, quantitative: 3, hardwarePhysics: 1, operationsMgmt: 3 } },
      { id: "q14_c", label: "แผนที่สารสนเทศภูมิศาสตร์ 3D GIS แสดงโครงข่ายถนน และความหนาแน่นการจราจร", detail: "เน้นการวางผังเมืองและคมนาคม", tags: ["civil", "transportation"], competencyBonus: { systemLogic: 3, quantitative: 3, hardwarePhysics: 3, operationsMgmt: 3 } },
      { id: "q14_d", label: "แผนภูมิควบคุมคุณภาพ SPC Control Charts ติดตามค่าความคลาดเคลื่อนชิ้นงานโรงงาน", detail: "เน้นการควบคุมคุณภาพการผลิต SQC", tags: ["industrial", "quality"], competencyBonus: { systemLogic: 2, quantitative: 4, hardwarePhysics: 2, operationsMgmt: 5 } }
    ]
  },
  {
    id: 15,
    moduleIndex: 2,
    section: "หมวดที่ 2: คณิตศาสตร์ ข้อมูล และสถิติ",
    title: "15. ในการพยากรณ์อนุกรมเวลา Time-Series Forecasting เช่น ยอดขาย หรือปริมาณไฟ คุณใช้วิธีใด?",
    description: "เลือกแนวทางจำลองการพยากรณ์",
    type: "radio",
    options: [
      { id: "q15_a", label: "โมเดลการเรียนรู้เชิงลึก LSTM หรือ Transformer หรือ Prophet", detail: "เน้นโมเดล AI ล้ำสมัยสำหรับข้อมูลมหาศาล", tags: ["ai", "data"], competencyBonus: { systemLogic: 4, quantitative: 5, hardwarePhysics: 0, operationsMgmt: 2 } },
      { id: "q15_b", label: "โมเดลสถิติมาตรฐาน ARIMA หรือ SARIMAX หรือ Exponential Smoothing", detail: "เน้นการอธิบายสมมติฐานทางสถิติได้อย่างชัดเจน", tags: ["quant", "analytics"], competencyBonus: { systemLogic: 3, quantitative: 5, hardwarePhysics: 0, operationsMgmt: 3 } },
      { id: "q15_c", label: "แบบจำลอง Load Flow Simulation คำนวณความต้องการกำลังไฟฟ้า", detail: "เน้นฟิสิกส์ระบบไฟฟ้ากำลัง", tags: ["electrical", "power"], competencyBonus: { systemLogic: 3, quantitative: 4, hardwarePhysics: 4, operationsMgmt: 1 } },
      { id: "q15_d", label: "แบบจำลอง Hydrological Model คำนวณปริมาณน้ำฝนและน้ำท่าเข้าเขื่อน", detail: "เน้นการจัดการทรัพยากรน้ำ", tags: ["water", "environmental"], competencyBonus: { systemLogic: 2, quantitative: 4, hardwarePhysics: 3, operationsMgmt: 3 } }
    ]
  },
  {
    id: 16,
    moduleIndex: 2,
    section: "หมวดที่ 2: คณิตศาสตร์ ข้อมูล และสถิติ",
    title: "16. เมื่อต้องตัดสินใจภายใต้สภาวะความไม่แน่นอน Uncertainty คุณใช้วิธีใด?",
    description: "เลือกเทคนิควิเคราะห์ความเสี่ยงเชิงปริมาณ",
    type: "radio",
    options: [
      { id: "q16_a", label: "การจำลองสุ่ม Monte Carlo Simulation นับแสนครั้งเพื่อดูการกระจายตัว", detail: "เน้นประเมินความเสี่ยงด้วยการสุ่มตัวอย่างมหาศาล", tags: ["data", "quant", "finance"], competencyBonus: { systemLogic: 4, quantitative: 5, hardwarePhysics: 0, operationsMgmt: 3 } },
      { id: "q16_b", label: "การทำ Decision Tree และการวิเคราะห์มูลค่าคาดหวัง Expected Value", detail: "เน้นโครงสร้างทางเลือกและการตัดสินใจเชิงตรรกะ", tags: ["management", "industrial"], competencyBonus: { systemLogic: 4, quantitative: 4, hardwarePhysics: 0, operationsMgmt: 5 } },
      { id: "q16_c", label: "การทดสอบการยอมรับความเค้นและ Safety Margin Calculation", detail: "เน้นคูณค่าเผื่อความปลอดภัยทางวิศวกรรม", tags: ["civil", "mechanical"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 5, operationsMgmt: 2 } },
      { id: "q16_d", label: "การวิเคราะห์ผลกระทบสิ่งแวดล้อมและความเสี่ยง HAZOP หรือ EIA Analysis", detail: "เน้นการวิเคราะห์อันตรายทางเคมีและสิ่งแวดล้อม", tags: ["chemical", "environmental"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 3, operationsMgmt: 5 } }
    ]
  },
  {
    id: 17,
    moduleIndex: 2,
    section: "หมวดที่ 2: คณิตศาสตร์ ข้อมูล และสถิติ",
    title: "17. หากต้องการวัดประสิทธิภาพของ Vector Search ในระบบ RAG หรือ LLM คุณเน้นอะไร?",
    description: "เลือกดัชนีชี้วัดความแม่นยำของการค้นหา",
    type: "radio",
    options: [
      { id: "q17_a", label: "ค่า Precision, Recall และ Cosine Similarity ของเวกเตอร์คำตอบ", detail: "เน้นความถูกต้องและตรงประเด็นของข้อมูลที่ดึงมา", tags: ["ai", "nlp"], competencyBonus: { systemLogic: 5, quantitative: 5, hardwarePhysics: 0, operationsMgmt: 1 } },
      { id: "q17_b", label: "ความเร็วในการค้นหา QPS และการใช้ GPU Memory", detail: "เน้นประสิทธิภาพโครงสร้างคลาวด์และหน่วยความจำ", tags: ["cloud", "devops"], competencyBonus: { systemLogic: 5, quantitative: 3, hardwarePhysics: 1, operationsMgmt: 2 } },
      { id: "q17_c", label: "ความพึงพอใจของผู้ใช้งานจริงจากการประเมินผล A/B Testing", detail: "เน้นผลลัพธ์การใช้งานของลูกค้า", tags: ["product", "analytics"], competencyBonus: { systemLogic: 3, quantitative: 4, hardwarePhysics: 0, operationsMgmt: 4 } },
      { id: "q17_d", label: "การทดสอบความทนทานต่อ Prompt Injection", detail: "เน้นความปลอดภัยไซเบอร์ของโมเดล AI", tags: ["cybersecurity", "ai"], competencyBonus: { systemLogic: 4, quantitative: 3, hardwarePhysics: 0, operationsMgmt: 3 } }
    ]
  },
  {
    id: 18,
    moduleIndex: 2,
    section: "หมวดที่ 2: คณิตศาสตร์ ข้อมูล และสถิติ",
    title: "18. คุณมีความสนใจในการวิเคราะห์ Deep Learning Frameworks ระดับใด?",
    description: "เลือกความลึกซึ้งในการพัฒนาโมเดล AI",
    type: "radio",
    options: [
      { id: "q18_a", label: "สนใจเขียนโครงสร้างโมเดลเองด้วย PyTorch หรือ CUDA จากระดับสมการเมทริกซ์", detail: "เน้นวิจัยและพัฒนาสถาปัตยกรรม AI ลึกซึ้ง", tags: ["ai", "research"], competencyBonus: { systemLogic: 5, quantitative: 5, hardwarePhysics: 1, operationsMgmt: 0 } },
      { id: "q18_b", label: "สนใจนำ Pre-trained Models มา Fine-tune และทำ RAG ใช้งานจริง", detail: "เน้นประยุกต์ใช้โมเดลสร้างโปรดักต์รวดเร็ว", tags: ["software", "ai"], competencyBonus: { systemLogic: 4, quantitative: 3, hardwarePhysics: 0, operationsMgmt: 3 } },
      { id: "q18_c", label: "สนใจแปลงโมเดล AI ให้มีขนาดเล็กลงด้วย Quantization หรือ ONNX รันบนชิป Edge IoT", detail: "เน้นการนำ AI ไปรันบน Edge Hardware", tags: ["embedded", "robotics"], competencyBonus: { systemLogic: 4, quantitative: 3, hardwarePhysics: 5, operationsMgmt: 1 } },
      { id: "q18_d", label: "สนใจวิเคราะห์ผลกระทบทางธุรกิจและจุดคุ้มทุนของการนำ AI มาใช้ในองค์กร", detail: "เน้นความคุ้มค่าทางการเงินและการลงทุน", tags: ["management", "business"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 0, operationsMgmt: 5 } }
    ]
  },
  {
    id: 19,
    moduleIndex: 2,
    section: "หมวดที่ 2: คณิตศาสตร์ ข้อมูล และสถิติ",
    title: "19. ในงานด้านคำนวณทางวิศวกรรม คุณจัดการปัญหา Missing Data อย่างไร?",
    description: "เลือกเทคนิคทางสถิติในการจัดการข้อมูลไม่สมบูรณ์",
    type: "radio",
    options: [
      { id: "q19_a", label: "ใช้การประมาณค่าช่วงข้อมูลด้วย Interpolation หรือ KNN Imputation", detail: "เน้นความต่อเนื่องทางคณิตศาสตร์", tags: ["data", "math"], competencyBonus: { systemLogic: 4, quantitative: 5, hardwarePhysics: 0, operationsMgmt: 1 } },
      { id: "q19_b", label: "ตรวจสอบเซ็นเซอร์วัดค่าหน้างานว่ามีการหลุดของสัญญาณ หรือหัววัดเสียหรือไม่", detail: "เน้นตรวจสอบฮาร์ดแวร์วัดค่ากายภาพ", tags: ["hardware", "electrical"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 2 } },
      { id: "q19_c", label: "ใช้วิธีทางสถิติแบบ Bayesian Inference พยากรณ์ค่าแทนที่ตามความน่าจะเป็น", detail: "เน้นความสมบูรณ์แบบทางสถิติขั้นสูง", tags: ["quant", "ai"], competencyBonus: { systemLogic: 3, quantitative: 5, hardwarePhysics: 0, operationsMgmt: 1 } },
      { id: "q19_d", label: "ตัดชุดข้อมูลที่ไม่สมบูรณ์ออกหากไม่กระทบต่อขนาดตัวอย่างรวมและกระบวนการผลิต", detail: "เน้นความรวดเร็วและคุ้มค่าเวลา", tags: ["industrial", "operations"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 1, operationsMgmt: 4 } }
    ]
  },
  {
    id: 20,
    moduleIndex: 2,
    section: "หมวดที่ 2: คณิตศาสตร์ ข้อมูล และสถิติ",
    title: "20. หากต้องเลือกทำโครงงานวิเคราะห์ทางคณิตศาสตร์ คุณเลือกหัวข้อใด?",
    description: "เลือกหัวข้อวิเคราะห์ที่คุณสนใจ",
    type: "radio",
    options: [
      { id: "q20_a", label: "การทำ High-Frequency Trading Algorithm สำหรับส่งสัญญาณการลงทุนความเร็วสูง", detail: "เน้นความเร็วและคณิตศาสตร์การเงิน", tags: ["quant", "finance"], competencyBonus: { systemLogic: 4, quantitative: 5, hardwarePhysics: 0, operationsMgmt: 2 } },
      { id: "q20_b", label: "การคำนวณสมดุลโครงสร้างอาคารรับแรงแผ่นดินไหวด้วยวิธีกำลังวัสดุขั้นสูง", detail: "เน้นกลศาสตร์คำนวณวิศวกรรมโยธา", tags: ["civil", "structure"], competencyBonus: { systemLogic: 2, quantitative: 4, hardwarePhysics: 5, operationsMgmt: 1 } },
      { id: "q20_c", label: "การคำนวณกระบวนการถ่ายเทมวลความร้อนในการกลั่นน้ำมันและสารปิโตรเคมี", detail: "เน้นสมการสมดุลเคมีและอุณหโมดายนิกส์", tags: ["chemical", "petroleum"], competencyBonus: { systemLogic: 2, quantitative: 4, hardwarePhysics: 4, operationsMgmt: 2 } },
      { id: "q20_d", label: "การวิเคราะห์และทำแบบจำลองการแพร่กระจายฝุ่นมลพิษ PM2.5 แบบ 3D", detail: "เน้นแบบจำลองสิ่งแวดล้อมและอากาศ", tags: ["environmental", "water"], competencyBonus: { systemLogic: 2, quantitative: 4, hardwarePhysics: 3, operationsMgmt: 3 } }
    ]
  },

  // ==================== MODULE 3: PHYSICAL SCIENCE, HARDWARE & MECHANICS (Q21 - Q30) ====================
  {
    id: 21,
    moduleIndex: 3,
    section: "หมวดที่ 3: ฮาร์ดแวร์ ฟิสิกส์ และกลศาสตร์",
    title: "21. ปรากฏการณ์ทางฟิสิกส์ข้อใดที่คุณรู้สึกหลงใหลและเข้าใจได้ลึกซึ้งที่สุด?",
    description: "เลือกหลักการฟิสิกส์วิศวกรรมที่คุณสนใจ",
    type: "radio",
    options: [
      { id: "q21_a", label: "กฎของคลื่นแม่เหล็กไฟฟ้าและการแผ่รังสีสัญญาณไร้สาย Electromagnetism & RF", detail: "พื้นฐานวงจรไฟฟ้า สายอากาศ และการสื่อสาร 5G", tags: ["electrical", "telecom", "electronics"], competencyBonus: { systemLogic: 3, quantitative: 3, hardwarePhysics: 5, operationsMgmt: 0 } },
      { id: "q21_b", label: "กลศาสตร์ของไหลและการถ่ายเทความร้อน Fluid Dynamics & Heat Transfer", detail: "พื้นฐานเครื่องยนต์ ปั๊มน้ำ ระบบปรับอากาศ และ CFD", tags: ["mechanical", "aerospace", "hvac"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 5, operationsMgmt: 1 } },
      { id: "q21_c", label: "กลศาสตร์วัตถุเกร็งและพฤติกรรมความเค้นความเครียดของวัสดุ Stress & Strain", detail: "พื้นฐานการออกแบบโครงสร้างอาคารและชิ้นส่วนเครื่องกล", tags: ["civil", "mechanical", "structure"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 5, operationsMgmt: 1 } },
      { id: "q21_d", label: "ปฏิกิริยาเคมี จลนพลศาสตร์ และสมดุลเฟสสาร Thermodynamics & Kinetics", detail: "พื้นฐานการกลั่น วัสดุโพลีเมอร์ และพลังงานแบตเตอรี่", tags: ["chemical", "materials", "petroleum"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 5, operationsMgmt: 1 } }
    ]
  },
  {
    id: 22,
    moduleIndex: 3,
    section: "หมวดที่ 3: ฮาร์ดแวร์ ฟิสิกส์ และกลศาสตร์",
    title: "22. ในการออกแบบแผงวงจรอิเล็กทรอนิกส์ PCB Layout สิ่งใดสำคัญที่สุดในการป้องกันปัญหา EMI?",
    description: "เลือกเทคนิควิศวกรรมอิเล็กทรอนิกส์",
    type: "radio",
    options: [
      { id: "q22_a", label: "การวาง Ground Plane ที่สมบูรณ์และการทำ Impedance Matching ของสายสัญญาณความถี่สูง", detail: "เน้นคุณภาพสัญญาณไฟฟ้าทางกายภาพ", tags: ["electronics", "pcb", "hardware"], competencyBonus: { systemLogic: 3, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 1 } },
      { id: "q22_b", label: "การใส่ Decoupling Capacitors ใกล้ขาไฟเลี้ยงไมโครคอนโทรลเลอร์", detail: "เน้นการจัดการเสถียรภาพแรงดันไฟฟ้า", tags: ["embedded", "electrical"], competencyBonus: { systemLogic: 3, quantitative: 1, hardwarePhysics: 5, operationsMgmt: 1 } },
      { id: "q22_c", label: "การใส่กล่องชีลด์โลหะครอบโมดูลสื่อสารไร้สาย", detail: "เน้นการป้องกันสัญญาณรบกวนด้วยโครงสร้างกายภาพ", tags: ["hardware", "telecom"], competencyBonus: { systemLogic: 1, quantitative: 1, hardwarePhysics: 5, operationsMgmt: 2 } },
      { id: "q22_d", label: "การใช้ซอฟต์แวร์ฟิลเตอร์ทางดิจิทัลกรองความถี่รบกวนออกจากข้อมูลเซ็นเซอร์", detail: "เน้นแก้ปัญหาด้วยซอฟต์แวร์เฟิร์มแวร์", tags: ["software", "embedded"], competencyBonus: { systemLogic: 4, quantitative: 3, hardwarePhysics: 3, operationsMgmt: 1 } }
    ]
  },
  {
    id: 23,
    moduleIndex: 3,
    section: "หมวดที่ 3: ฮาร์ดแวร์ ฟิสิกส์ และกลศาสตร์",
    title: "23. เมื่อต้องการเพิ่มประสิทธิภาพการจ่ายพลังงานในรถยนต์ไฟฟ้า EV คุณเลือกปรับปรุงส่วนใด?",
    description: "เลือกจุดโฟกัสเทคโนโลยียานยนต์ไฟฟ้า",
    type: "radio",
    options: [
      { id: "q23_a", label: "ระบบ Battery Management System และอัลกอริทึมควบคุมการดึงพลังงาน", detail: "เน้นซอฟต์แวร์ควบคุมและการวัดเซลล์แบตเตอรี่", tags: ["automotive", "embedded", "software"], competencyBonus: { systemLogic: 4, quantitative: 2, hardwarePhysics: 4, operationsMgmt: 1 } },
      { id: "q23_b", label: "การออกแบบ Inverter ที่ใช้สารตัวนำ GaN หรือ SiC Semiconductor", detail: "เน้นอิเล็กทรอนิกส์กำลังประสิทธิภาพสูง", tags: ["electrical", "power", "electronics"], competencyBonus: { systemLogic: 3, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 1 } },
      { id: "q23_c", label: "การวิเคราะห์พลศาสตร์อากาศ Aerodynamics ของโครงสร้างตัวถังเพื่อลดแรงต้านลม", detail: "เน้นการออกแบบรูปทรงทางกลศาสตร์", tags: ["mechanical", "aerospace", "automotive"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 5, operationsMgmt: 1 } },
      { id: "q23_d", label: "การพัฒนาเคมีขั่วแบตเตอรี่ชนิด Solid-State เพื่อเพิ่มความหนาแน่นพลังงาน", detail: "เน้นวัสดุศาสตร์และเคมีไฟฟ้า", tags: ["chemical", "materials"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 5, operationsMgmt: 1 } }
    ]
  },
  {
    id: 24,
    moduleIndex: 3,
    section: "หมวดที่ 3: ฮาร์ดแวร์ ฟิสิกส์ และกลศาสตร์",
    title: "24. ในการออกแบบโครงสร้างอาคารรับแรงแผ่นดินไหว ปัจจัยทางวิศวกรรมข้อใดสำคัญที่สุด?",
    description: "เลือกหลักการวิศวกรรมโครงสร้างโยธา",
    type: "radio",
    options: [
      { id: "q24_a", label: "การออกแบบให้โครงสร้างมีความเหนียว Ductility และดูดซับพลังงานสั่นสะเทือนได้ดี", detail: "เน้นการกระจายแรงและการสลายพลังงานแผ่นดินไหว", tags: ["civil", "structure"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 5, operationsMgmt: 1 } },
      { id: "q24_b", label: "การใส่ระบบฐานรากแยกการสั่นสะเทือน Base Isolation System ใต้อาคาร", detail: "เน้นอุปกรณ์กายภาพตัดแรงสั่นสะเทือน", tags: ["civil", "geotechnical"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 2 } },
      { id: "q24_c", label: "การใช้ซอฟต์แวร์จำลอง ETABS คำนวณแรงมวลและคาบการสั่นธรรมชาติของอาคาร", detail: "เน้นคำนวณแบบจำลองคณิตศาสตร์ 3D", tags: ["civil", "software"], competencyBonus: { systemLogic: 4, quantitative: 4, hardwarePhysics: 3, operationsMgmt: 1 } },
      { id: "q24_d", label: "การคุมคุณภาพการผูกเหล็กและเทคอนกรีตหน้างานให้ได้มาตรฐานถูกต้อง 100%", detail: "เน้นการควบคุมคุณภาพการก่อสร้างหน้างาน", tags: ["field", "construction"], competencyBonus: { systemLogic: 1, quantitative: 1, hardwarePhysics: 4, operationsMgmt: 5 } }
    ]
  },
  {
    id: 25,
    moduleIndex: 3,
    section: "หมวดที่ 3: ฮาร์ดแวร์ ฟิสิกส์ และกลศาสตร์",
    title: "25. เมื่อต้องควบคุมแขนกลหุ่นยนต์อุตสาหกรรมให้เคลื่อนที่หยิบจับชิ้นงานได้แม่นยำระดับมิลลิเมตร คุณเน้นอะไร?",
    description: "เลือกแนวทางระบบหุ่นยนต์และเมคคาทรอนิกส์",
    type: "radio",
    options: [
      { id: "q25_a", label: "คำนวณสมการ Inverse Kinematics และวางทิศทางจลน์", detail: "เน้นคณิตศาสตร์และการคำนวณตำแหน่งองศาข้อต่อ", tags: ["robotics", "control"], competencyBonus: { systemLogic: 4, quantitative: 4, hardwarePhysics: 4, operationsMgmt: 0 } },
      { id: "q25_b", label: "เลือกใช้เซอร์โวมอเตอร์ความละเอียดสูงและระบบป้อนกลับระดับ Micro Encoder", detail: "เน้นความแม่นยำระดับอุปกรณ์กายภาพ", tags: ["electronics", "hardware"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 1 } },
      { id: "q25_c", label: "ติดกล้องจับภาพสามมิติ 3D Vision และระบบ Computer Vision ตรวจจับตำแหน่งชิ้นงาน", detail: "เน้นระบบการมองเห็นของหุ่นยนต์ Computer Vision", tags: ["ai", "vision", "robotics"], competencyBonus: { systemLogic: 5, quantitative: 3, hardwarePhysics: 3, operationsMgmt: 1 } },
      { id: "q25_d", label: "ออกแบบฐานติดตั้งแขนกลให้แข็งแรง ไม่เกิดการโยกคลอนหรือสั่นสะเทือนขณะทำงาน", detail: "เน้นความมั่นคงทางกลศาสตร์ฐานราก", tags: ["mechanical", "structure"], competencyBonus: { systemLogic: 1, quantitative: 1, hardwarePhysics: 5, operationsMgmt: 3 } }
    ]
  },
  {
    id: 26,
    moduleIndex: 3,
    section: "หมวดที่ 3: ฮาร์ดแวร์ ฟิสิกส์ และกลศาสตร์",
    title: "26. ในงานออกแบบเครื่องจักรกล คุณเลือกใช้วัสดุใดในการทำชิ้นส่วนทนความร้อนสูงและน้ำหนักเบา?",
    description: "เลือกความรู้ด้านวัสดุศาสตร์วิศวกรรม",
    type: "radio",
    options: [
      { id: "q26_a", label: "โลหะผสมไทเทเนียม Titanium Alloys", detail: "ทนความร้อนสูง ทนการกัดกร่อน และแข็งแรงต่อน้ำหนักสูงมาก", tags: ["aerospace", "materials"], competencyBonus: { systemLogic: 1, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 2 } },
      { id: "q26_b", label: "วัสดุผสมคาร์บอนไฟเบอร์ Carbon Fiber Composites", detail: "น้ำหนักเบามาก ปรับทิศทางความแข็งแรงตามแนวเส้นใยได้", tags: ["automotive", "aerospace"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 1 } },
      { id: "q26_c", label: "เซรามิกอุตสาหกรรม Silicon Carbide หรือ Alumina Ceramics", detail: "ทนอุณหภูมิสูงมากและทนการสึกหรอได้ดีเยี่ยม", tags: ["chemical", "materials"], competencyBonus: { systemLogic: 1, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 2 } },
      { id: "q26_d", label: "โพลีเมอร์พลาสติกวิศวกรรมทนความร้อนสูง PEEK หรือ PTFE", detail: "น้ำหนักเบา ไม่เป็นสนิม ขึ้นรูปง่ายด้วยเครื่องพิมพ์ 3 มิติ", tags: ["mechanical", "materials"], competencyBonus: { systemLogic: 1, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 2 } }
    ]
  },
  {
    id: 27,
    moduleIndex: 3,
    section: "หมวดที่ 3: ฮาร์ดแวร์ ฟิสิกส์ และกลศาสตร์",
    title: "27. เมื่อเกิดปัญหาแรงดันตกอย่างรุนแรงในระบบท่อส่งน้ำมันระยะไกล คุณเลือกแก้ไขอย่างไร?",
    description: "เลือกโซลูชันวิศวกรรมของไหลและท่อส่ง",
    type: "radio",
    options: [
      { id: "q27_a", label: "คำนวณและเพิ่มสถานีอัดความดัน Booster Pump Station ตามระยะทางที่เหมาะสม", detail: "เน้นแก้ไขด้วยอุปกรณ์เพิ่มพลังงานของไหล", tags: ["piping", "petroleum", "mechanical"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 5, operationsMgmt: 2 } },
      { id: "q27_b", label: "ขยายขนาดเส้นผ่านศูนย์กลางท่อเพื่อลด Friction Loss", detail: "เน้นลดการสูญเสียแรงดันตามหลักกลศาสตร์ของไหล", tags: ["civil", "chemical", "water"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 5, operationsMgmt: 2 } },
      { id: "q27_c", label: "ใช้สารเพิ่มความลื่นไหล Drag Reducing Agents ผสมในของเหลว", detail: "เน้นแก้ไขด้วยคุณสมบัติทางเคมีของสาร", tags: ["chemical", "materials"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 4, operationsMgmt: 3 } },
      { id: "q27_d", label: "ติดตั้งเซ็นเซอร์ตรวจจับการรั่วซึมของท่อด้วยระบบคอมพิวเตอร์แบบ Real-Time", detail: "เน้นเฝ้าระวังความเสียหายของท่อด้วยระบบดิจิทัล", tags: ["software", "devops", "iot"], competencyBonus: { systemLogic: 4, quantitative: 2, hardwarePhysics: 3, operationsMgmt: 3 } }
    ]
  },
  {
    id: 28,
    moduleIndex: 3,
    section: "หมวดที่ 3: ฮาร์ดแวร์ ฟิสิกส์ และกลศาสตร์",
    title: "28. ในการออกแบบสถานีไฟฟ้าแรงสูง High-Voltage Substation ความท้าทายหลักคืออะไร?",
    description: "เลือกประเด็นวิศวกรรมไฟฟ้ากำลัง",
    type: "radio",
    options: [
      { id: "q28_a", label: "การออกแบบระบบ Protection Relays เพื่อตัดไฟใน 0.01 วินาทีเมื่อเกิดลัดวงจร", detail: "เน้นความปลอดภัยและความเร็วในการตัดวงจรไฟฟ้าแรงสูง", tags: ["electrical", "power"], competencyBonus: { systemLogic: 4, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 1 } },
      { id: "q28_b", label: "การออกแบบระยะห่างฉนวน Insulation Clearance เพื่อป้องกัน Arc Flash", detail: "เน้นระยะห่างและความปลอดภัยทางกายภาพ", tags: ["electrical", "safety"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 3 } },
      { id: "q28_c", label: "การเลือกหม้อแปลงไฟฟ้ากำลังที่มีประสิทธิภาพสูงและระบบระบายความร้อนที่ดี", detail: "เน้นการจัดการความร้อนและลดการสูญเสียกำลังไฟฟ้า", tags: ["power", "mechanical"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 2 } },
      { id: "q28_d", label: "การเชื่อมต่อระบบควบคุมอัตโนมัติ SCADA สั่งการระยะไกลผ่านไฟเบอร์ออปติก", detail: "เน้นระบบควบคุมและไอทีของสถานีไฟฟ้า", tags: ["automation", "telecom"], competencyBonus: { systemLogic: 4, quantitative: 1, hardwarePhysics: 3, operationsMgmt: 3 } }
    ]
  },
  {
    id: 29,
    moduleIndex: 3,
    section: "หมวดที่ 3: ฮาร์ดแวร์ ฟิสิกส์ และกลศาสตร์",
    title: "29. เมื่อต้องออกแบบส่วนควบคุมปีกอากาศยาน Aileron Actuator สิ่งใดคือหัวใจสำคัญ?",
    description: "เลือกหลักการวิศวกรรมการบินและอวกาศ",
    type: "radio",
    options: [
      { id: "q29_a", label: "ระบบควบคุมการบินแบบซ้ำซ้อน Redundant Fly-by-Wire Control", detail: "มีระบบสำรอง 3 ชุดป้องกันเหตุขัดข้องกลางอากาศ", tags: ["aerospace", "control", "software"], competencyBonus: { systemLogic: 5, quantitative: 2, hardwarePhysics: 4, operationsMgmt: 1 } },
      { id: "q29_b", label: "การวิเคราะห์ Fatigue Analysis จากการขยับปีกนับล้านรอบ", detail: "เน้นป้องกันการหักร้าวของโครงสร้างปีก", tags: ["aerospace", "materials", "mechanical"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 5, operationsMgmt: 1 } },
      { id: "q29_c", label: "การออกแบบตามหลักอากาศกลศาสตร์เพื่อลดแรงต้าน Drag Reduction", detail: "เน้นรูปร่างการไหลของอากาศ", tags: ["aerospace", "cfd"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 5, operationsMgmt: 1 } },
      { id: "q29_d", label: "การปฏิบัติตามคู่มือและมาตรฐานอนุมัติการบินสากล FAA และ EASA Compliance", detail: "เน้นการทดสอบผ่านรับรองมาตรฐานกฎหมายการบิน", tags: ["safety", "management"], competencyBonus: { systemLogic: 1, quantitative: 1, hardwarePhysics: 3, operationsMgmt: 5 } }
    ]
  },
  {
    id: 30,
    moduleIndex: 3,
    section: "หมวดที่ 3: ฮาร์ดแวร์ ฟิสิกส์ และกลศาสตร์",
    title: "30. ในการออกแบบระบบปรับอากาศอาคารสูง HVAC Chiller Plant การลดค่าใช้จ่ายพลังงานทำอย่างไร?",
    description: "เลือกโซลูชันวิศวกรรมพลังงานและปรับอากาศ",
    type: "radio",
    options: [
      { id: "q30_a", label: "ใช้อัลกอริทึมพยากรณ์ภาระความร้อนล่วงหน้าและปรับอุณหภูมิน้ำเย็นชิลเลอร์อัตโนมัติ Smart Building", detail: "เน้นซอฟต์แวร์ควบคุมอัจฉริยะ Smart Building", tags: ["hvac", "software", "ai"], competencyBonus: { systemLogic: 4, quantitative: 3, hardwarePhysics: 3, operationsMgmt: 2 } },
      { id: "q30_b", label: "ติดตั้งระบบกักเก็บความเย็นด้วยน้ำแข็ง Thermal Ice Storage ในช่วงค่าไฟถูก Off-Peak", detail: "เน้นการย้ายโหลดพลังงานด้วยฮาร์ดแวร์กายภาพ", tags: ["hvac", "power", "mechanical"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 3 } },
      { id: "q30_c", label: "เลือกใช้เครื่องทำน้ำเย็นชนิดอินเวอร์เตอร์และหุ้มฉนวนกันความร้อนท่อน้ำอย่างหนา", detail: "เน้นปรับปรุงประสิทธิภาพอุปกรณ์ฮาร์ดแวร์", tags: ["mechanical", "electrical"], competencyBonus: { systemLogic: 1, quantitative: 1, hardwarePhysics: 5, operationsMgmt: 3 } },
      { id: "q30_d", label: "ทำสัญญาประกันการประหยัดพลังงาน ESCO Contract ให้บริษัทภายนอกดูแล", detail: "เน้นการบริหารจัดการสัญญาและเป้าหมายการประหยัด", tags: ["management", "energy"], competencyBonus: { systemLogic: 1, quantitative: 2, hardwarePhysics: 1, operationsMgmt: 5 } }
    ]
  },

  // ==================== MODULE 4: PROCESS MANAGEMENT, QUALITY & OPERATIONS (Q31 - Q40) ====================
  {
    id: 31,
    moduleIndex: 4,
    section: "หมวดที่ 4: การบริหารกระบวนการ และคุณภาพ",
    title: "31. เมื่อเกิดคอขวด Bottleneck ในสายการผลิต คุณเลือกใช้เครื่องมืออุตสาหการใด?",
    description: "เลือกเทคนิควิศวกรรมอุตสาหการเพื่อขจัดคอขวด",
    type: "radio",
    options: [
      { id: "q31_a", label: "ทำ Line Balancing คำนวณ Takt Time และกระจายภาระงานในแต่ละสถานีใหม่", detail: "เน้นความสมดุลของเวลาในการผลิตในแต่ละจุด", tags: ["industrial", "quality"], competencyBonus: { systemLogic: 3, quantitative: 3, hardwarePhysics: 1, operationsMgmt: 5 } },
      { id: "q31_b", label: "นำแขนกลหุ่นยนต์อัตโนมัติมาติดตั้งเสริมแทนแรงงานคนตรงจุดคอขวด", detail: "เน้นแก้ปัญหาด้วยการลงทุนหุ่นยนต์และเทคโนโลยี", tags: ["robotics", "automation"], competencyBonus: { systemLogic: 3, quantitative: 1, hardwarePhysics: 5, operationsMgmt: 3 } },
      { id: "q31_c", label: "ใช้ซอฟต์แวร์จำลอง Arena หรือ FlexSim จำลองการไหลของชิ้นงานและทดสอบสภาวะ", detail: "เน้นทำซิมมูเลชันด้วยคอมพิวเตอร์ก่อนแก้จริง", tags: ["industrial", "software"], competencyBonus: { systemLogic: 4, quantitative: 4, hardwarePhysics: 1, operationsMgmt: 4 } },
      { id: "q31_d", label: "จัดกิจกรรม Kaizen และ SMED ลดเวลาการปรับเปลี่ยนแม่พิมพ์เครื่องจักรลงให้เหลือต่ำกว่า 10 นาที", detail: "เน้นการปรับปรุงอย่างต่อเนื่องตามแนวคิด Lean", tags: ["industrial", "lean"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 2, operationsMgmt: 5 } }
    ]
  },
  {
    id: 32,
    moduleIndex: 4,
    section: "หมวดที่ 4: การบริหารกระบวนการ และคุณภาพ",
    title: "32. ในการบริหารคลังสินค้าอุตสาหกรรม Warehouse Management คุณเน้นสิ่งใดมากที่สุด?",
    description: "เลือกยุทธศาสตร์คลังสินค้าและโลจิสติกส์",
    type: "radio",
    options: [
      { id: "q32_a", label: "การนำระบบคลังสินค้าอัตโนมัติ AS/RS และหุ่นยนต์ AGV หรือ AMR ขนย้ายสินค้ามาใช้", detail: "เน้นการจัดเก็บและหยิบสินค้าอัตโนมัติความเร็วสูง", tags: ["automation", "robotics", "logistics"], competencyBonus: { systemLogic: 3, quantitative: 1, hardwarePhysics: 5, operationsMgmt: 4 } },
      { id: "q32_b", label: "การใช้ซอฟต์แวร์ WMS และระบบสแกนบาร์โค้ดหรือ RFID เพื่อความแม่นยำสต็อก 100%", detail: "เน้นความถูกต้องของข้อมูลดิจิทัลและซอฟต์แวร์", tags: ["supply_chain", "software"], competencyBonus: { systemLogic: 4, quantitative: 3, hardwarePhysics: 1, operationsMgmt: 5 } },
      { id: "q32_c", label: "การทำ Inventory Optimization คำนวณ Safety Stock และ Reorder Point", detail: "เน้นคณิตศาสตร์การเงินและลดต้นทุนจม", tags: ["industrial", "quant"], competencyBonus: { systemLogic: 3, quantitative: 5, hardwarePhysics: 0, operationsMgmt: 5 } },
      { id: "q32_d", label: "การจัดผังคลังสินค้าแบบ ABC Analysis วางสินค้าขายดีไว้ใกล้จุดจัดส่งที่สุด", detail: "เน้นลดระยะเวลาและระยะทางเคลื่อนย้ายแรงงาน", tags: ["industrial", "logistics"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 1, operationsMgmt: 5 } }
    ]
  },
  {
    id: 33,
    moduleIndex: 4,
    section: "หมวดที่ 4: การบริหารกระบวนการ และคุณภาพ",
    title: "33. เมื่อพบว่าชิ้นงานผลิตมีอัตรา Defect Rate สูงกว่าเป้าหมาย คุณแก้ปัญหาอย่างไร?",
    description: "เลือกกระบวนการบริหารคุณภาพ Quality Management",
    type: "radio",
    options: [
      { id: "q33_a", label: "ทำโปรเจกต์ Six Sigma ดำเนินตามกระบวนการ DMAIC และวิเคราะห์สถิติ Minitab", detail: "เน้นการแก้ปัญหาด้วยสถิติขั้นสูงอย่างเป็นขั้นตอน", tags: ["quality", "industrial"], competencyBonus: { systemLogic: 3, quantitative: 5, hardwarePhysics: 1, operationsMgmt: 5 } },
      { id: "q33_b", label: "ติดตั้งระบบตรวจสอบคุณภาพอัตโนมัติด้วยกล้อง Automated Optical Inspection", detail: "เน้นการคัดแยกของเสียออกด้วยปัญญาประดิษฐ์", tags: ["ai", "vision", "automation"], competencyBonus: { systemLogic: 4, quantitative: 2, hardwarePhysics: 4, operationsMgmt: 3 } },
      { id: "q33_c", label: "ออกแบบอุปกรณ์ Poka-Yoke หน้าเครื่องจักรไม่ให้ใส่ชิ้นส่วนผิด", detail: "เน้นอุปกรณ์กายภาพบังคับไม่ให้คนทำผิด", tags: ["mechanical", "industrial"], competencyBonus: { systemLogic: 2, quantitative: 1, hardwarePhysics: 4, operationsMgmt: 5 } },
      { id: "q33_d", label: "ตรวจสอบใบรับรองผลและปฏิเสธล็อตวัตถุดิบจากซัพพลายเออร์ที่ไม่ได้มาตรฐาน", detail: "เน้นคุมคุณภาพตั้งแต่ต้นทางของห่วงโซ่อุปทาน", tags: ["supply_chain", "management"], competencyBonus: { systemLogic: 1, quantitative: 2, hardwarePhysics: 0, operationsMgmt: 5 } }
    ]
  },
  {
    id: 34,
    moduleIndex: 4,
    section: "หมวดที่ 4: การบริหารกระบวนการ และคุณภาพ",
    title: "34. ในการบริหารโครงการขนาดใหญ่ Project Management คุณใช้เครื่องมือใดติดตามความก้าวหน้า?",
    description: "เลือกเทคนิคควบคุมโครงการวิศวกรรม",
    type: "radio",
    options: [
      { id: "q34_a", label: "ใช้ Primavera P6 หรือ MS Project คำนวณ Critical Path Method", detail: "เน้นการคำนวณระยะเวลากิจกรรมและงานที่ไม่ควรมองข้าม", tags: ["civil", "management"], competencyBonus: { systemLogic: 3, quantitative: 3, hardwarePhysics: 1, operationsMgmt: 5 } },
      { id: "q34_b", label: "ใช้ระเบียบวิธี Agile Scrum บน Jira สรุปงานทุก 2 สัปดาห์", detail: "เน้นความยืดหยุ่นและการส่งมอบโปรดักต์รวดเร็ว", tags: ["software", "management"], competencyBonus: { systemLogic: 4, quantitative: 1, hardwarePhysics: 0, operationsMgmt: 5 } },
      { id: "q34_c", label: "ใช้แบบจำลอง 4D BIM จำลองลำดับการก่อสร้างอาคารและตารางเวลา", detail: "เน้นเห็นภาพ 3 มิติคู่กับตารางเวลา", tags: ["civil", "bim"], competencyBonus: { systemLogic: 3, quantitative: 2, hardwarePhysics: 4, operationsMgmt: 4 } },
      { id: "q34_d", label: "ใช้การวิเคราะห์ Earned Value Management ติดตามงบประมาณและเวลา", detail: "เน้นตัวเลขดัชนีชี้วัดต้นทุน CPI และ SPI", tags: ["industrial", "quant"], competencyBonus: { systemLogic: 2, quantitative: 4, hardwarePhysics: 0, operationsMgmt: 5 } }
    ]
  },
  {
    id: 35,
    moduleIndex: 4,
    section: "หมวดที่ 4: การบริหารกระบวนการ และคุณภาพ",
    title: "35. เมื่อต้องวางแผนรับมือกับ Supply Chain Disruption คุณทำอย่างไร?",
    description: "เลือกยุทธศาสตร์ความยืดหยุ่นของห่วงโซ่อุปทาน",
    type: "radio",
    options: [
      { id: "q35_a", label: "ทำ Dual Sourcing กระจายการสั่งซื้อวัตถุดิบจากซัพพลายเออร์หลายราย", detail: "เน้นกระจายความเสี่ยงไม่พึ่งพารายเดียว", tags: ["supply_chain", "management"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 0, operationsMgmt: 5 } },
      { id: "q35_b", label: "ใช้อัลกอริทึม AI พยากรณ์ความเสี่ยงและแจ้งเตือนเหตุการณ์สภาพอากาศและโลจิสติกส์", detail: "เน้นใช้ข้อมูล AI คาดการณ์ความเสี่ยงโลจิสติกส์", tags: ["ai", "data"], competencyBonus: { systemLogic: 4, quantitative: 4, hardwarePhysics: 0, operationsMgmt: 4 } },
      { id: "q35_c", label: "ปรับเปลี่ยนการออกแบบวิศวกรรมให้ใช้ชิ้นส่วนมาตรฐาน Standardized Components", detail: "เน้นออกแบบให้หาอะไหล่ทดแทนง่ายในตลาด", tags: ["mechanical", "electronics"], competencyBonus: { systemLogic: 3, quantitative: 1, hardwarePhysics: 4, operationsMgmt: 4 } },
      { id: "q35_d", label: "เพิ่มสต็อกวัตถุดิบเผื่อฉุกเฉิน Buffer Inventory สำหรับชิ้นส่วนสำคัญสูง", detail: "เน้นความปลอดภัยไว้ก่อนแม้ต้นทุนถือครองจะสูงขึ้น", tags: ["industrial", "operations"], competencyBonus: { systemLogic: 1, quantitative: 2, hardwarePhysics: 1, operationsMgmt: 5 } }
    ]
  },
  {
    id: 36,
    moduleIndex: 4,
    section: "หมวดที่ 4: การบริหารกระบวนการ และคุณภาพ",
    title: "36. การประเมินผลกระทบสิ่งแวดล้อมและสังคม ESG & Sustainability คุณเน้นอะไร?",
    description: "เลือกดัชนีชี้วัดความยั่งยืนองค์กร",
    type: "radio",
    options: [
      { id: "q36_a", label: "การทำ Life Cycle Assessment คำนวณคาร์บอนฟุตพริ้นท์ของผลิตภัณฑ์", detail: "เน้นประเมินมลพิษตั้งแต่เกิดจนถึงย่อยสลาย", tags: ["environmental", "sustainability"], competencyBonus: { systemLogic: 3, quantitative: 4, hardwarePhysics: 2, operationsMgmt: 4 } },
      { id: "q36_b", label: "การเปลี่ยนระบบพลังงานโรงงานมาใช้พลังงานแสงอาทิตย์และชีวมวล 100%", detail: "เน้นลดการปล่อยก๊าซเรือนกระจกด้วยพลังงานทดแทน", tags: ["energy", "electrical"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 4, operationsMgmt: 4 } },
      { id: "q36_c", label: "การวางระบบเศรษฐกิจหมุนเวียน Circular Economy นำขยะกากอุตสาหกรรมกลับมาใช้ใหม่", detail: "เน้นการรีไซเคิลและลดขยะสู่บ่อฝังกลบเป็นศูนย์", tags: ["chemical", "environmental"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 3, operationsMgmt: 5 } },
      { id: "q36_d", label: "การจัดทำรายงาน ESG และรับรองมาตรฐาน ISO 14001 หรือ ISO 50001", detail: "เน้นการยกระดับมาตรฐานความยั่งยืนสากล", tags: ["management", "quality"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 0, operationsMgmt: 5 } }
    ]
  },
  {
    id: 37,
    moduleIndex: 4,
    section: "หมวดที่ 4: การบริหารกระบวนการ และคุณภาพ",
    title: "37. เมื่อต้องบริหารจัดการความปลอดภัยในโรงงาน หรือหน้างานก่อสร้าง คุณทำอย่างไร?",
    description: "เลือกแนวปฏิบัติด้านความปลอดภัยทางวิศวกรรม",
    type: "radio",
    options: [
      { id: "q37_a", label: "ทำประเมินความเสี่ยง Job Safety Analysis และจัดฝึกอบรมความปลอดภัยทุกวัน", detail: "เน้นสร้างวัฒนธรรมความปลอดภัยและระเบียบปฏิบัติ", tags: ["safety", "construction"], competencyBonus: { systemLogic: 1, quantitative: 1, hardwarePhysics: 2, operationsMgmt: 5 } },
      { id: "q37_b", label: "ติดตั้งเซ็นเซอร์ตรวจจับการไม่สวมหมวกนิรภัยด้วยกล้อง AI อัตโนมัติ", detail: "เน้นเฝ้าระวังความปลอดภัยด้วยเทคโนโลยี AI", tags: ["ai", "vision", "safety"], competencyBonus: { systemLogic: 4, quantitative: 2, hardwarePhysics: 3, operationsMgmt: 4 } },
      { id: "q37_c", label: "ติดตั้งระบบอินเตอร์ล็อกกายภาพ Safety Interlocks ตัดไฟเครื่องจักรทันทีถ้ามีคนเข้าใกล้", detail: "เน้นใช้อุปกรณ์กายภาพป้องกันอุบัติเหตุ", tags: ["automation", "electrical"], competencyBonus: { systemLogic: 3, quantitative: 1, hardwarePhysics: 5, operationsMgmt: 3 } },
      { id: "q37_d", label: "ปฏิบัติตามมาตรฐาน ISO 45001 และทำการตรวจสอบความปลอดภัยโดยผู้เชี่ยวชาญทุกเดือน", detail: "เน้นระบบการตรวจประเมินตามมาตรฐานสากล", tags: ["management", "quality"], competencyBonus: { systemLogic: 1, quantitative: 1, hardwarePhysics: 1, operationsMgmt: 5 } }
    ]
  },
  {
    id: 38,
    moduleIndex: 4,
    section: "หมวดที่ 4: การบริหารกระบวนการ และคุณภาพ",
    title: "38. หากต้องเลือกสไตล์การนำทีมวิศวกร Engineering Leadership คุณเป็นผู้นำแบบใด?",
    description: "เลือกสไตล์การบริหารและนำทีมของคุณ",
    type: "radio",
    options: [
      { id: "q38_a", label: "ผู้นำเชิงเทคนิคลึกซึ้ง Servant Technical Lead: ลุยเขียนโค้ดและแก้ปัญหายากๆ ร่วมกับทีม", detail: "เน้นการนำด้วยความเชี่ยวชาญทางเทคนิคและช่วยเหลือทีม", tags: ["software", "tech_lead"], competencyBonus: { systemLogic: 5, quantitative: 2, hardwarePhysics: 2, operationsMgmt: 3 } },
      { id: "q38_b", label: "ผู้นำเชิงกลยุทธ์และผลลัพธ์ Strategic Outcome Leader: มอบเป้าหมายชัดเจน ให้เสรีภาพในการคิดค้น", detail: "เน้นผลลัพธ์ นวัตกรรม และกระจายอำนาจการตัดสินใจ", tags: ["management", "product"], competencyBonus: { systemLogic: 3, quantitative: 2, hardwarePhysics: 1, operationsMgmt: 5 } },
      { id: "q38_c", label: "ผู้นำเชิงระบบและระเบียบวินัย Process & Discipline Leader: กำหนดกระบวนการและมาตรฐานเป๊ะ", detail: "เน้นความถูกต้อง มาตรฐานสูง และปราศจากความเสี่ยง", tags: ["civil", "industrial"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 3, operationsMgmt: 5 } },
      { id: "q38_d", label: "ผู้นำเชิงสร้างสรรค์และนวัตกรรม Innovative Visionary: ผลักดันไอเดียใหม่ๆ และทดลองสิ่งใหม่ตลอดเวลา", detail: "เน้นการสร้างนวัตกรรมเปลี่ยนโลกและทดลองสิ่งล้ำยุค", tags: ["ai", "robotics", "research"], competencyBonus: { systemLogic: 4, quantitative: 3, hardwarePhysics: 3, operationsMgmt: 3 } }
    ]
  },
  {
    id: 39,
    moduleIndex: 4,
    section: "หมวดที่ 4: การบริหารกระบวนการ และคุณภาพ",
    title: "39. ในการคัดเลือกซัพพลายเออร์ผู้ให้บริการทางวิศวกรรม สิ่งใดสำคัญที่สุด?",
    description: "เลือกเกณฑ์การประเมินพันธมิตรทางธุรกิจ",
    type: "radio",
    options: [
      { id: "q39_a", label: "ความสามารถทางเทคนิคที่เชี่ยวชาญเฉพาะทางสูง และมีผลงานอ้างอิงชัดเจน", detail: "เน้นฝีมือความเชี่ยวชาญทางเทคนิค", tags: ["software", "engineering"], competencyBonus: { systemLogic: 4, quantitative: 2, hardwarePhysics: 3, operationsMgmt: 3 } },
      { id: "q39_b", label: "ราคาเสนอต่ำที่สุดภายใต้เงื่อนไขข้อกำหนดคุณลักษณะ TOR เดียวกัน", detail: "เน้นประหยัดงบประมาณองค์กรสูงสุด", tags: ["industrial", "procurement"], competencyBonus: { systemLogic: 1, quantitative: 3, hardwarePhysics: 0, operationsMgmt: 5 } },
      { id: "q39_c", label: "ใบรับรองมาตรฐานสากล ISO หรือ IATF หรือ ASME และเสถียรภาพทางการเงินของบริษัท", detail: "เน้นความน่าเชื่อถือและความเสี่ยงต่ำ", tags: ["quality", "management"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 2, operationsMgmt: 5 } },
      { id: "q39_d", label: "ความเร็วในการส่งมอบงานและข้อตกลงระดับการให้บริการ SLA เมื่อล่าช้า", detail: "เน้นความตรงต่อเวลาและการคุมระยะเวลา", tags: ["supply_chain", "logistics"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 1, operationsMgmt: 5 } }
    ]
  },
  {
    id: 40,
    moduleIndex: 4,
    section: "หมวดที่ 4: การบริหารกระบวนการ และคุณภาพ",
    title: "40. ในการทำแผนงบประมาณโครงการวิศวกรรม Capital Expenditure คุณจัดสรรอย่างไร?",
    description: "เลือกปรัชญาการบริหารงบประมาณลงทุน",
    type: "radio",
    options: [
      { id: "q40_a", label: "ลงทุน 60% ในโครงสร้างพื้นฐานดิจิทัล เซิร์ฟเวอร์ และเครื่องมือซอฟต์แวร์สมัยใหม่", detail: "เน้นสร้างความพร้อมทางเทคโนโลยีคลาวด์และซอฟต์แวร์", tags: ["cloud", "software"], competencyBonus: { systemLogic: 5, quantitative: 2, hardwarePhysics: 1, operationsMgmt: 3 } },
      { id: "q40_b", label: "ลงทุน 60% ในเครื่องจักร หุ่นยนต์แขนกล และระบบอัตโนมัติอุตสาหกรรม", detail: "เน้นยกระดับศักยภาพฮาร์ดแวร์โรงงาน", tags: ["automation", "robotics"], competencyBonus: { systemLogic: 2, quantitative: 1, hardwarePhysics: 5, operationsMgmt: 4 } },
      { id: "q40_c", label: "ลงทุน 60% ในงานวิจัยและพัฒนา R&D การทดลอง และสิทธิบัตรเทคโนโลยีใหม่", detail: "เน้นสร้างความได้เปรียบทางการแข่งระยะยาว", tags: ["research", "ai"], competencyBonus: { systemLogic: 4, quantitative: 4, hardwarePhysics: 2, operationsMgmt: 2 } },
      { id: "q40_d", label: "ลงทุน 60% ในระบบความปลอดภัย อาคารสถานที่ และการดูแลสิ่งแวดล้อมยั่งยืน", detail: "เน้นสร้างความยั่งยืนและความปลอดภัยองค์กร", tags: ["civil", "environmental"], competencyBonus: { systemLogic: 1, quantitative: 2, hardwarePhysics: 3, operationsMgmt: 5 } }
    ]
  },

  // ==================== MODULE 5: ENGINEERING ETHICS, ENVIRONMENT & LEADERSHIP (Q41 - Q50) ====================
  {
    id: 41,
    moduleIndex: 5,
    section: "หมวดที่ 5: จริยธรรมวิศวกรรม และผู้นำยั่งยืน",
    title: "41. หากผู้บริหารขอให้ลดสเปกวัสดุหรือโครงสร้างลง เพื่อให้โครงการเปิดทันกำหนดและประหยัดงบ คุณทำอย่างไร?",
    description: "เลือกจุดยืนทางจริยธรรมวิศวกรรม Engineering Ethics",
    type: "radio",
    options: [
      { id: "q41_a", label: "ปฏิเสธทันที และทำบันทึกชี้แจงความเสี่ยงด้านความปลอดภัยอย่างเป็นลายลักษณ์อักษร", detail: "ยึดถือความปลอดภัยของสาธารณชนเหนือสิ่งอื่นใด", tags: ["civil", "ethics", "safety"], competencyBonus: { systemLogic: 3, quantitative: 2, hardwarePhysics: 4, operationsMgmt: 3 } },
      { id: "q41_b", label: "เสนอแนวทางวิศวกรรมทางเลือกที่ใช้เทคโนโลยีใหม่เพื่อลดต้นทุนโดยไม่กระทบสเปกความปลอดภัย", detail: "เน้นใช้นวัตกรรมแก้ปัญหาโดยไม่ลดทอนมาตรฐาน", tags: ["engineering", "innovation"], competencyBonus: { systemLogic: 4, quantitative: 3, hardwarePhysics: 3, operationsMgmt: 3 } },
      { id: "q41_c", label: "ใช้แบบจำลองวิเคราะห์ความเสี่ยงและข้อมูลสถิติเพื่อพิสูจน์ให้ผู้บริหารเห็นผลเสียระยะยาว", detail: "เน้นใช้ข้อมูลและสถิติในการโน้มน้าวผู้บริหาร", tags: ["data", "quant"], competencyBonus: { systemLogic: 4, quantitative: 5, hardwarePhysics: 1, operationsMgmt: 3 } },
      { id: "q41_d", label: "ปรึกษาสภาวิศวกรหรือผู้เชี่ยวชาญภายนอกเพื่อให้ความคิดเห็นอิสระเป็นที่ยอมรับ", detail: "เน้นการพึ่งพามาตรฐานและองค์กรวิชาชีพ", tags: ["management", "ethics"], competencyBonus: { systemLogic: 2, quantitative: 1, hardwarePhysics: 2, operationsMgmt: 5 } }
    ]
  },
  {
    id: 42,
    moduleIndex: 5,
    section: "หมวดที่ 5: จริยธรรมวิศวกรรม และผู้นำยั่งยืน",
    title: "42. คุณมีมุมมองอย่างไรเกี่ยวกับการนำข้อมูลส่วนบุคคลของผู้ใช้มาใช้ฝึกฝนโมเดล AI?",
    description: "เลือกจุดยืนด้านจริยธรรม AI และความมั่นคงปลอดภัย",
    type: "radio",
    options: [
      { id: "q42_a", label: "ต้องทำ Data Anonymization และ Differential Privacy ลบข้อมูลระบุตัวตน 100%", detail: "เน้นปกป้องความเป็นส่วนตัวด้วยเทคนิคคณิตศาสตร์และซอฟต์แวร์", tags: ["ai", "cybersecurity"], competencyBonus: { systemLogic: 5, quantitative: 4, hardwarePhysics: 0, operationsMgmt: 2 } },
      { id: "q42_b", label: "ต้องได้รับความยินยอมแบบ Opt-In ชัดเจนจากผู้ใช้เท่านั้นจึงจะสามารถใช้ข้อมูลได้", detail: "เน้นสิทธิและจริยธรรมของผู้บริโภคตามกฎหมาย", tags: ["management", "ethics"], competencyBonus: { systemLogic: 3, quantitative: 2, hardwarePhysics: 0, operationsMgmt: 5 } },
      { id: "q42_c", label: "ควรสร้าง Synthetic Data มาใช้ฝึกฝนแทนการใช้ข้อมูลจริงของผู้ใช้", detail: "เน้นใช้นวัตกรรมสร้างข้อมูลจำลองขึ้นมาเอง", tags: ["data", "ai"], competencyBonus: { systemLogic: 4, quantitative: 4, hardwarePhysics: 0, operationsMgmt: 2 } },
      { id: "q42_d", label: "สามารถใช้ได้หากเป็นการพัฒนาเทคโนโลยีที่เป็นประโยชน์ต่อสาธารณชนโดยรวม", detail: "เน้นประโยชน์สูงสุดต่อสังคมและส่วนรวม", tags: ["research"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 1, operationsMgmt: 4 } }
    ]
  },
  {
    id: 43,
    moduleIndex: 5,
    section: "หมวดที่ 5: จริยธรรมวิศวกรรม และผู้นำยั่งยืน",
    title: "43. ในการแก้ปัญหาภาวะโลกร้อน Global Warming คุณเชื่อว่าวิศวกรรมสาขาใดมีอิมแพคสูงสุด?",
    description: "เลือกทิศทางการพัฒนานวัตกรรมยั่งยืน",
    type: "radio",
    options: [
      { id: "q43_a", label: "วิศวกรรมพลังงานและไฟฟ้า: เปลี่ยนผ่านสู่โซลาร์ Smart Grid และยานยนต์ไฟฟ้า EV", detail: "เน้นเปลี่ยนโครงสร้างพื้นฐานพลังงานสะอาด", tags: ["electrical", "power", "automotive"], competencyBonus: { systemLogic: 3, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 2 } },
      { id: "q43_b", label: "วิศวกรรมเคมีและวัสดุ: คิดค้นการดักจับคาร์บอน CCUS และวัสดุชีวภาพย่อยสลายได้", detail: "เน้นการแก้ไขในระดับโมเลกุลและวัสดุศาสตร์", tags: ["chemical", "materials"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 5, operationsMgmt: 2 } },
      { id: "q43_c", label: "วิศวกรรมสิ่งแวดล้อมและน้ำ: วางระบบบำบัดของเสีย และเศรษฐกิจหมุนเวียน Net-Zero", detail: "เน้นการจัดการสิ่งแวดล้อมและของเสียอุตสาหกรรม", tags: ["environmental", "water"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 3, operationsMgmt: 5 } },
      { id: "q43_d", label: "วิศวกรรมคอมพิวเตอร์และ AI: สร้างระบบมอนิเตอร์คาร์บอนและ Green Cloud ประหยัดพลังงาน", detail: "เน้นใช้อัลกอริทึมและคลาวด์ประหยัดไฟ", tags: ["software", "cloud", "ai"], competencyBonus: { systemLogic: 5, quantitative: 3, hardwarePhysics: 1, operationsMgmt: 3 } }
    ]
  },
  {
    id: 44,
    moduleIndex: 5,
    section: "หมวดที่ 5: จริยธรรมวิศวกรรม และผู้นำยั่งยืน",
    title: "44. เมื่อลูกทีมวิศวกรทำงานผิดพลาดร้ายแรงจนระบบล่ม คุณในฐานะหัวหน้าทีมจะปฏิบัติอย่างไร?",
    description: "เลือกวัฒนธรรมการรับมือกับความล้มเหลว Blameless Culture",
    type: "radio",
    options: [
      { id: "q44_a", label: "จัดประชุม Blameless Post-Mortem หาสาเหตุเชิงระบบโดยไม่โทษบุคคล และสร้าง Guardrails", detail: "เน้นการแก้ปัญหาระดับกระบวนการและเครื่องมือ", tags: ["devops", "management"], competencyBonus: { systemLogic: 5, quantitative: 1, hardwarePhysics: 0, operationsMgmt: 5 } },
      { id: "q44_b", label: "ออกหน้าแทนลูกทีม รับผิดชอบต่อผู้บริหาร และเร่งลงมือแก้ไขระบบด้วยตัวเอง", detail: "เน้นแสดงสภาวะผู้นำและปกป้องทีมงาน", tags: ["management", "leadership"], competencyBonus: { systemLogic: 3, quantitative: 1, hardwarePhysics: 1, operationsMgmt: 5 } },
      { id: "q44_c", label: "ทบทวนการวิเคราะห์ความเสี่ยงและสถิติความผิดพลาดเพื่อปรับเปลี่ยนคู่มือปฏิบัติงาน SOP", detail: "เน้นปรับปรุงเอกสารคู่มือมาตรฐานงาน", tags: ["industrial", "quality"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 1, operationsMgmt: 5 } },
      { id: "q44_d", label: "จัดฝึกอบรมทักษะเทคนิคเฉพาะทางเพิ่มเติมให้ลูกทีมทันทีเพื่อปิดช่องโหว่ความรู้", detail: "เน้นยกระดับทักษะคนในทีม", tags: ["education", "management"], competencyBonus: { systemLogic: 2, quantitative: 1, hardwarePhysics: 1, operationsMgmt: 5 } }
    ]
  },
  {
    id: 45,
    moduleIndex: 5,
    section: "หมวดที่ 5: จริยธรรมวิศวกรรม และผู้นำยั่งยืน",
    title: "45. ในการเรียนรู้เทคโนโลยีใหม่ๆ ที่เปลี่ยนแปลงอย่างรวดเร็ว คุณมีวิธีปรับตัวอย่างไร?",
    description: "เลือกรูปแบบการเรียนรู้และพัฒนาตนเอง Continuous Learning",
    type: "radio",
    options: [
      { id: "q45_a", label: "สร้าง Side Project ทดลองเขียนโค้ดและต่อวงจรจริงด้วยตัวเอง", detail: "เน้นเรียนรู้จากการลงมือทำโปรเจกต์จริง", tags: ["software", "embedded", "robotics"], competencyBonus: { systemLogic: 5, quantitative: 2, hardwarePhysics: 3, operationsMgmt: 2 } },
      { id: "q45_b", label: "อ่านงานวิจัยล่าสุดจาก arXiv หรือ IEEE และติดตาม Whitepapers เทคโนโลยี", detail: "เน้นศึกษาจากทฤษฎีและงานวิจัยระดับโลก", tags: ["research", "ai", "data"], competencyBonus: { systemLogic: 4, quantitative: 5, hardwarePhysics: 1, operationsMgmt: 1 } },
      { id: "q45_c", label: "สอบใบรับรองมาตรฐานวิศวกรรมสากล เช่น AWS หรือ PMP หรือ PE หรือ Cisco หรือ OSCP", detail: "เน้นการการันตีด้วยใบรับรองวิชาชีพสากล", tags: ["cloud", "cybersecurity", "civil"], competencyBonus: { systemLogic: 3, quantitative: 2, hardwarePhysics: 2, operationsMgmt: 4 } },
      { id: "q45_d", label: "เข้าร่วมชุมชนวิศวกรรม งาน Hackathon และแลกเปลี่ยนความรู้กับผู้เชี่ยวชาญ", detail: "เน้นการสร้างเครือข่ายและการแลกเปลี่ยนความรู้", tags: ["community", "management"], competencyBonus: { systemLogic: 2, quantitative: 1, hardwarePhysics: 1, operationsMgmt: 5 } }
    ]
  },
  {
    id: 46,
    moduleIndex: 5,
    section: "หมวดที่ 5: จริยธรรมวิศวกรรม และผู้นำยั่งยืน",
    title: "46. ปัจจัยใดคือตัวตัดสินหลักในการเลือกเข้าทำงานในบริษัทวิศวกรรมของคุณ?",
    description: "เลือกค่านิยมการทำงานที่คุณให้ความสำคัญที่สุด",
    type: "radio",
    options: [
      { id: "q46_a", label: "โอกาสได้ทำงานกับ Cutting-Edge Tech Stack และทีมงานเก่งระดับท็อป", detail: "เน้นการเติบโตทางทักษะเทคนิคและการเรียนรู้", tags: ["software", "ai", "research"], competencyBonus: { systemLogic: 5, quantitative: 3, hardwarePhysics: 2, operationsMgmt: 1 } },
      { id: "q46_b", label: "ความมั่นคงขององค์กร สวัสดิการ และอัตราตอบแทนเงินเดือนที่สูง", detail: "เน้นความมั่นคงทางการเงินและผลตอบแทน", tags: ["management", "finance"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 1, operationsMgmt: 4 } },
      { id: "q46_c", label: "โอกาสได้สร้างผลงานทางวิศวกรรมขนาดใหญ่ที่มีผลกระทบต่อประเทศหรือโลก", detail: "เน้นสร้างอิมแพคและผลงานที่น่าภาคภูมิใจ", tags: ["civil", "energy", "petroleum"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 4, operationsMgmt: 3 } },
      { id: "q46_d", label: "วัฒนธรรมองค์กรที่ดี สมดุลการทำงาน Work-Life Balance และความปลอดภัย", detail: "เน้นคุณภาพชีวิตและความสุขในการทำงาน", tags: ["industrial", "safety"], competencyBonus: { systemLogic: 1, quantitative: 1, hardwarePhysics: 1, operationsMgmt: 5 } }
    ]
  },
  {
    id: 47,
    moduleIndex: 5,
    section: "หมวดที่ 5: จริยธรรมวิศวกรรม และผู้นำยั่งยืน",
    title: "47. เมื่อต้องเผชิญกับแรงกดดันด้านเวลาส่งมอบงานที่กระชั้นชิดอย่างมาก คุณจัดการอย่างไร?",
    description: "เลือกยุทธศาสตร์บริหารเวลาและคุณภาพงาน",
    type: "radio",
    options: [
      { id: "q47_a", label: "ตัดฟีเจอร์ที่ไม่จำเป็นออก Scope Reduction ส่งมอบเฉพาะส่วนแกนหลัก MVP ที่เสถียรก่อน", detail: "เน้นส่งมอบของที่ใช้งานได้จริงตามกำหนดเวลา", tags: ["software", "product"], competencyBonus: { systemLogic: 5, quantitative: 1, hardwarePhysics: 0, operationsMgmt: 4 } },
      { id: "q47_b", label: "ขออนุมัติเพิ่มกำลังคนและทรัพยากรเครื่องจักร Crashing Schedule เพื่อเร่งความเร็ว", detail: "เน้นใช้ทรัพยากรการเงินและคนเร่งสปีดงาน", tags: ["civil", "management"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 2, operationsMgmt: 5 } },
      { id: "q47_c", label: "ทำงานขนานกันไปในแต่ละส่วน Fast Tracking พร้อมรับความเสี่ยงที่อาจต้องแก้งานบางส่วน", detail: "เน้นซ้อนทับขั้นตอนงานเพื่อย่นเวลา", tags: ["industrial", "operations"], competencyBonus: { systemLogic: 3, quantitative: 2, hardwarePhysics: 2, operationsMgmt: 5 } },
      { id: "q47_d", label: "เจรจาขยายกำหนดเวลาส่งมอบ โดยแสดงข้อมูลและเหตุผลทางเทคนิคที่ไม่อาจเร่งได้", detail: "เน้นรักษาคุณภาพมาตรฐานวิศวกรรม 100%", tags: ["quality", "ethics"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 2, operationsMgmt: 4 } }
    ]
  },
  {
    id: 48,
    moduleIndex: 5,
    section: "หมวดที่ 5: จริยธรรมวิศวกรรม และผู้นำยั่งยืน",
    title: "48. ในการทำเอกสารรายงานทางวิศวกรรม Technical Documentation คุณมองอย่างไร?",
    description: "เลือกความสำคัญของการจัดทำเอกสารวิศวกรรม",
    type: "radio",
    options: [
      { id: "q48_a", label: "สำคัญมาก ต้องเขียนอธิบายสถาปัตยกรรม Diagram และ API Docs ให้คนอื่นอ่านเข้าใจง่าย", detail: "เน้นการส่งต่อความรู้และการสื่อสารในทีมพัฒนา", tags: ["software", "devops"], competencyBonus: { systemLogic: 5, quantitative: 1, hardwarePhysics: 0, operationsMgmt: 4 } },
      { id: "q48_b", label: "สำคัญมาก ต้องเก็บบันทึกข้อมูลสถิติ ค่าตัวเลขการวัด และผลการทดลองทางวิทยาศาสตร์ครบถ้วน", detail: "เน้นความถูกต้องของข้อมูลดิบและผลทดลอง", tags: ["research", "data"], competencyBonus: { systemLogic: 3, quantitative: 5, hardwarePhysics: 1, operationsMgmt: 2 } },
      { id: "q48_c", label: "สำคัญมาก ต้องจัดเก็บแบบ As-Built 2D/3D และคู่มือการบำรุงรักษาตามกฎหมาย", detail: "เน้นเอกสารมาตรฐานการส่งมอบโครงการก่อสร้างหรือโรงงาน", tags: ["civil", "mechanical"], competencyBonus: { systemLogic: 2, quantitative: 1, hardwarePhysics: 4, operationsMgmt: 5 } },
      { id: "q48_d", label: "เน้นสร้างโค้ดและระบบที่สื่อความหมายด้วยตัวเอง Self-Documenting ลดเอกสารซ้ำซ้อน", detail: "เน้นความกระชับและไม่สร้างภาระการทำเอกสาร", tags: ["code", "agile"], competencyBonus: { systemLogic: 4, quantitative: 1, hardwarePhysics: 0, operationsMgmt: 3 } }
    ]
  },
  {
    id: 49,
    moduleIndex: 5,
    section: "หมวดที่ 5: จริยธรรมวิศวกรรม และผู้นำยั่งยืน",
    title: "49. คุณคิดว่าคุณสมบัติใดสำคัญที่สุดสำหรับการเป็นสุดยอดวิศวกรแห่งอนาคต?",
    description: "เลือกคุณสมบัติหลักวิศวกรยุคใหม่",
    type: "radio",
    options: [
      { id: "q49_a", label: "ความสามารถในการเรียนรู้เทคโนโลยีใหม่และคิดค้นสถาปัตยกรรมระบบขั้นสูงได้อย่างรวดเร็ว", detail: "เน้นความยืดหยุ่นทางปัญญาและความเชี่ยวชาญเทค", tags: ["software", "ai", "cloud"], competencyBonus: { systemLogic: 5, quantitative: 3, hardwarePhysics: 1, operationsMgmt: 2 } },
      { id: "q49_b", label: "ความแม่นยำในการคิดคำนวณ การวิเคราะห์ข้อมูลเชิงปริมาณ และหลักการวิทยาศาสตร์ลึกซึ้ง", detail: "เน้นความแม่นยำทางวิชาการและสถิติ", tags: ["data", "quant", "research"], competencyBonus: { systemLogic: 3, quantitative: 5, hardwarePhysics: 2, operationsMgmt: 1 } },
      { id: "q49_c", label: "ฝีมือความเชี่ยวชาญในการสร้าง ปรับแต่ง และผสมผสานระบบฮาร์ดแวร์กายภาพอย่างสมบูรณ์แบบ", detail: "เน้นทักษะการสร้างและควบคุมอุปกรณ์จริง", tags: ["robotics", "embedded", "mechanical"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 1 } },
      { id: "q49_d", label: "สภาวะผู้นำ การบริหารจัดการกระบวนการ ความเป็นยั่งยืน และจริยธรรมวิชาชีพเปี่ยมล้น", detail: "เน้นการนำองค์กรสู่ความสำเร็จอย่างยั่งยืน", tags: ["management", "safety", "ethics"], competencyBonus: { systemLogic: 1, quantitative: 2, hardwarePhysics: 1, operationsMgmt: 5 } }
    ]
  },
  {
    id: 50,
    moduleIndex: 5,
    section: "หมวดที่ 5: จริยธรรมวิศวกรรม และผู้นำยั่งยืน",
    title: "50. หากคุณสามารถฝากข้อความถึงตัวเองในอีก 10 ปีข้างหน้า คุณอยากเห็นตัวเองเป็นอะไร?",
    description: "เลือกภาพสะท้อนอนาคตสายอาชีพของคุณ",
    type: "radio",
    options: [
      { id: "q50_a", label: "เป็น Tech Founder หรือ CTO สร้างนวัตกรรมซอฟต์แวร์เปลี่ยนโลก", detail: "มุ่งมั่นเป็นผู้นำสายเทคโนโลยีและซอฟต์แวร์ระดับโลก", tags: ["software", "cloud", "ai", "cto"], competencyBonus: { systemLogic: 5, quantitative: 3, hardwarePhysics: 2, operationsMgmt: 3 } },
      { id: "q50_b", label: "เป็น Principal Scientist หรือ AI Fellow คิดค้นทฤษฎีและอัลกอริทึมใหม่ของโลก", detail: "มุ่งมั่นเป็นนักวิทยาศาสตร์และนักวิจัยชั้นแนวหน้า", tags: ["ai", "research", "quant"], competencyBonus: { systemLogic: 4, quantitative: 5, hardwarePhysics: 2, operationsMgmt: 1 } },
      { id: "q50_c", label: "เป็น Chief Infrastructure Director ผู้ควบคุมมหาโครงการโครงสร้างพื้นฐานระดับชาติ", detail: "มุ่งมั่นสร้างมหาอาคาร ยานยนต์ และอุตสาหกรรมชาติ", tags: ["civil", "mechanical", "electrical", "director"], competencyBonus: { systemLogic: 2, quantitative: 2, hardwarePhysics: 5, operationsMgmt: 4 } },
      { id: "q50_d", label: "เป็น CEO หรือ Managing Director ขับเคลื่อนอุตสาหกรรมยั่งยืนสู่ Net-Zero", detail: "มุ่งมั่นเป็นผู้บริหารสูงสุดผู้นำองค์กรยั่งยืน", tags: ["management", "industrial", "environmental", "ceo"], competencyBonus: { systemLogic: 2, quantitative: 3, hardwarePhysics: 1, operationsMgmt: 5 } }
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
  let systemLogic = 20;
  let quantitative = 20;
  let hardwarePhysics = 20;
  let operationsMgmt = 20;

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

  systemLogic = Math.min(99, Math.round(systemLogic));
  quantitative = Math.min(99, Math.round(quantitative));
  hardwarePhysics = Math.min(99, Math.round(hardwarePhysics));
  operationsMgmt = Math.min(99, Math.round(operationsMgmt));

  let topTag = "software";
  let maxCount = 0;
  Object.entries(tagCounts).forEach(([tag, count]) => {
    if (count > maxCount) {
      maxCount = count;
      topTag = tag;
    }
  });

  if (topTag === "software" || topTag === "code" || topTag === "backend" || topTag === "web" || topTag === "cto") {
    return {
      primaryRoleTitle: "วิศวกรซอฟต์แวร์และสถาปัตยกรรมดิจิทัล (Software & Systems Architect)",
      primaryCategory: "คอมพิวเตอร์ & ซอฟต์แวร์",
      matchScore: 98,
      description: "จากผลการวิเคราะห์สมรรถนะ คุณมีความโดดเด่นสูงสุดด้านตรรกะเชิงระบบ (System Logic) และสถาปัตยกรรมดิจิทัล มีความคิดเชิงวิเคราะห์ที่ลึกซึ้งในการแก้ปัญหาอัลกอริทึม เหมาะสมอย่างยิ่งสำหรับบทบาทการเป็นผู้นำการพัฒนาซอฟต์แวร์ คลาวด์ และแพลตฟอร์มระดับองค์กร",
      radarScores: { systemLogic, quantitative, hardwarePhysics, operationsMgmt },
      recommendedSkills: ["System Architecture & Distributed Systems", "High-Performance Go / Rust / Java", "Cloud Native (Kubernetes / AWS)", "PostgreSQL Optimization & Microservices"],
      careerMilestones: ["Junior Software Engineer", "Senior Software Architect", "Principal Systems Specialist", "Chief Technology Officer (CTO)"]
    };
  } else if (topTag === "ai" || topTag === "data" || topTag === "quant" || topTag === "research") {
    return {
      primaryRoleTitle: "วิศวกรปัญญาประดิษฐ์และวิทยาการข้อมูล (AI & Data Science Specialist)",
      primaryCategory: "ข้อมูล & ปัญญาประดิษฐ์",
      matchScore: 97,
      description: "ผลการประเมินชี้ชัดว่าคุณมีความถนัดสูงสุดในด้านการวิเคราะห์เชิงปริมาณ (Quantitative Reasoning) มีทักษะคณิตศาสตร์ สถิติ และการสร้างแบบจำลองปัญญาประดิษฐ์ เหมาะสมอย่างยิ่งกับการพัฒนาโมเดล AI และ LLMs การทำวิจัยข้อมูล และการวิเคราะห์ข้อมูลความแม่นยำสูง",
      radarScores: { systemLogic, quantitative, hardwarePhysics, operationsMgmt },
      recommendedSkills: ["Python & PyTorch / CUDA", "Generative AI & LLM Fine-Tuning", "Data Pipelines (Spark / Airflow)", "Vector Databases & MLOps Infrastructure"],
      careerMilestones: ["Data Scientist", "Senior AI Engineer", "Head of AI & Data Science", "Chief Data Officer (CDO)"]
    };
  } else if (topTag === "cloud" || topTag === "devops" || topTag === "cybersecurity") {
    return {
      primaryRoleTitle: "วิศวกรคลาวด์และความมั่นคงปลอดภัย (Cloud & DevOps Infrastructure Architect)",
      primaryCategory: "คลาวด์ & ความมั่นคงปลอดภัย",
      matchScore: 96,
      description: "คุณได้รับประเมินว่าเป็นผู้เชี่ยวชาญด้านการวางรากฐานระบบคลาวด์และความมั่นคงปลอดภัยไซเบอร์ มีทักษะในการออกแบบโครงสร้างพื้นฐานระดับองค์กร ระบบอัตโนมัติ CI/CD และการควบคุมความเสถียรของระบบในระดับ 99.99%",
      radarScores: { systemLogic, quantitative, hardwarePhysics, operationsMgmt },
      recommendedSkills: ["Terraform & Infrastructure as Code", "Kubernetes Multi-Cluster Orchestration", "DevSecOps & SAST/DAST Automation", "AWS / Azure Cloud Solutions"],
      careerMilestones: ["Cloud Engineer", "DevOps Architect", "Site Reliability Lead (SRE)", "Head of Cloud & Cybersecurity"]
    };
  } else if (topTag === "robotics" || topTag === "embedded" || topTag === "electronics" || topTag === "automation") {
    return {
      primaryRoleTitle: "วิศวกรหุ่นยนต์และระบบฝังตัวอัจฉริยะ (Robotics & Embedded Systems Engineer)",
      primaryCategory: "หุ่นยนต์ & เมคคาทรอนิกส์",
      matchScore: 97,
      description: "ผลประเมินแสดงจุดแข็งที่เหนือชั้นในด้านการผสานฮาร์ดแวร์กายภาพและซอฟต์แวร์ (Hardware & Physical Integration) คุณเข้าใจการทำงานของไมโครคอนโทรลเลอร์ เซ็นเซอร์ แขนกลหุ่นยนต์ และระบบยานยนต์ไฟฟ้า EV เป็นอย่างดี",
      radarScores: { systemLogic, quantitative, hardwarePhysics, operationsMgmt },
      recommendedSkills: ["C/C++ & FreeRTOS Firmware", "ROS2 Robotics Framework", "Altium PCB Layout & Signal Integrity", "Industrial PLC & SCADA Systems"],
      careerMilestones: ["Embedded Firmware Engineer", "Robotics Lead Architect", "Automation R&D Manager", "Chief Hardware Officer"]
    };
  } else if (topTag === "civil" || topTag === "structure" || topTag === "geotechnical" || topTag === "director") {
    return {
      primaryRoleTitle: "วิศวกรโยธาและแบบจำลองโครงสร้างสารสนเทศ (Civil Structural & BIM Engineer)",
      primaryCategory: "โยธา & โครงสร้าง",
      matchScore: 96,
      description: "ผลการทดสอบประเมินว่าคุณมีความสามารถโดดเด่นในด้านกลศาสตร์โครงสร้าง การคำนวณสามมิติ และการคุมงานก่อสร้างหน้างาน เหมาะสำหรับบทบาทในการออกแบบมหาอาคาร โครงสร้างพื้นฐานทางคมนาคม และโครงการระดับชาติ",
      radarScores: { systemLogic, quantitative, hardwarePhysics, operationsMgmt },
      recommendedSkills: ["Autodesk Revit 4D BIM", "ETABS & FEA Structural Calculations", "Primavera P6 Project Scheduling", "Construction Site Safety & Contract Mgt"],
      careerMilestones: ["Site Engineer", "Senior Structural Consultant", "Construction Project Director", "Infrastructure Managing Lead"]
    };
  } else if (topTag === "mechanical" || topTag === "automotive" || topTag === "aerospace") {
    return {
      primaryRoleTitle: "วิศวกรเครื่องกลและยานยนต์ขั้นสูง (Mechanical & EV Powertrain Engineer)",
      primaryCategory: "เครื่องกล & ยานยนต์",
      matchScore: 95,
      description: "คุณได้รับประเมินว่ามีสมรรถนะสูงด้านกลศาสตร์เครื่องกล การจำลองความเค้นและความร้อน (FEA/CFD) ตลอดจนเทคโนโลยียานยนต์ไฟฟ้า EV เหมาะสำหรับบทบาทการเป็นวิศวกรออกแบบชิ้นส่วนอุตสาหกรรมและอากาศยาน",
      radarScores: { systemLogic, quantitative, hardwarePhysics, operationsMgmt },
      recommendedSkills: ["SolidWorks & CATIA 3D Design", "Ansys FEA & CFD Thermal Simulation", "EV Battery Management System (BMS)", "GD&T & Precision DFM Tolerances"],
      careerMilestones: ["Mechanical Designer", "Senior FEA Specialist", "EV Powertrain R&D Lead", "Chief Mechanical Engineer"]
    };
  } else if (topTag === "industrial" || topTag === "supply_chain" || topTag === "quality" || topTag === "ceo") {
    return {
      primaryRoleTitle: "วิศวกรอุตสาหการและบริหารห่วงโซ่อุปทาน (Industrial & Supply Chain Director)",
      primaryCategory: "อุตสาหการ & โลจิสติกส์",
      matchScore: 97,
      description: "ผลประเมินแสดงความโดดเด่นสูงสุดด้านการบริหารจัดการกระบวนการและประสิทธิภาพการดำเนินงาน (Operations & Management) คุณมีวิสัยทัศน์ในการขจัดความสูญเสีย การเพิ่มผลผลิต Lean Six Sigma และการวางระบบคลังสินค้าโลจิสติกส์",
      radarScores: { systemLogic, quantitative, hardwarePhysics, operationsMgmt },
      recommendedSkills: ["Lean Six Sigma Black Belt", "Arena Simulation & Optimization", "SAP ERP & Supply Chain Analytics", "Statistical Quality Control (SQC)"],
      careerMilestones: ["Industrial Engineer", "Continuous Improvement Manager", "Plant Operations Director", "Chief Executive Officer (CEO)"]
    };
  } else {
    return {
      primaryRoleTitle: "วิศวกรเคมีและกระบวนการยั่งยืน (Chemical Process & Sustainability Engineer)",
      primaryCategory: "เคมี & สิ่งแวดล้อม",
      matchScore: 95,
      description: "ผลประเมินสรุปว่าคุณมีความถนัดลึกซึ้งในกระบวนการทางเคมี สมดุลมวลสาร อุณหโมดายนิกส์ และการขับเคลื่อนสิ่งแวดล้อมยั่งยืน Net-Zero เหมาะสมอย่างยิ่งกับการคุมโรงงานปิโตรเคมี โรงกลั่น และการพัฒนาวัสดุอนาคต",
      radarScores: { systemLogic, quantitative, hardwarePhysics, operationsMgmt },
      recommendedSkills: ["Aspen HYSYS Process Design", "HAZOP Safety Standards", "ISO 14001 & Life Cycle Assessment", "Battery Electrochemistry & Bio-Materials"],
      careerMilestones: ["Process Engineer", "Production Superintendent", "Refinery Operations Manager", "Chief Sustainability Officer (CSO)"]
    };
  }
}
