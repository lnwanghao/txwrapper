"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const vote_1 = require("./vote");
describe('democracy::vote', () => {
    it('should work', () => {
        const unsigned = vote_1.vote(util_1.TEST_METHOD_ARGS.democracy.vote, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x0902000081d2040000000000000000000000000000');
    });
});
