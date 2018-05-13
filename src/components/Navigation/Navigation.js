import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavItems = styled.li`
    list-decoration: none;
    margin-right: 15px;
    display: inline-block;
`;

export default class Navigation extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {

        return (
            <div>
                <ul>
                    <Link to="/"><NavItems>Home</NavItems></Link>
                    <Link to="/mylists"><NavItems>My Lists</NavItems></Link>
                    <Link to="/"><NavItems>My Account</NavItems></Link>
                </ul>
            </div>
        );
    }
}