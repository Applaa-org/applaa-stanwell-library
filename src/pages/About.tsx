export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Stanwell Library</h1>
          <p className="mt-4 text-xl text-muted-foreground">A cornerstone of the community for over 50 years.</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-16 lg:grid-cols-2 lg:max-w-none">
            <div className="prose prose-lg max-w-none text-foreground">
              <h2>Our History</h2>
              <p>
                Founded in 1972, Stanwell Library began as a small, volunteer-run reading room in the old town hall. 
                Driven by a passion for literature and a commitment to community enrichment, our founders envisioned a space 
                where everyone could access knowledge and stories.
              </p>
              
              <h2>Our Mission</h2>
              <p>
                Our mission is to inspire lifelong learning, advance knowledge, and strengthen our community. We provide free 
                and equal access to a world of ideas and information, fostering a welcoming environment where individuals can 
                explore, connect, and create.
              </p>

              <h2>Our Role in the Community</h2>
              <p>
                Stanwell Library is more than just a place for books. We are a dynamic community hub offering a wide range of 
                services and programs. From early literacy initiatives for children and digital skills workshops for adults, we strive to be a resource for everyone.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1529010292361-893952853535?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern library interior"
                className="rounded-lg shadow-lg"
              />
            </div>
        </div>
      </div>
    </div>
  );
}