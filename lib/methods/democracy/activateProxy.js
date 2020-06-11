"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateProxy = void 0;
const util_1 = require("../../util");
/**
 * Specify a proxy that is already open to us. Called by the stash.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function activateProxy(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'activateProxy',
            pallet: 'democracy',
        } }, info), options);
}
exports.activateProxy = activateProxy;
