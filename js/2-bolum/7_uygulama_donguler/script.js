// uygulama döngüler

let sayilar = [3, 5, 7, 8, 12, 23, 45, 66];

// 1- Sayılar dizisindeki her bir sayının karesini yazdır.

for (let i = 0; i < sayilar.length; i++) {
  console.log(sayilar[i] * sayilar[i]);
}
console.log("-----------------------------------------------");

//2- sayilar listendki hangi sayılar 5 in katıdır

for (let i = 0; i < sayilar.length; i++) {
  if (sayilar[i] % 5 === 0) {
    console.log(sayilar[i]);
  }
}

console.log("-----------------------------------------------");

let i = 0;
while (i < sayilar.length) {
  if (sayilar[i] % 5 == 0) {
    console.log(sayilar[i]);
  }
  i++;
}
console.log("-----------------------------------------------");
// 3- 50-100 arasındaki sayıları azalan şekilde  yazdırınız.
for (let i = 100; i >= 50; i--) {
  console.log(i);
}

console.log("-----------------------------------------------");
let urunler = ["iphone 16", "samsung s25", "iphone 17", "samsung s26"];

// 4 - urunler listesindeki tüm ürünleri büyük harfle yadırınız.

for (let i = 0; i < urunler.length; i++) {
  console.log(urunler[i].toUpperCase());
}
console.log("-----------------------------------------------");
// 5- urunler listesindeki içinde samsung kelimesi geçen kaç kelime vardır?
let adet = 0;
for (let i = 0; i < urunler.length; i++) {
  if (urunler[i].toLowerCase().includes("samsung")) {
    adet++;
  }
}
console.log(adet + " - Samsung kelimesi içeriyor.");
console.log("-----------------------------------------------");

let ogrenciler = [
  { ad: "Yusuf", soyad: "Koç", notlar: [45, 40, 55] },
  { ad: "Kadir", soyad: "Tüküç", notlar: [10, 5, 0] },
  { ad: "Enes", soyad: "Demir", notlar: [45, 50, 60] },
  { ad: "Murat", soyad: "Demir", notlar: [10, 10, 10] },
];
// 6- ogrenciler listesindeki her öğrencinin not ortalamasını ve başarı durumunu yazdırınız.
let toplam_sinif = 0;
for (let i = 0; i < ogrenciler.length; i++) {
  let not_toplam = 0;
  let adet = 0;
  let ortalama = 0;

  for (let x = 0; x < ogrenciler[i].notlar.length; x++) {
    not_toplam += ogrenciler[i].notlar[x];
    adet++;
  }
  ortalama = not_toplam / adet;

  toplam_sinif += ortalama;

  if (ortalama >= 50) {
    basari = "Başarılı";
  } else {
    basari = "Başarısız";
  }

  console.log(
    `  ${ogrenciler[i].ad} ${ogrenciler[i].soyad}  isimli öğrencinin not  ortalaması: ${ortalama}  ${basari}`
  );
}
console.log("-----------------------------------------------");
// 7- Tüm öğrencilerin not ortalamsını hesaplayınız.

console.log(`Sınıfın not ortalaması: ${toplam_sinif / ogrenciler.length}`);
