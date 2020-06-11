"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const bondExtra_1 = require("./bondExtra");
describe('staking::bondExtra', () => {
    it('should encode', () => {
        const unsigned = bondExtra_1.bondExtra(util_1.TEST_METHOD_ARGS.staking.bondExtra, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x07019101');
    });
});
