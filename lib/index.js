"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = void 0;
const methods = __importStar(require("./methods"));
exports.methods = methods;
__exportStar(require("./createSignedTx"), exports);
__exportStar(require("./createSigningPayload"), exports);
__exportStar(require("./decode/decode"), exports);
__exportStar(require("./deriveAddress"), exports);
__exportStar(require("./getTxHash"), exports);
__exportStar(require("./importPrivateKey"), exports);
__exportStar(require("./methods"), exports); // We can remove this export, since we export `methods`
__exportStar(require("./util/claims"), exports);
__exportStar(require("./util/encodeUnsignedTx"), exports);
var constants_1 = require("./util/constants");
Object.defineProperty(exports, "KUSAMA_SS58_FORMAT", { enumerable: true, get: function () { return constants_1.KUSAMA_SS58_FORMAT; } });
Object.defineProperty(exports, "POLKADOT_SS58_FORMAT", { enumerable: true, get: function () { return constants_1.POLKADOT_SS58_FORMAT; } });
Object.defineProperty(exports, "WESTEND_SS58_FORMAT", { enumerable: true, get: function () { return constants_1.WESTEND_SS58_FORMAT; } });
var metadata_1 = require("./util/metadata");
Object.defineProperty(exports, "getRegistry", { enumerable: true, get: function () { return metadata_1.getRegistry; } });
__exportStar(require("./util/types"), exports);
