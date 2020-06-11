"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unbond = void 0;
const util_1 = require("../../util");
/**
 * Construct a transaction to unbond funds from a Stash account. This must be called
 * by the _Controller_ account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function unbond(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'unbond',
            pallet: 'staking',
        } }, info), options);
}
exports.unbond = unbond;
