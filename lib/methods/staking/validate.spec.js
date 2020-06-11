"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const validate_1 = require("./validate");
describe('staking::validate', () => {
    it('should work', () => {
        const unsigned = validate_1.validate(util_1.TEST_METHOD_ARGS.staking.validate, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x070414');
    });
});
