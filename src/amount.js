export default class Amount{
    constructor(value){
        this._value = this._condicion(value);
    }

    _condicion(value){
        if(value < 11 && value > 0){
            return value
        } else {
            return 0;
        }
    }

    getValue(){
        return this._value;
    }

    getValueAsString(){
        switch(this._value){
            case 1:
                return "uno";
                break;
            case 2:
                return "dos";
                break;
            case 3:
                return "tres";
                break;
            case 4:
                return "cuatro";
                break;
            case 5:
                return "cinco";
                break;
            case 6:
                return "seis";
                break;
            case 7:
                return "siete";
                break;
            case 8:
                return "ocho";
                break;
            case 9:
                return "nueve";
                break;
            case 10:
                return "diez";
                break;
            default:
                return "cero";
        }
    }
}