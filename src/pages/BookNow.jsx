
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BookNow = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Step 2: Event Details
    eventType: '',
    customEventType: '',
    eventDate: '',
    eventTime: '',
    guestCount: '',
    eventVenue: '',
    venueAddress: '',
    
    // Step 3: Menu Preferences
    packageType: '',
    dietaryRequirements: '',
    additionalRequests: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear the error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateStep = (currentStep) => {
    let newErrors = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
        isValid = false;
      }
      
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
        isValid = false;
      }
      
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
        isValid = false;
      }
      
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
        isValid = false;
      }
    }

    if (currentStep === 2) {
      if (!formData.eventType) {
        newErrors.eventType = 'Event type is required';
        isValid = false;
      }
      
      if (formData.eventType === 'other' && !formData.customEventType.trim()) {
        newErrors.customEventType = 'Please specify the event type';
        isValid = false;
      }
      
      if (!formData.eventDate) {
        newErrors.eventDate = 'Event date is required';
        isValid = false;
      }
      
      if (!formData.eventTime) {
        newErrors.eventTime = 'Event time is required';
        isValid = false;
      }
      
      if (!formData.guestCount) {
        newErrors.guestCount = 'Guest count is required';
        isValid = false;
      }
      
      if (!formData.eventVenue) {
        newErrors.eventVenue = 'Venue information is required';
        isValid = false;
      }
    }

    if (currentStep === 3) {
      if (!formData.packageType) {
        newErrors.packageType = 'Please select a package';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateStep(step)) {
      setLoading(true);
      
      // Simulate form submission
      setTimeout(() => {
        setLoading(false);
        setFormSubmitted(true);
        toast({
          title: "Booking Submitted!",
          description: "We'll contact you soon to confirm the details.",
          variant: "success",
        });
        window.scrollTo(0, 0);
      }, 1500);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")' }}>
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold font-playfair mb-4">Book Our Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Fill out the form below to book our catering services for your upcoming event.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            {/* Form Header with Steps - Updated to ensure visibility */}
            <div className="bg-teal-600 text-white p-6">
              <h2 className="text-2xl font-bold font-playfair">Booking Form</h2>
              <p className="text-white mt-1">Please complete all required fields</p>
              
              {!formSubmitted && (
                <div className="mt-6 flex justify-between">
                  <div className={`flex items-center ${step >= 1 ? 'text-white' : 'text-white/50'}`}>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${step >= 1 ? 'bg-white/20 border-white' : 'bg-transparent border-white/50'} mr-2`}>
                      1
                    </div>
                    <span>Personal Info</span>
                  </div>
                  <div className="border-b border-white/30 w-8 md:w-16 self-center"></div>
                  <div className={`flex items-center ${step >= 2 ? 'text-white' : 'text-white/50'}`}>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${step >= 2 ? 'bg-white/20 border-white' : 'bg-transparent border-white/50'} mr-2`}>
                      2
                    </div>
                    <span>Event Details</span>
                  </div>
                  <div className="border-b border-white/30 w-8 md:w-16 self-center"></div>
                  <div className={`flex items-center ${step >= 3 ? 'text-white' : 'text-white/50'}`}>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${step >= 3 ? 'bg-white/20 border-white' : 'bg-transparent border-white/50'} mr-2`}>
                      3
                    </div>
                    <span>Menu</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 md:p-8">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-playfair text-burgundy-800 mb-3">Booking Request Submitted!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for choosing Morya Caterers. We have received your booking request and will contact you within 24 hours to confirm the details.
                  </p>
                  <p className="text-gray-600 mb-8">
                    A confirmation email has been sent to <span className="font-medium">{formData.email}</span>.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to="/" className="btn-outline">
                      Return to Home Page
                    </Link>
                    <Link to="/menu" className="btn-primary">
                      Browse Our Menu
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}>
                  {step === 1 && (
                    <div className="animate-fade-in">
                      <h3 className="text-xl font-bold font-playfair text-burgundy-800 mb-6">Personal Information</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name *</label>
                          <input 
                            type="text" 
                            id="firstName" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-morya-600 focus:border-transparent`}
                          />
                          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                        </div>
                        
                        <div>
                          <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name *</label>
                          <input 
                            type="text" 
                            id="lastName" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-morya-600 focus:border-transparent`}
                          />
                          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-morya-600 focus:border-transparent`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number *</label>
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
                      
                      <div className="flex justify-end">
                        <Button 
                          type="button" 
                          onClick={nextStep}
                          className="bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition-colors"
                        >
                          Next: Event Details
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {step === 2 && (
                    <div className="animate-fade-in">
                      <h3 className="text-xl font-bold font-playfair text-burgundy-800 mb-6">Event Details</h3>
                      
                      <div className="mb-6">
                        <label htmlFor="eventType" className="block text-gray-700 mb-2">Event Type *</label>
                        <select 
                          id="eventType" 
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border ${errors.eventType ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-morya-600 focus:border-transparent`}
                        >
                          <option value="">Select Event Type</option>
                          <option value="wedding">Wedding</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="birthday">Birthday Party</option>
                          <option value="anniversary">Anniversary</option>
                          <option value="religious">Religious Ceremony</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
                      </div>
                      
                      {formData.eventType === 'other' && (
                        <div className="mb-6">
                          <label htmlFor="customEventType" className="block text-gray-700 mb-2">Specify Event Type *</label>
                          <input 
                            type="text" 
                            id="customEventType" 
                            name="customEventType"
                            value={formData.customEventType}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border ${errors.customEventType ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-morya-600 focus:border-transparent`}
                          />
                          {errors.customEventType && <p className="text-red-500 text-sm mt-1">{errors.customEventType}</p>}
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="eventDate" className="block text-gray-700 mb-2">Event Date *</label>
                          <input 
                            type="date" 
                            id="eventDate" 
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border ${errors.eventDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-morya-600 focus:border-transparent`}
                          />
                          {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>}
                        </div>
                        
                        <div>
                          <label htmlFor="eventTime" className="block text-gray-700 mb-2">Event Time *</label>
                          <input 
                            type="time" 
                            id="eventTime" 
                            name="eventTime"
                            value={formData.eventTime}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border ${errors.eventTime ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-morya-600 focus:border-transparent`}
                          />
                          {errors.eventTime && <p className="text-red-500 text-sm mt-1">{errors.eventTime}</p>}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="guestCount" className="block text-gray-700 mb-2">Number of Guests *</label>
                        <input 
                          type="number" 
                          id="guestCount" 
                          name="guestCount"
                          min="1"
                          value={formData.guestCount}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border ${errors.guestCount ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-morya-600 focus:border-transparent`}
                        />
                        {errors.guestCount && <p className="text-red-500 text-sm mt-1">{errors.guestCount}</p>}
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="eventVenue" className="block text-gray-700 mb-2">Venue Type *</label>
                        <select 
                          id="eventVenue" 
                          name="eventVenue"
                          value={formData.eventVenue}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border ${errors.eventVenue ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-morya-600 focus:border-transparent`}
                        >
                          <option value="">Select Venue Type</option>
                          <option value="hotel">Hotel</option>
                          <option value="banquet-hall">Banquet Hall</option>
                          <option value="home">Home</option>
                          <option value="outdoor">Outdoor Venue</option>
                          <option value="office">Office/Corporate Space</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.eventVenue && <p className="text-red-500 text-sm mt-1">{errors.eventVenue}</p>}
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="venueAddress" className="block text-gray-700 mb-2">Venue Address</label>
                        <textarea 
                          id="venueAddress" 
                          name="venueAddress"
                          rows="3"
                          value={formData.venueAddress}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-morya-600 focus:border-transparent"
                          placeholder="Please provide the complete address of the venue"
                        ></textarea>
                      </div>
                      
                      <div className="flex justify-between">
                        <Button 
                          type="button" 
                          onClick={prevStep}
                          variant="outline"
                          className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400 transition-colors"
                        >
                          Previous
                        </Button>
                        <Button 
                          type="button" 
                          onClick={nextStep}
                          className="bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition-colors"
                        >
                          Next: Menu Preferences
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {step === 3 && (
                    <div className="animate-fade-in">
                      <h3 className="text-xl font-bold font-playfair text-burgundy-800 mb-6">Menu Preferences</h3>
                      
                      <div className="mb-6">
                        <label htmlFor="packageType" className="block text-gray-700 mb-2">Select Package *</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div 
                            className={`border ${formData.packageType === 'silver' ? 'border-teal-600 bg-teal-50' : 'border-gray-200'} rounded-lg p-4 cursor-pointer hover:border-teal-600 transition-all`}
                            onClick={() => handleChange({ target: { name: 'packageType', value: 'silver' } })}
                          >
                            <div className="flex items-center mb-2">
                              <div className={`w-5 h-5 rounded-full border ${formData.packageType === 'silver' ? 'border-teal-600' : 'border-gray-300'} flex items-center justify-center`}>
                                {formData.packageType === 'silver' && <div className="w-3 h-3 rounded-full bg-teal-600"></div>}
                              </div>
                              <h4 className="font-semibold ml-2">Silver Package</h4>
                            </div>
                            <p className="text-gray-600 text-sm">₹750/person, min 25 guests</p>
                          </div>
                          
                          <div 
                            className={`border ${formData.packageType === 'gold' ? 'border-teal-600 bg-teal-50' : 'border-gray-200'} rounded-lg p-4 cursor-pointer hover:border-teal-600 transition-all`}
                            onClick={() => handleChange({ target: { name: 'packageType', value: 'gold' } })}
                          >
                            <div className="flex items-center mb-2">
                              <div className={`w-5 h-5 rounded-full border ${formData.packageType === 'gold' ? 'border-teal-600' : 'border-gray-300'} flex items-center justify-center`}>
                                {formData.packageType === 'gold' && <div className="w-3 h-3 rounded-full bg-teal-600"></div>}
                              </div>
                              <h4 className="font-semibold ml-2">Gold Package</h4>
                            </div>
                            <p className="text-gray-600 text-sm">₹1100/person, min 50 guests</p>
                          </div>
                          
                          <div 
                            className={`border ${formData.packageType === 'platinum' ? 'border-teal-600 bg-teal-50' : 'border-gray-200'} rounded-lg p-4 cursor-pointer hover:border-teal-600 transition-all`}
                            onClick={() => handleChange({ target: { name: 'packageType', value: 'platinum' } })}
                          >
                            <div className="flex items-center mb-2">
                              <div className={`w-5 h-5 rounded-full border ${formData.packageType === 'platinum' ? 'border-teal-600' : 'border-gray-300'} flex items-center justify-center`}>
                                {formData.packageType === 'platinum' && <div className="w-3 h-3 rounded-full bg-teal-600"></div>}
                              </div>
                              <h4 className="font-semibold ml-2">Platinum Package</h4>
                            </div>
                            <p className="text-gray-600 text-sm">₹1500/person, min 75 guests</p>
                          </div>
                        </div>
                        {errors.packageType && <p className="text-red-500 text-sm mt-1">{errors.packageType}</p>}
                        <p className="text-sm text-gray-500 mt-2">
                          <Link to="/menu" target="_blank" className="text-teal-600 hover:underline">View package details</Link>
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="dietaryRequirements" className="block text-gray-700 mb-2">Dietary Requirements</label>
                        <textarea 
                          id="dietaryRequirements" 
                          name="dietaryRequirements"
                          rows="3"
                          value={formData.dietaryRequirements}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-morya-600 focus:border-transparent"
                          placeholder="Please specify any dietary requirements or food allergies"
                        ></textarea>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="additionalRequests" className="block text-gray-700 mb-2">Additional Requests</label>
                        <textarea 
                          id="additionalRequests" 
                          name="additionalRequests"
                          rows="3"
                          value={formData.additionalRequests}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-morya-600 focus:border-transparent"
                          placeholder="Any specific requests or questions about our services"
                        ></textarea>
                      </div>
                      
                      <div className="flex justify-between">
                        <Button 
                          type="button" 
                          onClick={prevStep}
                          variant="outline"
                          className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400 transition-colors"
                        >
                          Previous
                        </Button>
                        <Button 
                          type="submit"
                          className="bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition-colors flex items-center"
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
                          ) : 'Submit Booking Request'}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Contact Details */}
          <div className="max-w-3xl mx-auto mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold font-playfair text-burgundy-800 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions or need assistance with your booking, please don't hesitate to contact us:
              </p>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <a href="tel:+919175202071" className="text-teal-600 hover:text-teal-800 font-medium">+91 9175202071</a>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <a href="mailto:moryacaterers2020@gmail.com" className="text-teal-600 hover:text-teal-800 font-medium">moryacaterers2020@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookNow;
