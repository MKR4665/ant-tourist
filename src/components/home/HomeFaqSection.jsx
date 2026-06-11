import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const FAQ_ITEMS = [
  {
    question: 'How do I cancel my booking and get a refund?',
    answer:
      'If your booking is eligible under our cancellation policy, the refund will be processed to your original payment method within 5-7 business days. Please note that cancellation charges may apply depending on the time of cancellation and the booking terms. For further assistance, you can contact our customer support team.',
  },
  {
    question: 'Can I track my bus or rental vehicle in real-time?',
    answer:
      'Yes. Most vehicles include GPS tracking and our support team can share live trip updates during your journey when required.',
  },
  {
    question: 'What documents are required for car rentals?',
    answer:
      'For car rental confirmations, we usually require a valid government ID, travel details, and contact information. For corporate bookings, company GST and billing details may also be requested.',
  },
  {
    question: 'Are there any hidden charges in vehicle rentals?',
    answer:
      'No hidden charges. Pricing is shared transparently before confirmation, including base fare, driver allowance, toll, parking, and applicable taxes as per trip type.',
  },
  {
    question: 'Do you provide corporate travel solutions?',
    answer:
      'Yes. We provide dedicated corporate transport for employee movement, events, airport transfers, and intercity trips with centralized support and invoicing.',
  },
]

export default function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-white px-4 py-16 md:px-6 md:pb-[62px] md:pt-[78px]">
      <div className="mx-auto w-full max-w-[864px]">
        <div className="text-center">
          <h2 className="text-[30px] font-black leading-9 text-[#4d4d4d]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-[482px] text-[16px] font-normal leading-6 text-[#4d4d4d]/60">
            Everything you need to know about{' '}
            <span className="font-bold text-[#789736]">Ant Travel</span> services.
          </p>
          <div className="mx-auto mt-5 h-[6px] w-20 rounded-full bg-[#748E36]" />
        </div>

        <div className="mt-[70px] space-y-[19px]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <article
                key={item.question}
                className={`overflow-hidden border border-[#4d4d4d]/40 bg-white transition-all duration-200 ${
                  isOpen
                    ? 'min-h-[116px] rounded-[22px] bg-[#4d4d4d]/5'
                    : 'min-h-[80px] rounded-[24px]'
                }`}
              >
                <button
                  type="button"
                  className={`flex w-full items-center justify-between gap-4 px-6 text-left ${
                    isOpen ? 'pt-[22px]' : 'min-h-[80px] py-6'
                  }`}
                  onClick={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="pr-8 text-[18px] font-bold leading-7 text-[#4d4d4d]">
                    {item.question}
                  </span>
                  <span
                    className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#748E36]/10 text-[#748E36] transition-all duration-200"
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <FaChevronUp className="text-[12px]" />
                    ) : (
                      <FaChevronDown className="text-[12px]" />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pr-16 text-[10px] leading-3 text-[#4d4d4d]/70">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
