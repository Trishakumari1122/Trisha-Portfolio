
import React from 'react';
import { Code2, Database, Cloud, Palette, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML', level: 95 },
        { name: 'JavaScript', level: 95 },
        {name: 'Figma', level: 95},
        {name: 'Responsive Design', level: 90}
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'SQL', level: 85 },
        { name: 'REST APIs', level: 88 },
        { name: 'Authentication', level: 85 },
        { name: 'WebSockets', level: 80 },
        { name: 'API Testing', level: 80 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'AWS', level: 70 },
        { name: 'Docker', level: 75 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Firebase', level: 80 },
        { name: 'Supabase', level: 75 },
        { name: 'CI/CD', level: 75 },
        { name: 'Deployment Basics', level: 80 }
      ]
    }
  ];

  const tools = [
    { name: 'Java' },
    { name: 'Data Structures & Algorithms' },
    { name: 'SDLC' },
    { name: 'OOPs' },
    { name: 'Team Collaboration' },
    { name: 'Time management' }
  ];

  React.useEffect(() => {
    // Dynamically set width using data attribute and CSS
    document.querySelectorAll('[data-width]').forEach((el) => {
      const width = (el as HTMLElement).getAttribute('data-width');
      if (width) {
        (el as HTMLElement).style.width = `${width}%`;
      }
    });
  }, []);

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
            <Zap size={14} className="text-blue-600" />
            <span className="text-xs sm:text-sm font-medium text-blue-600">Skills & Expertise</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Technical
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Proficiency
            </span>
          </h2>
          
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="mb-6 sm:mb-8">
                <div className={`inline-flex p-3 sm:p-4 bg-gradient-to-r ${category.color} rounded-2xl mb-4`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700 text-sm sm:text-base">{skill.name}</span>
                        <span className="text-xs sm:text-sm font-semibold text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-700 ease-out`}
                          style={{ width: `${skill.level}%` }}
                          data-width={skill.level}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Software */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">Others</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <span className="text-lg sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                  {/* {tool.icon} */}
                </span>
                <span className="font-medium text-gray-700 text-sm sm:text-base">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
