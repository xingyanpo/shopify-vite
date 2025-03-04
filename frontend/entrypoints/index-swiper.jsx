import React from 'react'
import ReactDOM from 'react-dom/client'
import style from './index-swiper.module.scss'

function App() {
  const [light, setLight]= React.useState(false);
  return (
    <div className={`${style['text-light']} container mx-auto my-12 md:my-24 bg-blue-50 `}>
      <button onClick={() => setLight(!light)}>{light ? '开灯': '关灯'}</button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('index-swiper')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)