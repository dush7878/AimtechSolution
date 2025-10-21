import { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, Linkedin, Github, Briefcase, Send, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

 const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwpfYsGEY9vWpPb_k-7qiSYcSXayIoX-W9ddNtOrS0ufdmSjCCciO7Q6OlPkDRfEowEPg/exec"; // Replace with your deployed web app URL

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formDataToSend = new URLSearchParams(formData);

  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: formDataToSend,
    });

    if (response.ok) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send message");
    }
  } catch (error) {
    toast.error("An error occurred. Try again!");
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[36px] sm:text-[44px] font-[700] text-black mb-4">
            Get In <span className="text-[#007BFF]">Touch</span>
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-600 max-w-2xl mx-auto">
            Let's discuss how we can help bring your project to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 rounded-2xl shadow-xl border-0 bg-gray-50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[15px] text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full rounded-lg border-gray-300 focus:border-[#007BFF] focus:ring-[#007BFF] bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[15px] text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-lg border-gray-300 focus:border-[#007BFF] focus:ring-[#007BFF] bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[15px] text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={6}
                    className="w-full rounded-lg border-gray-300 focus:border-[#007BFF] focus:ring-[#007BFF] resize-none bg-white"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white py-6 rounded-lg text-[16px] shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-[24px] font-[600] text-black mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#007BFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#007BFF]" />
                  </div>
                  <div>
                    <div className="text-[15px] font-[600] text-black mb-1">Email</div>
                    <a
                      href="mailto:contact@aimtech.com"
                      className="text-[14px] text-gray-600 hover:text-[#007BFF] transition-colors"
                    >
                      solutionaimtech@gmail.com
                    </a>
                  </div>
                </div>
                {/* <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#007BFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#007BFF]" />
                  </div>
                  <div>
                    <div className="text-[15px] font-[600] text-black mb-1">Phone</div>
                    <a
                      href="tel:+1234567890"
                      className="text-[14px] text-gray-600 hover:text-[#007BFF] transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div> */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#007BFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#007BFF]" />
                  </div>
                  <div>
                    <div className="text-[15px] font-[600] text-black mb-1">Location</div>
                    <p className="text-[14px] text-gray-600">Remote</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div>
              <h3 className="text-[24px] font-[600] text-black mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#007BFF] hover:bg-[#0056b3] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#007BFF] hover:bg-[#0056b3] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                >
                  <Github size={20} className="text-white" />
                </a>
                <a
                  href="https://upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#007BFF] hover:bg-[#0056b3] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                >
                  <Briefcase size={20} className="text-white" />
                </a>
              </div>
            </div> */}

            {/* <Card className="p-6 rounded-2xl shadow-lg border-0 bg-gradient-to-br from-[#007BFF] to-[#0056b3]">
              <h4 className="text-[20px] font-[600] text-white mb-3">Ready to Start?</h4>
              <p className="text-[14px] text-white/90 mb-4 leading-relaxed">
                Get a free consultation and quote for your project. Let's build something amazing together!
              </p>
              <Button
                variant="outline"
                className="bg-white text-[#007BFF] hover:bg-gray-100 border-0 rounded-lg px-6 py-2"
              >
                Schedule a Call
              </Button>
            </Card> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
