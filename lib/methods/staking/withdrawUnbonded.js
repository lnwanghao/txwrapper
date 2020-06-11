"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withdrawUnbonded = void 0;
const util_1 = require("../../util");
/**
 * Remove any unlocked chunks from the `unlocking` queue from our management.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function withdrawUnbonded(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'withdrawUnbonded',
            pallet: 'staking',
        } }, info), options);
}
exports.withdrawUnbonded = withdrawUnbonded;
