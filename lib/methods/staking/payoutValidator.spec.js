"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const payoutValidator_1 = require("./payoutValidator");
describe('staking::payoutValidator', () => {
    it('should work', () => {
        const unsigned = payoutValidator_1.payoutValidator(util_1.TEST_METHOD_ARGS.staking.payoutValidator, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x071164000000');
    });
});
