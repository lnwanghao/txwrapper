"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chill = void 0;
const util_1 = require("../../util");
/**
 * Declare the desire to cease validating or nominating. Does not unbond funds.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function chill(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'chill',
            pallet: 'staking',
        } }, info), options);
}
exports.chill = chill;
