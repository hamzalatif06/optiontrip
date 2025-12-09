import React from 'react';
import Banner from '../components/Banner/Banner';
import AboutUs from '../components/AboutUs/AboutUs';
import TopDestinations from '../components/TopDestinations/TopDestinations';
import AboutSection from '../components/AboutSection/AboutSection';
import BestTours from '../components/BestTours/BestTours';
import LastMinuteDeals from '../components/LastMinuteDeals/LastMinuteDeals';
import DiscountAction from '../components/DiscountAction/DiscountAction';
import ProductsSection from '../components/ProductsSection/ProductsSection';
// import OfferPackages from '../components/OfferPackages/OfferPackages';
import OurTeam from '../components/OurTeam/OurTeam';
import Testimonials from '../components/Testimonials/Testimonials';
import Partners from '../components/Partners/Partners';
import RecentArticles from '../components/RecentArticles/RecentArticles';

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <TopDestinations />
      <AboutSection />
      <BestTours />
      <LastMinuteDeals />
      <ProductsSection />
      <DiscountAction />
      {/* <OfferPackages /> */}
      {/* <OurTeam /> */}
      <Testimonials />
      <Partners />
      <RecentArticles />
    </>
  );
};

export default Home;


