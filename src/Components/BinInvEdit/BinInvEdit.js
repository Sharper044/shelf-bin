import React, { Component } from 'react';
import axios from 'axios';
import '../../reset.css';
import './BinInvEdit.css';
import Header from '../Header/Header';

class BinInvEdit extends Component{
    constructor(props){
        super(props);
        this.state = {
            workingName: '',
            workingPrice: '',
            orgBinObj: {},
            canEdit: false
        }

        this.handleChange=this.handleChange.bind(this);
        this.componentDidMount=this.componentDidMount.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.updateItem=this.updateItem.bind(this);
    }

    handleChange(key, val){
        if (key === 'name'){
            this.setState({ workingName: val});
        } else if (key === 'price'){
            this.setState({ workingPrice: val});
        }
    }

    deleteItem(){
        axios.delete(`/api/bin/${this.params.id}${this.params.num}`).then(() => {
            this.context.history.push(`/Shelf/${this.params.id}/BinAdd/${this.params.num}`);
        });
    }

    updateItem(){
        let body = {
            name: this.state.workingName,
            price: this.state.workingPrice
        };
        axios.put(`/api/bin/${this.params.id}${this.params.num}`,body).then(res =>{
            this.setState({
                orgBinObj: res.data,
                canEdit: false,
                workingName: res.data.name,
                workingPrice: res.data.price
            });
        })
    }

    componentDidMount(){
        axios.get(`/api/bin/${this.params.id}${this.params.num}`).then(res => {
            this.setState({ 
                orgBinObj: res.data,
                workingName: res.data.name,
                workingPrice: res.data.price
            });
        });
    }

    render(){
        return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                <Header location='fullBin' shelfID={this.params.id} binID={this.params.num}/>

                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={this.state.workingName} onChange={this.handleChange('name', this.target.value)}/>
                    <label htmlFor="price">Name</label>
                    <input id="price" type="text" value={this.state.price} placeholder="$0.00" onChange={this.handleChange('price', this.target.value)}/>
                    <button>EDIT</button>
                    <button onClick={this.updateItem}>SAVE</button>
                    <button onClick={this.deleteItem}>DELETE</button>
                </div>

            </div>
        )
    }

}

export default BinInvEdit;