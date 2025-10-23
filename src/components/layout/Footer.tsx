import { Link } from '@tanstack/react-router';
import { BookMarked, Twitter, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MadeWithApplaa } from '@/components/made-with-applaa';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <BookMarked className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Stanwell Library</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A community hub for learning, discovery, and connection.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></a>
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary">Gallery</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>123 Library Lane, Stanwell, TW19 7NB</li>
              <li>(01784) 123456</li>
              <li>hello@stanwell-library.co.uk</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">Stay updated with our latest events and news.</p>
            <form className="mt-2 flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Stanwell Library. All rights reserved.</p>
          <MadeWithApplaa />
        </div>
      </div>
    </footer>
  );
}