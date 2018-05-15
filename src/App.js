import React, { Component } from 'react';
import Header from './views/Header/Header.js';
import routes from './router.js'
import styled from 'styled-components';

const RouteContainer = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  max-width: 1280px;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <RouteContainer>
            {routes}
          </RouteContainer>
      </div>
    );
  }
}

export default App;
