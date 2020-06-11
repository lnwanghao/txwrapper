"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importPrivateKey_1 = require("./importPrivateKey");
const constants_1 = require("./util/constants");
const PRIVATE_KEY = '0x9d61b19deffd5a60ba844af492ec2cc44449c5697b326919703bac031cae7f60';
describe('importPrivateKey', () => {
    it('should work', () => {
        const keypair = importPrivateKey_1.importPrivateKey(PRIVATE_KEY, constants_1.KUSAMA_SS58_FORMAT);
        expect(keypair.address).toBe('HSgj13mnepYxuysui2XroHKigftFpQsg1dcSfA9PckdZJW4');
    });
    it('should work', () => {
        const keypair = importPrivateKey_1.importPrivateKey(PRIVATE_KEY, constants_1.POLKADOT_SS58_FORMAT);
        expect(keypair.address).toBe('15sND1xy2556eoAx6eGV6zkURiPJ9T9qJ8XMDHsYTuZezp7f');
    });
});
