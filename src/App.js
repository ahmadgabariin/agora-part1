import React, { Component } from 'react'
import Market from './components/Market'

export class App extends Component {
  render() {
    return (
      <div>
        <Market store = {this.props.store}/>
      </div>
    )
  }
}

export default App