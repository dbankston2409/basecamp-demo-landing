"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to CRM/email service
    alert("Thanks for your interest! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-[#16A085]">Basecamp</div>
          <a
            href="tel:8005551234"
            className="text-gray-600 hover:text-[#16A085] transition-colors"
          >
            (800) 555-1234
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#16A085] to-[#0F8F7A] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Manage Projects Without The Chaos
            </h1>
            <p className="text-xl mb-8 text-white/90">
              All your projects, conversations, files, and to-dos in one place.
              See why 100,000+ teams made the switch to Basecamp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-white text-[#16A085] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Try Free for 30 Days
              </a>
              <a
                href="#features"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors text-center"
              >
                See How It Works
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="h-4 bg-white/30 rounded w-3/4"></div>
                <div className="h-4 bg-white/30 rounded w-1/2"></div>
                <div className="h-32 bg-white/20 rounded-lg mt-6"></div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-20 bg-white/20 rounded"></div>
                  <div className="h-20 bg-white/20 rounded"></div>
                  <div className="h-20 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Everything Your Team Needs
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Stop juggling multiple tools. Basecamp brings it all together.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#16A085] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Project Management</h3>
              <p className="text-gray-600">
                Organize all your projects with to-do lists, timelines, and progress tracking in one visual workspace.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#16A085] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Team Chat</h3>
              <p className="text-gray-600">
                Real-time messaging and group conversations keep everyone in the loop without endless email threads.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#16A085] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">File Storage</h3>
              <p className="text-gray-600">
                Store and share files, documents, and assets with your team. Everything organized by project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-[#16A085] mb-2">100K+</div>
            <div className="text-gray-600 text-lg">Teams Using Basecamp</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-[#16A085] mb-2">99.9%</div>
            <div className="text-gray-600 text-lg">Uptime Guaranteed</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-[#16A085] mb-2">4.8★</div>
            <div className="text-gray-600 text-lg">Customer Rating</div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Start Your Free 30-Day Trial
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            No credit card required. Full access to all features.
          </p>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16A085] focus:border-transparent outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16A085] focus:border-transparent outline-none transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16A085] focus:border-transparent outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16A085] focus:border-transparent outline-none transition-all"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#16A085] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0F8F7A] transition-colors"
              >
                Get Started Free
              </button>
            </div>
            <p className="text-sm text-gray-500 text-center mt-6">
              By submitting, you agree to receive emails about Basecamp and related services.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-[#16A085] mb-4">Basecamp</div>
          <p className="text-gray-400 mb-6">
            Project management made simple for teams of all sizes.
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © 2026 Basecamp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
