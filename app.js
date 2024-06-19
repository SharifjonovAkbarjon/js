{
    // // Case-1 //
     function dayName(n) {
         switch (n) {
             case 1:
                 return "1-Dushanba"
             case 2:
                 return "2-Seshanba"
             case 3:
                 return "3-Chorshanba"
             case 4:
                 return "4-Payshanba"
             case 5:
                 return "5-Juma"
             case 6:
                 return "6-Shanba"
             case 7:
                 return "7-Yakshanba"
             default:
                 return "Bunday kun yo'q"
         }
     }
     console.log(dayName(5));
}

{
    // // Case-2 //
     function grades(k) {
         switch (k) {
             case 1:
                 return "1-Yomon"
             case 2:
                 return "2-Qoniqarsiz"
             case 3:
                 return "3-Qoniqarli"
             case 4:
                 return "4-Yaxshi"
             case 5:
                 return "5-A'lo"
             default:
                 return "Xato"
         }
     }
    // console.log(grades(5));
}

{
    // // Case-3 //
     function moon(a) {
         switch (a) {
             case 1:
                 return "1 chi oy, 'Kuz'"
             case 2:
                 return "2 chi oy, 'Qish'"
             case 3:
                 return "3 chi oy, 'Bahor'"
             case 4:
                 return "4 chi oy, 'Yoz'"
             default:
                 return "Bunday oy yo'q"
         }
     }
     console.log(moon(2));
}

{
    // case4
     function monthDay(n) {
         alert("Oy raqami berilgan. Shu oyda nechta kun borligini aniqlovchi dastur tuzilsin.")
         switch (n) {
             case 1:
             case 3:
             case 5:
             case 7:
             case 8:
             case 10:
             case 12:
                  return `${n} - oyda 31 kun bor `
             case 2:
                 return `${n} - oyda 28 kun bor (4 yilda bir 29 kun bo'ladi)`   
             case 4:
             case 6:
             case 9:
             case 11:
                 return `${n} oyda 30 kun bor`
             default:
                 return ` bunday oy mavjud emas`
         }
     }
    
     console.log( monthDay(0) );
     console.log( monthDay(1) );
     console.log( monthDay(2) );
     console.log( monthDay(3) );
     console.log( monthDay(4) );
     console.log( monthDay(5) );
     console.log( monthDay(6) );
     console.log( monthDay(7) );
     console.log( monthDay(9) );
     console.log( monthDay(10) );
     console.log( monthDay(11) );
     console.log( monthDay(12) );
     console.log( monthDay(13) );
}
{
    // case5
     function number(a, b, amal) {
         alert("a va b haqiqiy va amal butun soni berilgan. a va b sonlari ustida arifmetik amallar bajaruvchi programma tuzilsin. amal quyidagi qiymatlarni qabul qiladi: \n 1 - qo'shish, 2 - aiyirish, 3 - bo'lish, 4 - ko'paytirish")
    
         let bPlus = "qo'shish"
         let bMinus = "aiyirish"
         let bBoluv = "bo'lish"
         let bKopaytiruv = "ko'paytirish"
         switch (a, b, amal) {
             case 1:
             return a + b
             case 2:
             return a - b
             case 3:
                 if (b !== 0) {
                     return a / b               
                 }else{
                     return `0 ga bo'lib bo'lmaydi`
                 }
             case 4:
             return a * b
             default:
                 return `bunday amal yo'q`
         }
     }
    
     console.log( `Natija: ${number (2, 1, 1)}. Kiritlgan sonlar a = ${2} b = ${1}. kiritilgan amal = ${1} - qo'shish`  );
     console.log( `Natija: ${number (5, 3, 2)}. Kiritlgan sonlar a = ${5} b = ${3}. kiritilgan amal = ${2} - ayirish`  );
     console.log( `Natija: ${number (8, 2, 3)}. Kiritlgan sonlar a = ${8} b = ${2}. kiritilgan amal = ${3} - bo'lish`  );
     console.log( `Natija: ${number (8, 0, 3)}. Kiritlgan sonlar a = ${8} b = ${0}. kiritilgan amal = ${3} - bo'lish`  );
     console.log( `Natija: ${number (8, 3, 4)}. Kiritlgan sonlar a = ${8} b = ${3}. kiritilgan amal = ${4} - ko'paytirish`  );
     console.log( `Kiritlgan sonlar a = ${8} b = ${3}. kiritilgan amal = ${0} - c${number (8, 3, 0)}`  );
}
{
    // case6
     function metr( m, length) {
         alert("uzunlik qiymatlari quyidagicha berilgan. 1 - detsimetr, 2 - kilometr, 3 - metr, 4 -  millimetr, 5 - santimetr. Uzunlik birligini bildiruvchi son berilgan (1 - 5 oraliqda ) va shu birlikdagi kesma uzunligini berilgan ( haqiqiy son ). Kesmaning uzunligini toping.")
    
         switch (length) {
             case 1:
                 return  `Natija: ${ m * 0.1} metr. Kiritilgan qiymat = ${ m } dm`   
             case 2:
                 return  `Natija: ${ m * 1_000} metr. Kiritilgan qiymat = ${ m } km`
             case 3:
                 return  `Natija: ${ m } metr. Kiritilgan qiymat = ${ m } m`
             case 4:
                 return  `Natija: ${ m * 0.001} metr. Kiritilgan qiymat = ${ m } mm`
             case 5:
                 return  `Natija: ${ m * 0.01} metr. Kiritilgan qiymat = ${ m } sm`
             default:
                 return `Noto'g'ri birlik soni kiritildi. Iltimos 1 - 5 gacha bo'lgan birlikni tanlang.`
         }
     }
     console.log( metr(9, 1) );
     console.log( metr(7, 2) );
     console.log( metr(5, 3) );
     console.log( metr(6, 4) );
     console.log( metr(2, 5) );
     console.log( metr(6, 6) );
}
{
    // case7
     function massa( kg, weight ) {
         alert("Og'irlik birliklari quyidagi tartibda berilgan. 1 - kilogramm, 2- milligramm, 3 - gramm, 4 - tonna, 5 - sentner. Uzunlik birligini bildirtuvchi soni berilgan va shu birlikdagi og'irlik qiymati berilgan. Og'irlikni kilogramda ifodalovchi programma tuzilsin ")
         switch ( weight ) {
             case 1:
                 return `Natija: ${ kg } kg. Kiritilgan qiymat = ${ kg } kg`
             case 2:
                 return `Natija: ${ kg * 0.000_001 } kg. Kiritilgan qiymat = ${ kg } mg`
             case 3:
                 return `Natija: ${ kg * 0.001 } kg. Kiritilgan qiymat = ${ kg } g`
             case 4:
                 return `Natija: ${ kg * 1000 } kg. Kiritilgan qiymat = ${ kg } t`
             case 5:
                 return `Natija: ${ kg * 100 } kg. Kiritilgan qiymat = ${ kg } st`
             default:
                 return `Noto'g'ri birlik soni kiritildi. Iltimos 1 dan 5 gacha son kiriting`
         }
     }
    
     console.log( massa(3, 1) );
     console.log( massa(6, 2) );
     console.log( massa(2, 3) );
     console.log( massa(9, 4) );
     console.log( massa(4, 5) );
     console.log( massa(7, 6) );
}

{
    // // Case-8 //
     let day = parseInt(prompt("Kun (1-31):"));
     let month = parseInt(prompt("Oy (1-12):"));
     let isLeapYear = parseInt(prompt("Kabisa yili (1- ha, 0- yo'q):"));
     let daysInYear = isLeapYear ? 366 : 365;

     let daysInMonth;
     switch (month) {
         case 1: 
         case 3: 
         case 5: 
         case 7: 
         case 8: 
         case 10: 
         case 12:
             daysInMonth = 31;
         case 4: 
         case 6: 
         case 9: 
         case 11:
             daysInMonth = 30;
         case 2:
             daysInMonth = isLeapYear ? 29 : 28;
         default:
             daysInMonth = "Notog'ri oy raqami kiritildi.";
     }

     if (day > 0 && day <= daysInMonth) {
         console.log("Sanani ifodalovchi dastur: " + day + "-" + month + ", Yilda " + daysInYear + " kun bor.");
     } else {
         console.log("Notog'ri kun kiritildi.");
     }
}

{
    // // Case - 9 //
     let day = parseInt(prompt("Kun (1-31):"));
     let month = parseInt(prompt("Oy (1-12):"));
     let isLeapYear = parseInt(prompt("Kabisa yili (1- ha, 0- yo'q):"));

     let daysInMonth;
     switch (month) {
         case 1: 
         case 3: 
         case 5: 
         case 7: 
         case 8: 
         case 10: 
         case 12:
             daysInMonth = 31;
         case 4: 
         case 6: 
         case 9: 
         case 11:
             daysInMonth = 30;
         case 2:
             daysInMonth = isLeapYear ? 29 : 28;
         default:
             daysInMonth = 0;
     }

     if (day > 0 && day < daysInMonth) {
         day++;
     } else if (day === daysInMonth) {
         day = 1;
         if (month < 12) {
             month++;
         } else {
             month = 1;
         }
     } else {
         console.log("Notog'ri kun kiritildi.");
     }
     console.log("Keyingi sana: " + day + "-" + month);
}

{
    // // Case - 10 //
     let direction = prompt("Robot yo'nalishi (s, j, q, g):");
     let command1 = prompt("1-buyruq (0, 1, 2):");
     let command2 = prompt("2-buyruq (0, 1, 2):");
     let finalDirection;

     function turnLeft(currentDirection) {
         switch (currentDirection) {
             case "s":
                 return "g";
             case "g":
                 return "j";
             case "j":
                 return "q";
             case "q":
                 return "s";
         }
     }

     function turnRight(currentDirection) {
         switch (currentDirection) {
             case "s":
                 return "q";
             case "q":
                 return "j";
             case "j":
                 return "g";
             case "g":
                 return "s";
         }
     }

     finalDirection = direction;
     if (command1 === "1") {
         finalDirection = turnLeft(finalDirection);
     }

}




 // // 15talik masala






{
    // // For-1 //
     let k = parseInt(prompt("k sonini kiriting:"));
     let n = parseInt(prompt("n sonini kiriting:"));
     for (let i = 0; i < n; i++) {
         console.log(k);
     }
}

{
    // // For-2 //
     let a = parseInt(prompt("a sonini kiriting:"));
     let b = parseInt(prompt("b sonini kiriting:"));
     let count = 0;
     for (let i = a; i <= b; i++) {
         console.log(i);
         count++;
     }
     console.log("Jami:", count);
}

{
    // // For-3 //
     let a = parseInt(prompt("a sonini kiriting:"));
     let b = parseInt(prompt("b sonini kiriting:"));
     let count = 0;
     for (let i = b - 1; i > a; i--) {
         console.log(i);
         count++;
     }
     console.log("Jami:", count);
}

{
    // // For-4 //
     let price = parseFloat(prompt("1 kg konfet narxini kiriting:"));
     for (let i = 1; i <= 10; i++) {
         console.log(i + " kg konfet narxi:", price * i);
     }
}

{
    // // For-5 //
     let price = parseFloat(prompt("1 kg konfet narxini kiriting:"));
     for (let i = 1; i < 10; i++) {
         console.log((i / 10) + " kg konfet narxi:", price * (i / 10));
     }
}

{
    // // For-6 //
     let price = parseFloat(prompt("1 kg konfet narxini kiriting:"));
     for (let weight = 1.2; weight <= 2; weight += 0.2) {
         console.log(weight + " kg konfet narxi:", price * weight);
     }
}

{
    // // For-7 //
     let a = parseInt(prompt("a sonini kiriting:"));
     let b = parseInt(prompt("b sonini kiriting:"));
     let total = 0;
     for (let i = a; i <= b; i++) {
         total += i;
     }
     console.log("Yig'indi:", total);
}

{
    // // For-8 //
     let a = parseInt(prompt("a sonini kiriting:"));
     let b = parseInt(prompt("b sonini kiriting:"));
     let product = 1;
     for (let i = a; i <= b; i++) {
         product *= i;
     }
     console.log("Ko'paytma:", product);
}

{
    // // For-9 //
     let a = parseInt(prompt("a sonini kiriting:"));
     let b = parseInt(prompt("b sonini kiriting:"));
     let total = 0;
     for (let i = a; i <= b; i++) {
         total += i * i;
     }
     console.log("Kvadratlar yig'indisi:", total);
}

{
     // For-10 //
     let n = parseInt(prompt("n sonini kiriting:"));
     let total = 0;
     for (let i = 1; i <= n; i++) {
         total += 1 / i;
     }
     console.log("Yig'indi:", total);
}

