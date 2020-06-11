"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const proxyVote_1 = require("./proxyVote");
describe('democracy::proxyVote', () => {
    it('should work', () => {
        const unsigned = proxyVote_1.proxyVote(util_1.TEST_METHOD_ARGS.democracy.proxyVote, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x0903000081d2040000000000000000000000000000');
    });
});
