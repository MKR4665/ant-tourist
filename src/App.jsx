import React, { useCallback, useEffect, useRef, useState } from 'react';
import agraImage from './assets/agra.jpg'
import busFormImage from './assets/tttttt6.jpg'
import chandigarhImage from "./assets/CH'.png"
import jaipurImage from './assets/jaipur.jpg'
import manaliImage from './assets/manali.jpg'
import bgBottomImage from './assets/bottom.png'
import r1Image from './assets/r1.jpg'
import r2Image from './assets/r2.jpg'
import r3Image from './assets/r3.jpg'
import r4Image from './assets/r4.jpg'
import r5Image from './assets/r5.jpg'
import r6Image from './assets/R6.png'
import DatePicker from 'react-datepicker'
import { format } from 'date-fns'
import L from 'leaflet'
import 'react-datepicker/dist/react-datepicker.css'
import 'leaflet/dist/leaflet.css'
import './App.css'
import QuickTravelLinks from './components/QuickTravelLinks'
import EnquiryFooter from './components/EnquiryFooter'
import AdminPanelView from '../admin-panel/AdminPanelView'
import { useLocation, useNavigate } from 'react-router-dom'
import FigmaHomePage from './components/FigmaHomePage'
import FigmaNavbar from './components/figma/FigmaNavbar'
import BusTicketPage from './pages/BusTicketPage'
import RentTravellerPage from './pages/RentTravellerPage'
import RentCarPage from './pages/RentCarPage'
import BusTourPage from './pages/BusTourPage'
import PopularRoutesPage from './pages/PopularRoutesPage'
import TravellerRoutesPage from './pages/TravellerRoutesPage'
import RouteBusesPage from './pages/RouteBusesPage'
import BusDetailPage from './pages/BusDetailPage'
import BusBookingPage from './pages/BusBookingPage'
import PassengerDetailsPage from './pages/PassengerDetailsPage'
import BookingSummaryPage from './pages/BookingSummaryPage'
import SecurePaymentPage from './pages/SecurePaymentPage'
import BookingConfirmedPage from './pages/BookingConfirmedPage'

function FormSelect({
  label,
  value,
  placeholder,
  options = [],
  disabled = false,
  onChange,
  className = '',
  autoOpenTrigger = null,
  menuClassName = '',
  invalid = false,
  errorText = '',
}) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)

  const normalizedOptions = options.map((opt) =>
    typeof opt === 'string'
      ? { value: opt, label: opt }
      : { value: opt.value, label: opt.label, price: opt.price }
  )

  const selectedOption = normalizedOptions.find((opt) => opt.value === value)
  const isMenuOpen = open && !disabled

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  useEffect(() => {
    if (disabled) {
      setOpen(false)
      return
    }

    if (autoOpenTrigger !== null) {
      setOpen(true)
      return
    }

    setOpen(false)
  }, [autoOpenTrigger, disabled])

  return (
    <div
      ref={wrapperRef}
      className={`field custom-select${isMenuOpen ? ' open' : ''}${disabled ? ' disabled' : ''}${invalid ? ' is-invalid' : ''}${className ? ` ${className}` : ''}`}
    >
      <label>{label}</label>
      <button
        type="button"
        className="select-trigger"
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        aria-label={label}
        aria-expanded={isMenuOpen}
      >
        <span className={`select-value${value ? '' : ' is-placeholder'}`}>
          <span className="select-value-main">{selectedOption?.label || value || placeholder}</span>
          {selectedOption?.price && <span className="select-value-price">{selectedOption.price}</span>}
        </span>
        <span className="material-symbols-outlined">expand_more</span>
      </button>

      <ul
        className={`select-menu${isMenuOpen ? ' is-open' : ''}${menuClassName ? ` ${menuClassName}` : ''}`}
        role="listbox"
        aria-label={label}
        aria-hidden={!isMenuOpen}
      >
        {normalizedOptions.map((option) => (
          <li key={option.value}>
            <button
              type="button"
              className={`select-option${option.value === value ? ' active' : ''}`}
              title={option.label}
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => {
                onChange(option.value)
                setOpen(false)
              }}
            >
              <span className="select-option-main">{option.label}</span>
              {option.price && <span className="select-option-price">{option.price}</span>}
            </button>
          </li>
        ))}
      </ul>
      {errorText ? <p className="wizard-field-error">{errorText}</p> : null}
    </div>
  )
}

function SuccessScreen({ onReset }) {
  return (
    <div className="wizard-success-panel">
      <div className="success-lottie-placeholder">
        <div className="success-circle-bg"></div>
        <span className="material-symbols-outlined success-icon">verified</span>
      </div>
      <div className="success-content">
        <h2>Enquiry Received!</h2>
        <p>Your trip details have been sent to our travel experts. We will contact you shortly with a personalized quote.</p>
        <div className="success-details-mini">
          <div className="detail-item">
            <span className="material-symbols-outlined">done_all</span>
            <span>24/7 Support Active</span>
          </div>
          <div className="detail-item">
            <span className="material-symbols-outlined">done_all</span>
            <span>Best Price Guaranteed</span>
          </div>
        </div>
      </div>
      <div className="success-actions">
        <button type="button" className="wizard-primary-btn success-btn" onClick={onReset}>
          BOOK ANOTHER TRIP <span className="material-symbols-outlined">restart_alt</span>
        </button>
      </div>
    </div>
  )
}

function LocationInput({
  label,
  value,
  placeholder,
  icon = 'location_on',
  onChange,
  onSuggestionSelect,
  onFocus,
  invalid = false,
  errorText = '',
  className = '',
  actionButton = null,
  famousPlaces = [],
  fetchSuggestions,
  fetchGeocode,
}) {
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [loading, setLoading] = useState(false)
  const wrapperRef = useRef(null)
  const debounceRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  const handleInputChange = (e) => {
    const query = e.target.value
    onChange(query)

    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    if (query.trim().length < 1) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    // Show famous place matches immediately (no debounce)
    const localMatches = famousPlaces
      .filter((p) => p.toLowerCase().includes(query.toLowerCase()))
      .map((p) => ({ label: p, isFamous: true }))

    if (localMatches.length > 0) {
      setSuggestions(localMatches.slice(0, 8))
      setShowSuggestions(true)
    }

    if (query.trim().length < 2) {
      setLoading(false)
      return
    }

    setShowSuggestions(true)
    setLoading(true)

    debounceRef.current = setTimeout(async () => {
      const apiResults = await fetchSuggestions(query)
      const combined = [
        ...localMatches,
        ...apiResults.filter(r => !localMatches.some(lm => lm.label === r.label))
      ]
      setSuggestions(combined.slice(0, 10))
      setLoading(false)
    }, 300)
  }

  const handleSelect = async (item) => {
    onChange(item.label)
    setShowSuggestions(false)

    let lat = item.lat
    let lng = item.lng

    if ((!lat || !lng) && fetchGeocode) {
      setLoading(true)
      const geo = await fetchGeocode(item.label)
      setLoading(false)
      if (geo) {
        lat = geo.lat
        lng = geo.lng
      }
    }

    if (onSuggestionSelect && lat && lng) {
      onSuggestionSelect({ lat, lng, label: item.label })
    }
  }

  return (
    <div ref={wrapperRef} className={`wizard-field location-autocomplete-field ${className}`}>
      <label>{label}</label>
      <div className={`wizard-icon-input${invalid ? ' is-invalid' : ''}${actionButton ? ' has-action' : ''}`}>
        <span className="wizard-icon">
          <span className="material-symbols-outlined">{icon}</span>
        </span>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
        onFocus={() => {
            if (onFocus) onFocus()
            if (value.trim().length >= 1) {
              // Show famous place suggestions on focus even before typing
              const localMatches = famousPlaces
                .filter((p) => value.trim().length === 0 || p.toLowerCase().includes(value.toLowerCase()))
                .map((p) => ({ label: p, isFamous: true }))
              if (localMatches.length > 0) {
                setSuggestions(localMatches.slice(0, 8))
                setShowSuggestions(true)
              }
            }
          }}
          placeholder={placeholder}
          autoComplete="off"
        />
        {loading && <span className="location-loading-spinner" />}
        {actionButton}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <ul className="location-suggestions-menu">
          {suggestions.map((item, idx) => {
            // Split label into main name + secondary address
            const parts = item.label.split(',')
            const mainText = parts[0]?.trim() || item.label
            const subText = parts.slice(1).join(',').trim()

            return (
              <li key={idx}>
                <button type="button" onClick={() => handleSelect(item)}>
                  <span className={`suggestion-icon-wrap${item.isFamous ? ' is-famous' : ''}`}>
                    <span className="material-symbols-outlined">
                      {item.isFamous ? 'stars' : 'location_on'}
                    </span>
                  </span>
                  <span className="suggestion-text-col">
                    <span className="suggestion-main">{mainText}</span>
                    {subText && <span className="suggestion-sub">{subText}</span>}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      )}

      {errorText ? <p className="wizard-field-error">{errorText}</p> : null}
    </div>
  )
}

const createIntermediateStop = () => ({
  point: '',
  arrivalDate: '',
  arrivalTimeHour: '',
  arrivalTimeMinute: '',
  arrivalTimePeriod: '',
})

const MAP_DEFAULT_CENTER = { lat: 28.6139, lng: 77.209 }
const MAP_DEFAULT_ZOOM = 10
const MAP_ZOOM_ON_SELECT = 13
const MAP_GEOCODE_DEBOUNCE_MS = 750
const MAP_RESIZE_DELAY_MS = 220
const INDIA_VIEWBOX = '68.1,37.1,97.4,6.0'
const MAP_SIMPLE_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28021.17117273949!2d77.393252!3d28.610383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4363000001f%3A0x173b4bedbe5d95a0!2sANT%20TRAVELS%20PVT.%20LTD.!5e0!3m2!1sen!2sus!4v1778103455467!5m2!1sen!2sus'
const ADMIN_PANEL_PATH = '/ant'
const ENQUIRY_STORAGE_KEY = 'ant-enquiry-admin-data'
const EARTH_RADIUS_KM = 6371
const FALLBACK_DRIVING_SPEED_KMPH = 42

const formatRouteDistance = (distance) => {
  if (!distance || distance <= 0) {
    return '-- km'
  }

  return `${distance >= 100 ? Math.round(distance) : distance.toFixed(1)} km`
}

const formatRouteDuration = (duration) => {
  if (!duration || duration <= 0) {
    return '--'
  }

  const roundedMinutes = Math.max(1, Math.round(duration))
  if (roundedMinutes < 60) {
    return `${roundedMinutes}m`
  }

  const hours = Math.floor(roundedMinutes / 60)
  const minutes = roundedMinutes % 60
  return minutes ? `${hours}h ${minutes}m` : `${hours}h`
}

const toRadians = (value) => (value * Math.PI) / 180

const getStraightLineDistanceKm = (from, to) => {
  const [fromLat, fromLng] = from
  const [toLat, toLng] = to
  const latDistance = toRadians(toLat - fromLat)
  const lngDistance = toRadians(toLng - fromLng)
  const startLat = toRadians(fromLat)
  const endLat = toRadians(toLat)
  const a =
    Math.sin(latDistance / 2) ** 2 +
    Math.cos(startLat) * Math.cos(endLat) * Math.sin(lngDistance / 2) ** 2

  return EARTH_RADIUS_KM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

const getFallbackRouteStats = (points) => {
  const distance = points.slice(1).reduce(
    (total, point, index) => total + getStraightLineDistanceKm(points[index], point),
    0
  )

  return {
    distance,
    duration: (distance / FALLBACK_DRIVING_SPEED_KMPH) * 60,
  }
}

const normalizePath = (pathname = '') => {
  let decodedPath = pathname
  try {
    decodedPath = decodeURIComponent(pathname)
  } catch {
    decodedPath = pathname
  }

  const compactPath = decodedPath.trim().replace(/\s+/g, '')
  const basePath = compactPath.split('?')[0]
  const cleanPath = basePath.replace(/\/+$/, '')
  return cleanPath || '/'
}

const isAdminPanelPath = (pathname = '', hashPath = '') => {
  const normalizedPath = normalizePath(pathname).toLowerCase()
  const normalizedHash = normalizePath(hashPath.replace(/^#/, '')).toLowerCase()
  const candidates = [normalizedPath, normalizedHash].filter(Boolean)

  return candidates.some(
    (path) =>
      path === ADMIN_PANEL_PATH ||
      path.endsWith(`${ADMIN_PANEL_PATH}`) ||
      path.includes(`${ADMIN_PANEL_PATH}/`)
  )
}

const isAdminPanelLocation = (locationObject) => {
  if (!locationObject) {
    return false
  }

  const isAdminByPath = isAdminPanelPath(locationObject.pathname, locationObject.hash)
  if (isAdminByPath) {
    return true
  }

  try {
    const params = new URLSearchParams(locationObject.search || '')
    return params.get('view')?.toLowerCase() === 'admin'
  } catch {
    return false
  }
}

const getPublicFormPath = (pathname = '') => {
  const normalizedPath = normalizePath(pathname)
  if (!isAdminPanelPath(normalizedPath)) {
    return '/'
  }

  const adminIndex = normalizedPath.toLowerCase().lastIndexOf(ADMIN_PANEL_PATH)
  const basePath = normalizedPath.slice(0, adminIndex)
  return basePath || '/'
}

const loadStoredEnquiries = () => {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const raw = window.localStorage.getItem(ENQUIRY_STORAGE_KEY)
    if (!raw) {
      return []
    }

    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const saveStoredEnquiries = (rows) => {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(ENQUIRY_STORAGE_KEY, JSON.stringify(rows))
  } catch {
    // Ignore storage write failures (private mode / quota limits).
  }
}

const formatAdminDateTime = (isoValue) => {
  const dt = new Date(isoValue)
  if (Number.isNaN(dt.getTime())) {
    return '--'
  }
  return dt.toLocaleString('en-IN')
}

const formatAdminStop = (stop) => {
  const point = stop?.point?.trim() || '--'
  const arrival = [stop?.arrivalDate, stop?.arrivalTime].filter(Boolean).join(' ')
  return arrival ? `${point} (${arrival})` : point
}
76 
const TIME_SLOT_MINUTES = ['00', '15', '30', '45']

const FAMOUS_PLACE_SUGGESTIONS = [
  // Ant Travels Office
  'ANT TRAVELS PVT. LTD., B-128, Transport Nagar, Sector 69, Noida',

  // Delhi Airports
  'Indira Gandhi International Airport (T3), Delhi',
  'Indira Gandhi International Airport (T1), Delhi',
  'Indira Gandhi International Airport (T2), Delhi',
  'Aerocity Metro Station, Delhi',

  // Delhi Railway Stations
  'New Delhi Railway Station (NDLS)',
  'Old Delhi Railway Station (DLI)',
  'Hazrat Nizamuddin Railway Station (NZM)',
  'Sarai Rohilla Railway Station, Delhi',
  'Anand Vihar Terminal / ISBT',
  'Kashmere Gate ISBT, Delhi',
  'Sarai Kale Khan ISBT, Delhi',

  // Delhi Landmarks
  'India Gate, Delhi',
  'Red Fort (Lal Qila), Delhi',
  'Akshardham Temple, Delhi',
  'Lotus Temple, Delhi',
  'Qutub Minar, Delhi',
  'Humayun Tomb, Delhi',
  'Jama Masjid, Delhi',
  'Chandni Chowk, Delhi',
  'Connaught Place (CP), Delhi',
  'Hauz Khas Village, Delhi',
  'Saket, Delhi',
  'Lajpat Nagar, Delhi',
  'Karol Bagh, Delhi',
  'Paharganj, Delhi',
  'Dilli Haat, INA Delhi',
  'Majnu ka Tilla, Delhi',
  'Pragati Maidan, Delhi',

  // Gurgaon / Gurugram
  'Gurgaon Cyber City (DLF CyberHub)',
  'Ambience Mall, Gurgaon',
  'MG Road, Gurgaon',
  'Sohna Road, Gurgaon',
  'Golf Course Road, Gurgaon',
  'Udyog Vihar, Gurgaon',
  'Sector 29, Gurgaon',

  // Noida & Greater Noida
  'Noida Sector 18 Market',
  'Noida Sector 62',
  'Noida City Centre',
  'Greater Noida Knowledge Park',
  'Buddh International Circuit, Greater Noida',
  'Pari Chowk, Greater Noida',

  // Faridabad
  'Faridabad NIT Market',
  'Surajkund Mela Ground, Faridabad',
  'Crown Interiorz Mall, Faridabad',

  // Agra
  'Taj Mahal, Agra',
  'Agra Fort, Agra',
  'Fatehpur Sikri, Agra',
  'Agra Cantt Railway Station',
  'Mathura Junction Railway Station',
  'Mathura Vrindavan',
  'Govardhan Parikrama, Mathura',
  'ISKCON Temple Vrindavan',

  // Jaipur
  'Hawa Mahal, Jaipur',
  'Amer Fort (Amber Fort), Jaipur',
  'Nahargarh Fort, Jaipur',
  'City Palace, Jaipur',
  'Jantar Mantar, Jaipur',
  'Jaipur Railway Station',
  'Sanganer Airport, Jaipur',
  'Chokhi Dhani, Jaipur',
  'MI Road, Jaipur',

  // Rajasthan Others
  'Khatu Shyam Ji Temple, Sikar',
  'Salasar Balaji Temple, Churu',
  'Pushkar Lake, Pushkar',
  'Brahma Temple, Pushkar',
  'Udaipur City Palace',
  'Jodhpur Mehrangarh Fort',
  'Jaisalmer Fort',

  // Manali & Himachal
  'Mall Road, Manali',
  'Solang Valley, Manali',
  'Rohtang Pass, Manali',
  'Hadimba Devi Temple, Manali',
  'Vashisht Baths, Manali',
  'Old Manali Bridge',
  'Atal Tunnel (Rohtang), Manali',
  'Kullu, Himachal Pradesh',

  // Shimla
  'The Ridge, Shimla',
  'Mall Road, Shimla',
  'Jakhu Temple, Shimla',
  'Kufri, Shimla',
  'Shimla Railway Station',
  'Chail, Shimla',

  // Chandigarh
  'Rock Garden, Chandigarh',
  'Sukhna Lake, Chandigarh',
  'Elante Mall, Chandigarh',
  'Sector 17 Market, Chandigarh',
  'PGI Hospital, Chandigarh',
  'Chandigarh Railway Station',

  // Amritsar & Punjab
  'Golden Temple, Amritsar',
  'Wagah Border, Amritsar',
  'Amritsar Railway Station',
  'Sri Amritsar International Airport',

  // Uttarakhand
  'Har Ki Pauri, Haridwar',
  'Mansa Devi Temple, Haridwar',
  'Haridwar Railway Station',
  'Laxman Jhula, Rishikesh',
  'Ram Jhula, Rishikesh',
  'Triveni Ghat, Rishikesh',
  'Mall Road, Mussoorie',
  'Kempty Falls, Mussoorie',
  'Naini Lake, Nainital',
  'Mall Road, Nainital',
  'Jim Corbett National Park, Ramnagar',
  'Kedarnath Temple',
  'Badrinath Temple',
  'Gangotri Temple',
  'Yamunotri Temple',
  'Auli Ski Resort, Chamoli',
  'Chopta, Tungnath Trekking',
  'Dehradun Railway Station',
  'Jolly Grant Airport, Dehradun',
  'Ayodhya Ram Mandir, Ayodhya',
  'Ayodhya Railway Station',

  // UP Others
  'Varanasi Kashi Vishwanath Temple',
  'Dashashwamedh Ghat, Varanasi',
  'Varanasi Junction Railway Station',
  'Lal Bahadur Shastri Airport, Varanasi',
  'Lucknow Charbagh Railway Station',
  'Hazratganj, Lucknow',
  'Agra - Lucknow Expressway Toll',

  // Mumbai
  'Chhatrapati Shivaji International Airport, Mumbai',
  'Mumbai Central Station',
  'Lokmanya Tilak Terminus, Mumbai',
  'Gateway of India, Mumbai',
  'Marine Drive, Mumbai',
  'Juhu Beach, Mumbai',

  // Goa
  'Goa International Airport, Dabolim',
  'Calangute Beach, Goa',
  'Baga Beach, Goa',
  'Panjim, Goa',

  // Hyderabad
  'Rajiv Gandhi International Airport, Hyderabad',
  'Charminar, Hyderabad',
  'HITEC City, Hyderabad',
]

const toIsoLocalDate = (dt) => {
  const y = dt.getFullYear()
  const m = String(dt.getMonth() + 1).padStart(2, '0')
  const d = String(dt.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

const roundUpToQuarterHour = (sourceDate) => {
  const rounded = new Date(sourceDate)
  rounded.setSeconds(0, 0)
  const minute = rounded.getMinutes()
  const remainder = minute % 15
  if (remainder !== 0) {
    rounded.setMinutes(minute + (15 - remainder))
  }
  return rounded
}

const parse12HourToMinutes = (hour, minute, period) => {
  if (!hour || !minute || !period) {
    return null
  }
  const hourNum = Number(hour)
  const minuteNum = Number(minute)
  if (Number.isNaN(hourNum) || Number.isNaN(minuteNum)) {
    return null
  }
  const normalizedHour = hourNum % 12
  const hour24 = period === 'PM' ? normalizedHour + 12 : normalizedHour
  return (hour24 * 60) + minuteNum
}

const buildDateTimeFromParts = (dateValue, hour, minute, period) => {
  const totalMinutes = parse12HourToMinutes(hour, minute, period)
  if (!dateValue || totalMinutes === null) {
    return null
  }

  const dt = new Date(`${dateValue}T00:00:00`)
  dt.setHours(Math.floor(totalMinutes / 60), totalMinutes % 60, 0, 0)
  return dt
}

const buildTimeSlotsForDate = (dateValue, minDateTime = null) => {
  const slots = []

  for (let hour24 = 0; hour24 < 24; hour24 += 1) {
    for (const minute of TIME_SLOT_MINUTES) {
      const minuteNum = Number(minute)
      const period = hour24 >= 12 ? 'PM' : 'AM'
      const hour12 = String((hour24 % 12) || 12)
      const slotDateTime = dateValue
        ? new Date(`${dateValue}T${String(hour24).padStart(2, '0')}:${minute}:00`)
        : null

      if (minDateTime && slotDateTime && slotDateTime < minDateTime) {
        continue
      }

      slots.push({
        hour: hour12,
        minute,
        period,
      })
    }
  }

  return slots
}

const uniqueValues = (rows) => Array.from(new Set(rows))

const createMapPinIcon = (type) =>
  L.divIcon({
    className: `map-pin map-pin-${type}`,
    html: '<span class="map-pin-dot" aria-hidden="true"></span>',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  })

function App() {
  const [wizardStep, setWizardStep] = useState(1)
  const [selectedService, setSelectedService] = useState('')
  const serviceCarouselRef = useRef(null)
  const mapContainerRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const pickupMarkerRef = useRef(null)
  const stopMarkerRef = useRef(null)
  const routeLineRef = useRef(null)
  const geocodeCacheRef = useRef(new Map())
  const reverseGeocodeCacheRef = useRef(new Map())
  const activeMapTargetRef = useRef('pickup')

  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [additionalNotes, setAdditionalNotes] = useState('')

  const [destination, setDestination] = useState('Local City Travel')
  const [tripDetail, setTripDetail] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [vehicleName, setVehicleName] = useState('')
  const [tripOptionAutoOpenKey, setTripOptionAutoOpenKey] = useState(0)
  const [vehicleNameAutoOpenKey, setVehicleNameAutoOpenKey] = useState(0)

  const [travelDate, setTravelDate] = useState('')
  const [travelTimeHour, setTravelTimeHour] = useState('')
  const [travelTimeMinute, setTravelTimeMinute] = useState('')
  const [travelTimePeriod, setTravelTimePeriod] = useState('')
  const [pickupPoint, setPickupPoint] = useState('')
  const [dropOffPoint, setDropOffPoint] = useState('')
  const [intermediateStops, setIntermediateStops] = useState([createIntermediateStop()])
  const [pickupMapPoint, setPickupMapPoint] = useState(null)
  const [stopMapPoint, setStopMapPoint] = useState(null)
  const [routeStats, setRouteStats] = useState({ distance: 0, duration: 0 })
  const [activeMapTarget, setActiveMapTarget] = useState('pickup')
  const [mapSearchQuery, setMapSearchQuery] = useState('')
  const [mapMessage, setMapMessage] = useState('')
  const [isMapExpanded, setIsMapExpanded] = useState(false)
  const [stepValidationState, setStepValidationState] = useState({
    step1: false,
    step2: false,
    step3: false,
  })
  const [savedEnquiries, setSavedEnquiries] = useState(() => loadStoredEnquiries())
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showMobileWizard, setShowMobileWizard] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const currentPath = normalizePath(location.pathname).toLowerCase()
  const isAdminPanelView = isAdminPanelLocation(location)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const fetchGeocode = useCallback(async (query) => {
    const normalizedQuery = query.trim()
    if (!normalizedQuery) {
      return null
    }

    const sanitizedQuery = normalizedQuery.replace(/[\\/|]+/g, ' ').replace(/\s+/g, ' ').trim()
    if (!sanitizedQuery) {
      return null
    }

    const cacheKey = `in-priority:${sanitizedQuery.toLowerCase()}`
    const cached = geocodeCacheRef.current.get(cacheKey)
    if (cached) {
      return cached
    }

    const searchParams = [
      { countrycodes: 'in', viewbox: INDIA_VIEWBOX, bounded: '1' },
      null,
    ]

    for (const scopedParams of searchParams) {
      const url = new URL('https://nominatim.openstreetmap.org/search')
      url.searchParams.set('format', 'jsonv2')
      url.searchParams.set('limit', '5')
      url.searchParams.set('addressdetails', '1')
      url.searchParams.set('q', sanitizedQuery)

      if (scopedParams) {
        url.searchParams.set('countrycodes', scopedParams.countrycodes)
        url.searchParams.set('viewbox', scopedParams.viewbox)
        url.searchParams.set('bounded', scopedParams.bounded)
      }

      const response = await fetch(url.toString(), {
        headers: { 'Accept-Language': 'en' },
      })

      if (!response.ok) {
        continue
      }

      const rows = await response.json()
      if (!Array.isArray(rows) || rows.length === 0) {
        continue
      }

      const firstIndian = rows.find((row) => row?.address?.country_code?.toLowerCase() === 'in')
      const first = firstIndian || rows[0]
      if (!first?.lat || !first?.lon) {
        continue
      }

      const result = {
        lat: Number(first.lat),
        lng: Number(first.lon),
        label: first.display_name || sanitizedQuery,
      }

      geocodeCacheRef.current.set(cacheKey, result)
      return result
    }

    return null
  }, [])

  const fetchSuggestions = useCallback(async (query) => {
    const normalizedQuery = query.trim()
    if (normalizedQuery.length < 2) {
      return []
    }

    try {
      const sanitizedQuery = normalizedQuery.replace(/[\\/|]+/g, ' ').replace(/\s+/g, ' ').trim()
      const searchScopes = [
        { countrycodes: 'in', viewbox: INDIA_VIEWBOX, bounded: '1' },
        null,
      ]

      let rows = []
      for (const scopedParams of searchScopes) {
        const url = new URL('https://nominatim.openstreetmap.org/search')
        url.searchParams.set('format', 'jsonv2')
        url.searchParams.set('limit', '10')
        url.searchParams.set('q', sanitizedQuery)
        url.searchParams.set('addressdetails', '1')
        url.searchParams.set('extratags', '1')
        url.searchParams.set('namedetails', '1')

        if (scopedParams) {
          url.searchParams.set('countrycodes', scopedParams.countrycodes)
          url.searchParams.set('viewbox', scopedParams.viewbox)
          url.searchParams.set('bounded', scopedParams.bounded)
        }

        const response = await fetch(url.toString(), {
          headers: { 'Accept-Language': 'en' },
        })

        if (!response.ok) {
          continue
        }

        const scopedRows = await response.json()
        if (Array.isArray(scopedRows) && scopedRows.length > 0) {
          rows = scopedRows
          break
        }
      }

      if (!Array.isArray(rows) || rows.length === 0) return []

      return rows.map((r) => {
        const addr = r.address || {}
        const nameParts = [
          r.namedetails?.name || r.name,
          addr.road || addr.suburb || addr.neighbourhood,
          addr.city || addr.town || addr.village || addr.county,
          addr.state,
          addr.country,
        ].filter(Boolean)

        const uniqueParts = nameParts.filter((p, i) => p !== nameParts[i - 1])
        const shortLabel = uniqueParts.slice(0, 4).join(', ')

        return {
          label: shortLabel || r.display_name,
          fullLabel: r.display_name,
          lat: Number(r.lat),
          lng: Number(r.lon),
        }
      })
    } catch {
      return []
    }
  }, [])

  const fetchReverseGeocode = useCallback(async (lat, lng) => {
    const cacheKey = `${lat.toFixed(5)}:${lng.toFixed(5)}`
    const cached = reverseGeocodeCacheRef.current.get(cacheKey)
    if (cached) {
      return cached
    }

    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lng)}`,
      { headers: { 'Accept-Language': 'en' } }
    )

    if (!response.ok) {
      throw new Error('Unable to fetch location address')
    }

    const row = await response.json()
    const label = row?.display_name || `${lat.toFixed(5)}, ${lng.toFixed(5)}`
    reverseGeocodeCacheRef.current.set(cacheKey, label)
    return label
  }, [])

  const outstationTripOptions = ['One Way', 'Round Trip']

  const localPackageOptions = [
    '4hr/40km',
    '8hr/80km',
    '12hr/120km',
    '16hr/160km',
    '24hr/200km',
  ]

  const vehicleTypeOptions = [
    'AC Seater Buses',
    'AC Sleeper Buses',
    'Traveller / Minivan',
    'Car / SUV / Sedan',
  ]

  const vehicleNamesByType = {
    'AC Seater Buses': [
      'TATA Bus 21 seater (2+1) AC Deluxe',
      'TATA 27 seater (2+2) AC Deluxe',
      'TATA 41 Seater (2+2) AC Deluxe',
      'TATA 45 Seater (2+2) AC Deluxe',
      'Leyland 49 Seater (2+2) AC Deluxe',
      'Leyland 60 Seater (3+2) AC Deluxe',
      'Bharta Benz 45 Seater (2+2) AC Luxury',
      'Volvo 45 Seater (2+2) AC Luxury',
    ],
    'AC Sleeper Buses': [
      'TATA AC Sleeper (2+1) 31 PAX',
      'Leyland AC Sleeper (2+1) 36 PAX',
      'Volvo Multi-Axle AC Sleeper (2+1) 42 PAX',
      'Leyland Multi-Axle AC Sleeper (2+1) 42 PAX',
    ],
    'Traveller / Minivan': [
      '9 Seater (1+1) Maharaja Force Motor',
      '9 Seater (1+1) Maharaja Urbania',
      '12 Seater (1+1) Maharaja Force Motor',
      '12 Seater (2+1) Luxury Force Motor',
      '12 Seater (2+1) Luxury Urbania',
      '16 Seater (2+1) Luxury Force Motor',
      '16 Seater (2+1) Luxury Urbania',
      '20 Seater (2+1) Luxury Force Motor',
      '25 Seater (2+2) Luxury Force Motor',
    ],
    'Car / SUV / Sedan': [
      'Swift Dzire 4 PAX',
      'Hyundai Aura 4 PAX',
      'Maruti Artica 6 PAX',
      'Kia Carens 4 PAX',
      'Innova Crysta 6 PAX',
      'Toyota Fortuner 6 PAX',
    ],
  }

  const hybridServices = ['wedding_transport', 'group_tours', 'corporate_travel', 'school_trips']
  const isHybridService = hybridServices.includes(selectedService)

  const isLocalTravel = destination === 'Local City Travel'
  const tripFieldLabel = 'TRIP TYPE'
  const tripFieldPlaceholder = isLocalTravel ? 'Select Trip Option' : 'Select Trip Type'

  const tripOptions = selectedService === 'airport_transfers'
    ? ['Pickup', 'Drop', 'Point to Point']
    : isLocalTravel
      ? localPackageOptions
      : (destination === 'Outstation' ? outstationTripOptions : [])

  const vehicleOptionPrice = isLocalTravel ? '₹9500' : '₹60 /km'

  const isAirportPickup = selectedService === 'airport_transfers' && tripDetail === 'Pickup'
  const isAirportDrop = selectedService === 'airport_transfers' && tripDetail === 'Drop'

  const pickupLabel = isAirportPickup ? 'AIRPORT NAME' : (isAirportDrop ? 'PICKUP ADDRESS' : 'PICKUP POINT')
  const pickupPlaceholder = isAirportPickup ? 'e.g. IGI Airport' : (isAirportDrop ? 'Enter pickup address' : 'Enter pickup location')

  const dropLabel = isAirportPickup ? 'DESTINATION ADDRESS' : (isAirportDrop ? 'AIRPORT NAME' : 'DROP-OFF POINT')
  const dropPlaceholder = isAirportPickup ? 'Enter destination address' : (isAirportDrop ? 'e.g. IGI Airport' : 'Enter drop-off location')

  const filteredVehicleTypeOptions = isLocalTravel
    ? vehicleTypeOptions.filter((opt) => opt !== 'AC Sleeper Buses')
    : vehicleTypeOptions

  const vehicleNameOptions = vehicleType ? vehicleNamesByType[vehicleType] || [] : []
  const vehicleNameOptionsWithPrice = vehicleNameOptions.map((n) => ({
    value: n,
    label: n,
    price: vehicleOptionPrice,
  }))

  const topHighlights = [
    { icon: 'sentiment_satisfied', value: '5000+', label: 'Happy Customers', clr: 'orange' },
    { icon: 'support_agent', value: '24x7', label: 'Global Support', clr: 'green' },
    { icon: 'sell', value: 'Best Price', label: 'Guaranteed', clr: 'gray' },
    { icon: 'verified', value: 'Verified', label: 'Elite Drivers', clr: 'red' },
  ]

  const serviceKeyToDestination = {
    local_trip: 'Local City Travel',
    outstation_trip: 'Outstation',
    airport_transfers: 'Outstation',
    wedding_transport: 'Local City Travel',
    corporate_travel: 'Local City Travel',
    group_tours: 'Local City Travel',
    school_trips: 'Local City Travel',
  }

  const serviceCards = [
    {
      key: 'outstation_trip',
      title: 'Outstation Trips',
      desc: 'Comfortable cross-city and itinerary travels.',
      icon: 'location_on',
    },
    {
      key: 'local_trip',
      title: 'Local Trips',
      desc: 'Seamless travel across short local routes.',
      icon: 'apartment',
    },
    {
      key: 'airport_transfers',
      title: 'Airport Transfers',
      desc: 'Punctual pickups and drop-offs for VIP delegations.',
      icon: 'flight',
    },
    {
      key: 'wedding_transport',
      title: 'Wedding Transport',
      desc: 'Luxury fleet to complement your special day.',
      icon: 'favorite',
    },
    {
      key: 'group_tours',
      title: 'Group Tours',
      desc: 'Curated sightseeing with knowledgeable crew.',
      icon: 'groups',
    },
    {
      key: 'corporate_travel',
      title: 'Corporate Travel',
      desc: 'Productivity-focused interiors for teams on the go.',
      icon: 'domain',
    },
    {
      key: 'school_trips',
      title: 'School Trips',
      desc: 'Safety-first transportation for educational excursions.',
      icon: 'school',
    },
  ]

  const handleServiceSelect = (serviceKey) => {
    setSelectedService(serviceKey)

    if (hybridServices.includes(serviceKey)) {
      setDestination('')
    } else {
      const nextDestination = serviceKeyToDestination[serviceKey]
      if (nextDestination) {
        setDestination(nextDestination)
      }
    }

    setTripDetail('')
    setVehicleType('')
    setVehicleName('')

    if (serviceKey === 'airport_transfers') {
      setActiveMapTarget('pickup')
      setStopMapPoint(null)
      setMapMessage('')
    }
  }

  const todayDate = new Date()
  todayDate.setHours(0, 0, 0, 0)

  const selectedTravelDate = travelDate ? new Date(`${travelDate}T00:00:00`) : null
  const normalizedTravelDate = selectedTravelDate && !Number.isNaN(selectedTravelDate.getTime())
    ? selectedTravelDate
    : null
  const currentDateTime = new Date()
  const currentDateIso = toIsoLocalDate(currentDateTime)
  const roundedCurrentDateTime = roundUpToQuarterHour(currentDateTime)
  const firstStopArrivalDate = intermediateStops[0]?.arrivalDate || ''
  const arrivalMinDateValue = travelDate && travelDate > currentDateIso ? travelDate : currentDateIso
  const arrivalMinDate = new Date(`${arrivalMinDateValue}T00:00:00`)

  const departureMinDateTime = travelDate && travelDate === currentDateIso
    ? roundedCurrentDateTime
    : null

  const departureSlots = buildTimeSlotsForDate(travelDate || currentDateIso, departureMinDateTime)

  const departurePeriodOptions = uniqueValues(departureSlots.map((slot) => slot.period))
  const departureHourOptions = uniqueValues(
    departureSlots
      .filter((slot) => !travelTimePeriod || slot.period === travelTimePeriod)
      .map((slot) => slot.hour)
  )
  const departureMinuteOptions = uniqueValues(
    departureSlots
      .filter((slot) => (!travelTimePeriod || slot.period === travelTimePeriod) && (!travelTimeHour || slot.hour === travelTimeHour))
      .map((slot) => slot.minute)
  )

  const departureDateTime = buildDateTimeFromParts(travelDate, travelTimeHour, travelTimeMinute, travelTimePeriod)
  const arrivalMinDateTime = firstStopArrivalDate && departureDateTime && firstStopArrivalDate === travelDate
    ? new Date(departureDateTime.getTime() + (15 * 60 * 1000))
    : null

  const arrivalSlots = buildTimeSlotsForDate(firstStopArrivalDate || arrivalMinDateValue, arrivalMinDateTime)
  const firstStopArrivalTimeHour = intermediateStops[0]?.arrivalTimeHour || ''
  const firstStopArrivalTimeMinute = intermediateStops[0]?.arrivalTimeMinute || ''
  const firstStopArrivalTimePeriod = intermediateStops[0]?.arrivalTimePeriod || ''

  const arrivalPeriodOptions = uniqueValues(arrivalSlots.map((slot) => slot.period))
  const arrivalHourOptions = uniqueValues(
    arrivalSlots
      .filter((slot) => !firstStopArrivalTimePeriod || slot.period === firstStopArrivalTimePeriod)
      .map((slot) => slot.hour)
  )
  const arrivalMinuteOptions = uniqueValues(
    arrivalSlots
      .filter((slot) =>
        (!firstStopArrivalTimePeriod || slot.period === firstStopArrivalTimePeriod) &&
        (!firstStopArrivalTimeHour || slot.hour === firstStopArrivalTimeHour)
      )
      .map((slot) => slot.minute)
  )

  const updateIntermediateStop = useCallback((index, key, value) => {
    setIntermediateStops((prev) =>
      prev.map((stop, idx) => (idx === index ? { ...stop, [key]: value } : stop))
    )
  }, [])

  const addIntermediateStop = () => {
    setIntermediateStops((prev) => [...prev, createIntermediateStop()])
  }

  const removeIntermediateStop = (index) => {
    setIntermediateStops((prev) => prev.filter((_, idx) => idx !== index))
  }

  const isFilled = (value) => (typeof value === 'string' ? value.trim().length > 0 : Boolean(value))
  const isTimeComplete = (hour, minute, period) => isFilled(hour) && isFilled(minute) && isFilled(period)
  const isStopComplete = (stop) =>
    Boolean(
      stop &&
      isFilled(stop.point) &&
      isFilled(stop.arrivalDate) &&
      isTimeComplete(stop.arrivalTimeHour, stop.arrivalTimeMinute, stop.arrivalTimePeriod)
    )
  const isExtraStopComplete = (stop) => Boolean(stop && isFilled(stop.point))

  const firstStop = intermediateStops[0] || createIntermediateStop()
  const firstStopPoint = firstStop.point || ''
  const firstStopArrivalDateTime = buildDateTimeFromParts(
    firstStop.arrivalDate,
    firstStop.arrivalTimeHour,
    firstStop.arrivalTimeMinute,
    firstStop.arrivalTimePeriod
  )
  const isArrivalAfterDeparture = !departureDateTime || !firstStopArrivalDateTime
    ? true
    : firstStopArrivalDateTime > departureDateTime
  const areExtraStopsComplete = intermediateStops.slice(1).every(isExtraStopComplete)
  const filledStopCount = intermediateStops.filter((stop) => isFilled(stop.point)).length
  const routeDistanceLabel = formatRouteDistance(routeStats.distance)
  const routeDurationLabel = formatRouteDuration(routeStats.duration)
  const routeStopsLabel = `${filledStopCount} ${filledStopCount === 1 ? 'Stop' : 'Stops'}`
  const isStopMapTargetDisabled = selectedService === 'airport_transfers'
  const effectiveMapTarget = isStopMapTargetDisabled ? 'pickup' : activeMapTarget
  const isMapInteractiveStep = wizardStep === 2
  const isMapRouteStep = wizardStep === 2 || wizardStep === 3
  const isMapFullscreenActive = isMapInteractiveStep && isMapExpanded

  const isStep1Complete = Boolean(selectedService && tripDetail && vehicleType && vehicleName)
  const isStep2Complete = selectedService === 'airport_transfers'
    ? Boolean(
      isFilled(travelDate) &&
      isTimeComplete(travelTimeHour, travelTimeMinute, travelTimePeriod) &&
      isFilled(pickupPoint) &&
      isFilled(dropOffPoint)
    )
    : Boolean(
      isFilled(travelDate) &&
      isTimeComplete(travelTimeHour, travelTimeMinute, travelTimePeriod) &&
      isFilled(pickupPoint) &&
      isStopComplete(firstStop) &&
      isArrivalAfterDeparture &&
      areExtraStopsComplete
    )

  const normalizedPhoneDigits = phoneNumber.replace(/\D/g, '')
  const isPhoneValid = normalizedPhoneDigits.length === 10
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress.trim())
  const isStep3Complete = Boolean(
    isFilled(fullName) &&
    isPhoneValid &&
    isEmailValid &&
    isFilled(additionalNotes)
  )

  const canAccessStep2 = isStep1Complete
  const canAccessStep3 = isStep1Complete && isStep2Complete

  const showStep1Errors = stepValidationState.step1
  const showStep2Errors = stepValidationState.step2
  const showStep3Errors = stepValidationState.step3

  const step1ServiceError = showStep1Errors && !selectedService
  const step1TripDetailError = showStep1Errors && !tripDetail
  const step1VehicleTypeError = showStep1Errors && Boolean(tripDetail) && !vehicleType
  const step1VehicleNameError = showStep1Errors && Boolean(tripDetail) && Boolean(vehicleType) && !vehicleName

  const step2TravelDateError = showStep2Errors && !isFilled(travelDate)
  const step2DepartureTimeError = showStep2Errors && !isTimeComplete(travelTimeHour, travelTimeMinute, travelTimePeriod)
  const step2PickupError = showStep2Errors && !isFilled(pickupPoint)
  const step2DropOffError = showStep2Errors && selectedService === 'airport_transfers' && !isFilled(dropOffPoint)
  const step2PrimaryStopError = showStep2Errors && selectedService !== 'airport_transfers' && !isFilled(intermediateStops[0]?.point || '')
  const step2ArrivalDateError = showStep2Errors && selectedService !== 'airport_transfers' && !isFilled(intermediateStops[0]?.arrivalDate || '')
  const step2ArrivalTimeError = showStep2Errors && selectedService !== 'airport_transfers' &&
    (
      !isTimeComplete(
        intermediateStops[0]?.arrivalTimeHour || '',
        intermediateStops[0]?.arrivalTimeMinute || '',
        intermediateStops[0]?.arrivalTimePeriod || ''
      ) || !isArrivalAfterDeparture
    )
  const step2ArrivalTimeErrorText = !isTimeComplete(
    intermediateStops[0]?.arrivalTimeHour || '',
    intermediateStops[0]?.arrivalTimeMinute || '',
    intermediateStops[0]?.arrivalTimePeriod || ''
  )
    ? 'Arrival time is required.'
    : 'Arrival time must be after departure time.'
  const extraStopPointErrors = intermediateStops.slice(1).map((stop) => showStep2Errors && !isFilled(stop.point))

  const step3FullNameError = showStep3Errors && !isFilled(fullName)
  const step3PhoneError = showStep3Errors && (!isFilled(phoneNumber) || !isPhoneValid)
  const step3EmailError = showStep3Errors && (!isFilled(emailAddress) || !isEmailValid)
  const step3NotesError = showStep3Errors && !isFilled(additionalNotes)

  const step3PhoneErrorText = !isFilled(phoneNumber)
    ? 'Phone number is required.'
    : 'Enter a valid phone number (exactly 10 digits).'

  const step3EmailErrorText = !isFilled(emailAddress)
    ? 'Email address is required.'
    : 'Enter a valid email address.'

  useEffect(() => {
    if (travelTimePeriod && !departurePeriodOptions.includes(travelTimePeriod)) {
      setTravelTimePeriod('')
      setTravelTimeHour('')
      setTravelTimeMinute('')
      return
    }

    if (travelTimeHour && !departureHourOptions.includes(travelTimeHour)) {
      setTravelTimeHour('')
      setTravelTimeMinute('')
      return
    }

    if (travelTimeMinute && !departureMinuteOptions.includes(travelTimeMinute)) {
      setTravelTimeMinute('')
    }
  }, [
    departureHourOptions,
    departureMinuteOptions,
    departurePeriodOptions,
    travelTimeHour,
    travelTimeMinute,
    travelTimePeriod,
  ])

  useEffect(() => {
    if (selectedService === 'airport_transfers' || !travelDate) {
      return
    }

    const existingArrivalDate = intermediateStops[0]?.arrivalDate || ''
    if (!existingArrivalDate || existingArrivalDate < arrivalMinDateValue) {
      updateIntermediateStop(0, 'arrivalDate', arrivalMinDateValue)
      updateIntermediateStop(0, 'arrivalTimeHour', '')
      updateIntermediateStop(0, 'arrivalTimeMinute', '')
      updateIntermediateStop(0, 'arrivalTimePeriod', '')
    }
  }, [
    arrivalMinDateValue,
    intermediateStops,
    selectedService,
    updateIntermediateStop,
  ])

  useEffect(() => {
    if (selectedService === 'airport_transfers') {
      return
    }

    const currentPeriod = intermediateStops[0]?.arrivalTimePeriod || ''
    const currentHour = intermediateStops[0]?.arrivalTimeHour || ''
    const currentMinute = intermediateStops[0]?.arrivalTimeMinute || ''

    if (currentPeriod && !arrivalPeriodOptions.includes(currentPeriod)) {
      updateIntermediateStop(0, 'arrivalTimePeriod', '')
      updateIntermediateStop(0, 'arrivalTimeHour', '')
      updateIntermediateStop(0, 'arrivalTimeMinute', '')
      return
    }

    if (currentHour && !arrivalHourOptions.includes(currentHour)) {
      updateIntermediateStop(0, 'arrivalTimeHour', '')
      updateIntermediateStop(0, 'arrivalTimeMinute', '')
      return
    }

    if (currentMinute && !arrivalMinuteOptions.includes(currentMinute)) {
      updateIntermediateStop(0, 'arrivalTimeMinute', '')
    }
  }, [
    arrivalHourOptions,
    arrivalMinuteOptions,
    arrivalPeriodOptions,
    intermediateStops,
    selectedService,
    updateIntermediateStop,
  ])

  useEffect(() => {
    saveStoredEnquiries(savedEnquiries)
  }, [savedEnquiries])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const handleStorage = (event) => {
      if (event.key !== ENQUIRY_STORAGE_KEY) {
        return
      }
      setSavedEnquiries(loadStoredEnquiries())
    }

    window.addEventListener('storage', handleStorage)
    return () => {
      window.removeEventListener('storage', handleStorage)
    }
  }, [])

  const formatTimeValue = (hour, minute, period) => {
    if (!hour || !minute || !period) {
      return ''
    }
    return `${hour}:${minute} ${period}`
  }

  const markValidationAttempted = (stepKey) => {
    setStepValidationState((prev) => ({ ...prev, [stepKey]: true }))
  }

  const clearValidationState = (stepKey) => {
    setStepValidationState((prev) => ({ ...prev, [stepKey]: false }))
  }

  const resetBookingForm = () => {
    setWizardStep(1)
    setSelectedService('')
    setDestination('Local City Travel')
    setTripDetail('')
    setVehicleType('')
    setVehicleName('')
    setTravelDate('')
    setTravelTimeHour('')
    setTravelTimeMinute('')
    setTravelTimePeriod('')
    setPickupPoint('')
    setDropOffPoint('')
    setIntermediateStops([createIntermediateStop()])
    setPickupMapPoint(null)
    setStopMapPoint(null)
    setActiveMapTarget('pickup')
    setMapSearchQuery('')
    setMapMessage('')
    setIsMapExpanded(false)
    setFullName('')
    setPhoneNumber('')
    setEmailAddress('')
    setAdditionalNotes('')
    setTripOptionAutoOpenKey((prev) => prev + 1)
    setStepValidationState({
      step1: false,
      step2: false,
      step3: false,
    })
  }

  const getRouteSummary = (row) => {
    const pickup = row?.pickupPoint?.trim() || '--'
    if (row?.dropOffPoint?.trim()) {
      return `${pickup} -> ${row.dropOffPoint.trim()}`
    }

    const stopPoints = Array.isArray(row?.intermediateStops)
      ? row.intermediateStops
        .map((stop) => stop?.point?.trim())
        .filter(Boolean)
      : []

    if (!stopPoints.length) {
      return `${pickup} -> --`
    }

    return `${pickup} -> ${stopPoints.join(' -> ')}`
  }

  const getAdminRouteDetails = (row) => {
    const pickup = row?.pickupPoint?.trim() || '--'
    const lines = [`Pickup: ${pickup}`]

    if (row?.dropOffPoint?.trim()) {
      lines.push(`Drop: ${row.dropOffPoint.trim()}`)
    }

    const stopLines = Array.isArray(row?.intermediateStops)
      ? row.intermediateStops
        .filter((stop) => stop?.point || stop?.arrivalDate || stop?.arrivalTime)
        .map((stop) => `Stop ${stop.stopNumber || ''}: ${formatAdminStop(stop)}`.replace('Stop :', 'Stop:'))
      : []

    if (stopLines.length) {
      lines.push(...stopLines)
    }

    return lines
  }

  const getAdminRouteStats = (row) => {
    const distance = row?.routeDistanceLabel || formatRouteDistance(row?.routeStats?.distance)
    const duration = row?.routeDurationLabel || formatRouteDuration(row?.routeStats?.duration)
    const stops = Number.isFinite(row?.stopCount)
      ? row.stopCount
      : Array.isArray(row?.intermediateStops)
        ? row.intermediateStops.filter((stop) => stop?.point?.trim()).length
        : 0

    return [
      `Distance: ${distance}`,
      `Est. Time: ${duration}`,
      `Stops: ${stops} ${stops === 1 ? 'Stop' : 'Stops'}`,
    ]
  }

  const handleStep1Next = () => {
    markValidationAttempted('step1')
    if (!isStep1Complete) {
      return
    }
    clearValidationState('step1')
    handleStepChange(2)
  }

  const handleStep2Next = () => {
    markValidationAttempted('step2')
    if (!isStep2Complete) {
      return
    }
    clearValidationState('step2')
    handleStepChange(3)
  }

  const handleEnquirySubmit = () => {
    markValidationAttempted('step3')
    if (!isStep3Complete) {
      return
    }
    clearValidationState('step3')

    const normalizedStops = intermediateStops
      .map((stop, index) => ({
        stopNumber: index + 1,
        point: stop.point.trim(),
        arrivalDate: stop.arrivalDate || '',
        arrivalTime: formatTimeValue(stop.arrivalTimeHour, stop.arrivalTimeMinute, stop.arrivalTimePeriod),
      }))
      .filter((stop) => stop.point || stop.arrivalDate || stop.arrivalTime)

    const selectedServiceCard = serviceCards.find((card) => card.key === selectedService)
    const enquiryRecord = {
      id: `ENQ-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      selectedService,
      selectedServiceLabel: selectedServiceCard?.title || selectedService || '--',
      destination: destination.trim(),
      tripDetail: tripDetail.trim(),
      vehicleType: vehicleType.trim(),
      vehicleName: vehicleName.trim(),
      travelDate,
      travelTime: formatTimeValue(travelTimeHour, travelTimeMinute, travelTimePeriod),
      pickupPoint: pickupPoint.trim(),
      dropOffPoint: dropOffPoint.trim(),
      intermediateStops: normalizedStops,
      routeStats: {
        distance: routeStats.distance,
        duration: routeStats.duration,
      },
      routeDistanceLabel,
      routeDurationLabel,
      stopCount: filledStopCount,
      fullName: fullName.trim(),
      phoneNumber: `+91 ${phoneNumber.trim()}`,
      emailAddress: emailAddress.trim(),
      additionalNotes: additionalNotes.trim(),
    }

    setSavedEnquiries((prev) => [enquiryRecord, ...prev])
    resetBookingForm()
    setIsSubmitted(true)
    setMapMessage('Enquiry submitted successfully. Open /ant to view admin records.')
  }

  const handleClearAdminData = () => {
    if (typeof window !== 'undefined') {
      const shouldClear = window.confirm('Clear all enquiry records?')
      if (!shouldClear) {
        return
      }
    }
    setSavedEnquiries([])
  }

  const goToPublicForm = () => {
    if (typeof window === 'undefined') {
      return
    }
    window.location.assign(getPublicFormPath(window.location.pathname))
  }

  const handleStepChange = (targetStep) => {
    if (targetStep !== 2) {
      setIsMapExpanded(false)
    }

    if (targetStep < wizardStep) {
      setWizardStep(targetStep)
      return
    }

    if (targetStep === 1) {
      setWizardStep(1)
      return
    }

    if (targetStep === 2 && canAccessStep2) {
      setWizardStep(2)
      return
    }

    if (targetStep === 3 && canAccessStep3) {
      setWizardStep(3)
    }
  }

  const handleStartBooking = () => {
    if (isMobile) {
      setShowMobileWizard(true)
    }
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleWhatsAppBooking = () => {
    if (typeof window === 'undefined') {
      return
    }
    const message = encodeURIComponent('Hi ANT Travels, I want to book a bus. Please share details.')
    window.open(`https://wa.me/919811992209?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    activeMapTargetRef.current = effectiveMapTarget
  }, [effectiveMapTarget])

  useEffect(() => {
    if (!isMapExpanded) {
      return undefined
    }

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsMapExpanded(false)
      }
    }

    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isMapExpanded])

  useEffect(() => {
    if (!isMapExpanded) {
      document.body.classList.remove('map-fullscreen-open')
      return undefined
    }

    document.body.classList.add('map-fullscreen-open')
    return () => {
      document.body.classList.remove('map-fullscreen-open')
    }
  }, [isMapExpanded])

  useEffect(() => {
    if (!isMapRouteStep || !mapContainerRef.current || mapInstanceRef.current) {
      return
    }

    const map = L.map(mapContainerRef.current, {
      center: [MAP_DEFAULT_CENTER.lat, MAP_DEFAULT_CENTER.lng],
      zoom: MAP_DEFAULT_ZOOM,
      zoomControl: false,
    })

    mapInstanceRef.current = map
    map.attributionControl.setPrefix(false)
    L.control.zoom({ position: 'bottomright' }).addTo(map)

    const primaryTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions" target="_blank" rel="noreferrer">CARTO</a>',
    })

    const fallbackTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors',
    })

    let isFallbackApplied = false
    primaryTiles.on('tileerror', () => {
      if (isFallbackApplied) {
        return
      }
      isFallbackApplied = true
      if (map.hasLayer(primaryTiles)) {
        map.removeLayer(primaryTiles)
      }
      fallbackTiles.addTo(map)
    })

    primaryTiles.addTo(map)

    pickupMarkerRef.current = L.marker([MAP_DEFAULT_CENTER.lat, MAP_DEFAULT_CENTER.lng], {
      icon: createMapPinIcon('pickup'),
    })

    stopMarkerRef.current = L.marker([MAP_DEFAULT_CENTER.lat, MAP_DEFAULT_CENTER.lng], {
      icon: createMapPinIcon('drop'),
    })

    routeLineRef.current = L.polyline([], {
      color: '#6b8e23',
      weight: 4,
      opacity: 0.8,
      dashArray: '10, 10',
      lineCap: 'round',
    })

    const handleMapClick = async (event) => {
      const target = activeMapTargetRef.current
      const lat = Number(event.latlng.lat)
      const lng = Number(event.latlng.lng)
      const nextPoint = { lat, lng }

      if (target === 'pickup') {
        setPickupMapPoint(nextPoint)
      } else {
        setStopMapPoint(nextPoint)
      }

      try {
        const label = await fetchReverseGeocode(lat, lng)
        if (target === 'pickup') {
          setPickupPoint(label)
        } else {
          updateIntermediateStop(0, 'point', label)
        }
        setMapSearchQuery(label)
        setMapMessage('')
      } catch {
        setMapMessage('Map location selected, but address lookup failed.')
      }
    }

    map.on('click', handleMapClick)

    return () => {
      map.off('click', handleMapClick)
      map.remove()
      mapInstanceRef.current = null
      pickupMarkerRef.current = null
      stopMarkerRef.current = null
      routeLineRef.current = null
    }
  }, [fetchReverseGeocode, isMapRouteStep, updateIntermediateStop])

  useEffect(() => {
    const map = mapInstanceRef.current
    const marker = pickupMarkerRef.current
    if (!map || !marker) {
      return
    }

    if (pickupMapPoint) {
      marker.setLatLng([pickupMapPoint.lat, pickupMapPoint.lng])
      if (!map.hasLayer(marker)) {
        marker.addTo(map)
      }
    } else if (map.hasLayer(marker)) {
      map.removeLayer(marker)
    }
  }, [pickupMapPoint])

  useEffect(() => {
    const map = mapInstanceRef.current
    const marker = stopMarkerRef.current
    if (!map || !marker) {
      return
    }

    if (stopMapPoint) {
      marker.setLatLng([stopMapPoint.lat, stopMapPoint.lng])
      if (!map.hasLayer(marker)) {
        marker.addTo(map)
      }
    } else if (map.hasLayer(marker)) {
      map.removeLayer(marker)
    }
  }, [stopMapPoint])

  useEffect(() => {
    const map = mapInstanceRef.current
    const line = routeLineRef.current
    if (!map || !line) {
      return
    }

    const points = []
    if (pickupMapPoint) points.push([pickupMapPoint.lat, pickupMapPoint.lng])
    if (stopMapPoint) points.push([stopMapPoint.lat, stopMapPoint.lng])

    if (points.length >= 2) {
      const fallbackStats = getFallbackRouteStats(points)
      // Fetch actual route from OSRM
      const coordinates = points.map(p => `${p[1]},${p[0]}`).join(';')
      fetch(`https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson`)
        .then(res => res.json())
        .then(data => {
          if (data.routes && data.routes[0]) {
            const route = data.routes[0]
            line.setLatLngs(route.geometry.coordinates.map(c => [c[1], c[0]]))
            setRouteStats({
              distance: route.distance / 1000, // meters to km
              duration: route.duration / 60, // seconds to minutes
            })
            if (!map.hasLayer(line)) {
              line.addTo(map)
            }
            return
          }

          line.setLatLngs(points)
          setRouteStats(fallbackStats)
          if (!map.hasLayer(line)) {
            line.addTo(map)
          }
        })
        .catch(() => {
          // Fallback to straight line
          line.setLatLngs(points)
          setRouteStats(fallbackStats)
          if (!map.hasLayer(line)) {
            line.addTo(map)
          }
        })
      return
    }

    if (map.hasLayer(line)) {
      map.removeLayer(line)
    }
    const resetTimer = window.setTimeout(() => {
      setRouteStats((prev) =>
        prev.distance > 0 || prev.duration > 0 ? { distance: 0, duration: 0 } : prev
      )
    }, 0)

    return () => window.clearTimeout(resetTimer)
  }, [pickupMapPoint, stopMapPoint, wizardStep])

  useEffect(() => {
    const map = mapInstanceRef.current
    if (!map) {
      return
    }

    if (pickupMapPoint && stopMapPoint) {
      map.fitBounds(
        [
          [pickupMapPoint.lat, pickupMapPoint.lng],
          [stopMapPoint.lat, stopMapPoint.lng],
        ],
        { padding: [36, 36], maxZoom: MAP_ZOOM_ON_SELECT }
      )
      return
    }

    const singlePoint = pickupMapPoint || stopMapPoint
    if (singlePoint) {
      map.setView([singlePoint.lat, singlePoint.lng], MAP_ZOOM_ON_SELECT)
    }
  }, [pickupMapPoint, stopMapPoint])

  useEffect(() => {
    const map = mapInstanceRef.current
    if (!map || !isMapRouteStep) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      map.invalidateSize()
    }, MAP_RESIZE_DELAY_MS)

    return () => {
      window.clearTimeout(timer)
    }
  }, [isMapExpanded, isMapRouteStep, wizardStep])

  useEffect(() => {
    const map = mapInstanceRef.current
    if (!map || !isMapRouteStep) {
      return undefined
    }

    const syncDelays = [0, 120, 320]
    const timers = syncDelays.map((delay) =>
      window.setTimeout(() => {
        map.invalidateSize()
      }, delay)
    )

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [isMapRouteStep, wizardStep])

  useEffect(() => {
    const query = pickupPoint.trim()

    const debounce = setTimeout(async () => {
      if (!query || query.length < 3) {
        setPickupMapPoint(null)
        return
      }

      try {
        const result = await fetchGeocode(query)
        if (!result) {
          setPickupMapPoint(null)
          return
        }
        setPickupMapPoint({ lat: result.lat, lng: result.lng })
      } catch {
        setMapMessage('Pickup location could not be mapped.')
      }
    }, MAP_GEOCODE_DEBOUNCE_MS)

    return () => clearTimeout(debounce)
  }, [fetchGeocode, pickupPoint])

  useEffect(() => {
    if (isStopMapTargetDisabled) {
      return
    }

    const query = firstStopPoint.trim()

    const debounce = setTimeout(async () => {
      if (!query || query.length < 3) {
        setStopMapPoint(null)
        return
      }

      try {
        const result = await fetchGeocode(query)
        if (!result) {
          setStopMapPoint(null)
          return
        }
        setStopMapPoint({ lat: result.lat, lng: result.lng })
      } catch {
        setMapMessage('Stop location could not be mapped.')
      }
    }, MAP_GEOCODE_DEBOUNCE_MS)

    return () => clearTimeout(debounce)
  }, [fetchGeocode, firstStopPoint, isStopMapTargetDisabled])

  useEffect(() => {
    if (!isStopMapTargetDisabled) {
      return
    }

    const query = dropOffPoint.trim()

    const debounce = setTimeout(async () => {
      if (!query || query.length < 3) {
        setStopMapPoint(null)
        return
      }

      try {
        const result = await fetchGeocode(query)
        if (!result) {
          setStopMapPoint(null)
          return
        }
        setStopMapPoint({ lat: result.lat, lng: result.lng })
      } catch {
        setMapMessage('Drop location could not be mapped.')
      }
    }, MAP_GEOCODE_DEBOUNCE_MS)

    return () => clearTimeout(debounce)
  }, [dropOffPoint, fetchGeocode, isStopMapTargetDisabled])

  const handleMapSearchSubmit = async (event) => {
    event.preventDefault()
    const query = mapSearchQuery.trim()
    if (!query) {
      return
    }

    try {
      const result = await fetchGeocode(query)
      if (!result) {
        setMapMessage('Location not found. Try a more specific place name.')
        return
      }

      const point = { lat: result.lat, lng: result.lng }
      if (effectiveMapTarget === 'pickup') {
        setPickupPoint(result.label)
        setPickupMapPoint(point)
      } else {
        updateIntermediateStop(0, 'point', result.label)
        setStopMapPoint(point)
      }

      setMapSearchQuery(result.label)
      setMapMessage('')
    } catch {
      setMapMessage('Map search failed. Please try again.')
    }
  }

  const services = [
    {
      title: "Local & Outstation",
      desc: "Seamless travel across cities or short local transits.",
      icon: "apartment"
    },
    {
      title: "Airport Transfers",
      desc: "Punctual pickups and drop-offs for VIP delegations.",
      icon: "flight"
    },
    {
      title: "Wedding Transport",
      desc: "Luxury fleet to complement your special day.",
      icon: "favorite"
    },
    {
      title: "Corporate Travel",
      desc: "Productivity-focused interiors for teams on the go.",
      icon: "domain"
    },
    {
      title: "Group Tours",
      desc: "Curated sightseeing with knowledgeable crew.",
      icon: "groups"
    },
    {
      title: "School Trips",
      desc: "Safety-first transportation for educational excursions.",
      icon: "school"
    }
  ];

  const chargeFactors = [
    'Distance (Per km rate)',
    'Number of travel days',
    'Type of bus (Volvo / AC / Mini Bus)',
    'Toll, parking & driver allowance',
  ]

  const whyFeatures = [
    {
      icon: 'directions_bus',
      title: 'Elite Fleet',
      description: 'Volvo & Bharat Benz Luxury Coaches',
    },
    {
      icon: 'badge',
      title: 'Professional Chauffeurs',
      description: 'Trained, courteous & experienced',
    },
    {
      icon: 'location_on',
      title: 'On Time Pickup',
      description: 'NCR, Hotels, Airports & Stations',
    },
    {
      icon: 'chair_alt',
      title: 'Supreme Comfort',
      description: 'Pushback seats with extra legroom',
    },
    {
      icon: 'clean_hands',
      title: 'Hygiene Assured',
      description: 'Fully sanitized after every ride',
    },
    {
      icon: 'groups',
      title: 'Best Value',
      description: 'Perfect for corporate & group travel',
    },
  ]

  const contactCards = [
    {
      icon: 'support_agent',
      label: 'Toll-Free Support',
      value: '1800-1027-408',
    },
    {
      icon: 'chat',
      label: 'Whatsapp Booking',
      value: '9811992209, 9811992203',
    },
    {
      icon: 'mail',
      label: 'Email',
      value: 'booking@anttravels.com',
    },
  ]

  const destinations = [
    {
      title: 'Delhi to Jaipur Bus Rental',
      image: jaipurImage,
      popular: true,
    },
    {
      title: 'Delhi to Agra Bus Rental',
      image: agraImage,
      popular: true,
    },
    {
      title: 'Delhi to Chandigarh Bus Rental',
      image: chandigarhImage,
      popular: true,
    },
    {
      title: 'Delhi to Manali Bus Rental',
      image: manaliImage,
      popular: true,
    },
  ]

  const stories = [
    {
      name: 'Ankit Sharma',
      text: `"The easiest booking experience I've ever had. The sleeper bus from Delhi was super clean and arrived on time!"`,
    },
    {
      name: 'Ankit Sharma',
      text: `"The easiest booking experience I've ever had. The sleeper bus from Delhi was super clean and arrived on time!"`,
    },
    {
      name: 'Ankit Sharma',
      text: `"The easiest booking experience I've ever had. The sleeper bus from Delhi was super clean and arrived on time!"`,
    },
  ]

  const relatedBuses = [
    {
      title: '21 Pax (2+1) AC Deluxe Coach',
      seats: '21 Pax',
      ac: 'AC',
      luggage: '30 Luggage',
      water: 'Water Bottle',
      description:
        'Luxury 22-seater coach perfect for weddings, corporate trips & weekend travel. Enjoy AC comfort, premium seats and a smooth ride.',
      localPrice: 'Rs9500',
      outstationPrice: 'Rs60',
    },
    {
      title: '21 Pax (2+1) AC Deluxe Coach',
      seats: '21 Pax',
      ac: 'AC',
      luggage: '30 Luggage',
      water: 'Water Bottle',
      description:
        'Luxury 22-seater coach perfect for weddings, corporate trips & weekend travel. Enjoy AC comfort, premium seats and a smooth ride.',
      localPrice: 'Rs9500',
      outstationPrice: 'Rs60',
    },
    {
      title: '21 Pax (2+1) AC Deluxe Coach',
      seats: '21 Pax',
      ac: 'AC',
      luggage: '30 Luggage',
      water: 'Water Bottle',
      description:
        'Luxury 22-seater coach perfect for weddings, corporate trips & weekend travel. Enjoy AC comfort, premium seats and a smooth ride.',
      localPrice: 'Rs9500',
      outstationPrice: 'Rs60',
    },
    {
      title: '21 Pax (2+1) AC Deluxe Coach',
      seats: '21 Pax',
      ac: 'AC',
      luggage: '30 Luggage',
      water: 'Water Bottle',
      description:
        'Luxury 22-seater coach perfect for weddings, corporate trips & weekend travel. Enjoy AC comfort, premium seats and a smooth ride.',
      localPrice: 'Rs9500',
      outstationPrice: 'Rs60',
    },
  ]

  const quickLinks = [
    {
      category: 'Pilgrimage Tours',
      active: true,
      links: [
        'Delhi to Ayodhya Bus Rental',
        'Delhi to Varanasi Bus Rental',
        'Delhi to Prayagraj Bus Rental',
        'Delhi to Ujjain Bus Rental',
        'Delhi to Chitrakoot Bus Rental',
        'Delhi to Khatu Shyam Bus Rental',
        'Delhi to Salasar Balaji Bus Rental',
        'Delhi to Vaishno Devi Bus Rental',
      ],
    },
    {
      category: 'Hill Station Tours',
      active: false,
      links: [
        'Delhi to Manali Bus Rental',
        'Delhi to Shimla Bus Rental',
        'Delhi to Mussoorie Bus Rental',
        'Delhi to Nainital Bus Rental',
        'Delhi to Ranikhet Bus Rental',
        'Delhi to Jim Corbett Bus Rental',
        'Delhi to Dehradun Bus Rental',
        'Delhi to Srinagar Bus Rental',
      ],
    },
    {
      category: 'Rajasthan Tours',
      active: false,
      links: [
        'Delhi to Jaipur Bus Rental',
        'Delhi to Jodhpur Bus Rental',
        'Delhi to Udaipur Bus Rental',
        'Delhi to Jaisalmer Bus Rental',
        'Delhi to Bikaner Bus Rental',
        'Delhi to Ranikhet Bus Rental',
        'Delhi to Jim Corbett Bus Rental',
        'Delhi to Orchha Bus Rental',
      ],
    },
    {
      category: 'Corporate & Event Rentals',
      active: false,
      links: [
        'Bus Rental for Corporate Events',
        'Wedding Bus Rental Service',
        'School / College Trip Bus Hire',
        'Airport / Station Transfer',
        'Outstation Group Tours Bus Rental',
      ],
    },
  ]

  const wizardSteps = [
    { step: 1, label: 'SERVICE' },
    { step: 2, label: 'TRIP DETAILS' },
    { step: 3, label: 'YOUR INFO' },
  ]

  const serviceCarouselScrollBy = (direction) => {
    const track = serviceCarouselRef.current
    if (!track) {
      return
    }

    const firstCard = track.querySelector('.wizard-service-card')
    const styles = window.getComputedStyle(track)
    const gapValue = Number.parseFloat(styles.columnGap || styles.gap || '0')
    const step = firstCard ? firstCard.getBoundingClientRect().width + gapValue : track.clientWidth * 0.9

    track.scrollBy({
      left: direction * step,
      behavior: 'smooth',
    })
  }

  const renderSubmitArea = (extraClass = '') => (
    <section className={`submit-area ${extraClass}`.trim()}>
      <button className="submit-btn" type="button">
        SEND ENQUIRY
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
      <p className="tiny-note">
        After clicking &ldquo;Send Enquiry&rdquo;, you will receive a call from Ant Travel for quotation.
      </p>
    </section>
  )

  const renderTrustHighlights = () => (
    <>
      <div className="highlights-grid">
        {topHighlights.map((item) => (
          <div key={item.label} className="highlight-card">
            <div className={`icon-circ ${item.clr}`}>
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <div className="highlight-content">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="reviews-foot">
        <div className="avatars">
          <img src={r1Image} alt="Reviewer" />
          <img src={r2Image} alt="Reviewer" />
          <img src={r3Image} alt="Reviewer" />
          <span className="plus-k">+1k</span>
        </div>
        <div className="rating-info">
          <div className="rating-top">
            <strong>4.8</strong>
            <span className="stars" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="material-symbols-outlined star-symbol">star</span>
              ))}
            </span>
          </div>
          <p>1,000+ GOOGLE REVIEWS</p>
        </div>
      </div>
    </>
  )

  if (isAdminPanelView) {
    return (
      <AdminPanelView
        savedEnquiries={savedEnquiries}
        formatAdminDateTime={formatAdminDateTime}
        getRouteSummary={getRouteSummary}
        getAdminRouteDetails={getAdminRouteDetails}
        getAdminRouteStats={getAdminRouteStats}
        onGoToPublicForm={goToPublicForm}
        onClearAdminData={handleClearAdminData}
      />
    )
  }

  if (currentPath === '/' || currentPath === '') {
    return <FigmaHomePage />
  }
  if (currentPath === '/bus-ticket') {
    return <BusTicketPage />
  }
  if (currentPath === '/rent-traveller') {
    return <RentTravellerPage />
  }
  if (currentPath === '/rent-traveller/routes') {
    return <TravellerRoutesPage />
  }
  if (currentPath === '/rent-car') {
    return <RentCarPage />
  }
  if (currentPath === '/bus-tour') {
    return <BusTourPage />
  }
  if (currentPath === '/popular-routes') {
    return <PopularRoutesPage />
  }
  if (currentPath === '/popular-routes/view-buses') {
    return <RouteBusesPage />
  }
  if (currentPath === '/popular-routes/view-buses/detail') {
    return <BusDetailPage />
  }
  if (currentPath === '/popular-routes/view-buses/detail/book-now') {
    return <BusBookingPage />
  }
  if (currentPath === '/popular-routes/view-buses/detail/book-now/passenger-details') {
    return <PassengerDetailsPage />
  }
  if (currentPath === '/popular-routes/view-buses/detail/book-now/passenger-details/summary') {
    return <BookingSummaryPage />
  }
  if (currentPath === '/popular-routes/view-buses/detail/book-now/passenger-details/summary/payment') {
    return <SecurePaymentPage />
  }
  if (currentPath === '/popular-routes/view-buses/detail/book-now/passenger-details/summary/payment/confirmed') {
    return <BookingConfirmedPage />
  }

  return (
    <>
      <FigmaNavbar />

      <div className="enquiry-shell wizard-mode">
        <div className="enquiry-canvas">
          {/* Mobile Section 1: Trust Signals & Contact (Mobile Only Landing) */}
          {isMobile && !showMobileWizard && !isAdminPanelView && (
            <section className="contact-section mobile-only-section1">
              <div className="badge-wrapper">
                <div className="status-badge">
                  <span className="material-symbols-outlined">verified</span>
                  24×7 Available
                </div>
              </div>
              <div className="contact-copy">
                <h2 className="centered-h2">24×7 Bus Booking in Delhi NCR Contact ANT Travels</h2>
                <p className="centered-p">Need instant booking for bus hire in Delhi NCR? Contact us now for quick response and best pricing.</p>
              </div>

              <div className="contact-cards-grid">
                {contactCards.map((card) => (
                  <article key={card.label} className="contact-mini-card">
                    <div className="icon-circ">
                      <span className="material-symbols-outlined">{card.icon}</span>
                    </div>
                    <div className="content">
                      <p>{card.label}</p>
                      <h4>{card.value}</h4>
                    </div>
                  </article>
                ))}
              </div>

              <div className="contact-actions">
                <button className="btn-book" onClick={handleStartBooking}>
                  <span className="btn-book-text">Book Now</span>
                  <span className="material-symbols-outlined btn-book-arrow">arrow_outward</span>
                </button>
                <button className="btn-whatsapp" onClick={handleWhatsAppBooking}>
                  <span className="material-symbols-outlined">forum</span> Chat on WhatsApp
                </button>
              </div>
            </section>
          )}

          {(!isMobile || showMobileWizard) && (
            <>
              {isMobile && (
                <div className="back-header mobile-back-header">
                  <button
                    type="button"
                    className="back-pill"
                    onClick={() => setShowMobileWizard(false)}
                  >
                    <span className="material-symbols-outlined">arrow_back</span>
                    BACK TO INFO
                  </button>
                </div>
              )}
              <div className="title-block">
                <h1>Send Enquiry</h1>
                <p>&ldquo;Book Bus, Tempo Traveller &amp; Car at Best Price in Delhi NCR&rdquo;</p>
              </div>
              <div className="wizard-process-strip">
                <div className="wizard-topbar">
                  <div className="wizard-stepper-row">
                    {wizardSteps.map(({ step, label }) => {
                      const isActive = wizardStep === step
                      const isCompleted = wizardStep > step
                      const showCheck = wizardStep >= step
                      const isLocked = step === 2
                        ? !canAccessStep2 && wizardStep < 2
                        : step === 3
                          ? !canAccessStep3 && wizardStep < 3
                          : false

                      return (
                        <React.Fragment key={step}>
                          <button
                            type="button"
                            className={`wizard-step-pill${isActive ? ' active' : ''}${isCompleted ? ' completed' : ''}${isLocked ? ' locked' : ''}`}
                            aria-current={isActive ? 'step' : undefined}
                            aria-disabled={isLocked}
                            disabled={isLocked}
                            onClick={() => handleStepChange(step)}
                          >
                            <span className="wizard-step-indicator" aria-hidden="true">
                              {showCheck ? <span className="material-symbols-outlined">check_circle</span> : step}
                            </span>
                            <span className="wizard-step-pill-text">{label}</span>
                          </button>
                          {step !== 3 && <div className="wizard-step-line" aria-hidden="true" />}
                        </React.Fragment>
                      )
                    })}
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="main-card">
            {(!isMobile || showMobileWizard) && (
              <main className="main-layout">
                {/* Left Column: Form Section */}
                <div className="form-column">
                  <section className="booking-form">
                    <div className="wizard-body">
                      {isSubmitted ? (
                        <SuccessScreen onReset={() => setIsSubmitted(false)} />
                      ) : (
                        <>
                          {wizardStep === 2 && (
                            <div className="wizard-panel">
                              <div className="wizard-panel-heading">
                                <div className="wizard-icon-circle">
                                  <span className="material-symbols-outlined">event</span>
                                </div>
                                <div>
                                  <h2>Trip Details</h2>
                                  <p>When and where are you traveling?</p>
                                </div>
                              </div>

                              <div className="wizard-trip-grid">
                                <div className="wizard-field wizard-date-field">
                                  <label>DEPARTURE DATE</label>
                                  <div className={`wizard-icon-input${step2TravelDateError ? ' is-invalid' : ''}`}>
                                    <span className="wizard-icon">
                                      <span className="material-symbols-outlined">calendar_month</span>
                                    </span>
                                    <DatePicker
                                      className="wizard-date-control"
                                      selected={normalizedTravelDate}
                                      onChange={(value) => {
                                        setTravelDate(value ? format(value, 'yyyy-MM-dd') : '')
                                      }}
                                      minDate={todayDate}
                                      dateFormat="dd/MM/yyyy"
                                      placeholderText="Select departure date"
                                      required
                                      showPopperArrow={false}
                                      calendarClassName="wizard-calendar"
                                      popperClassName="wizard-calendar-popper"
                                    />
                                  </div>
                                  {step2TravelDateError ? <p className="wizard-field-error">Departure date is required.</p> : null}
                                </div>

                                <div className="wizard-field">
                                  <label>DEPARTURE TIME</label>
                                  <div className={`wizard-time-input${step2DepartureTimeError ? ' is-invalid' : ''}`}>
                                    <span className="wizard-icon" aria-hidden="true">
                                      <span className="material-symbols-outlined">schedule</span>
                                    </span>
                                    <div className="wizard-time-selects">
                                      <select value={travelTimeHour} required onChange={(e) => setTravelTimeHour(e.target.value)}>
                                        <option value="" disabled>
                                          --
                                        </option>
                                        {departureHourOptions.map((hour) => (
                                          <option key={hour} value={hour}>{hour}</option>
                                        ))}
                                      </select>
                                      <select value={travelTimeMinute} required onChange={(e) => setTravelTimeMinute(e.target.value)}>
                                        <option value="" disabled>
                                          --
                                        </option>
                                        {departureMinuteOptions.map((m) => (
                                          <option key={m} value={m}>{m}</option>
                                        ))}
                                      </select>
                                      <select value={travelTimePeriod} required onChange={(e) => setTravelTimePeriod(e.target.value)}>
                                        <option value="" disabled>
                                          --
                                        </option>
                                        {departurePeriodOptions.map((p) => (
                                          <option key={p} value={p}>{p}</option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                  {step2DepartureTimeError ? <p className="wizard-field-error">Departure time is required.</p> : null}
                                </div>

                                {selectedService === 'airport_transfers' && (
                                  <LocationInput
                                    label={pickupLabel}
                                    value={pickupPoint}
                                    placeholder={pickupPlaceholder}
                                    onChange={setPickupPoint}
                                    onSuggestionSelect={(point) => {
                                      setPickupMapPoint(point)
                                      setActiveMapTarget('pickup')
                                      setMapSearchQuery(point.label)
                                    }}
                                    onFocus={() => {
                                      setActiveMapTarget('pickup')
                                      setMapSearchQuery(pickupPoint)
                                      setMapMessage('')
                                    }}
                                    invalid={step2PickupError}
                                    errorText={step2PickupError ? 'Pickup point is required.' : ''}
                                    className="wizard-field-span-2"
                                    famousPlaces={FAMOUS_PLACE_SUGGESTIONS}
                                    fetchSuggestions={fetchSuggestions}
                                    fetchGeocode={fetchGeocode}
                                  />
                                )}

                                {selectedService === 'airport_transfers' ? (
                                  <LocationInput
                                    label={dropLabel}
                                    value={dropOffPoint}
                                    placeholder={dropPlaceholder}
                                    onChange={setDropOffPoint}
                                    onSuggestionSelect={(point) => {
                                      setStopMapPoint(point)
                                      setMapSearchQuery(point.label)
                                    }}
                                    invalid={step2DropOffError}
                                    errorText={step2DropOffError ? 'Drop-off point is required.' : ''}
                                    famousPlaces={FAMOUS_PLACE_SUGGESTIONS}
                                    fetchSuggestions={fetchSuggestions}
                                    fetchGeocode={fetchGeocode}
                                  />
                                ) : (
                                  <>
                                    <LocationInput
                                      label={pickupLabel}
                                      value={pickupPoint}
                                      placeholder={pickupPlaceholder}
                                      onChange={setPickupPoint}
                                      onSuggestionSelect={(point) => {
                                        setPickupMapPoint(point)
                                        setActiveMapTarget('pickup')
                                        setMapSearchQuery(point.label)
                                      }}
                                      onFocus={() => {
                                        setActiveMapTarget('pickup')
                                        setMapSearchQuery(pickupPoint)
                                        setMapMessage('')
                                      }}
                                      invalid={step2PickupError}
                                      errorText={step2PickupError ? 'Pickup point is required.' : ''}
                                      className="wizard-field-span-2"
                                      famousPlaces={FAMOUS_PLACE_SUGGESTIONS}
                                      fetchSuggestions={fetchSuggestions}
                                      fetchGeocode={fetchGeocode}
                                    />

                                    <LocationInput
                                      label="ADD STOP"
                                      value={intermediateStops[0]?.point || ''}
                                      placeholder="Enter stop point"
                                      icon="add_location_alt"
                                      onChange={(val) => updateIntermediateStop(0, 'point', val)}
                                      onSuggestionSelect={(point) => {
                                        if (!isStopMapTargetDisabled) {
                                          setStopMapPoint(point)
                                          setActiveMapTarget('stop')
                                          setMapSearchQuery(point.label)
                                        }
                                      }}
                                      onFocus={() => {
                                        if (!isStopMapTargetDisabled) {
                                          setActiveMapTarget('stop')
                                          setMapSearchQuery(intermediateStops[0]?.point || '')
                                          setMapMessage('')
                                        }
                                      }}
                                      invalid={step2PrimaryStopError}
                                      errorText={step2PrimaryStopError ? 'First stop point is required.' : ''}
                                      className="wizard-field-span-2"
                                      famousPlaces={FAMOUS_PLACE_SUGGESTIONS}
                                      fetchSuggestions={fetchSuggestions}
                                      fetchGeocode={fetchGeocode}
                                    />

                                    <div className="wizard-field wizard-field-span-2 wizard-add-stop-stack">
                                      <button
                                        type="button"
                                        className="wizard-add-stop-field"
                                        onClick={addIntermediateStop}
                                      >
                                        <span className="wizard-add-stop-plus" aria-hidden="true">+</span>
                                        Add Another Stop
                                      </button>
                                    </div>

                                    {intermediateStops.length > 1 && (
                                      <div className="wizard-field wizard-field-span-2 wizard-extra-stops-row">
                                        <div className="wizard-extra-stops-right">
                                          {intermediateStops.slice(1).map((stop, offsetIndex) => {
                                            const i = offsetIndex + 1
                                            return (
                                              <div key={i} className="wizard-stop-point-wrapper">
                                                <LocationInput
                                                  label="STOP POINT"
                                                  value={stop.point}
                                                  placeholder={`Enter stop ${i + 1}`}
                                                  onChange={(val) => updateIntermediateStop(i, 'point', val)}
                                                  invalid={extraStopPointErrors[offsetIndex]}
                                                  errorText={extraStopPointErrors[offsetIndex] ? 'Stop point is required.' : ''}
                                                  className="wizard-stop-point-input"
                                                  actionButton={
                                                    <button
                                                      type="button"
                                                      className="wizard-stop-remove-btn wizard-stop-remove-inline"
                                                      aria-label={`Remove stop ${i + 1}`}
                                                      title={`Remove stop ${i + 1}`}
                                                      onClick={() => removeIntermediateStop(i)}
                                                    >
                                                      <span className="material-symbols-outlined">close</span>
                                                    </button>
                                                  }
                                                  famousPlaces={FAMOUS_PLACE_SUGGESTIONS}
                                                  fetchSuggestions={fetchSuggestions}
                                                  fetchGeocode={fetchGeocode}
                                                />
                                              </div>
                                            )
                                          })}
                                        </div>
                                      </div>
                                    )}

                                    <div className="wizard-field wizard-date-field wizard-stop-date-field">
                                      <label>ARRIVAL DATE</label>
                                      <div className={`wizard-icon-input${step2ArrivalDateError ? ' is-invalid' : ''}`}>
                                        <span className="wizard-icon">
                                          <span className="material-symbols-outlined">calendar_month</span>
                                        </span>
                                        <DatePicker
                                          className="wizard-date-control wizard-stop-date-control"
                                          selected={
                                            intermediateStops[0]?.arrivalDate
                                              ? new Date(`${intermediateStops[0].arrivalDate}T00:00:00`)
                                              : null
                                          }
                                          onChange={(value) =>
                                            updateIntermediateStop(0, 'arrivalDate', value ? format(value, 'yyyy-MM-dd') : '')
                                          }
                                          minDate={arrivalMinDate}
                                          dateFormat="dd/MM/yyyy"
                                          placeholderText="Arrival date"
                                          required
                                          showPopperArrow={false}
                                          calendarClassName="wizard-calendar"
                                          popperClassName="wizard-calendar-popper"
                                        />
                                      </div>
                                      {step2ArrivalDateError ? <p className="wizard-field-error">Arrival date is required.</p> : null}
                                    </div>

                                    <div className="wizard-field">
                                      <label>ARRIVAL TIME</label>
                                      <div className={`wizard-time-input wizard-stop-time-input${step2ArrivalTimeError ? ' is-invalid' : ''}`}>
                                        <span className="wizard-icon" aria-hidden="true">
                                          <span className="material-symbols-outlined">schedule</span>
                                        </span>
                                        <div className="wizard-time-selects">
                                          <select
                                            value={intermediateStops[0]?.arrivalTimeHour || ''}
                                            required
                                            onChange={(e) => updateIntermediateStop(0, 'arrivalTimeHour', e.target.value)}
                                          >
                                            <option value="" disabled>
                                              --
                                            </option>
                                            {arrivalHourOptions.map((hour) => (
                                              <option key={hour} value={hour}>{hour}</option>
                                            ))}
                                          </select>
                                          <select
                                            value={intermediateStops[0]?.arrivalTimeMinute || ''}
                                            required
                                            onChange={(e) => updateIntermediateStop(0, 'arrivalTimeMinute', e.target.value)}
                                          >
                                            <option value="" disabled>
                                              --
                                            </option>
                                            {arrivalMinuteOptions.map((m) => (
                                              <option key={m} value={m}>{m}</option>
                                            ))}
                                          </select>
                                          <select
                                            value={intermediateStops[0]?.arrivalTimePeriod || ''}
                                            required
                                            onChange={(e) => updateIntermediateStop(0, 'arrivalTimePeriod', e.target.value)}
                                          >
                                            <option value="" disabled>
                                              --
                                            </option>
                                            {arrivalPeriodOptions.map((p) => (
                                              <option key={p} value={p}>{p}</option>
                                            ))}
                                          </select>
                                        </div>
                                      </div>
                                      {step2ArrivalTimeError ? <p className="wizard-field-error">{step2ArrivalTimeErrorText}</p> : null}
                                    </div>

                                  </>
                                )}

                              </div>

                              <datalist id="pickup-location-suggestions">
                                {FAMOUS_PLACE_SUGGESTIONS.map((place) => (
                                  <option key={`pickup-${place}`} value={place} />
                                ))}
                              </datalist>
                              <datalist id="drop-location-suggestions">
                                {FAMOUS_PLACE_SUGGESTIONS.map((place) => (
                                  <option key={`drop-${place}`} value={place} />
                                ))}
                              </datalist>
                              <datalist id="stop-location-suggestions">
                                {FAMOUS_PLACE_SUGGESTIONS.map((place) => (
                                  <option key={`stop-${place}`} value={place} />
                                ))}
                              </datalist>

                              <div className="wizard-nav-row wizard-nav-row-2">
                                <button type="button" className="wizard-secondary-btn" onClick={() => handleStepChange(1)}>
                                  <span className="material-symbols-outlined">arrow_back</span> BACK
                                </button>
                                <button
                                  type="button"
                                  className="wizard-primary-btn"
                                  onClick={handleStep2Next}
                                >
                                  NEXT <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                              </div>
                            </div>
                          )}

                          {wizardStep === 1 && (
                            <div className="wizard-panel">
                              <div className="wizard-service-head">
                                <div className="wizard-service-head-main">
                                  <span className="wizard-service-head-icon" aria-hidden="true">
                                    <span className="material-symbols-outlined">hub</span>
                                  </span>
                                  <div className="wizard-service-head-copy">
                                    <h2>Choose Your Service</h2>
                                    <p>Select the type of travel you need</p>
                                  </div>
                                </div>
                                <div className="wizard-service-head-actions">
                                  <button
                                    type="button"
                                    className="wizard-service-scroll-btn"
                                    onClick={() => serviceCarouselScrollBy(-1)}
                                    aria-label="Scroll services left"
                                  >
                                    <span className="material-symbols-outlined">chevron_left</span>
                                  </button>
                                  <button
                                    type="button"
                                    className="wizard-service-scroll-btn"
                                    onClick={() => serviceCarouselScrollBy(1)}
                                    aria-label="Scroll services right"
                                  >
                                    <span className="material-symbols-outlined">chevron_right</span>
                                  </button>
                                </div>
                              </div>

                              <div className="wizard-service-carousel-wrap">
                                <div className="wizard-service-carousel" ref={serviceCarouselRef}>
                                  {serviceCards.map((card) => {
                                    const selected = selectedService === card.key
                                    return (
                                      <button
                                        key={card.key}
                                        type="button"
                                        className={`wizard-service-card${selected ? ' selected' : ''}`}
                                        onClick={() => handleServiceSelect(card.key)}
                                      >
                                        {selected && (
                                          <span className="wizard-service-check" aria-hidden="true">
                                            <span className="material-symbols-outlined">check_circle</span>
                                          </span>
                                        )}
                                        <span className="wizard-service-icon-chip">
                                          <span className="material-symbols-outlined">{card.icon}</span>
                                        </span>
                                        <h3>{card.title}</h3>
                                        <p>{card.desc}</p>
                                      </button>
                                    )
                                  })}
                                </div>
                              </div>
                              {step1ServiceError ? <p className="wizard-field-error">Please select a service.</p> : null}
                              <div className="wizard-subsection">
                                <>
                                    <div className="fields-grid wizard-input-grid">
                                      {isHybridService && (
                                        <div className="wizard-field wizard-field-span-2">
                                          <label>TRAVEL DESTINATION</label>
                                          <div className="wizard-radio-group">
                                            <label className={`wizard-radio-item ${destination === 'Local City Travel' ? 'active' : ''}`}>
                                              <input
                                                type="radio"
                                                name="wizard-hybrid-dest"
                                                value="Local City Travel"
                                                checked={destination === 'Local City Travel'}
                                                onChange={(e) => {
                                                  setDestination(e.target.value)
                                                  setTripDetail('')
                                                  setVehicleType('')
                                                  setVehicleName('')
                                                }}
                                              />
                                              <span className="radio-mark"></span>
                                              <span className="radio-label">Local City Travel</span>
                                            </label>
                                            <label className={`wizard-radio-item ${destination === 'Outstation' ? 'active' : ''}`}>
                                              <input
                                                type="radio"
                                                name="wizard-hybrid-dest"
                                                value="Outstation"
                                                checked={destination === 'Outstation'}
                                                onChange={(e) => {
                                                  setDestination(e.target.value)
                                                  setTripDetail('')
                                                  setVehicleType('')
                                                  setVehicleName('')
                                                }}
                                              />
                                              <span className="radio-mark"></span>
                                              <span className="radio-label">Outstation Trips</span>
                                            </label>
                                          </div>
                                        </div>
                                      )}

                                      {tripOptions.length > 0 && (
                                        <div className="wizard-field wizard-field-span-2">
                                          <label>{tripFieldLabel || 'TRIP TYPE'}</label>
                                          <div
                                            className={`wizard-radio-group${step1TripDetailError ? ' is-invalid' : ''}${isLocalTravel ? ' wizard-radio-group-local' : ''}${selectedService === 'airport_transfers' ? ' wizard-radio-group-airport' : ''}`}
                                          >
                                            {tripOptions.map((opt) => {
                                              const val = typeof opt === 'string' ? opt : opt.value
                                              const lab = typeof opt === 'string' ? opt : opt.label
                                              const isLocalPackageOption = isLocalTravel && String(val).includes('/')
                                              const [localHourRaw, localDistanceRaw] = isLocalPackageOption ? val.split('/') : ['', '']
                                              const localHour = localHourRaw.replace(/(\d+)\s*hr/i, '$1hr').toLowerCase()
                                              const localDistance = localDistanceRaw.replace(/(\d+)\s*km/i, '$1km').toLowerCase()
                                              return (
                                                <label
                                                  key={val}
                                                  className={`wizard-radio-item ${tripDetail === val ? 'active' : ''}${isLocalPackageOption ? ' wizard-radio-item-local' : ''}${selectedService === 'airport_transfers' ? ' wizard-radio-item-airport' : ''}`}
                                                >
                                                  <input
                                                    type="radio"
                                                    name="wizard-trip-type"
                                                    value={val}
                                                    checked={tripDetail === val}
                                                    onChange={(e) => {
                                                      const nextTripDetail = e.target.value
                                                      setTripDetail(nextTripDetail)
                                                      setVehicleType('')
                                                      setVehicleName('')
                                                      setTripOptionAutoOpenKey((prev) => prev + 1)
                                                    }}
                                                  />
                                                  <span className="radio-mark"></span>
                                                  {isLocalPackageOption ? (
                                                    <span className="radio-label radio-label-local">
                                                      <span className="radio-label-local-hour">{localHour}</span>
                                                      <span className="radio-label-local-separator" aria-hidden="true">/</span>
                                                      <span className="radio-label-local-distance">{localDistance}</span>
                                                    </span>
                                                  ) : (
                                                    <span className="radio-label">{lab}</span>
                                                  )}
                                                </label>
                                              )
                                            })}
                                          </div>
                                          {step1TripDetailError ? <p className="wizard-field-error">Please select trip type.</p> : null}
                                        </div>
                                      )}
                                    </div>

                                    <div className="wizard-subsection-title wizard-subsection-title-vehicle">
                                      <span className="material-symbols-outlined">directions_bus</span>
                                      Vehicle Details
                                    </div>

                                    <div className="fields-grid wizard-vehicle-grid">
                                      <FormSelect
                                        label="VEHICLE TYPE"
                                        value={vehicleType}
                                        placeholder="Select Vehicle Type"
                                        options={filteredVehicleTypeOptions}
                                        disabled={!tripDetail}
                                        autoOpenTrigger={tripOptionAutoOpenKey}
                                        onChange={(selectedValue) => {
                                          setVehicleType(selectedValue)
                                          setVehicleName('')
                                          setVehicleNameAutoOpenKey((prev) => prev + 1)
                                        }}
                                        invalid={step1VehicleTypeError}
                                        errorText={step1VehicleTypeError ? 'Please select vehicle type.' : ''}
                                      />
                                      <FormSelect
                                        label="VEHICLE NAME"
                                        value={vehicleName}
                                        placeholder="Select Vehicle Name"
                                        options={vehicleNameOptionsWithPrice}
                                        disabled={!tripDetail || !vehicleType}
                                        autoOpenTrigger={vehicleNameAutoOpenKey}
                                        onChange={setVehicleName}
                                        className="vehicle-name-select"
                                        menuClassName="vehicle-name-menu"
                                        invalid={step1VehicleNameError}
                                        errorText={step1VehicleNameError ? 'Please select vehicle name.' : ''}
                                      />
                                    </div>
                                </>
                              </div>

                              <div className="wizard-nav-row">
                                <button
                                  type="button"
                                  className="wizard-primary-btn"
                                  onClick={handleStep1Next}
                                >
                                  NEXT <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                              </div>
                            </div>
                          )}

                          {wizardStep === 3 && (
                            <div className="wizard-panel">
                              <div className="wizard-panel-heading">
                                <div className="wizard-icon-circle">
                                  <span className="material-symbols-outlined">account_circle</span>
                                </div>
                                <div>
                                  <h2>Your Information</h2>
                                  <p>How can we reach you?</p>
                                </div>
                              </div>

                              <div className="wizard-info-grid">
                                <div className="wizard-field">
                                  <label>FULL NAME</label>
                                  <div className={`wizard-icon-input${step3FullNameError ? ' is-invalid' : ''}`}>
                                    <span className="wizard-icon">
                                      <span className="material-symbols-outlined">person</span>
                                    </span>
                                    <input
                                      type="text"
                                      value={fullName}
                                      onChange={(e) => setFullName(e.target.value)}
                                      placeholder="Full Name"
                                      required
                                    />
                                  </div>
                                  {step3FullNameError ? <p className="wizard-field-error">Full name is required.</p> : null}
                                </div>

                                <div className="wizard-field">
                                  <label>PHONE NUMBER</label>
                                  <div className={`wizard-icon-input wizard-phone-input${step3PhoneError ? ' is-invalid' : ''}`}>
                                    <span className="wizard-icon">
                                      <span className="material-symbols-outlined">call</span>
                                    </span>
                                    <span className="phone-prefix">+91</span>
                                    <input
                                      type="tel"
                                      value={phoneNumber}
                                      onChange={(e) => {
                                        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                                        setPhoneNumber(val);
                                      }}
                                      placeholder="Phone Number"
                                      required
                                    />
                                  </div>
                                  {step3PhoneError ? <p className="wizard-field-error">{step3PhoneErrorText}</p> : null}
                                </div>

                                <div className="wizard-field wizard-field-span-2">
                                  <label>EMAIL ADDRESS</label>
                                  <div className={`wizard-icon-input${step3EmailError ? ' is-invalid' : ''}`}>
                                    <span className="wizard-icon">
                                      <span className="material-symbols-outlined">mail</span>
                                    </span>
                                    <input
                                      type="email"
                                      value={emailAddress}
                                      onChange={(e) => setEmailAddress(e.target.value)}
                                      placeholder="Email Address"
                                      required
                                    />
                                  </div>
                                  {step3EmailError ? <p className="wizard-field-error">{step3EmailErrorText}</p> : null}
                                </div>

                                <div className="wizard-field wizard-field-span-2">
                                  <label>ADDITIONAL NOTES</label>
                                  <div className={`wizard-icon-textarea${step3NotesError ? ' is-invalid' : ''}`}>
                                    <textarea
                                      value={additionalNotes}
                                      onChange={(e) => setAdditionalNotes(e.target.value)}
                                      placeholder="Any special requests, luggage details, accessibility needs..."
                                      required
                                    />
                                    <span className="wizard-textarea-icon" aria-hidden="true">
                                      <span className="material-symbols-outlined">edit</span>
                                    </span>
                                  </div>
                                  {step3NotesError ? <p className="wizard-field-error">Additional notes are required.</p> : null}
                                </div>
                              </div>

                              <div className="wizard-nav-row wizard-nav-row-3">
                                <button type="button" className="wizard-secondary-btn" onClick={() => handleStepChange(2)}>
                                  <span className="material-symbols-outlined">arrow_back</span> BACK
                                </button>
                                <button
                                  type="button"
                                  className="wizard-primary-btn"
                                  onClick={handleEnquirySubmit}
                                >
                                  SEND ENQUIRY <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </section>
                </div>

                {/* Right Column: Sidebar Section */}
                <aside className="right-card">
                  {isMapFullscreenActive && (
                    <button
                      type="button"
                      className="map-fullscreen-backdrop"
                      aria-label="Close full map"
                      onClick={() => setIsMapExpanded(false)}
                    />
                  )}
                  <div className={`map-card${isMapFullscreenActive ? ' map-card-fullscreen' : ''}`}>
                    <div className="map-container">
                      {isMapRouteStep ? (
                        <>
                          <div
                            ref={mapContainerRef}
                            className="map-embed interactive-map"
                            aria-label="Interactive trip map"
                          />
                          {isMapInteractiveStep && (
                            <div className="map-overlay-controls">
                              <div className="map-target-switch" role="group" aria-label="Choose field to update from map">
                                <button
                                  type="button"
                                  className={`map-target-btn${effectiveMapTarget === 'pickup' ? ' active' : ''}`}
                                  onClick={() => {
                                    setActiveMapTarget('pickup')
                                    setMapSearchQuery(pickupPoint)
                                    setMapMessage('')
                                  }}
                                >
                                  Pickup
                                </button>
                                <button
                                  type="button"
                                  className={`map-target-btn${effectiveMapTarget === 'stop' ? ' active' : ''}`}
                                  onClick={() => {
                                    if (!isStopMapTargetDisabled) {
                                      setActiveMapTarget('stop')
                                      setMapSearchQuery(firstStopPoint)
                                      setMapMessage('')
                                    }
                                  }}
                                  disabled={isStopMapTargetDisabled}
                                >
                                  Add Stop
                                </button>
                              </div>

                              <div className="map-overlay-row">
                                <button
                                  type="button"
                                  className="map-fullscreen-btn"
                                  onClick={() => setIsMapExpanded((prev) => !prev)}
                                >
                                  <span className="material-symbols-outlined">
                                    {isMapFullscreenActive ? 'close_fullscreen' : 'open_in_full'}
                                  </span>
                                  {isMapFullscreenActive ? 'Exit Full Map' : 'View Full Map'}
                                </button>
                              </div>

                              <form className="map-search-form" onSubmit={handleMapSearchSubmit}>
                                <input
                                  type="text"
                                  value={mapSearchQuery}
                                  onChange={(event) => setMapSearchQuery(event.target.value)}
                                  placeholder={effectiveMapTarget === 'pickup' ? 'Search pickup location...' : 'Search stop location...'}
                                  aria-label={effectiveMapTarget === 'pickup' ? 'Search pickup location' : 'Search stop location'}
                                />
                                <button type="submit">Set</button>
                              </form>

                              <p className="map-helper-text">
                                {effectiveMapTarget === 'pickup'
                                  ? 'Map click will update Pickup Point.'
                                  : 'Map click will update Add Stop.'}
                              </p>
                              {mapMessage && <p className="map-helper-text map-helper-text-error">{mapMessage}</p>}
                            </div>
                          )}
                        </>
                      ) : (
                        <iframe
                          title="ANT Travels Location"
                          src={MAP_SIMPLE_EMBED_URL}
                          width="600"
                          height="450"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="map-embed"
                        />
                      )}
                    </div>

                    <div className="map-chips">
                      <article>
                        <p>DISTANCE</p>
                        <h4>{routeDistanceLabel}</h4>
                      </article>
                      <article>
                        <p>EST. TIME</p>
                        <h4>{routeDurationLabel}</h4>
                      </article>
                      <article>
                        <p>STOPS</p>
                        <h4>{routeStopsLabel}</h4>
                      </article>
                    </div>
                  </div>

                  {!isMobile && renderTrustHighlights()}
                </aside>
              </main>
            )}
          </div>

          {isMobile && (
            <div className="mobile-trust-section">
              {renderTrustHighlights()}
            </div>
          )}

          <section className="page-section services-section">
            <div className="services-section-inner">
              <div className="services-header-group">
                <h2>Services We Provide</h2>
                <p>Choose the right bus as per your group size:</p>
              </div>
              <div className="services-grid">
                {services.map((service) => (
                  <article key={service.title} className="service-item">
                    <span className="icon-chip">
                      <span className="material-symbols-outlined">{service.icon}</span>
                    </span>
                    <div className="service-item-text">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="charge-section">
            <h2>Bus Hire Charges for Outstation Trips</h2>
            <p>Bus rental cost depends on:</p>
            <div className="charge-chips">
              {chargeFactors.map((factor) => (
                <span key={factor}>{factor}</span>
              ))}
            </div>
          </section>

          <section className="why-section breakout-section">
            <div className="section-container">
              <div className="why-accent-blur"></div>
              <div className="why-left">
                <div className="eyebrow-row">
                  <div className="line"></div>
                  <p className="eyebrow">ELITE EXPERIENCE</p>
                </div>
                <h2>Why Choose ANT Travels ?</h2>
                <article className="trust-card">
                  <div className="avatar-stack">
                    <img src={r5Image} alt="User" />
                    <img src={r4Image} alt="User" />
                    <span className="chip-10k">10k+</span>
                  </div>
                  <div className="trust-content">
                    <h3>Trusted by 10,000+</h3>
                    <p>Travelers across India</p>
                  </div>
                </article>
              </div>

              <div className="why-grid">
                {whyFeatures.map((item) => (
                  <article key={item.title} className="why-item">
                    <div className="why-icon-box">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div className="why-item-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="contact-section desktop-only-contact">
            <div className="badge-wrapper">
              <div className="status-badge">
                <span className="material-symbols-outlined">verified</span>
                24×7 Available
              </div>
            </div>
            <div className="contact-copy">
              <h2 className="centered-h2">24×7 Bus Booking in Delhi NCR<br /> Contact ANT Travels</h2>
              <p className="centered-p">Need instant booking for bus hire in Delhi NCR? Contact us now for quick response and best pricing.</p>
            </div>

            <div className="contact-cards-grid">
              {contactCards.map((card) => (
                <article key={card.label} className="contact-mini-card">
                  <div className="icon-circ">
                    <span className="material-symbols-outlined">{card.icon}</span>
                  </div>
                  <div className="content">
                    <p>{card.label}</p>
                    <h4>{card.value}</h4>
                  </div>
                </article>
              ))}
            </div>

            <div className="contact-actions">
              <button className="btn-book" onClick={handleStartBooking}>
                <span className="btn-book-text">Book Now</span>
                <span className="material-symbols-outlined btn-book-arrow">arrow_outward</span>
              </button>
              <button className="btn-whatsapp" onClick={handleWhatsAppBooking}><span className="material-symbols-outlined">forum</span> Chat on WhatsApp</button>
            </div>
          </section>

          <section className="destinations-section">
            <div className="destinations-header">
              <div>
                <h2>Bus Rental Popular Destination</h2>
                <p>Top destinations frequently chosen for Bus rentals</p>
              </div>
              <button className="btn-outline-primary">Explore All Routes</button>
            </div>

            <div className="destinations-grid">
              {destinations.map((item) => (
                <article key={item.title} className="dest-card">
                  <div className="dest-image-wrap">
                    {item.popular && <span className="dest-popular-tag">Popular</span>}
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="dest-body">
                    <h3>{item.title}</h3>
                    <div className="dest-duration">
                      <span className="material-symbols-outlined">schedule</span>
                      <span>5 Night 2 Days</span>
                    </div>
                    <hr className="dest-divider" />
                    <div className="dest-bottom">
                      <div className="dest-price">
                        <span className="label">STARTS FROM</span>
                        <h4 className="price">{'\u20B925,000'}</h4>
                      </div>
                      <button className="btn-view-buses">View Buses</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="traveler-stories-section">
            <div className="section-container">
              <div className="stories-header">
                <h2>Traveler Stories</h2>
                <p>Every trip has a story, read them here.</p>
              </div>
              <div className="stories-wrapper">
                {stories.map((story, i) => (
                  <article key={i} className="story-card">
                    <div className="stars">
                      <span className="material-symbols-outlined star-icon">star</span>
                      <span className="material-symbols-outlined star-icon">star</span>
                      <span className="material-symbols-outlined star-icon">star</span>
                      <span className="material-symbols-outlined star-icon">star</span>
                      <span className="material-symbols-outlined star-icon">star</span>
                    </div>
                    <p className="story-text">{story.text}</p>
                    <div className="story-author">
                      <img src={r6Image} alt={story.name} />
                      <div className="author-info">
                        <h4>{story.name}</h4>
                        <p className="verified-text">Verified on Google</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="related-buses-section">
            <div className="section-container">
              <div className="related-header">
                <div className="related-header-copy">
                  <h2>Related Bus</h2>
                  <p>Similar Options You May Like</p>
                </div>
                <button type="button" className="btn-outline-primary related-explore-btn">Explore All Buses</button>
              </div>
              <div className="related-grid">
                {relatedBuses.map((bus, i) => (
                  <article key={i} className="related-card">
                    <div className="related-image">
                      <img src={busFormImage} alt={bus.title} />
                    </div>
                    <div className="related-content">
                      <div className="related-top-block">
                        <h3>{bus.title}</h3>
                        <div className="related-chips">
                          <span className="related-chip"><span className="material-symbols-outlined icon">airline_seat_recline_normal</span><span className="chip-text">{bus.seats}</span></span>
                          <span className="related-chip"><span className="material-symbols-outlined icon">ac_unit</span><span className="chip-text">{bus.ac}</span></span>
                          <span className="related-chip"><span className="material-symbols-outlined icon">luggage</span><span className="chip-text">{bus.luggage}</span></span>
                          <span className="related-chip"><span className="material-symbols-outlined icon">water_drop</span><span className="chip-text">{bus.water}</span></span>
                          <span className="material-symbols-outlined related-chips-arrow">arrow_forward</span>
                        </div>
                        <p className="related-desc">{bus.description}</p>
                      </div>

                      <div className="related-prices">
                        <p><span className="related-price-label">Local Price</span> Starting 4hr/40km- <s>{'\u20B99500'}</s> <strong className="green">{'\u20B99500'}</strong></p>
                        <p><span className="related-price-label">Outstation Price</span> Min 300km/Day- <s>{'\u20B99500'}</s> <strong className="green">{'\u20B960'}</strong><span className="per-km"> /per km</span></p>
                      </div>

                      <div className="related-actions">
                        <button className="btn-outline">View Buses</button>
                        <button className="btn-solid">
                          <span>Book Now</span>
                          <span className="material-symbols-outlined">arrow_outward</span>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <QuickTravelLinks />
      <EnquiryFooter />
    </>
  );
}

export default App;
