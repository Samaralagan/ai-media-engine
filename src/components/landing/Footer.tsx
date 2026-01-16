import { useState } from 'react';
import { Sparkles, Twitter, Linkedin, Github } from 'lucide-react';
import { Modal, PrivacyPolicyContent, TermsOfServiceContent } from './Modal';

export const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="container-wide">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-heading font-bold text-lg">
                  TechKeyMedia
                </span>
              </a>
              <p className="text-primary-foreground/70 text-sm max-w-sm mb-4">
                Empowering organizations with AI-first content and media automation. 
                Transform your content strategy with intelligent automation.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#demo" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    Request Demo
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setPrivacyOpen(true)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setTermsOpen(true)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    Terms & Conditions
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} TechKeyMedia.info. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              AI Content & Media Automation Platform
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} title="Privacy Policy">
        <PrivacyPolicyContent />
      </Modal>

      {/* Terms of Service Modal */}
      <Modal isOpen={termsOpen} onClose={() => setTermsOpen(false)} title="Terms & Conditions">
        <TermsOfServiceContent />
      </Modal>
    </>
  );
};
