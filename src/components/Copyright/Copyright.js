import React, { Component } from 'react';
import styled from 'styled-components';

const Copy = styled.span`
    color: #fff;
    padding-top: 15px;
    display: inline-block;
`;

export default class Copyright extends Component {

    render() {

        return (
            <Copy>&copy; 2018 GrocerLy</Copy>
        );
    }
}