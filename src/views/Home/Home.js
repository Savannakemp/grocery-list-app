import React, { Component } from 'react';
import styled from 'styled-components';
import grocery_aisle_image from '../../img/grocery-store-aisle.jpeg';

const HomeContainer = styled.div`
    width: 100%;
    position: relative;
    text-align: center;
    color: #ffffff;
`;

const HeroImage = styled.div`
    width: 100%;
    height: 700px;
    margin: 0;
    background-image: url(${grocery_aisle_image});
    z-index: -2;
`;

const HeroText = styled.h2`
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    background-color: #716569;
`;

const ContentContainer = styled.div`
    margin: 40px;
`;

const Sidebar = styled.div`
    grid-area: sidebar;
`;

const Content = styled.div`
    grid-area: content;
`;

const Header = styled.div`
    grid-area: header;
    background-color: #999;
`;

const Footer = styled.div`
    grid-area: footer;
    background-color: #999;
`;

const Wrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 120px 120px 120px;
    grid-template-areas:
    "....... header header"
        "sidebar content content"
        "footer  footer  footer";
        background-color: #fff;
        color: #444;
`;

const Box = styled.div`
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    font-size: 150%;
`;


export default class Home extends Component {
    render() {
        return (
            <HomeContainer>
                <HeroImage></HeroImage>
                <HeroText>Make grocey shopping fun again.</HeroText>
            <Wrapper>
                <Header>Header</Header>
                <Sidebar>Sidebar</Sidebar>
                <Content>Content......</Content>
                <Footer>Footer</Footer>
            </Wrapper>
            </HomeContainer>
        );
    }
}