import React from 'react';
import { Link } from 'react-router-dom';
import '../../reset.css';
import './Header.css';
//import logo from '../../Asets/logo.png'

var Header = (props) => {
    switch (props.location) {
        case 'binList':
            return (
                <div className="headerHolder">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                    <Link to='/'><div className="shelfD dark">
                        <img className='logo' src={require("../../Asets/logo.png")} alt="Shelfie company logo"/>
                    </div></Link>
                    <div className="shelfM mid">
                        Shelf {props.shelfID}
                    </div>
                    
                </div>
            );
        case 'fullBin':
            return (
                <div className="headerHolder">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                    <Link to='/'><div className="shelfD dark">
                        <img className='logo' src={require("../../Asets/logo.png")} alt="Shelfie company logo"/>
                    </div></Link>
                    <Link to={`/Shelf/${props.shelfID}`}><div className="binM mid">
                        Shelf {props.shelfID}
                    </div></Link>
                    <div className="binL light">
                        Bin {props.binID}
                    </div>
                    
                </div>
            );
        case 'emptyBin':
            return (
                <div className="headerHolder">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                    <Link to='/'><div className="shelfD dark">
                        <img className='logo' src={require("../../Asets/logo.png")} alt="Shelfie company logo"/>
                    </div></Link>
                    <Link to={`/Shelf/${props.shelfID}`}><div className="binM mid">
                        Shelf {props.shelfID}
                    </div></Link>
                    <div className="binL Xlight">
                        Add to Bin {props.binID}
                    </div>
                    
                </div>
            );
        default:
            return (
                <div className="headerHolder">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                    <div className="home dark">
                        <img className='logo' src={require("../../Asets/logo.png")} alt="Shelfie company logo"/>
                        SHELFIE
                    </div>
                </div>
            );
    }

}

export default Header;
