// Fonksiyonlar

function selamlama(mesaj) {
  console.log(mesaj);
}

selamlama("Merhaba");
selamlama("Selam");
console.log(`****************************************************`);

function yasHesapla(dogumYili) {
  let simdi = new Date().getFullYear();
  return simdi - dogumYili;
}

let sonuc = yasHesapla(2000);
console.log(`Yaş: ${sonuc}`);

console.log(`****************************************************`);

function emekliligeKacYilKaldi(dogumYili, isim) {
  let yas = yasHesapla(dogumYili);
  let kalan_seneler = 65 - yas;

  if (kalan_seneler > 0) {
    console.log(`${isim} emekliliğe ${kalan_seneler} yıl kaldı.`);
  } else {
    console.log(`${isim} emekli oldu.`);
  }
}

emekliligeKacYilKaldi(2000, "yusuf");
emekliligeKacYilKaldi(1959, "kadir");
