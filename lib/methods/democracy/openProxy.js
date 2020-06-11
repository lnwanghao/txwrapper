"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openProxy = void 0;
const util_1 = require("../../util");
/**
 * Become a proxy. This must be called prior to a later `activateProxy`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function openProxy(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'openProxy',
            pallet: 'democracy',
        } }, info), options);
}
exports.openProxy = openProxy;
