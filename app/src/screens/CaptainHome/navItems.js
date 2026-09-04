import { ClipboardList, Home, IndianRupee, ReceiptText, UserRound } from 'lucide-react'

// Shared five-item captain bottom nav, matching "0. Captain Home.dc.html"
// and "2. Captain Dues flow.dc.html" (same spec in both source files).
// Each screen marks its own item active and supplies hrefs for the rest.
export const NAV_ITEMS = [
  { key: 'home', icon: 'home', Icon: Home, label: 'Home', href: '/home' },
  { key: 'earnings', icon: 'indian-rupee', Icon: IndianRupee, label: 'Earnings', href: '/home' },
  { key: 'bookings', icon: 'clipboard-list', Icon: ClipboardList, label: 'Bookings', href: '/home' },
  { key: 'dues', icon: 'receipt-text', Icon: ReceiptText, label: 'Dues', href: '/dues' },
  { key: 'account', icon: 'user-round', Icon: UserRound, label: 'Account', href: '/home' },
]
