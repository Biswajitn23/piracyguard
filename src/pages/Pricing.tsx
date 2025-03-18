
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '$29',
      period: 'per month',
      description: 'Perfect for small content creators',
      features: [
        'Basic content scanning',
        'Up to 100 uploads per month',
        'Email alerts for violations',
        'Basic reporting'
      ],
      buttonText: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: 'per month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced content scanning',
        'Unlimited uploads',
        'Real-time alerts',
        'API access',
        'Priority support',
        'Advanced analytics'
      ],
      buttonText: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'per month',
      description: 'For large organizations with complex needs',
      features: [
        'Custom content protection strategy',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced API access',
        '24/7 priority support',
        'Enterprise SLA'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <Heading level={1} className="mb-4 text-foreground">
            Pricing Plans
          </Heading>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Choose the perfect plan to protect your digital content from piracy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-piracy-500 shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-3 py-1 bg-piracy-600 text-white rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-foreground/70">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-foreground/70 ml-2">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-piracy-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.popular ? 'bg-piracy-600 hover:bg-piracy-700' : ''}`}>
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Heading level={2} className="mb-6 text-foreground">
            Frequently Asked Questions
          </Heading>
          <div className="max-w-3xl mx-auto text-left grid gap-6">
            <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
              <h3 className="text-lg font-medium mb-2 text-foreground">Can I change my plan later?</h3>
              <p className="text-foreground/80">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
              <h3 className="text-lg font-medium mb-2 text-foreground">What payment methods do you accept?</h3>
              <p className="text-foreground/80">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
              <h3 className="text-lg font-medium mb-2 text-foreground">Is there a free trial?</h3>
              <p className="text-foreground/80">Yes, all plans come with a 14-day free trial. No credit card required to start.</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PricingPage;
