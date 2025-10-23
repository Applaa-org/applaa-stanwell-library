import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 p-4 backdrop-blur-sm">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <Cookie className="h-6 w-6 text-primary" />
          <p className="text-sm text-foreground">
            We use cookies to enhance your browsing experience.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Decline</Button>
          <Button size="sm" onClick={handleAccept}>Accept</Button>
        </div>
      </div>
    </div>
  );
}