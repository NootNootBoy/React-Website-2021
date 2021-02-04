import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? 'linear-gradient( 125deg, #D980FA, #9980FA)' : '#5758BB')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#222')}
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outlined: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in-out;
    font-family: "Montserrat";

    &:hover{
        transition: all 1s ease-in-out;
    }
`