import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Footer from './Footer';
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
      <Footer />
      </div>
    );
  }
};

export default App;