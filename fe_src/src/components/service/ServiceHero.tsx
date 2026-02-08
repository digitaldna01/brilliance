import { Check } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const serviceHighlights = [
  "Product Enrollment Guide",
  "Financial Tour",
  "Local Account Opening Support",
];

export default function ServiceHero() {
  const heroReveal = useReveal();
  const cardReveal = useReveal({ threshold: 0.2 });

  return (
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
            className="h-65 w-full object-cover sm:h-90 lg:h-105"
          />
        </div>

        <div
          ref={cardReveal.ref}
          className={`mx-auto mt-4 w-full max-w-4xl rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-1000 ease-out lg:absolute lg:-bottom-7 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2 ${
            cardReveal.isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-37.5 opacity-0"
          }`}
        >
          <div className="grid gap-4 px-4 py-4 sm:grid-cols-3 sm:gap-0">
            {serviceHighlights.map((item, index) => (
              <div
                key={item}
                className={`text-secondary-2 flex items-center gap-2 text-sm font-medium transition-all duration-600 ease-out last:border-r-0 sm:justify-center sm:border-r sm:border-gray-200 ${
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
  );
}
