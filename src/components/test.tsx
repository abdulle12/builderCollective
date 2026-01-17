import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { 
  User, Briefcase, ArrowRight, Menu, X, 
  Code, Rocket, Zap, Target, CheckCircle, AlertCircle,
  Mail, Phone, Lightbulb, 
} from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  skills: string;
  projectDescription: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  role?: string;
  skills?: string;
  projectDescription?: string;
}

interface LandingPageProps {
  onEnter: () => void;
}

interface RegistrationFormProps {
  onBack: () => void;
}

const BuildersCollective = () => {
  const [currentView, setCurrentView] = useState('landing'); 

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = 'auto'; };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-yellow-500 selection:text-black">
      {currentView === 'landing' ? (
        <LandingPage onEnter={() => setCurrentView('form')} />
      ) : (
        <RegistrationForm onBack={() => setCurrentView('landing')} />
      )}
    </div>
  );
};

// --- LANDING PAGE COMPONENT ---
const LandingPage = ({ onEnter }: LandingPageProps) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
              <Code size={20} className="text-black font-bold" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Builder's Collective</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#mission" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">The Mission</a>
            <a href="#paradox" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">The Paradox</a>
            <a href="#experience" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Who is this for?</a>
            <a href="#how" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">How it Works</a>
            <button onClick={onEnter} className="px-5 py-2.5 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg shadow-yellow-900/20">
              Launch App
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenu && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-4">
            <a href="#mission" onClick={() => setMobileMenu(false)} className="block text-slate-300 hover:text-white">Mission</a>
            <a href="#paradox" onClick={() => setMobileMenu(false)} className="block text-slate-300 hover:text-white">The Paradox</a>
            <a href="#experience" onClick={() => setMobileMenu(false)} className="block text-slate-300 hover:text-white">Target Audience</a>
            <button onClick={onEnter} className="w-full py-3 bg-yellow-400 text-black font-bold rounded-lg">Launch App</button>
          </div>
        )}
      </nav>

      {/* Hero Section (The Mission) */}
      <section id="mission" className="relative pt-24 pb-32 px-6 overflow-hidden flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-yellow-400 text-xs font-bold mb-8 uppercase tracking-wider">
            <Zap size={14} fill="currentColor" /> Beta Access: 50/50 Spots Remaining
        </div>
        <h1 className="max-w-4xl text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white">
          Stop Learning. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Start Shipping.</span>
        </h1>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          The curated community where founders build their MVPs and juniors build their careers. 
          No tutorials. No hello world. Just real products.
        </p>
        <button onClick={onEnter} className="group px-8 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-slate-200 transition-all flex items-center gap-2">
          Join the Collective <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        
        {/* Abstract Background Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[100px] -z-10" />
      </section>

      {/* The Paradox Section (The Problem) */}
      <section id="paradox" className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <div className="inline-block p-3 rounded-full bg-slate-800 text-yellow-400 mb-4">
              <AlertCircle size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The Experience Paradox</h2>
            <p className="text-slate-400 text-lg">The tech industry has a broken entry system that is killing innovation.</p>
          </div>
          
          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase rounded">The Deadlock</div>
            <p className="text-xl md:text-2xl font-serif italic text-slate-300 leading-relaxed">
              "You can't get a job without experience.<br/>
              But you can't get experience without a job."
            </p>
          </div>
        </div>
      </section>

      {/* Personal Experience Section (Who is this for?) */}
      <section id="experience" className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Who are we solving for?</h2>
            <p className="text-slate-400">We bridge the gap between two types of builders.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Founder Experience */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-slate-600 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-900/30 text-blue-400 rounded-xl flex items-center justify-center">
                  <Rocket size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">The Bootstrap Founder</h3>
              </div>
              <div className="space-y-4 mb-8">
                <p className="text-slate-400 leading-relaxed">
                  <span className="text-white font-semibold">The Pain:</span> You have a vision and domain expertise, but you don't code. Agencies want $50k you don't have. Freelancers are unreliable. You're stuck with an idea in a notebook.
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex gap-2"><X size={16} className="text-red-500" /> Can't afford senior devs</li>
                  <li className="flex gap-2"><X size={16} className="text-red-500" /> Afraid of idea theft</li>
                  <li className="flex gap-2"><X size={16} className="text-red-500" /> Need an MVP yesterday</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-slate-800">
                <p className="text-blue-400 font-medium">The Solution: Find hungry builders who will build your MVP for portfolio credit and revenue share.</p>
              </div>
            </div>

            {/* The Job Seeker Experience */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-yellow-500/30 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-900/30 text-yellow-400 rounded-xl flex items-center justify-center">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">The Aspiring Dev</h3>
              </div>
              <div className="space-y-4 mb-8">
                <p className="text-slate-400 leading-relaxed">
                  <span className="text-white font-semibold">The Pain:</span> You know React and Node, but you're stuck in "Tutorial Hell." Recruiters ghost you because your GitHub is full of To-Do list apps. You need to prove you can ship.
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex gap-2"><X size={16} className="text-red-500" /> No commercial experience</li>
                  <li className="flex gap-2"><X size={16} className="text-red-500" /> Portfolio looks generic</li>
                  <li className="flex gap-2"><X size={16} className="text-red-500" /> Missing team collaboration skills</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-slate-800">
                <p className="text-yellow-400 font-medium">The Solution: Join a real team, ship a real product, and get a reference letter from a real founder.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-24 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-800 -z-0"></div>

            <div className="relative z-10">
              <div className="w-24 h-24 bg-slate-950 border-4 border-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-xl">1</div>
              <h3 className="text-xl font-bold mb-2">Post The Problem</h3>
              <p className="text-slate-400 text-sm px-4">Founders post real problems they are solving and the roles they need.</p>
            </div>
            
            <div className="relative z-10">
              <div className="w-24 h-24 bg-slate-950 border-4 border-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-500 font-bold text-2xl shadow-xl shadow-yellow-900/20">2</div>
              <h3 className="text-xl font-bold mb-2">Form The Team</h3>
              <p className="text-slate-400 text-sm px-4">Builders apply to join. Squads are formed based on tech stack and passion.</p>
            </div>

            <div className="relative z-10">
              <div className="w-24 h-24 bg-slate-950 border-4 border-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-xl">3</div>
              <h3 className="text-xl font-bold mb-2">Ship & Launch</h3>
              <p className="text-slate-400 text-sm px-4">The team builds the MVP. The product launches. Everyone gains credit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-yellow-400 text-black">
        <h2 className="text-4xl font-extrabold mb-6">Ready to break the cycle?</h2>
        <p className="text-lg font-medium mb-8 max-w-2xl mx-auto opacity-80">
          Join the first 50 members. No lurkers. Only builders.
        </p>
        <button onClick={onEnter} className="px-10 py-4 bg-black text-white text-lg font-bold rounded-xl hover:bg-slate-900 transition-all shadow-xl">
          Enter The Collective
        </button>
      </section>
    </div>
  );
};

// --- REGISTRATION FORM COMPONENT ---
const RegistrationForm = ({ onBack }: RegistrationFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    skills: '',
    projectDescription: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.role) newErrors.role = 'Please select your role';
    if (formData.role === 'builder' && !formData.skills.trim()) {
      newErrors.skills = 'Please list your skills';
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = formData.role === 'founder' 
        ? 'Please describe what you want to build'
        : 'Please describe what type of projects interest you';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    const { error } = await supabase.from("beta_users").insert([
      {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        skills: formData.skills,
        project_description: formData.projectDescription,
      },
    ]);

    if (error) {
      console.error(error);
      alert("Submission failed. Please try again.");
      return;
    }

    // Reset form immediately
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      role: '',
      skills: '',
      projectDescription: ''
    });
    
    // Show success view (Removed the redirect timer)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle size={40} className="text-black" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Welcome to the Collective!</h2>
          <p className="text-slate-400 mb-8 text-lg">
            Your registration has been received. We'll review your application and get back to you within 48 hours.
          </p>
          <div className="flex flex-col gap-4">
            <button 
              onClick={onBack}
              className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all"
            >
              Back to Home
            </button>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              Submit another response
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowRight size={20} className="rotate-180" /> Back to Home
        </button>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-yellow-400 text-xs font-bold mb-6 uppercase tracking-wider">
            <Zap size={14} fill="currentColor" /> Beta Registration
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join the Collective</h1>
          <p className="text-slate-400 text-lg">Tell us about yourself and what you want to build</p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 space-y-6">
          
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-2">
              <User size={16} className="text-yellow-400" />
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-slate-950 border ${errors.fullName ? 'border-red-500' : 'border-slate-800'} rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all`}
              placeholder="John Doe"
            />
            {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-2">
              <Mail size={16} className="text-yellow-400" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-slate-950 border ${errors.email ? 'border-red-500' : 'border-slate-800'} rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-2">
              <Phone size={16} className="text-yellow-400" />
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-slate-950 border ${errors.phone ? 'border-red-500' : 'border-slate-800'} rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all`}
              placeholder="+1 (555) 000-0000"
            />
            {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Role Selection */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-3">
              <Briefcase size={16} className="text-yellow-400" />
              I am a *
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, role: 'founder' }))}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  formData.role === 'founder'
                    ? 'border-blue-500 bg-blue-900/20'
                    : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-900/50 text-blue-400 rounded-lg flex items-center justify-center">
                    <Rocket size={20} />
                  </div>
                  <h3 className="font-bold text-lg">Founder</h3>
                </div>
                <p className="text-sm text-slate-400">I have an idea and need builders to bring it to life</p>
              </button>

              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, role: 'builder' }))}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  formData.role === 'builder'
                    ? 'border-yellow-500 bg-yellow-900/20'
                    : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-yellow-900/50 text-yellow-400 rounded-lg flex items-center justify-center">
                    <Code size={20} />
                  </div>
                  <h3 className="font-bold text-lg">Builder</h3>
                </div>
                <p className="text-sm text-slate-400">I want to build real products and gain experience</p>
              </button>
            </div>
            {errors.role && <p className="text-red-400 text-sm mt-2">{errors.role}</p>}
          </div>

          {/* Skills (only for builders) */}
          {formData.role === 'builder' && (
            <div>
              <label htmlFor="skills" className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-2">
                <Target size={16} className="text-yellow-400" />
                Your Skills *
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-950 border ${errors.skills ? 'border-red-500' : 'border-slate-800'} rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all`}
                placeholder="e.g., React, Node.js, Python, UI/UX Design"
              />
              {errors.skills && <p className="text-red-400 text-sm mt-1">{errors.skills}</p>}
              <p className="text-slate-500 text-xs mt-1">Separate multiple skills with commas</p>
            </div>
          )}

          {/* Project Description */}
          <div>
            <label htmlFor="projectDescription" className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-2">
              <Lightbulb size={16} className="text-yellow-400" />
              {formData.role === 'founder' ? 'What do you want to build? *' : 'What interests you? *'}
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 bg-slate-950 border ${errors.projectDescription ? 'border-red-500' : 'border-slate-800'} rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all resize-none`}
              placeholder={
                formData.role === 'founder'
                  ? 'Describe your project idea, the problem it solves, and what kind of team you need...'
                  : 'Tell us about the types of projects you want to work on, what you want to learn, and your goals...'
              }
            />
            {errors.projectDescription && <p className="text-red-400 text-sm mt-1">{errors.projectDescription}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300 transition-all transform hover:scale-[1.02] shadow-lg shadow-yellow-900/20 flex items-center justify-center gap-2"
            >
              Submit Application
              <ArrowRight size={20} />
            </button>
          </div>

          <p className="text-center text-slate-500 text-sm">
            By submitting, you agree to join a community of builders committed to shipping real products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildersCollective;