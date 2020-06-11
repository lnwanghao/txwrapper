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
const createSignedTx_1 = require("../createSignedTx");
const createSigningPayload_1 = require("../createSigningPayload");
const methods_1 = require("../methods");
const util_1 = require("../util");
const decode_1 = require("./decode");
const decodeSignedTx_spec_1 = require("./decodeSignedTx.spec");
const decodeSigningPayload_spec_1 = require("./decodeSigningPayload.spec");
const decodeUnsignedTx_spec_1 = require("./decodeUnsignedTx.spec");
describe('decode', () => {
    it('should decode signedTx', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const unsigned = methods_1.balances.transfer(util_1.TEST_METHOD_ARGS.balances.transfer, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        const signingPayload = createSigningPayload_1.createSigningPayload(unsigned, util_1.TEST_OPTIONS);
        const signature = yield util_1.signWithAlice(signingPayload);
        const signedTx = createSignedTx_1.createSignedTx(unsigned, signature, util_1.TEST_OPTIONS);
        const txInfo = decode_1.decode(signedTx, util_1.TEST_OPTIONS);
        decodeSignedTx_spec_1.decodeBaseTxInfo(txInfo);
        expect(txInfo.method.pallet).toBe('balances');
        expect(txInfo.method.name).toBe('transfer');
        expect(txInfo.method.args).toEqual(util_1.TEST_METHOD_ARGS.balances.transfer);
        done();
    }));
    it('decode unsigned tx', () => {
        const unsigned = methods_1.balances.transfer(util_1.TEST_METHOD_ARGS.balances.transfer, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        const txInfo = decode_1.decode(unsigned, util_1.TEST_OPTIONS);
        decodeUnsignedTx_spec_1.decodeBaseTxInfo(txInfo);
        expect(txInfo.method.pallet).toBe('balances');
        expect(txInfo.method.name).toBe('transfer');
        expect(txInfo.method.args).toEqual(util_1.TEST_METHOD_ARGS.balances.transfer);
    });
    it('should decode signing payload', (done) => {
        const unsigned = methods_1.balances.transfer(util_1.TEST_METHOD_ARGS.balances.transfer, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        const signingPayload = createSigningPayload_1.createSigningPayload(unsigned, util_1.TEST_OPTIONS);
        const txInfo = decode_1.decode(signingPayload, util_1.TEST_OPTIONS);
        decodeSigningPayload_spec_1.decodeBaseTxInfo(txInfo);
        expect(txInfo.method.pallet).toBe('balances');
        expect(txInfo.method.name).toBe('transfer');
        expect(txInfo.method.args).toEqual(util_1.TEST_METHOD_ARGS.balances.transfer);
        done();
    });
});
