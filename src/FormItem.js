import React, { Component } from 'react';

const testSeletions = ['10061', '10063', '10059', '10060']

export class HidenSelectField extends Component {
  constructor(){
    super()
    this.state = {
      showOption: false,
      selectedOption: []
    }

    this.showOptionHandle = this.showOptionHandle.bind(this)
    this.enterHandle = this.enterHandle.bind(this)
    this.radioSelectHandle = this.radioSelectHandle.bind(this)
    this.checkedHandle = this.checkedHandle.bind(this)
  }

  showOptionHandle(){
    this.setState({showOption: true})
  }

  enterHandle(){
    this.setState({showOption: false})
    // TODO: pass value to parent component or save in localstorage
  }

  checkedHandle(type, value){
    return type === 'radio'
    ? this.state.selectedOption[0] === value
    : this.state.selectedOption.some( item => item === value)
  }

  radioSelectHandle(e){
    var selectedOptions = this.state.selectedOption

    // radio
    if (e.target.type === 'radio') {
      selectedOptions = []
      selectedOptions.push(e.target.value)
    }

    // checkbox
    else {
      // checked true: add to selectedOptions
      if (e.target.checked) {
        selectedOptions.push(e.target.value)

      }

      // checked false: remove from selectedOptions
      else {
        selectedOptions = selectedOptions.filter( item =>
          item !== e.target.value
        )
      }

    }

    this.setState({selectedOption: selectedOptions})

  }

  render(){
    var selectOptionGroup = testSeletions.map( item =>
      <div key={item}>
        <label>
          <input
            type={this.props.inputType}
            name="TPR"
            onChange={this.radioSelectHandle}
            value={item}
            checked={ this.checkedHandle(this.props.inputType, item) } />
          {item}
        </label>
      </div>
    )

    var selectedOptionGroup = this.state.selectedOption.map( item =>
      <span className="selectedOption" key={item}>{item}</span>
    )

    return(
      <div className="form-col">
        <div className="form-col-right">
          <span>TPR SKU</span>
        </div>
        <div className="form-col-left">
          <div role="show-selected-data">
            { selectedOptionGroup }
            { !this.state.showOption ? <button onClick={this.showOptionHandle}>Please Select</button> : null }
          </div>
          { !this.state.showOption ? null :
            <div role="show-selection">
              { selectOptionGroup }
              <button onClick={this.enterHandle}>Enter</button>
            </div>
          }
        </div>
      </div>
    )
  }
};