import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../reset.css';
import './Home.css';
import Header from '../Header/Header'

class Home extends Component{
  render(){
    return(
      <div>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
        <Header/>
        <div className="linkHolder">
          <div className='links'><Link className='link' to='/Shelf/A'><h2>Shelf A</h2></Link></div>
          <div className='links'><Link className='link'  to='/Shelf/B'><h2>Shelf B</h2></Link></div>
          <div className='links'><Link className='link'  to='/Shelf/C'><h2>Shelf C</h2></Link></div>
          <div className='links'><Link className='link' to='/Shelf/D'><h2>Shelf D</h2></Link></div>
        </div>
      </div>
    )
  }
}
export default Home;