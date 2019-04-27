import React, { Component } from 'react';
import './Calculator.css';
import Button from './Button.js'

class Calculator extends Component{
    constructor(props){
        super(props)
        this.state = {
            display: '0',
            answerShown: false,
        }
        //this.handleClick = this.handleClick.bind(this)
    }

    isSymbol = (i) => {
        return i === '-' || i === '+' || i === '÷' || i === 'x'
    }
    calculateInput = (i) => {
        let input = this.state.display
        if(!this.isSymbol(input[input.length - 1])){
            console.log('Evaluate')
            this.setState({
                display: eval(input),
                answerShown: true,
            })
        } else {
            console.log('Need number as last value')
        }

    }
    handleClick = (i) => {
        console.log('I is: ', i)
        if(Number.isInteger(i)){
            this.setState((state,props) => {
                let displayStr = state.display === '0' || this.state.answerShown ? '' + i : '' + state.display + i
                return {
                    display: displayStr,
                    answerShown: false,
                }
            })
        } else if(this.isSymbol(i)){
            let strLen = this.state.display.length
            let lastChar = this.state.display[strLen - 1]
            let charToAdd = i
            if(i === 'x'){
                charToAdd = '*'
            } else if(i === '÷'){
                charToAdd = '/'
            }
            if(!this.isSymbol(lastChar)){
                this.setState({
                    display: this.state.display + '' + charToAdd,
                    answerShown: false,
                })
            }

        } else if(i === 'clear'){
            this.setState({
                display: 0,
                answerShown: false,
            })
        } else if(i === '='){
            this.calculateInput();
        }
    }

    render(){
        return (
            <div>
                <div className='display'>
                    <bdi>
                      {this.state.display}
                    </bdi>
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
                    <Button value={'x'} onClick={this.handleClick} isSymbol/>
                </div> 
                <div className='row'>
                    <Button value={0} isZero onClick={this.handleClick}/>
                    <Button value={'='} onClick={this.handleClick} isSymbol/>
                </div> 


            </div>
        )
    }

}

export default Calculator