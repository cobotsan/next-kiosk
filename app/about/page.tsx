'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Users, Target, Heart, Zap } from 'lucide-react';
import Link from 'next/link';

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    bio: "15+ years in interactive technology, former VP at tech giants"
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    bio: "Hardware engineering expert with 20+ patents in kiosk technology"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    bio: "Award-winning UX designer specializing in accessibility and user experience"
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    bio: "Software architecture specialist with expertise in enterprise integrations"
  }
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We continuously push the boundaries of what's possible with kiosk technology"
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description: "Every decision we make is guided by our commitment to customer success"
  },
  {
    icon: Heart,
    title: "Quality Craftsmanship",
    description: "We take pride in delivering solutions that exceed expectations in every detail"
  },
  {
    icon: Zap,
    title: "Agile Excellence",
    description: "Fast, flexible, and responsive - we adapt quickly to changing needs"
  }
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Countries Served" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Available" }
];

const testimonials = [
  {
    name: "Jennifer Walsh",
    role: "Operations Director",
    company: "Metro Health System",
    content: "Next Kiosk transformed our patient check-in process. Wait times dropped 40% and patient satisfaction scores increased dramatically.",
    rating: 5
  },
  {
    name: "Robert Martinez",
    role: "IT Manager",
    company: "Global Retail Chain",
    content: "The custom integration with our POS system was seamless. Their team's expertise and support throughout the project was exceptional.",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    role: "Facilities Manager",
    company: "International Airport",
    content: "Our multilingual wayfinding kiosks have reduced staff inquiries by 50%. The ROI was clear within the first quarter.",
    rating: 5
  }
];

const certifications = [
  "ISO 9001:2015",
  "FCC Certified",
  "CE Compliant",
  "ADA Compliant",
  "HIPAA Ready",
  "PCI DSS Level 1"
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop)'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              About Next Kiosk
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 mb-8 leading-relaxed"
            >
              Founded in 2015, Next Kiosk has been at the forefront of interactive technology innovation, 
              transforming how businesses connect with their customers through cutting-edge kiosk solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-[rgb(76,169,88)] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To democratize access to advanced interactive technology by creating innovative, 
                reliable, and user-friendly kiosk solutions that empower businesses to serve 
                their customers better, faster, and more efficiently.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that technology should be intuitive, accessible, and transformative. 
                Every kiosk we create is designed with the end-user in mind, ensuring exceptional 
                experiences that drive real business results.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-[rgb(76,169,88)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-[rgb(76,169,88)]" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of expertise in technology, 
              design, and business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[rgb(76,169,88)] font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                State-of-the-Art Manufacturing
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our 50,000 sq ft manufacturing facility houses the latest in precision 
                manufacturing equipment and quality control systems. Every kiosk is 
                rigorously tested before leaving our facility.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" className="justify-center py-2">
                    {cert}
                  </Badge>
                ))}
              </div>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-[rgb(76,169,88)] hover:bg-[rgb(66,149,78)] text-white"
                >
                  Schedule Facility Tour
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Manufacturing facility"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[rgb(76,169,88)] rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Award className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">ISO Certified</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses that have transformed 
              their operations with our kiosk solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-[rgb(76,169,88)] font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[rgb(76,169,88)] to-[rgb(66,149,78)]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who have transformed their businesses with our innovative kiosk solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-[rgb(76,169,88)] hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link href="/products">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[rgb(76,169,88)] px-8 py-6 text-lg font-semibold"
                >
                  View Our Solutions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}