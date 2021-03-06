import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import Item from './Item'

class Market extends Component {
    constructor() {
        super()
        this.state = {
            itemName : ``
        }
    }

    updateInputName = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    addItem = () => {
        this.props.invetory.addItem(this.state.itemName)
    }

    render() {
        return (
        <div>
            <div>
                <input placeholder='Add an Item' value={this.state.itemName} onChange = {this.updateInputName} name = {`itemName`} ></input>
                <button onClick={this.addItem}>Add</button>
            </div>

            <div>
               {this.props.invetory.items.map( (item, index) => <Item item = {item} key={index} />)}
            </div>

        </div>
    )
  }
}

export default inject(`invetory`)(observer(Market))