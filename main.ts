// let message :string = 'abc'
// let result = message.endsWith('c')
// console.log(result)
// interface Point  {
//     x:number,
//     y:number
// }
// // type Point ={x:number,y:number}
// let draw = (point:Point)=>{
//     // do something here
// }
// draw({
//     x:1,
//     y:2
// })

class Point {
  constructor(private x?: number, private y?: number) {}

  draw() {
    console.log('X: ' + this.x + ' Y: ' + this.y);
  }
  //can get value like this
  //   getX() {
  //     return this.x;
  //   }
  //   setX(value) {
  //     if (value < 0) {
  //       throw new Error('Value can not be less than 0');
  //     }
  //     this.x = value;
  //   }

  get X() {
    //using them as a property
    return this.x;
  }
  set X(value) {
    if (value && value < 0) {
      throw new Error('Value can not be less than 0');
    }
    this.x = value;
  }
}

let point = new Point(1, 2);
// let x = point.getX();
let x = point.X;
console.log(x);
point.X = 10;
// point.setX(10)
point.draw();
