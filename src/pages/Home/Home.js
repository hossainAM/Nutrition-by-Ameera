import React from 'react';
import Header from '../../shared/Header/Header';
import Banner from './Banner';
import Philosophy from './Philosophy';
import Services from './Services';
import Footer from '../..//shared/Footer/Footer'

const Home = () => {
    return (
        <>
         <Header></Header>
         <Banner></Banner>
         <Services></Services>
         <Philosophy></Philosophy>
         <Footer></Footer>
        </>
    );
};

export default Home;