import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    float: right;
    padding-top: 10px;
`;

const LoginButton = styled.a`
    display: block;
    border-radius: 20px;
    border: 2px solid #fff;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    padding: 5px 15px;
    cursor: pointer;
`;

export default class LoginRegister extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    render() {

        return (
            <ButtonContainer>
                <LoginButton>Login/Register</LoginButton>
            </ButtonContainer>
        );
    }
}