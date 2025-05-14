
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1081&q=80")' }}>
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold font-playfair mb-4">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover the wide range of catering services we offer to make your events special and memorable.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              At Morya Caterers, we provide comprehensive catering solutions tailored to your specific needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold font-playfair mb-4 text-burgundy-800">Wedding Catering</h3>
                <p className="text-gray-700 mb-4">
                  We understand that your wedding day is one of the most important days of your life. Our wedding catering service is designed to add a culinary delight to your special day, with exquisite dishes that will impress your guests.
                </p>
                <p className="text-gray-700 mb-6">
                  From intimate ceremonies to grand celebrations, we offer customized menus that reflect your taste and preferences. Our experienced team ensures seamless service, allowing you to focus on creating memories.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-morya-700 mb-2">What's Included:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Customized menu planning</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Professional service staff</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Elegant food presentation</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Setup and cleanup</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Special dietary accommodations</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Menu tasting session</span>
                    </li>
                  </ul>
                </div>
                <Link to="/book-now" className="btn-primary">
                  Book Wedding Catering
                </Link>
              </div>
              <div className="order-1 lg:order-2">
               <img 
  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGNhdGVyaW5nfGVufDB8fDB8fHww" 
  alt="Corporate Catering"
  className="rounded-lg shadow-lg w-full h-80 object-cover"
/>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
               <img 
  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VkZGluZyUyMGNhdGVyaW5nfGVufDB8fDB8fHww" 
  alt="Corporate Catering"
  className="rounded-lg shadow-lg w-full h-80 object-cover"
/>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-playfair mb-4 text-burgundy-800">Corporate Catering</h3>
                <p className="text-gray-700 mb-4">
                  Make your corporate events, meetings, and conferences more productive with our professional corporate catering services. We offer a range of menu options suitable for business breakfasts, lunches, and dinner events.
                </p>
                <p className="text-gray-700 mb-6">
                  Our corporate catering is designed for efficiency and impression, with on-time delivery and presentation that reflects your company's professionalism. We can accommodate various dietary requirements and preferences.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-morya-700 mb-2">What's Included:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Boxed meal options</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Buffet setup</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Coffee & tea service</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Punctual delivery</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Branded food presentation</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Eco-friendly packaging</span>
                    </li>
                  </ul>
                </div>
                <Link to="/book-now" className="btn-primary">
                  Book Corporate Catering
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold font-playfair mb-4 text-burgundy-800">Private Celebrations</h3>
                <p className="text-gray-700 mb-4">
                  From birthdays and anniversaries to religious ceremonies and family reunions, our private celebrations catering service is perfect for making your personal milestones memorable.
                </p>
                <p className="text-gray-700 mb-6">
                  We work closely with you to understand your vision and create a menu that suits the occasion, whether it's an intimate gathering at home or a larger celebration at a venue of your choice.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-morya-700 mb-2">What's Included:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Personalized menu</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Theme-based presentation</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Flexible serving options</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Cake and dessert options</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Kids' menu available</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>On-site cooking options</span>
                    </li>
                  </ul>
                </div>
                <Link to="/book-now" className="btn-primary">
                  Book Private Celebration
                </Link>
              </div>
              <div className="order-1 lg:order-2">
               <img 
  src="https://images.unsplash.com/photo-1525265332434-d52e2314161d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D" 
  alt="Private Celebrations"
  className="rounded-lg shadow-lg w-full h-80 object-cover"
/>
              </div>
            </div>

            {/* Service 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
               
<img 
  src="https://images.unsplash.com/photo-1576842546422-60562b9242ae?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0ZXJpbmclMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D" 
  alt="Event Catering"
  className="rounded-lg shadow-lg w-full h-80 object-cover"
/>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-playfair mb-4 text-burgundy-800">Outdoor Events</h3>
                <p className="text-gray-700 mb-4">
                  Our mobile catering service brings the excitement of live cooking and fresh food to your outdoor events. Perfect for festivals, street markets, corporate events, and private parties.
                </p>
                <p className="text-gray-700 mb-6">
                  Experience the unique atmosphere of our food truck service with custom menus featuring Indian street food favorites and fusion dishes that are sure to impress your guests.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-morya-700 mb-2">What's Included:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Mobile cooking station</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Live food preparation</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Street food menu options</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Customizable serving sizes</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Beverage service</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-morya-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Interactive food experience</span>
                    </li>
                  </ul>
                </div>
                <Link to="/book-now" className="btn-primary">
                  Book Food Truck Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Additional Services</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Enhance your event with our additional services designed to provide a complete experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-morya-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-morya-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3 text-burgundy-800">Menu Consultation</h3>
              <p className="text-gray-600 mb-4">
                Our chefs offer personalized menu consultation to create the perfect dining experience tailored to your preferences, budget, and dietary requirements.
              </p>
              <Link to="/contact" className="flex items-center text-morya-600 font-medium hover:text-morya-700">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-morya-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-morya-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3 text-burgundy-800">Staff Hire</h3>
              <p className="text-gray-600 mb-4">
                Beyond catering, we offer professional waitstaff, bartenders, and event managers to ensure your event runs smoothly from start to finish.
              </p>
              <Link to="/contact" className="flex items-center text-morya-600 font-medium hover:text-morya-700">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-morya-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-morya-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3 text-burgundy-800">Equipment Rental</h3>
              <p className="text-gray-600 mb-4">
                We provide high-quality equipment rental services including tables, chairs, linens, tableware, and serving equipment to complement your event.
              </p>
              <Link to="/contact" className="flex items-center text-morya-600 font-medium hover:text-morya-700">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Find answers to common questions about our catering services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">

            <div className="py-5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-burgundy-800">How far in advance should I book your catering services?</h3>
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
                <h3 className="text-lg font-semibold text-burgundy-800">Do you accommodate dietary restrictions and preferences?</h3>
                <span className="text-morya-600">+</span>
              </div>
              <div className="mt-3">
                <p className="text-gray-600">
                  Yes, we can accommodate various dietary needs including vegetarian, vegan, gluten-free, and specific allergies. Please inform us of any requirements during the consultation phase.
                </p>
              </div>
            </div>

            <div className="py-5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-burgundy-800">What is your pricing structure?</h3>
                <span className="text-morya-600">+</span>
              </div>
              <div className="mt-3">
                <p className="text-gray-600">
                  Our pricing varies based on menu selection, number of guests, service style, and additional requirements. We provide detailed quotes after an initial consultation to ensure transparency.
                </p>
              </div>
            </div>

            <div className="py-5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-burgundy-800">Do you provide tastings before the event?</h3>
                <span className="text-morya-600">+</span>
              </div>
              <div className="mt-3">
                <p className="text-gray-600">
                  Yes, we offer menu tastings for weddings and large events. For smaller events, tastings can be arranged for a nominal fee, which is credited toward your final bill if you book our services.
                </p>
              </div>
            </div>

        
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
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-morya-600 text-white">
        <div className="container-custom text-center">
<h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-teal-400">
  Ready to Create an Unforgettable Experience?
</h2>

          <p className="text-xl max-w-2xl mx-auto mb-8 text-black">
  Contact us today to discuss your event needs and let our team craft the perfect catering solution for you.
</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book-now" className="bg-teal-400 text-white hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-all duration-300">
  Book Now
</Link>

            <Link to="/contact" className="bg-purple-500 text-white hover:bg-white hover:text-purple-500 px-6 py-2.5 rounded-md font-medium transition-all duration-300">
  Contact Us
</Link>

          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
