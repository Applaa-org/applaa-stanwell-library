import { testimonials } from '@/data/libraryData';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function TestimonialsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">What Our Members Say</h1>
          <p className="mt-4 text-xl text-muted-foreground">Feedback from our wonderful community.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                </div>
                <blockquote className="mt-4 text-lg italic">"{testimonial.quote}"</blockquote>
                <p className="mt-4 font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}