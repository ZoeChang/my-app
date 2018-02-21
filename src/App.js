import React, { Component } from 'react';
import ToolBar from './ToolBar';
import { HidenSelectField } from './FormItem';

class App extends Component {
  render() {
    return (
      <div>
        <ToolBar />
        <HidenSelectField inputType="radio"/>
        <HidenSelectField inputType="checkbox"/>
      </div>
    );
  }
}

export default App;
