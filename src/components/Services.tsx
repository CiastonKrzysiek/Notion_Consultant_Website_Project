import React from 'react';
import { Layout, Users, Lightbulb, FileSpreadsheet } from 'lucide-react';

const services = [
  {
    title: 'Workspace Setup',
    description: 'Custom-designed Notion workspace tailored to your specific needs and workflow.',
    icon: Layout,
  },
  {
    title: 'Team Training',
    description: 'Comprehensive training sessions to help your team master Notion effectively.',
    icon: Users,
  },
  {
    title: 'Strategy Consulting',
    description: 'Expert advice on optimizing your processes and maximizing productivity.',
    icon: Lightbulb,
  },
  {
    title: 'Template Creation',
    description: 'Custom templates designed to streamline your recurring workflows.',
    icon: FileSpreadsheet,
  },
];

export function Services() {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive Notion solutions to transform your workflow
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}