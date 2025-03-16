
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Dashboard from '../components/Dashboard';
import EnterpriseSolutions from '../components/EnterpriseSolutions';

const Index: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <HowItWorks />
      <EnterpriseSolutions />
      <Dashboard />
    </MainLayout>
  );
};

export default Index;
