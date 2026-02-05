import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { WaitlistForm } from "@/components/waitlist-form"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  IconMail,
  IconBell,
  IconFileCheck,
  IconClock,
  IconShield,
  IconBolt,
  IconUsers,
  IconCheck,
  IconArrowRight,
  IconFileText,
  IconCalendar,
  IconMessage,
  IconLink,
  IconRocket,
} from "@tabler/icons-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <IconFileText className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">DocuCollect</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground hidden sm:block transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground hidden sm:block transition-colors">
              FAQ
            </Link>
            <ThemeToggle />
            <Link href="#waitlist">
              <Button className="gap-2">
                Join Waitlist
                <IconArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 gap-1.5">
            <IconRocket className="h-3.5 w-3.5" />
            Launching Soon - Get Early Access
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Stop Chasing Clients for{" "}
            <span className="text-primary">Documents</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The simple document collection portal built for accountants. Send requests, 
            get automatic reminders, and receive files securely—all for just $29/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#waitlist">
              <Button size="lg" className="h-14 px-8 text-lg gap-2">
                Get Early Access
                <IconArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              <IconUsers className="h-4 w-4" />
              Join 500+ accountants on the waitlist
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sound Familiar?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every tax season, the same frustrating cycle
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-destructive/50 bg-destructive/5">
              <CardHeader>
                <IconMail className="h-10 w-10 text-destructive mb-2" />
                <CardTitle className="text-destructive">Email Chaos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  &quot;Did they send the W-2 yet? Let me check 47 email threads...&quot;
                </p>
              </CardContent>
            </Card>
            <Card className="border-destructive/50 bg-destructive/5">
              <CardHeader>
                <IconClock className="h-10 w-10 text-destructive mb-2" />
                <CardTitle className="text-destructive">5-10 Hours/Week</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The average accountant wastes 5-10 hours weekly just chasing documents.
                </p>
              </CardContent>
            </Card>
            <Card className="border-destructive/50 bg-destructive/5">
              <CardHeader>
                <IconMessage className="h-10 w-10 text-destructive mb-2" />
                <CardTitle className="text-destructive">Endless Follow-ups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  &quot;Just wanted to follow up on that bank statement I requested 3 weeks ago...&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">The Solution</Badge>
            <h2 className="text-3xl font-bold mb-4">
              One Portal. All Documents. Zero Headaches.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              DocuCollect gives each client their own secure upload portal with automatic 
              reminders until every document is received.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Create a Request</h3>
                  <p className="text-muted-foreground">
                    Select from tax document templates or customize your own checklist.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Send Magic Link</h3>
                  <p className="text-muted-foreground">
                    Clients get a simple, secure link—no accounts or passwords needed.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Auto-Reminders Do the Work</h3>
                  <p className="text-muted-foreground">
                    Gentle, automated follow-ups until every document is received.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Get Notified & Download</h3>
                  <p className="text-muted-foreground">
                    Receive instant notifications when files arrive, download in one click.
                  </p>
                </div>
              </div>
            </div>
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="aspect-video bg-background rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <IconFileCheck className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold">
                    Client Portal Preview
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Simple. Secure. No login required.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built for Accountants</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every feature designed to save you time during tax season
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-all hover:shadow-lg hover:border-primary/20">
              <CardHeader>
                <IconBell className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Smart Auto-Reminders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Customizable reminder schedules that stop automatically when documents arrive.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-lg hover:border-primary/20">
              <CardHeader>
                <IconFileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Tax Document Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Pre-built checklists for 1040s, business returns, and more. One-click setup.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-lg hover:border-primary/20">
              <CardHeader>
                <IconShield className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Bank-Level Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  256-bit encryption, SOC 2 compliant. Your clients&apos; data is protected.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-lg hover:border-primary/20">
              <CardHeader>
                <IconLink className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Magic Link Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Clients click a link and upload—no accounts, no passwords, no friction.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-lg hover:border-primary/20">
              <CardHeader>
                <IconCalendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Deadline Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Set due dates and see at a glance who&apos;s on track and who needs a nudge.
                </p>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-lg hover:border-primary/20">
              <CardHeader>
                <IconUsers className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Team Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Assign clients to team members, track progress firm-wide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple, Fair Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              No hidden fees. No per-client charges. Just one flat rate.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="relative transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Perfect for solo practitioners</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Up to 50 clients",
                    "Unlimited document requests",
                    "Auto-reminders",
                    "Tax document templates",
                    "Email support",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <IconCheck className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#waitlist" className="block mt-6">
                  <Button className="w-full" variant="outline">
                    Join Waitlist
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="relative border-primary transition-all hover:shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge>Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <CardDescription>For growing firms</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Unlimited clients",
                    "Unlimited document requests",
                    "Auto-reminders",
                    "Tax document templates",
                    "Team members (up to 5)",
                    "Custom branding",
                    "Priority support",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <IconCheck className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#waitlist" className="block mt-6">
                  <Button className="w-full gap-2">
                    Join Waitlist
                    <IconArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Need more? Enterprise plans with unlimited team members and white-label options available.{" "}
            <Link href="#waitlist" className="text-primary hover:underline">Contact us</Link>.
          </p>
        </div>
      </section>

      <Separator />

      {/* Comparison Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Not Just Use ContentSnare?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Great product, but built for marketing agencies—not accountants.
            </p>
          </div>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4">Feature</th>
                    <th className="text-center p-4">DocuCollect</th>
                    <th className="text-center p-4">ContentSnare</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4">Starting Price</td>
                    <td className="p-4 text-center font-semibold text-primary">$29/mo</td>
                    <td className="p-4 text-center text-muted-foreground">$35/mo</td>
                  </tr>
                  <tr className="border-t bg-muted/50">
                    <td className="p-4">Tax Templates</td>
                    <td className="p-4 text-center">
                      <IconCheck className="h-5 w-5 text-primary mx-auto" />
                    </td>
                    <td className="p-4 text-center text-muted-foreground">Generic only</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Built for Accountants</td>
                    <td className="p-4 text-center">
                      <IconCheck className="h-5 w-5 text-primary mx-auto" />
                    </td>
                    <td className="p-4 text-center text-muted-foreground">Marketing focused</td>
                  </tr>
                  <tr className="border-t bg-muted/50">
                    <td className="p-4">No Login Required</td>
                    <td className="p-4 text-center">
                      <IconCheck className="h-5 w-5 text-primary mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <IconCheck className="h-5 w-5 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Auto-Reminders</td>
                    <td className="p-4 text-center">
                      <IconCheck className="h-5 w-5 text-primary mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <IconCheck className="h-5 w-5 text-primary mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-muted/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do my clients upload documents?</AccordionTrigger>
              <AccordionContent>
                Your clients receive a secure magic link via email. They click the link and see 
                a simple checklist of requested documents. No account creation, no passwords—just 
                drag, drop, and done. Works on any device.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is my clients&apos; data secure?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We use 256-bit AES encryption for all files at rest and in transit. 
                Our infrastructure is SOC 2 Type II compliant. Files are stored in secure US-based 
                data centers and automatically deleted after 90 days (configurable).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I customize the reminder schedule?</AccordionTrigger>
              <AccordionContent>
                Yes! You can set reminder frequency (daily, every 3 days, weekly), customize the 
                email copy, and set a maximum number of reminders. Reminders automatically stop 
                when all documents are received.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What tax document templates do you include?</AccordionTrigger>
              <AccordionContent>
                We include templates for individual 1040s, small business returns (1120, 1065, 1120S), 
                trust returns, and more. Each template includes the common documents needed with 
                clear descriptions your clients will understand.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Can I add my firm&apos;s branding?</AccordionTrigger>
              <AccordionContent>
                Professional plans and above include custom branding—add your logo, colors, and 
                custom email templates. Your clients will see your brand throughout the experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>How does pricing work?</AccordionTrigger>
              <AccordionContent>
                Simple flat monthly pricing. No per-client fees, no per-document fees, no surprise 
                charges. The Starter plan is $29/month for up to 50 clients. Professional is $79/month 
                for unlimited clients and team features.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA / Waitlist Section */}
      <section id="waitlist" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 gap-1.5">
            <IconBolt className="h-3.5 w-3.5" />
            Limited Early Access
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            Join 500+ Accountants on the Waitlist
          </h2>
          <p className="text-muted-foreground mb-8">
            Be the first to try DocuCollect. Early access members get 50% off for life 
            and help shape the product.
          </p>
          <div className="flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <IconFileText className="h-6 w-6 text-primary" />
            <span className="font-semibold">DocuCollect</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 DocuCollect. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
