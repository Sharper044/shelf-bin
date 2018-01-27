import React, { Component } from 'react';
import routes from '../../routes';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../reset.css';
import './BinList.css';
import Header from '../Header/Header';
import EmptyBin from './EmptyBin/EmptyBin';
import FullBin from './FullBin/FullBin';

class BinList extends Component{
    constructor(props){
        super(props);
        this.state = {
            shelfData:[]
        }
        this.componentDidMount=this.componentDidMount.bind(this);
    }

    componentDidMount(){
        axios.get(`/api/shelf/${this.params.id}`).then(res => {
            this.setState({shelfData: res.data});
        });
    }

    render(){
        const bins = this.state.map((e, i) => (e === null)?(<Link to={`/Shelf/${this.params.id}/BinAdd/${i + 1}`}><EmptyBin/></Link>):(<Link to={`/Shelf/${this.params.id}/BinView/${i + 1}`}><FullBin binID={i + 1}/></Link>));
        return(
            <div className="binList">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                <Header location='binList' shelfID={this.params.id}/>
                <div className="linkHolder">
                    {bins}
                    {routes}
                </div>
            </div>
        );
    }
}
export default BinList;