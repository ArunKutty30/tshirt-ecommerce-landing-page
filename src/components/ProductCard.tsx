interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

export default function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <div className="group">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-sm text-gray-700">{name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
      </div>
    </div>
  );
}