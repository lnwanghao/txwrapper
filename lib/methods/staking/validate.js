"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const util_1 = require("../../util");
/**
 * Declare the desire to validate for the origin controller.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function validate(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'validate',
            pallet: 'staking',
        } }, info), options);
}
exports.validate = validate;
