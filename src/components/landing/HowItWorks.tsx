import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Database, Activity, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Database,
    title: 'Integrate Your Content Sources',
    description: 'Connect your media libraries, social platforms, and content repositories. Our AI seamlessly ingests and organizes your data.',
    visual: 'data-pipeline',
  },
  {
    icon: Cpu,
    title: 'AI Analyzes & Processes',
    description: 'Advanced algorithms understand your content, identify patterns, and prepare optimized workflows tailored to your needs.',
    visual: 'ai-processing',
  },
  {
    icon: Activity,
    title: 'Real-Time Automation',
    description: 'Watch as your media workflows execute automatically. Monitor progress with live dashboards and instant notifications.',
    visual: 'dashboard',
  },
  {
    icon: Sparkles,
    title: 'Insights & Optimization',
    description: 'Receive predictive recommendations to enhance content performance. Continuously improve with AI-driven insights.',
    visual: 'insights',
  },
];

const StepVisual = ({ type }: { type: string }) => {
  return (
    <div className="relative w-full h-48 md:h-56 rounded-2xl bg-gradient-surface overflow-hidden">
      {type === 'data-pipeline' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.3, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center"
              >
                <div className="w-6 h-6 rounded bg-primary/40" />
              </motion.div>
            ))}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-primary"
            >
              →
            </motion.div>
            <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Database className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
        </div>
      )}
      {type === 'ai-processing' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="relative w-32 h-32"
          >
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-primary/60"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${deg}deg) translateY(-40px)`,
                }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ delay: i * 0.1, duration: 1, repeat: Infinity }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <Cpu className="w-10 h-10 text-primary" />
            </div>
          </motion.div>
        </div>
      )}
      {type === 'dashboard' && (
        <div className="absolute inset-4 flex flex-col gap-2">
          <div className="flex gap-2 h-8">
            <motion.div
              animate={{ width: ['60%', '80%', '60%'] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-full rounded bg-primary/30"
            />
            <motion.div
              animate={{ width: ['40%', '20%', '40%'] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-full rounded bg-accent/50"
            />
          </div>
          <div className="flex-1 flex gap-2">
            <div className="flex-1 rounded-lg bg-white/60 p-2">
              <div className="flex gap-1 h-full items-end">
                {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex-1 rounded-sm bg-gradient-primary"
                  />
                ))}
              </div>
            </div>
            <div className="w-24 flex flex-col gap-2">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ delay: i * 0.3, duration: 2, repeat: Infinity }}
                  className="h-6 rounded bg-primary/20"
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {type === 'insights' && (
        <div className="absolute inset-0 flex items-center justify-center gap-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="glass-card p-3"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ delay: i * 0.3, duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6 text-primary" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Intelligent Automation,{' '}
            <span className="gradient-text">Simplified</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From data integration to AI-powered insights, see how TechKeyMedia transforms your content operations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          {steps.map((step, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-50px" });
            const isEven = index % 2 === 0;

            return (
              <motion.div
                ref={ref}
                key={step.title}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 mb-12 md:mb-20 last:mb-0 ${
                  isEven ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Step Number Indicator */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm z-10">
                  {index + 1}
                </div>

                <div className={`pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                  <div className="flex items-center gap-3 mb-4 justify-start md:justify-end">
                    {isEven ? (
                      <>
                        <h3 className="font-heading text-xl md:text-2xl font-bold">{step.title}</h3>
                        <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-heading text-xl md:text-2xl font-bold">{step.title}</h3>
                      </>
                    )}
                  </div>
                  <p className={`text-muted-foreground ${isEven ? '' : 'md:text-left'}`}>
                    {step.description}
                  </p>
                </div>

                <div className={`pl-12 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12 md:order-1'}`}>
                  <StepVisual type={step.visual} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
