import React, { Component } from 'react';
import styled from 'styled-components';

const Copy = styled.span`
    color: #fff;
    padding-top: 15px;
    display: inline-block;
`;

export default class Copyright extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        };
    }

    render() {

        return (
            <Copy>&copy; {this.state.date.getFullYear()} GrocerLy</Copy>
        );
    }
}