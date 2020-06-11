"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createSignedTx_1 = require("./createSignedTx");
const createSigningPayload_1 = require("./createSigningPayload");
const getTxHash_1 = require("./getTxHash");
const methods_1 = require("./methods");
const testUtil_1 = require("./util/testUtil");
describe('getTxHash', () => {
    it('should work', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const unsigned = methods_1.balances.transferKeepAlive(testUtil_1.TEST_METHOD_ARGS.balances.transfer, testUtil_1.TEST_BASE_TX_INFO, testUtil_1.TEST_OPTIONS);
        const signingPayload = createSigningPayload_1.createSigningPayload(unsigned, testUtil_1.TEST_OPTIONS);
        const signature = yield testUtil_1.signWithAlice(signingPayload);
        const signedTx = createSignedTx_1.createSignedTx(unsigned, signature, testUtil_1.TEST_OPTIONS);
        const txHash = getTxHash_1.getTxHash(signedTx);
        expect(txHash).toBe('0x4ef6857ffc19ec719ca06f5c77b44a0dd7b2bb7b3632529ed77ffea1d7bb0162');
        done();
    }));
});
