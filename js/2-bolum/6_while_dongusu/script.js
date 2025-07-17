//while dongusu

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//break

console.log(
  "-------------------------------------------------------------------"
);
console.log("While döngüsü ile kırma örneği");

let i = 1;

while (i <= 10) {
  i++;
  if (i % 2 === 1) {
    break; // Çift sayıları atla
  }
  console.log(i); // Sadece çift sayıları yazdır
}
console.log("While döngüsü bitti: ");

// contunine

console.log(
  "-------------------------------------------------------------------"
);
console.log("While döngüsü ile devam etme örneği");

while (i <= 10) {
  i++;
  if (i % 2 === 1) {
    continue; // Çift sayıları atla
  }
  console.log(i); // Sadece çift sayıları yazdır
}
console.log("While döngüsü bitti: ");

console.log(
  "-------------------------------------------------------------------"
);
console.log("do while döngüsü örneği");

do {
  console.log(i + "----do while döngüsü");
  i++;
} while (i <= 10);
