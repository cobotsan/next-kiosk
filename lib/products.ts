import productsData from '@/data/products.json';

export interface Product {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  icon: string;
  features: string[];
  specifications: Record<string, string>;
  benefits: string[];
}

export function getAllProducts(): Product[] {
  return productsData as Product[];
}

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((product) => product.slug === slug) as Product | undefined;
}

export function getAllProductSlugs(): string[] {
  return productsData.map((product) => product.slug);
}

export function getProductCategories(): string[] {
  const categories = productsData.map((product) => product.category);
  return ['All', ...Array.from(new Set(categories))];
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') {
    return productsData as Product[];
  }
  return productsData.filter((product) => product.category === category) as Product[];
}