import { Box } from './lib-esm/Box-node.js';
import { Hammer } from './lib-esm/Hammer.js';

const h = new Hammer("black");
console.log(h);
const b = new Box("dsa");
b.addObject(h);
console.log(b);
console.log("[esm1] Getting file ")
const f = await b.getFile("http://skies.esac.esa.int/Herschel/PACS-color/properties")
console.log(f);