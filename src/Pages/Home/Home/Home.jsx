import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Review from '../Reviews/Review';
import Blog from '../Blog/Blog';


const Home = () => {

    return (
      <div>
        <Banner ></Banner>
        <Gallery></Gallery>
        <Review></Review>
        <Blog></Blog>
      </div>
    );
};

export default Home;