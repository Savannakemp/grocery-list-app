import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = styled.ul`
    margin-top: 0px;
    padding: 15px 0 0 0;
    display: inline-block;
    background-color: #000;
`;

const MobileNavItems = styled.li`
    list-decoration: none;
    margin-right: 15px;
    display: inline-block;
    color: #fff;
    padding: 5px 10px;
    font-size: 20px;

    @media(min-width: 720px) {
        display: none;
    }
`;

const NavItems = styled.li`
    display: none;

    @media(min-width: 720px) {
        list-decoration: none;
        margin-right: 15px;
        display: inline-block;
        color: #fff;
    }
`;

const Icon = styled.a`
    display: block;
    margin-top: -8px;

    @media(min-width: 720px) {
        display: none;
    }
`;

const MenuBar = styled.div`
    width: 35px;
    height: 5px;
    background-color: #fff;
    margin: 6px 0;
`;

const MenuBarOpen = styled.div`
    width: 35px;
    height: 5px;
    background-color: #fff;
    -webkit-transform: rotate(45deg) translate(10px, 11px);
    transform: rotate(45deg) translate(10px, 11px);
`;

const MenuBarOpenX = styled.div`
    width: 35px;
    height: 5px;
    background-color: #fff;
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
    margin-bottom: 30px;
`;

export default class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            display: 'none',
            isOpen: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            display: this.state.display === 'block' ? 'none' : 'block',
            isOpen: this.state.isOpen ? false : true
        })
    }

    render() {

        return (
            <span>
                <Nav>
                    <Link to="/"><NavItems>Home</NavItems></Link>
                    <Link to="/mylists"><NavItems>My Lists</NavItems></Link>
                    <Link to="/"><NavItems>My Account</NavItems></Link>
                    <Icon href="javascript:void(0);" onClick={this.toggleMenu}>
                        <MenuBar style={{display: !this.state.isOpen ? 'block' : 'none'}}></MenuBar>
                        <MenuBar style={{display: !this.state.isOpen ? 'block' : 'none'}}></MenuBar>
                        <MenuBar style={{display: !this.state.isOpen ? 'block' : 'none'}}></MenuBar>
                        <MenuBarOpen style={{display: this.state.isOpen ? 'block' : 'none'}}></MenuBarOpen>
                        <MenuBarOpenX style={{display: this.state.isOpen ? 'block' : 'none'}}></MenuBarOpenX>
                    </Icon>
                    <Link to="/"><MobileNavItems style={{display: this.state.display}}>Home</MobileNavItems></Link>
                    <Link to="/mylists"><MobileNavItems style={{display: this.state.display}}>My Lists</MobileNavItems></Link>
                    <Link to="/"><MobileNavItems style={{display: this.state.display}}>My Account</MobileNavItems></Link>
                </Nav>
            </span>
        );
    }
}