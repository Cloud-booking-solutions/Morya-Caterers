import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    else if (!/^[A-Za-z ]+$/.test(formData.name.trim())) newErrors.name = 'Name can only contain alphabets and spaces';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.trim())) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message should be at least 10 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFormError(true);
      setLoading(false);
      return;
    }
    setLoading(true);
    setErrors({});
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      setFormError(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon.",
        variant: "success",
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")' }}>
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold font-playfair mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us with any questions or to book our services.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-morya-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-morya-600" />
              </div>
              <h3 className="text-lg font-semibold text-burgundy-800 mb-2">Phone</h3>
              <p className="text-gray-600 mb-3">Call us directly:</p>
              <a href="tel:+919175202071" className="text-morya-600 font-medium hover:text-morya-800 transition-colors">+91 9175202071</a><br/>
              <a href="tel:+919665202072" className="text-morya-600 font-medium hover:text-morya-800 transition-colors">+91 9665202072</a>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-morya-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-morya-600" />
              </div>
              <h3 className="text-lg font-semibold text-burgundy-800 mb-2">Email</h3>
              <p className="text-gray-600 mb-3">Send us an email:</p>
              <a href="mailto:moryacaterers2020@gmail.com" className="text-morya-600 font-medium hover:text-morya-800 transition-colors break-all">
                moryacaterers2020@gmail.com
              </a>
            </div>

            {/* Contact Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-morya-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-morya-600" />
              </div>
              <h3 className="text-lg font-semibold text-burgundy-800 mb-2">Location</h3>
              <p className="text-gray-600 mb-3">Our office:</p>
              <address className="text-morya-600 font-medium not-italic">
                <a href="https://maps.google.com/?q=Gold+Gym,+Near,+Kaspate+Wasti+Rd,+Shankar+Kalat+Nagar,+Wakad,+Pimpri-Chinchwad,+Pune,+Maharashtra+411057" target="_blank" rel="noopener noreferrer" className="underline hover:text-morya-800">
                  Gold Gym, Near, Kaspate Wasti Rd, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Pune, Maharashtra 411057
                </a>
              </address>
            </div>

            {/* Contact Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-morya-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-morya-600" />
              </div>
              <h3 className="text-lg font-semibold text-burgundy-800 mb-2">Office Hours</h3>
              <p className="text-gray-600 mb-3">We are available:</p>
              <ul className="text-morya-600 font-medium">
                <li>Monday - Sunday: 9am - 7pm</li>
                {/* <li>Sat: 10am - 6pm</li>
                <li>Sun: 10am - 4pm</li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-10 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-playfair font-bold text-burgundy-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                {formSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
                
                {formError && (
                  <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-md">
                    Please fill in all required fields.
                  </div>
                )}
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-morya-600 focus:border-transparent`}
                    required 
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-morya-600 focus:border-transparent`}
                    required 
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-morya-600 focus:border-transparent`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-morya-600 focus:border-transparent" 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-morya-600 focus:border-transparent`}
                    required
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition-colors w-full flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : 'Submit Message'}
                </Button>
              </form>
            </div>
            
            {/* Google Map */}
            <div className="h-full min-h-[400px] rounded-lg shadow-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.397651959289!2d73.76712167496503!3d18.60117568250808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b95853a7c101%3A0x8b28a4fbe702799f!2sMorya%20Caterers!5e0!3m2!1sen!2sin!4v1747222585220!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">

            <div className="py-5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-burgundy-800">What areas do you serve?</h3>
                <span className="text-morya-600">+</span>
              </div>
              <div className="mt-3">
                <p className="text-gray-600">
                  We primarily serve Pune and surrounding areas within a 50 km radius. For events beyond this range, additional travel charges may apply. Please contact us to discuss your specific location.
                </p>
              </div>
            </div>

            <div className="py-5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-burgundy-800">How far in advance should I book your services?</h3>
                <span className="text-morya-600">+</span>
              </div>
              <div className="mt-3">
                <p className="text-gray-600">
                  For weddings and large events, we recommend booking 3-6 months in advance. For smaller events, 2-4 weeks notice is typically sufficient, though availability may vary during peak seasons.
                </p>
              </div>
            </div>

            <div className="py-5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-burgundy-800">What is the minimum number of guests required for booking?</h3>
                <span className="text-morya-600">+</span>
              </div>
              <div className="mt-3">
                <p className="text-gray-600">
                  Our standard packages start at 25 guests, but we can accommodate smaller groups with customized solutions. Please contact us to discuss your specific requirements.
                </p>
              </div>
            </div>

            <div className="py-5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-burgundy-800">What payment methods do you accept?</h3>
                <span className="text-morya-600">+</span>
              </div>
              <div className="mt-3">
                <p className="text-gray-600">
                  We accept various payment methods including cash, bank transfers, and major credit/debit cards. We typically require a deposit to secure your booking, with the balance due before the event.
                </p>
              </div>
            </div>

            <div className="py-5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-burgundy-800">What happens if I need to cancel or reschedule?</h3>
                <span className="text-morya-600">+</span>
              </div>
              <div className="mt-3">
                <p className="text-gray-600">
                  Our cancellation policy varies based on the size of the event and notice period. Please refer to your contract for specific terms or contact us to discuss your situation. We try to be as flexible as possible with rescheduling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section - Updated with a contrasting background */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            Ready to Create an Unforgettable Culinary Experience?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Book our catering services today and let us make your next event special.
          </p>
          <a href="/book-now" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-all duration-300 inline-block" onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}>
            Book Now
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;

