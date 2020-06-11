"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const unbond_1 = require("./unbond");
describe('staking::unbond', () => {
    it('should work', () => {
        const unsigned = unbond_1.unbond(util_1.TEST_METHOD_ARGS.staking.unbond, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x07029101');
    });
});
