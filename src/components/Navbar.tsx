import { ShoppingBag, Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold ml-4 md:ml-0">THREADEX</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-black">Men</a>
            <a href="#" className="text-gray-700 hover:text-black">Women</a>
            <a href="#" className="text-gray-700 hover:text-black">New Arrivals</a>
            <a href="#" className="text-gray-700 hover:text-black">Sale</a>
          </div>

          <div className="flex items-center space-x-4">
            <button>
              <Search className="h-6 w-6" />
            </button>
            <button className="relative">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}