import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, MessageSquare, CheckCircle } from 'lucide-react';
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

export const Demo = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: "Demo Request Received!",
      description: "Our team will contact you within 24 hours.",
    });
  };

  return (
    <section id="demo" className="section-padding gradient-surface">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Get Started
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              See TechKeyMedia{' '}
              <span className="gradient-text">In Action</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a personalized demo with our team. Discover how AI-powered automation 
              can transform your content operations.
            </p>

            <div className="space-y-4">
              {[
                { icon: Calendar, text: '30-minute personalized walkthrough' },
                { icon: MessageSquare, text: 'Q&A with our AI specialists' },
                { icon: CheckCircle, text: 'Custom use case analysis' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/50 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* AI Chat Preview */}
            <div className="mt-8 p-4 rounded-2xl bg-white/60 border border-border/50">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium">AI Assistant Preview</span>
              </div>
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-muted/50 p-3 rounded-lg rounded-tl-none text-sm"
                >
                  Hi! I'm your TechKeyMedia AI assistant. How can I help you automate your content today?
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="glass-card p-6 lg:p-8">
                <h3 className="font-heading text-xl font-bold mb-6">Request Your Demo</h3>
                
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-11"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        required
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input
                      placeholder="Your company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="h-11"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Interest Area</label>
                    <Select onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select your focus area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="content-creation">AI Content Creation</SelectItem>
                        <SelectItem value="media-automation">Media Automation</SelectItem>
                        <SelectItem value="analytics">Performance Analytics</SelectItem>
                        <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                    <Textarea
                      placeholder="Tell us about your content automation needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[100px] resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="w-4 h-4" />
                    Request Demo
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">Thank You!</h3>
                <p className="text-muted-foreground mb-6">
                  Your demo request has been received. Our team will reach out within 24 hours to schedule your personalized session.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Submit Another Request
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
