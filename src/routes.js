import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import BinList from './Components/BinList/BinList';
import BinAdd from './Components/BinAdd/BinAdd';
import BinInvEdit from './Components/BinInvEdit/BinInvEdit';



export default (
    <Switch>
        <Route path="/Shelf/:id/BinView/:num" component={BinInvEdit}/>
        <Route path="/Shelf/:id/BinAdd/:num" component={BinAdd}/>
        <Route path="/Shelf/:id" component={BinList}/>      
        <Route exact path="/" component={Home}/>
    </Switch>
)