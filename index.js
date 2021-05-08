// Your code here

class Polygon {
    constructor(arrSides) {
        this.arrSides = arrSides;
        this.count = this.arrSides.length;
    }
    get countSides() {
        return this.arrSides.length;
    }
    get perimeter() {
        return this.arrSides.reduce((a,b)=> a+b,0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.count !== 3) {return};
        this.arrSides.sort();
        return (this.arrSides[0] + this.arrSides[1] > this.arrSides[2]);
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.count !== 4) {return};
        return (this.arrSides.every((val,i,arr) => val ===arr[0]));
    }


}