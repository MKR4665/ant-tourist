import {
  LuBus,
  LuCalendar,
  LuCar,
  LuCarFront,
  LuClipboardCheck,
  LuFileText,
  LuGauge,
  LuKey,
  LuLayoutDashboard,
  LuNetwork,
  LuRoute,
  LuSlidersHorizontal,
  LuTicket,
  LuTriangleAlert,
  LuUserRound,
  LuUsers,
} from 'react-icons/lu'

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LuLayoutDashboard },
  { id: 'admin-control', label: 'Admin Control', icon: LuUserRound },
  { id: 'admin-alerts', label: 'Admin Alerts', icon: LuTriangleAlert },
  { id: 'user-dashboard', label: 'User Dashboard', icon: LuGauge },
  { id: 'employees', label: 'Manage Employee', icon: LuUsers },
  { id: 'master', label: 'Master', icon: LuClipboardCheck },
  { id: 'vehicles', label: 'Manage Vehicles', icon: LuBus },
  { id: 'operator', label: 'Operator', icon: LuRoute },
  { id: 'bus-hire', label: 'Bus Hire', icon: LuBus },
  { id: 'bus-tour', label: 'Bus Tour', icon: LuBus },
  { id: 'bus-car', label: 'Bus Car', icon: LuCar },
  { id: 'bus-ticket', label: 'Bus Ticket', icon: LuTicket },
  { id: 'operations', label: 'Operation & Booking', icon: LuSlidersHorizontal },
  { id: 'account', label: 'Account', icon: LuNetwork },
  { id: 'pages', label: 'Pages', icon: LuFileText },
]

export const SUMMARY_CARDS = [
  {
    title: 'TOTAL BOOKINGS',
    value: '1,284',
    tag: '+12%',
    icon: LuTicket,
    tone: 'olive',
    progress: 78,
  },
  {
    title: 'ACTIVE BOOKING',
    value: '42',
    tag: 'Active',
    icon: LuKey,
    tone: 'blue',
  },
  {
    title: 'TODAY DEPARTURE',
    value: '18',
    tag: 'Active',
    icon: LuCarFront,
    tone: 'amber',
    note: 'Out of 230 total units',
  },
  {
    title: 'TODAY ARRIVAL',
    value: '18',
    tag: 'Active',
    icon: LuCarFront,
    tone: 'amber',
    note: 'Out of 230 total units',
  },
]

export const OPERATIONS_CARDS = [
  {
    title: 'TOTAL VEHICLE',
    value: '50',
    leftHint: 'ACTIVE - 50',
    rightHint: 'DEACTIVE - 10',
    icon: LuBus,
    tone: 'olive',
    leftHintTone: 'success',
    rightHintTone: 'danger',
  },
  {
    title: 'VEHICLE DOCUMENT',
    value: '42',
    leftHint: 'EXPIRING THIS MONTH',
    rightHint: '',
    icon: LuFileText,
    tone: 'blue',
    leftHintTone: 'danger',
  },
  {
    title: 'UPCOMING VEHICLE SERVICE',
    value: '18',
    leftHint: '',
    rightHint: '',
    icon: LuCarFront,
    tone: 'amber',
  },
  {
    title: 'TODAY MAINTENANCE',
    value: '\u20B918000',
    leftHint: 'TODAY\u20B93000',
    rightHint: '',
    icon: LuCarFront,
    tone: 'amber',
    leftHintTone: 'danger',
  },
]

export const BALANCE_ROWS = [
  { month: 'Jan', credit: 10000, debit: 2000 },
  { month: 'Feb', credit: 10000, debit: 4000 },
  { month: 'March', credit: 10000, debit: 3000 },
  { month: 'April', credit: 10000, debit: 6000 },
  { month: 'May', credit: 10000, debit: 5200 },
  { month: 'June', credit: 10000, debit: 3000 },
  { month: 'July', credit: 10000, debit: 9000 },
  { month: 'Aug', credit: 10000, debit: 3000 },
  { month: 'Sep', credit: 10000, debit: 3600 },
  { month: 'Oct', credit: 10000, debit: 7000 },
  { month: 'Nov', credit: 10000, debit: 2000 },
  { month: 'Dec', credit: 10000, debit: 10000 },
]

export const DEFAULT_TRANSACTIONS = [
  {
    customer: 'Amit Sharma',
    email: 'amit@123gmail.com',
    service: 'Bus Tour',
    transactionId: '12234357757585',
    timestamp: '20-May-2026 | 11:30PM',
    status: 'Booked',
    amount: '\u20B954,890',
    route: 'IGI Airport T3 -> Jaipur',
  },
  {
    customer: 'Neha Verma',
    email: 'neha@gmail.com',
    service: 'Bus Ticket',
    transactionId: '12234357757586',
    timestamp: '20-May-2026 | 11:10PM',
    status: 'Pending',
    amount: '\u20B912,800',
    route: 'Noida -> Haridwar',
  },
  {
    customer: 'Rohan Singh',
    email: 'rohan@gmail.com',
    service: 'Bus Hire',
    transactionId: '12234357757587',
    timestamp: '20-May-2026 | 10:55PM',
    status: 'Finished',
    amount: '\u20B932,100',
    route: 'Delhi -> Agra',
  },
  {
    customer: 'Pooja Jain',
    email: 'pooja@gmail.com',
    service: 'Car Hire',
    transactionId: '12234357757588',
    timestamp: '20-May-2026 | 10:22PM',
    status: 'Failed',
    amount: '\u20B98,550',
    route: 'Gurgaon -> Mussoorie',
  },
  {
    customer: 'Karan Mehta',
    email: 'karan@gmail.com',
    service: 'Minivan Hire',
    transactionId: '12234357757589',
    timestamp: '20-May-2026 | 09:48PM',
    status: 'Booked',
    amount: '\u20B924,200',
    route: 'Delhi -> Chandigarh',
  },
]

export const SECTION_LIBRARY = {
  'admin-control': {
    title: 'Admin Control Center',
    description: 'Manage role permissions, approval workflow, and branch access in one place.',
    cards: [
      { title: 'Roles', value: '12', hint: '3 custom roles updated this week' },
      { title: 'Pending Access Requests', value: '08', hint: 'Awaiting approval by Super Admin' },
      { title: 'MFA Protected Accounts', value: '96%', hint: 'Security compliance across staff users' },
    ],
    table: {
      columns: ['Role Name', 'Users', 'Permissions', 'Last Updated'],
      rows: [
        ['Super Admin', '3', 'Full Access', 'Today, 09:20 AM'],
        ['Operations Manager', '11', 'Fleet + Bookings', 'Today, 08:05 AM'],
        ['Branch Executive', '26', 'Bookings Only', 'Yesterday, 06:42 PM'],
        ['Finance', '5', 'Billing + Ledger', 'Yesterday, 03:11 PM'],
      ],
    },
  },
  'admin-alerts': {
    title: 'Admin Alerts',
    description: 'Critical issues and reminders from bookings, vehicles, and finance.',
    cards: [
      { title: 'High Priority', value: '05', hint: 'Immediate response recommended' },
      { title: 'Medium Priority', value: '14', hint: 'Service schedules and customer follow-ups' },
      { title: 'Resolved Today', value: '09', hint: 'Closed by operations and support teams' },
    ],
    table: {
      columns: ['Alert Type', 'Module', 'Raised At', 'Owner'],
      rows: [
        ['Vehicle Insurance Expiry', 'Fleet', 'Today, 07:55 AM', 'Fleet Team'],
        ['Driver Availability Gap', 'Operations', 'Today, 07:42 AM', 'Shift Manager'],
        ['Payment Reconciliation', 'Accounts', 'Yesterday, 09:30 PM', 'Finance Team'],
        ['Passenger Follow-up Pending', 'Support', 'Yesterday, 08:10 PM', 'CRM Desk'],
      ],
    },
  },
  'user-dashboard': {
    title: 'User Dashboard Snapshot',
    description: 'Live engagement and booking behavior from customers across channels.',
    cards: [
      { title: 'New Users Today', value: '63', hint: '18 from referral campaigns' },
      { title: 'Returning Users', value: '211', hint: 'Strong retention over last 7 days' },
      { title: 'Avg Session Time', value: '06m 42s', hint: 'Web and WhatsApp flow combined' },
    ],
    table: {
      columns: ['User Segment', 'Bookings', 'Conversion', 'Avg Ticket Size'],
      rows: [
        ['Corporate Accounts', '43', '36%', '\u20B913,200'],
        ['Family Travelers', '78', '29%', '\u20B99,450'],
        ['Student Groups', '52', '21%', '\u20B97,180'],
        ['Pilgrimage Routes', '38', '31%', '\u20B910,650'],
      ],
    },
  },
  employees: {
    title: 'Employee Management',
    description: 'Staff allocation, shift readiness, and attendance performance.',
    cards: [
      { title: 'Total Team Members', value: '124', hint: 'Drivers + coordinators + support' },
      { title: 'On-Shift Now', value: '82', hint: 'Across Delhi NCR and outstation desk' },
      { title: 'Attendance This Week', value: '94%', hint: 'Improved by 3% from last week' },
    ],
    table: {
      columns: ['Name', 'Department', 'Shift', 'Status'],
      rows: [
        ['Ravi Thakur', 'Operations', 'Morning', 'Present'],
        ['Sneha Arora', 'Support', 'Evening', 'Present'],
        ['Ankit Rawat', 'Fleet Desk', 'Night', 'Late Check-in'],
        ['Priya Dhingra', 'Accounts', 'Morning', 'On Leave'],
      ],
    },
  },
  master: {
    title: 'Master Data Hub',
    description: 'Centralized setup for routes, fare slabs, and service templates.',
    cards: [
      { title: 'Route Templates', value: '176', hint: 'Delhi NCR + Outstation presets' },
      { title: 'Fare Slabs', value: '84', hint: 'Local, airport, and intercity tariffs' },
      { title: 'Service Packages', value: '29', hint: 'Tour + charter combinations' },
    ],
    table: {
      columns: ['Master Module', 'Entries', 'Last Sync', 'Owner'],
      rows: [
        ['Vehicle Categories', '17', 'Today, 06:22 AM', 'Fleet'],
        ['Route Libraries', '176', 'Today, 06:05 AM', 'Operations'],
        ['Tour Packages', '29', 'Yesterday, 07:14 PM', 'Sales'],
        ['Coupon Rules', '12', 'Yesterday, 05:03 PM', 'Marketing'],
      ],
    },
  },
  vehicles: {
    title: 'Vehicle Command Board',
    description: 'Monitor fleet health, permits, and dispatch readiness in real time.',
    cards: [
      { title: 'Ready for Dispatch', value: '42', hint: 'Inspected and approved' },
      { title: 'Under Service', value: '06', hint: 'Expected back within 48 hrs' },
      { title: 'Document Expiring', value: '04', hint: 'RC/Insurance due this month' },
    ],
    table: {
      columns: ['Vehicle ID', 'Model', 'Availability', 'Last Service'],
      rows: [
        ['DL01AB1221', 'Volvo 45 Seater', 'Ready', '12-May-2026'],
        ['DL01AC7742', 'Tempo Traveller 17', 'Ready', '09-May-2026'],
        ['DL01AD9105', 'Force Urbania', 'In Service', '01-May-2026'],
        ['DL01AE4419', 'Toyota Crysta', 'Ready', '07-May-2026'],
      ],
    },
  },
  operator: {
    title: 'Operator Network',
    description: 'Partner performance, capacity utilization, and payout visibility.',
    cards: [
      { title: 'Active Partners', value: '31', hint: 'Verified and running routes' },
      { title: 'Routes Fulfilled', value: '428', hint: 'Last 30 days execution count' },
      { title: 'Partner SLA Score', value: '92%', hint: 'Average delivery compliance' },
    ],
    table: {
      columns: ['Partner', 'Assigned Trips', 'Completion', 'Payout Cycle'],
      rows: [
        ['GreenLine Mobility', '96', '94%', 'Weekly'],
        ['NorthWay Transit', '74', '90%', 'Fortnightly'],
        ['Swift Fleet Co.', '58', '88%', 'Weekly'],
        ['Metro Wheels', '43', '92%', 'Monthly'],
      ],
    },
  },
  'bus-hire': {
    title: 'Bus Hire Desk',
    description: 'Quotation pipeline, slot occupancy, and conversion overview.',
    cards: [
      { title: 'Open Enquiries', value: '118', hint: 'Pending pricing response' },
      { title: 'Confirmed Hires', value: '47', hint: 'Bookings confirmed this week' },
      { title: 'Avg Quote Value', value: '\u20B926,400', hint: 'Per confirmed booking' },
    ],
    table: {
      columns: ['Route', 'Vehicle', 'Travel Date', 'Status'],
      rows: [
        ['Delhi -> Jaipur', '35 Seater AC', '22-May-2026', 'Quote Sent'],
        ['Noida -> Haridwar', '45 Seater AC', '23-May-2026', 'Confirmed'],
        ['Gurgaon -> Agra', '27 Seater AC', '24-May-2026', 'Follow-up'],
        ['Delhi -> Nainital', 'Tempo 17', '25-May-2026', 'Negotiation'],
      ],
    },
  },
  'bus-tour': {
    title: 'Bus Tour Planner',
    description: 'Tour package inventory, seasonal demand, and occupancy status.',
    cards: [
      { title: 'Active Packages', value: '24', hint: 'Domestic group itineraries' },
      { title: 'Bookings This Month', value: '183', hint: 'Holiday demand is strong' },
      { title: 'Occupancy Rate', value: '87%', hint: 'Across upcoming departures' },
    ],
    table: {
      columns: ['Package', 'Duration', 'Seats Sold', 'Departure'],
      rows: [
        ['Golden Triangle', '3D/2N', '39/45', '21-May-2026'],
        ['Shimla Manali', '5D/4N', '28/35', '23-May-2026'],
        ['Rajasthan Circuit', '6D/5N', '32/40', '25-May-2026'],
        ['Uttarakhand Retreat', '4D/3N', '22/30', '27-May-2026'],
      ],
    },
  },
  'bus-car': {
    title: 'Car Rental Board',
    description: 'Sedan/SUV bookings, duty roster, and route demand visibility.',
    cards: [
      { title: 'Cars Available', value: '29', hint: 'Ready with assigned drivers' },
      { title: 'Airport Transfers', value: '64', hint: 'Scheduled for next 48 hours' },
      { title: 'Premium Bookings', value: '21', hint: 'Innova/Urbania category share' },
    ],
    table: {
      columns: ['Booking ID', 'Vehicle Type', 'Pickup', 'Status'],
      rows: [
        ['CR-2201', 'Sedan', 'IGI T3', 'Assigned'],
        ['CR-2202', 'SUV', 'New Delhi Railway Station', 'Confirmed'],
        ['CR-2203', 'Premium', 'Noida Sector 18', 'In Progress'],
        ['CR-2204', 'Sedan', 'Dwarka', 'Pending Driver'],
      ],
    },
  },
  'bus-ticket': {
    title: 'Ticket Operations',
    description: 'Ticket flow, cancellations, and settlement checks.',
    cards: [
      { title: 'Tickets Issued Today', value: '312', hint: 'Across web, phone, and partner desk' },
      { title: 'Cancellation Requests', value: '17', hint: 'Need approval and refund action' },
      { title: 'Settlement Pending', value: '\u20B91,24,500', hint: 'To be reconciled end of day' },
    ],
    table: {
      columns: ['PNR', 'Passenger', 'Route', 'Payment'],
      rows: [
        ['PNR882101', 'Vikas Jain', 'Delhi -> Dehradun', 'Paid'],
        ['PNR882102', 'Sana Khan', 'Delhi -> Jaipur', 'Paid'],
        ['PNR882103', 'Nitin Sood', 'Delhi -> Agra', 'Refund Pending'],
        ['PNR882104', 'Ria Mehta', 'Delhi -> Haridwar', 'Paid'],
      ],
    },
  },
  operations: {
    title: 'Operation & Booking Center',
    description: 'Dispatch workflow and ground team handoff status for live bookings.',
    cards: [
      { title: 'Live Trips', value: '33', hint: 'Tracked through control desk' },
      { title: 'Driver Allocation Pending', value: '07', hint: 'Needs assignment before departure' },
      { title: 'On-Time Departure', value: '91%', hint: 'Last 7 days reliability score' },
    ],
    table: {
      columns: ['Trip ID', 'Coordinator', 'Vehicle', 'Live Status'],
      rows: [
        ['TR-9914', 'S. Arora', 'DL01AB1221', 'Departed'],
        ['TR-9915', 'R. Thakur', 'DL01AE4419', 'Boarding'],
        ['TR-9916', 'P. Chugh', 'DL01AD9105', 'Driver Assigned'],
        ['TR-9917', 'N. Bansal', 'DL01AC7742', 'Route Planning'],
      ],
    },
  },
  account: {
    title: 'Accounts & Ledger',
    description: 'Revenue, payouts, pending settlements, and tax-ready summaries.',
    cards: [
      { title: 'Today Revenue', value: '\u20B92,48,900', hint: 'Gross collection from all channels' },
      { title: 'Pending Receivables', value: '\u20B978,400', hint: 'Corporate and partner invoices' },
      { title: 'Vendor Payout Queue', value: '\u20B954,120', hint: 'Due in next payout cycle' },
    ],
    table: {
      columns: ['Ledger Type', 'Entries', 'Last Sync', 'Amount'],
      rows: [
        ['Receivables', '18', 'Today, 08:15 AM', '\u20B978,400'],
        ['Driver Settlement', '26', 'Today, 07:55 AM', '\u20B931,900'],
        ['Operator Payout', '11', 'Yesterday, 11:45 PM', '\u20B922,220'],
        ['Tax Bucket', '09', 'Yesterday, 10:02 PM', '\u20B914,880'],
      ],
    },
  },
  pages: {
    title: 'Page Builder & Content',
    description: 'Manage static pages, promotional banners, and help content layout.',
    cards: [
      { title: 'Published Pages', value: '34', hint: 'Public pages currently live' },
      { title: 'Draft Updates', value: '09', hint: 'Awaiting review from content team' },
      { title: 'SEO Issues', value: '04', hint: 'Meta tags missing on key pages' },
    ],
    table: {
      columns: ['Page', 'Last Edited', 'Editor', 'State'],
      rows: [
        ['Bus Hire Landing', 'Today, 09:10 AM', 'Content Team', 'Published'],
        ['FAQ', 'Today, 07:42 AM', 'Support Team', 'Published'],
        ['Offers Banner', 'Yesterday, 05:12 PM', 'Marketing', 'Draft'],
        ['Privacy Policy', 'Yesterday, 02:33 PM', 'Legal Desk', 'Published'],
      ],
    },
  },
}

export const STATUS_TONE = {
  Booked: 'olive',
  Pending: 'moss',
  Finished: 'sage',
  Failed: 'forest',
}

export const CHART_LEGEND = [
  { label: 'Credit', className: 'bg-[#ff8100]' },
  { label: 'Debit', className: 'bg-[#769236]' },
]

export const DASHBOARD_DATE_FILTERS = ['Last 7 Days', 'Last 30 Days', 'Last 90 Days']

export const DEFAULT_DATE_LABEL = DASHBOARD_DATE_FILTERS[1]

export const HEADER_ACTIONS = [
  { id: 'public-form', label: 'Open Public Form' },
  { id: 'clear-data', label: 'Clear Enquiry Data' },
]

export const DASHBOARD_INCOME = {
  title: 'Monthly Income',
  amount: '\u20B984,890',
  previous: 'Last Month: \u20B972,400',
  growth: '+16%',
}

export const DASHBOARD_EXPENSE = {
  title: 'Monthly Expenses',
  amount: '\u20B954,890',
  creditLabel: 'Today Credit',
  credit: '+\u20B92,450',
  debitLabel: 'Today Debit',
  debit: '-\u20B9420',
}

export const GENERIC_TABLE_TITLE = 'Section Activity'
export const TRANSACTION_TABLE_TITLE = 'Recent Transactions'
export const TRANSACTION_TABLE_ACTION = 'View All Bookings'

export const DASHBOARD_TITLE = 'Dashboard Overview'
export const DASHBOARD_DESCRIPTION = 'Real-time performance analytics for your travel fleet.'

export const FOOTER_LINKS = ['Privacy Policy', 'System Logs', 'Support']
