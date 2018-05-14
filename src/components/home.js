import React, { Component } from 'react';

import Header from './header';
import Navbar from './navbar';
import SearchBar from './searchBar';
import Store from './store/store';

class Home extends Component {

  filterCategory(action) {
    console.log(action);
  }

  render() {

    const actions = [
      {
        title: "Login", path: "/signin"
      }
    ]

    const navbarActions = [
      {
        title: 'All',
        callback: this.filterCategory
      },
      {
        title: 'JavaScript',
        callback: this.filterCategory
      },
      {
        title: 'UI/UX',
        callback: this.filterCategory
      },
      {
        title: 'Linux',
        callback: this.filterCategory
      },
      {
        title: 'Python',
        callback: this.filterCategory
      },
      {
        title: 'UML',
        callback: this.filterCategory
      },
      {
        title: 'Ruby',
        callback: this.filterCategory
      }
    ]

    return (
      <div className="home">
        <Header actions={actions}/>
        <Navbar actions={navbarActions}/>
        <SearchBar/>
        <Store/>
      </div>
    );
  }
}

export default Home;
