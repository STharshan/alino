import React from 'react'
import Hero from '../components/Hero/Hero'
import DelightfulExperience from '../components/DelightfulExperience'
import SeafoodSection from '../components/SeafoodSection'
import Specialties from '../components/Specialties'
import OurServices from '../components/OurServices/OurServices'
import MenuSection from "../components/MenuSection/MenuSection";
import FoodGalleryTicker from '../components/FoodScroll'
import ReviewsSlider from '../components/Testimonial'
import ContactUs from '../components/ContactUs/ContactUs'

const Home = () => {
    return (
        <div>
            <Hero />
            {/* <AboutStory /> */}
            <DelightfulExperience />
            <SeafoodSection />
            <Specialties />
            <OurServices />
            <MenuSection />
            <FoodGalleryTicker />
            {/* <OrderOnline /> */}
            <ReviewsSlider />
            <ContactUs />
        </div>
    )
}

export default Home
