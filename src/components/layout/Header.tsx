import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { BookMarked, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/data/libraryData';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <BookMarked className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Stanwell Library</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: 'text-primary' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" asChild>
            <Link to="/contact">Explore Books</Link>
          </Button>
          <Button asChild>
            <Link to="/membership">Join The Library</Link>
          </Button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: 'text-primary' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" asChild>
                <Link to="/contact">Explore Books</Link>
              </Button>
              <Button asChild>
                <Link to="/membership">Join The Library</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}