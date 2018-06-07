import React, { Component } from 'react';
import styled from 'styled-components';

const ViewContainer = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  max-width: 1280px;
`;

export default class MyLists extends Component {
    render() {
        return (
            <ViewContainer>
                <p>My Lists</p>
            </ViewContainer>
        );
    }
}