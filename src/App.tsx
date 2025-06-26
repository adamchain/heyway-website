import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Zap, Brain, Mic, ArrowRight, Check, User, PhoneCall, Volume2, Search, MapPin, Star, Download, Clock, FileText } from 'lucide-react';

const prompts = [
  "Tell my landlord I'll pay rent on Friday",
  "Remind my client about our 3pm call",
  "Call mom and ask if she wants to visit next weekend",
  "Tell my boss I'm stuck in traffic, running 10 late",
  "Confirm the reservation for tonight, party of 5"
];

function TypingAnimation() {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const prompt = prompts[currentPrompt];

    if (isTyping) {
      if (currentText.length < prompt.length) {
        const timer = setTimeout(() => {
          setCurrentText(prompt.slice(0, currentText.length + 1));
        }, 80);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (currentText.length > 0) {
        const timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 30);
        return () => clearTimeout(timer);
      } else {
        setCurrentPrompt((prev) => (prev + 1) % prompts.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentPrompt, isTyping]);

  return (
    <div className="relative">
      <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 max-w-2xl mx-auto">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-200 text-lg font-medium min-h-[28px]">
          {currentText}
          <span className="animate-pulse">|</span>
        </div>
      </div>
    </div>
  );
}

function iPhonePlaceholder() {
  return (
    <div className="relative max-w-sm mx-auto">
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

            {/* App Interface Placeholder */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-700 p-8 text-center min-h-[500px] flex flex-col justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-green-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">HeyWay</h3>
              <p className="text-gray-300">AI Assistant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Navigation */}
      <nav className="bg-gray-900/80 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Phone className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold text-white">HeyWay</span>
            </div>
            <button className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Download for iOS
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Let HeyWay call for you —{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-green-400 bg-clip-text text-transparent">
              Just type a prompt.
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">

          </p>

          <div className="mb-16">
            <TypingAnimation />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              <Download className="w-5 h-5 mr-2" />
              Download for iOS
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-lg font-medium rounded-xl text-gray-200 bg-gray-800 hover:bg-gray-700 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Choose Your AI Voice Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Choose Your Voice</h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Pick from 23 human-like voices, each with its own personality.
              </p>

            </div>

            <div className="max-w-sm mx-auto lg:mx-0">
              <img
                src="/screenshots/voice.png"
                alt="Voice selection interface"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Caller ID Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-1 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-white mb-6">Your Caller ID, Your Number</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                All calls go out from your actual number—so when someone gets a call, they see you calling.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Business Search Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-sm mx-auto lg:mx-0">
              <img
                src="/screenshots/biz.png"
                alt="Voice selection interface"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Call Any Business, Anywhere</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                HeyWay lets you search for businesses like 'vets near me' or 'local barber' and instantly
                call with your AI assistant. No more looking up phone numbers or navigating phone trees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call Transcripts Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Complete Call Transcripts</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Get detailed transcripts of every conversation with key outcomes highlighted.
                Never miss important details or forget what was discussed.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Full Transcripts</h4>
                    <p className="text-gray-300">Complete word-for-word conversation records</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Key Outcomes</h4>
                    <p className="text-gray-300">Important decisions and next steps highlighted</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Instant Delivery</h4>
                    <p className="text-gray-300">Transcripts delivered within seconds of call ending</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {iPhonePlaceholder()}
            </div>
          </div>
        </div>
      </section>

      {/* iPhone Download Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to let AI handle your calls?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of users who've already saved hours of their time with HeyWay.
              Download now and get your first 3 calls free.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="inline-flex items-center px-8 py-4 bg-white text-black text-lg font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
              <Download className="w-6 h-6 mr-3" />
              Download for iPhone
            </button>

            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-2xl hover:bg-white hover:text-black transition-all duration-200">
              <MessageSquare className="w-6 h-6 mr-3" />
              Join Waitlist
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">10,000+</div>
              <p className="text-gray-300">Calls completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">4.9★</div>
              <p className="text-gray-300">App Store rating</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">2.5hrs</div>
              <p className="text-gray-300">Average time saved per week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Phone className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">HeyWay</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 HeyWay. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;