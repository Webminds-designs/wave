import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutContent from '../components/AboutContent';
import Aboutfeatures from '../components/Aboutfeatures';
import VideoSection from '../components/VideoSection ';
import NewsletterSection from '../components/NewsletterSection';

const AboutUs = () => {
    return (
        <div>
            <AboutHero />
            <AboutContent />
            <Aboutfeatures />
            <VideoSection />
            <NewsletterSection />


        </div>
    );
}

export default AboutUs;