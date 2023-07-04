import { HardWorker } from "./modules/hard-worker.js";

//такс тут скорее всего тебе выдаст ошибку с корсом если ты просто запустишь 
//через хтмл файлик, если что все работает через лайв сервер и у меня даже есть скриншотик
// const worker = new HardWorker;
// worker.name= 'Bruce';
// console.log(worker.name); // Bruce
// worker.age = 50;
// worker.salary= 1500;
// console.log(worker.toObject()); // Object { name: "Bruce", age: 50, salary: 1500 }
// worker.name= 'Linda';
// worker.age = 140;
// console.log(worker.toObject()); // Object { name: "Linda", age: 50, salary: 1500 }