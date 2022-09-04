export default class Cart{
    constructor(){
        this._items = new Array();
    }

    
    addItem(item) {
        let updated = false;
        let result = this._items.map((i) => {
          if (i.getName() === item.getName()) {
            updated = true;
            return item;
          } else {
            return i;
          }
        });
    
        if (!updated) {
          result.push(item);
        }
    
        this._items = result;
        return this._items;
      }
      
/*
    addItem(item) {
        let pos = this._findItem(item);
        if(pos < 0){
            this._items.push(item);
        } else {
            this._item(pos) = item;
        }
        return this._items;
    }
*/
    getNumberOfItems(){
        return this._items.length;
    }

    getNumberOfProducts(){
        let resultado = 0;

        this._items.forEach((item) => {
            resultado = resultado + item.getAmount();
        })

        return resultado;
    }

    getCost(){
        let cost = 0;

        this._items.forEach((item) => {
            cost += item.getTotalPrice();
        });

        return cost;
    }

    getMostExpensive(){
        let n = this._items.length, aux = 0, cost = 0, costAfter = 0;

        for(let k = 1; k < n; k++){
            for(let i = 0; i < (n - k); i++){
                cost = this._items[i].getPrice();
                costAfter = this._items[i+1].getPrice();
                if(cost > costAfter){
                    aux = cost;
                    cost = costAfter;
                    costAfter = aux;
                }
            }
        }
        return this._items[0].getName();
    }
}