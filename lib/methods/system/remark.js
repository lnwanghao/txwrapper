"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remark = void 0;
const util_1 = require("../../util");
/**
 * Make some on-chain remark.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function remark(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'remark',
            pallet: 'system',
        } }, info), options);
}
exports.remark = remark;
