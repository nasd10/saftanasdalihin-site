import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Mencegah reload halaman saat form disubmit
    console.log('Tombol submit diklik!');
    console.log('Form Data:', formData);

    try {
      // Use same-origin functions path so CORS is handled by the function headers
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      console.log('Response dari backend:', data);
      alert(data.message);  // Pesan sukses

      // Reset form setelah pengiriman data
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Gagal mengirim pesan');
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 md:px-12 text-white overflow-hidden bg-gray-900">
      <div className="absolute h-full inset-0 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-950 to-violet-900 z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob z-0 animation-delay-4000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-52 h-52 bg-violet-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-6000"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl py-10 font-bold text-center mb-16 text-violet-500 animate-fade-in-up">
          Get In Touch
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info Section */}
          <div className="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col justify-center animate-fade-in-up delay-200">
            <h3 className="text-3xl font-semibold mb-6 text-white">Contact Information</h3>
            <p className="text-gray-300 text-lg mb-8">
              Feel free to reach out to me through the form or using the contact details below.
            </p>

            <div className="space-y-6 text-gray-300 text-lg">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-violet-500 text-2xl" />
                <span>saftanasdalihin@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-violet-500 text-2xl" />
                <span>+62 851-5667-8549</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-violet-500 text-2xl" />
                <span>Bandung, West Java, Indonesia</span>
              </div>
            </div>

            <div className="flex justify-start space-x-6 mt-10">
              <a href="https://www.instagram.com/safta_nas/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-violet-500 text-3xl transition duration-300 transform hover:scale-110"
                 title="Instagram">
                <FaInstagram />
              </a>
              <a href="https://github.com/nasdthestudent" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-violet-500 text-3xl transition duration-300 transform hover:scale-110"
                 title="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/saftanasdalihin/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-violet-500 text-3xl transition duration-300 transform hover:scale-110"
                 title="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-xl animate-fade-in-up delay-400">
            <h3 className="text-3xl font-semibold mb-6 text-white">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-lg font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-lg font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-full
                          transition duration-300 transform hover:scale-105 active:scale-110 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
