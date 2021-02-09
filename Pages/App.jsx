import React from 'react';
import Nav_banner from './Nav_banner';
import Banner from './Banner';
import About from './About';
import Numbers from './Numbers';
import Content from './Content';
import Card from './Card';
import Testimonials from './Testimonials';
import Footer from './Footer';
let App=()=>{
    return(
    <>
        <Nav_banner />
        <Banner />
        <About />
        <Numbers />
        <Content />
        <Card />
        <Testimonials />
        <Footer />
        </>
    );
}
export default App;