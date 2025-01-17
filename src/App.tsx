import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits/Benefits';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Contact />
      </main>
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} NotionPro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;