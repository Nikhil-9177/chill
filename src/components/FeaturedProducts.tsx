import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../data/products';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // In a real app, you might fetch from an API
    // For now, we'll use our mock data and filter for featured products
    const featured = productsData.slice(0, 4);
    setProducts(featured);
  }, []);

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Products</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Discover our most popular traditional Indian snacks, handcrafted with authentic recipes and premium ingredients.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;