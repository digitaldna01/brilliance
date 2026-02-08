import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

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

export default function FinancialTourSection() {
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
              day trips to 1 to 3 - night stays. The essential part of the tour
              includes visits to financial institutions such as banks and
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
              } as CSSProperties
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
                  className="w-65 shrink-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
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
                      <div key={`${item.time}-${index}`} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <span
                            className="h-3 w-3 rounded-full border"
                            style={{
                              borderColor:
                                index <= accentIndex + 1 ? dayColor : "#d1d5db",
                              backgroundColor:
                                index <= accentIndex ? dayColor : "transparent",
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
              } as CSSProperties
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
