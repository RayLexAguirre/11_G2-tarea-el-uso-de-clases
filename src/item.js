export default class Item{
    constructor(product, amount){
        this._product = product;
        this._amount = amount;
    }

    getName(){
        return this._product.getName();
    }

    getAmount(){
        return this._amount.getValue();
    }

    getAmountAsString(){
        return this._amount.getValueAsString();
    }

    getPrice(){
        return this._product.getPrice();
    }

    getTotalPrice(){
        return (this._product.getPrice() * this._amount.getValue())
    }
}