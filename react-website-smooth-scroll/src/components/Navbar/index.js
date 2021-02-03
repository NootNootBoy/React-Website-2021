import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        Atypik
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">
                              About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">
                            services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="products">
                            products
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">
                              contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/Signin">
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
