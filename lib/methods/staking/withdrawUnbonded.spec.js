"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const withdrawUnbonded_1 = require("./withdrawUnbonded");
describe('staking::withdrawUnbonded', () => {
    it('should work', () => {
        const unsigned = withdrawUnbonded_1.withdrawUnbonded(util_1.TEST_METHOD_ARGS.staking.withdrawUnbonded, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x07030b000000');
    });
});
