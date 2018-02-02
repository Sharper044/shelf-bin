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
          <Link className='links' to='/Shelf/A'><div>Shelf A</div></Link>
          <Link className='links' to='/Shelf/B'><div>Shelf B</div></Link>
          <Link className='links' to='/Shelf/C'><div>Shelf C</div></Link>
          <Link className='links' to='/Shelf/D'><div>Shelf D</div></Link>
        </div>
      </div>
    )
  }
}
export default Home;