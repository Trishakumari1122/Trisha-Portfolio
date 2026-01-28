
import React from 'react';
import { Github, Linkedin, Mail, Download, Eye, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resumee.pdf';
    link.download = 'Trisha_Kumari_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern Background with Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-12 lg:py-20">
          
          {/* Profile Image Section - Mobile First, Desktop Left */}
          <div className="flex justify-center order-1 lg:order-1 w-full">
            <div className="relative group">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
                {/* Animated Border */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-1.5"> */}
                 <div className="absolute p-1.5">
                  <div className="w-full h-full rounded-full  p-1.5"> 
                    {/* Profile Image */}
                    <img 
                      alt="Trisha Kumari" 
                      src="/img11.png" 
                      className="w-full h-full  rounded-full shadow-2xl object-cover object-top" 
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce delay-300"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce delay-700"></div>
                <div className="absolute top-1/4 -left-4 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-4 sm:-right-8 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>

          {/* Content Section - Mobile Second, Desktop Right */}
          <div className="text-center lg:text-left order-2 lg:order-2 space-y-6 lg:space-y-8 w-full">
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-4 sm:mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm font-medium text-blue-600 tracking-wider uppercase">Available for Work</span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                    Hi, I'm
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Trisha Kumari
                  </span>
                </h1>
                
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-light">
                  <span className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
                    <span className="text-xl sm:text-2xl">💻</span>
                    <span className="text-sm sm:text-base lg:text-lg">Full Stack Developer</span>
                  </span>
                </div>
              </div>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light px-4 sm:px-0">
               Full Stack Developer with expertise in
React, Node.js, MongoDB, and real-time
web application development. Built
production-ready systems like AI Virtual
Assistant and Uber-style ride booking
app with live tracking and secure
authentication. Strong foundation in Java
from internship experience and
committed to continuous learning and
delivering high-performance solutions.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-8 sm:mb-12 px-4 sm:px-0">
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    <Eye size={18} />
                    <span className="text-sm sm:text-base">View Projects</span>
                  </span>
                </button>
                
                <button 
                  onClick={downloadResume}
                  className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-2xl font-semibold border border-gray-200/50 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Download size={18} />
                    <span className="text-sm sm:text-base">Download Resume</span>
                  </span>
                </button>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                <a href="https://github.com/Trishakumari1122" target="_blank" rel="noopener noreferrer" className="group p-2 sm:p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Github size={18} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
                </a>
                <a href="https://linkedin.com/in/trisha-kumari-9a5457296" target="_blank" rel="noopener noreferrer" className="group p-2 sm:p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Linkedin size={18} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
                </a>
                <a href="mailto:trisha8484kumari@gmail.com" className="group p-2 sm:p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Mail size={18} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <p className="text-xs sm:text-sm text-gray-500 mb-2">Scroll to explore</p>
          <ArrowDown size={16} className="text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
