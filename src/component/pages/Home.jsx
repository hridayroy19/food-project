import React from 'react';
import Banner from '../homeComponets/Banner';
import Catagories from '../homeComponets/Catagories';
import SpecialDishes from '../homeComponets/Spacildishes';
import Testimonials from '../homeComponets/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Catagories/>
            <SpecialDishes/>
            <Testimonials/>
        </div>
    );
};

export default Home;