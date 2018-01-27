import React, { Component } from 'react';
import routes from './routes.js';
import { Link } from 'react-router-dom';
import './reset.css';
import './App.css';
import Header from './Components/Header/Header'



class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
        <Header/>
        <div className="linkHolder">
          <Link className='links' to='/Shelf/A'><div>Shelf A</div></Link>
          <Link className='links' to='/Shelf/B'><div>Shelf B</div></Link>
          <Link className='links' to='/Shelf/C'><div>Shelf C</div></Link>
          <Link className='links' to='/Shelf/D'><div>Shelf D</div></Link>
        </div>
        {routes}
      </div>
    );
  }
}

export default App;
