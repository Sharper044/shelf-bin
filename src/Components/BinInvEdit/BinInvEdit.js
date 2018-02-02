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
        axios.delete(`/api/bin/${this.props.match.params.id}${this.props.match.params.num}`).then(() => {
            window.location.replace(`http://localhost:3000/#/Shelf/${this.props.match.params.id}/BinAdd/${this.props.match.params.num}`);
        });
    }

    updateItem(){
        let body = {
            name: this.state.workingName,
            price: this.state.workingPrice
        };
        axios.put(`/api/bin/${this.props.match.params.id}${this.props.match.params.num}`,body).then(res =>{
            let data = res.data[0];
            this.setState({
                orgBinObj: data,
                canEdit: false,
                workingName: data.name,
                workingPrice: data.price
            });
        })
    }

    componentDidMount(){
        axios.get(`/api/bin/${this.props.match.params.id}${this.props.match.params.num}`).then(res => {
            let data = res.data[0];
            this.setState({ 
                orgBinObj: data,
                workingName: data.name,
                workingPrice: data.price
            });
        });
    }

    render(){
        return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                <Header location='fullBin' shelfID={this.props.match.params.id} binID={this.props.match.params.num}/>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={this.state.workingName} onChange={(e) => this.handleChange('name', e.target.value)}/>
                    <label htmlFor="price">Price</label>
                    <input id="price" type="text" value={this.state.workingPrice} placeholder="$0.00" onChange={(e) => this.handleChange('price', e.target.value)}/>
                    <button>EDIT</button>
                    <button onClick={() => this.updateItem()}>SAVE</button>
                    <button onClick={() => this.deleteItem()}>DELETE</button>
                </div>

            </div>
        )
    }

}

export default BinInvEdit;