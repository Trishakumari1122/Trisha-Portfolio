
import React from 'react';
import { Briefcase, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Java Developer Intern",
      company: "Codec Technologies",
      period: "June 2025 - August 2025",
      location: "Remote",
      description: "Worked as a Java Development Intern at Codec Technologies, where I learned to build and debug Java applications using core concepts like OOP and collections, focusing on code quality and problem solving. Worked with standard software development practices, version control, and team-based workflows",
      achievements: [
        "Developed 5+ REST APIs with comprehensive documentation",
        "Reduced API response time by 35%",
        "Implemented automated testing with 90% code coverage"
      ],
      skills: ["Java", "OOPs", "Collections", "Debugging", "Problem Solving", "Git", "SDLC", "Clean Code"],
      type: "internship",
      current: false
    },
    {
      title: "Frontend Developer Lead",
      company: "MLCOE Society",
      period: "2022 - 2024",
      location: "AKGEC, Ghaziabad",
      description: "Developed educational platforms focused on Machine Learning for over 300 students, creating interactive learning interfaces using React Hooks, Redux, and Material UI to significantly boost student engagement. Improved application performance using efficient rendering and code optimization techniques consistently.",
      achievements: [
        "Led a team of 8 developers on 4 major projects",
        "Conducted 10+ workshops with 150+ participants",
        "Increased team productivity by 50%"
      ],
      skills: ["React.js", "JavaScript", "Redux", "HTML5", "CSS3", "Material UI", "Responsive Design", "Git"],
      type: "leadership",
      current: false
    }
  ];

  const getTypeInfo = (type: string) => {
    switch (type) {
      case 'internship':
        return { color: 'from-blue-500 to-cyan-500', label: 'Internship', icon: '💼' };
      case 'leadership':
        return { color: 'from-purple-500 to-pink-500', label: 'Leadership', icon: '👑' };
      default:
        return { color: 'from-gray-500 to-gray-600', label: 'Other', icon: '📋' };
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
            <Briefcase size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Career Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Professional
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            My journey through internships and leadership roles in software development
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 hidden lg:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 lg:mb-16">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>

                {/* Content Card */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}>
                  <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:-translate-y-2">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className={`px-3 py-1 bg-gradient-to-r ${getTypeInfo(exp.type).color} text-white rounded-full text-sm font-medium flex items-center gap-2`}>
                            <span>{getTypeInfo(exp.type).icon}</span>
                            {getTypeInfo(exp.type).label}
                          </div>
                          {exp.current && (
                            <div className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                              Current
                            </div>
                          )}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {exp.title}
                        </h3>
                        
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-600">
                            <Award size={16} className="mr-2" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar size={14} className="mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <MapPin size={14} className="mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <TrendingUp size={16} className="text-green-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
