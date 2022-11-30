import {useQuery} from "@tanstack/react-query";
import React, {useEffect} from 'react';
import AdvertisedItems from "./AdvertisedItems";
import Banner from "./Banner";
import Categories from "./Categories";
import Testimonial from "./Testimonial";

const Home = () => {


    const {data: items = [], refetch} = useQuery({
        queryKey: ['advertised'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertised`);
            const data = await res.json();
            return data;
        }
    });


    return (
        <div>
            <Banner></Banner>
            {
                items.length > 0 && <AdvertisedItems items={items}></AdvertisedItems>
            }

            <Categories></Categories>
            <Testimonial></Testimonial>
        </div >
    );
};

export default Home;