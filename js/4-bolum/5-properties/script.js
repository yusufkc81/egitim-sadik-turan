// object properties

function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;

  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle("Rectangle 1", 10, 5);
const rect2 = new Rectangle("Rectangle 2", 20, 15);

console.log(rect1);
console.log(rect2);

console.log(rect2.area());
console.log(rect1.area());
