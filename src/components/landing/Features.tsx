import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Wand2, 
  Workflow, 
  BarChart3, 
  Lightbulb, 
  Layers,
  Zap 
} from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'AI Content Creation',
    description: 'Generate text, video, and audio content with advanced AI models tailored to your brand voice.',
  },
  {
    icon: Workflow,
    title: 'Automated Workflows',
    description: 'Streamline media management with intelligent automation that adapts to your processes.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Track engagement and optimize content with real-time performance dashboards.',
  },
  {
    icon: Lightbulb,
    title: 'Predictive Insights',
    description: 'Get AI-powered recommendations to maximize content impact and audience reach.',
  },
  {
    icon: Layers,
    title: 'Multi-Format Support',
    description: 'Seamlessly handle text, images, video, and audio in one unified platform.',
  },
  {
    icon: Zap,
    title: 'Instant Processing',
    description: 'Lightning-fast content generation and optimization powered by cutting-edge AI.',
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card p-6 md:p-8 h-full card-hover border border-transparent hover:border-primary/20">
        <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
          <feature.icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <h3 className="font-heading text-xl font-semibold mb-3">{feature.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
};

export const Features = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding gradient-surface">
      <div className="container-wide">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for{' '}
            <span className="gradient-text">AI-Powered Media</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive tools designed to transform how you create, manage, and optimize content at scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
