"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vote = void 0;
const util_1 = require("../../util");
/**
 * Vote in a referendum.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function vote(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'vote',
            pallet: 'democracy',
        } }, info), options);
}
exports.vote = vote;
