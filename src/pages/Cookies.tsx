
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';

const CookiesPolicy: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Heading level={1} className="mb-6 text-foreground">
            Cookies Policy
          </Heading>
          <p className="text-foreground/80 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <Separator className="my-6" />
          
          <div className="space-y-8 text-foreground">
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                1. What Are Cookies
              </Heading>
              <p className="text-foreground/80">
                Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you. Cookies can be "persistent" or "session" cookies.
              </p>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                2. How PiracyGuard Uses Cookies
              </Heading>
              <p className="text-foreground/80 mb-4">
                When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                <li>To enable certain functions of the Service</li>
                <li>To provide analytics</li>
                <li>To store your preferences</li>
                <li>To enable advertisements delivery, including behavioral advertising</li>
              </ul>
              <p className="text-foreground/80 mt-4">
                We use both session and persistent cookies on the Service and we use different types of cookies to run the Service:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80 mt-4">
                <li>Essential cookies: We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.</li>
                <li>Preferences cookies: We may use preferences cookies to remember information that changes the way the Service behaves or looks, such as the "remember me" functionality of a registered user or a user's language preference.</li>
                <li>Analytics cookies: We may use analytics cookies to track information how the Service is used so that we can make improvements.</li>
                <li>Advertising cookies: We may use these cookies to collect information about your visit to our Service, the content you viewed, the links you followed and information about your browser, device, and your IP address.</li>
              </ul>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                3. Third-Party Cookies
              </Heading>
              <p className="text-foreground/80">
                In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
              </p>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                4. What Are Your Choices Regarding Cookies
              </Heading>
              <p className="text-foreground/80 mb-4">
                If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
              </p>
              <p className="text-foreground/80">
                Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
              </p>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                5. Where Can You Find More Information About Cookies
              </Heading>
              <p className="text-foreground/80">
                You can learn more about cookies and the following third-party websites:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80 mt-4">
                <li>AllAboutCookies: <a href="http://www.allaboutcookies.org/" className="text-piracy-600 hover:underline">http://www.allaboutcookies.org/</a></li>
                <li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/" className="text-piracy-600 hover:underline">http://www.networkadvertising.org/</a></li>
              </ul>
            </section>
            
            <section>
              <Heading level={2} className="mb-4 text-foreground">
                6. Contact Us
              </Heading>
              <p className="text-foreground/80">
                If you have any questions about our Cookies Policy, please contact us at nitincmd15@gmail.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CookiesPolicy;
