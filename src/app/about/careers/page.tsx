import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Users, Briefcase, ArrowRight, Star, Code, Shield, Brain, Zap, Globe, Database, Palette, HeartHandshake, Calculator, BookOpen } from 'lucide-react';

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
          description: "Lead groundbreaking research in AGI development, working on cognitive architectures and ethical AI frameworks. PhD in AI/ML required with 5+ years of research experience.",
          skills: ["Machine Learning", "Deep Learning", "AGI Research", "Python", "Research Publications"]
        },
        {
          title: "AI Research Engineer",
          location: "Cairo, Egypt",
          type: "Full-time", 
          department: "Research",
          description: "Implement and optimize research prototypes, bridge the gap between research and production systems.",
          skills: ["PyTorch", "TensorFlow", "Research Implementation", "Algorithm Optimization"]
        },
        {
          title: "Computer Vision Researcher",
          location: "Cairo, Egypt / Remote",
          type: "Full-time",
          department: "Research", 
          description: "Develop advanced computer vision algorithms for our AI solutions across aviation and cybersecurity domains.",
          skills: ["Computer Vision", "OpenCV", "Deep Learning", "Image Processing"]
        },
        {
          title: "Natural Language Processing Scientist",
          location: "Remote",
          type: "Full-time",
          department: "Research",
          description: "Research and develop NLP models for multi-modal AI systems and human-AI interaction protocols.",
          skills: ["NLP", "Transformers", "BERT", "GPT", "Linguistics"]
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
          description: "Build and deploy scalable ML systems for our aviation and cybersecurity solutions. Experience with Python, TensorFlow/PyTorch, and cloud platforms required.",
          skills: ["Python", "TensorFlow", "PyTorch", "AWS/GCP", "MLOps"]
        },
        {
          title: "Full Stack Software Engineer",
          location: "Cairo, Egypt / Remote",
          type: "Full-time",
          department: "Engineering",
          description: "Develop web applications and APIs for our AI platform, working with React, Node.js, and cloud technologies.",
          skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker"]
        },
        {
          title: "Backend Engineer",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Engineering",
          description: "Build robust backend systems and APIs to support our AI solutions at scale.",
          skills: ["Python", "FastAPI", "PostgreSQL", "Redis", "Microservices"]
        },
        {
          title: "Frontend Engineer",
          location: "Remote",
          type: "Full-time",
          department: "Engineering",
          description: "Create intuitive user interfaces for our AI platforms using modern web technologies.",
          skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX"]
        },
        {
          title: "Mobile App Developer",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Engineering",
          description: "Develop mobile applications for iOS and Android platforms integrating our AI services.",
          skills: ["React Native", "Swift", "Kotlin", "Mobile UI", "API Integration"]
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
          skills: ["Kubernetes", "Docker", "AWS", "Terraform", "CI/CD"]
        },
        {
          title: "Cloud Infrastructure Engineer",
          location: "Remote",
          type: "Full-time",
          department: "Infrastructure",
          description: "Design and implement cloud-native solutions for our AI workloads across multiple cloud providers.",
          skills: ["AWS", "GCP", "Azure", "Terraform", "CloudFormation"]
        },
        {
          title: "Site Reliability Engineer",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Infrastructure",
          description: "Ensure high availability and performance of our AI systems through monitoring and automation.",
          skills: ["SRE", "Monitoring", "Prometheus", "Grafana", "Incident Response"]
        },
        {
          title: "Data Engineer",
          location: "Cairo, Egypt / Remote",
          type: "Full-time",
          department: "Infrastructure",
          description: "Build and maintain data pipelines for training and serving our AI models at scale.",
          skills: ["Apache Spark", "Kafka", "Airflow", "Data Warehousing", "ETL"]
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
          skills: ["Cybersecurity", "AI Security", "Threat Analysis", "Penetration Testing"]
        },
        {
          title: "Security Engineer",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Security",
          description: "Implement security measures across our infrastructure and applications, conduct security audits.",
          skills: ["Network Security", "Application Security", "SIEM", "Vulnerability Assessment"]
        },
        {
          title: "Threat Intelligence Analyst",
          location: "Remote",
          type: "Full-time",
          department: "Security",
          description: "Analyze cyber threats and develop intelligence reports to enhance our security posture.",
          skills: ["Threat Intelligence", "OSINT", "Malware Analysis", "Risk Assessment"]
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
          description: "Drive product strategy for our AI platform, working closely with engineering and research teams. 5+ years PM experience with AI/ML products preferred.",
          skills: ["Product Strategy", "AI/ML", "B2B SaaS", "Roadmap Planning"]
        },
        {
          title: "UX/UI Designer",
          location: "Remote",
          type: "Full-time",
          department: "Design",
          description: "Design intuitive user experiences for our AI platforms, conduct user research and create design systems.",
          skills: ["Figma", "User Research", "Design Systems", "Prototyping"]
        },
        {
          title: "Product Designer",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Design",
          description: "Lead design initiatives for our AI products, collaborate with product and engineering teams.",
          skills: ["Product Design", "User Experience", "Design Thinking", "Wireframing"]
        },
        {
          title: "Technical Product Manager",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Product",
          description: "Manage technical aspects of our AI products, work closely with engineering teams on implementation.",
          skills: ["Technical PM", "API Design", "System Architecture", "Agile"]
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
          skills: ["Business Development", "Partnership", "Sales Strategy", "Market Analysis"]
        },
        {
          title: "Sales Engineer",
          location: "Cairo, Egypt / Remote",
          type: "Full-time",
          department: "Sales",
          description: "Support sales efforts with technical expertise, conduct product demonstrations and technical discussions.",
          skills: ["Technical Sales", "Solution Architecture", "Customer Engagement", "AI Knowledge"]
        },
        {
          title: "Marketing Manager",
          location: "Remote",
          type: "Full-time",
          department: "Marketing",
          description: "Develop and execute marketing strategies for our AI solutions, manage digital marketing campaigns.",
          skills: ["Digital Marketing", "Content Marketing", "SEO/SEM", "Brand Management"]
        },
        {
          title: "Operations Manager",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Operations",
          description: "Oversee daily operations, optimize processes, and ensure efficient resource allocation.",
          skills: ["Operations Management", "Process Optimization", "Project Management", "Analytics"]
        },
        {
          title: "Customer Success Manager",
          location: "Remote",
          type: "Full-time",
          department: "Customer Success",
          description: "Ensure customer satisfaction and success with our AI solutions, manage client relationships.",
          skills: ["Customer Success", "Account Management", "Technical Support", "Communication"]
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
          skills: ["Financial Analysis", "Excel", "Financial Modeling", "Reporting"]
        },
        {
          title: "Compliance Officer",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Legal",
          description: "Ensure compliance with regulations, manage legal risks, and support contract negotiations.",
          skills: ["Compliance", "Legal Research", "Risk Management", "Contract Law"]
        },
        {
          title: "Intellectual Property Specialist",
          location: "Remote",
          type: "Full-time",
          department: "Legal",
          description: "Manage IP portfolio, file patents, and protect our technological innovations.",
          skills: ["IP Law", "Patent Filing", "Technology Law", "Legal Research"]
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
          skills: ["HR Strategy", "Talent Management", "Employee Relations", "Organizational Development"]
        },
        {
          title: "Talent Acquisition Specialist",
          location: "Remote",
          type: "Full-time",
          department: "HR",
          description: "Lead recruitment efforts for technical and non-technical roles, build talent pipelines.",
          skills: ["Recruiting", "Talent Sourcing", "Interview Process", "Employer Branding"]
        },
        {
          title: "Learning & Development Coordinator",
          location: "Cairo, Egypt",
          type: "Part-time",
          department: "HR",
          description: "Design and implement training programs, support employee development initiatives.",
          skills: ["Training Design", "Employee Development", "Learning Management", "Facilitation"]
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
          skills: ["Educational Design", "AI/ML Knowledge", "Curriculum Development", "E-Learning"]
        },
        {
          title: "Technical Writer",
          location: "Remote",
          type: "Full-time",
          department: "Documentation",
          description: "Create technical documentation, API guides, and user manuals for our AI products.",
          skills: ["Technical Writing", "Documentation", "API Documentation", "Content Creation"]
        },
        {
          title: "Training Specialist",
          location: "Cairo, Egypt",
          type: "Full-time",
          department: "Training",
          description: "Conduct training sessions for clients and internal teams on our AI solutions.",
          skills: ["Training Delivery", "Presentation Skills", "AI Knowledge", "Customer Training"]
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
    <div className="bg-white min-h-screen">
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
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why <span className="font-light text-blue-600" style={{ letterSpacing: '0.2em' }}>
                <span>A  p  e  x    M  e  r  i  d  i  a  n</span>
                <sup className="text-xs ml-1">®</sup>
              </span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join a company that&apos;s not just building AI solutions, but creating the future of intelligent technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cutting-Edge Research</h3>
              <p className="text-gray-600">Work on breakthrough AI technologies that will shape the next decade.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">World-Class Team</h3>
              <p className="text-gray-600">Collaborate with leading experts from top universities and tech companies.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">Accelerate your career with mentorship and learning opportunities.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible schedules and comprehensive benefits for your well-being.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions by Category */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 mb-6">
              Discover exciting opportunities across all departments to make an impact in artificial intelligence
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-blue-800 font-medium">
                <strong>{jobCategories.reduce((total, category) => total + category.jobs.length, 0)} Open Positions</strong> across {jobCategories.length} departments
              </p>
            </div>
          </div>
          
          <div className="space-y-12">
            {jobCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              const colors = getColorClasses(category.color);
              
              return (
                <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className={`${colors.bg} rounded-full w-12 h-12 flex items-center justify-center mr-4`}>
                      <IconComponent className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600">{category.jobs.length} open position{category.jobs.length > 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {category.jobs.map((job, jobIndex) => (
                      <div key={jobIndex} className={`border ${colors.border} rounded-lg p-6 hover:shadow-md transition-shadow`}>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h4>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
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
                            <p className="text-gray-600 mb-4">{job.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {job.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className={`px-3 py-1 ${colors.bg} ${colors.text} text-xs rounded-full`}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="mt-4 lg:mt-0 lg:ml-6">
                            <Link
                              href="/contact"
                              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
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

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-lg text-gray-600">
              Our streamlined hiring process ensures we find the best talent while respecting your time
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Apply</h3>
              <p className="text-gray-600">Submit your application through our contact form with your resume and cover letter.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Screen</h3>
              <p className="text-gray-600">Initial screening call to discuss your background and interest in the role.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600">Technical and cultural fit interviews with team members and leadership.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Offer</h3>
              <p className="text-gray-600">Receive your offer and join our team of AI innovators!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Shape the Future?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Join <span className="font-light" style={{ letterSpacing: '0.2em' }}>A  p  e  x    M  e  r  i  d  i  a  n</span> and be part of the most important technological advancement in human history.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-100 transition-colors"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-900 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
