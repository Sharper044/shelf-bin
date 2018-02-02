import React, { Component } from 'react';
import axios from 'axios';
import '../../reset.css';
import './BinAdd.css';
import Header from '../Header/Header';

class BinAdd extends Component{
    constructor(props){
        super(props);
        this.state = {
            workingName: '',
            workingPrice: ''
        }

        this.handleChange=this.handleChange.bind(this);
        this.saveItem=this.saveItem.bind(this);
    }

    handleChange(key, val){
        if (key === 'name'){
            this.setState({ workingName: val});
        } else if (key === 'price'){
            this.setState({ workingPrice: val});
        }
    }

    saveItem(){
        let body = {
            name: this.state.workingName,
            price: this.state.workingPrice
        };
        axios.post(`/api/bin/${this.props.match.params.id}${this.props.match.params.num}`, body).then(() => {
            window.location.replace(`http://localhost:3000/#/Shelf/${this.props.match.params.id}/BinView/${this.props.match.params.num}`);
        });
    }

    render(){
        return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
                <Header location='emptyBin' shelfID={this.props.match.params.id} binID={this.props.match.params.num}/>

                <div className="maindiv">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" onChange={(e) => this.handleChange('name', e.target.value)}/>
                    <label htmlFor="price">Price</label>
                    <input id="price" type="text" placeholder="$0.00" onChange={(e) => this.handleChange('price', e.target.value)}/>
                    <button onClick={() => this.saveItem()}>+ Add Inventory</button>
                </div>

            </div>
        )
    }

}

export default BinAdd;