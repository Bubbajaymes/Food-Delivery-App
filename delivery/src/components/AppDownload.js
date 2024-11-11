import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

export default function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download The <br />Tamu App</p>
        <div className='download-platforms'>
            <img src={assets.play_store} alt='' />
            <img src={assets.app_store} alt='' />
        </div>
    </div>
  )
}
