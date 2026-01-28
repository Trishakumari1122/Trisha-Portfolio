import React from 'react';
import { Award, Download, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Full Stack Web Development",
      provider: "Udemy",
      date: "2025",
      description: "Comprehensive course covering MERN stack development with hands-on experience in React.js, Node.js, Express.js, and MongoDB, focusing on RESTful API development, secure authentication, and deployment strategies using industry-standard best practices.",
      skills: ["React.js","Html", "CSS", "Node.js", "MongoDB", "Express.js", "JWT Authentication", "REST APIs", "Web Development"],
      credentialUrl: "/images/fullstack-cert.pdf",
      badgeColor: "bg-blue-600"
    },
    {
      title: "Introduction to MERN Stack",
      provider: "Simplilearn",
      date: "2025",
      description: "Fundamental concepts of MongoDB, Express.js, React.js, and Node.js, focusing on building scalable and efficient full-stack web applications with modern development practices, including hands-on exposure to RESTful APIs and frontend–backend integration.",
      skills: ["Html", "MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Web Development", "Frontend", "Backend"],
      credentialUrl: "/images/mern-cert.pdf",
      badgeColor: "bg-green-600"
    },
    {
  title: "Build Zomato Clone Using AI",
  provider: "Cuvette Tech",
  date: "2025",
  description: "Hands-on workshop focused on building a Zomato-like food delivery application using AI, covering real-world application design, interactive development, and practical implementation.",
  skills: [
    "AI Integration",
    "Frontend Development",
    "Backend Development",
    "Web Application Development",
    "Project-Based Learning"
   
  ],
  credentialUrl: "/images/Cuvette Certificate.pdf",
  badgeColor: "bg-blue-600"
}
  ];

  const achievements = [
    {
  title: "NCC Sergeant (Rank)",
  description: "Demonstrated leadership, discipline, and team management through drills, training, and organizational responsibilities",
  icon: "🎖️",
  year: "2023 - 2026"
},
    {
      title: "ML Workshop",
      description: "Conducted Machine Learning workshops for 150+ participants with 4.8/5 rating",
      icon: "🎓",
      year: "2024"
    },
    {
  title: "DSA Problem Solving – LeetCode",
  description: "Solved 150+ Data Structures and Algorithms problems, strengthening problem-solving skills and logical thinking",
  icon: "💡"
  
}
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional certifications and notable achievements in my development journey
          </p>
        </div>

        {/* Certificates Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-12 text-gray-800">Professional Certificates</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className={`h-2 ${cert.badgeColor}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 ${cert.badgeColor} rounded-lg mr-4`}>
                      <Award className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{cert.title}</h4>
                      <p className="text-gray-600 text-sm">{cert.provider} • {cert.date}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{cert.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm flex-1 justify-center"
                    >
                      <ExternalLink size={14} />
                      View
                    </a>
                    <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      <Download size={14} />
                      PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12 text-gray-800">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{achievement.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                  {achievement.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
