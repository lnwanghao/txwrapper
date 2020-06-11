"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const transferKeepAlive_1 = require("./transferKeepAlive");
describe('balances::transferKeepAlive', () => {
    it('should work', () => {
        const unsigned = transferKeepAlive_1.transferKeepAlive(util_1.TEST_METHOD_ARGS.balances.transferKeepAlive, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x060396074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d30');
    });
});
