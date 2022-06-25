import React, { Component } from 'react'
import Market from './components/Market'
import { observer , inject } from 'mobx-react'

export class App extends Component {
  render() {
    return (
      <div>
        <div>{`The number of Items ${this.props.invetory.numItems}`}</div>
        <Market />
      </div>
    )
  }
}

export default inject(`invetory`)(observer(App))