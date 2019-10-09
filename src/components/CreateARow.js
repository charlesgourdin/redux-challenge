import React, {Component} from 'react';
import RandomSquare from './RandomSquare'
import './CreateARow.css'

class CreateARow extends Component{
    render(){
        return (
            <div className="rowToFind">
                <RandomSquare/>
                <RandomSquare/>
                <RandomSquare/>
                <RandomSquare/>
            </div>
        )
    }
}

export default CreateARow