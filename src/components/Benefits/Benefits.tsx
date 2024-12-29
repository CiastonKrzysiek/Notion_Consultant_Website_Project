import React from 'react';
import { BenefitCard } from './BenefitCard';
import { benefits } from './benefitsData';

export function Benefits() {
  return (
    <div id="benefits" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience the transformative power of professional Notion consulting
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}