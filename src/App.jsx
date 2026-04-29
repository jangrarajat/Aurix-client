import React, { useState, useEffect } from 'react';

const App = () => {
  // States
  const [activeProject, setActiveProject] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedService, setSelectedService] = useState('Website');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);
  const [showAllTech, setShowAllTech] = useState(false);
  const [selectedServicePreview, setSelectedServicePreview] = useState(null);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // --- SERVICE HERO SLIDER DATA ---
  const serviceHeroSlides = [
    {
      name: "Web Development",
      icon: "🌐",
      tagline: "Build Powerful Web Experiences",
      description: "Create stunning, responsive websites using React, Next.js, and Tailwind CSS. High-performance, SEO-friendly solutions.",
      color: "from-blue-600 to-cyan-600",
      bgImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=2000",
      features: ["React/Next.js", "Responsive Design", "E-commerce", "SEO Optimized"]
    },
    {
      name: "Mobile App Development",
      icon: "📱",
      tagline: "Transform Ideas into Mobile Reality",
      description: "Native and cross-platform apps for iOS and Android using React Native and Flutter. Seamless user experiences.",
      color: "from-green-600 to-emerald-600",
      bgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000",
      features: ["iOS & Android", "React Native", "Push Notifications", "Offline Support"]
    },
    {
      name: "Software Development",
      icon: "💻",
      tagline: "Custom Software Solutions",
      description: "Tailored software solutions built to scale with your business. From CRMs to ERPs, robust and secure systems.",
      color: "from-purple-600 to-indigo-600",
      bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
      features: ["Custom CRM/ERP", "SaaS Platforms", "API Development", "Cloud Ready"]
    },
    {
      name: "WhatsApp Business API",
      icon: "💬",
      tagline: "Connect with Customers Instantly",
      description: "Integrate WhatsApp Business API for automated customer communication, notifications, and support.",
      color: "from-emerald-600 to-teal-600",
      bgImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=2000",
      features: ["Bulk Messaging", "Automated Replies", "Marketing Campaigns", "Customer Support"]
    },
    {
      name: "AI Automation",
      icon: "🤖",
      tagline: "Intelligent Automation for Business",
      description: "Leverage AI to automate tasks, analyze data, and make smarter decisions. Reduce costs and improve efficiency.",
      color: "from-indigo-600 to-purple-600",
      bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
      features: ["Process Automation", "Data Analysis", "Chatbots", "Predictive Analytics"]
    },
    {
      name: "AI Agents",
      icon: "🧠",
      tagline: "Smart AI Agents for Your Business",
      description: "Custom AI agents and chatbots for customer support, lead generation, and intelligent decision making.",
      color: "from-purple-600 to-pink-600",
      bgImage: "https://images.pexels.com/photos/18799044/pexels-photo-18799044.jpeg",
      features: ["Customer Support Bots", "Lead Generation", "Voice Assistants", "NLP Integration"]
    },
    {
      name: "Digital Marketing",
      icon: "📈",
      tagline: "Grow Your Online Presence",
      description: "Comprehensive digital marketing strategies including SEO, PPC, social media, and content marketing.",
      color: "from-red-600 to-orange-600",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
      features: ["SEO Optimization", "Google Ads", "Social Media", "Analytics"]
    }
  ];

  // All Services offered by company
  const allServices = [
    { name: "Web Development", icon: "🌐", color: "bg-gray-900 hover:bg-gray-800" },
    { name: "Mobile App Development", icon: "📱", color: "bg-gray-800 hover:bg-gray-700" },
    { name: "Software Development", icon: "💻", color: "bg-gray-900 hover:bg-gray-800" },
    { name: "WhatsApp Business API", icon: "💬", color: "bg-emerald-700 hover:bg-emerald-600" },
    { name: "Graphic Design", icon: "🎨", color: "bg-rose-700 hover:bg-rose-600" },
    { name: "Video Editing", icon: "🎬", color: "bg-red-700 hover:bg-red-600" },
    { name: "Salesforce Solutions", icon: "☁️", color: "bg-sky-700 hover:bg-sky-600" },
    { name: "AI Automation", icon: "🤖", color: "bg-indigo-700 hover:bg-indigo-600" },
    { name: "AI Agents", icon: "🧠", color: "bg-purple-700 hover:bg-purple-600" },
    { name: "AI Tools", icon: "⚙️", color: "bg-gray-700 hover:bg-gray-600" },
    { name: "Bulk SMS System", icon: "📨", color: "bg-orange-700 hover:bg-orange-600" },
    { name: "Business Automation", icon: "⚡", color: "bg-amber-700 hover:bg-amber-600" },
    { name: "API Integration", icon: "🔗", color: "bg-teal-700 hover:bg-teal-600" },
    { name: "WordPress Development", icon: "📝", color: "bg-blue-700 hover:bg-blue-600" },
    { name: "Digital Marketing", icon: "📈", color: "bg-rose-700 hover:bg-rose-600" },
    { name: "SEO Services", icon: "🔍", color: "bg-emerald-700 hover:bg-emerald-600" }
  ];

  // Service Video URLs
  const serviceVideos = {
    'Web Development': 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
    'Mobile App Development': 'https://www.youtube.com/embed/6mbwJ2xhgzM?autoplay=1',
    'Software Development': 'https://www.youtube.com/embed/YyknBTm_YyM?autoplay=1',
    'WhatsApp Business API': 'https://www.youtube.com/embed/k1BneeJTDcU?autoplay=1',
    'Graphic Design': 'https://www.youtube.com/embed/1DclnP3rYCk?autoplay=1',
    'Video Editing': 'https://www.youtube.com/embed/5yBGRnE9eI4?autoplay=1',
    'Salesforce Solutions': 'https://www.youtube.com/embed/3c-iBn73dDE?autoplay=1',
    'AI Automation': 'https://www.youtube.com/embed/2dAv4OrVUTI?autoplay=1',
    'AI Agents': 'https://www.youtube.com/embed/lrH1hBwGMuw?autoplay=1',
    'AI Tools': 'https://www.youtube.com/embed/UwsrzCVZAb8?autoplay=1',
    'Bulk SMS System': 'https://www.youtube.com/embed/k5E6AVVZQms?autoplay=1',
    'Business Automation': 'https://www.youtube.com/embed/QZqUaEze1mg?autoplay=1',
    'API Integration': 'https://www.youtube.com/embed/pZ5tqM86M28?autoplay=1',
    'WordPress Development': 'https://www.youtube.com/embed/8Z7GQ1qPODA?autoplay=1',
    'Digital Marketing': 'https://www.youtube.com/embed/5c9KRkxvMfo?autoplay=1',
    'SEO Services': 'https://www.youtube.com/embed/7bNPg8UbhaE?autoplay=1'
  };

  // Autoplay slider effect
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentServiceIndex((prev) => (prev + 1) % serviceHeroSlides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, serviceHeroSlides.length]);

  const handleServiceClick = (serviceName) => {
    setSelectedServicePreview({
      name: serviceName,
      videoUrl: serviceVideos[serviceName] || 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      description: serviceHeroSlides.find(s => s.name === serviceName)?.description || 'Learn more about our professional service offerings.'
    });
  };

  const goToSlide = (index) => {
    setCurrentServiceIndex(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const nextSlide = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % serviceHeroSlides.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + serviceHeroSlides.length) % serviceHeroSlides.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

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
    'Project Industry': ['All Industries', 'Education', 'Healthcare', 'E-commerce', 'Finance & Tech', 'Real Estate', 'Travel & Hospitality'],
    'Project Type': ['All Types', 'Web Application', 'Mobile App', 'Landing Page', 'SaaS Platform', 'ERP System', 'E-commerce Store'],
    'Development Team': ['All Teams', 'Meraki Dev Core', 'Binary Logic Studio', 'Cloud Native Team'],
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
    { id: 2, name: "Priya Sharma", role: "UI/UX Designer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Karan Singh", role: "Backend Developer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
    { id: 4, name: "Neha Patel", role: "Cloud / DevOps", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" }
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
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
  ];

  // --- PROCESS STEPS DATA ---
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

  const currentSlide = serviceHeroSlides[currentServiceIndex];

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900 relative overflow-x-hidden">

      {openDropdown && (
        <div className="fixed inset-0 z-30" onClick={() => setOpenDropdown(null)}></div>
      )}

      {/* Top Bar */}
      <div className="bg-black text-white py-1.5 overflow-hidden flex text-xs md:text-sm relative z-40">
        <div className="flex animate-marquee whitespace-nowrap shrink-0">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="mx-3 md:mx-4 tracking-wide text-gray-300">
              Aurix AI Software: Custom Web & Mobile Apps | Get 20% off on your first project | Build your Dream Website, App & Software today | Scale your Business with Scalable SaaS | WhatsApp Business API | AI Automation & Agents | Bulk SMS System | Business Automation Solutions |
            </span>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap shrink-0">
          {[...Array(5)].map((_, i) => (
            <span key={`dup-${i}`} className="mx-3 md:mx-4 tracking-wide text-gray-300">
              Aurix AI Software: Custom Web & Mobile Apps | Get 20% off on your first project | Build your Dream Website, App & Software today | Scale your Business with Scalable SaaS | WhatsApp Business API | AI Automation & Agents | Bulk SMS System | Business Automation Solutions |
            </span>
          ))}
        </div>
      </div>

      {/* Main Navbar - WITHOUT search, WITHOUT login/signup */}
      <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-40">
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="text-3xl font-black tracking-tighter">
            <img src="https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777357761/company_logo_-removebg-preview_tzkdbq.png" alt="logo" className='h-8 sm:h-10 cursor-pointer' />
          </div>
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm font-semibold text-gray-700">
            <button className="flex items-center hover:text-black transition whitespace-nowrap">Explore <ChevronDown isOpen={false} /></button>
            <button className="hover:text-black transition whitespace-nowrap">Tech Directory</button>
            <button className="hover:text-black transition whitespace-nowrap">Software Academy</button>
            <button className="hover:text-black transition whitespace-nowrap">Marketplace</button>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex items-center space-x-3">
          <a href="#" className="text-gray-500 hover:text-pink-600 transition-all hover:scale-110">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition-all hover:scale-110">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-red-600 transition-all hover:scale-110">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-800 transition-all hover:scale-110">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/></svg>
          </a>
        </div>
        
       
      </nav>

      {/* NEW SERVICE HERO BANNER SECTION */}
      <div className="relative overflow-hidden h-[89vh] bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={currentSlide.bgImage} alt={currentSlide.name} className="w-full h-full object-cover  " />
          <div className={`absolute inset-0 bg-gradient-to-r   opacity-70`}></div>
        </div>
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-2xl">{currentSlide.icon}</span>
                <span className="text-sm font-semibold tracking-wide">{currentSlide.name}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">
                {currentSlide.tagline}
              </h1>
              
              <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed">
                {currentSlide.description}
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {currentSlide.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => handleServiceClick(currentSlide.name)}
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
                >
                  Watch Demo Video 🎬
                </button>
                <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition transform hover:scale-105">
                  Get a Quote →
                </button>
              </div>
            </div>
            
            {/* Right Side - Service Icon & Stats */}
            <div className="hidden lg:flex flex-col items-center justify-center">
              <div className="  p-8 text-center w-full max-w-sm">
                <div className="text-7xl mb-4 animate-bounce">{currentSlide.icon}</div>
                <h3 className="text-xl font-bold mb-2">{currentSlide.name}</h3>
                <p className="text-gray-300 text-sm mb-4">Expert solutions delivered with precision</p>
                <div className="border-t border-white/20 pt-4 mt-2">
                  <div className="flex justify-between text-sm">
                    <span>✅ 200+ Projects</span>
                    <span>⭐ 4.9 Rating</span>
                    <span>🚀 50+ Experts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Slider Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {serviceHeroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentServiceIndex ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
          
          {/* Prev/Next Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition z-20"
          >
            ←
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition z-20"
          >
            →
          </button>
        </div>
      </div>

 

      {/* ABOUT SECTION - ADDED BACK */}
      <div className="bg-white border-b border-gray-200 py-8 px-4 sm:px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <div className="flex items-center space-x-4 mb-4">
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

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 relative z-30">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap items-center gap-3 flex-1">
            {['Project Industry', 'Project Type', 'Development Team'].map((filter) => (
              <div key={filter} className="relative">
                <button 
                  onClick={() => toggleDropdown(filter)} 
                  className={`flex items-center px-4 py-2 border rounded-full font-medium transition-colors text-sm whitespace-nowrap ${
                    openDropdown === filter 
                      ? 'border-gray-400 bg-gray-50 text-black' 
                      : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {filter} <ChevronDown isOpen={openDropdown === filter} />
                </button>
                {openDropdown === filter && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-lg py-2 animate-fadeIn z-50">
                    {filterOptions[filter].map((option, i) => (
                      <button key={i} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition">
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Services Section */}
        <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-gray-100">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-1 self-center">Services:</span>
          {allServices.map((service, idx) => (
            <span 
              key={idx} 
              onClick={() => handleServiceClick(service.name)}
              className={`${service.color} text-white px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer hover:scale-105 transition-all duration-200 shadow-sm flex items-center gap-1.5`}
            >
              <span className="text-sm">{service.icon}</span>
              <span>{service.name}</span>
            </span>
          ))}
        </div>
      </div>

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6 sm:py-8">

        {/* Read More Section Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 text-xs sm:text-sm text-gray-500 gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span>Websites <span className="border border-gray-300 rounded px-1 ml-1 text-xs font-medium text-gray-600">46K</span></span>
            <span className="font-semibold text-gray-800">Technology</span>
            <span className="border border-gray-300 rounded px-1 text-xs font-medium text-gray-600">7776</span>
            <a href="#projects" className="ml-2 text-blue-600 hover:underline">View all projects →</a>
          </div>
          <div className="text-xs text-gray-400">
            Best selection of <span className="font-bold text-gray-800">Technology Website</span> examples...
          </div>
        </div>

        {/* OLD HERO BANNER */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-10 flex flex-col md:flex-row relative shadow-sm hover:shadow-md transition">
          <div className="md:w-1/2 relative h-64 sm:h-80 md:h-[600px] overflow-hidden bg-gray-100">
            {heroImages.map((imgUrl, index) => (
              <img 
                key={index} 
                src={imgUrl} 
                alt={`Slide ${index + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`} 
              />
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-black leading-tight text-gray-900 mb-2">
              TRANSFORMING IDEAS INTO <br /> SOFTWARE SOLUTIONS
            </h2>
            <p className="text-gray-500 text-lg mb-6">Custom Apps & Web Development | WhatsApp API | AI Automation</p>
            
            {/* Project Requirement Form */}
            <div className="mb-6 bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="text-sm font-bold text-gray-800 mb-3">Quick Project Brief</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Website', 'Mobile App', 'Software', 'WhatsApp API', 'AI Automation'].map((service) => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-full border transition-all ${
                      selectedService === service 
                        ? 'bg-black text-white border-black shadow-md' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {service === 'Website' ? '🌐' : service === 'Mobile App' ? '📱' : service === 'Software' ? '💻' : service === 'WhatsApp API' ? '💬' : '🤖'} {service}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input type="text" placeholder="Your name" className="text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400" />
                <input type="email" placeholder="Email address" className="text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400" />
              </div>
              <textarea placeholder="Tell us about your project idea..." rows="2" className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 mb-3"></textarea>
              <button className="w-full bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition text-sm">
                Submit Request →
              </button>
            </div>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs group-hover:scale-110 transition">RJ</div>
                <span className="font-semibold text-gray-800 group-hover:text-black">Rajat Jangra</span>
              </div>
              <button className="bg-black text-white px-5 py-2 rounded-lg font-semibold flex items-center hover:bg-gray-800 transition text-sm">
                Contact Us <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div id='projects' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer flex flex-col"
              onClick={() => setActiveProject(project)}
            >
              <div className="bg-gray-100 overflow-hidden aspect-[6/4] rounded-xl mb-3 border border-gray-100 shadow-sm group-hover:shadow-lg transition-all relative">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-bold bg-blue-600/90 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg">
                    {project.url ? 'View Live Site' : 'View Details'}
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-blue-600 transition truncate">{project.title}</h3>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className={`text-[10px] font-bold px-2 py-0.5 rounded ${getTagColor(tag)} uppercase tracking-wide`}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center mt-auto border-t border-gray-100 pt-3">
                <div className="w-5 h-5 bg-gray-800 rounded-full mr-2"></div>
                <span className="text-xs font-semibold text-gray-600 group-hover:text-black transition truncate">{project.author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* TECHNOLOGY STACK SECTION */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Technologies We Use</h2>
            <p className="text-sm text-gray-500">Powering our solutions with modern, scalable, and secure technologies.</p>
          </div>

          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 p-6">
              {(showAllTech ? techStack : techStack.slice(0, 18)).map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group">
                  <div className="h-12 w-12 flex items-center justify-center mb-2 grayscale group-hover:grayscale-0 transition-all duration-300">
                    <img src={tech.logo} alt={tech.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <span className="text-[11px] font-medium text-gray-500 group-hover:text-gray-800 text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {techStack.length > 18 && (
            <div className="mt-6 flex justify-center">
              <button 
                onClick={() => setShowAllTech(!showAllTech)}
                className="flex items-center gap-2 border border-gray-300 text-gray-700 px-5 py-2 rounded-full font-semibold hover:bg-gray-50 hover:text-blue-600 transition text-sm"
              >
                <span>{showAllTech ? 'Show Less' : `Show All ${techStack.length} Technologies`}</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${showAllTech ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* OUR DEVELOPMENT PROCESS SECTION */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Our Development Process</h2>
            <p className="text-sm text-gray-500">A proven step-by-step approach to delivering world-class software.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processes.map((proc, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {proc.step}
                </div>
                <h4 className="font-bold text-gray-800 text-sm mb-2 group-hover:text-blue-600 transition">{proc.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Meet Our Expert Team</h2>
            <p className="text-sm text-gray-500">Dedicated professionals building your digital future.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Founder Card */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="h-64 overflow-hidden bg-gray-100">
                <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" alt="Founder" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-gray-900 text-lg">Rajat Jangra</h3>
                <p className="text-sm text-blue-600 font-medium mb-2">Founder & Lead Developer</p>
                <p className="text-xs text-gray-500">MERN Stack Expert</p>
              </div>
            </div>
            
            {teamEngineers.map((engineer) => (
              <div key={engineer.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition group">
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img src={engineer.img} alt={engineer.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-gray-900">{engineer.name}</h3>
                  <p className="text-sm text-blue-600 font-medium">{engineer.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REVIEWS SECTION */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Leave a Review</h2>
                <p className="text-sm text-gray-500 mb-6">Worked with us? Share your experience!</p>
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={newReview.name} 
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })} 
                      className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-black" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Role / Company</label>
                    <input 
                      type="text" 
                      value={newReview.role} 
                      onChange={(e) => setNewReview({ ...newReview, role: e.target.value })} 
                      className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-black" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2">Rating</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon 
                          key={star} 
                          filled={star <= (hoverRating || newReview.rating)} 
                          onMouseEnter={() => setHoverRating(star)} 
                          onMouseLeave={() => setHoverRating(0)} 
                          onClick={() => setNewReview({ ...newReview, rating: star })} 
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Your Review *</label>
                    <textarea 
                      required 
                      rows="3" 
                      value={newReview.text} 
                      onChange={(e) => setNewReview({ ...newReview, text: e.target.value })} 
                      className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-black resize-none" 
                    />
                  </div>
                  <button type="submit" className="w-full bg-black text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition text-sm">
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Client Reviews</h2>
                  <p className="text-sm text-gray-500">What our clients say about us</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-gray-900">{reviews.length}</span>
                  <span className="text-xs text-gray-500">reviews</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                    <div className="flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-4 italic">"{review.text}"</p>
                    <div className="flex items-center pt-3 border-t border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm mr-3">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                        <p className="text-xs text-gray-500">{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-sm text-gray-500">Everything you need to know about working with us</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <span className={`font-semibold text-sm sm:text-base ${openFaq === index ? 'text-blue-600' : 'text-gray-900'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown isOpen={openFaq === index} />
                </button>
                <div className={`px-6 transition-all duration-300 ease-in-out ${openFaq === index ? 'pb-4 max-h-40' : 'max-h-0 pb-0'}`}>
                  <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <div className="bg-[#fafafa] border-t border-gray-200 mt-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-gray-200">
            <div className="lg:col-span-2">
              <img src="https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777357761/company_logo_-removebg-preview_tzkdbq.png" alt="Aurix AI" className="h-10 mb-4" />
              <p className="text-sm text-gray-500 mb-4 max-w-md">
                Crafting high-performance web, mobile, AI automation, and WhatsApp API solutions to scale your business globally.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-700 transition">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-gray-700 transition">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-gray-700 transition">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-gray-700 transition">GitHub</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900 transition">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Services</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900 transition">Web Development</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">AI Automation</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">WhatsApp API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900 transition">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">FAQs</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-6 text-xs text-gray-400">
            <p>&copy; 2024 Aurix AI Software. All rights reserved. Built with ❤️ by Rajat Jangra</p>
          </div>
        </div>
      </div>

      {/* LOGIN MODAL */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn" onClick={() => setIsLoginOpen(false)}>
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsLoginOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="p-8">
              <div className="text-center mb-6">
                <img src="https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777357761/company_logo_-removebg-preview_tzkdbq.png" alt="logo" className="h-8 mx-auto mb-3" />
                <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                <p className="text-sm text-gray-500 mt-1">Sign in to your account</p>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-black" placeholder="hello@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input type="password" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-black" placeholder="••••••••" />
                </div>
                <button className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
                  Sign In
                </button>
              </form>
              <p className="text-center text-sm text-gray-500 mt-4">
                Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* PROJECT MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn" onClick={() => setActiveProject(null)}>
          <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h3 className="font-bold text-gray-900">{activeProject.title}</h3>
              <button onClick={() => setActiveProject(null)} className="text-gray-400 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="flex-1 bg-gray-100">
              {activeProject.url ? (
                <iframe src={activeProject.url} className="w-full h-[80vh]" title={activeProject.title} />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">No preview available</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* SERVICE VIDEO PREVIEW MODAL */}
      {selectedServicePreview && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn" onClick={() => setSelectedServicePreview(null)}>
          <div className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{allServices.find(s => s.name === selectedServicePreview.name)?.icon}</span>
                <span className="font-bold">{selectedServicePreview.name} Demo</span>
              </div>
              <button onClick={() => setSelectedServicePreview(null)} className="text-white hover:text-gray-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="aspect-video bg-black">
              <iframe src={selectedServicePreview.videoUrl} className="w-full h-full" title={selectedServicePreview.name} allow="autoplay; fullscreen" />
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm">{selectedServicePreview.description}</p>
              <button className="mt-4 bg-black text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition">
                Get a Quote →
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;