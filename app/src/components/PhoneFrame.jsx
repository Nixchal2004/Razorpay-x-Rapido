import './PhoneFrame.css'

// The 390×844 device canvas both screens render inside — matches the fixed
// preview size baked into the .dc.html prototypes.
export default function PhoneFrame({ background = '#FAFAFA', children }) {
  return (
    <div className="phone-frame" style={{ background }}>
      {children}
    </div>
  )
}
