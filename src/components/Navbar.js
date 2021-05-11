import React from 'react'
import styled from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
    return (
        <NavbarContainer id="navbar">
            <NavbarLists>

                <Link className="NavbarListItem"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    <NavbarListItem>Home </NavbarListItem>
                </Link>

                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                ><NavbarListItem>About </NavbarListItem></Link>
                <Link
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                ><NavbarListItem>Resume </NavbarListItem></Link>
                <Link
                    activeClass="active"
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                ><NavbarListItem>Works</NavbarListItem></Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                ><NavbarListItem>Contact </NavbarListItem></Link>
            </NavbarLists>
        </NavbarContainer >
    )
}

export default Navbar

const NavbarContainer = styled.nav`
    display: flex;
    top: 0px;
    position: fixed;
    width: 100%;
    justify-content: space-evenly;
    z-index: 1000;

`;
const NavbarLists = styled.ul`
    display: flex;
    padding: 10px;
    list-style: none;

    .active {
    border-bottom: 2px solid #ffae00;
    }
    
`;
const NavbarListItem = styled.li`
    display: "inline-block";
    padding:10px 10px 5px 10px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    text-align: center;
    color:white;
    transition: all 500ms;

    :hover {
        transform: scale(1.2);
    }

`;
