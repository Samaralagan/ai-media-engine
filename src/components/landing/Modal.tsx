import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  // Handle ESC key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] glass-card overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border bg-card">
              <h2 id="modal-title" className="font-heading text-xl font-bold">
                {title}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)] scrollbar-thin">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const PrivacyPolicyContent = () => (
  <div className="prose prose-sm max-w-none">
    <p className="text-muted-foreground mb-4">
      <strong>Last Updated: January 2025</strong>
    </p>

    <h3 className="font-heading font-semibold text-lg mt-6 mb-3">1. Information We Collect</h3>
    <p className="text-muted-foreground mb-4">
      TechKeyMedia.info collects information you provide directly, including name, email, company details, 
      and content preferences. We also automatically collect usage data, device information, and analytics 
      to improve our AI-powered services.
    </p>

    <h3 className="font-heading font-semibold text-lg mt-6 mb-3">2. How We Use Your Information</h3>
    <p className="text-muted-foreground mb-4">
      We use collected data to provide and improve our AI content automation services, personalize your 
      experience, communicate with you about updates, and ensure platform security.
    </p>

    <h3 className="font-heading font-semibold text-lg mt-6 mb-3">3. AI and Data Processing</h3>
    <p className="text-muted-foreground mb-4">
      Our AI systems process your content to provide automation services. Your data is used to train 
      and improve our AI models in an anonymized, aggregated manner. You retain ownership of all 
      content you create or upload.
    </p>

    <h3 className="font-heading font-semibold text-lg mt-6 mb-3">4. Data Security</h3>
    <p className="text-muted-foreground mb-4">
      We implement enterprise-grade security measures including encryption, access controls, and 
      regular security audits to protect your data.
    </p>

    <h3 className="font-heading font-semibold text-lg mt-6 mb-3">5. Your Rights</h3>
    <p className="text-muted-foreground mb-4">
      You have the right to access, correct, delete, or export your data. Contact us at 
      privacy@techkeymedia.info to exercise these rights.
    </p>

    <h3 className="font-heading font-semibold text-lg mt-6 mb-3">6. Cookies and Tracking</h3>
    <p className="text-muted-foreground mb-4">
      We use essential cookies and optional analytics cookies. You can manage cookie preferences 
      through your browser settings.
    </p>

    <h3 className="font-heading font-semibold text-lg mt-6 mb-3">7. Contact Us</h3>
    <p className="text-muted-foreground">
      For privacy-related inquiries, contact us at privacy@techkeymedia.info or through our 
      contact form.
    </p>
  </div>
);

export const TermsOfServiceContent = () => (
  <div className="prose prose-sm max-w-none">
    <p className="text-muted-foreground mb-4">
      <strong>Last Updated: January 2025</strong>
    </p>

    <h3 className="font-heading font-semibold text-lg mt-6 mb-3">1. Acceptance of Terms</h3>
    <p className="text-muted-foreground mb-4">
      By accessing TechKeyMedia.info, you agree to these Terms of Service. If you disagree with 
      any part, please discontinue use of our platform.
    </p>

    <h3 className="font-heading font-semibold text-lg mt-6 mb-3">2. Service Description</h3>
    <p className="text-muted-foreground mb-4">
      TechKeyMedia.info provides AI-powered content creation, media automation, and analytics 
      services. Features may vary by subscription plan and are subject to change with notice.
    </p>

    <h3 className="font-heading font-semibold text-lg mt-6 mb-3">3. User Accounts</h3>
    <p className="text-muted-foreground mb-4">
      You are responsible for maintaining account security and all activities under your account. 
      Notify us immediately of unauthorized access.
    </p>

    <h3 className="font-heading font-semibold text-lg mt-6 mb-3">4. Content Ownership</h3>
    <p className="text-muted-foreground mb-4">
      You retain ownership of content you create or upload. By using our services, you grant us 
      a license to process your content for service delivery and improvement.
    </p>

    <h3 className="font-heading font-semibold text-lg mt-6 mb-3">5. Acceptable Use</h3>
    <p className="text-muted-foreground mb-4">
      You agree not to use our services for illegal activities, spam, malware distribution, or 
      any purpose that violates applicable laws or third-party rights.
    </p>

    <h3 className="font-heading font-semibold text-lg mt-6 mb-3">6. Subscription and Billing</h3>
    <p className="text-muted-foreground mb-4">
      Paid subscriptions are billed according to your selected plan. Cancellation policies and 
      refund terms are detailed in your account settings.
    </p>

    <h3 className="font-heading font-semibold text-lg mt-6 mb-3">7. Limitation of Liability</h3>
    <p className="text-muted-foreground mb-4">
      Our services are provided "as is." We are not liable for indirect, incidental, or 
      consequential damages arising from service use.
    </p>

    <h3 className="font-heading font-semibold text-lg mt-6 mb-3">8. Changes to Terms</h3>
    <p className="text-muted-foreground mb-4">
      We may update these terms with notice. Continued use after changes constitutes acceptance.
    </p>

    <h3 className="font-heading font-semibold text-lg mt-6 mb-3">9. Contact</h3>
    <p className="text-muted-foreground">
      For questions about these terms, contact legal@techkeymedia.info.
    </p>
  </div>
);
