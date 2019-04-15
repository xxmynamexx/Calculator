import React, { Component } from 'react';
import './Calculator.css';
import Button from './Button.js'

class Calculator extends Component{
    constructor(props){
        super(props)
        this.state = {
            display: '0',
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(i){
        if(Number.isInteger(i)){
            this.setState((state,props) => {
                return {
                    display: state.display + i
                }
            })
        }
    }

    render(){
        return (
            <div>
                <div className='display'>
                    {this.state.display}
                </div> 
                <div className='row'>
                    <Button value={'clear'} isClear onClick={this.handleClick}/>
                    <Button value={'÷'} isSymbol onClick={this.handleClick}/>
                </div> 
                <div className='row'>
                    <Button value={7} onClick={this.handleClick}/>
                    <Button value={8} onClick={this.handleClick}/>
                    <Button value={9} onClick={this.handleClick}/>
                    <Button value={'-'} onClick={this.handleClick} isSymbol/>
                </div> 
                <div className='row'>
                    <Button value={4} onClick={this.handleClick}/>
                    <Button value={5} onClick={this.handleClick}/>
                    <Button value={6} onClick={this.handleClick}/>
                    <Button value={'+'} onClick={this.handleClick} isSymbol/>
                </div> 
                <div className='row'>
                    <Button value={1} onClick={this.handleClick}/>
                    <Button value={2} onClick={this.handleClick}/>
                    <Button value={3} onClick={this.handleClick}/>
                    <Button value={'='} onClick={this.handleClick} isSymbol/>
                </div> 


            </div>
        )
    }

}

export default Calculator