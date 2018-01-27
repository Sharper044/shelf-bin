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
        axios.post(`/api/bin/${this.params.id}${this.params.num}`, body).then(() => {
            this.context.history.push(`/Shelf/${this.params.id}/BinView/${this.params.num}`);
        });
    }

    render(){
        return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                <Header location='emptyBin' shelfID={this.params.id} binID={this.params.num}/>

                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" onChange={this.handleChange('name', this.target.value)}/>
                    <label htmlFor="price">Name</label>
                    <input id="price" type="text" placeholder="$0.00" onChange={this.handleChange('price', this.target.value)}/>
                    <button onClick={this.saveItem}>+ Add Inventory</button>
                </div>

            </div>
        )
    }

}

export default BinAdd;