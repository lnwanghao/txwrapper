"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const chill_1 = require("./chill");
describe('staking::chill', () => {
    it('should work', () => {
        const unsigned = chill_1.chill(util_1.TEST_METHOD_ARGS.staking.chill, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x0706');
    });
});
