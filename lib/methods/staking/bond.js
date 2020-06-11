"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bond = void 0;
const util_1 = require("../../util");
/**
 * Construct a transaction to bond funds and create a Stash account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function bond(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'bond',
            pallet: 'staking',
        } }, info), options);
}
exports.bond = bond;
