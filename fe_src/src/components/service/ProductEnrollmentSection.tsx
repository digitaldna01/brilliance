import { useReveal } from "@/hooks/useReveal";

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

export default function ProductEnrollmentSection() {
  return (
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
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      <img
        src={step.imageSrc}
        alt={step.title}
        className="mx-auto h-24 w-24 rounded-2xl object-contain sm:h-28 sm:w-28 lg:h-32 lg:w-32"
        loading="lazy"
      />
      <div className="mx-auto max-w-60 space-y-2 text-left">
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
