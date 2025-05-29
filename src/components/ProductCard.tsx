import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <Link to={`/shop/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
        <button 
          className="absolute top-2 right-2 p-2 bg-white rounded-full text-gray-600 hover:text-red-500 transition-colors"
          aria-label="Add to favorites"
        >
          <Heart size={18} />
        </button>
      </div>
      <div className="p-4">
        <Link to={`/shop/${product.id}`}>
          <h3 className="font-serif text-lg font-semibold mb-1 text-gray-800 hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-amber-600 font-medium mb-2">₹{product.price.toFixed(2)}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-md flex items-center justify-center transition-colors"
        >
          <ShoppingCart size={18} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;