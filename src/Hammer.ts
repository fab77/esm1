import { BoxObject } from "./BoxObject.js";

export class Hammer extends BoxObject{
 
    constructor(color: string) {
        super(color);
        console.log("added "+this._color+" hammer");
    }
}