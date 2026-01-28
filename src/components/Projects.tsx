import React from "react";
import { Github, ExternalLink, Star, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI Virtual Assistant",
      description: " Developed an AI-powered Virtual Assistant using React, Node.js, Express, and MongoDB, and integrated the Google Gemini API for voice command processing and powerful task automation workflows efficiently.",
      image: "/images/virtual assistant.jpg",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini API", "JWT Authentication", "REST APIs"],
      githubUrl: "https://github.com/Trishakumari1122/VirtualAssistant",
      liveUrl: "#",
      category: "Full Stack",
      featured: true,
      stats: { stars: 30, forks: 10 }
    },
    {
      title: "Uber Clone",
      description: "Built a full stack Uber-like application using React, Node.js, Express, and MongoDB with rider and driver management, ride tracking, real time updates, secure payment processing, and scalable backend architecture.",
      image: "/images/uberclone",
      technologies: ["React.js", "Node.js","Express.js", "MongoDB", "Google Maps API", "WebSocket", "JWT Authentication", "REST APIs"],
      githubUrl: "https://github.com/Trishakumari1122/Uber-Clone",
      liveUrl: "#",
      category: "Full Stack",
      featured: true,
      stats: { stars: 24, forks: 8 }
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
            <Star size={14} className="text-blue-600" />
            <span className="text-xs sm:text-sm font-medium text-blue-600">Featured Work</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Recent
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Explore my latest web development projects showcasing modern technologies and innovative solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex flex-wrap gap-2 p-2 bg-gray-100 rounded-2xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
                  <div className="flex items-center gap-2 px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs sm:text-sm font-medium">
                    <Star size={12} fill="currentColor" />
                    Featured
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star size={12} />
                        {project.stats.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <Github size={12} />
                        {project.stats.forks}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button - GitHub only */}
                <div className="flex pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 flex-1 justify-center group/btn text-sm sm:text-base"
                  >
                    <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
