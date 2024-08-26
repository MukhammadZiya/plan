// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", //0-20
//   "togri boshliq tanlang va koproq xato qiling", //20-30
//   "uzingizga ishlashni boshlang", //30-40
//   "siz kuchli bo'lgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling foydasi yoq", //60
// ];

//callback
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Insert Number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) return null, list[1];
//   else if (a > 30 && a <= 40) return null, list[2];
//   else if (a > 40 && a <= 50) return null, list[3];
//   else if (a > 50 && a <= 60) return null, list[4];
//   else {
//     setInterval(function () {
//       callback(null , list[5]);
//     }, 1000);
//   }
// }

// console.log('passed 0')

// maslahatBering(70, (err, data) => {
//   if(err) console.log('Error:' , err);
//   else {
//     console.log(data);
//   }
// });

// console.log('passed 1')

//async functions
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return null, list[0];
//   else if (a > 20 && a <= 30) return null, list[1];
//   else if (a > 30 && a <= 40) return null, list[2];
//   else if (a > 40 && a <= 50) return null, list[3];
//   else if (a > 50 && a <= 60) return null, list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 3000);
//     });

// setTimeout(function () {
//   return null, list[5];
// }, 3000);
//   }
// }

// console.log("Passed here 0");

// using try & catch

// maslahatBering(44)
//   .then((data) => {
//     console.log("javob:", data);
//   })

//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

// console.log("passed here 1");

// using await

// async function run() {
//   let javob = await maslahatBering(6);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }

// run();

// A-TASK

// function countLetters(soz, sanoqHarf) {
//   return soz.split(sanoqHarf).length - 1;
// }

// const soz = "Jonibek Sajanim";
// const sanoqHarf = "n";
// console.log(countLetters(soz, sanoqHarf));

//TASK- B

// const countDigit = (str) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i]) && str[i] !== ' ') {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigit("1a2b3c4b5d67891112135"));

//TASK C

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  _getTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  qoldiq() {
    console.log(
      `Hozir ${this._getTime()}da ${this.non}ta non, ${
        this.lagmon
      }ta lagmon va ${this.cola}ta cola mavjud!`
    );
  }

  sotish(mahsulot, miqdor) {
    if (this[mahsulot] >= miqdor) {
      this[mahsulot] -= miqdor;
      console.log(
        `Hozir ${this._getTime()}da ${miqdor}ta ${mahsulot} sotildi!`
      );
    }
  }

  qabul(mahsulot, miqdor) {
    this[mahsulot] += miqdor;
    console.log(
      `Hozir ${this._getTime()}da ${miqdor}ta ${mahsulot} qabul qilindi!`
    );
  }
}

const shop = new Shop(1, 2, 3);

shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();
