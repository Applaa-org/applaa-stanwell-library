import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Layout } from './components/layout/Layout';
import Index from "./pages/Index";
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import GalleryPage from './pages/Gallery';
import TestimonialsPage from './pages/Testimonials';
import ContactPage from './pages/Contact';
import MembershipPage from './pages/Membership';

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Layout />
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create page routes
const indexRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/', component: Index })
const aboutRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/about', component: AboutPage })
const servicesRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/services', component: ServicesPage })
const galleryRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/gallery', component: GalleryPage })
const testimonialsRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/testimonials', component: TestimonialsPage })
const contactRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/contact', component: ContactPage })
const membershipRoute = createTanStackRoute({ getParentRoute: () => rootRoute, path: '/membership', component: MembershipPage })

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  galleryRoute,
  testimonialsRoute,
  contactRoute,
  membershipRoute,
])

// Create router
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;