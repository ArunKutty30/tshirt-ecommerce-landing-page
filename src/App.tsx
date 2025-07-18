import { Truck, RefreshCw, Shield } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Feature from './components/Feature';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gray-900/40 mix-blend-multiply" />
        </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Premium Quality<br />Essential T-Shirts
          </h1>
          <p className="mt-6 max-w-lg text-xl text-gray-100">
            Discover our collection of comfortable, sustainable, and stylish t-shirts made for everyday wear.
          </p>
          <div className="mt-10">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Shop Collection
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard
            image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80"
            name="Classic White Tee"
            price="$29.99"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80"
            name="Black Essential"
            price="$29.99"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80"
            name="Heather Gray Basic"
            price="$24.99"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80"
            name="Navy Classic"
            price="$24.99"
          />
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature
              Icon={Truck}
              title="Free Shipping"
              description="Free shipping on all orders over $50"
            />
            <Feature
              Icon={RefreshCw}
              title="Easy Returns"
              description="30-day return policy for all items"
            />
            <Feature
              Icon={Shield}
              title="Secure Checkout"
              description="100% secure payment processing"
            />
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Subscribe to our newsletter
            </h2>
            <p className="text-indigo-100 mb-8">
              Get 10% off your first order and stay updated with our latest collections
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="bg-white text-indigo-700 px-6 py-2 rounded-full font-medium hover:bg-indigo-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;