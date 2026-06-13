import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import LayoutWrapper from '@/shared/components/layouts/wrapper/LayoutWrapper';
import { faqData } from '../data/faq-data';

type FAQ = (typeof faqData)[number];

type FAQItemProps = {
  faq: FAQ;
  isOpen: boolean;
  onClick: () => void;
};

const FAQSection = () => {
  const [activeId, setActiveId] = useState<string | null>(faqData[0]?.id ?? null);

  return (
    <section className='w-full py-16 md:py-24 lg:py-[120px]'>
      <LayoutWrapper>
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-center font-[SansPlomb] text-[#1C1B1E] font-normal text-[clamp(32px,6vw,60px)] leading-tight tracking-[0.01em] mb-10 md:mb-14 lg:mb-16">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-2">
            {faqData.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={activeId === faq.id}
                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

const FAQItem = ({ faq, isOpen, onClick }: FAQItemProps) => {
  return (
    <div
      className={`transition-all duration-500 ease-in-out rounded-[20px]  ${
        isOpen ? 'bg-[#F3F2FF]' : 'bg-white '
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-8 py-5 md:py-7 group"
      >
        <span className="text-[#4A494E] text-[16px] md:text-[20px] lg:text-[24px] font-medium tracking-tight">
          Q. {faq.question}
        </span>

        <m.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 text-[#98979D]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </m.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-8 pb-6 md:pb-8 pt-0">
              <p className="text-[#5F5C6D] text-[15px] md:text-[17px] lg:text-[18px] leading-[1.6] max-w-[700px]">
                {faq.answer}
              </p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQSection;
