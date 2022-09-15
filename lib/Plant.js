import { BoxObject } from "./BoxObject.js";
export class Plant extends BoxObject {
    constructor(color) {
        super(color);
        console.log("added " + this._color + " plant");
    }
}
