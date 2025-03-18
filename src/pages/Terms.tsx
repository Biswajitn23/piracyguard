
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';

const TermsOfService: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Heading level={1} className="mb-6 text-foreground">
            Terms of Service
          </Heading>
          <p className="text-foreground/80 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <Separator className="my-6" />
          
          <div className="space-y-8 text-foreground">
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                1. Introduction
              </Heading>
              <p className="text-foreground/80">
                Welcome to PiracyGuard ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at piracyguard.com (together or individually "Service") operated by PiracyGuard. Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound of them.
              </p>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                2. Communications
              </Heading>
              <p className="text-foreground/80">
                By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at nitincmd15@gmail.com.
              </p>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                3. Content
              </Heading>
              <p className="text-foreground/80">
                Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for Content that you post on or through Service, including its legality, reliability, and appropriateness. By posting Content on or through Service, You represent and warrant that: (i) Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity.
              </p>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                4. Prohibited Uses
              </Heading>
              <p className="text-foreground/80 mb-4">
                You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-foreground/80">
                <li>In any way that violates any applicable national or international law or regulation.</li>
                <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
                <li>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
              </ol>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                5. Analytics
              </Heading>
              <p className="text-foreground/80">
                We may use third-party Service Providers to monitor and analyze the use of our Service.
              </p>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                6. Intellectual Property
              </Heading>
              <p className="text-foreground/80">
                Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of PiracyGuard and its licensors. Service is protected by copyright, trademark, and other laws of the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of PiracyGuard.
              </p>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                7. Termination
              </Heading>
              <p className="text-foreground/80">
                We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms. If you wish to terminate your account, you may simply discontinue using Service.
              </p>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                8. Contact Us
              </Heading>
              <p className="text-foreground/80">
                If you have any questions about these Terms, please contact us at nitincmd15@gmail.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsOfService;
