"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivateProxy = void 0;
const util_1 = require("../../util");
/**
 * Deactivate the proxy, but leave open to this account. Called by the stash.
 * The proxy must already be active.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function deactivateProxy(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'deactivateProxy',
            pallet: 'democracy',
        } }, info), options);
}
exports.deactivateProxy = deactivateProxy;
