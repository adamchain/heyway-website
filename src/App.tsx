import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Zap, Brain, Mic, ArrowRight, Check, User, PhoneCall, Volume2, Search, MapPin, Star, Download, Clock, FileText } from 'lucide-react';

const prompts = [
  "Tell my landlord I'll pay rent on Friday",
  "Remind my client about our 3pm call",
  "Call mom and ask if she wants to visit next weekend",
  "Tell my boss I'm stuck in traffic, running 10 late",
  "Confirm the reservation for tonight, party of 5"
];

const voices = [
  { name: "Sarah", type: "Professional", accent: "American", gender: "Female" },
  { name: "Marcus", type: "Energetic", accent: "British", gender: "Male" },
  { name: "Elena", type: "Calm", accent: "Spanish", gender: "Female" },
  { name: "David", type: "Friendly", accent: "Australian", gender: "Male" },
  { name: "Aria", type: "Confident", accent: "Canadian", gender: "Female" },
  { name: "James", type: "Warm", accent: "American", gender: "Male" }
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
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 max-w-2xl mx-auto">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-700 text-lg font-medium min-h-[28px]">
          {currentText}
          <span className="animate-pulse">|</span>
        </div>
      </div>
    </div>
  );
}

function CallerIDPreview() {
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
            
            {/* Incoming Call Interface */}
            <div className="bg-gradient-to-b from-gray-900 to-black text-white p-8 text-center min-h-[500px] flex flex-col justify-between">
              <div className="pt-8">
                <div className="text-sm opacity-60 mb-2">Incoming call</div>
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
                  JD
                </div>
                <h3 className="text-2xl font-semibold mb-2">John Doe</h3>
                <p className="text-lg opacity-80 mb-1">(555) 123-4567</p>
                <p className="text-sm opacity-60">mobile</p>
              </div>
              
              <div className="flex justify-center space-x-16">
                <button className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <PhoneCall className="w-8 h-8 text-white transform rotate-135" />
                </button>
                <button className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <PhoneCall className="w-8 h-8 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VoiceCard({ voice, isActive, onClick }: { voice: typeof voices[0], isActive: boolean, onClick: () => void }) {
  return (
    <div 
      className={`bg-white rounded-2xl p-6 border-2 transition-all duration-200 cursor-pointer hover:shadow-lg ${
        isActive ? 'border-green-500 shadow-lg' : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          voice.gender === 'Female' ? 'bg-pink-100' : 'bg-blue-100'
        }`}>
          <User className={`w-6 h-6 ${voice.gender === 'Female' ? 'text-pink-600' : 'text-blue-600'}`} />
        </div>
        <button className={`p-2 rounded-full transition-colors ${
          isActive ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}>
          <Volume2 className="w-4 h-4" />
        </button>
      </div>
      <h4 className="font-semibold text-gray-900 mb-1">{voice.name}</h4>
      <p className="text-sm text-gray-600 mb-2">{voice.type} • {voice.accent}</p>
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    </div>
  );
}

function BusinessSearchPreview() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-md mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-green-500 rounded-full flex items-center justify-center">
          <Search className="w-5 h-5 text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Business Search</h4>
          <p className="text-sm text-gray-500">Find and call instantly</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-gray-900">Downtown Veterinary</h5>
              <p className="text-sm text-gray-600">0.3 miles • Open until 6 PM</p>
              <div className="flex items-center space-x-1 mt-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-gray-600">4.8 (127 reviews)</span>
              </div>
            </div>
            <button className="px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
              Call
            </button>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-gray-900">Pet Care Plus</h5>
              <p className="text-sm text-gray-600">0.7 miles • Open 24/7</p>
              <div className="flex items-center space-x-1 mt-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-gray-600">4.6 (89 reviews)</span>
              </div>
            </div>
            <button className="px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
              Call
            </button>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-gray-900">Animal Hospital North</h5>
              <p className="text-sm text-gray-600">1.2 miles • Closes at 8 PM</p>
              <div className="flex items-center space-x-1 mt-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-gray-600">4.9 (203 reviews)</span>
              </div>
            </div>
            <button className="px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
              Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CallTranscriptCard({ title, time, summary, outcome }: { title: string, time: string, summary: string, outcome: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-green-500 rounded-full flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{title}</h4>
            <p className="text-sm text-gray-500 flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {time}
            </p>
          </div>
        </div>
        <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
          View Full
        </button>
      </div>
      
      <div className="space-y-3 mb-4">
        <p className="text-gray-700 text-sm leading-relaxed">{summary}</p>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-2 text-green-600">
          <Check className="w-4 h-4" />
          <span className="text-sm font-medium">{outcome}</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeVoice, setActiveVoice] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Phone className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">HeyWay</span>
            </div>
            <button className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors">
              Get Early Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Let HeyWay call for you —{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-green-500 bg-clip-text text-transparent">
              Just type a prompt.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your AI assistant that makes phone calls on your behalf using advanced AI. 
            Recipients think it's you calling from your own number.
          </p>
          
          <div className="mb-16">
            <TypingAnimation />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-gray-300 text-lg font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Choose Your AI Voice Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your AI Voice</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pick from 23 stunningly realistic voices—male, female, energetic, calm, or professional. 
              Make the AI sound like you… or better.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {voices.map((voice, index) => (
              <VoiceCard 
                key={index}
                voice={voice}
                isActive={activeVoice === index}
                onClick={() => setActiveVoice(index)}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">And 17 more voices to choose from</p>
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              Browse All Voices
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Caller ID Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Caller ID, Your Number</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                All calls go out from your real number—so when someone picks up, they see you calling, 
                not some unknown spam number. Build trust from the first ring.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Your name appears on caller ID</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">No suspicious unknown numbers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Higher answer rates guaranteed</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <CallerIDPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Business Search Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <BusinessSearchPreview />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Call Any Business, Anywhere</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                HeyWay lets you search for businesses like 'vets near me' or 'local barber' and instantly 
                call with your AI assistant. No more looking up phone numbers or navigating phone trees.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Search className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Smart Business Search</h4>
                    <p className="text-gray-600">Find restaurants, services, and shops with natural language queries</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Location-Based Results</h4>
                    <p className="text-gray-600">Get businesses near you with hours, ratings, and contact info</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">One-Click Calling</h4>
                    <p className="text-gray-600">Skip the hassle—HeyWay calls and handles the conversation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Feels Human */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why it feels human</h2>
            <p className="text-xl text-gray-600">Powered by cutting-edge AI technology</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">GPT-4.1 Intelligence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our AI understands context, nuance, and can handle complex conversations naturally. 
                    It adapts to different situations and responds appropriately to unexpected questions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Mic className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">ElevenLabs Voice</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ultra-realistic voice synthesis that sounds natural and human. Recipients won't know 
                    they're talking to AI - it sounds just like a real person making the call.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700">Natural conversation flow</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700">Handles interruptions gracefully</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700">Remembers conversation context</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700">Adapts tone to situation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call Transcripts Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Call Transcripts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get detailed transcripts of every conversation with key outcomes highlighted. 
              Never miss important details or forget what was discussed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CallTranscriptCard
              title="Restaurant Reservation"
              time="3 minutes ago"
              summary="Called Bella Vista to confirm tonight's reservation for 5 people at 7:30 PM. Discussed dietary restrictions and requested a quiet table."
              outcome="Reservation confirmed, special seating arranged"
            />
            
            <CallTranscriptCard
              title="Doctor Appointment"
              time="1 hour ago"
              summary="Scheduled annual checkup with Dr. Smith for next Tuesday at 2 PM. Confirmed insurance coverage and requested lab work."
              outcome="Appointment booked, lab forms sent via email"
            />
            
            <CallTranscriptCard
              title="Client Follow-up"
              time="2 hours ago"
              summary="Followed up with Johnson Corp about the proposal deadline. They requested a 2-day extension and additional pricing options."
              outcome="Extension granted, revised proposal due Friday"
            />
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-indigo-50 to-green-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Full Transcripts</h4>
                  <p className="text-gray-600 text-sm">Complete word-for-word conversation records</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Outcomes</h4>
                  <p className="text-gray-600 text-sm">Important decisions and next steps highlighted</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Instant Delivery</h4>
                  <p className="text-gray-600 text-sm">Transcripts delivered within seconds of call ending</p>
                </div>
              </div>
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