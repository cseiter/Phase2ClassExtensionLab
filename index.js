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