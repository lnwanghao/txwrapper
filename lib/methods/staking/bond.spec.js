"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const bond_1 = require("./bond");
describe('staking::bond', () => {
    it('should work', () => {
        const unsigned = bond_1.bond(util_1.TEST_METHOD_ARGS.staking.bond, util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        util_1.testBaseTxInfo(unsigned);
        expect(unsigned.method).toBe('0x07008eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48910100');
    });
    it('should take "staked" or "Staked" as payee', () => {
        const unsignedLowerCase = bond_1.bond(Object.assign(Object.assign({}, util_1.TEST_METHOD_ARGS.staking.bond), { payee: 'staked' }), util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        const unsignedCapitalized = bond_1.bond(Object.assign(Object.assign({}, util_1.TEST_METHOD_ARGS.staking.bond), { payee: 'Staked' }), util_1.TEST_BASE_TX_INFO, util_1.TEST_OPTIONS);
        expect(unsignedLowerCase.method).toBe(unsignedCapitalized.method);
    });
});
