import React from 'react';
import { SidebarContainer, Icon, CloseIcon } from './SidebarElements';


const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            {/* <SideBarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About us
                    </SidebarLink>
                    <SidebarLink to="services">
                        services
                    </SidebarLink>
                    <SidebarLink to="products">
                        products
                    </SidebarLink>
                    <SidebarLink to="contact">
                        contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign Up</SidebarRoute>
                </SideBtnWrap>
            </SideBarWrapper> */}
        </SidebarContainer>
    )
}

export default Sidebar;
