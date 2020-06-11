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
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeBaseTxInfo = void 0;
const methods = __importStar(require("../methods"));
const util_1 = require("../util");
const decodeUnsignedTx_1 = require("./decodeUnsignedTx");
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Helper function to decode base tx info
 */
function decodeBaseTxInfo(txInfo) {
    [
        'address',
        'blockHash',
        'blockNumber',
        'genesisHash',
        'metadataRpc',
        'nonce',
        'specVersion',
        'transactionVersion',
        'tip',
    ].forEach((key) => expect(txInfo[key]).toBe(util_1.TEST_BASE_TX_INFO[key]));
    // The actual period is the smallest power of 2 greater than the input
    // period.
    expect(txInfo.eraPeriod).toBeGreaterThanOrEqual(util_1.TEST_BASE_TX_INFO.eraPeriod);
}
exports.decodeBaseTxInfo = decodeBaseTxInfo;
/**
 * Test the [[decodeUnsignedTx]] function
 */
function testDecodeUnsignedTx(pallet, name) {
    it(`should decode ${pallet}::${name}`, () => {
        const unsigned = methods[pallet][name](util_1.TEST_METHOD_ARGS[pallet][name], util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        const txInfo = decodeUnsignedTx_1.decodeUnsignedTx(unsigned, util_1.TEST_OPTIONS);
        decodeBaseTxInfo(txInfo);
        expect(txInfo.method.pallet).toBe(pallet);
        expect(txInfo.method.name).toBe(name);
        expect(txInfo.method.args).toEqual(util_1.TEST_METHOD_ARGS[pallet][name]);
    });
}
describe('decodeUnsignedTx', () => {
    util_1.getAllMethods().forEach((method) => testDecodeUnsignedTx(...method));
});
