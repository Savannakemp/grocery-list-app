import React, { Component } from 'react';
import Copyright from '../../components/Copyright/Copyright.js';
import styled from 'styled-components';

const Foot = styled.div`
    height: 50px;
    background-color: #000;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const FooterContainer = styled.div`
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 10px;
`;

export default class Footer extends Component {

    render() {

        return (
            <Foot>
                <FooterContainer>
                    <Copyright />
                </FooterContainer>
            </Foot>
        );
    }
}