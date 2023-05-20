import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Review from '../Reviews/Review';
import Blog from '../Blog/Blog';
import HomeTab from '../Tabs/HomeTab';


const Home = () => {

    return (
      <div>
        <Banner ></Banner>
        <Gallery></Gallery>
        <HomeTab></HomeTab>
        <Review></Review>
        <Blog></Blog>

      </div>
    );
};

export default Home;