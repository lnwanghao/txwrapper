"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attest = void 0;
const util_1 = require("../../util");
/**
 * Attest to a statement, needed to finalize the claims process. This method is
 * only available on Polkadot.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function attest(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'attest',
            pallet: 'claims',
        } }, info), options);
}
exports.attest = attest;
