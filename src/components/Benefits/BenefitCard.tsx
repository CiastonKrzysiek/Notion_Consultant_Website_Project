import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function BenefitCard({ title, description, icon: Icon }: BenefitCardProps) {
  return (
    <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-500">{description}</p>
      </div>
    </div>
  );
}