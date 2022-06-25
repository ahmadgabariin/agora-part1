import { observable, makeObservable, action, computed } from "mobx"
import { Item } from "./Item"
export class Invetory {
    constructor () {
        this.items = []
        makeObservable(this, {
            items : observable ,
            addItem : action ,
            buyItem : action ,
            changePrice : action ,
            numItems : computed
        })
    }
    

    addItem (name , price = 0 , quantity = 1) {
        let item = this.items.find(item => item.name === name)
        item === undefined ? this.items.push(new Item(name,price,quantity)) : item.quantity += 1
    }
    buyItem (name) {
        const index = this.items.findIndex(item => item.name === name)
        if (index !== undefined && this.items[index].quantity > 0) {
            this.items[index].quantity -= 1
            if (this.items[index].quantity === 0 ) {
                this.items.splice(index, 1)
            }
        } 
    }
    changePrice (name, price) {
        let item = this.items.find(item => item.name === name)
        item.price = price
    }

    get numItems () {
        return this.items.length
    }
}