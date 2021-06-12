import React from 'react';
import './Style.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import Ratings from './components/Ratings';
import Testimonials from './components/Testimonials';
import Prices from './components/Prices';
import Contacts from './components/Contacts';
import Details from './components/Details';
import Footer from './components/Footer';

const App = () => {
    return(
    <div>
        <Nav />
        <Banner />
        <Services />
        <About />
        <Ratings />
        <Testimonials />
        <Prices />
        <Contacts />
        <Details />
        <Footer />
    </div>
    );
}

export default App;