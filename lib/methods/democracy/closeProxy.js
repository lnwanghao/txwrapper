"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeProxy = void 0;
const util_1 = require("../../util");
/**
 * Clear the proxy. Called by the proxy.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function closeProxy(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'closeProxy',
            pallet: 'democracy',
        } }, info), options);
}
exports.closeProxy = closeProxy;
