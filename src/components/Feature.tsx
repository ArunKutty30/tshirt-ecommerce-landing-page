import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export default function Feature({ Icon, title, description }: FeatureProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <div className="rounded-full bg-indigo-100 p-3 text-indigo-600">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
}