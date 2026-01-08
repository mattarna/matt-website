'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { useAppStore } from '@/lib/store';
import { X, ArrowLeft, ArrowRight, CheckCircle2, Loader2, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { sendGTMEvent } from '@next/third-parties/google';

interface FormData {
  // Step 1
  fullName: string;
  email: string;
  phonePrefix: string;
  phoneCountry: string;
  phone: string;
  company: string;
  role: string;
  // Step 2
  target: string;
  expertise: string[];
  challenge: string;
  // Step 3
  timeline: string;
  discovery: string;
}

const INITIAL_FORM_DATA: FormData = {
  fullName: '',
  email: '',
  phonePrefix: '+39',
  phoneCountry: 'IT',
  phone: '',
  company: '',
  role: '',
  target: '',
  expertise: [],
  challenge: '',
  timeline: '',
  discovery: '',
};

const COUNTRY_CODES = [
  { code: "+54", country: "AR", flag: "🇦🇷", name: "Argentina" },
  { code: "+43", country: "AT", flag: "🇦🇹", name: "Austria" },
  { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia" },
  { code: "+32", country: "BE", flag: "🇧🇪", name: "Belgium" },
  { code: "+55", country: "BR", flag: "🇧🇷", name: "Brazil" },
  { code: "+1", country: "CA", flag: "🇨🇦", name: "Canada" },
  { code: "+41", country: "CH", flag: "🇨🇭", name: "Switzerland" },
  { code: "+56", country: "CL", flag: "🇨🇱", name: "Chile" },
  { code: "+86", country: "CN", flag: "🇨🇳", name: "China" },
  { code: "+57", country: "CO", flag: "🇨🇴", name: "Colombia" },
  { code: "+420", country: "CZ", flag: "🇨🇿", name: "Czech Republic" },
  { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany" },
  { code: "+45", country: "DK", flag: "🇩🇰", name: "Denmark" },
  { code: "+20", country: "EG", flag: "🇪🇬", name: "Egypt" },
  { code: "+34", country: "ES", flag: "🇪🇸", name: "Spain" },
  { code: "+358", country: "FI", flag: "🇫🇮", name: "Finland" },
  { code: "+33", country: "FR", flag: "🇫🇷", name: "France" },
  { code: "+44", country: "GB", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+30", country: "GR", flag: "🇬🇷", name: "Greece" },
  { code: "+385", country: "HR", flag: "🇭🇷", name: "Croatia" },
  { code: "+36", country: "HU", flag: "🇭🇺", name: "Hungary" },
  { code: "+353", country: "IE", flag: "🇮🇪", name: "Ireland" },
  { code: "+972", country: "IL", flag: "🇮🇱", name: "Israel" },
  { code: "+91", country: "IN", flag: "🇮🇳", name: "India" },
  { code: "+39", country: "IT", flag: "🇮🇹", name: "Italy" },
  { code: "+81", country: "JP", flag: "🇯🇵", name: "Japan" },
  { code: "+82", country: "KR", flag: "🇰🇷", name: "South Korea" },
  { code: "+52", country: "MX", flag: "🇲🇽", name: "Mexico" },
  { code: "+234", country: "NG", flag: "🇳🇬", name: "Nigeria" },
  { code: "+31", country: "NL", flag: "🇳🇱", name: "Netherlands" },
  { code: "+47", country: "NO", flag: "🇳🇴", name: "Norway" },
  { code: "+64", country: "NZ", flag: "🇳🇿", name: "New Zealand" },
  { code: "+48", country: "PL", flag: "🇵🇱", name: "Poland" },
  { code: "+351", country: "PT", flag: "🇵🇹", name: "Portugal" },
  { code: "+40", country: "RO", flag: "🇷🇴", name: "Romania" },
  { code: "+7", country: "RU", flag: "🇷🇺", name: "Russia" },
  { code: "+966", country: "SA", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+46", country: "SE", flag: "🇸🇪", name: "Sweden" },
  { code: "+65", country: "SG", flag: "🇸🇬", name: "Singapore" },
  { code: "+386", country: "SI", flag: "🇸🇮", name: "Slovenia" },
  { code: "+90", country: "TR", flag: "🇹🇷", name: "Turkey" },
  { code: "+380", country: "UA", flag: "🇺🇦", name: "Ukraine" },
  { code: "+971", country: "AE", flag: "🇦🇪", name: "United Arab Emirates" },
  { code: "+1", country: "US", flag: "🇺🇸", name: "United States" },
  { code: "+27", country: "ZA", flag: "🇿🇦", name: "South Africa" },
].sort((a, b) => a.country.localeCompare(b.country));

const ROLES = [
  { en: "CEO / Founder", it: "CEO / Founder" },
  { en: "CTO / IT Director", it: "CTO / IT Director" },
  { en: "Marketing Director", it: "Marketing Director" },
  { en: "Operations Manager", it: "Operations Manager" },
  { en: "Entrepreneur", it: "Imprenditore" },
  { en: "Other", it: "Altro" },
];

const TARGET_OPTIONS = [
  { id: 'company', en: 'For my Company', it: 'Per la mia Azienda' },
  { id: 'personal', en: 'For my Personal Brand', it: 'Per il mio Brand Personale' },
  { id: 'startup', en: 'For a new Startup / MVP', it: 'Per una nuova Startup / MVP' },
];

const EXPERTISE_OPTIONS = [
  { id: 'marketing-strategy', en: 'Marketing Strategy', it: 'Marketing Strategy' },
  { id: 'ai-implementation', en: 'AI Implementation', it: 'AI Implementation' },
  { id: 'mentorship-advisory', en: 'Long-term Advisory', it: 'Advisory a Lungo Termine' },
  { id: 'one-shot-deep-dive', en: 'One-Shot Strategic Deep Dive', it: 'Strategic Deep Dive (One-Shot)' },
];

const TIMELINE_OPTIONS = [
  { id: 'urgent', en: 'Urgent / ASAP', it: 'Urgente / ASAP' },
  { id: '1-3-months', en: 'Within 1-3 months', it: 'Entro 1-3 mesi' },
  { id: '3-6-months', en: '3-6 months', it: '3-6 mesi' },
  { id: 'exploring', en: 'Just exploring', it: 'Sto solo esplorando' },
];

const DISCOVERY_OPTIONS = [
  { id: 'linkedin', en: 'LinkedIn', it: 'LinkedIn' },
  { id: 'newsletter', en: 'AI Espresso Newsletter', it: 'Newsletter AI Espresso' },
  { id: 'referral', en: 'Word of Mouth / Referral', it: 'Passaparola / Referral' },
  { id: 'youtube-social', en: 'YouTube / Other Social', it: 'YouTube / Altri Social' },
  { id: 'other', en: 'Other', it: 'Altro' },
];

export const ContactForm: React.FC = () => {
  const { isContactFormOpen, closeContactForm } = useAppStore();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  
  const t = useTranslations('contactForm');
  const locale = useLocale();

  // Track Form View
  useEffect(() => {
    if (isContactFormOpen) {
      sendGTMEvent({
        event: 'form_view',
        form_id: 'strategic_contact_form',
        form_name: 'Strategic Contact Form'
      });
    }
  }, [isContactFormOpen]);

  // Reset on close
  useEffect(() => {
    if (!isContactFormOpen) {
      const timer = setTimeout(() => {
        setCurrentStep(1);
        setFormData(INITIAL_FORM_DATA);
        setIsSuccess(false);
        setErrors({});
        setIsCountryDropdownOpen(false);
        setHasStarted(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isContactFormOpen]);

  // Handle clicks outside country dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock scroll
  useEffect(() => {
    if (isContactFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isContactFormOpen]);

  const updateField = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    
    // Track form start on first interaction
    if (!hasStarted && value.toString().length > 0) {
      setHasStarted(true);
      sendGTMEvent({
        event: 'form_start',
        form_id: 'strategic_contact_form',
        form_name: 'Strategic Contact Form'
      });
    }

    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const toggleExpertise = (id: string) => {
    const current = formData.expertise;
    if (current.includes(id)) {
      updateField('expertise', current.filter((s) => s !== id));
    } else {
      updateField('expertise', [...current, id]);
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = t('required');
      if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = t('required');
      if (!formData.phone.trim()) newErrors.phone = t('required');
      if (!formData.company.trim()) newErrors.company = t('required');
      if (!formData.role.trim()) newErrors.role = t('required');
    } else if (step === 2) {
      if (!formData.target) newErrors.target = t('required');
      if (formData.expertise.length === 0) newErrors.expertise = t('required');
      if (!formData.challenge.trim() || formData.challenge.length < 20) {
        newErrors.challenge = t('minChars', { count: 20 });
      }
    } else if (step === 3) {
      if (!formData.timeline) newErrors.timeline = t('required');
      if (!formData.discovery) newErrors.discovery = t('required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      sendGTMEvent({
        event: 'form_step_complete',
        form_id: 'strategic_contact_form',
        step_number: currentStep,
        step_name: currentStep === 1 ? 'Personal Info' : 'Challenge'
      });
      setCurrentStep((prev) => Math.min(prev + 1, 3));
      scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      sendGTMEvent({
        event: 'form_error',
        form_id: 'strategic_contact_form',
        step_number: currentStep,
        error_type: 'validation_error'
      });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          phone: `${formData.phonePrefix} ${formData.phone}`,
          locale,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        sendGTMEvent({
          event: 'form_submission_success',
          form_id: 'strategic_contact_form',
          form_name: 'Strategic Contact Form'
        });
        // Auto-redirect to calendar after 2 seconds
        setTimeout(() => {
          window.location.href = 'https://tidycal.com/mattarnaboldi/caffe-virtuale';
        }, 2000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      sendGTMEvent({
        event: 'form_submission_success', // Still track success as it falls back to mailto/redirect
        form_id: 'strategic_contact_form',
        form_name: 'Strategic Contact Form',
        submission_method: 'mailto_fallback'
      });
      // Fallback: Open mailto if API fails
      const subject = encodeURIComponent(`New Strategic Inquiry: ${formData.fullName}`);
      const body = encodeURIComponent(
        `Identity: ${formData.fullName} (${formData.role} @ ${formData.company})\n` +
        `Phone: ${formData.phonePrefix} ${formData.phone}\n` +
        `Target: ${formData.target}\n` +
        `Expertise: ${formData.expertise.join(', ')}\n` +
        `Challenge: ${formData.challenge}\n` +
        `Timeline: ${formData.timeline}\n` +
        `Discovery: ${formData.discovery}`
      );
      window.open(`mailto:hello@matteoarnaboldi.com?subject=${subject}&body=${body}`);
      setIsSuccess(true);
      setTimeout(() => {
        window.location.href = 'https://tidycal.com/mattarnaboldi/caffe-virtuale';
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isContactFormOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeContactForm}
            className="fixed inset-0 z-[500] bg-black/80 backdrop-blur-md"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[500px] md:w-[600px] z-[501] bg-[#030712] border-l border-white/10 shadow-2xl flex flex-col"
          >
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
            </div>

            {/* Header */}
            <div className="relative z-10 p-8 border-b border-white/5">
              <button
                onClick={closeContactForm}
                className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-sm bg-white/5 border border-white/10 text-white hover:bg-accent hover:border-accent transition-all group"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-2">
                {t('title')}
              </h2>
              <p className="text-sm text-white/40 font-mono tracking-wider max-w-[80%]">
                {t('subtitle')}
              </p>

              {/* Progress Indicator */}
              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                    {t('step')} {currentStep} {t('of')} 3
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold">
                    {currentStep === 1 ? t('step1Title') : currentStep === 2 ? t('step2Title') : t('step3Title')}
                  </span>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex-1 h-[2px] bg-white/10 relative overflow-hidden">
                      <motion.div
                        initial={false}
                        animate={{ 
                          width: step <= currentStep ? '100%' : '0%',
                          opacity: step <= currentStep ? 1 : 0
                        }}
                        className="absolute inset-0 bg-accent"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Body */}
            <div 
              ref={scrollContainerRef}
              className="relative z-10 flex-1 overflow-y-auto p-8 custom-scrollbar"
            >
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 bg-accent/20 border border-accent/30 flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tighter text-white mb-4">
                    {t('successTitle')}
                  </h3>
                  <p className="text-white/50 font-mono text-sm max-w-xs leading-relaxed">
                    {t('successMessage')}
                  </p>
                  <div className="mt-8 flex items-center gap-3 text-accent animate-pulse">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Redirecting...</span>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-10 pb-20">
                  {currentStep === 1 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      <FormField label={t('fullName')} error={errors.fullName}>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => updateField('fullName', e.target.value)}
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                        />
                      </FormField>

                      <FormField label={t('email')} error={errors.email}>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          placeholder="john@company.com"
                          className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                        />
                      </FormField>

                      <FormField label={t('phone')} error={errors.phone}>
                        <div className="flex gap-2">
                          <div className="relative w-[130px] flex-shrink-0" ref={countryDropdownRef}>
                            <button
                              type="button"
                              onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                              className="w-full h-full bg-white/5 border border-white/10 px-3 py-4 text-white font-mono text-xs flex items-center justify-between hover:bg-white/10 transition-colors"
                            >
                              <div className="flex items-center gap-2">
                                <img 
                                  src={`https://flagcdn.com/w20/${formData.phoneCountry.toLowerCase()}.png`}
                                  alt=""
                                  className="w-5 h-auto rounded-[1px] opacity-80"
                                />
                                <span className="font-bold">
                                  {formData.phonePrefix}
                                </span>
                              </div>
                              <ChevronDown className={cn("w-3 h-3 text-white/30 transition-transform", isCountryDropdownOpen && "rotate-180")} />
                            </button>

                            <AnimatePresence>
                              {isCountryDropdownOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                  transition={{ duration: 0.2, ease: "easeOut" }}
                                  className="absolute left-0 top-full mt-1 w-[220px] max-h-[300px] bg-[#0a0a14] border border-white/10 shadow-2xl overflow-y-auto z-50 custom-scrollbar"
                                >
                                  {COUNTRY_CODES.map((cc) => (
                                    <button
                                      key={`${cc.code}-${cc.country}`}
                                      type="button"
                                      onClick={() => {
                                        updateField("phonePrefix", cc.code);
                                        updateField("phoneCountry", cc.country);
                                        setIsCountryDropdownOpen(false);
                                      }}
                                      className={cn(
                                        "w-full px-4 py-3 text-left font-mono text-[11px] flex items-center gap-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0",
                                        formData.phoneCountry === cc.country ? "bg-accent/20 text-white" : "text-white/60"
                                      )}
                                    >
                                      <img 
                                        src={`https://flagcdn.com/w20/${cc.country.toLowerCase()}.png`}
                                        alt=""
                                        className="w-5 h-auto rounded-[1px] opacity-80"
                                      />
                                      <span className="font-bold min-w-[35px]">{cc.code}</span>
                                      <span className="text-white/40 truncate">{cc.name}</span>
                                    </button>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateField('phone', e.target.value.replace(/[^0-9]/g, ''))}
                            placeholder={t('phonePlaceholder')}
                            className="flex-1 bg-white/5 border border-white/10 px-4 py-4 text-white font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                      </FormField>

                      <FormField label={t('company')} error={errors.company}>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => updateField('company', e.target.value)}
                          placeholder="Acme Inc."
                          className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                        />
                      </FormField>

                      <FormField label={t('role')} error={errors.role}>
                        <div className="relative">
                          <select
                            value={formData.role}
                            onChange={(e) => updateField('role', e.target.value)}
                            className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white font-mono text-sm focus:outline-none focus:border-accent appearance-none cursor-pointer"
                          >
                            <option value="" disabled className="bg-[#030712]">{t('selectRole')}</option>
                            {ROLES.map((role) => (
                              <option key={role.en} value={role.en} className="bg-[#030712]">
                                {locale === 'it' ? role.it : role.en}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                        </div>
                      </FormField>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
                      {/* New: Target Question */}
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">
                          {t('target')} *
                        </label>
                        <div className="grid grid-cols-1 gap-2">
                          {TARGET_OPTIONS.map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => updateField('target', opt.id)}
                              className={cn(
                                "p-4 text-left border transition-all duration-300",
                                formData.target === opt.id
                                  ? "bg-accent/10 border-accent text-white"
                                  : "bg-white/5 border-white/10 text-white/40 hover:border-white/20"
                              )}
                            >
                              <span className="font-bold uppercase tracking-tighter text-sm">
                                {locale === 'it' ? opt.it : opt.en}
                              </span>
                            </button>
                          ))}
                        </div>
                        {errors.target && <p className="mt-2 text-red-500 font-mono text-[10px] uppercase">{errors.target}</p>}
                      </div>

                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">
                          {t('expertise')} *
                        </label>
                        <p className="text-[10px] text-accent font-mono uppercase tracking-widest mb-4">
                          {t('expertiseHint')}
                        </p>
                        <div className="space-y-2">
                          {EXPERTISE_OPTIONS.map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => toggleExpertise(opt.id)}
                              className={cn(
                                "w-full p-4 text-left border transition-all duration-300 flex items-center justify-between group",
                                formData.expertise.includes(opt.id)
                                  ? "bg-accent/10 border-accent text-white"
                                  : "bg-white/5 border-white/10 text-white/40 hover:border-white/20"
                              )}
                            >
                              <span className="font-bold uppercase tracking-tighter text-base">
                                {locale === 'it' ? opt.it : opt.en}
                              </span>
                              <div className={cn(
                                "w-5 h-5 border flex items-center justify-center transition-all",
                                formData.expertise.includes(opt.id)
                                  ? "bg-accent border-accent"
                                  : "border-white/10 group-hover:border-white/30"
                              )}>
                                {formData.expertise.includes(opt.id) && <ArrowRight className="w-3 h-3 text-white" />}
                              </div>
                            </button>
                          ))}
                        </div>
                        {errors.expertise && <p className="mt-2 text-red-500 font-mono text-[10px] uppercase">{errors.expertise}</p>}
                      </div>

                      <FormField label={t('challenge')} error={errors.challenge}>
                        <textarea
                          value={formData.challenge}
                          onChange={(e) => updateField('challenge', e.target.value)}
                          placeholder={t('challengePlaceholder')}
                          rows={4}
                          className="w-full bg-white/5 border border-white/10 p-4 text-white font-mono text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                        />
                        <div className="flex justify-between items-center mt-3">
                          <p className={cn(
                            "font-mono text-[10px] uppercase tracking-wider transition-colors duration-300",
                            formData.challenge.length >= 20 ? "text-emerald-400 font-bold" : "text-accent"
                          )}>
                            {formData.challenge.length >= 20 ? t('challengeOk') : t('challengeHint')}
                          </p>
                          <span className={cn(
                            "font-mono text-[10px]",
                            formData.challenge.length >= 20 ? "text-emerald-400" : "text-white/20"
                          )}>
                            {formData.challenge.length}/20+
                          </span>
                        </div>
                      </FormField>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
                          {t('timeline')} *
                        </label>
                        <div className="grid grid-cols-1 gap-2">
                          {TIMELINE_OPTIONS.map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => updateField('timeline', opt.id)}
                              className={cn(
                                "p-4 text-left border transition-all duration-300",
                                formData.timeline === opt.id
                                  ? "bg-accent/10 border-accent text-white"
                                  : "bg-white/5 border-white/10 text-white/40 hover:border-white/20"
                              )}
                            >
                              <span className="font-bold uppercase tracking-tighter text-sm">
                                {locale === 'it' ? opt.it : opt.en}
                              </span>
                            </button>
                          ))}
                        </div>
                        {errors.timeline && <p className="mt-2 text-red-500 font-mono text-[10px] uppercase">{errors.timeline}</p>}
                      </div>

                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
                          {t('discovery')} *
                        </label>
                        <p className="text-[10px] text-accent font-mono uppercase tracking-widest mb-4">
                          {t('discoveryHint')}
                        </p>
                        <div className="grid grid-cols-1 gap-2">
                          {DISCOVERY_OPTIONS.map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => updateField('discovery', opt.id)}
                              className={cn(
                                "p-4 text-left border transition-all duration-300",
                                formData.discovery === opt.id
                                  ? "bg-accent/10 border-accent text-white"
                                  : "bg-white/5 border-white/10 text-white/40 hover:border-white/20"
                              )}
                            >
                              <span className="font-bold uppercase tracking-tighter text-sm">
                                {locale === 'it' ? opt.it : opt.en}
                              </span>
                            </button>
                          ))}
                        </div>
                        {errors.discovery && <p className="mt-2 text-red-500 font-mono text-[10px] uppercase">{errors.discovery}</p>}
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </div>

            {/* Footer Actions */}
            {!isSuccess && (
              <div className="relative z-10 p-8 border-t border-white/5 bg-[#030712]">
                <div className="flex gap-4">
                  {currentStep > 1 && (
                    <button
                      onClick={handleBack}
                      className="flex-1 py-5 border border-white/10 text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white/5 transition-colors flex items-center justify-center gap-3"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      {t('back')}
                    </button>
                  )}
                  
                  {currentStep < 3 ? (
                    <button
                      onClick={handleNext}
                      className="flex-[2] py-5 bg-accent text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#2a3c91] transition-colors flex items-center justify-center gap-3 shadow-xl shadow-accent/20"
                    >
                      {t('continue')}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="flex-[2] py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-3 shadow-2xl disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          {t('sending')}
                        </>
                      ) : (
                        <>
                          {t('submit')}
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const FormField: React.FC<{ 
  label: string; 
  error?: string; 
  hint?: string;
  children: React.ReactNode 
}> = ({ label, error, hint, children }) => (
  <div className="space-y-3">
    <label className="block font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
      {label} *
    </label>
    {children}
    {hint && <p className="text-[10px] font-mono text-white/20 italic tracking-wider">{hint}</p>}
    {error && <p className="text-red-500 font-mono text-[10px] uppercase tracking-widest font-bold">{error}</p>}
  </div>
);
