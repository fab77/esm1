import { Box } from './lib-esm/Box-node.js';
import { Hammer } from './lib-esm/Hammer.js';
var h = new Hammer("black");
console.log(h);
var b = new Box("dsa");
b.addObject(h);
console.log(b);
