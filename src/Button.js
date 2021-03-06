import React, {Component} from 'react'
import './Button.css'

function Button(props){
    let buttonStyle = 'container'
    if(props.isSymbol){
        buttonStyle = 'symbolContainer'
    } else if(props.isClear){
        buttonStyle = 'clearButton'
    } else if(props.isZero){
        buttonStyle = 'zeroButton'

    } 
    return (
        <div className={buttonStyle} onClick={() => {props.onClick(props.value)}}>
            {props.value}
        </div>
    )
}

export default Button