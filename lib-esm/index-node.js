export { BoxObject } from "./BoxObject.js";
export { Hammer } from "./Hammer.js";
export { Plant } from "./Plant.js";
export { Box } from "./Box-node.js";
import { Box } from "./Box-node.js";
import { Plant } from "./Plant.js";
const p = new Plant("orchidea");
const b = new Box("garden");
b.addObject(p);
const data = b.getFile("http://skies.esac.esa.int/Herschel/PACS-color/properties").then((res) => console.log(res));
//# sourceMappingURL=index-node.js.map