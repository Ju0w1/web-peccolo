import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import About from '../components/AboutUs/About'
import Services from '../components/Services/Services'
import Work from '../components/Work/Work'
import { aboutUs } from '../components/AboutUs/Data'
import { services } from '../components/Services/Data'
import { works } from '../components/Work/Data'
import { footer } from '../components/Footer/Data'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <About {...aboutUs} />
            <Services {...services} />
            <Work {...works} />
            <Contact />
            <Footer {...footer} />
        </>
    )
}

export default Home