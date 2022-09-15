// import { helloWorld } from './Box.js';
// import { helloOldWorld } from './oldGreetings.cjs';

// const greeting = helloWorld();
// const oldGreeting = helloOldWorld();

// console.log(greeting);
// console.log(oldGreeting);


import { Box } from "./Box.js";
// import { BoxObject } from "./BoxObject.js";
import { Hammer } from "./Hammer.js";
import { Plant } from "./Plant.js";

const h1 = new Hammer("green");
const h2 = new Hammer("brown");

const p1 = new Plant("green");
const p2 = new Plant("red");
const p3 = new Plant("yellow");

const box = new Box("cantina");
box.addObject(h1);
box.addObject(h2);
box.addObject(p1);
box.addObject(p2);
box.addObject(p3);

export { Box } from "./Box.js";
export { Hammer } from "./Hammer.js";
export { Plant } from "./Plant.js";

