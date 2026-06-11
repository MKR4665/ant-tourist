import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaArrowRight,
  FaBus,
  FaCalendarCheck,
  FaCarSide,
  FaCheckCircle,
  FaClock,
  FaGooglePlay,
  FaHeadset,
  FaMapMarkedAlt,
  FaRegCalendarAlt,
  FaRoute,
  FaShieldAlt,
  FaShuttleVan,
  FaStar,
  FaTicketAlt,
  FaWhatsapp,
} from 'react-icons/fa'
import FigmaNavbar from '../components/figma/FigmaNavbar'
import FigmaFooter from '../components/figma/FigmaFooter'
import FloatingCTA from '../components/ui/FloatingCTA'
import busImage from '../assets/tttttt6.jpg'
import delhiImage from '../assets/delhi.jpg'
import destJaipur from '../assets/figma/dest_jaipur.png'
import destAgra from '../assets/figma/dest_agra.png'
import destChandigarh from '../assets/figma/dest_chandigarh.png'
import destManali from '../assets/figma/dest_manali.png'
import mapImage from '../assets/map.png'

const POPULAR_ROUTES = [
  {
    title: 'Delhi to Jaipur Bus Rental',
    image: destJaipur,
    duration: '5 Night 2 Days',
    price: 'Rs 25,000',
    popular: true,
  },
  {
    title: 'Delhi to Agra Bus Rental',
    image: destAgra,
    duration: '5 Night 2 Days',
    price: 'Rs 25,000',
  },
  {
    title: 'Delhi to Chandigarh Bus Rental',
    image: destChandigarh,
    duration: '5 Night 2 Days',
    price: 'Rs 25,000',
  },
  {
    title: 'Delhi to Manali Bus Rental',
    image: destManali,
    duration: '5 Night 2 Days',
    price: 'Rs 25,000',
  },
]

const PREMIUM_SERVICES = [
  {
    icon: FaBus,
    title: 'Rent Bus',
    copy: 'Premium AC buses for weddings, corporate travel, school trips, family functions, and group holidays.',
    href: '/send-enquiry',
  },
  {
    icon: FaCarSide,
    title: 'Rent Car',
    copy: 'Comfortable sedans, SUVs, and luxury cars for city rides, airport transfers, and outstation journeys.',
    href: '/rent-car',
  },
  {
    icon: FaShuttleVan,
    title: 'Rent Traveller',
    copy: 'Tempo travellers and mini vans for compact groups that want more space, comfort, and luggage room.',
    href: '/rent-traveller',
  },
  {
    icon: FaTicketAlt,
    title: 'Book Bus Ticket',
    copy: 'Fast bus ticket booking support for popular routes from Delhi NCR to major north India destinations.',
    href: '/bus-ticket',
  },
]

const APPROACH_STEPS = [
  {
    icon: FaMapMarkedAlt,
    title: 'Share Your Route',
    copy: 'Tell us the pickup point, destination, travel date, group size, and preferred bus type.',
  },
  {
    icon: FaCalendarCheck,
    title: 'Get a Clear Plan',
    copy: 'Our team maps the route, estimates travel time, and shares a transparent package quote.',
  },
  {
    icon: FaBus,
    title: 'Travel With Support',
    copy: 'Verified drivers, clean buses, and trip assistance keep the full journey simple and dependable.',
  },
]

const WHY_CHOOSE = [
  {
    icon: FaShieldAlt,
    title: 'Verified Fleet',
    copy: 'Well-maintained AC buses and coaches checked before every outstation tour.',
  },
  {
    icon: FaClock,
    title: 'On-Time Pickup',
    copy: 'Reliable reporting from Noida, Delhi, Gurgaon, Ghaziabad, Faridabad, and NCR locations.',
  },
  {
    icon: FaHeadset,
    title: 'Trip Support',
    copy: 'Assistance before and during the tour for route changes, stops, and booking details.',
  },
  {
    icon: FaRoute,
    title: 'Custom Routes',
    copy: 'Plan religious tours, hill trips, Rajasthan routes, corporate outings, and family vacations.',
  },
]

const FAQS = [
  {
    question: 'Can I customize a bus tour route?',
    answer: 'Yes. You can share your pickup, destination, stopovers, travel dates, and group size. We will plan a custom route and quote.',
  },
  {
    question: 'Are toll, parking, and driver allowance included?',
    answer: 'The quote is shared transparently before confirmation. Any toll, parking, night halt, or allowance details are mentioned clearly.',
  },
  {
    question: 'Which buses are available for tours?',
    answer: 'We provide mini buses, AC coaches, luxury coaches, Volvo buses, and tempo travellers depending on group size and route.',
  },
  {
    question: 'Can I book a tour from Delhi NCR?',
    answer: 'Yes. We support pickups across Delhi, Noida, Greater Noida, Gurgaon, Faridabad, Ghaziabad, and nearby NCR locations.',
  },
  {
    question: 'How do I confirm a bus tour package?',
    answer: 'Send an enquiry or message us on WhatsApp. Our team will confirm availability, final route, price, and booking details.',
  },
]

const ROUTE_LINKS = [
  'Delhi to Ayodhya Bus Rental',
  'Delhi to Varanasi Bus Rental',
  'Delhi to Khatu Shyam Bus Rental',
  'Delhi to Salasar Balaji Bus Rental',
  'Delhi to Vaishno Devi (Katra) Bus Rental',
  'Delhi to Manali Bus Rental',
  'Delhi to Shimla Bus Rental',
  'Delhi to Mussoorie Bus Rental',
  'Delhi to Nainital Bus Rental',
  'Delhi to Ranikhet Bus Rental',
  'Delhi to Jim Corbett Bus Rental',
  'Delhi to Dehradun Bus Rental',
  'Delhi to Srinagar Bus Rental',
  'Delhi to Jaipur Bus Rental',
  'Delhi to Jodhpur Bus Rental',
  'Delhi to Udaipur Bus Rental',
  'Delhi to Jaisalmer Bus Rental',
  'Delhi to Bikaner Bus Rental',
]

function RouteCard({ route }) {
  const navigate = useNavigate()

  return (
    <article className="overflow-hidden rounded-[12px] bg-white shadow-[0_12px_28px_rgba(25,28,30,0.08)]">
      <div className="relative h-48 overflow-hidden">
        <img src={route.image} alt={route.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
        {route.popular ? (
          <span className="absolute right-4 top-4 rounded-full bg-[#748e36] px-3 py-1 text-[12px] font-bold text-white">
            Popular
          </span>
        ) : null}
      </div>

      <div className="p-6">
        <h3 className="text-[16px] font-bold leading-7 text-[#4d4d4d]">{route.title}</h3>
        <p className="mt-1 flex items-center gap-2 text-[14px] text-[#4d4d4d]/50">
          <FaRegCalendarAlt className="text-[12px]" />
          {route.duration}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-[#748e36] pt-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-[#4d4d4d]">Starting From</p>
            <p className="text-[18px] font-black text-[#4d4d4d]">{route.price}</p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/send-enquiry')}
            className="rounded-[12px] bg-[#748e36] px-4 py-2 text-[14px] font-bold text-[#f1f5f9] transition-colors hover:bg-[#63792e]"
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  )
}

export default function BusTourPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#eaeaea] text-[#4d4d4d]">
      <FigmaNavbar />

      <main>
        <section className="relative overflow-hidden bg-[#191c1e] px-5 py-16 text-white md:px-10 lg:px-[70px] lg:pb-40 lg:pt-14">
          <img src={busImage} alt="Bus tour coach" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,28,30,0.92),rgba(25,28,30,0.54),rgba(25,28,30,0.25))]" />

          <div className="relative mx-auto flex max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[620px]">
              <p className="inline-flex rounded-full bg-white/15 px-4 py-2 text-[12px] font-black uppercase tracking-[0.18em] text-[#d7ec9a]">
                Group Bus Tours
              </p>
              <h1 className="mt-5 text-[42px] font-black leading-[1.05] md:text-[64px]">
                Bus Tour with ANT
              </h1>
              <p className="mt-5 max-w-[560px] text-[17px] leading-8 text-white/80">
                Plan comfortable group journeys from Delhi NCR to Jaipur, Agra, Manali, Chandigarh, Ayodhya, Varanasi, and more.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/send-enquiry')}
                  className="inline-flex items-center gap-2 rounded-[12px] bg-[#748e36] px-7 py-3 text-[15px] font-bold text-white transition-colors hover:bg-[#63792e]"
                >
                  Book a Tour <FaArrowRight className="text-[13px]" />
                </button>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[12px] border-2 border-white px-7 py-3 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>

            <div className="grid w-full max-w-[430px] grid-cols-2 gap-3 rounded-[16px] border border-white/15 bg-white/10 p-4 backdrop-blur">
              {[
                ['10k+', 'Happy travelers'],
                ['24/7', 'Travel support'],
                ['AC', 'Clean buses'],
                ['NCR', 'Easy pickup'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[12px] bg-white/12 p-4">
                  <p className="text-[28px] font-black text-[#d7ec9a]">{value}</p>
                  <p className="mt-1 text-[13px] text-white/75">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[rgba(116,142,54,0.1)] px-5 py-14 md:px-8 lg:py-24">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-[32px] font-black leading-none text-[#4d4d4d] md:text-[36px]">Popular Destination</h2>
                <p className="mt-3 text-[16px] text-[#4d4d4d]/80">Top destinations frequently chosen for Bus rentals</p>
              </div>
              <button
                type="button"
                onClick={() => navigate('/send-enquiry')}
                className="w-fit rounded-[12px] border-2 border-[#748e36] px-6 py-2 text-[16px] font-bold text-[#748e36] transition-colors hover:bg-[#748e36] hover:text-white"
              >
                Explore All Routes
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {POPULAR_ROUTES.map((route) => (
                <RouteCard key={route.title} route={route} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eaeaea] px-5 py-16 md:px-8">
          <div className="mx-auto max-w-[1280px]">
            <header className="text-center">
              <h2 className="text-[32px] font-black text-[#4d4d4d] md:text-[40px]">Our Premium Services</h2>
              <p className="mx-auto mt-3 max-w-[700px] text-[16px] leading-7 text-[#4d4d4d]/75">
                Book your bus tickets, rent bus, rent car, rent traveller with ANT Travel for reliable travel support.
              </p>
            </header>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {PREMIUM_SERVICES.map((service) => {
                const Icon = service.icon
                return (
                  <article key={service.title} className="rounded-[12px] bg-white p-7 shadow-[0_12px_28px_rgba(25,28,30,0.08)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[12px] bg-[rgba(116,142,54,0.12)] text-[#748e36]">
                      <Icon className="text-[24px]" />
                    </div>
                    <h3 className="mt-6 text-[22px] font-black text-[#4d4d4d]">{service.title}</h3>
                    <p className="mt-3 text-[14px] leading-7 text-[#4d4d4d]/70">{service.copy}</p>
                    <button
                      type="button"
                      onClick={() => navigate(service.href)}
                      className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-[#748e36]"
                    >
                      Book Now <FaArrowRight className="text-[12px]" />
                    </button>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 md:px-8">
          <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[13px] font-black uppercase tracking-[0.22em] text-[#748e36]">Our Visionary Approach</p>
              <h2 className="mt-3 text-[38px] font-black leading-tight text-[#4d4d4d] md:text-[56px]">
                Your Journey, Our Priority.
              </h2>
              <p className="mt-5 text-[16px] leading-8 text-[#4d4d4d]/75">
                We make group travel practical: clear route planning, clean vehicles, trained drivers, and responsive support from booking to drop-off.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {APPROACH_STEPS.map((step, index) => {
                const Icon = step.icon
                return (
                  <article key={step.title} className="rounded-[12px] border border-[#e0e7cf] bg-[#fbfcf8] p-6">
                    <span className="text-[12px] font-black text-[#748e36]">0{index + 1}</span>
                    <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#748e36] text-white">
                      <Icon />
                    </div>
                    <h3 className="mt-5 text-[18px] font-black text-[#4d4d4d]">{step.title}</h3>
                    <p className="mt-3 text-[14px] leading-6 text-[#4d4d4d]/70">{step.copy}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#eaeaea] px-5 py-16 md:px-8">
          <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="overflow-hidden rounded-[12px] bg-white shadow-[0_16px_42px_rgba(25,28,30,0.1)]">
              <img src={mapImage} alt="Route map" className="h-[320px] w-full object-cover md:h-[420px]" />
            </div>
            <div>
              <h2 className="text-[34px] font-black text-[#4d4d4d] md:text-[44px]">Why Choose Us</h2>
              <p className="mt-3 text-[16px] leading-8 text-[#4d4d4d]/75">
                ANT Travel combines dependable vehicles, route expertise, and practical support for city tours, hill trips, religious travel, and long-distance group routes.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {WHY_CHOOSE.map((item) => {
                  const Icon = item.icon
                  return (
                    <article key={item.title} className="rounded-[12px] bg-white p-5 shadow-[0_10px_24px_rgba(25,28,30,0.07)]">
                      <Icon className="text-[22px] text-[#748e36]" />
                      <h3 className="mt-3 text-[17px] font-black text-[#4d4d4d]">{item.title}</h3>
                      <p className="mt-2 text-[13px] leading-6 text-[#4d4d4d]/70">{item.copy}</p>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#eaeaea] px-5 py-16 md:px-8 lg:py-24">
          <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[24px] bg-white px-6 py-14 shadow-[0_18px_50px_rgba(25,28,30,0.08)] md:px-12 lg:relative lg:min-h-[528px] lg:px-[63px] lg:py-0">
            <div className="relative z-10 max-w-[651px] lg:pt-[130px]">
              <h2 className="max-w-[651px] text-[30px] font-semibold leading-[1.15] text-[#4d4d4d] md:text-[36px] md:leading-10">
                Get 10% Off Discount on Your First Booking with ANT App
              </h2>
              <p className="mt-8 max-w-[520px] text-[16px] leading-7 text-[#4d4d4d]/60">
                Book your bus tickets, rent bus, rent car, rent traveller with the ANT Travel app and enjoy an exclusive 10% discount on your booking.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  type="button"
                  className="inline-flex h-12 items-center gap-3 rounded-[12px] bg-[#748e36] px-6 text-[16px] font-bold text-white transition-colors hover:bg-[#63792e]"
                >
                  <FaGooglePlay className="text-[21px]" />
                  Google Play
                </button>
                <button
                  type="button"
                  className="inline-flex h-12 items-center gap-3 rounded-[12px] bg-[#748e36] px-6 text-[16px] font-bold text-white transition-colors hover:bg-[#63792e]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-[6px] border-[1.5px] border-white text-[11px] font-bold leading-none">
                    ios
                  </span>
                  App Store
                </button>
              </div>
            </div>

            <div className="relative mt-12 flex min-h-[360px] justify-center lg:absolute lg:bottom-[57px] lg:right-[59px] lg:mt-0 lg:h-[436px] lg:w-[366px]">
              <div className="absolute bottom-0 right-0 h-[207px] w-[216px] rounded-full bg-[rgba(116,142,54,0.12)] blur-[32px]" />
              <div className="relative h-[406px] w-[197px] rotate-[6.68deg] rounded-[34px] border-[8px] border-[#191c1e] bg-[#191c1e] shadow-[0_26px_60px_rgba(25,28,30,0.26)]">
                <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-[#191c1e]" />
                <div className="h-full overflow-hidden rounded-[25px] bg-[#f5f7ef]">
                  <div className="bg-[#748e36] px-4 pb-7 pt-9 text-white">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">ANT Travel</p>
                    <h3 className="mt-2 text-[23px] font-black leading-7">Book your ride</h3>
                    <p className="mt-2 text-[11px] leading-4 text-white/80">Bus, car, traveller and ticket bookings in one place.</p>
                  </div>
                  <div className="space-y-3 p-4">
                    {['Rent Bus', 'Rent Car', 'Rent Traveller'].map((label) => (
                      <div key={label} className="flex items-center gap-3 rounded-[14px] bg-white p-3 shadow-[0_8px_18px_rgba(25,28,30,0.08)]">
                        <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[rgba(116,142,54,0.12)] text-[#748e36]">
                          <FaBus className="text-[14px]" />
                        </span>
                        <div>
                          <p className="text-[12px] font-black text-[#4d4d4d]">{label}</p>
                          <p className="text-[10px] text-[#4d4d4d]/55">10% app offer</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 md:px-8">
          <div className="mx-auto max-w-[960px]">
            <header className="text-center">
              <h2 className="text-[32px] font-black text-[#4d4d4d] md:text-[40px]">Frequently Asked Questions</h2>
              <p className="mt-3 text-[15px] text-[#4d4d4d]/70">Quick answers before you book a bus tour package.</p>
            </header>
            <div className="mt-9 space-y-4">
              {FAQS.map((faq, index) => (
                <details key={faq.question} className="group rounded-[12px] border border-[#dce4cb] bg-[#fbfcf8] p-5" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-black text-[#4d4d4d]">
                    {faq.question}
                    <span className="text-[#748e36] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-[14px] leading-7 text-[#4d4d4d]/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[rgba(116,142,54,0.1)] px-5 py-16 md:px-8">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-[32px] font-black text-[#4d4d4d] md:text-[40px]">Popular Route Links</h2>
                <p className="mt-2 text-[15px] text-[#4d4d4d]/75">Explore more bus rental destinations from Delhi NCR.</p>
              </div>
              <FaCheckCircle className="hidden text-[34px] text-[#748e36] md:block" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ROUTE_LINKS.map((route) => (
                <button
                  key={route}
                  type="button"
                  onClick={() => navigate('/send-enquiry')}
                  className="flex items-center justify-between rounded-[12px] bg-white px-5 py-4 text-left text-[15px] font-bold text-[#4d4d4d] shadow-[0_8px_20px_rgba(25,28,30,0.06)] transition-colors hover:text-[#748e36]"
                >
                  {route}
                  <FaArrowRight className="text-[12px] text-[#748e36]" />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#191c1e] px-5 py-16 text-white md:px-8">
          <img src={delhiImage} alt="Delhi travel" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#191c1e]/75" />
          <div className="relative mx-auto max-w-[900px] text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#748e36]">
              <FaStar />
            </div>
            <h2 className="mt-5 text-[34px] font-black md:text-[44px]">Ready for your next bus tour?</h2>
            <p className="mx-auto mt-3 max-w-[640px] text-[16px] leading-8 text-white/75">
              Get a transparent quote for your group, route, and travel dates.
            </p>
            <button
              type="button"
              onClick={() => navigate('/send-enquiry')}
              className="mt-8 inline-flex items-center gap-2 rounded-[12px] bg-[#748e36] px-8 py-3 text-[15px] font-bold text-white transition-colors hover:bg-[#63792e]"
            >
              Get Tour Quote <FaArrowRight className="text-[13px]" />
            </button>
          </div>
        </section>
      </main>

      <FigmaFooter />
      <FloatingCTA />
    </div>
  )
}
