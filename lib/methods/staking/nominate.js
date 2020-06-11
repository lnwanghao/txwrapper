"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nominate = void 0;
const util_1 = require("../../util");
/**
 * Construct a transaction to nominate. This must be called by the _Controller_ account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function nominate(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'nominate',
            pallet: 'staking',
        } }, info), options);
}
exports.nominate = nominate;
