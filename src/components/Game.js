import React, {Component} from 'react';
import Square from './Square'
import './Game.css'

const colors = ["OrangeRed", "RoyalBlue", "SeaGreen", "Gold", "DarkOrange" , "Purple"]

class CreateARow extends Component{
    constructor(props){
        super(props)
        this.state = {  
            toFind:this.GenerateRowToFind(),
            combinaison:this.GenerateRowCombinaison()
            
        }
    }

    GenerateRowToFind = () => {
        const row =[]
        for (let i=0 ; i<4  ; i++){
            row.push({color:colors[Math.floor(6*Math.random())], border:'1px black solid'})
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

    render(){
        return (
            <div>
                <div className="row">
                    {this.state.toFind.map((item,i)=>{
                        return (
                            <Square
                            backgroundColor={item.color}
                            border={item.border}                      
                            key={i}/>
                        )
                    })}
                </div>
                <div className="row">
                    {this.state.combinaison.map((item,i)=>{
                        return (
                            <Square
                            backgroundColor={item.color}
                            border={item.border}                      
                            key={i}/>
                        )
                    })}
                </div>
                <div>ici le clavier</div>
            </div>
        )
    }
}

export default CreateARow