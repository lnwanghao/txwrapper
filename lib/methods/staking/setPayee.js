"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPayee = void 0;
const util_1 = require("../../util");
/**
 * reset the payee.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function setPayee(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'setPayee',
            pallet: 'staking',
        } }, info), options);
}
exports.setPayee = setPayee;
