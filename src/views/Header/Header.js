import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation.js';
import LoginRegister from '../../components/LoginRegister/LoginRegister.js';
import styled from 'styled-components';

const Head = styled.div`
    height: 50px;
    background-color: #000;
    z-index: 99;
    position: relative;
`;

const HeadContainer = styled.div`
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 10px;
`;

export default class Header extends Component {

    render() {

        return (
            <Head>
                <HeadContainer>
                    <Navigation />
                    <LoginRegister />
                </HeadContainer>
            </Head>
        );
    }
}