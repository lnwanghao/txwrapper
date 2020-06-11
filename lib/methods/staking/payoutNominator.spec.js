"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const payoutNominator_1 = require("./payoutNominator");
describe('staking::payoutNominator', () => {
    it('should work', () => {
        const unsigned = payoutNominator_1.payoutNominator(util_1.TEST_METHOD_ARGS.staking.payoutNominator, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x071064000000048eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4802000000');
    });
});
