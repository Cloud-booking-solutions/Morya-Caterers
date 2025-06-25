import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const menuCategories = [
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'starters', name: 'Starters' },
    { id: 'mainCourse', name: 'Main Course' },
    // { id: 'breads', name: 'Breads & Rice' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const menuItems = {
    breakfast: [
      { name: 'Masala Dosa', description: 'Crispy rice crepe stuffed with spiced potato filling, served with coconut chutney and sambar', price: '₹120', veg: true, image: 'https://images.unsplash.com/photo-1743517894265-c86ab035adef?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Poha', description: 'Flattened rice cooked with onions, peas, and spices, garnished with fresh coriander and lemon', price: '₹80', veg: true, image: 'https://i.pinimg.com/736x/4e/f8/50/4ef850fb2578968c10bfd6d38301ce96.jpg' },
      { name: 'Aloo Paratha', description: 'Whole wheat flatbread stuffed with spiced potato filling, served with yogurt and pickle', price: '₹100', veg: true, image: 'https://images.unsplash.com/photo-1668357530437-72a12c660f94?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxvbyUyMHBhcmF0aGF8ZW58MHx8MHx8fDA%3D' },
      { name: 'Misal Pav', description: 'Spicy sprouted moth beans curry topped with farsan, onions, and cilantro, served with pav bread', price: '₹130', veg: true, image: 'https://images.pexels.com/photos/17223835/pexels-photo-17223835.jpeg?cs=srgb&dl=pexels-aditya-mara-425995080-17223835.jpg&fm=jpg' },
      { name: 'Idli Sambar', description: 'Steamed rice cakes served with lentil stew and coconut chutney', price: '₹100', veg: true, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWRsaSUyMHNhbWJhcnxlbnwwfHwwfHx8MA%3D%3D' }
    ],
    starters: [
      { name: 'Paneer Tikka', description: 'Grilled cottage cheese marinated in yogurt and spices, with bell peppers and onions', price: '₹220', veg: true, image: 'https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D' },
      { name: 'Samosa', description: 'Crispy pastry filled with spiced potatoes and peas', price: '₹80', veg: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
      { name: 'Fish Fry', description: 'Batter-fried fish flavored with carom seeds and spices', price: '₹320', veg: false, image: 'https://images.unsplash.com/photo-1673436977947-0787164a9abc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmlzaCUyMGZyeXxlbnwwfHwwfHx8MA%3D%3D' },
      { name: 'Vegetable Pakora', description: 'Assorted vegetables dipped in chickpea flour batter and deep-fried', price: '₹150', veg: true, image: 'https://images.unsplash.com/photo-1666190091191-0cd0c5c8c5b5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFrb3JhfGVufDB8fDB8fHww' },
    ],
    mainCourse: [
      { name: 'Butter Chicken', description: 'Tender chicken pieces in a rich tomato, butter, and cream sauce', price: '₹350', veg: false, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
      { name: 'Paneer', description: 'Cottage cheese cubes in a creamy spinach sauce', price: '₹280', veg: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyfGVufDB8fDB8fHww' },
      { name: 'Lamb Rogan Josh', description: 'Slow-cooked lamb in a rich onion and tomato sauce with aromatic spices', price: '₹400', veg: false, image: 'https://media.istockphoto.com/id/608005280/photo/mutton-rogan-josh-mutton-curry-indian-cuisine.jpg?s=612x612&w=0&k=20&c=F-sjeDrKuwqVh51seSkRV7Lng8ujiObyJPDxLvz3oOM=' },
      { name: 'Chole Bhature', description: 'Spicy chickpea curry served with deep-fried bread', price: '₹200', veg: true, image: 'https://thumbs.dreamstime.com/b/amritsari-chole-bhature-vegan-indian-breakfast-heavenly-brunch-snack-where-serve-spicy-chickpea-curry-deep-fried-219474681.jpg' },
      { name: 'Fish Curry', description: 'Fish fillets cooked in a tangy coconut-based curry', price: '₹380', veg: false, image: 'https://images.unsplash.com/photo-1654863404432-cac67587e25d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaCUyMGN1cnJ5fGVufDB8fDB8fHww' },
      { name: 'Dal Makhani', description: 'Black lentils and kidney beans slow-cooked with butter and cream', price: '₹250', veg: true, image: 'https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?semt=ais_hybrid&w=740' },
      { name: 'Veg Biryani', description: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices', price: '₹280', veg: true, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D' },
    ],
    // breads: [
    //   { name: 'Butter Naan', description: 'Soft leavened bread baked in tandoor and brushed with butter', price: '₹60', veg: true, image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' },
    //   { name: 'Garlic Naan', description: 'Soft leavened bread topped with garlic and herbs', price: '₹70', veg: true, image: 'https://images.unsplash.com/photo-1624374053855-39a5a1a41402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    //   { name: 'Roti', description: 'Whole wheat flatbread baked in tandoor', price: '₹40', veg: true, image: 'https://images.unsplash.com/photo-1619535214051-6c3da9489612?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80' },
    //   { name: 'Laccha Paratha', description: 'Flaky multi-layered whole wheat bread', price: '₹60', veg: true, image: 'https://images.unsplash.com/photo-1600598862237-6075b387b05f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80' },
    //   { name: 'Jeera Rice', description: 'Basmati rice tempered with cumin seeds', price: '₹150', veg: true, image: 'https://images.unsplash.com/photo-1596450514659-7452dfc1e171?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    //   { name: 'Pulao', description: 'Fragrant basmati rice cooked with vegetables and mild spices', price: '₹180', veg: true, image: 'https://images.unsplash.com/photo-1589214987073-c11573cba0e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' }
    // ],
    desserts: [
      { name: 'Gulab Jamun', description: 'Soft milk dumplings soaked in a sweet rose-flavored syrup', price: '₹100', veg: true, image: 'https://images.pexels.com/photos/15014919/pexels-photo-15014919.jpeg?cs=srgb&dl=pexels-nishess-shakya-401526881-15014919.jpg&fm=jpg' },
      { name: 'Rasgulla', description: 'Soft and spongy cottage cheese balls soaked in sugar syrup', price: '₹120', veg: true, image: 'https://st3.depositphotos.com/4761309/32493/i/450/depositphotos_324939638-stock-photo-indian-sweet-or-dessert-rasgulla.jpg' },
      { name: 'Jalebi', description: 'Crispy fried spirals soaked in sugar syrup', price: '₹90', veg: true, image: 'https://images.pexels.com/photos/14530314/pexels-photo-14530314.jpeg?cs=srgb&dl=pexels-sarayu-p-371879973-14530314.jpg&fm=jpg' },
      { name: 'Kulfi', description: 'Traditional Indian ice cream flavored with cardamom and pistachios', price: '₹120', veg: true, image: 'https://t3.ftcdn.net/jpg/11/88/58/20/360_F_1188582023_CDFR5UBL2hDs4awW3WPzZgOH9BAGr43D.jpg' },
      { name: 'Ras Malai', description: 'Flattened cottage cheese patties soaked in sweetened, thickened milk', price: '₹140', veg: true, image: 'https://media.istockphoto.com/id/515853026/photo/traditional-rasmalai-or-ras-malai-indian-dessert-bengali-sweet.jpg?s=612x612&w=0&k=20&c=LYftdDAkIa8lVyfmwt8iK-OPSQr2KCcJcYpPhbFtFBk=' }
    ],
    beverages: [
      { name: 'Strawberry Shake', description: 'Fresh mango blended with milk and sugar', price: '₹120', veg: true, image: 'https://images.unsplash.com/photo-1692620609860-be6717812f71?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFzc2l8ZW58MHx8MHx8fDA%3D' },
      { name: 'Fresh Lime Soda', description: 'Refreshing carbonated lime drink, sweet or salted', price: '₹80', veg: true, image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGltZSUyMGp1aWNlfGVufDB8fDB8fHww' },
      { name: 'Cold Coffee', description: 'Chilled coffee blended with ice cream', price: '₹140', veg: true, image: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80' },
      { name: 'Watermelon Juice', description: 'Fresh watermelon juice, perfect for summer', price: '₹100', veg: true, image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80' }
    ]
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")' }}>
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold font-playfair mb-4">Our Menu</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Explore our diverse selection of authentic Indian dishes prepared with the finest ingredients.
          </p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="py-8 bg-gray-50 sticky top-20 z-30">
        <div className="container-custom">
          <div className="flex overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex space-x-2 md:space-x-4 min-w-max mx-auto">
  {menuCategories.map((category) => (
    <button
      key={category.id}
      onClick={() => handleCategoryChange(category.id)}
      className={`px-4 py-2 rounded-full text-sm md:text-base whitespace-nowrap transition-all ${
        activeCategory === category.id
          ? 'bg-teal-400 text-white'
          : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
    >
      {category.name}
    </button>
  ))}
</div>

          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">
              {menuCategories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              {activeCategory === 'breakfast' && 'Start your day with our delicious breakfast options.'}
              {activeCategory === 'starters' && 'Begin your culinary journey with these flavorful appetizers.'}
              {activeCategory === 'mainCourse' && 'Indulge in our selection of savory main dishes.'}
              {activeCategory === 'breads' && 'Complement your meal with traditional Indian breads and rice.'}
              {activeCategory === 'desserts' && 'End your meal on a sweet note with our delectable desserts.'}
              {activeCategory === 'beverages' && 'Quench your thirst with our refreshing drink options.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems[activeCategory].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold font-playfair text-burgundy-800">{item.name}</h3>
                    <span className="bg-morya-100 text-morya-700 px-2 py-1 text-xs rounded-full">
                      {item.veg ? 'Veg' : 'Non-Veg'}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-morya-700 font-semibold">{item.price}</span>
                    <button className="text-sm bg-morya-600 text-white px-3 py-1 rounded hover:bg-morya-700 transition-colors">
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Diets Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Special Dietary Options</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              We cater to various dietary needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Diet Option 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-morya-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-morya-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair text-burgundy-800 text-center mb-3">Vegetarian Options</h3>
              <p className="text-gray-600 text-center">
                We offer a wide variety of vegetarian dishes that don't compromise on flavor. Our vegetarian menu includes options from all categories.
              </p>
            </div>

            {/* Diet Option 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-morya-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-morya-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair text-burgundy-800 text-center mb-3">Gluten-Free Options</h3>
              <p className="text-gray-600 text-center">
                Many of our dishes are naturally gluten-free. We can modify other dishes to accommodate gluten sensitivities upon request.
              </p>
            </div>

            {/* Diet Option 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-morya-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-morya-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-playfair text-burgundy-800 text-center mb-3">Allergy-Friendly</h3>
              <p className="text-gray-600 text-center">
                Please inform us about any allergies or dietary restrictions, and we will accommodate your needs to ensure a safe and enjoyable dining experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Packages */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Catering Packages</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Choose from our curated packages or work with us to create a custom menu for your event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:-translate-y-1 duration-300">
              <div className="bg-morya-600 text-white py-4 px-6">
                <h3 className="text-xl font-bold font-playfair">Silver Package</h3>
                <p className="opacity-80">Perfect for small gatherings</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-3xl font-bold text-burgundy-800 mb-2">₹750<span className="text-base font-normal text-gray-600">/person</span></p>
                  <p className="text-gray-600 text-sm">Minimum 25 guests</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">2 Starters</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">3 Main Courses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">2 Types of Bread</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">1 Rice Dish</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">1 Dessert</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">Standard Service Staff</span>
                  </li>
                </ul>
                <Link to="/book-now" className="btn-primary w-full text-center" onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}>
                  Book Silver Package
                </Link>
              </div>
            </div>

            {/* Package 2 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-morya-300 transition-transform hover:-translate-y-1 duration-300 relative">
              <div className="absolute top-0 right-0">
                <div className="bg-morya-800 text-white py-1 px-4 rounded-bl-lg text-sm font-medium">
                  Popular
                </div>
              </div>
              <div className="bg-morya-700 text-white py-4 px-6">
                <h3 className="text-xl font-bold font-playfair">Gold Package</h3>
                <p className="opacity-80">Ideal for medium-sized events</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-3xl font-bold text-burgundy-800 mb-2">₹1100<span className="text-base font-normal text-gray-600">/person</span></p>
                  <p className="text-gray-600 text-sm">Minimum 50 guests</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">4 Starters</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">5 Main Courses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">3 Types of Bread</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">2 Rice Dishes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">2 Desserts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">Premium Service Staff</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">Basic Beverage Service</span>
                  </li>
                </ul>
                <Link to="/book-now" className="btn-primary w-full text-center" onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}>
                  Book Gold Package
                </Link>
              </div>
            </div>

            {/* Package 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:-translate-y-1 duration-300">
              <div className="bg-burgundy-700 text-white py-4 px-6">
                <h3 className="text-xl font-bold font-playfair">Platinum Package</h3>
                <p className="opacity-80">For luxurious celebrations</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-3xl font-bold text-burgundy-800 mb-2">₹1500<span className="text-base font-normal text-gray-600">/person</span></p>
                  <p className="text-gray-600 text-sm">Minimum 75 guests</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">6 Premium Starters</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">7 Main Courses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">4 Types of Bread</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">3 Rice Dishes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">4 Desserts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">Luxury Service Staff</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">Premium Beverage Service</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-morya-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-600">Live Cooking Stations</span>
                  </li>
                </ul>
                <Link to="/book-now" className="btn-primary w-full text-center" onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}>
                  Book Platinum Package
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see what you're looking for? We also offer fully customized menus.
            </p>
            <Link to="/contact" className="btn-outline">
              Request Custom Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cover bg-center text-white" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")' }}>
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            Ready to Delight Your Taste Buds?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Book our catering services for your next event and enjoy the authentic flavors of India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book-now" className="btn-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}>
              Book Now
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-burgundy-800 px-6 py-2.5 rounded-md font-medium transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
