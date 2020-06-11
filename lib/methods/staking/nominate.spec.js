"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const nominate_1 = require("./nominate");
describe('staking::nominate', () => {
    it('should work', () => {
        const unsigned = nominate_1.nominate(util_1.TEST_METHOD_ARGS.staking.nominate, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x0705088eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a4890b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22');
    });
});
