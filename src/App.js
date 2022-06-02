import React,{Component} from "react";
import Dashboard from './Dashboard/dashboard.js';
import {names} from "./Dashboard/names.js";

class App extends Component {
    constructor(){
        super()
        this.state = {
            props_name: names,
            btn_sidebar: ''
        }
    }
    onclick_btnsidebar(event){
        console.log(event);
    }
    
    render(){
        this.setState(this.state);
        return(
            <div> 
                <Dashboard props = {this.state.props_name}/> 
            </div>   
        );
    }
}
export default App;