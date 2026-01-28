import React from 'react';
import { User, Code, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Projects Completed', value: '30+', icon: Code },
    { label: 'Technologies Mastered', value: '20+', icon: GraduationCap }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                <User size={14} className="text-blue-600" />
                <span className="text-xs sm:text-sm font-medium text-blue-600">About Me</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Passionate Developer
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Creating Digital Solutions
                </span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  I'm a dedicated Full Stack Developer currently pursuing my B.Tech in Information Technology 
                  at AKGEC, Ghaziabad. With a strong foundation in modern web technologies, I specialize in 
                  building scalable and user-friendly applications.
                </p>
                
                <p>
                  My journey in software development has been driven by curiosity and a passion for solving 
                  complex problems. I enjoy working with the MERN stack and am constantly exploring new 
                  technologies to enhance my skill set.
                </p>
                
                <p>
                  When I'm not coding, you'll find me conducting workshops, mentoring fellow developers, 
                  or contributing to open-source projects. I believe in continuous learning and sharing 
                  knowledge with the community.
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Location</h4>
                <p className="text-gray-600 text-sm sm:text-base">Ghaziabad, UP, India</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Education</h4>
                <p className="text-gray-600 text-sm sm:text-base">B.Tech IT (2026)</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Focus</h4>
                <p className="text-gray-600 text-sm sm:text-base">Full Stack Development</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Availability</h4>
                <p className="text-gray-600 text-sm sm:text-base">Open to Opportunities</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-6 sm:p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 text-center space-y-3 sm:space-y-4">
                  <div className="inline-flex p-3 sm:p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl">
                    <stat.icon size={24} className="text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-600 leading-relaxed">
                      {stat.label}
                    </p>
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

export default About;
