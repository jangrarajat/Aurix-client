import React, { useState, useEffect } from 'react';

const App = () => {
  // States
  const [activeProject, setActiveProject] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedService, setSelectedService] = useState('Website');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [showAllTech, setShowAllTech] = useState(false);

  // --- HERO SLIDER STATES & EFFECT ---
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
    "https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777363066/company_logo_-removebg-preview_1_fljtdz.png",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // --- REVIEW SYSTEM STATES ---
  const [reviews, setReviews] = useState([
    { id: 1, name: "Rahul Sharma", role: "CEO, TechFlow", rating: 5, text: "Their team delivered our platform right on schedule and with perfect execution. Highly recommended!" },
    { id: 2, name: "Priya Singh", role: "Founder, EduSmart", rating: 5, text: "Great UI/UX and seamless integration. The best development agency we've worked with." },
    { id: 3, name: "Amit Verma", role: "Manager, RetailPro", rating: 4, text: "Very professional workflow. The custom software helped scale our business significantly." },
  ]);
  const [newReview, setNewReview] = useState({ name: '', role: '', rating: 5, text: '' });
  const [hoverRating, setHoverRating] = useState(0);

  // SVG Icons
  const SearchIcon = () => (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
  );
  const ChevronDown = ({ isOpen }) => (
    <svg className={`w-3 h-3 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  );
  const StarIcon = ({ filled, onClick, onMouseEnter, onMouseLeave }) => (
    <svg onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`w-5 h-5 cursor-pointer transition-colors ${filled ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const filterOptions = {
    'Project Industry': ['All Industries', 'Education', 'Healthcare', 'E-commerce', 'Finance & Tech'],
    'Project Type': ['All Types', 'Web Application', 'Mobile App', 'Landing Page', 'SaaS Platform', 'ERP System'],
    'Development Team': ['All Teams', 'Meraki Dev Core', 'Binary Logic Studio', 'Cloud Native Team'],
    'Tech Stack': ['React', 'Next.js', 'Python/Django', 'Node.js', 'Cloud Native']
  };

  const toggleDropdown = (menuName) => {
    if (openDropdown === menuName) setOpenDropdown(null);
    else setOpenDropdown(menuName);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;
    setReviews([{ ...newReview, id: Date.now() }, ...reviews]);
    setNewReview({ name: '', role: '', rating: 5, text: '' });
  };

  const toggleFaq = (index) => {
    if (openFaq === index) setOpenFaq(null);
    else setOpenFaq(index);
  };

  // --- DATA ARRAYS ---
  const projects = [
    { title: "SRI CHAITANYA KOTPUTLI EDUCATIONAL PORTAL", img: "https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777214342/Screenshot_2026-04-26_200849_bbkwnn.png", tags: ["React", "Python", "Cloud"], author: "Meraki Dev Core Team", url: "https://www.srichaitanyakotputli.com/" },
    { title: "SARTI PHYSIOTHERAPY CLINIC WEBSITE", img: "https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777213924/Screenshot_2026-04-26_200143_nhvoqs.png", tags: ["React", "Cloud"], author: "Meraki Dev Core Team", url: "https://sarti-physiotherapy.vercel.app/" },
    { title: "THE SHRIRAM FOUNDATION SCHOOL PLATFORM", img: "https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777214242/Screenshot_2026-04-26_200712_ga1g59.png", tags: ["React", "Python", "Cloud"], author: "Meraki Dev Core Team", url: "https://www.theshriramfoundationschool.in/" },
    { title: "IGNIS MEDIA DIGITAL AGENCY", img: "https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777214199/Screenshot_2026-04-26_200626_cmzto8.png", tags: ["React", "Cloud"], author: "Cloud Native Team", url: "https://ignis-media.vercel.app/" }
  ];

  const teamEngineers = [
    { id: 1, name: "Aman Verma", role: "Frontend Engineer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Sneha Patel", role: "UI/UX Designer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Karan Singh", role: "Backend Developer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
    { id: 4, name: "Priya Sharma", role: "Cloud / DevOps", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" }
  ];

  const faqs = [
    { q: "How much time does it take to build an App or Website?", a: "The timeline depends entirely on the complexity of the project. A standard business website typically takes 2-4 weeks, whereas a custom SaaS platform or a native mobile app can take between 8 to 12 weeks to complete." },
    { q: "Do you provide post-launch maintenance and support?", a: "Yes, absolutely! We provide 3 months of complimentary bug-fixing and maintenance support for all our projects. Following that, you can opt for one of our affordable Annual Maintenance Contract (AMC) plans." },
    { q: "What are your standard payment terms and milestones?", a: "Our standard payment structure is divided into three milestones: 30% advance to initiate the project, 40% upon reaching the development mid-point (when we deliver a working beta), and the final 30% upon successful delivery and deployment." },
    { q: "Do you offer SEO and Digital Marketing services?", a: "Yes, our in-house team handles Technical SEO, On-page optimization, and Google Ads campaigns to ensure your new website starts ranking and performing well right from day one." },
    { q: "Can you work on an existing project or legacy codebase?", a: "Yes, we can. We start by auditing your existing codebase. From there, we can add new features, resolve bugs, or completely upgrade your legacy platform to a modern MERN stack architecture." }
  ];
  
  const techStack = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
    { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
    { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
    { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
    { name: "JWT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" },
    { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
    { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
    { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },
    { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
    { name: "Apple", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
    { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
    { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Github", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
    { name: "Render", logo: "https://www.jsdelivr.com/assets/c84fc1badc58b6071e439e123685bdd99fc02601/img/sponsors/render-black.svg" }
  ];

  // --- NEW: PROCESS STEPS DATA ---
  const processes = [
    { step: "01", title: "Requirement Analysis & Planning", desc: "Understanding your vision, defining business goals, and mapping out the technical architecture." },
    { step: "02", title: "UI/UX Prototyping", desc: "Crafting intuitive wireframes and pixel-perfect designs for maximum user engagement." },
    { step: "03", title: "MERN / Mobile App Development", desc: "Building scalable, high-performance architectures using MERN stack and native mobile tech." },
    { step: "04", title: "Quality Assurance & Testing", desc: "Rigorous manual and automated testing to ensure a bug-free, secure, and fast experience." },
    { step: "05", title: "Deployment & Post-Launch Support", desc: "Seamless launch, server deployment, and ongoing maintenance to keep your app updated." }
  ];

  const getTagColor = (tag) => {
    switch (tag) {
      case 'React': return 'bg-teal-100 text-teal-800';
      case 'Python': return 'bg-yellow-100 text-yellow-800';
      case 'Cloud': return 'bg-blue-100 text-blue-800';
      case 'AI': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900 relative overflow-x-hidden">

      {openDropdown && (
        <div className="fixed inset-0 z-30" onClick={() => setOpenDropdown(null)}></div>
      )}

      {/* Top Bar */}
      <div className="bg-black text-white py-1.5 overflow-hidden flex text-xs md:text-sm relative z-40">
        <div className="flex animate-marquee whitespace-nowrap shrink-0">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="mx-3 md:mx-4 tracking-wide text-gray-300 flex items-center">
              <img src="https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777357761/company_logo_-removebg-preview_tzkdbq.png" alt="logo" className='h-2 sm:h-10 cursor-pointer mr-2' />  Aurix AI Software: Custom Web & Mobile Apps | Get 20% off on your first project | Build your Dream Website, App & Software today | Scale your Business with Scalable SaaS |
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

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-40">
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="text-3xl font-black tracking-tighter">
            <img src="https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777357761/company_logo_-removebg-preview_tzkdbq.png" alt="logo" className='h-8 sm:h-10 cursor-pointer' />
          </div>
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm font-semibold text-gray-700">
            <button className="flex items-center hover:text-black transition whitespace-nowrap">Explore <ChevronDown isOpen={false} /></button>
            <button className="hover:text-black transition whitespace-nowrap">Tech Directory</button>
            <button className="hover:text-black transition whitespace-nowrap">Software Academy</button>
            <button className="hover:text-black transition whitespace-nowrap">Jobs</button>
            <button className="hover:text-black transition whitespace-nowrap">Marketplace</button>
          </div>
        </div>
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 flex-1 max-w-md lg:w-96 border border-gray-200 focus-within:border-gray-400 focus-within:bg-white transition-all">
          <SearchIcon />
          <input type="text" placeholder="Search by Project, Stack or Service" className="bg-transparent border-none outline-none ml-2 text-sm w-full text-gray-600 placeholder-gray-400" />
        </div>
        <div className="flex items-center space-x-1 space-y-1 sm:space-x-3 md:space-x-4 text-sm font-semibold flex-wrap">
          <button onClick={() => setIsLoginOpen(true)} className="border border-gray-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-gray-600 hover:text-black hover:bg-gray-50 transition whitespace-nowrap">Log in</button>
          <button className="border border-gray-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-gray-600 hover:text-black hover:bg-gray-50 transition whitespace-nowrap">Sign Up</button>
          <button className="border border-gray-300 text-gray-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-gray-50 transition active:scale-95 text-sm whitespace-nowrap">Request a Quote</button>
        </div>
      </nav>

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 relative z-30">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 flex-1">
            {['Project Industry', 'Project Type', 'Development Team'].map((filter) => (
              <div key={filter} className="relative">
                <button onClick={() => toggleDropdown(filter)} className={`flex items-center px-3 sm:px-4 py-1.5 border rounded-full font-medium transition-colors text-xs sm:text-sm whitespace-nowrap ${openDropdown === filter ? 'border-gray-400 bg-gray-50 text-black' : 'border-gray-200 hover:bg-gray-50 text-gray-700'}`}>
                  {filter} <ChevronDown isOpen={openDropdown === filter} />
                </button>
                {openDropdown === filter && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 animate-fadeIn z-50">
                    {filterOptions[filter].map((option, i) => (
                      <button key={i} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition whitespace-nowrap">{option}</button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-300"></div>
          <div className="relative">
            <button onClick={() => toggleDropdown('Tech Stack')} className={`flex items-center px-3 sm:px-4 py-1.5 border rounded-full font-medium transition-colors text-xs sm:text-sm whitespace-nowrap ${openDropdown === 'Tech Stack' ? 'border-gray-400 bg-gray-50 text-black' : 'border-gray-200 hover:bg-gray-50 text-gray-700'}`}>
              Tech Stack <ChevronDown isOpen={openDropdown === 'Tech Stack'} />
            </button>
            {openDropdown === 'Tech Stack' && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-100 rounded-xl shadow-lg py-2 animate-fadeIn z-50">
                {filterOptions['Tech Stack'].map((tech, i) => (
                  <button key={i} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition">{tech}</button>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {['React', 'Javascript', 'CSS', 'Python', 'Cloud'].map((tech) => (
              <span key={tech} className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 font-medium rounded-full cursor-pointer hover:bg-gray-200 transition text-xs sm:text-sm whitespace-nowrap">{tech}</span>
            ))}
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-300"></div>
          <button className="flex items-center space-x-2 px-3 sm:px-4 py-1.5 border border-gray-200 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition active:scale-95 text-xs sm:text-sm whitespace-nowrap">
            <span>UI Style</span> <ChevronDown isOpen={false} />
            <div className="flex space-x-1 ml-1 sm:ml-2">
              <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-400"></span>
              <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></span>
              <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-400"></span>
            </div>
          </button>
          <div className="flex items-center space-x-3 ml-auto">
            <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap">1</span>
            <button className="flex items-center text-gray-500 hover:text-black font-medium transition text-xs sm:text-sm whitespace-nowrap">
              Reset filters
              <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6 sm:py-8">

        {/* Read More Section Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 text-xs sm:text-sm text-gray-500 gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span>Websites <span className="border border-gray-300 rounded px-1 ml-1 text-xs font-medium text-gray-600">46K</span></span>
            <span className="font-semibold text-gray-800">Technology</span>
            <span className="border border-gray-300 rounded px-1 text-xs font-medium text-gray-600">7776</span>
          </div>
          <div className="text-xs sm:text-sm">
            Best selection of <span className="font-bold text-gray-800">Technology Website</span> examples...
            <button onClick={() => setShowAbout(!showAbout)} className="underline hover:text-black ml-1 font-semibold text-blue-600 transition-colors">
              {showAbout ? 'Read less' : 'Read more'}
            </button>
          </div>
        </div>

        {/* COLLAPSIBLE ABOUT COMPANY SECTION */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showAbout ? 'max-h-[1000px] opacity-100 mb-10' : 'max-h-0 opacity-0 mb-0'}`}>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 relative">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center space-x-4 mb-6">
                  <img src="https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777357761/company_logo_-removebg-preview_tzkdbq.png" alt="Company Logo" className="h-10 sm:h-12" />
                  <div className="h-8 w-px bg-gray-300"></div>
                  <span className="text-sm font-bold text-gray-500 tracking-widest uppercase">About Us</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 leading-tight">
                  Transforming Visions into <span className="text-blue-600">Digital Reality.</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                  Founded and led by <strong>Rajat Jangra</strong>, we are a premium digital agency specializing in building scalable software solutions. From high-performance MERN stack websites to native mobile applications, we engineer products that drive business growth, optimize operations, and deliver exceptional user experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs sm:text-sm font-bold rounded-full">MERN Stack</span>
                  <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs sm:text-sm font-bold rounded-full">Mobile Apps</span>
                  <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs sm:text-sm font-bold rounded-full">SaaS Platforms</span>
                  <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs sm:text-sm font-bold rounded-full">UI/UX Design</span>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" alt="Coding" className="rounded-xl h-40 sm:h-56 w-full object-cover shadow-sm hover:scale-[1.02] transition-transform duration-300" />
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team" className="rounded-xl h-40 sm:h-56 w-full object-cover shadow-sm hover:scale-[1.02] transition-transform duration-300 translate-y-4" />
              </div>
            </div>
          </div>
        </div>

        {/* HERO BANNER */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8 sm:mb-10 flex flex-col md:flex-row relative shadow-sm transition">
          <div className="md:w-1/2 relative h-56 sm:h-64 md:h-auto overflow-hidden bg-gray-100">
            {heroImages.map((imgUrl, index) => (
              <img key={index} src={imgUrl} alt={`Slide ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} />
            ))}
            
            <div className="absolute bottom-4 right-4 z-20 flex space-x-1.5">
              {heroImages.map((_, index) => (
                <div key={index} className={`h-1.5 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`}></div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-gray-900 mb-2">TRANSFORMING IDEAS INTO <br className="hidden sm:block" /> SOFTWARE SOLUTIONS</h2>
            <p className="text-gray-500 text-base sm:text-lg mb-6">Custom Apps & Web Development</p>
            <div className="mb-6 bg-gray-50/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-gray-200 shadow-sm" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-sm font-bold text-gray-800 mb-3">Project Requirement Details</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Website', 'Mobile App', 'Software'].map((service) => (
                  <button key={service} onClick={() => setSelectedService(service)} className={`px-3 py-1.5 text-xs font-bold rounded-full border transition-all ${selectedService === service ? 'bg-black text-white border-black shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-black'}`}>
                    {service === 'Website' ? '🌐' : service === 'Mobile App' ? '📱' : '💻'} {service}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Purpose / Industry</label>
                  <input type="text" placeholder="e.g. Clinic, School, E-commerce..." className="w-full text-xs px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Color / Theme Preference</label>
                  <input type="text" placeholder="e.g. Dark Mode, Blue accents..." className="w-full text-xs px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-all" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Required Features</label>
                <input type="text" placeholder="e.g. Booking System, Contact Form, Payment Gateway, Fees..." className="w-full text-xs px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-all" />
              </div>
              <div className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-gray-200">
                <input type="text" placeholder="Email or Phone No." className="flex-1 text-sm px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 transition-all" />
                <button className="bg-blue-600 text-white px-6 py-2 text-sm font-bold rounded-lg hover:bg-blue-700 transition shadow-sm whitespace-nowrap active:scale-95">Submit Request</button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto pt-2">
              <div className="flex items-center space-x-2 sm:space-x-3 group">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs group-hover:scale-110 transition-transform">M</div>
                <span className="font-semibold text-gray-800 text-sm sm:text-base group-hover:text-black"> Rahul Yadav</span>
              </div>
              <button className="bg-black text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-lg font-semibold flex items-center hover:bg-gray-800 transition active:scale-95 text-sm">
              Contect with Rahul Yadav <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col" onClick={() => setActiveProject(project)}>
              <div className="bg-gray-100 overflow-hidden aspect-[6/4] mb-3 sm:mb-4 border border-gray-100 shadow-sm group-hover:shadow-lg transition-all relative ">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-bold bg-blue-600/90 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm shadow-lg">
                    {project.url ? 'View Live Site' : 'View Details'}
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-2 group-hover:text-blue-600 transition truncate">{project.title}</h3>
              <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className={`text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded ${getTagColor(tag)} uppercase tracking-wide`}>{tag}</span>
                ))}
              </div>
              <div className="flex items-center mt-auto border-t border-gray-100 pt-2 sm:pt-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-800 rounded-full mr-2"></div>
                <span className="text-[10px] sm:text-xs font-semibold text-gray-600 group-hover:text-black transition truncate">{project.author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* TECHNOLOGY STACK GRID */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Technologies We Use</h2>
            <p className="text-sm text-gray-500">Powering our solutions with modern, scalable, and secure technologies.</p>
          </div>

          <div className="bg-white rounded-xl overflow-hidden border-l border-t border-gray-200 shadow-sm transition-all duration-500 ease-in-out">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {(showAllTech ? techStack : techStack.slice(0, 12)).map((tech, idx) => (
                <div key={idx} className="border-r border-b border-gray-200 p-8 flex flex-col items-center justify-center group hover:bg-gray-50 transition-colors duration-300 animate-fadeIn">
                  <div className="h-12 w-full flex items-center justify-center     group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                    <img src={tech.logo} alt={tech.name} className="max-h-full max-w-[80%] object-contain" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 group-hover:text-gray-800 mt-4 uppercase tracking-wider transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {techStack.length > 12 && (
            <div className="mt-8 flex justify-center">
              <button 
                onClick={() => setShowAllTech(!showAllTech)}
                className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-2.5 rounded-full font-bold hover:bg-gray-50 hover:text-blue-600 transition active:scale-95 text-sm shadow-sm"
              >
                <span>{showAllTech ? 'View Less' : 'View All Technologies'}</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${showAllTech ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* --- NEW: OUR DEVELOPMENT PROCESS SECTION --- */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Our Development Process</h2>
            <p className="text-sm text-gray-500">A proven step-by-step approach to delivering world-class software.</p>
          </div>

          <div className="relative mt-8">
            {/* Connecting Line (Only visible on Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-6 relative z-10">
              {processes.map((proc, index) => (
                <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left group">
                  
                  {/* Step Number Circle */}
                  <div className="w-24 h-24 bg-white border-4 border-gray-100 shadow-sm rounded-full flex items-center justify-center mb-6 relative group-hover:border-blue-100 group-hover:shadow-md transition-all duration-300 z-10">
                    <span className="text-3xl font-black text-gray-300 group-hover:text-blue-600 transition-colors duration-300">
                      {proc.step}
                    </span>
                    
                    {/* Animated Checkmark Indicator */}
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 shadow-lg">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>

                  <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-3 group-hover:text-blue-600 transition-colors duration-300 px-2 md:px-0">
                    {proc.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed px-4 md:px-0">
                    {proc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">The Team Behind the Code</h2>
            <p className="text-sm text-gray-500">Dedicated professionals building your digital future.</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8 flex flex-col md:flex-row group hover:shadow-md transition">
            <div className="md:w-1/3 h-72 md:h-auto relative overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" alt="Founder" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <div className="md:w-2/3 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <div className="uppercase text-[10px] sm:text-xs font-bold tracking-widest text-blue-600 mb-2">Founder & Lead Developer</div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">Rajat Jangra</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-xl leading-relaxed">
                Full Stack Web Developer specializing in the MERN stack (MongoDB, Express, React, Node.js) and native mobile apps. Passionate about transforming complex business requirements into fast, scalable, and user-friendly software solutions.
              </p>
              <div className="flex space-x-3">
                <button className="text-xs sm:text-sm font-bold border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition active:scale-95">LinkedIn</button>
                <button className="text-xs sm:text-sm font-bold border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition active:scale-95">GitHub</button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {teamEngineers.map((engineer) => (
              <div key={engineer.id} className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition group text-center sm:text-left flex flex-col items-center sm:items-start">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4 border-4 border-gray-50 shadow-inner">
                  <img src={engineer.img} alt={engineer.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-blue-600 transition">{engineer.name}</h4>
                <p className="text-xs sm:text-sm text-blue-600 font-medium mb-3">{engineer.role}</p>
                <div className="flex space-x-2 mt-auto">
                  <span className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 cursor-pointer transition">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REVIEWS SECTION */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-black text-gray-900 mb-2">Leave a Review</h2>
              <p className="text-sm text-gray-500 mb-6">Worked with us? We'd love to hear about your experience.</p>
              <form onSubmit={handleReviewSubmit} className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="mb-4">
                  <label className="block text-xs font-bold text-gray-600 mb-1">Your Name</label>
                  <input type="text" required value={newReview.name} onChange={(e) => setNewReview({ ...newReview, name: e.target.value })} placeholder="John Doe" className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-all" />
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-bold text-gray-600 mb-1">Company / Role</label>
                  <input type="text" value={newReview.role} onChange={(e) => setNewReview({ ...newReview, role: e.target.value })} placeholder="Founder, ABC Corp" className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-all" />
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-bold text-gray-600 mb-1">Rating</label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} filled={star <= (hoverRating || newReview.rating)} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)} onClick={() => setNewReview({ ...newReview, rating: star })} />
                    ))}
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-xs font-bold text-gray-600 mb-1">Your Feedback</label>
                  <textarea required rows="3" value={newReview.text} onChange={(e) => setNewReview({ ...newReview, text: e.target.value })} placeholder="Tell us about your project..." className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-black text-white px-4 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition active:scale-95 text-sm">Post Review</button>
              </form>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-black text-gray-900 mb-2">What People Say</h2>
              <p className="text-sm text-gray-500 mb-6">Read real feedback from our clients.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
                    <div className="flex space-x-1 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-4 italic leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center pt-3 border-t border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs mr-3">{review.name.charAt(0)}</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xs sm:text-sm">{review.name}</h4>
                        <p className="text-[10px] sm:text-xs text-gray-500">{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ ACCORDION SECTION */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-sm text-gray-500">Everything you need to know about working with us.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-gray-400 shadow-md' : 'border-gray-200 shadow-sm hover:border-gray-300'}`}>
                  <button onClick={() => toggleFaq(index)} className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
                    <span className={`font-bold text-sm sm:text-base ${openFaq === index ? 'text-blue-600' : 'text-gray-900'}`}>{faq.q}</span>
                    <span className="flex-shrink-0 ml-4 text-gray-400"><ChevronDown isOpen={openFaq === index} /></span>
                  </button>
                  <div className={`px-6 transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}>
                    <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h4 className="font-bold text-gray-900 mb-2">Still have questions?</h4>
              <p className="text-sm text-gray-600 mb-4">We are here to help. Reach out to our team directly.</p>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition shadow-sm active:scale-95">Contact Support</button>
            </div>
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <div className="bg-[#fafafa] border-t border-gray-200 mt-8 sm:mt-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="mb-8 sm:mb-12">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Discover more</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-0 border-t border-gray-200">
              {["WEB DESIGN & DEVELOPMENT", "MOBILE APP DEVELOPMENT", "CLOUD SOLUTIONS & DEVOPS", "SEO & DIGITAL MARKETING", "MOBILE APP DEVELOPMENT", "SAAS ENGINEERING", "SEO & DIGITAL MARKETING", "ERP & CRM IMPLEMENTATION"].map((item, i) => (
                <a key={i} href="#" className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-200 hover:text-blue-600 transition group text-xs sm:text-sm font-semibold text-gray-700">
                  <span className="truncate">{item}</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              ))}
            </div>
          </div>

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

      {/* LOGIN MODAL */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative overflow-hidden flex flex-col border border-gray-100">
            <button onClick={() => setIsLoginOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black transition w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="p-8 sm:p-10">
              <div className="mb-6 flex justify-center">
                <img src="https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777357761/company_logo_-removebg-preview_tzkdbq.png" alt="logo" className='h-8' />
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-sm text-center text-gray-500 mb-8">Log in to your dashboard to continue.</p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1">Email Address</label>
                  <input type="email" placeholder="you@example.com" className="w-full text-sm px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" required />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-bold text-gray-600">Password</label>
                    <a href="#" className="text-xs font-medium text-blue-600 hover:underline">Forgot password?</a>
                  </div>
                  <input type="password" placeholder="••••••••" className="w-full text-sm px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" required />
                </div>
                <button type="submit" className="w-full bg-black text-white px-4 py-3 rounded-lg font-bold hover:bg-gray-800 transition active:scale-95 shadow-md">Sign In to Dashboard</button>
              </form>
              <div className="mt-6 text-center text-sm text-gray-500">
                Don't have an account? <a href="#" className="font-bold text-black hover:underline">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LIVE PREVIEW MODAL */}
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
              <button onClick={() => setActiveProject(null)} className="bg-gray-200 hover:bg-red-500 hover:text-white text-gray-700 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors font-bold text-lg sm:text-xl flex-shrink-0 ml-3">
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
                  <iframe src={activeProject.url} className="w-full h-full relative z-10 bg-white" title={activeProject.title} sandbox="allow-same-origin allow-scripts allow-forms allow-popups" />
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