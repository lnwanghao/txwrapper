"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const method_1 = require("./method");
const testUtil_1 = require("./testUtil");
describe('createMethod', () => {
    it('should create a default validity period of 5 minutes', () => {
        const txBaseInfo = Object.assign(Object.assign({}, testUtil_1.TEST_BASE_TX_INFO), { eraPeriod: undefined });
        const unsigned = method_1.createMethod(Object.assign(Object.assign({}, txBaseInfo), { method: {
                args: {},
                name: 'chill',
                pallet: 'staking',
            } }), testUtil_1.TEST_OPTIONS);
        expect(unsigned.era).toBe('0xe500');
    });
    it('should be backwards-compatible with validityPeriod', () => {
        const txBaseInfo = Object.assign(Object.assign({}, testUtil_1.TEST_BASE_TX_INFO), { eraPeriod: undefined, validityPeriod: 7200 });
        const unsigned = method_1.createMethod(Object.assign(Object.assign({}, txBaseInfo), { method: {
                args: {},
                name: 'chill',
                pallet: 'staking',
            } }), testUtil_1.TEST_OPTIONS);
        expect(unsigned.era).toBe('0xea58');
    });
});
