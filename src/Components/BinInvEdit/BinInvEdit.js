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
            disabled: true
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
            window.location.replace(`http://localhost:3030/#/Shelf/${this.props.match.params.id}/BinAdd/${this.props.match.params.num}`);
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
                disabled: true,
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
        var editSave = (this.state.disabled)?(<button className='grey' onClick={() => this.setState({disabled: false})}>EDIT</button>):(<button className='save' onClick={() => this.updateItem()}>SAVE</button>);
        return(
            <div>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
                <Header location='fullBin' shelfID={this.props.match.params.id} binID={this.props.match.params.num}/>
                <div className="maindiv">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={this.state.workingName} disabled={this.state.disabled} placeholder="Name" onChange={(e) => this.handleChange('name', e.target.value)}/>
                    <label htmlFor="price">Price</label>
                    <input id="price" type="text" value={this.state.workingPrice} disabled={this.state.disabled} placeholder="$0.00" onChange={(e) => this.handleChange('price', e.target.value)}/>
                    <div className="buttonHolder">
                        {editSave}
                        <button className='grey' onClick={() => this.deleteItem()}>DELETE</button>
                    </div>
                </div>

            </div>
        )
    }

}

export default BinInvEdit;