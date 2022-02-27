import React, { useEffect, useState } from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'
import { animateScroll as scroll } from 'react-scroll'


function Sidebar({ isOpen, toggle }) {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 90) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="about" smooth={true} duration={500} spy={true} exact={'true'} offset={-80} activeClass="active">
                        Sobre nosotros
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="services" smooth={true} duration={500} spy={true} exact={'true'} offset={-100} activeClass="active">
                        Servicios
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="work" smooth={true} duration={500} spy={true} exact={'true'} offset={-110} activeClass="active">
                        Trabajos
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="contact">
                        Contacto
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/presupuesto">Presupuesto</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar