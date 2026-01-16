import React from 'react'
import Hero from '../components/AlinoNight/Header'
import Cocktails from '../components/AlinoNight/Cocktails'
import EventSection from '../components/AlinoNight/Event'
import ReviewsSection from '../components/AlinoNight/TextScroll'
import ReservationSection from '../components/AlinoNight/ReservationSection'
import MenuSection from '../components/AlinoNight/MenuSection'
import LiquidMenu from '../components/AlinoNight/LiquidMenu'

const AlinoNight = () => {
  return (
    <div>
      <Hero />
      <EventSection />
      <ReviewsSection />
      <ReservationSection />
      <Cocktails />
      <MenuSection />
      <LiquidMenu />
    </div>
  )
}

export default AlinoNight
