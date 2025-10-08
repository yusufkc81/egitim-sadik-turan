// object

//person

const product = {
  //properties
  title: "Samsung S25",
  desctiption: "Güzel bir telefon",
  price: 70000,
  stock: 100,

  //methods

  display: function () {
    return `Ürün Başlığı: ${this.title} ürün açıklaması : ${this.destiption} ve fiyat: ${this.price}`;
  },

  is_active: function () {
    return this.stock > 0 ? " satışta" : "stokta yok";
  },
};

const product2 = {
  //properties
  title: "Samsung S25",
  desctiption: "Güzel bir telefon",
  price: 70000,
  stock: 100,

  //methods

  display: function () {
    return `Ürün Başlığı: ${this.title} ürün açıklaması : ${this.destiption} ve fiyat: ${this.price}`;
  },

  is_active: function () {
    return this.stock > 0 ? " satışta" : "stokta yok";
  },
};

console.log(product.title);
console.log(product.desctiption);
console.log(product.price);

console.log(product.display());
console.log(product.display());

console.log(product.is_active());
