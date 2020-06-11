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
const methods_1 = require("./methods");
const testUtil_1 = require("./util/testUtil");
describe('createSignedTx', () => {
    it('should work', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const unsigned = methods_1.balances.transferKeepAlive(testUtil_1.TEST_METHOD_ARGS.balances.transfer, testUtil_1.TEST_BASE_TX_INFO, testUtil_1.TEST_OPTIONS);
        const signingPayload = createSigningPayload_1.createSigningPayload(unsigned, testUtil_1.TEST_OPTIONS);
        const signature = yield testUtil_1.signWithAlice(signingPayload);
        const tx = createSignedTx_1.createSignedTx(unsigned, signature, testUtil_1.TEST_OPTIONS);
        expect(tx).toBe('0x250284d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d00954b53a4f5f9ce030d5c3255592c917fbe480dc5b074eaa1ef7e28bd035a6650b5870302e59ff7c6d74f16e4140c85cb874bb4a7cf911f802ce02ea6a5ff120deb580800060396074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30');
        done();
    }));
});
