import { useState, type ChangeEvent, type FormEvent } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import BigButton from "@/shared/components/ui/Animated/Button/BigButton";
import Copy from "@/shared/components/ui/Animated/textAnim/Copy";
import { ROUTES } from "@/shared/constants/routes";
import { createContact } from "@/services/contact-services";

type FormState = {
  name: string;
  email: string;
  message: string;
  projectType: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  message: "",
  projectType: "",
};

const PROJECT_TYPES = [
  "Brand identity",
  "Product / UX design",
  "Web & visuals",
  "Social media design",
  "Mentorship",
  "Something else",
];

const SOCIAL_LINKS = [
  { label: "Instagram", handle: "@kushal.designs" },
  { label: "LinkedIn", handle: "/in/kushaldai" },
  { label: "Behance", handle: "/kushaldai" },
  { label: "Dribbble", handle: "/kushaldai" },
  { label: "WhatsApp", handle: "Chat directly" },
];

const META_ITEMS = [
  "Based in Kathmandu, Nepal",
  "Available for new projects",
  "Avg reply: under 48h",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_EMAIL = "kushal.design055@gmail.com";

const REVEAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function ContactHero() {
  return (
    <div className="relative mx-auto w-full p-3 md:p-[24px]">
      <section className="relative flex flex-col justify-end overflow-hidden rounded-[20px] md:rounded-[24px] bg-[#F3D8DC] p-5 pt-24 md:p-8 md:pt-32 lg:p-10 lg:pt-[140px] min-h-[560px] md:min-h-[640px] lg:min-h-[700px]">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="flex flex-col items-start gap-3 lg:gap-2">
            <Copy animateOnScroll={false}>
              <p className="text-[12px] md:text-[13px] uppercase tracking-[0.18em] text-[#A24E55]">
                Let&rsquo;s start something
              </p>
            </Copy>
            <Copy animateOnScroll={false} delay={0.1}>
              <h1 className="-ml-0.5 lg:-ml-3.5 font-[SansPlomb] text-[clamp(56px,12vw,180px)] leading-[84%] lg:leading-[80%] tracking-[0.01em] text-[#7362C9]">
                Let&rsquo;s talk, <br />
                shall we?
              </h1>
            </Copy>
          </div>
          <Copy animateOnScroll={false} delay={0.2}>
            <p className="max-w-full lg:max-w-[420px] xl:max-w-[480px] text-[14px] md:text-[16px] lg:text-[18px] leading-[140%] lg:leading-[120%] font-normal tracking-[0.01em] text-[#1E1E1E]">
              Whether it&rsquo;s a brand from scratch, a product that needs
              sharper thinking, or just a hello — drop a line. I read every
              message and reply within a day or two from Kathmandu.
            </p>
          </Copy>
        </div>

        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: REVEAL_EASE }}
          className="mt-10 hidden md:flex flex-wrap gap-3 md:gap-6 text-[12px] md:text-[14px] tracking-[0.08em] uppercase text-[#5F5C6D]"
        >
          {META_ITEMS.map((item, i) => (
            <span key={item} className="flex items-center gap-3 md:gap-6">
              <span>{item}</span>
              {i < META_ITEMS.length - 1 && (
                <span aria-hidden className="text-[#5F5C6D]/60">
                  ·
                </span>
              )}
            </span>
          ))}
        </m.div>
      </section>
    </div>
  );
}

function ContactBody() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (status === "success") setStatus("idle");
  };

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) {
      next.name = "Please tell me what to call you.";
    }
    if (!EMAIL_REGEX.test(form.email.trim())) {
      next.email = "That email doesn't look quite right.";
    }
    if (form.message.trim().length < 10) {
      next.message =
        "A few more words would help me reply usefully (min 10 characters).";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    if (!validate()) return;

    setStatus("submitting");
    try {
      await createContact({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        projectType: form.projectType || undefined,
      });
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (err) {
      if (import.meta.env.DEV) {
        console.error("createContact failed", err);
      }
      setStatus("error");
    }
  };

  const submitLabel: Record<Status, string> = {
    idle: "Send message",
    submitting: "Sending...",
    success: "Sent — thank you!",
    error: "Try again",
  };

  const inputBase =
    "w-full bg-white border rounded-[14px] px-4 md:px-5 py-3 md:py-4 text-[16px] text-[#1C1B1E] placeholder:text-[#98979D] focus:outline-2 focus:outline-[#5C4ABB] focus:outline-offset-2 focus:border-transparent transition-colors";

  const errorBorder = "border-[#C24A4A]";
  const defaultBorder = "border-[#D9D9DE]";

  return (
    <section className="py-12 md:py-16 lg:py-[120px]">
      <LayoutWrapper>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: REVEAL_EASE }}
          className="mb-12 md:mb-16 lg:mb-20 max-w-[720px]"
        >
          <p className="text-[12px] md:text-[14px] tracking-[0.12em] uppercase text-[#5F5C6D] mb-4">
            Get in touch
          </p>
          <Copy animateOnScroll={false}>
            <h2 className="font-[SansPlomb] text-[clamp(32px,5vw,56px)] leading-[100%] tracking-[0.01em] text-[#1C1B1E] mb-5">
              Tell me about your project
            </h2>
          </Copy>
          <p className="text-[#5F5C6D] max-w-[560px] text-[15px] md:text-[16px] leading-[150%]">
            Fill in a few details and I&rsquo;ll get back to you with next
            steps, a quick scope, and a calendar invite if it makes sense.
          </p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Form column */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: REVEAL_EASE }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-6"
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-[14px] text-[#5F5C6D] tracking-[0.02em]"
                >
                  Your name <span className="text-[#5C4ABB]">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Aarya Shrestha"
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={
                    errors.name ? "contact-name-error" : undefined
                  }
                  className={`${inputBase} ${
                    errors.name ? errorBorder : defaultBorder
                  }`}
                />
                {errors.name && (
                  <p
                    id="contact-name-error"
                    className="text-[#C24A4A] text-[13px]"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-[14px] text-[#5F5C6D] tracking-[0.02em]"
                >
                  Email address <span className="text-[#5C4ABB]">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@studio.com"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={
                    errors.email ? "contact-email-error" : undefined
                  }
                  className={`${inputBase} ${
                    errors.email ? errorBorder : defaultBorder
                  }`}
                />
                {errors.email && (
                  <p
                    id="contact-email-error"
                    className="text-[#C24A4A] text-[13px]"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Project type */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-project"
                  className="text-[14px] text-[#5F5C6D] tracking-[0.02em]"
                >
                  What&rsquo;s it about?
                </label>
                <div className="relative">
                  <select
                    id="contact-project"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className={`${inputBase} ${defaultBorder} appearance-none pr-12 cursor-pointer`}
                  >
                    <option value="">Pick one — optional</option>
                    {PROJECT_TYPES.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <svg
                    aria-hidden
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#5F5C6D]"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M2 4.5L7 9.5L12 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-[14px] text-[#5F5C6D] tracking-[0.02em]"
                >
                  Tell me a bit more <span className="text-[#5C4ABB]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Timeline, vibe, links to anything you love. The more the merrier."
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                  className={`${inputBase} ${
                    errors.message ? errorBorder : defaultBorder
                  } resize-none min-h-[160px]`}
                />
                {errors.message && (
                  <p
                    id="contact-message-error"
                    className="text-[#C24A4A] text-[13px]"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Status panels */}
              <div className="mt-2 min-h-[60px]">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <m.div
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: REVEAL_EASE }}
                      className="rounded-[16px] border border-[#CFCDE4] bg-[#F3F2FF] p-5 md:p-6"
                      role="status"
                      aria-live="polite"
                    >
                      <p className="font-[SansPlomb] text-[20px] md:text-[24px] text-[#1C1B1E] mb-2">
                        Message received.
                      </p>
                      <p className="text-[#5F5C6D] text-[15px] leading-[150%] mb-4">
                        Thanks for reaching out. I&rsquo;ll get back to you
                        within 48 hours — usually sooner. In the meantime, feel
                        free to peek at recent work.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:gap-6">
                        <Link
                          to={ROUTES.WORK_PAGE}
                          className="text-[#5C4ABB] text-[15px] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-[#5C4ABB] focus-visible:outline-offset-4 rounded-sm"
                        >
                          See recent work →
                        </Link>
                        <button
                          type="button"
                          onClick={() => setStatus("idle")}
                          className="text-[#5F5C6D] text-[14px] text-left underline underline-offset-4 hover:text-[#1C1B1E] focus-visible:outline-2 focus-visible:outline-[#5C4ABB] focus-visible:outline-offset-4 rounded-sm"
                        >
                          Send another message
                        </button>
                      </div>
                    </m.div>
                  ) : (
                    <m.div
                      key="submit"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: REVEAL_EASE }}
                      className="flex flex-col gap-4"
                    >
                      {status === "error" && (
                        <p
                          role="alert"
                          className="text-[#C24A4A] text-[14px] leading-[150%]"
                        >
                          Something went sideways on our end. Please try again,
                          or email{" "}
                          <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="underline underline-offset-4 hover:text-[#1C1B1E]"
                          >
                            {CONTACT_EMAIL}
                          </a>{" "}
                          directly.
                        </p>
                      )}
                      <m.button
                        type="submit"
                        disabled={status === "submitting"}
                        whileHover={
                          status === "submitting"
                            ? undefined
                            : { scale: 1.02 }
                        }
                        whileTap={
                          status === "submitting"
                            ? undefined
                            : { scale: 0.98 }
                        }
                        transition={{ duration: 0.2 }}
                        className="rounded-[100px] border inline-flex items-center justify-center gap-[10px] w-full max-w-[292px] sm:w-[292px] h-[48px] bg-[#5E4FC4] text-white border-[#5E4FC4] hover:bg-[#5E4FC4]/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-[#5C4ABB] focus-visible:outline-offset-4"
                        aria-busy={status === "submitting"}
                      >
                        <span>{submitLabel[status]}</span>
                        <svg
                          aria-hidden
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="stroke-current"
                        >
                          <path
                            d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </m.button>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </m.div>

          {/* Info column */}
          <m.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: REVEAL_EASE }}
            className="lg:col-span-5 lg:sticky lg:top-[120px] lg:self-start"
          >
            <div className="rounded-[20px] border border-[#CFCDE4] bg-[#F3F2FF] p-6 md:p-8 lg:p-10">
              <p className="text-[12px] tracking-[0.12em] uppercase text-[#5F5C6D] mb-3">
                Direct line
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block font-[SansPlomb] text-[clamp(22px,3vw,32px)] leading-[110%] text-[#1C1B1E] break-words hover:text-[#5C4ABB] focus-visible:outline-2 focus-visible:outline-[#5C4ABB] focus-visible:outline-offset-4 rounded-sm transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="mt-3 text-[#5F5C6D] text-[14px] leading-[150%]">
                Best for briefs, quotes, and longer threads.
              </p>

              <div className="border-t border-[#D9D9DE] my-8" />

              <p className="text-[12px] tracking-[0.12em] uppercase text-[#5F5C6D] mb-4">
                Find me around
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                {SOCIAL_LINKS.map((s) => (
                  <li key={s.label}>
                    <span
                      aria-label={`${s.label} link — coming soon`}
                      className="flex items-center justify-between border-b border-[#D9D9DE] py-3 last:border-b-0 text-[#5F5C6D]"
                    >
                      <span className="flex flex-col">
                        <span className="text-[14px] text-[#1C1B1E]">
                          {s.label}
                        </span>
                        <span className="text-[13px] text-[#5F5C6D]">
                          {s.handle}
                        </span>
                      </span>
                      <svg
                        aria-hidden
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="text-[#9897A3]"
                      >
                        <path
                          d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-[#D9D9DE] my-8" />

              <p className="text-[12px] tracking-[0.12em] uppercase text-[#5F5C6D] mb-3">
                Office hours
              </p>
              <p className="text-[#1C1B1E] text-[15px] leading-[150%]">
                Mon to Fri, 10:00 – 18:00 NPT. Replies on weekends are slower
                but they do happen.
              </p>
            </div>
          </m.aside>
        </div>
      </LayoutWrapper>
    </section>
  );
}

function ContactFooterCTA() {
  return (
    <section className="pb-16 md:pb-24 lg:pb-[120px]">
      <LayoutWrapper>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: REVEAL_EASE }}
          className="max-w-[760px] mx-auto text-center"
        >
          <p className="text-[12px] md:text-[13px] tracking-[0.12em] uppercase text-[#5F5C6D] mb-4">
            Prefer a quick hello?
          </p>
          <h3 className="font-[SansPlomb] text-[clamp(28px,4vw,48px)] leading-[105%] text-[#1C1B1E] mb-4">
            Skip the form — say hi on email.
          </h3>
          <p className="text-[#5F5C6D] max-w-[520px] mx-auto text-[15px] md:text-[16px] leading-[150%]">
            Sometimes a two-line email is all it takes. I&rsquo;m friendly,
            promise.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8">
            <BigButton
              variant="primary"
              href={`mailto:${CONTACT_EMAIL}`}
              showArrow
            >
              Email Kushal
            </BigButton>
            <BigButton variant="outline" to={ROUTES.WORK_PAGE} showArrow>
              Browse the work
            </BigButton>
          </div>
        </m.div>
      </LayoutWrapper>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactBody />
      <ContactFooterCTA />
    </div>
  );
}
