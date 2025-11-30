import React from 'react';
import { SocialLink, ResearchInterest, ExperienceItem, PublicationItem, ProjectItem, AchievementItem, TrainingItem, EducationItem } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/ono1025', icon: 'fa-brands fa-github', color: 'bg-slate-800' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mahfuz-ahmed-anik-a5a6b5215/', icon: 'fa-brands fa-linkedin', color: 'bg-blue-700' },
  { name: 'Kaggle', url: 'https://www.kaggle.com/mahfuzahmedanik', icon: 'fa-brands fa-kaggle', color: 'bg-sky-500' },
  { name: 'OpenReview', url: 'https://openreview.net/profile?id=%7EMahfuz_Ahmed_Anik1', icon: 'fa-solid fa-bolt', color: 'bg-red-800' },
  { name: 'arXiv', url: 'https://arxiv.org/abs/2504.03692', icon: 'fa-solid fa-flask', color: 'bg-red-600' },
  { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=FQcncXEAAAAJ&hl=en&authuser=1', icon: 'fa-solid fa-graduation-cap', color: 'bg-blue-600' },
  { name: 'Semantic Scholar', url: 'https://www.semanticscholar.org/author/Mahfuz-Ahmed-Anik/2349239770', icon: 'fa-solid fa-book', color: 'bg-slate-600' },
  { name: 'ACL Anthology', url: 'https://aclanthology.org/people/mahfuz-ahmed-anik/', icon: 'fa-solid fa-layer-group', color: 'bg-red-700' },
  { name: 'DBLP', url: 'https://dblp.org/pid/401/7845.html', icon: 'fa-solid fa-database', color: 'bg-amber-600' },
  { name: 'ORCID', url: 'https://orcid.org/my-orcid?orcid=0009-0007-6826-7018', icon: 'fa-brands fa-orcid', color: 'bg-green-600' },
];

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    title: "AI-Driven Operations Research & Healthcare Systems",
    icon: "fa-solid fa-heart-pulse",
    description: [
      "Focusing on optimization-aware healthcare systems (LP, convex optimization, discrete optimization, simulation) where predictive ML models directly connect to resource allocation and scheduling decisions.",
      "Interested in computational oncology, exploring how generative + graph models can reason over metabolic pathways to support cancer insights in precision medicine.",
      "Applying Digital Twins to evaluate alternative policies in hospitals and clinical operations before real deployment, enabling safer, low-risk system experimentation.",
      "Exploring computer vision pipelines (e.g., fracture localization, disease classification) to support medical image understanding and early clinical screening."
    ]
  },
  {
    title: "Intelligent Supply-Chain, Transportation & Logistics",
    icon: "fa-solid fa-truck-fast",
    description: [
      "Using optimization frameworks for routing, replenishment, multimodal transport, and facility-level decisions, especially where OR + ML fusion outperforms static planning.",
      "Designing spatiotemporal forecasting models for supply-chain networks, including graph-based diffusion and virtual-node augmentation for capturing upstream/downstream dependencies.",
      "Exploring sustainability-aware supply chain modeling, including digital-twin based scenario testing for resilience, carbon-efficiency, and robustness under disruption.",
      "Building end-to-end decision-intelligent supply-chain systems that are adaptive, interpretable, and industry-deployable."
    ]
  },
  {
    title: "Human-Factors & Human-Centred AI",
    icon: "fa-solid fa-people-group",
    description: [
      "Working on modelling human workload, error patterns, and interaction behaviour to design safer, more intuitive AI interfaces for high-risk environments.",
      "Interested in adaptive, multilingual agentic AI systems that collaborate with humans through reasoning, explanation, and trust calibration in real workflows.",
      "Exploring ethics, inclusivity, and socio-technical alignment ensuring AI systems respect cultural context, equitable access, and human agency.",
      "Studying human-in-the-loop digital twins to evaluate ergonomics, safety, and user acceptance before deploying AI into real operational systems."
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Research Associate",
    organization: "Computational Intelligence and Operations Laboratory (CIOL)",
    orgUrl: "https://ciol-researchlab.github.io/",
    period: "Sept 2024 – Present",
    description: "A community-driven research lab advancing AI and ML applications in industrial systems, Digital Twin, and interdisciplinary domains. Engaged in machine learning and deep learning research, participating in international competitions. Currently working on projects in Agentic AI, healthcare, and Graph Neural Networks. Collaborating with Prof. A.M.M. Mukaddes (SUST), Prof. Manjurul Ahsan (OU), and Prof. Mahathir M. Bappy (LSU)."
  },
  {
    role: "Industrial Attachment",
    organization: "Walton Hi-Tech Industries PLC",
    orgUrl: "https://waltonbd.com/",
    period: "May 2025",
    description: "Worked under the Process Development Department of the Electrical Appliance Products (EAP) Unit. Focused on manufacturing process optimization for LED lights, fans, and switch sockets. Gained experience in production line analysis, quality control systems, Lean tools (KANBAN, 5S, PDCA), and proposed data-driven process improvements."
  },
  {
    role: "Content Representative",
    organization: "Shabash Fakibaj (LLC)",
    orgUrl: "https://www.shabashfakibaj.com/",
    period: "Dec 2022 – January 2025",
    description: "A multinational educational organization that provides guidance on graduate studies abroad for undergraduate students. I served as a content representative, collaborating with three teams, the schedule management team, the caption-writing team, and the LinkedIn team. My responsibility was to coordinate across these teams, ensure effective communication, and report overall progress. This role significantly helps me to strengthened my communication and teamwork abilities, as it required extensive interaction with diverse groups of people."
  },
  {
    role: "Executive Member",
    organization: "RoboSUST",
    period: "February 2020 – February 2021",
    description: "Participated in the SUST Robotics Club, gaining hands-on experience with Arduino and basic robotics, including a line-following robot competition and team-based projects."
  },
  {
    role: "Organizer",
    organization: "Graduate Development Network (GDN-SUST)",
    period: "March 2020 – February 2021",
    description: "Contributed to organizing university-wide seminars and career development programs at SUST, coordinating communication among speakers, attendees, and organizing teams."
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Science (Engineering)",
    institution: "Shahjalal University of Science and Technology",
    period: "February 2020 - August 2025",
    major: "Industrial and Production Engineering",
    result: "CGPA: 3.80/4.00 (Rank among top 5% students)",
    courses: "MAT103G, IPE141: Manufacturing Process-I, IPE123: Engineering Materials, SOC101G: Principles of Sociology, Differential Calculus and Solid Geometry, MAT104G: Integral Calculus and Differential Equations, MAT207G: Vectors, Matrices and Laplace Transformation, CSE203G: Introduction to Computer Language, IPE251: Engineering Statistics, IPE321: Numerical Analysis, IPE339: Operations Research, IPE 333: Quality Control and Management, IPE353: Facilities Planning and Materials Handling, IPE331: Ergonomics and Industrial Safety, IPE335: Industrial Management, IPE337: Operations Management, IPE437: Organizational Behavior, IPE431: System Modeling and Simulation, IPE439: Production System Optimization, IPE443: Advance Manufacturing System, IPE433: Supply Chain Management, IPE435: Project Management, IPE434: Reliability Engineering and Maintenance Management"
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Murari Chand College, Sylhet, Bangladesh",
    period: "July 2017 - July 2019",
    major: "Science",
    result: "Result: GPA 5.00/5.00"
  },
  {
    degree: "Secondary School Certificate",
    institution: "Sylhet Government Pilot High School, Bangladesh",
    period: "January 2007 - March 2017",
    major: "Science",
    result: "Result: GPA 5.00/5.00"
  }
];

// ======================== PUBLICATIONS DATA ========================

export const PUBLICATIONS_JOURNAL: PublicationItem[] = [
  {
    title: "Fracture Finder: Computer-Aided Real-Time Diagnosis of Vertebral Fractures in Thoracic Spine X-Rays Using YOLOv8 with Weighted Box Fusion and Augmentation Strategies",
    authors: "MD Shafikul Islam, Mahfuz Ahmed Anik, Azmine Toushik Wasi, Dr. Mahathir Mohammad Bappy",
    venue: "IISE Transactions on Healthcare Systems Engineering (Q2)",
    note: "Finalists for the QCRE Data Challenge competition, IISE 2025."
  }
];

export const PUBLICATIONS_CONFERENCE: PublicationItem[] = [
  {
    title: "Knowledge Explorer: An Agentic AI Framework for Interactive, Personalized and Multilingual Learning Experience",
    authors: "Wahid Faisal*, Azmine Toushik Wasi*, Drishti Sharma*, Mahfuz Ahmed Anik, Taki Hasan Rafi, Dong-Kyu Chae",
    venue: "CSCW'25 Posters"
  }
];

export const PUBLICATIONS_WORKSHOP: PublicationItem[] = [
  {
    title: "Preserving Cultural Identity with Context-Aware Translation Through Multi-Agent AI Systems",
    authors: "Mahfuz Ahmed Anik, Abdur Rahman, Azmine Toushik Wasi, Md Manjurul Ahsan",
    venue: "LM4UC Workshop at NAACL 2025",
    links: [
      { name: "PDF", url: "https://arxiv.org/pdf/2503.04827" },
      { name: "Code", url: "https://github.com/ono1025/Context-Aware_Translation_MAS" }
    ]
  },
  {
    title: "Akatsuki-CIOL@DravidianLangTech 2025: Ensemble-Based Approach Using Pre-Trained Models for Fake News Detection in Dravidian Languages",
    authors: "Mahfuz Ahmed Anik, Md. Iqramul Hoque, Wahid Faisal, Azmine Toushik Wasi, Md Manjurul Ahsan",
    venue: "DravidianLangTech Workshop at NAACL 2025",
    links: [
      { name: "PDF", url: "https://openreview.net/pdf?id=XQ1fJ0rySf" },
      { name: "Code", url: "https://github.com/ono1025/NAACL25-Akatsuki-Fake-News-Detection" }
    ]
  },
  {
    title: "CIOL at SemEval-2025 Task 11: Multilingual Pre-trained Model Fusion for Text-based Emotion Recognition",
    authors: "Md. Iqramul Hoque, Mahfuz Ahmed Anik, Abdur Rahman, Azmine Toushik Wasi",
    venue: "SemEval Workshop at ACL 2025",
    links: [
      { name: "PDF", url: "https://aclanthology.org/2025.semeval-1.29/" },
      { name: "Code", url: "https://github.com/ono1025/-Multilingual-Pre-trained-Model-Fusion-for-Text-based-Emotion-Recognition" }
    ]
  },
  {
    title: "Pathway-Attentive GAN for Interpretable Biomolecular Design",
    authors: "Azmine Toushik Wasi, Mahfuz Ahmed Anik",
    venue: "ML for Genomics Explorations Workshop, ICLR 2025",
    links: [
      { name: "PDF", url: "https://openreview.net/forum?id=aDqhVBvHHZ" }
    ]
  },
  {
    title: "Risks and Safety Considerations for Foundation Model-based Autonomous Agents’ Interaction with the Environment",
    authors: "Azmine Toushik Wasi, Mahfuz Ahmed Anik, Riashat Islam",
    venue: "Foundation Models in the Wild Workshop, ICLR 2025",
    links: [
      { name: "PDF", url: "https://openreview.net/forum?id=1s1iI6wyfT" }
    ]
  },
  {
    title: "CIOLat CLPsych 2025: Using Large Language Models for Understanding and Summarizing Clinical Texts",
    authors: "Md. Iqramul Hoque, Mahfuz Ahmed Anik, Azmine Toushik Wasi",
    venue: "CLPsych Workshop at NAACL 2025",
    links: [
      { name: "PDF", url: "https://aclanthology.org/2025.clpsych-1.19/" }
    ]
  },
  {
    title: "Social Impact of AI: Research, Diversity, and Inclusion Frameworks",
    authors: "Mahfuz Ahmed Anik, Abdur Rahman, Azmine Toushik Wasi, Md Manjurul Ahsan",
    venue: "Short Papers and Posters Track, SIAI-ReDI 2025 at AAAI",
    links: [
      { name: "PDF", url: "https://link.springer.com/chapter/10.1007/978-3-031-98949-0_5" }
    ]
  }
];

export const PUBLICATIONS_POSTER: PublicationItem[] = [
  {
    title: "Stages of Integrating Digital Twin in Fused Deposition Modelling",
    authors: "Abdur Rahman, Azmine Toushik Wasi, Mahfuz Ahmed Anik, and Md Manjurul Ahsan",
    venue: "Accepted for Poster Presentation, DigiTwin for MSSR 2024 – Digital Twin for Manufacturing Sustainability, Safety, and Resilience, West Lafayette, Indiana, USA"
  },
  {
    title: "Sustainable Management of Rare Earth Elements for Clean Energy Using Prescriptive Digital Twins",
    authors: "Mahfuz Ahmed Anik, Iqramul Hoque, Md Shafikul Islam, Azmine Toushik Wasi, Md Manjurul Ahsan, Mahathir Mohammad Bappy",
    venue: "Accepted for Poster Presentation, DigiTwin for MSSR 2024 – Digital Twin for Manufacturing Sustainability, Safety, and Resilience, West Lafayette, Indiana, USA"
  }
];

export const PUBLICATIONS_REVIEW: PublicationItem[] = [
  {
    title: "GRAPHINE: Enhancing Spatiotemporal Supply Chain Forecasting Using Virtual Node-Augmented Graph Diffusion Recurrent Networks",
    authors: "Azmine Toushik Wasi, Mahfuz Ahmed Anik, MD Shafikul Islam, Abdulelah S. Alshehri",
    venue: "In Review, International Journal of Production Research (IJPR, Q1)"
  },
  {
    title: "Exploring Graph-based Digital Twins for Supply Chain Management and Optimization",
    authors: "Azmine Toushik Wasi*, Mahfuz Ahmed Anik*, Abdur Rahman, Md. Iqramul Hoque, MD Shafikul Islam, MD Manjurul Ahsan",
    venue: "In Review, Internet of Things (IoT, Q1)",
    links: [
      { name: "Arxiv", url: "https://arxiv.org/pdf/2504.03692" }
    ]
  },
  {
    title: "Digital Twin-based Multi-Agent Framework for Understanding and Optimizing Smart Building HVAC Systems",
    authors: "Mahfuz Ahmed Anik*, Azmine Toushik Wasi*, Abdur Rahman, MD Manjurul Ahsan",
    venue: "In Review, Computers in Electrical Engineering (Q1)",
    links: [
      { name: "SSRN", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=FQcncXEAAAAJ&authuser=1&citation_for_view=FQcncXEAAAAJ:qjMakFHDy7sC" }
    ]
  },
  {
    title: "Digital Twin-Based Traffic Management in Dhaka Using Deep Learning Object Detection",
    authors: "Mahfuz Ahmed Anik, Azmine Toushik Wasi, Abdur Rahman, Md. Iqramul Hoque, Dr. Abul Mukid Mohammad Mukaddes",
    venue: "Under Review"
  },
  {
    title: "Digital Twin-Driven Pavement Health Monitoring and Maintenance Optimization Using Graph Neural Networks",
    authors: "Mohsin Mahmud Topu, Mahfuz Ahmed Anik, Azmine Toushik Wasi, Md Manjurul Ahsan",
    venue: "arXiv Preprint",
    links: [
      { name: "Arxiv", url: "https://arxiv.org/abs/2511.02957" }
    ]
  }
];

export const PUBLICATIONS_PROGRESS: string[] = [
  "SleepSense: Predicting and Optimizing Sleep Quality Using Machine Learning",
  "Digital Twin–Enabled Additive Manufacturing: A Systematic Review of Architectures, Integration Layers, and Operational Maturity",
  "Examining Graph Neural Networks Capabilities in Binder Affinity Prediction"
];

export const PROJECTS: ProjectItem[] = [
  { 
    title: "Simulation of a Super Shop Using Arena Simulation Software", 
    description: "The project simulated the Masala Bazar Super Shop using Arena software to assess efficiency. The model, run for 10 replications of 24 hours, showed that an average of 150 customers were served. The main bottleneck was identified at Sales Man 2 (Query for life style), which had the highest utilization (29.85%) and the longest average queue waiting time (1.5949 minutes). The total time required for a customer in the system averaged 11.6351 minutes.",
    imageUrl: "./unnamed%20(5).png", 
    icon: "fa-solid fa-desktop"
  },
  { 
    title: "Operations Management in a Retail Shop", 
    description: "This project optimized the inventory management of soybean oil for Retailer 'X' by replacing the fixed-order system with a Quantity Discount Model. The analysis determined that ordering 161 cartons every 27 days is the optimal strategy, compared to the previous 50 cartons every 7-10 days. This adjustment reduced total monthly costs by 1,027 Tk and established a Reorder Point of 8 units to ensure a 95% service level against stockouts.",
    imageUrl: "./unnamed%20(7).png", 
    icon: "fa-solid fa-chart-line"
  },
  { 
    title: "Design and Development of SUST Logo using Laser Beam Machining (LBM)", 
    description: "This project employs Laser Beam Machining (LBM) to fabricate a detailed SUST logo, aiming to demonstrate the technology's precision and ability to produce intricate designs with high-quality finishes. It further evaluates the output's accuracy and consistency to validate LBM's effectiveness for high-precision industrial applications.",
    imageUrl: "./WhatsApp%20Image%202025-11-30%20at%2014.20.38_b68ecc02.jpeg", 
    icon: "fa-solid fa-compass-drafting"
  },
  { 
    title: "Eco-Friendly Water Bottle", 
    description: "This project focused on designing and prototyping an eco-friendly water bottle using Bambusa polymorpha bamboo to provide a sustainable alternative to single-use plastics. Through a systematic product design process including concept screening and 3D modeling, the team fabricated a physical prototype with a calculated mass-production cost of 75 BDT per unit. Despite limitations such as the lack of food-grade coating, the project demonstrated the product's potential as a cost-effective and environmentally friendly solution for the local market.",
    imageUrl: "./ec.jpg", 
    icon: "fa-solid fa-leaf"
  }
];

export const SKILLS = {
  "Languages": ["Python", "C", "MATLAB"],
  "DS & ML Tools (Python)": ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "PyTorch", "LangChain", "CrewAI"],
  "Data Science Techniques": ["EDA", "Experiment Design", "Hypothesis Testing", "Sampling", "Data-Driven Decision Making"],
  "Machine Learning Techniques": [
    "Statistical ML Methods", "Deep Learning", "NLP", "Computer Vision", 
    "Graph Neural Networks (GNNs)", "Agentic Decision-Making", "Agentic LLMs", 
    "AI Reasoning", "RAG"
  ],
  "Operations Research & Optimization": [
    "LP", "NLP", "MILP", "Convex Optimization", "Discrete Optimization", 
    "Simulation Modeling", "Gurobi"
  ]
};

export const ACHIEVEMENTS: AchievementItem[] = [
  { 
    title: "3rd Place at QCRE Data Challenge Competition", 
    detail: "2025 IISE Annual Conference & Expo",
    url: "https://www.linkedin.com/posts/mahfuz-ahmed-anik-a5a6b5215_iise2025-qcre-datachallenge-activity-7354905916263055360-czVe/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZi-qYBuXVSf_IKahLDE_CBeVOO01m_7VU"
  },
  { title: "Champion at Inter-Department Business Case Competition", detail: "IPE Association" },
  { title: "Won 70% scholarship in ISCEA Global Supply Chain Case Competition 2023" },
  { title: "2nd Runners Up, Sylhet Division Math Olympiad 2019", detail: "Qualified for National Round" },
  { title: "9th Place, Sylhet Division Science Olympiad 2019" },
];

export const TRAINING: TrainingItem[] = [
  {
    name: "Deep Learning (Interactive Track, 68 hours) – Neuromatch Academy, July 2025",
    url: "https://portal.neuromatchacademy.org/certificate/19955245-5f10-48c6-b554-53fca61475ab"
  },
  { name: "Industrial Training – Bangladesh Industrial Technical Assistance Center (BITAC), Chittagong" },
  { name: "Winter ML Bootcamp – Computational Intelligence and Operations Lab (CIOL)" },
  { name: "Data Analyst in Python – Datacamp" },
  { name: "Supervised Machine Learning: Regression and Classification – Coursera" }
];