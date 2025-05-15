import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Clock, Download, Users, BookOpen, Activity } from 'lucide-react';

const MomentumHub = () => {
  // This would normally come from an API or database
  const clientResources = [
    {
      id: 1,
      title: "Movement Tracking Dashboard",
      description: "Track your momentum metrics and visualize your progress over time.",
      icon: <Activity size={24} />,
      link: "#",
      isComingSoon: false
    },
    {
      id: 2,
      title: "Decision Accelerator Tool",
      description: "Interactive framework for making rapid, aligned decisions.",
      icon: <Clock size={24} />,
      link: "#",
      isComingSoon: true
    },
    {
      id: 3,
      title: "Resource Library",
      description: "Access all worksheets, templates, and guides from your sessions.",
      icon: <BookOpen size={24} />,
      link: "#",
      isComingSoon: false
    },
    {
      id: 4,
      title: "Community Forum",
      description: "Connect with other clients and share learnings.",
      icon: <Users size={24} />,
      link: "#",
      isComingSoon: true
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Monthly Movement Call",
      date: "June 15, 2023",
      time: "12:00 PM ET",
      description: "Group coaching session on breaking decision paralysis."
    },
    {
      id: 2,
      title: "Client Success Spotlight",
      date: "June 22, 2023",
      time: "3:00 PM ET",
      description: "MindFuel Media shares their journey from drift to 3x revenue growth."
    }
  ];

  const clientSuccessStories = [
    {
      id: 1,
      companyName: "EcoTech Solutions",
      result: "Launched 2 products in 90 days after 8 months of drift",
      quote: "The Momentum Sprint completely transformed how we make decisions. We're shipping faster than ever.",
      contact: "Sarah Chen, CEO"
    },
    {
      id: 2,
      companyName: "Meridian Designs",
      result: "3x revenue in 6 months with 40% less meetings",
      quote: "IMAGINATION G helped us realize we were drowning in processes instead of creating value. The clarity was instant.",
      contact: "Taylor Brooks, Founder"
    }
  ];

  return (
    <>
      <Head>
        <title>Client Momentum Hub | IMAGINATION G</title>
        <meta name="description" content="Resources and tools for IMAGINATION G clients to maintain momentum." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="bg-black bg-opacity-95 backdrop-blur-sm shadow-lg px-6 py-4 fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-wider">IMAGINATION G</Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-gray-600">|</span>
              <span className="text-white">Client Hub</span>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <h2 className="text-green-500 font-medium">CLIENT MOMENTUM HUB</h2>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Keep Your Movement Going</h1>
            <p className="text-xl text-gray-300 mb-8">Exclusive resources, community, and tools for IMAGINATION G clients.</p>
            
            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Link href="#momentum-check" className="bg-zinc-900 p-4 rounded-lg hover:bg-zinc-800 transition-colors">
                <div className="flex items-center justify-between">
                  <span>Schedule Momentum Check</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
              <Link href="#resources" className="bg-zinc-900 p-4 rounded-lg hover:bg-zinc-800 transition-colors">
                <div className="flex items-center justify-between">
                  <span>Access Resources</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
              <Link href="#events" className="bg-zinc-900 p-4 rounded-lg hover:bg-zinc-800 transition-colors">
                <div className="flex items-center justify-between">
                  <span>Upcoming Events</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Personalized Welcome */}
        <section className="py-12 px-6 bg-zinc-900 border-y border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src="/images/marcus-davis-profile.jpg"
                  alt="Marcus Davis"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">A Personal Note from Marcus</h2>
                <p className="text-gray-300 mb-4">
                  Client momentum is everything to me. I've designed these resources to help you maintain
                  the movement we've created together. Reach out anytime if you need a momentum boost.
                </p>
                <p className="text-gray-400">
                  — Marcus Davis, Founder & Chief Catalyst
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 30/60/90 Check-in */}
        <section id="momentum-check" className="py-16 px-6 bg-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Momentum Check-In</h2>
            
            <div className="bg-black p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">How's Your Movement Going?</h3>
              <p className="mb-6">Regular check-ins keep momentum alive. Book a complimentary 30-minute check-in session with our team to ensure you're still moving forward.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="border border-green-500 p-4 rounded-lg text-center">
                  <div className="flex justify-center mb-2">
                    <CheckCircle size={24} className="text-green-500" />
                  </div>
                  <h4 className="font-bold mb-1">30-Day</h4>
                  <p className="text-sm text-gray-400">Initial momentum check</p>
                </div>
                <div className="border border-yellow-500 p-4 rounded-lg text-center">
                  <div className="flex justify-center mb-2">
                    <CheckCircle size={24} className="text-yellow-500" />
                  </div>
                  <h4 className="font-bold mb-1">60-Day</h4>
                  <p className="text-sm text-gray-400">Progress evaluation</p>
                </div>
                <div className="border border-blue-500 p-4 rounded-lg text-center">
                  <div className="flex justify-center mb-2">
                    <CheckCircle size={24} className="text-blue-500" />
                  </div>
                  <h4 className="font-bold mb-1">90-Day</h4>
                  <p className="text-sm text-gray-400">Sustainability review</p>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-3 font-medium inline-block rounded-md hover:bg-gray-200 transition-all"
                >
                  Schedule Your Check-In
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Client Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {clientResources.map(resource => (
                <div key={resource.id} className="bg-zinc-900 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-zinc-800 p-3 rounded-md">
                      {resource.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-xl">{resource.title}</h3>
                        {resource.isComingSoon && (
                          <span className="bg-zinc-800 text-yellow-400 text-xs px-2 py-1 rounded">Coming Soon</span>
                        )}
                      </div>
                      <p className="text-gray-400 mb-4">{resource.description}</p>
                      <Link
                        href={resource.link}
                        className={`inline-flex items-center gap-2 ${resource.isComingSoon ? 'text-gray-500' : 'text-white'}`}
                      >
                        {resource.isComingSoon ? 'Get notified when available' : 'Access Now'}
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Monthly Movement Newsletter</h3>
              <p className="mb-6">Get exclusive strategies, client success stories, and early access to new tools.</p>
              
              <form className="flex gap-4 flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-black border border-zinc-700 px-4 py-3 rounded focus:outline-none focus:border-white"
                />
                <button 
                  type="submit"
                  className="bg-white text-black px-6 py-3 font-medium rounded hover:bg-gray-200 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Events */}
        <section id="events" className="py-16 px-6 bg-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
            
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-black p-6 rounded-lg mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <div className="text-yellow-400 font-medium">{event.date}</div>
                    <div className="text-gray-500">{event.time}</div>
                    <a 
                      href="#" 
                      className="mt-2 inline-flex items-center text-white hover:text-yellow-400 transition-colors"
                    >
                      Add to Calendar
                      <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="text-center mt-10">
              <a 
                href="#" 
                className="border border-white px-6 py-3 font-medium inline-block rounded hover:bg-white hover:text-black transition-all"
              >
                View All Events
              </a>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">Client Success Stories</h2>
            <p className="text-gray-400 mb-8">See how other clients are maintaining their momentum.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clientSuccessStories.map(story => (
                <div key={story.id} className="bg-zinc-900 p-6 rounded-lg">
                  <div className="text-green-500 font-bold text-lg mb-2">{story.companyName}</div>
                  <div className="border-l-4 border-green-500 pl-4 mb-4">
                    <div className="text-xl font-bold">{story.result}</div>
                  </div>
                  <p className="italic text-gray-300 mb-4">"{story.quote}"</p>
                  <div className="text-right text-gray-500">— {story.contact}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 bg-zinc-900 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Share Your Success Story</h3>
              <p className="mb-6">Let us know how you've maintained momentum and the results you've achieved.</p>
              <a 
                href="mailto:marcus@imaginationg.studio?subject=Success%20Story%20Submission" 
                className="bg-white text-black px-6 py-3 font-medium inline-block rounded hover:bg-gray-200 transition-all"
              >
                Submit Your Story
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-zinc-900 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="text-xl font-bold inline-block mb-4">IMAGINATION G</Link>
            <p className="text-gray-400 mb-6">A Studio for Aligned Futures</p>
            <div className="flex justify-center gap-6 mb-8">
              <Link href="/" className="text-gray-500 hover:text-white transition-colors">Home</Link>
              <Link href="/weapons" className="text-gray-500 hover:text-white transition-colors">Weapons</Link>
              <Link href="/diagnostic" className="text-gray-500 hover:text-white transition-colors">Diagnostic</Link>
              <Link href="/cheatsheet" className="text-gray-500 hover:text-white transition-colors">Playbook</Link>
            </div>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} IMAGINATION G. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MomentumHub;