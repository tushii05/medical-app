import React from 'react';
import Blog from './Blog';
import FunCode from './FunFacts';
import Features from './Features';
import WhyChoose from './WhyChoose';
import Call from './Call';
import Portfolio from './Portfolio';
import Service from './Service';
import PriceTable from './PriceTable';
import Clients from './Clients';
import Appointment from './Appointment';
import Newsletter from './Newsletter';
import SliderComponent from './Slider';

const Home = () => {
    return (
        <>
            <SliderComponent />
            <Features/>
            <FunCode/>
            <WhyChoose/>
            <Call/>
            <Portfolio/>
            <Service/>
            <PriceTable/>
            <Blog />
            <Clients/>
            <Appointment/>
            <Newsletter/>
        </>
    );
};

export default Home;
