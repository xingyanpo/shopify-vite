import React from 'react'
import ReactDOM from 'react-dom/client'
import style from './index-swiper.module.scss'

function App() {
  return (
    <div className={`${style.text} container mx-auto my-12 md:my-24 bg-blue-50 `}>App</div>
  )
}

ReactDOM.createRoot(document.getElementById('index-swiper')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)