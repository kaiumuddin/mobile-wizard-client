import React from 'react';
import AdvertisedItems from "./AdvertisedItems";
import Banner from "./Banner";
import Categories from "./Categories";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <Categories></Categories>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;