"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vest = void 0;
const util_1 = require("../../util");
/**
 * Unlock any vested funds of the sender account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function vest(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'vest',
            pallet: 'vesting',
        } }, info), options);
}
exports.vest = vest;
