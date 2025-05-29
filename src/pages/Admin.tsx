import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash } from 'lucide-react';
import { productsData } from '../data/products';

const Admin = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    category: ''
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    // Check if user is authenticated and is admin
    if (!isAuthenticated || !isAdmin) {
      navigate('/login');
      return;
    }

    // In a real app, fetch products from API
    setProducts(productsData);
  }, [isAuthenticated, isAdmin, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newProduct = {
      id: editingId || Date.now(),
      name: formData.name,
      price: parseFloat(formData.price),
      description: formData.description,
      image: formData.image || 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
      category: formData.category
    };

    if (editingId) {
      // Update existing product
      setProducts(products.map(product => 
        product.id === editingId ? newProduct : product
      ));
      setEditingId(null);
    } else {
      // Add new product
      setProducts([...products, newProduct]);
    }

    // Reset form
    setFormData({
      name: '',
      price: '',
      description: '',
      image: '',
      category: ''
    });
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      price: product.price.toString(),
      description: product.description,
      image: product.image,
      category: product.category || ''
    });
    setEditingId(product.id);

    // Scroll to form
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleDelete = (id) => {
    // In a real app, you would call an API
    setProducts(products.filter(product => product.id !== id));
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      price: '',
      description: '',
      image: '',
      category: ''
    });
    setEditingId(null);
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-amber-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif font-bold text-amber-800 mb-8">Admin Dashboard</h1>
        
        {/* Product Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? 'Edit Product' : 'Add New Product'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Product Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter product name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="price">Price (₹)</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter price"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter product description"
                required
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="image">Image URL</label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter image URL"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select a category</option>
                  <option value="sweets">Sweets</option>
                  <option value="snacks">Snacks</option>
                  <option value="spices">Spices</option>
                  <option value="pickles">Pickles</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4">
              {editingId && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              )}
              
              <button
                type="submit"
                className="flex items-center px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
              >
                {editingId ? (
                  <>
                    <Edit size={18} className="mr-2" />
                    Update Product
                  </>
                ) : (
                  <>
                    <Plus size={18} className="mr-2" />
                    Add Product
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
        
        {/* Products List */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Products ({products.length})</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-amber-600 font-medium mb-2">₹{product.price.toFixed(2)}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex justify-between">
                    <button
                      onClick={() => handleEdit(product)}
                      className="flex items-center px-3 py-1.5 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
                    >
                      <Edit size={16} className="mr-1" />
                      Edit
                    </button>
                    
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="flex items-center px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                      <Trash size={16} className="mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;