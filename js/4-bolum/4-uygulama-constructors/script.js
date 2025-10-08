function Player(oyuncuadi) {
  this.oyuncuadi = oyuncuadi;

  this.add_score = function (sayi) {
    this.sayi = sayi;
  };

  this.show_score = function () {
    return `${this.oyuncuadi} isimli oyuncunun skoru ${this.sayi}
    `;
  };
  this.start = function () {
    return `${this.oyuncuadi} oyuna başladı `;
  };
  this.stop = function () {
    return `${this.oyuncuadi} oyundan çıktı  `;
  };
  this.pause = function () {
    return `${this.oyuncuadi} oyuna durdurdu `;
  };
}

const oyuncu1 = new Player("Yusuf");
const oyuncu2 = new Player("Ahmet");
const oyuncu3 = new Player("Kadir");

oyuncu1.add_score(81);
oyuncu2.add_score(28);
oyuncu3.add_score(52);

console.log(oyuncu1.show_score());
console.log(oyuncu2.show_score());
console.log(oyuncu3.show_score());

console.log(oyuncu1.start());
console.log(oyuncu2.stop());
console.log(oyuncu3.pause());
