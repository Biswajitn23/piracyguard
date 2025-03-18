
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Heading } from '@/components/ui/heading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Legal: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heading level={1} className="font-bold mb-4 text-foreground">
              Legal Information
            </Heading>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Important legal documents and policies related to PiracyGuard's services.
            </p>
          </div>

          <Tabs defaultValue="terms" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="terms">Terms of Service</TabsTrigger>
              <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
              <TabsTrigger value="copyright">Copyright</TabsTrigger>
            </TabsList>
            
            <TabsContent value="terms" className="space-y-6">
              <div className="bg-card shadow-sm rounded-lg p-6">
                <Heading level={2} className="text-xl font-semibold mb-4">Terms of Service</Heading>
                <p className="text-foreground/80 mb-4">
                  Last updated: May 15, 2023
                </p>
                
                <div className="space-y-4 text-foreground/80">
                  <section>
                    <h3 className="text-lg font-medium mb-2">1. Acceptance of Terms</h3>
                    <p>
                      By accessing or using PiracyGuard's services, you agree to be bound by these Terms of Service. 
                      If you do not agree to these terms, you must not access or use our services.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-lg font-medium mb-2">2. Description of Service</h3>
                    <p>
                      PiracyGuard provides digital content protection services designed to detect, 
                      monitor, and address unauthorized use and distribution of digital content.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-lg font-medium mb-2">3. User Accounts</h3>
                    <p>
                      To access certain features of the Service, you may be required to register for an account. 
                      You are responsible for maintaining the confidentiality of your account credentials and 
                      for all activities that occur under your account.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-lg font-medium mb-2">4. User Obligations</h3>
                    <p>
                      You agree to use the Service only for lawful purposes and in accordance with these Terms. 
                      You are solely responsible for the content you submit to our Service and must ensure you have 
                      all necessary rights to such content.
                    </p>
                  </section>
                  
                  <Separator className="my-6" />
                  
                  <p>
                    This is an abbreviated version of our Terms of Service. For the complete terms, please 
                    <Link to="/terms" className="text-piracy-600 hover:text-piracy-700 ml-1">click here</Link>.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="privacy" className="space-y-6">
              <div className="bg-card shadow-sm rounded-lg p-6">
                <Heading level={2} className="text-xl font-semibold mb-4">Privacy Policy</Heading>
                <p className="text-foreground/80 mb-4">
                  Last updated: May 15, 2023
                </p>
                
                <div className="space-y-4 text-foreground/80">
                  <section>
                    <h3 className="text-lg font-medium mb-2">1. Information We Collect</h3>
                    <p>
                      We collect information you provide directly to us, information we obtain automatically when 
                      you use the Service, and information from third-party sources.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-lg font-medium mb-2">2. How We Use Your Information</h3>
                    <p>
                      We use the information we collect to provide, maintain, and improve our services, 
                      communicate with you, and for security and compliance purposes.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-lg font-medium mb-2">3. Information Sharing</h3>
                    <p>
                      We may share your information with third-party service providers, when required by law, 
                      in connection with a merger or acquisition, and with your consent.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-lg font-medium mb-2">4. Your Rights and Choices</h3>
                    <p>
                      Depending on your location, you may have certain rights regarding your personal information, 
                      including the right to access, correct, delete, or export your data.
                    </p>
                  </section>
                  
                  <Separator className="my-6" />
                  
                  <p>
                    This is an abbreviated version of our Privacy Policy. For the complete policy, please 
                    <Link to="/privacy" className="text-piracy-600 hover:text-piracy-700 ml-1">click here</Link>.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="copyright" className="space-y-6">
              <div className="bg-card shadow-sm rounded-lg p-6">
                <Heading level={2} className="text-xl font-semibold mb-4">Copyright Policy</Heading>
                <p className="text-foreground/80 mb-4">
                  Last updated: May 15, 2023
                </p>
                
                <div className="space-y-4 text-foreground/80">
                  <section>
                    <h3 className="text-lg font-medium mb-2">1. DMCA Compliance</h3>
                    <p>
                      PiracyGuard respects the intellectual property rights of others and expects its users to do the same. 
                      We respond to notices of alleged copyright infringement in accordance with the Digital Millennium Copyright Act (DMCA).
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-lg font-medium mb-2">2. Reporting Copyright Infringement</h3>
                    <p>
                      If you believe that material available on or through the Service infringes your copyright, 
                      you may notify us by providing the following information:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Identification of the copyrighted work claimed to have been infringed</li>
                      <li>Identification of the material that is claimed to be infringing</li>
                      <li>Your contact information</li>
                      <li>A statement that you have a good faith belief that use of the material is not authorized</li>
                      <li>A statement that the information is accurate and, under penalty of perjury, that you are authorized to act on behalf of the copyright owner</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h3 className="text-lg font-medium mb-2">3. Counter-Notice Procedure</h3>
                    <p>
                      If you believe that your content was removed due to a mistake or misidentification, 
                      you may send us a counter-notice containing specific information as required by the DMCA.
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="text-lg font-medium mb-2">4. Repeat Infringer Policy</h3>
                    <p>
                      PiracyGuard has adopted a policy of terminating, in appropriate circumstances, 
                      users who are deemed to be repeat infringers.
                    </p>
                  </section>
                  
                  <Separator className="my-6" />
                  
                  <p>
                    This is an abbreviated version of our Copyright Policy. For the complete policy, please 
                    <Link to="/copyright" className="text-piracy-600 hover:text-piracy-700 ml-1">click here</Link>.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-card shadow-sm rounded-lg p-6 mt-12">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Additional Legal Resources</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/cookies" className="text-piracy-600 hover:text-piracy-700">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-piracy-600 hover:text-piracy-700">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-piracy-600 hover:text-piracy-700">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/copyright" className="text-piracy-600 hover:text-piracy-700">
                  Copyright Policy
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-piracy-600 hover:text-piracy-700">
                  Security Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Legal;
