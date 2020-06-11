"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setController = void 0;
const util_1 = require("../../util");
/**
 * (Re-)set the controller of a stash. Effects will be felt at the beginning of
 * the next era.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function setController(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'setController',
            pallet: 'staking',
        } }, info), options);
}
exports.setController = setController;
