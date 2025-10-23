import { BookOpen, Computer, Users, Mic, Pencil, Coffee } from 'lucide-react';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export const services = [
  {
    icon: BookOpen,
    title: 'Book Lending',
    description: 'Access thousands of books, from timeless classics to the latest bestsellers. Our collection caters to all ages and interests.',
  },
  {
    icon: Computer,
    title: 'E-Books & Audiobooks',
    description: 'Enjoy our vast digital library from the comfort of your home. Borrow e-books and audiobooks with your library card.',
  },
  {
    icon: Users,
    title: 'Community Events',
    description: 'Join our regular book clubs, author talks, and children\'s story times. There\'s always something happening at Stanwell Library.',
  },
  {
    icon: Mic,
    title: 'Workshops & Classes',
    description: 'We offer a variety of workshops, from digital literacy for seniors to creative writing for aspiring authors.',
  },
  {
    icon: Pencil,
    title: 'Quiet Study Spaces',
    description: 'Need a peaceful place to study or work? Our library offers designated quiet zones with free Wi-Fi access.',
  },
  {
    icon: Coffee,
    title: 'On-site Café',
    description: 'Grab a coffee and a snack at our cozy café. It\'s the perfect spot to relax with a good book or meet with friends.',
  },
];

export const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop', alt: 'Cozy library reading nook' },
  { id: 2, src: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2100&auto=format&fit=crop', alt: 'Expansive library shelves' },
  { id: 3, src: 'https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?q=80&w=2070&auto=format&fit=crop', alt: 'Children\'s section of the library' },
  { id: 4, src: 'https://images.unsplash.com/photo-1583464663129-59a4e21bbf13?q=80&w=2070&auto=format&fit=crop', alt: 'A community event in progress' },
  { id: 5, src: 'https://images.unsplash.com/photo-1529010292361-893952853535?q=80&w=2070&auto=format&fit=crop', alt: 'Modern library interior with comfortable seating' },
  { id: 6, src: 'https://images.unsplash.com/photo-1543464273-a1a6d35aa843?q=80&w=2070&auto=format&fit=crop', alt: 'Student studying in the library' },
];

export const testimonials = [
  {
    quote: 'Stanwell Library is the heart of our community. The staff are always so helpful, and it’s my favourite place to find a quiet corner and a good book.',
    author: 'Sarah L.',
    role: 'Local Resident',
  },
  {
    quote: 'The children\'s section is fantastic! My kids love the story time sessions, and it has really nurtured their love for reading.',
    author: 'David Chen',
    role: 'Parent',
  },
  {
    quote: 'As a student, the free Wi-Fi and quiet study spaces are a lifesaver. It’s the perfect environment to focus and get work done.',
    author: 'Emily R.',
    role: 'University Student',
  },
  {
    quote: 'I recently attended a digital skills workshop here and it was incredibly informative. A wonderful resource for all ages.',
    author: 'Brian H.',
    role: 'Retiree',
  },
];

export const openingHours = {
  Monday: { open: '9:00 AM', close: '6:00 PM' },
  Tuesday: { open: '9:00 AM', close: '8:00 PM' },
  Wednesday: { open: '9:00 AM', close: '6:00 PM' },
  Thursday: { open: '9:00 AM', close: '8:00 PM' },
  Friday: { open: '9:00 AM', close: '5:00 PM' },
  Saturday: { open: '10:00 AM', close: '4:00 PM' },
  Sunday: { open: null, close: null }, // Closed
};