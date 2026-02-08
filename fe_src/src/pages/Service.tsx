import { Check } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const serviceHighlights = [
  "Product Enrollment Guide",
  "Financial Tour",
  "Local Account Opening Support",
];

type EnrollmentStep = {
  imageSrc: string;
  title: string;
  description: string;
};

const enrollmentSteps: EnrollmentStep[] = [
  {
    imageSrc: "/images/service/step-1.svg",
    title: "Customer Inquiry",
    description:
      "Customers initiate contact to express interest and ask initial questions.",
  },
  {
    imageSrc: "/images/service/step-2.svg",
    title: "Consultation",
    description:
      "In-depth discussion to understand customer needs and provide advice.",
  },
  {
    imageSrc: "/images/service/step-3.svg",
    title: "Product Design & Selection",
    description:
      "Tailoring and choosing financial products that best fit customer goals.",
  },
  {
    imageSrc: "/images/service/step-4.svg",
    title: "Signing of Application Form",
    description:
      "Customer reviews and signs the necessary application documents.",
  },
  {
    imageSrc: "/images/service/step-5.svg",
    title: "Account Opening",
    description:
      "Assistance with opening local or neccessary accounts as part of the process.",
  },
  {
    imageSrc: "/images/service/step-6.svg",
    title: "Submission of Application Form",
    description:
      "Submission of required forms including personal details and income verification.",
  },
  {
    imageSrc: "/images/service/step-7.svg",
    title: "Premium Payment",
    description:
      "Payment is made through multiple methods: \n1. Direct payment at the insurance company's office. \n2. Transfer via bank mobile application. \n3. Bank-to-insurance company account transfer. ",
  },
  {
    imageSrc: "/images/service/step-8.svg",
    title: "Receipt of Policy Documents",
    description:
      "Customers receive policy documents by mail, including a 21-day withdrawal period.",
  },
];

export default function Service() {
  const heroReveal = useReveal();
  const cardReveal = useReveal({ threshold: 0.2 });

  return (
    <main className="min-h-screen bg-white">
      <section
        ref={heroReveal.ref}
        className={`mx-auto max-w-6xl px-4 pt-28 pb-40 duration-800 ease-out sm:px-6 lg:px-8 ${
          heroReveal.isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-37.5 opacity-0"
        }`}
      >
        <div
          className={`mb-0 flex flex-col gap-4 md:flex-row md:items-end md:justify-between`}
        >
          <h1 className="text-3xl sm:text-4xl">Brilliance Services</h1>
          <p className="text-xs font-medium tracking-wide sm:text-sm">
            A Journey into the New Financial Landscape
          </p>
        </div>

        <div className="relative mt-2">
          <div className={`overflow-hidden rounded-2xl shadow-lg`}>
            <img
              src="/images/services-hero.jpg"
              alt="Brilliance services hero"
              className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[420px]"
            />
          </div>

          <div
            ref={cardReveal.ref}
            className={`mx-auto mt-4 w-full max-w-4xl rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-1000 ease-out lg:absolute lg:bottom-[-28px] lg:left-1/2 lg:mt-0 lg:-translate-x-1/2 ${
              cardReveal.isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-37.5 opacity-0"
            }`}
          >
            <div className="grid gap-4 px-4 py-4 sm:grid-cols-3 sm:gap-0">
              {serviceHighlights.map((item, index) => (
                <div
                  key={item}
                  className={`text-secondary-2 flex items-center gap-2 text-sm font-medium transition-all duration-[600ms] ease-out last:border-r-0 sm:justify-center sm:border-r sm:border-gray-200 ${
                    cardReveal.isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-25 opacity-0"
                  }`}
                  style={{
                    transitionDelay: cardReveal.isVisible
                      ? `${800 + index * 120}ms`
                      : "0ms",
                  }}
                >
                  <span className="bg-primary/10 text-primary flex h-5 w-5 items-center justify-center rounded-full">
                    <Check size={14} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-20 max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-15 text-center">
          <h2 className="text-secondary-2 text-2xl font-semibold sm:text-3xl">
            Product Enrollment Guide
          </h2>
          <p className="text-secondary-2/70 mt-2 text-sm sm:text-base">
            How a Product Enrollment Works
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-10 lg:grid-cols-4">
          {enrollmentSteps.map((step, index) => (
            <EnrollmentCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}

type EnrollmentCardProps = {
  step: EnrollmentStep;
  index: number;
};

function EnrollmentCard({ step, index }: EnrollmentCardProps) {
  const reveal = useReveal({ threshold: 0.2 });
  const duration = 800 + index * 200;
  const delay = index * 120;

  return (
    <div
      ref={reveal.ref}
      className={`flex flex-col gap-4 transition-all ease-out ${
        reveal.isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-25 opacity-0"
      }`}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    >
      <img
        src={step.imageSrc}
        alt={step.title}
        className="mx-auto h-24 w-24 rounded-2xl object-contain sm:h-28 sm:w-28 lg:h-32 lg:w-32"
        loading="lazy"
      />
      <div className="mx-auto max-w-[240px] space-y-2 text-left">
        <h3 className="text-secondary-2 text-sm font-semibold">
          {index + 1}. {step.title}
        </h3>
        <p className="text-secondary-2/70 text-xs leading-relaxed whitespace-pre-line">
          {step.description}
        </p>
      </div>
    </div>
  );
}
