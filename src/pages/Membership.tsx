import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MembershipPage() {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Join Stanwell Library</CardTitle>
            <CardDescription>Become a member today to unlock a world of stories and knowledge. It's free!</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Jane" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="jane.doe@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="07123 456789" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="membership-type">Membership Type</Label>
                <Select>
                  <SelectTrigger id="membership-type">
                    <SelectValue placeholder="Select a membership type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adult">Adult (18+)</SelectItem>
                    <SelectItem value="teen">Teen (13-17)</SelectItem>
                    <SelectItem value="child">Child (0-12)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full">Complete Registration</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}