import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Users, Briefcase, ArrowRight, Star, Code, Shield, Brain, Zap, Globe, Database, Palette, HeartHandshake, Calculator, BookOpen, GraduationCap, Award, CheckCircle } from 'lucide-react';
import BrandName from '@/components/BrandName';

export default function CareersPage() {
  const jobCategories = [
    {
      title: "Research & Development",
      icon: Brain,
      color: "blue",
      jobs: [
        {
          title: "Senior AI Research Scientist",
          location: "Cairo, Egypt / Remote",
          type: "Full-time",
          department: "Research",
          description: "Lead groundbreaking research in AGI development, working on cognitive architectures and ethical AI frameworks.",
          skills: ["Machine Learning", "Deep Learning", "AGI Research", "Python", "Research Publications"],
          requirements: {
            education: "Ph.D. in Computer Science, AI, Machine Learning, or related field",
            experience: "5+ years of research experience in AI/ML",
            certifications: ["Google Cloud ML Engineer", "AWS ML Specialty (preferred)"],
            prerequisites: [
              "Minimum 10 peer-reviewed publications in top-tier AI conferences",
              "Experience with neural architecture search and meta-learning",
              "Strong mathematical background in statistics and optimization",
              "Proficiency in Python, PyTorch, TensorFlow",
              "Experience leading research teams"
            ]
          }
        },
        {
          title: "AI Research Engineer",
          location: "Cairo, Egypt",
          type: "Full-time", 
          department: "Research",
          description: "Implement and optimize research prototypes, bridge the gap between research and production systems.",
          skills: ["PyTorch", "TensorFlow", "Research Implementation", "Algorithm Optimization"],
          requirements: {
            education: "M.S. in Computer Science, AI, or related field",
            experience: "3+ years in AI research implementation",
            certifications: ["NVIDIA Deep Learning Institute certificates"],
            prerequisites: [
              "Strong programming skills in Python and C++",
              "Experience with distributed computing and GPU programming",
              "Knowledge of research paper implementation",
              "Experience with version control and collaborative development",
              "Understanding of software engineering best practices"
            ]
          }
        },
        {
          title: "Computer Vision Researcher",
          location: "Cairo, Egypt / Remote",
          type: "Full-time",
          department: "Research", 
          description: "Develop advanced computer vision algorithms for our AI solutions across aviation and cybersecurity domains.",
          skills: ["Computer Vision", "OpenCV", "Deep Learning", "Image Processing"],
          requirements: {
            education: "Ph.D. or M.S. in Computer Vision, Computer Science, or related field",
            experience: "4+ years in computer vision research",
            certifications: ["OpenCV certification", "NVIDIA Computer Vision certificates"],
            prerequisites: [
              "Expertise in CNNs, object detection, and image segmentation",
              "Experience with OpenCV, PIL, and computer vision libraries",
              "Knowledge of 3D vision and point cloud processing",
              "Publications in computer vision conferences (CVPR, ICCV, ECCV)",
              "Experience with real-time vision systems"
            ]
          }
        },
        {
          title: "Natural Language Processing Scientist",
          location: "Remote",
          type: "Full-time",
          department: "Research",
          description: "Research and develop NLP models for multi-modal AI systems and human-AI interaction protocols.",
          skills: ["NLP", "Transformers", "BERT", "GPT", "Linguistics"],
          requirements: {
            education: "Ph.D. in NLP, Computational Linguistics, or related field",
            experience: "4+ years in NLP research",
            certifications: ["Hugging Face certification", "Google NLP API certification"],
            prerequisites: [
              "Deep understanding of transformer architectures",
              "Experience with large language models and fine-tuning",
              "Knowledge of multilingual NLP and cross-lingual models",
              "Publications in NLP conferences (ACL, EMNLP, NAACL)",
              "Experience with dialogue systems and conversational AI"
            ]
          }
        }
      ]
    },
    {
      title: "Engineering",
      icon: Code,
      color: "green",
      jobs: [
        {
          title: "Senior Machine Learning Engineer",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Engineering",
          description: "Build and deploy scalable ML systems for our aviation and cybersecurity solutions.",
          skills: ["Python", "TensorFlow", "PyTorch", "AWS/GCP", "MLOps"],
          requirements: {
            education: "B.S./M.S. in Computer Science, Engineering, or related field",
            experience: "5+ years in ML engineering and deployment",
            certifications: ["AWS ML Specialty", "Google Cloud ML Engineer", "Kubernetes Administrator"],
            prerequisites: [
              "Experience with ML model deployment and monitoring",
              "Proficiency in containerization (Docker, Kubernetes)",
              "Knowledge of CI/CD pipelines for ML systems",
              "Experience with cloud platforms (AWS, GCP, Azure)",
              "Understanding of distributed systems and microservices"
            ]
          }
        },
        {
          title: "Full Stack Software Engineer",
          location: "Cairo, Egypt / Remote",
          type: "Full-time",
          department: "Engineering",
          description: "Develop web applications and APIs for our AI platform, working with React, Node.js, and cloud technologies.",
          skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
          requirements: {
            education: "B.S. in Computer Science, Software Engineering, or related field",
            experience: "4+ years in full-stack development",
            certifications: ["AWS Developer Associate", "React certification"],
            prerequisites: [
              "Proficiency in React, Node.js, and TypeScript",
              "Experience with relational and NoSQL databases",
              "Knowledge of RESTful APIs and GraphQL",
              "Understanding of web security best practices",
              "Experience with testing frameworks and methodologies"
            ]
          }
        },
        {
          title: "Backend Engineer",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Engineering",
          description: "Build robust backend systems and APIs to support our AI solutions at scale.",
          skills: ["Python", "FastAPI", "PostgreSQL", "Redis", "Microservices"],
          requirements: {
            education: "B.S. in Computer Science or related field",
            experience: "3+ years in backend development",
            certifications: ["AWS Solutions Architect Associate", "Python certifications"],
            prerequisites: [
              "Strong proficiency in Python and web frameworks",
              "Experience with database design and optimization",
              "Knowledge of caching strategies and message queues",
              "Understanding of API design and documentation",
              "Experience with monitoring and logging systems"
            ]
          }
        },
        {
          title: "Frontend Engineer",
          location: "Remote",
          type: "Full-time",
          department: "Engineering",
          description: "Create intuitive user interfaces for our AI platforms using modern web technologies.",
          skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX"],
          requirements: {
            education: "B.S. in Computer Science, Design, or related field",
            experience: "3+ years in frontend development",
            certifications: ["React certification", "Next.js certification"],
            prerequisites: [
              "Expertise in React, Next.js, and modern JavaScript",
              "Strong CSS skills and responsive design principles",
              "Experience with state management (Redux, Zustand)",
              "Knowledge of web performance optimization",
              "Understanding of accessibility standards (WCAG)"
            ]
          }
        },
        {
          title: "Mobile App Developer",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Engineering",
          description: "Develop mobile applications for iOS and Android platforms integrating our AI services.",
          skills: ["React Native", "Swift", "Kotlin", "Mobile UI", "API Integration"],
          requirements: {
            education: "B.S. in Computer Science, Mobile Development, or related field",
            experience: "3+ years in mobile app development",
            certifications: ["iOS Developer certification", "Android Developer certification"],
            prerequisites: [
              "Proficiency in React Native or native development",
              "Experience with mobile app deployment and distribution",
              "Knowledge of mobile security best practices",
              "Understanding of mobile UI/UX design principles",
              "Experience with push notifications and offline functionality"
            ]
          }
        }
      ]
    },
    {
      title: "Infrastructure & DevOps",
      icon: Database,
      color: "purple",
      jobs: [
        {
          title: "Senior DevOps Engineer",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Infrastructure",
          description: "Manage cloud infrastructure, CI/CD pipelines, and ensure scalability of our AI systems.",
          skills: ["Kubernetes", "Docker", "AWS", "Terraform", "CI/CD"],
          requirements: {
            education: "B.S. in Computer Science, Engineering, or related field",
            experience: "5+ years in DevOps and infrastructure management",
            certifications: ["AWS Solutions Architect Professional", "Kubernetes Administrator", "Terraform Associate"],
            prerequisites: [
              "Expert-level knowledge of Kubernetes and container orchestration",
              "Experience with Infrastructure as Code (Terraform, CloudFormation)",
              "Proficiency in CI/CD pipeline design and implementation",
              "Strong scripting skills (Bash, Python, Go)",
              "Experience with monitoring and alerting systems"
            ]
          }
        },
        {
          title: "Cloud Infrastructure Engineer",
          location: "Remote",
          type: "Full-time",
          department: "Infrastructure",
          description: "Design and implement cloud-native solutions for our AI workloads across multiple cloud providers.",
          skills: ["AWS", "GCP", "Azure", "Terraform", "CloudFormation"],
          requirements: {
            education: "B.S. in Computer Science, Engineering, or related field",
            experience: "4+ years in cloud infrastructure",
            certifications: ["Multi-cloud certifications (AWS, GCP, Azure)", "Terraform Associate"],
            prerequisites: [
              "Experience with multi-cloud architectures",
              "Knowledge of cloud security and compliance",
              "Understanding of networking and VPC design",
              "Experience with cost optimization strategies",
              "Proficiency in infrastructure automation"
            ]
          }
        },
        {
          title: "Site Reliability Engineer",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Infrastructure",
          description: "Ensure high availability and performance of our AI systems through monitoring and automation.",
          skills: ["SRE", "Monitoring", "Prometheus", "Grafana", "Incident Response"],
          requirements: {
            education: "B.S. in Computer Science, Engineering, or related field",
            experience: "4+ years in SRE or similar role",
            certifications: ["Google SRE certification", "Prometheus certification"],
            prerequisites: [
              "Experience with observability and monitoring tools",
              "Knowledge of SLI/SLO design and implementation",
              "Proficiency in incident response and post-mortem analysis",
              "Understanding of chaos engineering principles",
              "Experience with performance tuning and optimization"
            ]
          }
        },
        {
          title: "Data Engineer",
          location: "Cairo, Egypt / Remote",
          type: "Full-time",
          department: "Infrastructure",
          description: "Build and maintain data pipelines for training and serving our AI models at scale.",
          skills: ["Apache Spark", "Kafka", "Airflow", "Data Warehousing", "ETL"],
          requirements: {
            education: "B.S. in Computer Science, Data Engineering, or related field",
            experience: "3+ years in data engineering",
            certifications: ["AWS Big Data Specialty", "Google Cloud Data Engineer", "Databricks certification"],
            prerequisites: [
              "Experience with big data technologies (Spark, Hadoop, Kafka)",
              "Knowledge of data warehousing and ETL processes",
              "Proficiency in SQL and data modeling",
              "Understanding of data governance and quality",
              "Experience with real-time data processing"
            ]
          }
        }
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      color: "red",
      jobs: [
        {
          title: "AI Security Researcher",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Security",
          description: "Research and develop AI-powered cybersecurity solutions, focusing on threat detection and prevention.",
          skills: ["Cybersecurity", "AI Security", "Threat Analysis", "Penetration Testing"],
          requirements: {
            education: "M.S./Ph.D. in Cybersecurity, Computer Science, or related field",
            experience: "4+ years in AI security research",
            certifications: ["CISSP", "CEH", "OSCP", "GIAC certifications"],
            prerequisites: [
              "Deep understanding of AI/ML security vulnerabilities",
              "Experience with adversarial attacks and defenses",
              "Knowledge of cryptography and secure protocols",
              "Proficiency in penetration testing and vulnerability assessment",
              "Publications in security conferences preferred"
            ]
          }
        },
        {
          title: "Security Engineer",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Security",
          description: "Implement security measures across our infrastructure and applications, conduct security audits.",
          skills: ["Network Security", "Application Security", "SIEM", "Vulnerability Assessment"],
          requirements: {
            education: "B.S. in Cybersecurity, Computer Science, or related field",
            experience: "3+ years in security engineering",
            certifications: ["CISSP", "CISM", "CompTIA Security+", "AWS Security Specialty"],
            prerequisites: [
              "Experience with security frameworks (NIST, ISO 27001)",
              "Knowledge of network security and firewalls",
              "Proficiency in security tools (SIEM, vulnerability scanners)",
              "Understanding of secure coding practices",
              "Experience with compliance and audit processes"
            ]
          }
        },
        {
          title: "Threat Intelligence Analyst",
          location: "Remote",
          type: "Full-time",
          department: "Security",
          description: "Analyze cyber threats and develop intelligence reports to enhance our security posture.",
          skills: ["Threat Intelligence", "OSINT", "Malware Analysis", "Risk Assessment"],
          requirements: {
            education: "B.S. in Cybersecurity, Intelligence Studies, or related field",
            experience: "3+ years in threat intelligence",
            certifications: ["GCTI", "GCIH", "SANS certifications"],
            prerequisites: [
              "Experience with threat intelligence platforms",
              "Knowledge of OSINT techniques and tools",
              "Proficiency in malware analysis and reverse engineering",
              "Understanding of threat actor tactics and techniques",
              "Strong analytical and report writing skills"
            ]
          }
        }
      ]
    },
    {
      title: "Product & Design",
      icon: Palette,
      color: "orange",
      jobs: [
        {
          title: "Senior Product Manager - AI Solutions",
          location: "Cairo, Egypt / Remote",
          type: "Full-time",
          department: "Product",
          description: "Drive product strategy for our AI platform, working closely with engineering and research teams.",
          skills: ["Product Strategy", "AI/ML", "B2B SaaS", "Roadmap Planning"],
          requirements: {
            education: "MBA or B.S. in Engineering, Business, or related field",
            experience: "5+ years in product management, preferably AI/ML products",
            certifications: ["Product Management certifications", "Agile/Scrum certifications"],
            prerequisites: [
              "Deep understanding of AI/ML technologies and market",
              "Experience with B2B SaaS product development",
              "Strong analytical and data-driven decision making skills",
              "Excellent communication and stakeholder management",
              "Experience with product analytics and user research"
            ]
          }
        },
        {
          title: "UX/UI Designer",
          location: "Remote",
          type: "Full-time",
          department: "Design",
          description: "Design intuitive user experiences for our AI platforms, conduct user research and create design systems.",
          skills: ["Figma", "User Research", "Design Systems", "Prototyping"],
          requirements: {
            education: "B.S. in Design, HCI, or related field",
            experience: "3+ years in UX/UI design",
            certifications: ["Google UX Design Certificate", "Adobe certifications"],
            prerequisites: [
              "Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)",
              "Experience with user research and usability testing",
              "Knowledge of design systems and component libraries",
              "Understanding of accessibility and inclusive design",
              "Portfolio demonstrating complex product design"
            ]
          }
        },
        {
          title: "Product Designer",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Design",
          description: "Lead design initiatives for our AI products, collaborate with product and engineering teams.",
          skills: ["Product Design", "User Experience", "Design Thinking", "Wireframing"],
          requirements: {
            education: "B.S. in Design, HCI, or related field",
            experience: "4+ years in product design",
            certifications: ["Design thinking certifications", "UX certifications"],
            prerequisites: [
              "Experience designing complex B2B software products",
              "Strong understanding of design thinking methodologies",
              "Proficiency in wireframing and prototyping tools",
              "Knowledge of front-end development constraints",
              "Experience working in agile development environments"
            ]
          }
        },
        {
          title: "Technical Product Manager",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Product",
          description: "Manage technical aspects of our AI products, work closely with engineering teams on implementation.",
          skills: ["Technical PM", "API Design", "System Architecture", "Agile"],
          requirements: {
            education: "B.S. in Engineering, Computer Science, or related field",
            experience: "4+ years in technical product management",
            certifications: ["Technical PM certifications", "AWS/GCP certifications"],
            prerequisites: [
              "Strong technical background with software development experience",
              "Understanding of system architecture and API design",
              "Experience with agile development methodologies",
              "Knowledge of cloud platforms and infrastructure",
              "Ability to communicate technical concepts to non-technical stakeholders"
            ]
          }
        }
      ]
    },
    {
      title: "Business & Operations",
      icon: Globe,
      color: "teal",
      jobs: [
        {
          title: "Business Development Manager",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Business",
          description: "Identify and pursue new business opportunities, build partnerships in the AI industry.",
          skills: ["Business Development", "Partnership", "Sales Strategy", "Market Analysis"],
          requirements: {
            education: "MBA or B.S. in Business, Marketing, or related field",
            experience: "5+ years in business development or sales",
            certifications: ["Sales certifications", "Business development certifications"],
            prerequisites: [
              "Proven track record in B2B sales and partnership development",
              "Understanding of AI/ML market and competitive landscape",
              "Strong negotiation and relationship building skills",
              "Experience with CRM systems and sales processes",
              "Excellent presentation and communication skills"
            ]
          }
        },
        {
          title: "Sales Engineer",
          location: "Cairo, Egypt / Remote",
          type: "Full-time",
          department: "Sales",
          description: "Support sales efforts with technical expertise, conduct product demonstrations and technical discussions.",
          skills: ["Technical Sales", "Solution Architecture", "Customer Engagement", "AI Knowledge"],
          requirements: {
            education: "B.S. in Engineering, Computer Science, or related field",
            experience: "3+ years in technical sales or solution engineering",
            certifications: ["Sales engineering certifications", "Technical certifications"],
            prerequisites: [
              "Strong technical background with ability to explain complex concepts",
              "Experience with solution selling and technical demonstrations",
              "Knowledge of AI/ML technologies and applications",
              "Excellent presentation and communication skills",
              "Customer-facing experience and relationship building"
            ]
          }
        },
        {
          title: "Marketing Manager",
          location: "Remote",
          type: "Full-time",
          department: "Marketing",
          description: "Develop and execute marketing strategies for our AI solutions, manage digital marketing campaigns.",
          skills: ["Digital Marketing", "Content Marketing", "SEO/SEM", "Brand Management"],
          requirements: {
            education: "B.S. in Marketing, Communications, or related field",
            experience: "4+ years in digital marketing",
            certifications: ["Google Ads", "Google Analytics", "HubSpot", "Facebook Blueprint"],
            prerequisites: [
              "Experience with B2B marketing and lead generation",
              "Proficiency in marketing automation and CRM tools",
              "Knowledge of SEO/SEM and content marketing strategies",
              "Understanding of AI/ML market and technical concepts",
              "Strong analytical skills and data-driven approach"
            ]
          }
        },
        {
          title: "Operations Manager",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Operations",
          description: "Oversee daily operations, optimize processes, and ensure efficient resource allocation.",
          skills: ["Operations Management", "Process Optimization", "Project Management", "Analytics"],
          requirements: {
            education: "B.S. in Operations, Business Administration, or related field",
            experience: "4+ years in operations management",
            certifications: ["PMP", "Six Sigma", "Operations management certifications"],
            prerequisites: [
              "Experience with process improvement and optimization",
              "Strong project management and organizational skills",
              "Knowledge of business analytics and reporting",
              "Understanding of technology operations and scaling",
              "Excellent problem-solving and decision-making abilities"
            ]
          }
        },
        {
          title: "Customer Success Manager",
          location: "Remote",
          type: "Full-time",
          department: "Customer Success",
          description: "Ensure customer satisfaction and success with our AI solutions, manage client relationships.",
          skills: ["Customer Success", "Account Management", "Technical Support", "Communication"],
          requirements: {
            education: "B.S. in Business, Communications, or related field",
            experience: "3+ years in customer success or account management",
            certifications: ["Customer Success certifications", "Salesforce certifications"],
            prerequisites: [
              "Experience with B2B customer success and account management",
              "Strong technical aptitude and ability to learn complex products",
              "Excellent communication and relationship building skills",
              "Knowledge of customer success metrics and best practices",
              "Experience with CRM and customer success platforms"
            ]
          }
        }
      ]
    },
    {
      title: "Finance & Legal",
      icon: Calculator,
      color: "indigo",
      jobs: [
        {
          title: "Financial Analyst",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Finance",
          description: "Analyze financial performance, prepare reports, and support strategic financial planning.",
          skills: ["Financial Analysis", "Excel", "Financial Modeling", "Reporting"],
          requirements: {
            education: "B.S. in Finance, Accounting, Economics, or related field",
            experience: "3+ years in financial analysis",
            certifications: ["CFA", "CPA", "Financial modeling certifications"],
            prerequisites: [
              "Advanced proficiency in Excel and financial modeling",
              "Experience with financial reporting and analysis",
              "Knowledge of accounting principles and financial statements",
              "Understanding of startup and technology company finances",
              "Strong analytical and quantitative skills"
            ]
          }
        },
        {
          title: "Compliance Officer",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Legal",
          description: "Ensure compliance with regulations, manage legal risks, and support contract negotiations.",
          skills: ["Compliance", "Legal Research", "Risk Management", "Contract Law"],
          requirements: {
            education: "J.D. or B.S. in Law, Business, or related field",
            experience: "4+ years in compliance or legal roles",
            certifications: ["Compliance certifications", "Legal certifications"],
            prerequisites: [
              "Knowledge of technology and AI regulations",
              "Experience with contract review and negotiation",
              "Understanding of data privacy laws (GDPR, CCPA)",
              "Strong research and analytical skills",
              "Excellent written and verbal communication"
            ]
          }
        },
        {
          title: "Intellectual Property Specialist",
          location: "Remote",
          type: "Full-time",
          department: "Legal",
          description: "Manage IP portfolio, file patents, and protect our technological innovations.",
          skills: ["IP Law", "Patent Filing", "Technology Law", "Legal Research"],
          requirements: {
            education: "J.D. with technical background or B.S. in Engineering + IP law training",
            experience: "3+ years in IP law and patent filing",
            certifications: ["Patent bar admission", "IP law certifications"],
            prerequisites: [
              "Experience with patent prosecution and portfolio management",
              "Understanding of AI/ML technologies and patentability",
              "Knowledge of trademark and copyright law",
              "Experience with IP litigation and enforcement",
              "Strong technical writing and communication skills"
            ]
          }
        }
      ]
    },
    {
      title: "Human Resources",
      icon: HeartHandshake,
      color: "pink",
      jobs: [
        {
          title: "HR Business Partner",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "HR",
          description: "Support business units with HR strategies, talent management, and organizational development.",
          skills: ["HR Strategy", "Talent Management", "Employee Relations", "Organizational Development"],
          requirements: {
            education: "B.S. in HR, Psychology, Business, or related field",
            experience: "5+ years in HR business partnering",
            certifications: ["SHRM-CP/SCP", "PHR/SPHR", "HR certifications"],
            prerequisites: [
              "Experience with HR strategy and organizational development",
              "Knowledge of employment law and HR best practices",
              "Strong interpersonal and communication skills",
              "Experience with performance management and talent development",
              "Understanding of technology industry HR challenges"
            ]
          }
        },
        {
          title: "Talent Acquisition Specialist",
          location: "Remote",
          type: "Full-time",
          department: "HR",
          description: "Lead recruitment efforts for technical and non-technical roles, build talent pipelines.",
          skills: ["Recruiting", "Talent Sourcing", "Interview Process", "Employer Branding"],
          requirements: {
            education: "B.S. in HR, Psychology, or related field",
            experience: "3+ years in technical recruiting",
            certifications: ["Recruiting certifications", "LinkedIn Recruiter certification"],
            prerequisites: [
              "Experience recruiting for technical roles (engineering, AI/ML)",
              "Knowledge of sourcing techniques and recruiting tools",
              "Understanding of technical skills assessment",
              "Strong networking and relationship building skills",
              "Experience with applicant tracking systems"
            ]
          }
        },
        {
          title: "Learning & Development Coordinator",
          location: "Cairo, Egypt",
          type: "Part-time",
          department: "HR",
          description: "Design and implement training programs, support employee development initiatives.",
          skills: ["Training Design", "Employee Development", "Learning Management", "Facilitation"],
          requirements: {
            education: "B.S. in Education, HR, or related field",
            experience: "2+ years in learning and development",
            certifications: ["Training certifications", "Instructional design certifications"],
            prerequisites: [
              "Experience with training program design and delivery",
              "Knowledge of adult learning principles",
              "Proficiency in e-learning platforms and tools",
              "Strong presentation and facilitation skills",
              "Understanding of technical training needs"
            ]
          }
        }
      ]
    },
    {
      title: "Education & Training",
      icon: BookOpen,
      color: "emerald",
      jobs: [
        {
          title: "AI Education Specialist",
          location: "Remote",
          type: "Full-time",
          department: "Education",
          description: "Develop educational content and training programs for our EduGenius AI platform.",
          skills: ["Educational Design", "AI/ML Knowledge", "Curriculum Development", "E-Learning"],
          requirements: {
            education: "M.S. in Education, Instructional Design, or related field",
            experience: "4+ years in educational content development",
            certifications: ["Instructional design certifications", "E-learning certifications"],
            prerequisites: [
              "Experience with AI/ML education and training",
              "Knowledge of curriculum development and learning objectives",
              "Proficiency in e-learning authoring tools",
              "Understanding of educational technology and platforms",
              "Strong content creation and writing skills"
            ]
          }
        },
        {
          title: "Technical Writer",
          location: "Remote",
          type: "Full-time",
          department: "Documentation",
          description: "Create technical documentation, API guides, and user manuals for our AI products.",
          skills: ["Technical Writing", "Documentation", "API Documentation", "Content Creation"],
          requirements: {
            education: "B.S. in Technical Writing, English, Computer Science, or related field",
            experience: "3+ years in technical writing",
            certifications: ["Technical writing certifications", "API documentation certifications"],
            prerequisites: [
              "Experience writing technical documentation for software products",
              "Knowledge of API documentation tools and standards",
              "Understanding of software development processes",
              "Proficiency in documentation tools (GitBook, Confluence, etc.)",
              "Strong editing and proofreading skills"
            ]
          }
        },
        {
          title: "Training Specialist",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Training",
          description: "Conduct training sessions for clients and internal teams on our AI solutions.",
          skills: ["Training Delivery", "Presentation Skills", "AI Knowledge", "Customer Training"],
          requirements: {
            education: "B.S. in Education, Training, or related field",
            experience: "3+ years in training delivery",
            certifications: ["Training certifications", "Adult education certifications"],
            prerequisites: [
              "Experience with technical training and adult education",
              "Strong presentation and public speaking skills",
              "Knowledge of AI/ML concepts and applications",
              "Ability to adapt training content for different audiences",
              "Experience with virtual and in-person training delivery"
            ]
          }
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
      green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
      red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" },
      teal: { bg: "bg-teal-100", text: "text-teal-600", border: "border-teal-200" },
      indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200" },
      pink: { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-200" },
      emerald: { bg: "bg-emerald-100", text: "text-emerald-600", border: "border-emerald-200" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-6">
              Shape the future of artificial intelligence with a team of world-class innovators, researchers, and engineers.
            </p>
            <div className="bg-blue-800/30 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold mb-2">We're Hiring Across All Departments!</p>
              <p className="text-blue-200">
                Explore opportunities in Research, Engineering, Product, Security, Business, and more. 
                All positions available except Board and Senior Management roles.
              </p>
            </div>
            <div className="mt-6">
              <Link 
                href="/about/organization-chart" 
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Organization Chart
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why <span className="font-light text-blue-600" style={{ letterSpacing: '0.2em' }}>
                <span><BrandName /></span>
                <sup className="text-xs ml-1">®</sup>
              </span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join a company that&apos;s not just building AI solutions, but creating the future of intelligent technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cutting-Edge Research</h3>
              <p className="text-gray-600 dark:text-gray-300">Work on breakthrough AI technologies that will shape the next decade.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">World-Class Team</h3>
              <p className="text-gray-600 dark:text-gray-300">Collaborate with leading experts from top universities and tech companies.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Growth Opportunities</h3>
              <p className="text-gray-600 dark:text-gray-300">Accelerate your career with mentorship and learning opportunities.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Work-Life Balance</h3>
              <p className="text-gray-600 dark:text-gray-300">Flexible schedules and comprehensive benefits for your well-being.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions by Category */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Discover exciting opportunities across all departments to make an impact in artificial intelligence
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-blue-800 dark:text-blue-200 font-medium">
                <strong>{jobCategories.reduce((total, category) => total + category.jobs.length, 0)} Open Positions</strong> across {jobCategories.length} departments
              </p>
            </div>
          </div>
          
          <div className="space-y-12">
            {jobCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              const colors = getColorClasses(category.color);
              
              return (
                <div key={categoryIndex} className="bg-gray-900 rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className={`${colors.bg} rounded-full w-12 h-12 flex items-center justify-center mr-4`}>
                      <IconComponent className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{category.jobs.length} open position{category.jobs.length > 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    {category.jobs.map((job, jobIndex) => (
                      <div key={jobIndex} className={`border ${colors.border} rounded-lg p-6 hover:shadow-md transition-shadow`}>
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-white mb-2">{job.title}</h4>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{job.type}</span>
                              </div>
                              <div className="flex items-center">
                                <Briefcase className="h-4 w-4 mr-1" />
                                <span>{job.department}</span>
                              </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>
                            
                            {/* Requirements Section */}
                            <div className="mb-4">
                              <h5 className="text-lg font-semibold text-white mb-3 flex items-center">
                                <GraduationCap className="h-5 w-5 mr-2" />
                                Requirements & Qualifications
                              </h5>
                              
                              <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                  <h6 className="font-medium text-white mb-2">Education</h6>
                                  <p className="text-sm text-gray-600 dark:text-gray-300">{job.requirements.education}</p>
                                </div>
                                <div>
                                  <h6 className="font-medium text-white mb-2">Experience</h6>
                                  <p className="text-sm text-gray-600 dark:text-gray-300">{job.requirements.experience}</p>
                                </div>
                              </div>
                              
                              <div className="mb-4">
                                <h6 className="font-medium text-white mb-2 flex items-center">
                                  <Award className="h-4 w-4 mr-1" />
                                  Required Certifications
                                </h6>
                                <div className="flex flex-wrap gap-2">
                                  {job.requirements.certifications.map((cert, certIndex) => (
                                    <span key={certIndex} className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-xs rounded-full">
                                      {cert}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="mb-4">
                                <h6 className="font-medium text-white mb-2 flex items-center">
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Prerequisites
                                </h6>
                                <ul className="space-y-1">
                                  {job.requirements.prerequisites.map((prereq, prereqIndex) => (
                                    <li key={prereqIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                                      <span className="text-green-500 mr-2 mt-1">•</span>
                                      {prereq}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {job.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className={`px-3 py-1 ${colors.bg} ${colors.text} text-sm rounded-full`}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="lg:ml-6 mt-4 lg:mt-0">
                            <Link 
                              href={`mailto:careers@apex-meridian.com?subject=Application for ${job.title}&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position in the ${job.department} department.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ABest regards`}
                              className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                            >
                              Apply Now
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Shape the Future of AI?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join our mission to create intelligent solutions that transform industries and improve lives worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="mailto:careers@apex-meridian.com?subject=General Inquiry - Career Opportunities"
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact HR Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/about/organization-chart"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-gray-900 hover:text-blue-900 transition-colors"
            >
              Organization Chart
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
