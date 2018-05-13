import React, { Component } from 'react';

import Header from './header';
import Navbar from './navbar';
import SearchBar from './searchBar';
import Store from './store/store';

class Home extends Component {
  render() {

    const actions = [
      {
        title: "Login", path: "/signup"
      },
      {
        title: "Shop", path: "/signup"
      },
    ]

    return (
      <div className="home">
        <Header actions={actions}/>
        <Navbar/>
        <SearchBar/>
        <Store/>
      </div>
    );
  }
}

export default Home;
