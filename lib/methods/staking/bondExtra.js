"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bondExtra = void 0;
const util_1 = require("../../util");
/**
 * Add some extra amount that have appeared in the stash `free_balance` into
 * the balance up for staking.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function bondExtra(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'bondExtra',
            pallet: 'staking',
        } }, info), options);
}
exports.bondExtra = bondExtra;
