// Uygulama Fonksiyonları

// 1 - Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonskiyonu yapınız.

function kelimeYazdir(kelime, adet) {
  for (let i = 0; i < adet; i++) {
    console.log(kelime);
  }
}

kelimeYazdir("Merhaba", 5);
console.log(
  "-------------------------------------------------------------------------------------"
);
// 2- Dikdörtgenin alanını ve çevresini hesaplayan fonksiyonları yapınız.
function alanCevreHesapla(kisa, uzun) {
  let alan = kisa * uzun;
  let cevre = 2 * (kisa + uzun);
  console.log(`Dikdörtgenin Alanı: ${alan}`);
}
alanCevreHesapla(5, 10);
console.log(
  "-------------------------------------------------------------------------------------"
);

// 3- Yazı Tura uygulamasını fonksiyon kullanarak yapınız.
function yaziTura() {
  let random = Math.random();

  if (random < 0.5) {
    console.log("Yazı");
  } else {
    console.log("Tura");
  }
}
yaziTura();
console.log(
  "-------------------------------------------------------------------------------------"
);

// 4 - Kendisine gönderilen bir sayınjın tam bölenlerini dizi şeklinde döndüren fonksiyonu yapınız.
function tamBolenler(sayi) {
  let bolenler = [];
  for (let i = 1; i <= sayi; i++) {
    if (sayi % i === 0) {
      bolenler.push(i);
    }
  }
  return bolenler;
}
console.log(tamBolenler(12)); // [1, 2, 3, 4, 6, 12]
console.log(
  "-------------------------------------------------------------------------------------"
);
// 5- Değişkeem sayıda parametre alan toplam  isminde bir fonskiyon tanımlayınız.
function toplam(...sayilar) {
  let toplam = 0;
  for (let sayi of sayilar) {
    toplam += sayi;
  }
  return toplam;
}
