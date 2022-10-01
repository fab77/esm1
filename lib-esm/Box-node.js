var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from "node-fetch";
export class Box {
    constructor(name) {
        this._name = name;
        this._objs = [];
        console.log("created node box for " + name);
    }
    addObject(obj) {
        this._objs.push(obj);
    }
    getFile(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(uri);
            if (!response.ok) {
                return new ArrayBuffer(0);
            }
            else {
                return response.arrayBuffer();
            }
        });
    }
}
//# sourceMappingURL=Box-node.js.map