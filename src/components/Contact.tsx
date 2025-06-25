
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_n18y6e7';
      const templateId = 'template_hhrj4xl';
      const publicKey = 'pV4037ZM6BiYtBjTO';

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Trisha Kumari',
        },
        publicKey
      );

      console.log('Email sent successfully!');
      
      // Reset form on success
      setFormData({ name: '', email: '', message: '' });
      
      // You can add a success toast here if you have a toast system
      alert('Message sent successfully! I\'ll get back to you soon.');
      
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                I'm always interested in hearing about new opportunities, interesting projects, 
                or just having a chat about technology and development. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <div className="p-2 sm:p-3 bg-blue-600 rounded-lg">
                  <Mail className="text-white" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Email</h4>
                  <a href="mailto:trisha8484kumari@gmail.com" className="text-blue-600 hover:underline text-sm sm:text-base">
                    trisha8484kumari@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                <div className="p-2 sm:p-3 bg-green-600 rounded-lg">
                  <MapPin className="text-white" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Location</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Ghaziabad, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">Follow Me</h4>
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="https://github.com/Trishakumari1122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/trisha-kumari-9a5457296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors disabled:opacity-50 text-sm sm:text-base"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors disabled:opacity-50 text-sm sm:text-base"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none disabled:opacity-50 text-sm sm:text-base"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
