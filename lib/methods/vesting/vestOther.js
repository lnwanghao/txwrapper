"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vestOther = void 0;
const util_1 = require("../../util");
/**
 * Unlock any vested funds of a `target` account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function vestOther(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'vestOther',
            pallet: 'vesting',
        } }, info), options);
}
exports.vestOther = vestOther;
