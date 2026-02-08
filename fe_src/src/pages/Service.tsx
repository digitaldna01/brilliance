import { useEffect, useState } from "react";
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

type ItineraryKey = "1day" | "2day" | "3day";

type ItineraryItem = {
  time: string;
  text: string;
  highlight?: boolean;
};

type ItineraryDay = {
  title: string;
  description: string;
  items: ItineraryItem[];
};

type ItineraryData = {
  title: string;
  subtitle: string;
  days: ItineraryDay[];
};

const itinerary1Day: ItineraryData = {
  title: "1 Day Sample Itinerary",
  subtitle: "Here's what people will experience",
  days: [
    {
      title: "Day 1",
      description: "Arrival & City Introduction",
      items: [
        { time: "09:00", text: "Arrival and briefing" },
        { time: "11:00", text: "Financial institution visit", highlight: true },
        { time: "14:00", text: "Lunch and city walk" },
        { time: "17:00", text: "Harbour view" },
      ],
    },
  ],
};

const itinerary2Day: ItineraryData = {
  title: "1 Night 2 Days Sample Itinerary",
  subtitle: "Here's what people will experience",
  days: [
    {
      title: "Day 1",
      description: "Arrival & City Introduction",
      items: [
        { time: "09:00", text: "Arrival & city intro" },
        { time: "11:00", text: "Visit bank / insurance" },
        { time: "14:00", text: "Lunch" },
        { time: "16:00", text: "Central district" },
      ],
    },
    {
      title: "Day 2",
      description: "Financial Institution Visits & Market Exploration",
      items: [
        { time: "09:30", text: "Financial market exploration" },
        { time: "12:00", text: "Account opening" },
        { time: "15:00", text: "Shopping / free time" },
        { time: "18:00", text: "Departure" },
      ],
    },
  ],
};

const itinerary3Day: ItineraryData = {
  title: "2 Nights 3 Days Sample Itinerary",
  subtitle: "Here's what you will experience",
  days: [
    {
      title: "Day 1",
      description: "Arrival & City Introduction",
      items: [
        { time: "09:00 to 12:00", text: "Departure (Approx. 4 hours)" },
        { time: "15:00", text: "Hotel check-in and rest" },
        { time: "18:30", text: "Dinner" },
        { time: "19:30", text: "Free time or Victoria Harbour night view" },
      ],
    },
    {
      title: "Day 2",
      description: "Financial Institution Visits & Market Exploration",
      items: [
        { time: "07:00", text: "Breakfast or free time" },
        { time: "10:00", text: "Visit bank / Insurance company" },
        { time: "12:00", text: "Lunch" },
        { time: "14:00", text: "Visit Central District" },
        { time: "14:30", text: "Visit Hong Kong Stock Exchange & IFC Mall" },
        { time: "15:00", text: "Account Opening" },
        { time: "18:30", text: "Dinner" },
        { time: "20:00", text: "Free Time" },
      ],
    },
    {
      title: "Day 3",
      description: "City Experience & Departure",
      items: [
        { time: "07:00", text: "Breakfast or free time" },
        {
          time: "08:30",
          text: "Victoria Peak Observatory or Harbor City Shopping Mall",
        },
        { time: "13:00", text: "Departure to Home" },
      ],
    },
  ],
};

const itineraryData: Record<ItineraryKey, ItineraryData> = {
  "1day": itinerary1Day,
  "2day": itinerary2Day,
  "3day": itinerary3Day,
};

const itineraryGallery = [
  "/images/service/itinerary-1.jpg",
  "/images/service/itinerary-2.jpg",
  "/images/service/itinerary-3.jpg",
  "/images/service/itinerary-4.jpg",
  "/images/service/itinerary-5.jpg",
  "/images/service/itinerary-6.jpg",
  "/images/service/itinerary-7.jpg",
];

export default function Service() {
  const heroReveal = useReveal();
  const cardReveal = useReveal({ threshold: 0.2 });
  const [selectedItinerary, setSelectedItinerary] =
    useState<ItineraryKey>("3day");

  const activeItinerary = itineraryData[selectedItinerary];
  const ITEMS_PER_CARD = 4;
  const itineraryCards = activeItinerary.days.flatMap((day, dayIndex) => {
    const chunks: ItineraryItem[][] = [];
    for (let i = 0; i < day.items.length; i += ITEMS_PER_CARD) {
      chunks.push(day.items.slice(i, i + ITEMS_PER_CARD));
    }

    return chunks.map((items, chunkIndex) => ({
      key: `${day.title}-${chunkIndex}`,
      title: day.title,
      description: day.description,
      chunkIndex,
      dayIndex,
      items,
    }));
  });
  const cardCount = itineraryCards.length;
  const displayCards = [...itineraryCards, ...itineraryCards];
  const galleryCards = [...itineraryGallery, ...itineraryGallery];
  const galleryCardDistance = 240;

  const handleItineraryChange = (value: ItineraryKey) => {
    setSelectedItinerary(value);
  };

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
      <section className="mx-auto my-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <TypewriterHeading
              texts={["Financial Tour"]}
              className="text-3xl font-semibold sm:text-4xl lg:text-[60px]"
            />
            <div className="text-secondary-2/70 space-y-2 text-sm leading-relaxed">
              <h3 className="text-secondary-2 text-base font-semibold">
                What is a Financial Tour?
              </h3>
              <p>
                Our finanacial tours take place in Tsim Sha Tsui and Central. We
                tailor the itinerary to fit your scehdule, offering options from
                day trips to 1 to 3 - night stays. The essential part of the
                tour includes visits to financial institutions such as banks and
                insurance companies.
              </p>
              <p>
                Besides finance visits, there are a variety of routes including
                popular Hong Kong tourist attractions, famous restaurants, and
                shopping malls.
              </p>
            </div>
            <ItineraryButtons
              value={selectedItinerary}
              onChange={handleItineraryChange}
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/images/service/contact-us.jpg"
              alt="Contact Us"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-12" key={selectedItinerary}>
          <div className="mb-6">
            <h3 className="text-secondary-2 text-2xl font-semibold sm:text-3xl">
              {activeItinerary.title}
            </h3>
            <p className="text-secondary-2/60 mt-2 text-sm">
              {activeItinerary.subtitle}
            </p>
          </div>

          <div className="overflow-hidden">
            <div
              className="itinerary-marquee flex gap-4"
              style={
                {
                  "--scroll-distance": `${cardCount * 276}px`,
                } as React.CSSProperties
              }
            >
              {displayCards.map((card) => {
                const dayColor =
                  card.dayIndex === 0
                    ? "#FF8450"
                    : card.dayIndex === 1
                      ? "var(--color-primary)"
                      : "#559437";
                const accentIndex = getStableIndex(card.key, card.items.length);

                return (
                  <div
                    key={`${card.key}-${card.dayIndex}`}
                    className="w-[260px] shrink-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                  >
                    <div>
                      {card.chunkIndex === 0 ? (
                        <h4 className="text-secondary-2 text-sm font-semibold">
                          {card.title}
                        </h4>
                      ) : null}
                      {card.chunkIndex === 0 && card.description ? (
                        <p className="text-secondary-2/60 mt-1 text-xs">
                          {card.description}
                        </p>
                      ) : null}
                    </div>
                    <div className="mt-4 space-y-3">
                      {card.items.map((item, index) => (
                        <div
                          key={`${item.time}-${index}`}
                          className="flex gap-3"
                        >
                          <div className="flex flex-col items-center">
                            <span
                              className="h-3 w-3 rounded-full border"
                              style={{
                                borderColor:
                                  index <= accentIndex + 1
                                    ? dayColor
                                    : "#d1d5db",
                                backgroundColor:
                                  index <= accentIndex
                                    ? dayColor
                                    : "transparent",
                                boxShadow:
                                  index === accentIndex ||
                                  index === accentIndex + 1
                                    ? "0 2px 8px rgba(0,0,0,0.15)"
                                    : "none",
                              }}
                            />
                            {index < card.items.length - 1 ? (
                              <span
                                className="mt-1 h-6 w-px"
                                style={{
                                  backgroundColor:
                                    index <= accentIndex ? dayColor : "#e5e7eb",
                                }}
                              />
                            ) : null}
                          </div>
                          <div>
                            <div className="text-secondary-2/80 text-[10px] font-semibold">
                              {item.time}
                            </div>
                            <div className="text-xs">{item.text}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 overflow-hidden">
            <div
              className="itinerary-marquee-right flex gap-4"
              style={
                {
                  "--scroll-distance": `${itineraryGallery.length * galleryCardDistance}px`,
                } as React.CSSProperties
              }
            >
              {galleryCards.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="h-36 w-56 shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                >
                  <img
                    src={src}
                    alt="Financial tour gallery"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
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

type ItineraryButtonsProps = {
  value: ItineraryKey;
  onChange: (value: ItineraryKey) => void;
};

function ItineraryButtons({ value, onChange }: ItineraryButtonsProps) {
  const options: { value: ItineraryKey; label: string }[] = [
    { value: "1day", label: "1 day itinerary" },
    { value: "2day", label: "2 day itinerary" },
    { value: "3day", label: "3 day itinerary" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            type="button"
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`rounded-xl border px-4 py-2 text-xs font-semibold transition-colors ${
              isActive
                ? "border-gray-900 text-gray-900"
                : "text-secondary-2/70 border-gray-200"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

type TypewriterHeadingProps = {
  texts: string[];
  className?: string;
  speedMs?: number;
  pauseMs?: number;
};

function TypewriterHeading({
  texts,
  className,
  speedMs = 140,
  pauseMs = 1200,
}: TypewriterHeadingProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex] ?? "";
    const isComplete = charIndex >= currentText.length;

    const timeout = window.setTimeout(
      () => {
        if (isDeleting) {
          if (charIndex === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          } else {
            setCharIndex((prev) => prev - 1);
          }
          return;
        }

        if (!isComplete) {
          setCharIndex((prev) => prev + 1);
          return;
        }

        setIsDeleting(true);
      },
      isComplete && !isDeleting ? pauseMs : speedMs
    );

    return () => window.clearTimeout(timeout);
  }, [charIndex, isDeleting, pauseMs, speedMs, textIndex, texts]);

  const currentText = texts[textIndex] ?? "";

  return (
    <h2 className={className}>
      {currentText.slice(0, charIndex)}
      <span className="typewriter-caret" aria-hidden="true">
        |
      </span>
    </h2>
  );
}

function getStableIndex(key: string, length: number) {
  if (length <= 1) {
    return 0;
  }

  let hash = 0;
  for (let i = 0; i < key.length; i += 1) {
    hash = (hash * 31 + key.charCodeAt(i)) % 2147483647;
  }

  return hash % (length - 1);
}
