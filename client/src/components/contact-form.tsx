import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Language, getText } from '@/lib/translations';

// Define form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  language: Language;
}

export function ContactForm({ language }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // In a real application, you would send this data to your server here
      console.log('Form submitted with data:', data);
      
      // Show success UI
      setIsSubmitted(true);
      
      // Show toast notification
      toast({
        title: getText(language, 'contact.success'),
        description: getText(language, 'contact.successMessage'),
        variant: 'default',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl text-primary mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">{getText(language, 'contact.success')}</h3>
        <p className="text-gray-300 font-sans">{getText(language, 'contact.successMessage')}</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm text-gray-400 mb-1">
                {getText(language, 'contact.name')} *
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  className="bg-darkgray-800 border border-darkgray-800 text-white" 
                  placeholder={getText(language, 'contact.name')}
                />
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
              <FormLabel className="text-sm text-gray-400 mb-1">
                Email *
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  type="email" 
                  className="bg-darkgray-800 border border-darkgray-800 text-white" 
                  placeholder="email@example.com"
                />
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
              <FormLabel className="text-sm text-gray-400 mb-1">
                {getText(language, 'contact.message')} *
              </FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  rows={5}
                  className="bg-darkgray-800 border border-darkgray-800 text-white" 
                  placeholder={getText(language, 'contact.message')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-primary text-black py-3 px-6 rounded font-sans font-medium tracking-wide hover:bg-teal-600 transition-colors"
        >
          {getText(language, 'contact.submit')}
        </Button>
      </form>
    </Form>
  );
}
