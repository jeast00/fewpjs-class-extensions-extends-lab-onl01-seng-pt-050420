// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  
  get countSides() {
    return this.sides.length;
  }
  
  get perimeter() {
    let sum = 0;
    for(let i = 0; i < this.sides.length; i++) {
      sum += this.sides[i];
    }
    return sum;
  }
}

class Triangle extends Polygon {
  get isValid() {
    let side1 = this.sides[0];
    let side2 = this.sides[1];
    let side3 = this.sides[2];
    
    return ((side1 + side2 > side3) && ())
  }
}