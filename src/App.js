import React, { Component } from 'react';
import Header from './views/Header/Header.js';
import Footer from './views/Footer/Footer.js';
import routes from './router.js'
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
            {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
