"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const vest_1 = require("./vest");
describe('vesting::vest', () => {
    it('should work', () => {
        const unsigned = vest_1.vest(util_1.TEST_METHOD_ARGS.vesting.vest, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x1a00');
    });
});
