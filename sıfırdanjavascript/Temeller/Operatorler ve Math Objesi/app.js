let value;

// const value1 = 10;

// const value2 = 4;

//Aritmetik Operatörler

// value = value1 + value2;
// value = value1 - value2;
// value = value1 * value2;
// value = value1 / value2;
// value = value1 % value2;

//Math Objeleri

value = Math.PI;
value = Math.E;

value = Math.round(3.6); //3.5 ve üzerini yukarı yuvarlar
value = Math.round(3.5);
value = Math.round(3.2); //Aşağı yuvarlanır.

value = Math.ceil(3.2);  //Her zaman yukarı yuvarlar

value = Math.floor(3.7);  //Her zaman aşağı yuvarlar.

value = Math.sqrt(16);  //Karekök alır.
value = Math.sqrt(31);

value = Math.abs(-10);  //Mutlak değerini alır.

value = Math.pow(8,3);   //Üs alma işlemi yapar.

value = Math.max(10,-1,32,100);   //Max değeri verir.

value = Math.min(-1,100,32,4);   //Min değeri verir.

value = Math.random();  //0 ile 1 arasında rastgele sayılar üretir. 0 dahil 1 dahil değildir.

value = Math.random() * 20; //0-20 arası değer üretir ancak 20 dahil değildir.

value = Math.random() * 20 + 1; //1-21 arası değer üretilir 21 dahil değildir.

value = Math.floor(Math.random() * 20 + 1);  //1-20 arası değer üretilir.

console.log(value);