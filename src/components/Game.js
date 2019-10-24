import React, {Component} from 'react';
import './Game.css'
import RowToFind from './RowToFind';
import Combinaison from './Combinaison';
import Clavier from './Clavier';



class Game extends Component{
    constructor(props){
        super(props)
        this.state = {  
            toFind:this.GenerateRowToFind(),
            combinaison:this.GenerateRowCombinaison()
            
        }
    }

    colors = ["OrangeRed", "RoyalBlue", "SeaGreen","gold"]

    GenerateRowToFind = () => {
        const row =[]
        for (let i=0 ; i<4  ; i++){
            row.push({color:this.colors[Math.floor(4*Math.random())], border:'1px black solid'})
        }
        return row
    }

    GenerateRowCombinaison = () => {
        const row =[]
        for (let i=0 ; i<4  ; i++){
            row.push({color:'SeaShell ', border:'1px black solid'})
        }
        return row
    }

    changeColor =(newColor)=>{
        let item = Object.assign({}, this.state.combinaison[0], {color: newColor});
        this.state.combinaison[0] = item;
        this.setState({combinaison: this.state.combinaison});
    }


    render(){
        return (
            <div>
                <RowToFind toFind={this.state.toFind}/>
                <Combinaison combinaison={this.state.combinaison}/>
                <Clavier colors={this.colors} changeColor={this.changeColor}/>
            </div>
        )
    }
}

export default Game