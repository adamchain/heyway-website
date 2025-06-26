import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Zap, Brain, Mic, ArrowRight, Check, User, PhoneCall, Volume2, Search, MapPin, Star, Download, Clock, FileText } from 'lucide-react';

const heroTexts = [
  "Call mom back to ask about dinner plans",
  "Make a vet appointment for my dog",
  "Call the unknown number that just rang me",
  "Cancel my appointment at the hair salon",
  "See if the pharmacy has my prescription ready",
  "Ask the restaurant if they're open or taking reservations",
  "Call the landlord about the leak",
  "Check if my food order is ready for pickup",
  "Reschedule my dentist appointment",
  "Ask the recruiter for an update on my interview"
];

const features = [
  {
    title: "Write a prompt, we handle the call",
    description: "Just type what you need to say and we'll make the call for you",
    screenshot: "/screenshots/voice.png"
  },
  {
    title: "Call from your number, sound like you",
    description: "Uses your real caller ID with AI voices that match your style",
    screenshot: "/screenshots/biz.png"
  },
  {
    title: "Get transcriptions and responses instantly",
    description: "Complete call summaries delivered right after each conversation",
    screenshot: "/screenshots/dash.jpg"
  }
];

function HeroTextRotation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroTexts.length);
        setIsVisible(true);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Let HeyWay call for you —
      </h1>
      <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 max-w-3xl mx-auto">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className={`text-gray-200 text-lg sm:text-xl font-medium min-h-[28px] transition-all duration-400 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
        }`}>
          "{heroTexts[currentIndex]}"
          <span className="animate-pulse">|</span>
        </div>
      </div>
    </div>
  );
}

function PhoneMockup({ screenshot, isActive }: { screenshot: string; isActive: boolean }) {
  return (
    <div className={`relative max-w-sm mx-auto transition-all duration-500 ${
      isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
    }`}>
      {/* Phone Frame */}
      <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
        <div className="bg-black rounded-[2.5rem] p-1">
          <div className="bg-white rounded-[2rem] overflow-hidden">
            {/* Status Bar */}
            <div className="bg-gray-50 px-6 py-2 flex justify-between items-center text-sm font-medium">
              <span>2:15</span>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                <div className="w-6 h-3 bg-gray-300 rounded-sm"></div>
                <div className="w-6 h-3 bg-green-500 rounded-sm"></div>
              </div>
            </div>

            {/* Screenshot Content */}
            <div className="relative h-[500px] overflow-hidden">
              <img
                src={screenshot}
                alt="HeyWay app interface"
                className="w-full h-full object-cover transition-all duration-500"
              />
              {/* Overlay gradient for better visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Features List */}
          <div className="space-y-8">
            <div className="mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                How it works
              </h2>
              <p className="text-xl text-gray-600">
                Three simple steps to never make another awkward call again.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-white shadow-lg border-2 border-blue-200 transform scale-105'
                      : 'bg-white/50 hover:bg-white/80 border-2 border-transparent'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold transition-colors duration-300 ${
                      activeFeature === index ? 'bg-blue-500' : 'bg-gray-400'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                        activeFeature === index ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`transition-colors duration-300 ${
                        activeFeature === index ? 'text-gray-600' : 'text-gray-500'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                <Download className="w-5 h-5 mr-2" />
                Try HeyWay
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative">
            <div className="sticky top-20">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    activeFeature === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <PhoneMockup screenshot={feature.screenshot} isActive={activeFeature === index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-gray-900">HeyWay</span>
          </div>

          {/* Rotating Hero Text */}
          <HeroTextRotation />

          {/* Subtext */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Just type a prompt. No stress. No awkward calls. Just results.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              <Zap className="w-6 h-6 mr-3" />
              Try HeyWay
              <ArrowRight className="ml-3 h-6 w-6" />
            </button>
            
            <button className="inline-flex items-center px-10 py-5 border-2 border-gray-300 text-gray-700 text-xl font-semibold rounded-2xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
              <MessageSquare className="w-6 h-6 mr-3" />
              Join Waitlist
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />
    </div>
  );
}

export default App;