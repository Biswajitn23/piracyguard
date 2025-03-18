
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Heading level={1} className="mb-6 text-foreground">
            Privacy Policy
          </Heading>
          <p className="text-foreground/80 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <Separator className="my-6" />
          
          <div className="space-y-8 text-foreground">
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                1. Introduction
              </Heading>
              <p className="text-foreground/80">
                PiracyGuard ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by PiracyGuard. This Privacy Policy applies to our website, piracyguard.com, and its associated subdomains (collectively, our "Service").
              </p>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                2. Information We Collect
              </Heading>
              <p className="text-foreground/80 mb-4">
                When you visit our website, we may collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
              </p>
              <p className="text-foreground/80">
                Additionally, as you browse the site, we collect information about the individual web pages that you view, what websites or search terms referred you to our site, and information about how you interact with the site. We refer to this automatically-collected information as "Device Information."
              </p>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                3. How We Use Your Information
              </Heading>
              <p className="text-foreground/80 mb-4">
                We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our site (for example, by generating analytics about how our customers browse and interact with the site, and to assess the success of our marketing and advertising campaigns).
              </p>
              <p className="text-foreground/80">
                We also use your information to communicate with you, including providing you with information about our services, responding to your inquiries, and sending you marketing communications.
              </p>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                4. Sharing Your Information
              </Heading>
              <p className="text-foreground/80">
                We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the site. We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
              </p>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                5. Your Rights
              </Heading>
              <p className="text-foreground/80">
                If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
              </p>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                6. Data Retention
              </Heading>
              <p className="text-foreground/80">
                When you place an order through the site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
              </p>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                7. Changes
              </Heading>
              <p className="text-foreground/80">
                We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
              </p>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                8. Contact Us
              </Heading>
              <p className="text-foreground/80">
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at nitincmd15@gmail.com or by mail using the details provided below:
              </p>
              <address className="text-foreground/80 mt-4 not-italic">
                PiracyGuard<br />
                Raipur, Chattisgarh<br />
                India
              </address>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
