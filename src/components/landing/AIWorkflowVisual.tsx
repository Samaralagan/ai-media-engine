import { motion } from 'framer-motion';
import { FileText, Video, Mic, BarChart3, Zap, Send } from 'lucide-react';

const nodes = [
  { icon: FileText, label: 'Content', delay: 0 },
  { icon: Video, label: 'Video', delay: 0.1 },
  { icon: Mic, label: 'Audio', delay: 0.2 },
];

const outputNodes = [
  { icon: Send, label: 'Publish', delay: 0.4 },
  { icon: BarChart3, label: 'Analytics', delay: 0.5 },
];

export const AIWorkflowVisual = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      {/* Animated Connection Lines - SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(335, 91%, 46%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(340, 94%, 63%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(335, 100%, 82%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Connection paths */}
        <motion.path
          d="M80 120 Q200 120 200 200"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        />
        <motion.path
          d="M80 200 L200 200"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.2, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        />
        <motion.path
          d="M80 280 Q200 280 200 200"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.4, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        />
        <motion.path
          d="M200 200 Q300 150 320 120"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        />
        <motion.path
          d="M200 200 Q300 250 320 280"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.8, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        />
      </svg>

      {/* Input Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: node.delay }}
          className="absolute left-4 md:left-8"
          style={{ top: `${20 + index * 20}%` }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, delay: index * 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <node.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-sm font-medium hidden md:block">{node.label}</span>
          </motion.div>
        </motion.div>
      ))}

      {/* Central AI Engine */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ 
            boxShadow: [
              '0 0 20px hsl(335, 91%, 46%, 0.3)',
              '0 0 40px hsl(335, 91%, 46%, 0.5)',
              '0 0 20px hsl(335, 91%, 46%, 0.3)',
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-primary flex items-center justify-center"
        >
          <Zap className="w-10 h-10 md:w-14 md:h-14 text-primary-foreground" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-3 font-heading font-semibold text-sm md:text-base"
        >
          AI Engine
        </motion.p>
      </motion.div>

      {/* Output Nodes */}
      {outputNodes.map((node, index) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: node.delay }}
          className="absolute right-4 md:right-8"
          style={{ top: `${25 + index * 25}%` }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, delay: index * 0.5 + 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card p-4 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
              <node.icon className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-sm font-medium hidden md:block">{node.label}</span>
          </motion.div>
        </motion.div>
      ))}

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/30"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
