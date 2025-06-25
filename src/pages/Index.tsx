import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")' }}>
        <div className="container-custom">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold font-playfair mb-4">
              Exquisite Catering for Your Special Moments
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              From intimate gatherings to grand celebrations, we create memorable culinary experiences with authentic Indian flavors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="btn-primary">
                Explore Our Menu
              </Link>
              <Link to="/book-now" className="btn-outline text-white border-white hover:bg-white hover:text-morya-800" onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              We offer a range of catering services tailored to your needs, from intimate family gatherings to large corporate events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:-translate-y-2 transition-all duration-300">
              <div className="h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                  alt="Wedding Catering"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-playfair mb-3 text-burgundy-800">Wedding Catering</h3>
                <p className="text-gray-600 mb-4">
                  Make your special day memorable with our exquisite wedding catering services featuring authentic Indian cuisine.
                </p>
                <Link to="/services" className="flex items-center text-morya-600 font-medium hover:text-morya-700">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:-translate-y-2 transition-all duration-300">
              <div className="h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                  alt="Corporate Events"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-playfair mb-3 text-burgundy-800">Corporate Events</h3>
                <p className="text-gray-600 mb-4">
                  Impress your clients and team with our professional corporate catering services designed for meetings and events.
                </p>
                <Link to="/services" className="flex items-center text-morya-600 font-medium hover:text-morya-700">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:-translate-y-2 transition-all duration-300">
              <div className="h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Birthday Parties"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-playfair mb-3 text-burgundy-800">Private Celebrations</h3>
                <p className="text-gray-600 mb-4">
                  From birthdays to anniversaries, let us handle the food so you can focus on celebrating your special occasion.
                </p>
                <Link to="/services" className="flex items-center text-morya-600 font-medium hover:text-morya-700">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="About Morya Caterers"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="section-title">About Morya Caterers</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2020, Morya Caterers is a premier catering service in Pune, specializing in authentic Indian cuisine with a modern twist. Our team of experienced chefs brings culinary excellence to every event, ensuring a memorable dining experience.
              </p>
              <p className="text-gray-600 mb-6">
                We take pride in using fresh, locally sourced ingredients to create delicious dishes that celebrate the rich culinary heritage of India.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-morya-600 mr-2"></div>
                  <span className="text-gray-700">Experienced Chefs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-morya-600 mr-2"></div>
                  <span className="text-gray-700">Quality Ingredients</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-morya-600 mr-2"></div>
                  <span className="text-gray-700">Customized Menus</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-morya-600 mr-2"></div>
                  <span className="text-gray-700">Timely Service</span>
                </div>
              </div>
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-20 bg-morya-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Featured Menu</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Discover our most popular dishes that have delighted our customers. From starters to desserts, we offer a wide range of authentic Indian cuisine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                  alt="Paneer Tikka"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold font-playfair text-burgundy-800">Paneer Tikka</h3>
                  <span className="text-morya-600 font-medium">Starter</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Marinated cottage cheese pieces grilled to perfection with bell peppers and onions.
                </p>
              </div>
            </div>

            {/* Menu Item 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Butter Chicken"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold font-playfair text-burgundy-800">Butter Chicken</h3>
                  <span className="text-morya-600 font-medium">Main Course</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Tender chicken pieces in a rich tomato, butter, and cream sauce with aromatic spices.
                </p>
              </div>
            </div>

            {/* Menu Item 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1633383718081-22ac93e3db65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
                  alt="Gulab Jamun"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold font-playfair text-burgundy-800">Gulab Jamun</h3>
                  <span className="text-morya-600 font-medium">Dessert</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Soft milk dumplings soaked in a sweet rose-flavored syrup, garnished with nuts.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cover bg-center text-white" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1519690889869-e705e59f72e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")' }}>
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to discuss your catering needs and let us create a memorable culinary experience for your special occasion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book-now" className="btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}>
              Book Now
            </Link>
            <a href="tel:+919175202071" className="btn-outline text-white border-white hover:bg-white hover:text-burgundy-800">
              Call Us: +91 9175202071
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
