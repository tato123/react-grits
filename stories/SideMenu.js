import React from 'react';
import styled from 'styled-components';

const defaultStyle = {
    padding: '.25rem 1.5rem',
    display: 'block'
}

const NavContainer = styled.nav`
    font-size: 1rem;
    line-height: 1.6;
    font-family: sans-serif;
    display: flex;
    padding-top: 40px;
    justify-content: center;

    section > a {
        padding: .25rem 1.5rem;
        display: block;
        font-weight: bold;
    }
    section li {
        list-style: none;
        margin-bottom: 5px;
        cursor: pointer;
    }

    section ul {
        margin-top: 0px;
        margin-left: -15px;
    }
`;

const ExampleMenu = () => (
    <NavContainer>
        <section>
            <a>Get Started</a>
            <ul>
                <li>Introduction</li>
                <li>Download</li>
                <li>Contents</li>
                <li>Browsers & Devices</li>
            </ul>
        </section>
    </NavContainer>
)

export default ExampleMenu;