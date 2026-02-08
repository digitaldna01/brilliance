export default function Aila() {
  return (
    <section className="mx-auto my-20 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-md bg-black p-6 shadow-xl sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl">
                <img
                  src="/images/service/aila-logo.png"
                  alt="Aila logo"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  Aila Financial assistant
                </h3>
                <p className="text-sm text-white/60">
                  Smart Management with Aila App
                </p>
              </div>
            </div>

            <div className="mt-8 flex-1">
              <div className="flex items-center justify-center">
                <div className="relative flex items-center justify-center overflow-hidden rounded-md">
                  <div className="pointer-events-none absolute inset-0">
                    <div className="bg-primary/15 absolute inset-0 scale-10 blur-[60px]" />
                    <img
                      src="/images/service/aila-preview.svg"
                      alt=""
                      className="absolute inset-0 h-full w-full scale-110 object-contain opacity-30 blur-[60px]"
                      aria-hidden="true"
                    />
                  </div>
                  <img
                    src="/images/service/aila-preview.svg"
                    alt="Aila app preview"
                    className="relative z-10 h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=im.aila.aila&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-14 w-full items-center justify-center gap-3 rounded-md border-2 border-white bg-black px-5 py-3 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition-transform duration-200 hover:-translate-y-0.5 sm:w-56"
              >
                <img
                  src="/images/service/playstore-badge.svg"
                  alt=""
                  className="h-6 w-6"
                  aria-hidden="true"
                />
                <span className="flex flex-col leading-tight">
                  <span className="text-[11px] font-semibold text-white uppercase">
                    Get it on
                  </span>
                  <span className="text-base font-semibold">Google Play</span>
                </span>
              </a>
              <a
                href="https://apps.apple.com/us/app/aila-financial-assistant/id6749106417"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-14 w-full items-center justify-center gap-3 rounded-md border-2 border-white bg-black px-5 py-3 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition-transform duration-200 hover:-translate-y-0.5 sm:w-56"
              >
                <img
                  src="/images/service/appstore-badge.svg"
                  alt=""
                  className="h-6 w-6"
                  aria-hidden="true"
                />
                <span className="flex flex-col leading-tight">
                  <span className="text-[11px] font-semibold text-white uppercase">
                    Download on the
                  </span>
                  <span className="text-base font-semibold">App Store</span>
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <article className="rounded-md bg-white p-6 shadow-sm">
              <h4 className="text-[18px] font-semibold text-gray-900">
                Smart Management Made Simple
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Offshore financial products, especially insurance, require
                long-term care even after enrollment. Aila simplifies this
                ongoing management by helping users monitor and handle their
                policies easily.
              </p>
            </article>

            <article className="rounded-md bg-white p-6 shadow-sm">
              <h4 className="text-[18px] font-semibold text-gray-900">
                Transparent Policy Tracking
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Through Aila, you can check whether your policy fulfillment
                ratio has been met, review surrender values, and confirm key
                performance indicators.
              </p>
            </article>

            <article className="rounded-md bg-white p-6 shadow-sm">
              <h4 className="text-[18px] font-semibold text-gray-900">
                All-in-One Access & Control
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Easily update policyholder or beneficiary information, request
                dividend payments, and access other essential services.
              </p>
            </article>

            <article className="rounded-md bg-white p-6 shadow-sm">
              <h4 className="text-[18px] font-semibold text-gray-900">
                Trusted Global Partnership
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                Brilliance partners with Wisdom Global, a Hong Kong-based IFA,
                to deliver reliable, localized financial support through Aila.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
