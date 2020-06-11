"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const vestOther_1 = require("./vestOther");
describe('vesting::vestOther', () => {
    it('should work', () => {
        const unsigned = vestOther_1.vestOther(util_1.TEST_METHOD_ARGS.vesting.vestOther, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x1a0190b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22');
    });
});
