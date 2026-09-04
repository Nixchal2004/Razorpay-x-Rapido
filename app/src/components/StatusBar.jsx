import { SignalHigh, Wifi } from 'lucide-react'
import './StatusBar.css'

// iOS-style status bar chrome for the 390×844 device frame, matching the
// design system's StatusBar component (time · signal · wifi · battery).
export default function StatusBar() {
  return (
    <div className="status-bar">
      <span className="status-bar__time">9:41</span>
      <div className="status-bar__icons">
        <SignalHigh size={17} strokeWidth={2.4} />
        <Wifi size={17} strokeWidth={2.4} />
        <span className="status-bar__battery">
          <span className="status-bar__battery-fill" />
        </span>
      </div>
    </div>
  )
}
