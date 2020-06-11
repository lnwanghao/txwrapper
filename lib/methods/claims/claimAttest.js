"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.claimAttest = void 0;
const util_1 = require("../../util");
/**
 * Make a claim to collect your DOTs by signing a statement.
 *
 * The dispatch origin for this call must be _None_.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function claimAttest(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'claimAttest',
            pallet: 'claims',
        } }, info), options);
}
exports.claimAttest = claimAttest;
