import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SideBarWrapper, SidebarMenu, SidebarRoute, SidebarLink, SideBtnWrap} from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About us
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        services
                    </SidebarLink>
                    <SidebarLink to="products" onClick={toggle}>
                        products
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign Up</SidebarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
