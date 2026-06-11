export const getFallbackTimestamp = () => '20-May-2026 | 11:30PM'

export const toSafeText = (value, fallback = '--') => {
  if (value === null || value === undefined) {
    return fallback
  }

  const text = String(value).trim()
  return text || fallback
}

export const mapSavedEnquiryToTransaction = ({
  enquiry,
  index,
  formatAdminDateTime,
  getRouteSummary,
}) => {
  const statuses = ['Booked', 'Pending', 'Finished', 'Failed']
  const routeSummary = typeof getRouteSummary === 'function'
    ? getRouteSummary(enquiry)
    : `${toSafeText(enquiry?.pickupPoint)} -> ${toSafeText(enquiry?.dropOffPoint)}`

  return {
    customer: toSafeText(enquiry?.fullName, 'Customer'),
    email: toSafeText(enquiry?.emailAddress, 'customer@example.com'),
    service: toSafeText(enquiry?.selectedServiceLabel || enquiry?.selectedService, 'Bus Tour'),
    transactionId: toSafeText(enquiry?.id, `ENQ-${1000 + index}`),
    timestamp:
      typeof formatAdminDateTime === 'function'
        ? toSafeText(formatAdminDateTime(enquiry?.submittedAt || enquiry?.createdAt), getFallbackTimestamp())
        : getFallbackTimestamp(),
    status: statuses[index % statuses.length],
    amount: toSafeText(enquiry?.amountLabel, '\u20B954,890'),
    route: toSafeText(routeSummary),
  }
}

export const toneClasses = {
  olive: {
    iconWrap: 'bg-[#edf2e6] text-[#6b8d2f]',
    tagWrap: 'bg-[#edf2e6] text-[#6b8d2f]',
  },
  blue: {
    iconWrap: 'bg-[#e8eef8] text-[#2959d6]',
    tagWrap: 'bg-[#f0f1f2] text-[#6a7179]',
  },
  amber: {
    iconWrap: 'bg-[#f8efe5] text-[#d04f11]',
    tagWrap: 'bg-[#f8ead8] text-[#d04f11]',
  },
}

export const statusBadgeClasses = {
  olive: 'bg-[#edf4df] text-[#4f6d1f] ring-[#d2dfbc]',
  moss: 'bg-[#f3f8ea] text-[#6b8e23] ring-[#d8e5c5]',
  sage: 'bg-[#eef3e6] text-[#5e6f46] ring-[#d4dfc6]',
  forest: 'bg-[#e2ecd2] text-[#355018] ring-[#c4d5a8]',
}

export const statusTextClasses = {
  olive: 'text-[#0b7d54]',
  moss: 'text-[#ff7a00]',
  sage: 'text-[#8b8e91]',
  forest: 'text-[#ff1010]',
}

export const statusDotClasses = {
  olive: 'bg-[#0b7d54]',
  moss: 'bg-[#ff7a00]',
  sage: 'bg-[#9ea3a8]',
  forest: 'bg-[#ff1010]',
}
