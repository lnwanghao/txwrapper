"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deriveAddress_1 = require("./deriveAddress");
const util_1 = require("./util");
describe('deriveAddress', () => {
    it('should work', () => {
        const address = deriveAddress_1.deriveAddress('0x96074594cccf1cd185fa8a72ceaeefd86648f8d45514f3ce33c31bdd07e4655d', util_1.KUSAMA_SS58_FORMAT);
        expect(address).toBe('Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s');
    });
});
