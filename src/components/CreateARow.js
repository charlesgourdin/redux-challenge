import React, {Component} from 'react';
import RandomSquare from './RandomSquare'
import './CreateARow.css'

const colors = ["OrangeRed", "RoyalBlue", "SeaGreen", "Gold", "DarkOrange" , "Purple"]

class CreateARow extends Component{
    constructor(props){
        super(props)
        this.state = {
            backgroundColor:colors[Math.floor(6*Math.random())]        
        }
    }

    render(){
        return (
            <div className="rowToFind">
                <RandomSquare backgroundColor={this.state.backgroundColor}/>
            </div>
        )
    }
}

export default CreateARow