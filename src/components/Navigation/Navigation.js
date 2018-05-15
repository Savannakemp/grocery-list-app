import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = styled.ul`
    margin-top: 0px;
    padding: 15px 0 0 0;
`;

const NavItems = styled.li`
    list-decoration: none;
    margin-right: 15px;
    display: inline-block;
    color: #fff;
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
                <Nav>
                    <Link to="/"><NavItems>Home</NavItems></Link>
                    <Link to="/mylists"><NavItems>My Lists</NavItems></Link>
                    <Link to="/"><NavItems>My Account</NavItems></Link>
                </Nav>
            </div>
        );
    }
}