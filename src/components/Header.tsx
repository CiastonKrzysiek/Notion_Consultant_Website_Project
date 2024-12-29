import React from 'react';
import { NotebookPen } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <NotebookPen className="h-6 w-6 text-indigo-600" />
            <span className="font-bold text-xl">NotionPro</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-indigo-600">Services</a>
            <a href="#benefits" className="text-gray-700 hover:text-indigo-600">Benefits</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </nav>
          <a
            href="#contact"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}