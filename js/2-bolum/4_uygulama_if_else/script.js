// 1- Bir Sayının 50-100 arasında olup olmadığını kontrol ediniz

let sayi = 30;

if (sayi >= 50 && sayi < 100) {
  console.log("Sayı 50 ile 100 arasında.");
} else {
  console.log("Sayı 50 ile 100 arasında değil.");
}

// 2- Bir Sayının poizitif çift sayı olup olmadığını kontrol ediniz.

let sayi2 = 10;

if (sayi2 % 2 == 0 && sayi2 > 0) {
  console.log("Sayı pozitif ve çift.");
}

// 3- x,y,z sayılarının büyüklük karşılaştırmasını yapınız.

let x = 10,
  y = 20,
  z = 30;
if (x > y && x > z) {
  console.log("x en büyük sayıdır.");
} else if (y > x && y > z) {
  console.log("y en büyük sayıdır.");
} else if (z > x && z > y) {
  console.log("z en büyük sayıdır.");
}

// 4- 2 vize (40%) ve 1 final (60%) notuna göre ortalama hesaplayınız.
//   a- Ortalama 50 ve üzeri ise "Geçtiniz" değilse "Kaldınız" yazdırınız.
//  b- geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
//  c-Finalden  70 alındığında  ortalama 50'nin altında olsa bile geçmiş sayılır

let vize1 = 20,
  vize2 = 10,
  final = 70;

let ortalama = ((vize1 + vize2) / 2) * 0.4 + final * 0.6;
console.log("Ortalama: " + ortalama);
//a
if (ortalama >= 50) {
  console.log("Geçtiniz.");
} else {
  console.log("Kaldınız.");
}
//b

if (ortalama >= 50 && final >= 50) {
  console.log("Geçtiniz.");
} else {
  console.log("Kaldınız.");
}
//c
if (final >= 70 || ortalama >= 50) {
  console.log("Geçtiniz.");
} else {
  console.log("Kaldınız.");
}
