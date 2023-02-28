class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }

    static sort(options, array) {
        let resultArray = [];
        let sumProps = 0;

       outer: for(let item of array) {
            let conditions = options.split("&");

            for(let prop of conditions) {
                let objProps = prop.split("-");

                switch(objProps[1]) {
                    case "contains":
                        if (Product.#contains(objProps[0], item, objProps[2]) == true) continue;
                        else continue outer;
                    case "starts":
                        if (Product.#starts(objProps[0], item, objProps[2]) == true) continue;
                        else continue outer;
                    case "ends":
                        if (Product.#ends(objProps[0], item, objProps[2]) == true) continue;
                        else continue outer;
                    default:
                        if(objProps[1].startsWith(">=")) {
                            if (Product.#greaterThanOrEquals(objProps[0], item, objProps[1].slice(2)) == true) continue;
                            else continue outer;
                        } else if(objProps[1].startsWith("<=")) {
                            if (Product.#lowerThanOrEquals(objProps[0], item, objProps[1].slice(2)) == true) continue;
                            else continue outer;
                        } else {
                            switch(objProps[1].at(0)) {
                                case "<":
                                    if (Product.#lowerThan(objProps[0], item, objProps[1].slice(1)) == true) continue;
                                    else continue outer;
                                case "=":
                                    if (Product.#equals(objProps[0], item, objProps[1].slice(1)) == true) continue;
                                    else continue outer;
                                case ">":
                                    if (Product.#greaterThan(objProps[0], item, objProps[1].slice(1)) == true) continue;
                                    else continue outer;
                            }
                        }
                }
            }
            resultArray.push(item);
        }
        return resultArray;
    }

    static #contains(prop, obj, string) {
       return obj[prop].toLowerCase().includes(string.toLowerCase());
    }

    static #starts(prop, obj, string) {
        return obj[prop].toLowerCase().startsWith(string.toLowerCase());
    }
    
    static #ends(prop, obj, string) {
        return obj[prop].toLowerCase().endsWith(string.toLowerCase());
    }

    static #lowerThan(prop, obj, value) {
        return obj[prop] < value;
    }

    static #equals(prop, obj, value) {
        return obj[prop] == value;
    }

    static #greaterThan(prop, obj, value) {
        return  obj[prop] > value;
    }

    static #greaterThanOrEquals(prop, obj, value) {
        return  obj[prop] >= value;
    }

    static #lowerThanOrEquals(prop, obj, value) {
        return  obj[prop] <= value;
    }
}


let productsArray = [new Product("Видеокарта", 400, 5, "asdasdabf"),
 new Product("Процессор", 200, 8, "fffff"), 
 new Product("SSD", 80, 17, "asdasd"),
 new Product("Блок питания", 100, 18, "asdasf")];

console.log(Product.sort("name-contains-ок&price-<=400&quantity->=5&description-ends-f", productsArray));