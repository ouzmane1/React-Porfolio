import React from 'react'
import Profile from '../Profil'
import Skills from '../Skills';
import Xperience from '../Xperience';
import Contact from '../Contact';
import Footer from '../Footer';
import About from '../About';

export default function Home() {
return( 
    <>
        <Profile/>
        <About/>
        <Skills/>
        <Xperience/>
        <Contact/>
        <Footer/>        
    </>
);
}
