import React, { useState } from 'react';

const App = () => {
  // States
  const [activeProject, setActiveProject] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  // SVG Icons
  const SearchIcon = () => (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
  );
  const ChevronDown = ({ isOpen }) => (
    <svg className={`w-3 h-3 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  );

  // Dropdown Options Data
  const filterOptions = {
    'Project Industry': ['All Industries', 'Education', 'Healthcare', 'E-commerce', 'Finance & Tech'],
    'Project Type': ['All Types', 'Web Application', 'Mobile App', 'Landing Page', 'SaaS Platform', 'ERP System'],
    'Development Team': ['All Teams', 'Meraki Dev Core', 'Binary Logic Studio', 'Cloud Native Team'],
    'Tech Stack': ['React', 'Next.js', 'Python/Django', 'Node.js', 'Cloud Native']
  };

  // Toggle Dropdown Handler
  const toggleDropdown = (menuName) => {
    if (openDropdown === menuName) setOpenDropdown(null);
    else setOpenDropdown(menuName);
  };

  // Project Data
  const projects = [
    {
      title: "SRI CHAITANYA KOTPUTLI EDUCATIONAL PORTAL",
      img: "https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777214342/Screenshot_2026-04-26_200849_bbkwnn.png",
      tags: ["React", "Python", "Cloud"],
      author: "Meraki Dev Core Team",
      url: "https://www.srichaitanyakotputli.com/"
    },
    {
      title: "SARTI PHYSIOTHERAPY CLINIC WEBSITE",
      img: "https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777213924/Screenshot_2026-04-26_200143_nhvoqs.png",
      tags: ["React", "Cloud"],
      author: "Meraki Dev Core Team",
      url: "https://sarti-physiotherapy.vercel.app/"
    },
    {
      title: "THE SHRIRAM FOUNDATION SCHOOL PLATFORM",
      img: "https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777214242/Screenshot_2026-04-26_200712_ga1g59.png",
      tags: ["React", "Python", "Cloud"],
      author: "Meraki Dev Core Team",
      url: "https://www.theshriramfoundationschool.in/"
    },
    {
      title: "IGNIS MEDIA DIGITAL AGENCY",
      img: "https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777214199/Screenshot_2026-04-26_200626_cmzto8.png",
      tags: ["React", "Cloud"],
      author: "Cloud Native Team",
      url: "https://ignis-media.vercel.app/"
    }
  ];

  const getTagColor = (tag) => {
    switch(tag) {
      case 'React': return 'bg-teal-100 text-teal-800';
      case 'Python': return 'bg-yellow-100 text-yellow-800';
      case 'Cloud': return 'bg-blue-100 text-blue-800';
      case 'AI': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900 relative overflow-x-hidden">
      
      {/* Invisible overlay to close dropdowns when clicking outside */}
      {openDropdown && (
        <div className="fixed inset-0 z-30" onClick={() => setOpenDropdown(null)}></div>
      )}

      {/* 1. Perfect Seamless Top Bar - Responsive */}
      <div className="bg-black text-white py-1.5 overflow-hidden flex text-xs md:text-sm relative z-40">
        <div className="flex animate-marquee whitespace-nowrap shrink-0">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="mx-3 md:mx-4 tracking-wide text-gray-300">
              Aurix AI Software: Custom Web & Mobile Apps | Get 20% off on your first project | Build your Dream Website, App & Software today | Scale your Business with Scalable SaaS |
            </span>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap shrink-0">
          {[...Array(5)].map((_, i) => (
            <span key={`dup-${i}`} className="mx-3 md:mx-4 tracking-wide text-gray-300">
              Aurix AI Software: Custom Web & Mobile Apps | Get 20% off on your first project | Build your Dream Website, App & Software today | Scale your Business with Scalable SaaS |
            </span>
          ))}
        </div>
      </div>

      {/* 2. Main Navbar - Fully Responsive */}
      <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-40">
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="text-3xl font-black tracking-tighter">
            <img src="https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777357761/company_logo_-removebg-preview_tzkdbq.png" alt="logo" className='h-8 sm:h-10 cursor-pointer' />
          </div>
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm font-semibold text-gray-700">
            <button className="flex items-center hover:text-black transition whitespace-nowrap">Explore <ChevronDown isOpen={false} /></button>
            <button className="hover:text-black transition whitespace-nowrap">Tech Directory</button>
            <button className="hover:text-black transition whitespace-nowrap">Software Academy</button>
            <button className="hover:text-black transition whitespace-nowrap">Jobs</button>
            <button className="hover:text-black transition whitespace-nowrap">Marketplace</button>
          </div>
        </div>
        
        {/* Search Bar - Responsive */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 flex-1 max-w-md lg:w-96 border border-gray-200 focus-within:border-gray-400 focus-within:bg-white transition-all">
          <SearchIcon />
          <input type="text" placeholder="Search by Project, Stack or Service" className="bg-transparent border-none outline-none ml-2 text-sm w-full text-gray-600 placeholder-gray-400" />
        </div>
        
        {/* Action Buttons - Responsive */}
        <div className="flex   items-center space-x-1 space-y-1 sm:space-x-3 md:space-x-4 text-sm font-semibold flex-wrap">
          <button className="border border-gray-300 p-2 rounded-lg text-gray-600 hover:text-black transition whitespace-nowrap">Log in</button>
          <button className="border border-gray-300 p-2 rounded-lg text-gray-600 hover:text-black transition whitespace-nowrap">Sign Up</button>
           <button className="border border-gray-300 text-gray-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-gray-50 transition active:scale-95 text-sm whitespace-nowrap">Request a Quote</button>
        </div>
      </nav>

      {/* 3. FUNCTIONAL Filter Bar - FULLY RESPONSIVE (Fixed overflow) */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 relative z-30">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          
          {/* Dynamic Dropdowns - Responsive */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 flex-1">
            {['Project Industry', 'Project Type', 'Development Team'].map((filter) => (
              <div key={filter} className="relative">
                <button 
                  onClick={() => toggleDropdown(filter)}
                  className={`flex items-center px-3 sm:px-4 py-1.5 border rounded-full font-medium transition-colors text-xs sm:text-sm whitespace-nowrap ${openDropdown === filter ? 'border-gray-400 bg-gray-50 text-black' : 'border-gray-200 hover:bg-gray-50 text-gray-700'}`}
                >
                  {filter} <ChevronDown isOpen={openDropdown === filter} />
                </button>
                
                {/* Dropdown Menu */}
                {openDropdown === filter && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 animate-fadeIn z-50">
                    {filterOptions[filter].map((option, i) => (
                      <button key={i} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition whitespace-nowrap">
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:block w-px h-6 bg-gray-300"></div>
          
          {/* Tech Stack Dropdown - Responsive */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('Tech Stack')}
              className={`flex items-center px-3 sm:px-4 py-1.5 border rounded-full font-medium transition-colors text-xs sm:text-sm whitespace-nowrap ${openDropdown === 'Tech Stack' ? 'border-gray-400 bg-gray-50 text-black' : 'border-gray-200 hover:bg-gray-50 text-gray-700'}`}
            >
              Tech Stack <ChevronDown isOpen={openDropdown === 'Tech Stack'} />
            </button>
            {openDropdown === 'Tech Stack' && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-100 rounded-xl shadow-lg py-2 animate-fadeIn z-50">
                {filterOptions['Tech Stack'].map((tech, i) => (
                  <button key={i} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition">
                    {tech}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Static Tag Pills - Responsive */}
          <div className="flex flex-wrap items-center gap-2">
            {['React','Javascript','CSS ',,'Python', 'Cloud'].map((tech) => (
              <span key={tech} className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 font-medium rounded-full cursor-pointer hover:bg-gray-200 transition text-xs sm:text-sm whitespace-nowrap">{tech}</span>
            ))}
          </div>

          <div className="hidden md:block w-px h-6 bg-gray-300"></div>
          
          {/* UI Style Button - Responsive */}
          <button className="flex items-center space-x-2 px-3 sm:px-4 py-1.5 border border-gray-200 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition active:scale-95 text-xs sm:text-sm whitespace-nowrap">
            <span>UI Style</span> <ChevronDown isOpen={false} />
            <div className="flex space-x-1 ml-1 sm:ml-2">
              <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-400"></span>
              <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></span>
              <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-400"></span>
            </div>
          </button>

          {/* Reset Filters - Responsive */}
          <div className="flex items-center space-x-3 ml-auto">
            <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap">1</span>
            <button className="flex items-center text-gray-500 hover:text-black font-medium transition text-xs sm:text-sm whitespace-nowrap">
              Reset filters
              <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Main Content Area - Fully Responsive */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        {/* Responsive Stats Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 text-xs sm:text-sm text-gray-500 gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span>Websites <span className="border border-gray-300 rounded px-1 ml-1 text-xs font-medium text-gray-600">46K</span></span>
            <span className="font-semibold text-gray-800">Technology</span>
            <span className="border border-gray-300 rounded px-1 text-xs font-medium text-gray-600">7776</span>
          </div>
          <div className="text-xs sm:text-sm">Best selection of <span className="font-bold text-gray-800">Technology Website</span> examples... <a href="#" className="underline hover:text-black">Read more</a></div>
        </div>

        {/* Hero Banner - Fully Responsive (Stack on mobile) */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8 sm:mb-10 flex flex-col md:flex-row relative shadow-sm hover:shadow-md transition cursor-pointer">
          <div className="md:w-1/2 relative h-56 sm:h-64 md:h-auto overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Team working" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
              <button className="bg-black/80 text-white backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold rounded hover:bg-black transition">
                Discuss Project
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-gray-900 mb-2">TRANSFORMING IDEAS INTO <br className="hidden sm:block"/> SOFTWARE SOLUTIONS</h2>
            <p className="text-gray-500 text-base sm:text-lg mb-6 sm:mb-8">Custom Apps & Web Development</p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center space-x-2 sm:space-x-3 group">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs group-hover:scale-110 transition-transform">M</div>
                <span className="font-semibold text-gray-800 text-sm sm:text-base group-hover:text-black">Meraki Dev</span>
              </div>
              <button className="bg-black text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-lg font-semibold flex items-center hover:bg-gray-800 transition active:scale-95 text-sm">
                Open <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        {/* INTERACTIVE Project Grid - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer flex flex-col"
              onClick={() => setActiveProject(project)}
            >
              {/* Card Image */}
              <div className="bg-gray-100 overflow-hidden aspect-[6/4] mb-3 sm:mb-4 border border-gray-100 shadow-sm group-hover:shadow-lg transition-all relative  ">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <span className="text-white text-xs sm:text-sm font-bold bg-blue-600/90 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm shadow-lg">
                     {project.url ? 'View Live Site' : 'View Details'}
                   </span>
                </div>
              </div>
              
              <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-2 group-hover:text-blue-600 transition truncate">{project.title}</h3>
              
              <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className={`text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded ${getTagColor(tag)} uppercase tracking-wide`}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center mt-auto border-t border-gray-100 pt-2 sm:pt-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-800 rounded-full mr-2"></div>
                <span className="text-[10px] sm:text-xs font-semibold text-gray-600 group-hover:text-black transition truncate">{project.author}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 5. Discover More & COMPLETE FOOTER - Responsive */}
      <div className="bg-[#fafafa] border-t border-gray-200 mt-8 sm:mt-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
          
          {/* Discover More - Responsive Grid */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Discover more</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-0 border-t border-gray-200">
              {[
                "WEB DESIGN & DEVELOPMENT", "MOBILE APP DEVELOPMENT", "CLOUD SOLUTIONS & DEVOPS", "SEO & DIGITAL MARKETING",
                "MOBILE APP DEVELOPMENT", "SAAS ENGINEERING", "SEO & DIGITAL MARKETING", "ERP & CRM IMPLEMENTATION"
              ].map((item, i) => (
                <a key={i} href="#" className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-200 hover:text-blue-600 transition group text-xs sm:text-sm font-semibold text-gray-700">
                  <span className="truncate">{item}</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Main Footer Links - Responsive Grid */}
          <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 pt-6 sm:pt-8 pb-6 sm:pb-10 text-xs sm:text-sm text-gray-600 font-medium">
            <div className="sm:col-span-2">
               <img src="https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777357761/company_logo_-removebg-preview_tzkdbq.png" alt="Aurix AI" className="h-8 sm:h-10 mb-4 sm:mb-6" />
               <p className="text-gray-400 text-xs mt-2 max-w-xs leading-relaxed">Crafting high-performance web and mobile software solutions to scale your business.</p>
            </div>
            
            <div className="space-y-2 sm:space-y-3">
              <a href="#" className="block hover:text-black hover:translate-x-1 transition-transform">Projects</a>
              <a href="#" className="block hover:text-black hover:translate-x-1 transition-transform">Websites</a>
              <a href="#" className="block hover:text-black hover:translate-x-1 transition-transform">Collections</a>
              <a href="#" className="block hover:text-black hover:translate-x-1 transition-transform">Elements</a>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <a href="#" className="block hover:text-black hover:translate-x-1 transition-transform">Services</a>
              <a href="#" className="block hover:text-black hover:translate-x-1 transition-transform">Academy</a>
              <a href="#" className="block hover:text-black hover:translate-x-1 transition-transform">Jobs</a>
              <a href="#" className="block hover:text-black hover:translate-x-1 transition-transform">Market</a>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <a href="#" className="block hover:text-black hover:translate-x-1 transition-transform">Directory</a>
              <a href="#" className="block hover:text-black hover:translate-x-1 transition-transform">Conferences</a>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <a href="#" className="block hover:text-black hover:translate-x-1 transition-transform">FAQs</a>
              <a href="#" className="block hover:text-black hover:translate-x-1 transition-transform">About Us</a>
              <a href="#" className="block hover:text-black hover:translate-x-1 transition-transform">Contact Us</a>
            </div>
          </footer>

          {/* Sub Footer / Connect - Responsive */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-gray-200 border-dashed text-xs sm:text-sm font-medium text-gray-600 gap-4">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-black transition">Cookies Policy</a>
              <a href="#" className="hover:text-black transition">Legal Terms</a>
              <a href="#" className="hover:text-black transition">Privacy Policy</a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
              <span className="text-gray-400 font-normal">Connect:</span>
              <a href="#" className="hover:text-black transition">Instagram</a>
              <a href="#" className="hover:text-black transition">LinkedIn</a>
              <a href="#" className="hover:text-black transition">Twitter</a>
              <a href="#" className="hover:text-black transition">Facebook</a>
              <a href="#" className="hover:text-black transition">YouTube</a>
              <a href="#" className="hover:text-black transition">TikTok</a>
              <a href="#" className="hover:text-black transition">Pinterest</a>
            </div>
          </div>

        </div>
      </div>

      {/* --- THE INTERACTIVE LIVE PREVIEW MODAL - Responsive --- */}
      {activeProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4 md:p-8 animate-fadeIn">
          <div className="bg-white w-full h-full max-w-7xl max-h-[90vh] rounded-xl sm:rounded-2xl overflow-hidden flex flex-col shadow-2xl relative">
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 bg-gray-50">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base sm:text-lg text-gray-900 truncate">{activeProject.title}</h3>
                {activeProject.url && (
                  <a href={activeProject.url} target="_blank" rel="noreferrer" className="text-xs sm:text-sm text-blue-600 hover:underline flex items-center mt-1 truncate">
                    Open website in new tab <svg className="w-3 h-3 ml-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                )}
              </div>
              <button 
                onClick={() => setActiveProject(null)}
                className="bg-gray-200 hover:bg-red-500 hover:text-white text-gray-700 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors font-bold text-lg sm:text-xl flex-shrink-0 ml-3"
              >
                ×
              </button>
            </div>
            <div className="flex-1 w-full h-full bg-gray-100 relative">
              {activeProject.url ? (
                <>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                    <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-4 border-gray-300 border-t-blue-600 mb-3 sm:mb-4"></div>
                    <p className="text-xs sm:text-sm">Loading Live Website...</p>
                  </div>
                  <iframe 
                    src={activeProject.url} 
                    className="w-full h-full relative z-10 bg-white"
                    title={activeProject.title}
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                  />
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 text-gray-500 p-6 sm:p-8 text-center">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <p className="text-base sm:text-lg font-semibold">Live Preview Not Available</p>
                  <p className="text-xs sm:text-sm mt-2">This is a showcase project. No live URL is attached.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;