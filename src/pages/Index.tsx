import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services, testimonials, galleryImages } from "@/data/libraryData";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { OpeningHours } from "@/components/OpeningHours";

const Index = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2100&auto=format&fit=crop" 
          alt="A beautiful, sunlit library" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Welcome to Stanwell Library</h1>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl">Your community hub for learning, discovery, and connection.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/membership">Join The Library</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Offer</h2>
            <p className="mt-4 text-lg text-muted-foreground">More than just books. Discover a world of resources.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Card key={service.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About & Opening Hours Section */}
      <section className="bg-card py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div className="prose prose-lg max-w-none text-foreground">
              <h3>A Place for Everyone</h3>
              <h2>Discover Your Community Hub</h2>
              <p>
                Since 1972, Stanwell Library has been a cornerstone of the community. We are dedicated to providing a welcoming space for everyone to learn, explore, and connect. Whether you're diving into a new book, researching a topic, or attending one of our many events, you'll find a supportive environment here.
              </p>
              <Button asChild variant="link" className="p-0 h-auto text-base">
                <Link to="/about">Learn more about our history <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <OpeningHours />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">From Our Community</h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <Card key={index} className="p-6">
                <Quote className="h-8 w-8 text-primary/50" />
                <blockquote className="mt-4 text-lg italic text-foreground">"{testimonial.quote}"</blockquote>
                <p className="mt-4 font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;