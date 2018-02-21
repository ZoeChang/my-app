import React, { Component } from 'react';
import './App.css';


class ToolBar extends Component {
  constructor(){
    super()
    this.state = {
      num: 'select',
      fnc: '0'
    }

    this.selectHandle = this.selectHandle.bind(this)
    this.jumpToFnc = this.jumpToFnc.bind(this)
  }

  selectHandle(e){
    this.setState({num: e.target.value})
  }

  jumpToFnc(e){
    if(this.state.num === 'select'){
      alert('please choose a number')
    } else {
      this.setState({fnc: e.target.value})
      alert(`num = ${this.state.num} & target = ${e.target.value}`)
    }

  }

  render() {
    return (
      <div>
        <div>
          <span>Number: </span>
          <select id="selected-number" onChange={this.selectHandle}>
            <option value="select">Select</option>
            <option value="594">TR-F5-594</option>
            <option value="591">TR-F7-591</option>
            <option value="842">PU-T9-842</option>
            <option value="703">PU-T3-703</option>
          </select>
        </div>
        <div>
          <button type="button" onClick={this.jumpToFnc} value="fnc1">fnc1</button>
          <button type="button" onClick={this.jumpToFnc} value="fnc2">fnc2</button>
          <button type="button" onClick={this.jumpToFnc} value="fnc3">fnc3</button>
          <button type="button" onClick={this.jumpToFnc} value="fnc4">fnc4</button>
        </div>
      </div>
    );
  }
}

export default ToolBar;
