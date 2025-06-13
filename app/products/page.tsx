'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Monitor, ShoppingCart, MapPin, Users, Utensils, CreditCard } from 'lucide-react';
import Link from 'next/link';
import { getAllProducts, getProductCategories } from '@/lib/products';
import { useState } from 'react';

const iconMap = {
  Monitor,
  ShoppingCart,
  MapPin,
  Users,
  Utensils,
  CreditCard,
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const products = getAllProducts();
  const categories = getProductCategories();

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop)'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our Kiosk Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Discover our comprehensive range of interactive kiosks designed to enhance customer experiences 
            and streamline business operations across various industries.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className={category === selectedCategory 
                  ? "bg-[rgb(76,169,88)] hover:bg-[rgb(66,149,78)]" 
                  : "hover:bg-[rgb(76,169,88)] hover:text-white hover:border-[rgb(76,169,88)]"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => {
              const IconComponent = iconMap[product.icon as keyof typeof iconMap] || Monitor;
              
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[rgb(76,169,88)]/0 group-hover:bg-[rgb(76,169,88)]/20 transition-all duration-500" />
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-[rgb(76,169,88)]" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-[rgb(76,169,88)] text-white px-3 py-1 rounded-full text-sm font-medium">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {product.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-[rgb(76,169,88)] rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-3">
                        <Link href={`/products/${product.slug}`} className="flex-1">
                          <Button className="w-full bg-[rgb(76,169,88)] hover:bg-[rgb(66,149,78)] text-white">
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" className="px-4">
                          Quote
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Need Something Custom?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Every business is unique. Let us create a custom kiosk solution tailored specifically to your needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/custom">
                <Button 
                  size="lg" 
                  className="bg-[rgb(76,169,88)] hover:bg-[rgb(66,149,78)] text-white px-8 py-6 text-lg font-semibold"
                >
                  Custom Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-[rgb(76,169,88)] text-[rgb(76,169,88)] hover:bg-[rgb(76,169,88)] hover:text-white px-8 py-6 text-lg font-semibold"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}