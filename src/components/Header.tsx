"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/placeholder-data';
import { Logo } from './Logo';

export function Header() {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // This is a simple client-side check.
    // In a real app, you might use a more robust session management solution.
    const hasAuthToken = document.cookie.includes('auth_token=signed_in');
    setIsAuthenticated(hasAuthToken);
  }, [pathname]);

  const handleSignOut = () => {
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    setIsAuthenticated(false);
    window.location.href = '/'; // Redirect to home
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold font-headline text-xl">
          <Logo className="h-8 w-8 text-primary" />
          <span>PRAVEDIN</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
           {isAuthenticated && (
             <Button variant="ghost" size="icon" onClick={handleSignOut} aria-label="Sign out">
                <LogOut className="h-5 w-5" />
             </Button>
           )}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center gap-2 font-bold font-headline text-lg">
                    <Logo className="h-8 w-8 text-primary" />
                    <span>PRAVEDIN</span>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="mt-8 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                        <Link
                        href={link.href}
                        className={cn(
                            "text-lg font-medium transition-colors hover:text-primary",
                            pathname === link.href ? "text-primary" : "text-foreground"
                        )}
                        >
                        {link.name}
                        </Link>
                    </SheetClose>
                  ))}
                  {isAuthenticated && (
                     <SheetClose asChild>
                        <Button variant="ghost" onClick={handleSignOut} className="justify-start text-lg font-medium">
                            <LogOut className="mr-2 h-5 w-5" />
                            Sign Out
                        </Button>
                     </SheetClose>
                   )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
