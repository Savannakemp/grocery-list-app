import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation.js';
import styled from 'styled-components';

const Head = styled.div`
    height: 50px;
    background-color: #000;
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
                </HeadContainer>
            </Head>
        );
    }
}