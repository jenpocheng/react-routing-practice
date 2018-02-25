import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowswerRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowswerRouter>
    );
  }
}

export default App;
