"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const closeProxy_1 = require("./closeProxy");
describe('democracy::closeProxy', () => {
    it('should work', () => {
        const unsigned = closeProxy_1.closeProxy(util_1.TEST_METHOD_ARGS.democracy.closeProxy, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x090d');
    });
});
