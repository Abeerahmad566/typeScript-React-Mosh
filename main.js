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
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    Object.defineProperty(Point.prototype, "X", {
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
        get: function () {
            //using them as a property
            return this.x;
        },
        set: function (value) {
            if (value && value < 0) {
                throw new Error('Value can not be less than 0');
            }
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
// let x = point.getX();
var x = point.X;
console.log(x);
point.X = 10;
// point.setX(10)
point.draw();
