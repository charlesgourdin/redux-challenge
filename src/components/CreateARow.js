import React, {Component} from 'react';
import RandomSquare from './RandomSquare'
import './CreateARow.css'

const colors = ["OrangeRed", "RoyalBlue", "SeaGreen", "Gold", "DarkOrange" , "Purple"]

class CreateARow extends Component{
    constructor(props){
        super(props)
        this.state = {       
        }
    }

    GenerateRow = () => {
        const row =[]
        for (let i=0 ; i<4  ; i++){
            row.push(<RandomSquare backgroundColor={colors[Math.floor(6*Math.random())]} key={i}/>)
        }
        console.log(row)
        return row
    }

    render(){
        return (
            <div className="rowToFind">
                {this.GenerateRow()}
            </div>
        )
    }
}

export default CreateARow