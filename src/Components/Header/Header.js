import React from 'react';
import routes from '../../routes';
import { Link } from 'react-router-dom';
import '../../reset.css';
import './Header.css';
import logo from '../../Asets/logo.png'

var Header = (props) => {
    switch (props.location) {
        case 'binList':
            return (
                <div className="headerHolder">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                    <Link to='/'><div className="shelfD dark">
                        <img className='logo' src="../../Asets/logo.png" alt="Shelfie company logo"/>
                    </div></Link>
                    <div className="shelfM mid">
                        Shelf {props.shelfID}
                    </div>
                    {routes}
                </div>
            );
        case 'fullBin':
            return (
                <div className="headerHolder">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                    <Link to='/'><div className="shelfD dark">
                        <img className='logo' src="../../Asets/logo.png" alt="Shelfie company logo"/>
                    </div></Link>
                    <div className="binM mid">
                        Shelf {props.shelfID}
                    </div>
                    <div className="binL light">
                        Bin {props.binID}
                    </div>
                    {routes}
                </div>
            );
        case 'emptyBin':
            return (
                <div className="headerHolder">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                    <Link to='/'><div className="shelfD dark">
                        <img className='logo' src="../../Asets/logo.png" alt="Shelfie company logo"/>
                    </div></Link>
                    <div className="binM mid">
                        Shelf {props.shelfID}
                    </div>
                    <div className="binL Xlight">
                        Add to Bin {props.binID}
                    </div>
                    {routes}
                </div>
            );
        default:
            return (
                <div className="headerHolder">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                    <div className="home dark">
                        <img className='logo' src="../../Asets/logo.png" alt="Shelfie company logo"/>
                        SHELFIE
                    </div>
                </div>
            );
    }

}

export default Header;
