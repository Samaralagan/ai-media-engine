import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Starter Content',
    price: '$49',
    period: '/month',
    description: 'Perfect for creators and small teams getting started with AI content.',
    features: [
      'Up to 100 AI content generations/month',
      'Basic workflow automation',
      '5 media integrations',
      'Standard analytics dashboard',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro Media',
    price: '$149',
    period: '/month',
    description: 'Ideal for growing teams that need advanced automation and insights.',
    features: [
      'Unlimited AI content generations',
      'Advanced workflow automation',
      'Unlimited media integrations',
      'Real-time analytics & dashboards',
      'Predictive content insights',
      'Priority support',
      'Custom brand voice AI',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations requiring maximum scale and dedicated support.',
    features: [
      'Everything in Pro Media',
      'Dedicated AI infrastructure',
      'Custom integrations & APIs',
      'Advanced security & compliance',
      'Dedicated account manager',
      'SLA guarantees',
      'On-premise deployment option',
    ],
    cta: 'Request Demo',
    popular: false,
  },
];

export const Pricing = () => {
  const scrollToDemo = () => {
    const element = document.querySelector('#demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Pricing
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Plans That{' '}
            <span className="gradient-text">Scale With You</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your content automation needs. All plans include our core AI features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow">
                    <Star className="w-4 h-4 fill-current" />
                    Recommended
                  </div>
                </div>
              )}

              <div
                className={`h-full glass-card p-6 lg:p-8 card-hover ${
                  plan.popular
                    ? 'border-2 border-primary shadow-glow'
                    : 'border border-border'
                }`}
              >
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-4xl lg:text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'hero' : 'outline'}
                  size="lg"
                  className="w-full"
                  onClick={scrollToDemo}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
