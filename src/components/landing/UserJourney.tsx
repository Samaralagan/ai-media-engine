import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserPlus, Link2, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';

const journeySteps = [
  {
    icon: UserPlus,
    title: 'Create Account',
    description: 'Sign up in seconds with enterprise-grade security.',
    mockContent: (
      <div className="space-y-3">
        <div className="h-3 w-3/4 rounded bg-primary/20" />
        <div className="h-10 rounded-lg bg-muted" />
        <div className="h-10 rounded-lg bg-muted" />
        <div className="h-10 rounded-lg bg-gradient-primary" />
      </div>
    ),
  },
  {
    icon: Link2,
    title: 'Media Integration',
    description: 'Connect your content sources and platforms.',
    mockContent: (
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ delay: i * 0.1, duration: 2, repeat: Infinity }}
            className="aspect-square rounded-lg bg-accent/50 flex items-center justify-center"
          >
            <CheckCircle2 className="w-4 h-4 text-primary" />
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    icon: Zap,
    title: 'AI Automation',
    description: 'Let AI optimize and automate your workflows.',
    mockContent: (
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: i * 0.3, duration: 1, repeat: Infinity, repeatDelay: 2 }}
            className="h-8 rounded bg-gradient-to-r from-primary/30 to-secondary/30 flex items-center px-3"
          >
            <span className="text-xs font-medium text-primary">Processing...</span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    icon: TrendingUp,
    title: 'Insights & Growth',
    description: 'Receive weekly predictive insights and recommendations.',
    mockContent: (
      <div className="space-y-3">
        <div className="flex items-end gap-1 h-24">
          {[30, 45, 40, 60, 55, 75, 85].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex-1 rounded-t bg-gradient-primary"
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Mon</span>
          <span>Sun</span>
        </div>
      </div>
    ),
  },
];

export const UserJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Your Journey
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            From Setup to{' '}
            <span className="gradient-text">Success</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the seamless path from account creation to AI-powered content optimization.
          </p>
        </motion.div>

        {/* Horizontal Journey Flow - Desktop */}
        <div ref={ref} className="hidden md:block relative">
          {/* Progress Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-border">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="h-full bg-gradient-primary"
            />
          </div>

          <div className="grid grid-cols-4 gap-6">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Indicator */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                    className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow z-10"
                  >
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="glass-card p-5 text-center">
                  <h3 className="font-heading text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                <div className="p-3 rounded-xl bg-gray-50">
                    {step.mockContent}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vertical Journey Flow - Mobile */}
        <div className="md:hidden space-y-6">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex gap-4"
            >
              {/* Step Indicator */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow z-10">
                  <step.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                {index < journeySteps.length - 1 && (
                  <div className="flex-1 w-0.5 bg-gradient-to-b from-primary to-accent mt-2" />
                )}
              </div>

              {/* Content Card */}
              <div className="flex-1 glass-card p-4 mb-4">
                <h3 className="font-heading text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                <div className="p-3 rounded-xl bg-gray-50">
                  {step.mockContent}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
