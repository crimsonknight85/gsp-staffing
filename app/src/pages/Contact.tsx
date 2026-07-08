import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock, CheckCircle2, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

const hiringNeeds = [
  { value: 'permanent', label: 'Permanent Recruitment' },
  { value: 'contract', label: 'Contract Staffing' },
  { value: 'managed', label: 'Managed Team' },
  { value: 'executive', label: 'Executive Search' },
  { value: 'multiple', label: 'Multiple Services' },
  { value: 'not-sure', label: 'Not Sure Yet' },
]

const teamSizes = [
  { value: '1-5', label: '1–5 hires' },
  { value: '6-20', label: '6–20 hires' },
  { value: '21-50', label: '21–50 hires' },
  { value: '50+', label: '50+ hires' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    need: '',
    teamSize: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitting(false)
    setSubmitted(true)
    toast.success('Message sent! We\'ll be in touch within 24 hours.')
  }

  if (submitted) {
    return (
      <section className="flex flex-1 items-center justify-center bg-slate-50 py-20">
        <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gsp-success/10">
              <CheckCircle2 className="h-10 w-10 text-gsp-success" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gsp-navy">Thank you!</h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            We've received your message and will get back to you within 24 hours.
            In the meantime, feel free to explore how our process works.
          </p>
          <div className="mt-8">
            <a href="/how-it-works">
              <Button
                variant="outline"
                className="border-gsp-navy/20 text-gsp-navy hover:bg-gsp-navy/5"
              >
                See How It Works
              </Button>
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="border-b border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gsp-terracotta">
            Get in Touch
          </p>
          <h1 className="text-4xl font-bold text-gsp-navy sm:text-5xl">
            Let's start a conversation
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500 leading-relaxed">
            Tell us about your hiring needs. We'll respond within 24 hours with
            next steps and a clear timeline.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="flex-1 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gsp-navy/5">
                        <Mail className="h-5 w-5 text-gsp-navy" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gsp-navy">Email</p>
                        <p className="mt-1 text-sm text-slate-500">
                          hello@globalstaffing.partners
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gsp-navy/5">
                        <Phone className="h-5 w-5 text-gsp-navy" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gsp-navy">Phone</p>
                        <p className="mt-1 text-sm text-slate-500">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gsp-navy/5">
                        <MapPin className="h-5 w-5 text-gsp-navy" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gsp-navy">Office</p>
                        <p className="mt-1 text-sm text-slate-500">
                          1200 Market Street, Suite 400
                          <br />
                          San Francisco, CA 94102
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 bg-gsp-navy">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <Clock className="h-5 w-5 text-gsp-terracotta" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">
                          Response Time
                        </p>
                        <p className="mt-1 text-sm text-slate-300">
                          We respond to all inquiries within 24 hours during
                          business days.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-slate-200">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">
                          First Name <span className="text-gsp-danger">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          required
                          className="border-slate-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">
                          Last Name <span className="text-gsp-danger">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Smith"
                          required
                          className="border-slate-200"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Work Email <span className="text-gsp-danger">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                          className="border-slate-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Inc."
                          className="border-slate-200"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="border-slate-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="need">
                          What do you need?{' '}
                          <span className="text-gsp-danger">*</span>
                        </Label>
                        <Select
                          value={formData.need}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, need: value }))
                          }
                        >
                          <SelectTrigger className="border-slate-200">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {hiringNeeds.map((n) => (
                              <SelectItem key={n.value} value={n.value}>
                                {n.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="teamSize">Expected Team Size</Label>
                      <Select
                        value={formData.teamSize}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, teamSize: value }))
                        }
                      >
                        <SelectTrigger className="border-slate-200">
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          {teamSizes.map((s) => (
                            <SelectItem key={s.value} value={s.value}>
                              {s.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us more</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What roles are you hiring for? What timeline are you working with? Any specific requirements?"
                        rows={5}
                        className="border-slate-200 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-gsp-terracotta hover:bg-gsp-terracotta/90 text-white sm:w-auto"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
