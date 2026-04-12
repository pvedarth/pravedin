import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Github } from 'lucide-react';
import { socialLinks } from '@/lib/placeholder-data';
import { Button } from './ui/button';
import { Logo } from './Logo';

const socialIcons: { [key: string]: React.ReactNode } = {
  facebook: <Facebook className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
  github: <Github className="h-5 w-5" />,
};

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold font-headline">
            <Logo className="h-8 w-8" />
            <span>PRAVEDIN</span>
          </Link>
          <div className="flex items-center space-x-2">
            {socialLinks.map((link) => (
              <Button key={link.name} asChild variant="ghost" size="icon">
                <Link href={link.href} target="_blank" aria-label={link.name}>
                  {socialIcons[link.name]}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground border-t border-border pt-4">
          <p>&copy; {new Date().getFullYear()} PRAVEDIN. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}