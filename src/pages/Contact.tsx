
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import MainLayout from '../layouts/MainLayout';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    
    // In a real app, you'd send this data to your backend
    // For now, we'll just show a success toast
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    form.reset();
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Contact Us
            </h1>
            <p className="text-foreground/80 dark:text-foreground/90 max-w-2xl mx-auto">
              Have questions about our services or want to get in touch? 
              Our team is here to help you with any inquiries you might have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card shadow-md rounded-lg p-6 text-center">
              <Mail className="mx-auto h-10 w-10 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Email Us</h3>
              <p className="text-foreground/80 dark:text-foreground/90 text-sm">nitincmd15@gmail.com</p>
            </div>
            
            <div className="bg-card shadow-md rounded-lg p-6 text-center">
              <Phone className="mx-auto h-10 w-10 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Call Us</h3>
              <p className="text-foreground/80 dark:text-foreground/90 text-sm">+91 1234567890</p>
            </div>
            
            <div className="bg-card shadow-md rounded-lg p-6 text-center">
              <MapPin className="mx-auto h-10 w-10 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Office</h3>
              <p className="text-foreground/80 dark:text-foreground/90 text-sm">Raipur, Chattisgarh</p>
            </div>
          </div>

          <div className="bg-card shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-foreground">Send Us a Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your email" {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Message subject" {...field} className="bg-background/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="min-h-[120px] bg-background/50" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end">
                  <Button type="submit" className="bg-primary hover:bg-primary/90">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
