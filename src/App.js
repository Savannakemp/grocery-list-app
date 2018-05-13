import React, { Component } from 'react';
import Header from './views/Header/Header.js';
import routes from './router.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
