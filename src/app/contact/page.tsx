import type { Metadata } from 'next';
import { ContactForm } from './ContactForm';
import { socialLinks } from '@/lib/placeholder-data';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact',
};

const socialIcons: { [key: string]: React.ReactNode } = {
  facebook: <Facebook className="h-6 w-6" />,
  linkedin: <Linkedin className="h-6 w-6" />,
  instagram: <Instagram className="h-6 w-6" />,
  github: <Github className="h-6 w-6" />,
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Have a question or want to work together? Drop me a line.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold font-headline">Contact Information</h2>
          <p className="text-muted-foreground">
            You can reach me via email or connect with me on social media. I look forward to hearing from you!
          </p>
          <div className="space-y-4">
            <a href="mailto:prashanth.vedartham@gmail.com" className="flex items-center gap-4 group">
              <Mail className="h-6 w-6 text-primary"/>
              <span className="text-lg group-hover:underline">prashanth.vedartham@gmail.com</span>
            </a>
          </div>
          <div className="flex space-x-4 pt-4">
            {socialLinks.map((link) => (
              <Button key={link.name} asChild variant="outline" size="icon" className="h-12 w-12 rounded-full">
                <Link href={link.href} target="_blank" aria-label={link.name}>
                  {socialIcons[link.name]}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}