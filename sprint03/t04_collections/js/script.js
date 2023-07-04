const guestList = new WeakSet();
//
let g1 = ["Mark"];
let g2 = ["Jotaro"];
let g3 = ["Guccio"];
let g4 = ["Dio"];
let g5 = ["Liza Liza"];
guestList.add(g1);
guestList.add(g2);
guestList.add(g3);
guestList.add(g4);
guestList.add(g5);
console.log(guestList);
console.log(guestList.has(g2));
guestList.delete(g2);
console.log(guestList.has(g2));
//

const menu = new WeakMap();
//
let d1 = {name: "Chop"};
let d2 = {name: "Meat"};
let d3 = {name: "Dumplings"};
let d4 = {name: "Bread"};
let d5 = {name: "Cola"};
menu.set(d1, "10$");
menu.set(d2, "20$");
menu.set(d3, "155$");
menu.set(d4, "1$");
menu.set(d5, "2$");
console.log(menu);
console.log(menu.get(d3));
console.log(menu.has(d4));
menu.delete(d4);
console.log(menu.has(d4));
//

const bankVault = new Map();
//
bankVault.set(12345, "500$");
bankVault.set(22222, "10000$");
bankVault.set(10901, "5$");
bankVault.set(55123, "300$");
bankVault.set(22345, "5000.53$");

console.log(bankVault);
console.log(bankVault.size);
console.log(bankVault.get(12345));
console.log(bankVault.has(22222));
bankVault.delete(22222);
console.log(bankVault.has(22222));
//

const coinCollection = new Set();
//
coinCollection.add("Coin1");
coinCollection.add("Coin2");
coinCollection.add("Coin3");
coinCollection.add("Coin4");
coinCollection.add("Coin5");

console.log(coinCollection);
console.log(coinCollection.has("Coin2"));
console.log(coinCollection.size);

for (const item of coinCollection) {
    console.log(item);
  }
//