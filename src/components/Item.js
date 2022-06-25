import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'

class Item extends Component {
    buyItem = () => {
        this.props.invetory.buyItem(this.props.item.name)
    }
    editPirce = () => {
        let name = this.props.item.name
        let price = prompt("Please enter a new price")
        if (price != null) {
           this.props.invetory.changePrice(name, parseInt(price,10))
      
        }
    }
    render() {
        const item = this.props.item
        return (
        <div>
            <li>
                <span onDoubleClick={this.editPirce} >{`${item.quantity} ${item.name} available at $${item.price} per item `} </span>
                <button onClick = {this.buyItem}>Buy</button>
            </li>
        </div>
    )
  }
}

export default inject(`invetory`)( observer(Item) ) 