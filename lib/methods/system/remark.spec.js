"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const remark_1 = require("./remark");
describe('system::remark', () => {
    it('should work', () => {
        const unsigned = remark_1.remark(util_1.TEST_METHOD_ARGS.system.remark, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x00011042194253');
    });
});
