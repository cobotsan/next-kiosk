'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, ArrowRight, Lightbulb, Cog, Rocket, Award } from 'lucide-react';

const processSteps = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description: "We analyze your requirements, understand your business goals, and identify the perfect kiosk solution for your needs.",
    icon: Lightbulb
  },
  {
    step: "02",
    title: "Custom Design & Development",
    description: "Our expert team creates a tailored design, develops custom software, and integrates all necessary hardware components.",
    icon: Cog
  },
  {
    step: "03",
    title: "Testing & Deployment",
    description: "Rigorous testing ensures perfect functionality before we deploy and provide comprehensive training for your team.",
    icon: Rocket
  },
  {
    step: "04",
    title: "Ongoing Support & Maintenance",
    description: "Continuous support, regular updates, and proactive maintenance keep your kiosk running at peak performance.",
    icon: Award
  }
];

const customOptions = [
  {
    title: "Hardware Customization",
    features: [
      "Custom enclosure design and branding",
      "Specialized input devices (biometric, RFID)",
      "Environmental hardening options",
      "Integrated peripherals (printers, scanners)",
      "ADA compliance modifications"
    ]
  },
  {
    title: "Software Development",
    features: [
      "Custom user interface design",
      "Integration with existing systems",
      "Multi-language support",
      "Advanced analytics and reporting",
      "Cloud-based management platform"
    ]
  },
  {
    title: "Industry-Specific Solutions",
    features: [
      "Healthcare patient check-in systems",
      "Retail self-service solutions",
      "Transportation ticketing kiosks",
      "Food service ordering systems",
      "Government service portals"
    ]
  }
];

const caseStudies = [
  {
    title: "Healthcare Network Transformation",
    description: "Deployed 50+ custom check-in kiosks across hospital network, reducing wait times by 40%",
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    results: ["40% reduction in wait times", "90% patient satisfaction", "60% less front desk workload"]
  },
  {
    title: "Retail Chain Self-Service",
    description: "Custom kiosks for product information and inventory checking in 100+ locations",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    results: ["25% increase in sales", "35% faster service", "Enhanced customer experience"]
  },
  {
    title: "Airport Wayfinding System",
    description: "Interactive wayfinding kiosks with real-time flight information and multilingual support",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    results: ["50% fewer staff inquiries", "99.9% uptime", "15 languages supported"]
  }
];

export default function CustomPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(76,169,88,0.8), rgba(76,169,88,0.8)), url(https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop)'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Custom Kiosk Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
          >
            Every business is unique. Let us create a tailored kiosk solution that perfectly fits your 
            specific requirements, industry needs, and brand identity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-[rgb(76,169,88)] hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            >
              Start Your Custom Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Custom Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we guide you through every step of creating your perfect kiosk solution
            </p>
          </motion.div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-[rgb(76,169,88)] text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                      {step.step}
                    </div>
                    <step.icon className="h-8 w-8 text-[rgb(76,169,88)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="w-full h-64 bg-gradient-to-br from-[rgb(76,169,88)]/10 to-[rgb(76,169,88)]/5 rounded-lg flex items-center justify-center">
                    <step.icon className="h-24 w-24 text-[rgb(76,169,88)]/40" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Customization Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive customization across all aspects of your kiosk solution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      {option.title}
                    </h3>
                    <ul className="space-y-3">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[rgb(76,169,88)] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our custom kiosk solutions have transformed businesses across various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[rgb(76,169,88)]/0 group-hover:bg-[rgb(76,169,88)]/10 transition-all duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {study.description}
                    </p>
                    <div className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-[rgb(76,169,88)] mr-2" />
                          <span className="text-sm text-gray-600">{result}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Request Custom Quote
              </h2>
              <p className="text-xl text-gray-600">
                Tell us about your project requirements and we'll provide you with a detailed proposal
              </p>
            </motion.div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your company name" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="hospitality">Hospitality</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="government">Government</SelectItem>
                          <SelectItem value="transportation">Transportation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Estimated Budget</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="over-100k">Over $100,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="requirements">Project Requirements *</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Please describe your kiosk requirements, intended use, number of units, timeline, and any specific features you need..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[rgb(76,169,88)] hover:bg-[rgb(66,149,78)] text-white py-6 text-lg font-semibold"
                    >
                      Submit Quote Request
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}