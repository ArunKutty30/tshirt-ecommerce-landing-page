import { Star, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  rating: number;
}

export default function ProductCard({ name, price, image, rating }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative group">
        <img 
          src={image} 
          alt={name}
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
          <button className="opacity-0 group-hover:opacity-100 bg-white text-black px-6 py-2 rounded-full flex items-center transform translate-y-4 group-hover:translate-y-0 transition-all">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">{rating}</span>
        </div>
        <p className="text-lg font-bold">${price}</p>
      </div>
    </div>
  );
}