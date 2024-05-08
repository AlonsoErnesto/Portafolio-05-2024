import './index.scss'

const Logo = () => {
  return (
    <div className='logo'>
      <div className='logo__figure'>
        <svg className='logo__figure__svg' id="sw-js-blob-svg" viewBox="0 0 80 80" xmlns="http://www.w3.  org/2000/svg" version="1.1" width="80" height="80">
        <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor="rgba(100, 255, 218, 1)" offset="0%"></stop>
            <stop id="stop2" stopColor="rgba(100, 255, 218, 1)" offset="100%"></stop>
        </linearGradient>
        </defs>
        <path fill="none" d="M34.2,-11.7C38,0.8,30.6,16.3,18.6,24.8C6.7,33.3,   -9.8,34.8,-21.6,26.9C-33.3,19,-40.3,1.9,-35.9,-11.3C-31.5,-24.5,-15.7,  -33.7,-0.3,-33.6C15.1,-33.6,30.3,-24.2,34.2,-11.7Z"    transform="translate(40 40)" strokeWidth="3" style={{transition:   "all 0.3s ease 0s"}} stroke="url(#sw-gradient)"></path>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="SF Mono Light, sans-serif" fontSize="16" fill="#64FFDA">Dev.</text>
      </svg>
      </div>
    </div>
  )
}

export default Logo
