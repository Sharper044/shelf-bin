import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../reset.css';
import './BinList.css';
import Header from '../Header/Header';
import Bin from './Bin/Bin';

class BinList extends Component{
    constructor(props){
        super(props);
        this.state = {
            shelfData:[]
        }
    }

    componentDidMount(){
        axios.get(`/api/shelf/${this.props.match.params.id}`).then(res => {
            this.setState({shelfData: res.data});
        });
        
    }

    render(){
        let bins = this.state.shelfData.map((e, i) => (e.name === null)?(<Link className="link" to={`/Shelf/${this.props.match.params.id}/BinAdd/${i + 1}`} key={i}><Bin status='empty'/></Link>):(<Link className="link" to={`/Shelf/${this.props.match.params.id}/BinView/${i + 1}`}  key={i}><Bin status='full' binID={i + 1}/></Link>));
        return(
            <div className="binList">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                <Header location='binList' shelfID={this.props.match.params.id}/>
                <div className="linkHolder">
                    {bins}
                </div>
            </div>
        );
    }
}
export default BinList;