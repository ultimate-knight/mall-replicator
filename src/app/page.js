"use client";



const overviewStats = [
  { value: "42M+", label: "Annual Visitors" },
  { value: "520+", label: "Stores & Attractions" },
  { value: "5.6M", label: "Square Feet" },
  { value: "$2B+", label: "Economic Impact" },
];

const retailStats = [
  { value: "96%", label: "Occupancy Rate" },
  { value: "520+", label: "Stores & Attractions" },
  { value: "$850", label: "Avg Spend Per Visit" },
  { value: "3.1hr", label: "Average Dwell Time" },
];

const luxuryStats = [
  { value: "$145K+", label: "Avg HHI Luxury Shopper" },
  { value: "4.2hr", label: "Avg Dwell Time" },
  { value: "38%", label: "YoY Sales Growth" },
  { value: "92%", label: "Brand Awareness Lift" },
];

const diningStats = [
  { value: "60+", label: "Dining Concepts" },
  { value: "$38", label: "Average Check Size" },
  { value: "85%", label: "Visitors Who Dine" },
  { value: "18%", label: "Revenue from F&B" },
];

const entertainmentStats = [
  { value: "7", label: "Major Attractions" },
  { value: "7 Acres", label: "Indoor Theme Park" },
  { value: "30+", label: "Rides & Experiences" },
  { value: "12M+", label: "Entertainment Visits" },
];

const eventsStats = [
  { value: "400+", label: "Annual Events" },
  { value: "5,000+", label: "Max Venue Capacity" },
  { value: "3B+", label: "Media Impressions" },
  { value: "200+", label: "Brand Activations" },
];

function StatGrid({ items }) {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
        >
          <p className="text-4xl font-semibold md:text-5xl">{item.value}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-sm uppercase tracking-[0.35em] text-[#c9a26b]">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-black text-white">

      <section
        id="overview"
        className="relative flex min-h-screen snap-start items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/gerfug.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-24 md:px-10">
          <div className="max-w-4xl">
            <SectionLabel>North America’s retail capital</SectionLabel>
            <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] md:text-8xl">
              Mall of <span className="text-[#c9a26b]">America</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-2xl">
              The nation’s largest retail, entertainment, and experiential destination.
              5.6 million square feet of opportunity for brands, sponsors, and event partners.
            </p>
          </div>
          <StatGrid items={overviewStats} />

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-lg bg-[#c9a26b] px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#ddb57b]"
            >
              Partner With Us
            </a>
            <a
              href="#why-moa"
              className="rounded-lg border border-white/30 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#c9a26b] hover:text-[#c9a26b]"
            >
              Explore the Opportunity
            </a>
          </div>

          
        </div>
      </section>

      <section
        id="why-moa"
        className="relative flex min-h-screen snap-start items-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/legerd.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-24 md:px-10">
          <div className="max-w-4xl">
            <SectionLabel>The Opportunity</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-7xl">
              Why Mall of <span className="text-[#c9a26b]">America</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-2xl">
              A commercial platform reaching 42 million visitors annually across the heart of America.
              This is not just retail square footage. It is a regional draw, a tourism engine, and a business platform built for visibility, conversion, and scale.
            </p>
          </div>

          <StatGrid items={overviewStats} />

          {/* <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <SectionLabel>Strategic Location</SectionLabel>
              <h3 className="mt-4 text-3xl font-semibold md:text-5xl">
                The Crossroads of <span className="text-[#c9a26b]">America</span>
              </h3>
              <p className="mt-6 text-base leading-8 text-gray-300 md:text-lg">
                Located in Bloomington, Minnesota, Mall of America sits at the intersection of major interstate corridors and is directly connected to Minneapolis–Saint Paul International Airport via light rail. Within a 150-mile radius, more than 8 million people can reach the property in under three hours.
              </p>
              <p className="mt-4 text-base leading-8 text-gray-400 md:text-lg">
                As a top tourist destination, it draws visitors from all 50 states and more than 100 countries annually, supported by seven connected hotels and 3,000+ nearby rooms.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Direct light rail to MSP Airport",
                  "Major interstate access",
                  "7 connected hotels, 3,000+ rooms",
                  "Visitors from 100+ countries",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#c9a26b]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <SectionLabel>Market Reach</SectionLabel>
              <div className="mt-6 space-y-8">
                {[
                  ["3.9M", "Metro Area"],
                  ["8M+", "Drive Market"],
                  ["42M+", "Annual Visitors"],
                  ["Top-3", "Tourist Destination"],
                ].map(([value, label]) => (
                  <div key={label} className="border-b border-white/10 pb-6 last:border-b-0">
                    <p className="text-4xl font-semibold">{value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-400">{label}</p>
                  </div>
                ))}
              </div> */}
            {/* </div> */}
          {/* </div> */}
        </div>
      </section>

      <section
        id="retail"
        className="relative flex min-h-screen snap-start items-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/mall-video5.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-24 md:px-10">
          <div className="max-w-4xl">
            <SectionLabel>Retail</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold md:text-7xl">
              Retail <span className="text-[#c9a26b]">Reimagined</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-2xl">
              520+ world-class stores, exceptional dwell time, and strong spend per visit position Mall of America as a retail ecosystem built for visibility, scale, and measurable commercial performance.
            </p>
          </div>

          <StatGrid items={retailStats} />

          {/* <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <SectionLabel>Tenant Mix</SectionLabel>
            <h3 className="mt-4 text-3xl font-semibold md:text-5xl">
              Curated for <span className="text-[#c9a26b]">Every Audience</span>
            </h3>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {retailMix.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-3xl font-semibold">{item.value}</p>
                    <span className="rounded-full border border-[#c9a26b]/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#e6c38b]">
                      {item.growth}
                    </span>
                  </div>
                  <p className="mt-4 text-lg font-medium text-[#c9a26b]">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <SectionLabel>Leasing Inquiry</SectionLabel>
              <h3 className="mt-3 text-3xl font-semibold md:text-5xl">
                Claim Your <span className="text-[#c9a26b]">Address</span>
              </h3>
              <p className="mt-4 text-base leading-8 text-gray-400 md:text-lg">
                From a 200 sq ft pop-up to an 80,000 sq ft flagship, the leasing team can tailor the right footprint and terms for your brand.
              </p>
            </div>
            <a
              href="#contact"
              className="rounded-lg bg-[#c9a26b] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#ddb57b]"
            >
              Inquire About Leasing
            </a>
          </div> */}
        </div>
      </section>

      <section
        id="luxury"
        className="relative flex min-h-screen snap-start items-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/mal-luxury1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-24 md:px-10">
          <div className="max-w-4xl">
            <SectionLabel>Luxury</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold md:text-7xl">
              The Luxury <span className="text-[#c9a26b]">Collection</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-2xl">
              An architecturally distinct wing featuring the world’s most prestigious brands, elevated service, and measurable growth for tenants seeking both prestige and performance.
            </p>
          </div>

          <StatGrid items={luxuryStats} />

          {/* <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <SectionLabel>Elevated Experience</SectionLabel>
              <h3 className="mt-4 text-3xl font-semibold md:text-5xl">
                Where <span className="text-[#c9a26b]">Prestige</span> Meets Performance
              </h3>
              <p className="mt-6 text-base leading-8 text-gray-300 md:text-lg">
                Marble finishes, private shopping suites, and dedicated valet create a world-class environment that positions brands at the pinnacle of the property experience. Existing content highlights 38% year-over-year growth and a 92% brand awareness lift for new tenants.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <SectionLabel>VIP Services</SectionLabel>
              <div className="mt-6 grid gap-5">
                {[
                  "Private Shopping Suites with dedicated stylists and premium hospitality",
                  "Personal Stylists curating cross-brand looks",
                  "Dedicated Valet and arrival experience",
                  "White-glove customer journey designed for high-spend audiences",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-7 text-gray-300 md:text-base">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c9a26b]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section
        id="dining"
        className="relative flex min-h-screen snap-start items-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/mall-dine1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-24 md:px-10">
          <div className="max-w-4xl">
            <SectionLabel>Dining & Lifestyle</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold md:text-7xl">
              A Culinary <span className="text-[#c9a26b]">Destination</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-2xl">
              More than 60 dining experiences transform food into a primary reason to visit. Dining extends dwell time, broadens audience appeal, and turns the property into a lifestyle destination rather than a stop on a shopping trip.
            </p>
          </div>

          <StatGrid items={diningStats} />

          {/* <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <SectionLabel>Dining Strategy</SectionLabel>
              <h3 className="mt-4 text-3xl font-semibold md:text-5xl">
                Every Palate, <span className="text-[#c9a26b]">Every Occasion</span>
              </h3>
              <div className="mt-8 grid gap-4">
                {diningPillars.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-7 text-gray-300 md:text-base">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c9a26b]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <SectionLabel>F&B Leasing</SectionLabel>
              <h3 className="mt-4 text-3xl font-semibold md:text-5xl">
                Build Your Concept <span className="text-[#c9a26b]">Here</span>
              </h3>
              <p className="mt-6 text-base leading-8 text-gray-300 md:text-lg">
                From celebrity-chef destinations to fast-casual flagships, the platform supports anchor pads, food-hall stalls, and seasonal pop-up kitchens.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-lg bg-[#c9a26b] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#ddb57b]"
              >
                Inquire About F&B
              </a>
            </div>
          </div> */}
        </div>
      </section>

      <section
        id="entertainment"
        className="relative flex min-h-screen snap-start items-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/mall-entertain1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-24 md:px-10">
          <div className="max-w-4xl">
            <SectionLabel>Entertainment & Attractions</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold md:text-7xl">
              Beyond <span className="text-[#c9a26b]">Retail</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-2xl">
              World-class attractions generate footfall no standalone retailer could create on its own. Entertainment is not an add-on here — it is one of the core engines of repeat visitation and spend.
            </p>
          </div>

          <StatGrid items={entertainmentStats} />

          {/* <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <SectionLabel>Anchor Attractions</SectionLabel>
            <h3 className="mt-4 text-3xl font-semibold md:text-5xl">
              Experiences That <span className="text-[#c9a26b]">Drive Traffic</span>
            </h3>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {entertainmentHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#c9a26b]">{item.meta}</p>
                  <p className="mt-3 text-xl font-semibold">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <SectionLabel>The Entertainment Effect</SectionLabel>
            <h3 className="mt-4 text-3xl font-semibold md:text-5xl">
              Attractions Are the <span className="text-[#c9a26b]">Engine</span>
            </h3>
            <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300 md:text-lg">
              Visitors who engage with at least one attraction spend significantly more on retail and dining. That means entertainment is not just audience engagement — it is a commercial multiplier for the entire property.
            </p>
          </div> */}
        </div>
      </section>

      <section
        id="events"
        className="relative flex min-h-screen snap-start items-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/mall-event1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-24 md:px-10">
          <div className="max-w-4xl">
            <SectionLabel>Events & Activations</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold md:text-7xl">
              A Global <span className="text-[#c9a26b]">Stage</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-2xl">
              More than 400 annual events transform Mall of America into a live platform for culture, commerce, sponsorship, celebrity moments, and brand storytelling.
            </p>
          </div>

          <StatGrid items={eventsStats} />

          {/* <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <SectionLabel>Venue Portfolio</SectionLabel>
            <h3 className="mt-4 text-3xl font-semibold md:text-5xl">
              Spaces Built for <span className="text-[#c9a26b]">Impact</span>
            </h3>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {eventVenues.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#c9a26b]">{item.meta}</p>
                  <p className="mt-3 text-xl font-semibold">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <SectionLabel>Business Outcome</SectionLabel>
            <p className="text-base leading-8 text-gray-300 md:text-lg">
              This is not just space to rent. It is a platform for launches, cultural programming, activations, sponsorship, performing arts, exposition, and broadcast-scale moments.
            </p>
          </div> */}
        </div>
      </section>

      <section
        id="contact"
        className="relative flex min-h-screen snap-start items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,107,0.18),_transparent_35%),linear-gradient(to_bottom,_#080808,_#000)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-24 md:px-10">
          <div className="max-w-4xl">
            <SectionLabel>Let’s Build Together</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold md:text-7xl">
              Partner With <span className="text-[#c9a26b]">Mall of America</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-2xl">
              Whether you’re looking to lease space, sponsor experiences, or book world-class venues, the opportunity starts here. Existing CTA content already supports retail leasing, brand sponsorship, and event bookings as the core paths.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-2xl font-semibold">Retail Leasing</p>
              <p className="mt-4 text-sm leading-7 text-gray-400">
                Flagship stores, inline retail, pop-ups, and kiosk opportunities across 5.6M sq ft.
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#c9a26b]">
                leasing@mallofamerica.com
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-2xl font-semibold">Brand Sponsorship</p>
              <p className="mt-4 text-sm leading-7 text-gray-400">
                Title partnerships, experiential activations, and co-branded programming reaching 42M+ visitors.
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#c9a26b]">
                partnerships@mallofamerica.com
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-2xl font-semibold">Event Bookings</p>
              <p className="mt-4 text-sm leading-7 text-gray-400">
                Concerts, product launches, corporate events, and venue-led experiences across multiple formats.
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#c9a26b]">
                events@mallofamerica.com
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:commercial@mallofamerica.com"
              className="rounded-lg bg-[#c9a26b] px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#ddb57b]"
            >
              Start the Conversation
            </a>
            <a
              href="#why-moa"
              className="rounded-lg border border-white/30 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#c9a26b] hover:text-[#c9a26b]"
            >
              See the Data
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}