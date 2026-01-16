import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Send, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const advisors = [
  {
    name: 'Dr. Sarah Chen',
    role: 'AI Research Advisor',
    bio: 'Former AI Lead at major tech company with 15+ years in machine learning.',
  },
  {
    name: 'Michael Torres',
    role: 'Media Strategy Advisor',
    bio: 'Built content platforms reaching 100M+ users globally.',
  },
  {
    name: 'Emma Williams',
    role: 'Enterprise Advisor',
    bio: 'Scaled multiple B2B SaaS companies from seed to IPO.',
  },
  {
    name: 'James Park',
    role: 'Product Advisor',
    bio: 'Product visionary who led teams at leading tech companies.',
  },
];

export const About = () => {
  const { toast } = useToast();
  const [currentAdvisor, setCurrentAdvisor] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', category: '', message: '' });
  };

  const nextAdvisor = () => {
    setCurrentAdvisor((prev) => (prev + 1) % advisors.length);
  };

  const prevAdvisor = () => {
    setCurrentAdvisor((prev) => (prev - 1 + advisors.length) % advisors.length);
  };

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our{' '}
            <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            "Empower organizations with AI-first content and media automation to unlock creativity, 
            efficiency, and growth at unprecedented scale."
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Target, title: 'Vision', text: 'Making AI content automation accessible to every organization.' },
              { icon: Lightbulb, title: 'Innovation', text: 'Pushing the boundaries of what AI can achieve in media.' },
              { icon: Users, title: 'Community', text: 'Building a global network of AI-powered creators.' },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Advisory Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-heading text-2xl font-bold text-center mb-8">AI Advisory Board</h3>
          
          <div className="relative max-w-md mx-auto">
            <div className="glass-card p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">
                  {advisors[currentAdvisor].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h4 className="font-heading text-xl font-semibold mb-1">
                {advisors[currentAdvisor].name}
              </h4>
              <p className="text-primary font-medium text-sm mb-3">
                {advisors[currentAdvisor].role}
              </p>
              <p className="text-muted-foreground text-sm">
                {advisors[currentAdvisor].bio}
              </p>
            </div>

            <div className="flex justify-center items-center gap-4 mt-6">
              <Button variant="ghost" size="icon" onClick={prevAdvisor}>
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-2">
                {advisors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAdvisor(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentAdvisor ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
              <Button variant="ghost" size="icon" onClick={nextAdvisor}>
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="text-muted-foreground mb-6">
              Have questions about our platform? Want to explore enterprise solutions? 
              Reach out and our team will get back to you promptly.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Email Us</p>
                  <p className="text-muted-foreground text-sm">hello@techkeymedia.info</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
                <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Schedule a Call</p>
                  <p className="text-muted-foreground text-sm">Book a time that works for you</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-6">
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    required
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <Select onValueChange={(value) => setFormData({ ...formData, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="media">Media Inquiries</SelectItem>
                    <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                    <SelectItem value="content">Content Creation</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  required
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px]"
                />
              </div>

              <Button type="submit" variant="hero" className="w-full">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
