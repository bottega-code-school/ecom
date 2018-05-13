import React, { Component } from 'react';

import Header from './header';
import Navbar from './navbar';
import SearchBar from './searchBar';
import Store from './store/store';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header/>
        <Navbar/>
        <SearchBar/>
        <Store/>
      </div>
    );
  }
}

export default Home;
