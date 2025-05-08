
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import Globe from '@/components/Globe';
import { CustomButton } from '@/components/ui/custom-button';
import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';
import UserPortalPreview from '@/components/UserPortalPreview';
import { 
  CalendarCheck, 
  MessageSquare, 
  Home, 
  Smartphone, 
  FileText, 
  Star, 
  UserCheck,
  Bell,
  BarChart,
  Clock,
  Wallet,
  Lock,
  Users,
  Building,
  User
} from 'lucide-react';

const Index = () => {
  // Hero section animation
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-4"
      >
        {/* 3D Globe Background */}
        <Globe />
        
        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary mb-4">
              Property Management Reimagined
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Most Intelligent Way to Manage Your Property — 
              <span className="text-gradient"> Anywhere in the World.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Automate rent collection, maintenance, and communication. Powered by mobile money, SMS, and real-time data.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <CustomButton size="lg">
              Start Free Trial
            </CustomButton>
            <CustomButton variant="outline" size="lg">
              Book a Demo
            </CustomButton>
          </motion.div>
        </div>
        
        {/* Scrolling indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center pt-2"
            >
              <motion.div
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1 h-2 bg-primary rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* How It Works Section */}
      <ScrollAnimatedSection
        id="how-it-works"
        className="py-20 container px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
        <div className="relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Property Management for <span className="text-gradient">Every Role</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our platform connects landlords, caretakers, and tenants in one seamless system, automating workflows and improving communication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building size={24} />,
                title: "Landlord",
                description: "Manage everything from a smart dashboard. Track rent payments, approve maintenance requests, and monitor property performance.",
              },
              {
                icon: <Users size={24} />,
                title: "Caretaker",
                description: "Handle daily operations with an efficient task management system, without access to sensitive financial information.",
              },
              {
                icon: <User size={24} />,
                title: "Tenant",
                description: "Access a self-service portal for rent payments, maintenance requests, and direct communication with property managers.",
              }
            ].map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </ScrollAnimatedSection>
      
      {/* Pricing Section */}
      <ScrollAnimatedSection
        id="pricing"
        className="py-20 container px-4"
      >
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the plan that best fits your property portfolio size and needs. All plans include our core features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Starter"
            price="$29"
            description="Perfect for small landlords"
            features={[
              "Up to 5 property units",
              "Mobile money integration",
              "SMS notifications",
              "Maintenance requests",
              "Basic reporting"
            ]}
            delay={0.1}
          />
          <PricingCard
            title="Pro"
            price="$99"
            description="For growing property portfolios"
            features={[
              "Up to 100 property units",
              "White-label domain",
              "Advanced analytics",
              "Document automation",
              "API access",
              "Priority support"
            ]}
            highlighted={true}
            delay={0.2}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            description="For large property management companies"
            features={[
              "Unlimited property units",
              "Full API integrations",
              "Custom workflows",
              "Dedicated account manager",
              "SLA guarantees",
              "Compliance monitoring"
            ]}
            delay={0.3}
          />
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">Available Add-ons</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["SMS Bundles", "Lease Document Automation", "Background Check API", "Maintenance Outsourcing"].map((addon, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="glass-card py-2 px-4 text-sm"
              >
                {addon}
              </motion.span>
            ))}
          </div>
        </div>
      </ScrollAnimatedSection>
      
      {/* Features Section */}
      <ScrollAnimatedSection
        id="features"
        className="py-20 container px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-secondary/5 rounded-3xl blur-3xl" />
        <div className="relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary mb-4">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features that <span className="text-gradient">Make a Difference</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our intelligent platform is packed with tools to simplify property management and improve outcomes for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Smartphone size={24} />,
                title: "Mobile Money Integration",
                description: "Seamless integration with M-Pesa, Airtel Money and other mobile payment platforms across Africa.",
              },
              {
                icon: <Bell size={24} />,
                title: "SMS Reminders",
                description: "Automated SMS notifications for rent payments, confirmations, and important updates.",
              },
              {
                icon: <MessageSquare size={24} />,
                title: "Maintenance Automation",
                description: "Streamlined process for submitting, approving, and tracking maintenance requests.",
              },
              {
                icon: <BarChart size={24} />,
                title: "Portfolio Tracker",
                description: "Real-time insights into your property portfolio's performance and value.",
              },
              {
                icon: <Star size={24} />,
                title: "Property Health Score",
                description: "AI-powered assessment of property condition and maintenance needs.",
              },
              {
                icon: <FileText size={24} />,
                title: "Lease Generator",
                description: "Create legally-compliant lease agreements with electronic signatures.",
              },
              {
                icon: <UserCheck size={24} />,
                title: "Tenant Happiness",
                description: "Track tenant satisfaction and identify issues before they escalate.",
              },
              {
                icon: <Clock size={24} />,
                title: "Compliance Reminders",
                description: "Stay on top of local regulations and compliance requirements.",
              },
              {
                icon: <Lock size={24} />,
                title: "Secure Role Access",
                description: "Role-based permissions ensure sensitive data remains protected.",
              },
            ].map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </ScrollAnimatedSection>
      
      {/* Testimonials Section */}
      <ScrollAnimatedSection
        id="testimonials"
        className="py-20 container px-4"
      >
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from property owners and managers across Africa who have transformed their operations with PropertyPulse.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard
            quote="Since using PropertyPulse, I haven't had to chase rent once! The automated reminders and mobile money integration have completely changed how I manage my properties."
            name="James Mwangi"
            role="Property Owner"
            company="Nairobi Heights"
            country="Kenya"
            delay={0.1}
          />
          <TestimonialCard
            quote="The caretaker dashboard makes my job so much easier. I can track maintenance tasks and keep owners updated without endless phone calls and messages."
            name="Amaka Okafor"
            role="Property Manager"
            company="Lagos Residences"
            country="Nigeria"
            delay={0.2}
          />
          <TestimonialCard
            quote="As a tenant, I love having all my rent history, receipts, and the ability to report issues all in one simple app. The automatic receipt generation is fantastic!"
            name="David Kwame"
            role="Tenant"
            company="Accra Apartments"
            country="Ghana"
            delay={0.3}
          />
        </div>
      </ScrollAnimatedSection>
      
      {/* Live Demo Preview Section */}
      <ScrollAnimatedSection
        id="demo"
        className="py-20 container px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
        <div className="relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary mb-4">
              Live Preview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience Our <span className="text-gradient">User Portals</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See how our platform works for different users with our interactive preview.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <UserPortalPreview
              tabs={[
                {
                  label: "Landlord Portal",
                  icon: <Building size={18} />,
                  content: (
                    <div className="rounded-lg p-4">
                      <div className="flex justify-between mb-4">
                        <div>
                          <h4 className="font-medium">Dashboard Overview</h4>
                          <p className="text-sm text-gray-400">Properties performance at a glance</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 bg-primary/20 rounded-md">
                            <Bell size={16} />
                          </button>
                          <button className="p-2 bg-primary/20 rounded-md">
                            <User size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        {["Total Units", "Occupancy Rate", "Monthly Revenue", "Pending Tasks"].map((stat, i) => (
                          <div key={i} className="bg-muted/30 p-3 rounded-md">
                            <p className="text-xs text-gray-400">{stat}</p>
                            <p className="text-lg font-semibold">
                              {i === 0 ? "24" : i === 1 ? "92%" : i === 2 ? "$12,450" : "5"}
                            </p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-col space-y-3">
                        <div className="bg-muted/30 p-3 rounded-md flex justify-between items-center">
                          <div>
                            <p className="font-medium">Recent Payments</p>
                            <p className="text-xs text-gray-400">3 new payments received</p>
                          </div>
                          <button className="text-xs text-primary">View All</button>
                        </div>
                        
                        <div className="bg-muted/30 p-3 rounded-md flex justify-between items-center">
                          <div>
                            <p className="font-medium">Maintenance Requests</p>
                            <p className="text-xs text-gray-400">2 requests need your approval</p>
                          </div>
                          <button className="text-xs text-primary">View All</button>
                        </div>
                        
                        <div className="bg-muted/30 p-3 rounded-md flex justify-between items-center">
                          <div>
                            <p className="font-medium">Occupancy Calendar</p>
                            <p className="text-xs text-gray-400">1 lease expiring this month</p>
                          </div>
                          <button className="text-xs text-primary">View All</button>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  label: "Caretaker Portal",
                  icon: <Users size={18} />,
                  content: (
                    <div className="rounded-lg p-4">
                      <div className="flex justify-between mb-4">
                        <div>
                          <h4 className="font-medium">Tasks Overview</h4>
                          <p className="text-sm text-gray-400">Manage property maintenance efficiently</p>
                        </div>
                        <div>
                          <button className="px-3 py-1 bg-primary/20 rounded-md text-xs">
                            New Task
                          </button>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        {[
                          { title: "Fix leaking tap in Unit 4B", priority: "High", status: "In Progress" },
                          { title: "Replace corridor light bulbs", priority: "Medium", status: "Pending" },
                          { title: "Schedule AC maintenance", priority: "Low", status: "Completed" }
                        ].map((task, i) => (
                          <div key={i} className="bg-muted/30 p-3 rounded-md flex justify-between items-center">
                            <div>
                              <p className="font-medium">{task.title}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <span className={`inline-block h-2 w-2 rounded-full ${
                                  task.priority === "High" ? "bg-red-500" : 
                                  task.priority === "Medium" ? "bg-yellow-500" : "bg-green-500"
                                }`}></span>
                                <p className="text-xs text-gray-400">{task.priority} Priority</p>
                                <span className="text-xs text-gray-600">•</span>
                                <p className="text-xs text-gray-400">{task.status}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button className="p-1.5 bg-primary/20 rounded-md">
                                <MessageSquare size={14} />
                              </button>
                              <button className="p-1.5 bg-primary/20 rounded-md">
                                <Check size={14} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-muted/30 p-3 rounded-md">
                          <p className="font-medium">Property Inspections</p>
                          <p className="text-xs text-gray-400">2 scheduled this week</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-md">
                          <p className="font-medium">Vendor Contacts</p>
                          <p className="text-xs text-gray-400">Access trusted service providers</p>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  label: "Tenant Portal",
                  icon: <User size={18} />,
                  content: (
                    <div className="rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-medium">Welcome, John!</h4>
                          <p className="text-sm text-gray-400">Unit 3A, Sunrise Apartments</p>
                        </div>
                        <div className="bg-primary/20 px-3 py-1 rounded-md">
                          <p className="text-xs">Lease: 8 months remaining</p>
                        </div>
                      </div>
                      
                      <div className="bg-primary/10 p-4 rounded-md mb-4">
                        <div className="flex justify-between mb-2">
                          <p className="text-sm font-medium">Next Rent Payment</p>
                          <p className="text-sm font-medium">$850</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-xs text-gray-400">Due in 8 days (May 1st)</p>
                          <button className="text-xs text-primary">Pay Now</button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-muted/30 p-3 rounded-md">
                          <p className="font-medium">Payment History</p>
                          <p className="text-xs text-gray-400">View past transactions</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-md">
                          <p className="font-medium">Report Issue</p>
                          <p className="text-xs text-gray-400">Submit maintenance request</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-md">
                          <p className="font-medium">Documents</p>
                          <p className="text-xs text-gray-400">Access lease & receipts</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-md">
                          <p className="font-medium">Message</p>
                          <p className="text-xs text-gray-400">Contact management</p>
                        </div>
                      </div>
                      
                      <div className="bg-muted/30 p-3 rounded-md">
                        <p className="font-medium mb-2">Recent Notifications</p>
                        <div className="space-y-2">
                          <div className="text-xs">
                            <p>Your maintenance request has been approved</p>
                            <p className="text-gray-400">Yesterday</p>
                          </div>
                          <div className="text-xs">
                            <p>Water bill payment confirmed</p>
                            <p className="text-gray-400">3 days ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              ]}
            />
          </div>
        </div>
      </ScrollAnimatedSection>
      
      {/* Smart Automation Section */}
      <ScrollAnimatedSection
        id="automation"
        className="py-20 container px-4"
      >
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary mb-4">
            Smart Technology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Intelligent <span className="text-gradient">Automation & Security</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform uses smart automation to eliminate manual tasks and ensure secure data handling.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Rent Automation Flow</h3>
            <ul className="space-y-4">
              {[
                "Automated SMS reminders sent on the 1st, 4th, and 5th",
                "Automatic late fee calculation if unpaid by the 5th",
                "Instant SMS confirmation upon payment receipt",
                "PDF receipts automatically generated and stored",
                "Payment history tracked for tenant reliability score"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                    </div>
                  </div>
                  <p className="text-gray-300">{item}</p>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
            <ul className="space-y-4">
              {[
                "End-to-end encryption for all sensitive data",
                "Role-based access controls for financial information",
                "Comprehensive audit trails for all system activities",
                "Automated compliance with local rental regulations",
                "Regular security updates and vulnerability testing"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start"
                >
                  <Lock className="h-5 w-5 text-primary shrink-0 mr-3" />
                  <p className="text-gray-300">{item}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollAnimatedSection>
      
      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-3xl opacity-50" />
        <div className="container relative z-10">
          <div className="glass-card p-12 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Ready to Transform Your Property Management?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-300 mb-8 max-w-xl mx-auto"
            >
              Join thousands of property owners across Africa who are saving time, reducing stress, and increasing revenue with PropertyPulse.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <CustomButton size="lg">
                Start Free Trial
              </CustomButton>
              <CustomButton variant="outline" size="lg">
                Book a Demo
              </CustomButton>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-16 px-4 border-t border-white/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-xl font-bold text-gradient mb-4">PropertyPulse</h3>
              <p className="text-gray-400 text-sm">
                The intelligent property management platform for landlords, caretakers, and tenants across Africa.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {["About", "Careers", "Blog", "Legal"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {["Support", "Documentation", "Privacy", "Terms"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Languages</h4>
              <div className="flex space-x-2 mb-4">
                {["EN", "SW", "FR"].map((lang, i) => (
                  <button key={i} className="px-2 py-1 text-xs border border-white/20 rounded-md hover:bg-white/5 transition-colors">
                    {lang}
                  </button>
                ))}
              </div>
              
              <h4 className="font-semibold mb-2">Connect</h4>
              <div className="flex space-x-3">
                {["twitter", "linkedin", "facebook"].map((social, i) => (
                  <a key={i} href="#" className="p-2 border border-white/20 rounded-full hover:bg-white/5 transition-colors">
                    <span className="sr-only">{social}</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} PropertyPulse. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-2 md:mt-0">
              Powered by PropertyPulse Technologies
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
