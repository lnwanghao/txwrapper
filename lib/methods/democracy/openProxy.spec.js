"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const openProxy_1 = require("./openProxy");
describe('democracy::openProxy', () => {
    it('should work', () => {
        const unsigned = openProxy_1.openProxy(util_1.TEST_METHOD_ARGS.democracy.openProxy, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x09188eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48');
    });
});
