import React from 'react';
import Banner from '../homeComponets/Banner';
import Catagories from '../homeComponets/Catagories';
import SpecialDishes from '../homeComponets/Spacildishes';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Catagories/>
            <SpecialDishes/>
        </div>
    );
};

export default Home;