"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const setPayee_1 = require("./setPayee");
describe('staking::setPayee', () => {
    it('should work', () => {
        const unsigned = setPayee_1.setPayee(util_1.TEST_METHOD_ARGS.staking.setPayee, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x070700');
    });
});
