import React, {Component} from 'react';


class Clavier extends Component {
    constructor(props){
        super(props)
        this.state={
            combinaison:this.props.combinaison

        }
    }

    render(){
        const{colors, changeColor}=this.props
        return(
            <div className="button">
                {colors.map((item)=>{
                    return (
                        <button style={{backgroundColor:item}} onClick={()=>changeColor('red')}></button>
                    )
                })}
            </div>
        )
    }
}

export default Clavier;