import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LayoutWrapper from '@/shared/components/layouts/wrapper/LayoutWrapper';
import { faqData } from '../data/faq-data';

type FAQ = (typeof faqData)[number];

type FAQItemProps = {
  faq: FAQ;
  isOpen: boolean;
  onClick: () => void;
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='w-full min-h-screen py-[120px] '>
      <LayoutWrapper>
        <div className="max-w-[900px] mx-auto">
          {/* Heading */}
          <h1 className="text-center font-[SansPlomb] text-[#1C1B1E] font-normal text-[60px] leading-tight tracking-[0.01em] mb-16">
            Frequently Asked Questions
          </h1>

          {/* FAQ List */}
          <div className="flex flex-col gap-2">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={activeIndex === index}
                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
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
        onClick={onClick}
        className="w-full flex items-center justify-between text-left px-8 py-7 group"
      >
        <span className="text-[#4A494E] text-[24px] font-medium tracking-tight">
          Q. {faq.question}
        </span>

        {/* Arrow Icon */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#98979D]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 pt-0">
              <p className="text-[#5F5C6D] text-[18px] leading-[1.6] max-w-[700px]">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQSection;
