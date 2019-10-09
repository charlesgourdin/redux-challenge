import React, {Component} from 'react';
import './RandomSquare.css';

const colors = ["OrangeRed", "RoyalBlue", "SeaGreen", "Gold", "DarkOrange" , "Purple"]



class RandomSquare extends Component {
    constructor(props){
        super(props)
        this.state = {
            style:{
                backgroundColor:colors[Math.floor(6*Math.random())]
            }          
        }
    }

    render(){
        return(
            <span className="square" style={this.state.style}></span>
        )
    }
}

export default RandomSquare