let value;

const firstName = "Louis";
const lastName = "Armstrong";

const langs = "Java,Python,C++";

value = firstName + lastName;

value = firstName + " " +lastName;

value = "Zeliha";

value += "Bozanli";  //value = value + " " + "Bozanlı";

value = firstName.length;  //Karakter sayısını verir.

value = firstName.concat(" ",lastName," ","Ceng");   //Ekleme yapabilmek için kullanılır. firstName + " " + ...

value = firstName.toLowerCase();  //Harfleri küçük harfe çevirir.

value = firstName.toUpperCase();  //Harfleri büyük harfe çevirir.

// Stringler dizi gibi indexlerde tutulur
value = firstName[0];  //L
value = firstName[4];
value = firstName[firstName.length-1];  //Son elemanı verir.

//Index of index değerini verir.

value = firstName.indexOf("L");
value = firstName.indexOf("o");
value = firstName.indexOf("l");   //İçinde olmadığı için -1 verir.

//Char At istenilen indexteki değeri verir.

value = firstName.charAt(0);
value = firstName.charAt(firstName.length-1);

//Split parçalama yapar

value = langs.split(",");  //, göre parçala

//Replace ile değer değişme yapabiliriz.

value = langs.replace("Python","CSS");

//Includes içinde sorgulamayı sağlar.

value = langs.includes("Java");   //içinde varsa true döner, yoksa false döner.



console.log(value);

