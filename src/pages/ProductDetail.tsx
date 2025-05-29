import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Star, Minus, Plus, Share2, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { productsData } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Simulate API fetch
    setIsLoading(true);
    setTimeout(() => {
      const foundProduct = productsData.find(p => p.id.toString() === id);
      setProduct(foundProduct);
      
      // Get related products (same category)
      if (foundProduct) {
        const related = productsData
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
      
      setIsLoading(false);
    }, 600);
  }, [id]);

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
    }
  };

  if (isLoading) {
    return (
      <div className="pt-24 pb-12 flex justify-center items-center min-h-screen bg-amber-50">
        <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-24 pb-12 flex flex-col items-center justify-center min-h-screen bg-amber-50">
        <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/shop" className="btn-primary flex items-center">
          <ArrowLeft size={18} className="mr-2" />
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 bg-amber-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-amber-600 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-amber-600">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image */}
            <div className="relative">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-gray-600 hover:text-red-500 transition-colors">
                <Heart size={20} />
              </button>
            </div>

            {/* Product Info */}
            <div className="p-6 md:p-8 flex flex-col">
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star 
                      key={star}
                      size={18} 
                      className={star <= 4 ? "text-yellow-500 fill-current" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600 text-sm">(24 reviews)</span>
              </div>
              
              <p className="text-2xl text-amber-600 font-semibold mb-4">₹{product.price.toFixed(2)}</p>
              
              <div className="border-t border-b border-gray-200 py-4 mb-6">
                <p className="text-gray-700 mb-4">{product.description}</p>
                
                <div className="flex items-center">
                  <span className="text-gray-600 font-medium mr-2">Category:</span>
                  <span className="capitalize">{product.category}</span>
                </div>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center mb-6">
                <span className="text-gray-600 font-medium mr-4">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-1 border-l border-r border-gray-300">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-wrap gap-4 mt-auto">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-md transition-colors"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart
                </button>
                
                <button className="p-3 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-6">Related Products</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Link to={`/shop/${product.id}`}>
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <Link to={`/shop/${product.id}`}>
                      <h3 className="font-medium text-gray-800 hover:text-amber-600 transition-colors mb-1">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-amber-600 font-medium">₹{product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;