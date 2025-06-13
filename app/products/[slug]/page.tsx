
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Star, Shield, Zap, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import ImageSlider from '@/components/ui/ImageSlider';
import ThreeDViewer from '@/components/ui/ThreeDViewer';
import { getProductBySlug, getAllProductSlugs } from '@/lib/products';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}


export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button className="bg-[rgb(76,169,88)] hover:bg-[rgb(66,149,78)]">
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link 
            href="/products" 
            className="inline-flex items-center text-[rgb(76,169,88)] hover:text-[rgb(66,149,78)] font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Slider */}
            <div className="space-y-6">
              <ImageSlider images={product.images} />
              
              {/* 3D Viewer */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Interactive 3D Model</h3>
                  <ThreeDViewer />
                </CardContent>
              </Card>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {product.category}
                </Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="text-3xl font-bold text-[rgb(76,169,88)] mb-6">
                  Starting at {product.price}
                </div>
              </div>

              {/* Key Features */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-[rgb(76,169,88)] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-[rgb(76,169,88)] hover:bg-[rgb(66,149,78)] text-white py-6 text-lg font-semibold"
                >
                  Request Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="flex-1 border-[rgb(76,169,88)] text-[rgb(76,169,88)] hover:bg-[rgb(76,169,88)] hover:text-white py-6 text-lg font-semibold"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="border-b border-gray-200 pb-3">
                        <dt className="font-semibold text-gray-900 mb-1">{key}</dt>
                        <dd className="text-gray-600">{value}</dd>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="benefits" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Business Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-[rgb(76,169,88)]/10 rounded-full flex items-center justify-center mr-4 mt-1">
                          <CheckCircle className="h-5 w-5 text-[rgb(76,169,88)]" />
                        </div>
                        <div>
                          <p className="text-gray-700 font-medium">{benefit}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="support" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Support & Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        icon: Shield,
                        title: "3-Year Warranty",
                        description: "Comprehensive warranty covering all hardware and software components"
                      },
                      {
                        icon: Zap,
                        title: "24/7 Support",
                        description: "Round-the-clock technical support and remote monitoring"
                      },
                      {
                        icon: Users,
                        title: "Training Included",
                        description: "Comprehensive training for your staff on operation and maintenance"
                      }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-[rgb(76,169,88)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <item.icon className="h-8 w-8 text-[rgb(76,169,88)]" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}