import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home">

        <div className="header">
          <img src="http://via.placeholder.com/50x50"/>
        </div>

        <ul className="navbar">
          <li>All</li>
          <li>JavaScript</li>
          <li>UI/UX</li>
          <li>Linux</li>
          <li>Python</li>
          <li>UML</li>
          <li>Ruby</li>
        </ul>

        <div className="search-bar">
          <input type="text"/>
        </div>

        <ul className="store">
          <li>Graph Database</li>
          <li>Graph Database</li>
          <li>Graph Database</li>
          <li>Graph Database</li>
          <li>Graph Database</li>
          <li>Graph Database</li>
        </ul>

      </div>
    );
  }
}

export default Home;
