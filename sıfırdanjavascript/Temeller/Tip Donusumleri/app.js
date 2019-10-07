// let value;

// //Veri tiplerini stringe çevirme

// value = String(123);
// value = String(3.14);
// value = String(true);
// value = String(function(){console.log()});
// value = String([1,2,3,4]);

// value = (10).toString(); //Stringe çevirmenin başka yolu

// //Veritiplerini Sayılara Çevirme

// value = Number("123");  //Sayıya çevirir
// value = Number(null);   //Boş ama değeri 0'dır.
// value = Number(undefined);  //İçi boş olduğu için Not a Number çıktısı verir.
// value = Number("Hello World");  //NaN
// value = Number(function(){console.log()});  //NaN
// value = Number([1,2,3,4]);  //NaN
// value = Number("3.14");

// //Sadece içinde sayı bulunan stringler ve null Number tipine dönüşüm yapabilir.

// value = parseInt("3");
// value = parseFloat("3.14");

// //Şeklinde Number dönüşümü yapılabilir.

// const a = "Hello" + "34";
// console.log(a);
// console.log(typeof a);

//Otomatik string dönüşümü yapılır.

// const a = "53" + 34;
// console.log(a);
// console.log(typeof a);

//Yine stringe çevirir.

// const a = Number("53") + 34;
// console.log(a);
// console.log(typeof a);

//Toplama yapar ve tipide Number olur.

console.log(value);
console.log(typeof value);

