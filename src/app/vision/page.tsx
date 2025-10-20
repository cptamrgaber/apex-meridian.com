
import React from 'react';
import Image from 'next/image';
import { BrainCircuit, Zap, ShieldCheck, GraduationCap, Users, Bot } from 'lucide-react';
import BrandName from '@/components/BrandName';

const AIPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            The Future is Intelligent
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
            At <BrandName />, we are not just building AI; we are architecting the future of intelligence. Our vision is to create a world where AI is a seamless extension of human potential, solving the world's most complex challenges and elevating everyday life.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Vision for AI</h2>
            <p className="text-lg mb-4">
              We envision a future where Artificial General Intelligence (AGI) acts as a collaborative partner for humanity. This partnership will unlock unprecedented levels of creativity, problem-solving, and efficiency across all domains of life.
            </p>
            <p className="text-lg">
              From revolutionizing industries to personalizing daily experiences, our AI is designed to be ethical, transparent, and empowering. We are committed to building AI that is not only intelligent but also wise.
            </p>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/solutions/agi-development.jpg"
              alt="Future of AI"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">AI in Action: Transforming Industries</h2>

        {/* Industry Sections */}
        <div className="space-y-20">
          {renderIndustrySection(
            "Aviation",
            "Intelligent flight systems, predictive maintenance, and autonomous air traffic control will make air travel safer, faster, and more efficient than ever before.",
            "/images/solutions/aviation-ai.jpg",
            <Zap className="w-12 h-12 text-blue-600" />
          )}
          {renderIndustrySection(
            "Cybersecurity",
            "Our AI-powered cyber defense systems can predict and neutralize threats before they happen, creating a new paradigm of proactive security.",
            "/images/solutions/cybersecurity-ai.jpg",
            <ShieldCheck className="w-12 h-12 text-green-600" />
          )}
          {renderIndustrySection(
            "Education",
            "Personalized AI tutors will adapt to every student's unique learning style, making education more engaging, effective, and accessible to all.",
            "/images/solutions/education-ai.jpg",
            <GraduationCap className="w-12 h-12 text-purple-600" />
          )}
        </div>

        <h2 className="text-4xl font-bold text-center text-blue-900 my-16">AI in Everyday Life</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {renderEverydayAITask(
            "Personal Assistants",
            "AI assistants that anticipate your needs, manage your schedule, and automate mundane tasks, freeing you to focus on what matters.",
            <Bot className="w-12 h-12 mx-auto text-indigo-600" />
          )}
          {renderEverydayAITask(
            "Healthcare",
            "AI-powered diagnostics, personalized treatment plans, and proactive health monitoring to extend and improve quality of life.",
            <BrainCircuit className="w-12 h-12 mx-auto text-red-600" />
          )}
          {renderEverydayAITask(
            "Smart Homes",
            "Homes that learn your preferences, optimize energy consumption, and provide a seamless, intuitive living experience.",
            <Users className="w-12 h-12 mx-auto text-yellow-600" />
          )}
        </div>
      </main>
    </div>
  );
};

const renderIndustrySection = (title: string, description: string, imageUrl: string, icon: React.ReactNode) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-lg shadow-lg">
    <div className="relative h-80 rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div>
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-3xl font-bold ml-4">{title}</h3>
      </div>
      <p className="text-lg">{description}</p>
    </div>
  </div>
);

const renderEverydayAITask = (title: string, description: string, icon: React.ReactNode) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default AIPage;

