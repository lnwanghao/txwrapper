"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const setController_1 = require("./setController");
describe('staking::setController', () => {
    it('should work', () => {
        const unsigned = setController_1.setController(util_1.TEST_METHOD_ARGS.staking.setController, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x07088eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48');
    });
});
