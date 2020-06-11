"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payoutNominator = void 0;
const util_1 = require("../../util");
/**
 * Make one nominator's payout for one era.
 * WARNING: once an era is payed for a validator such validator can't claim the
 * payout of previous era.
 * WARNING: Incorrect arguments here can result in loss of payout. Be very careful.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
function payoutNominator(args, info, options) {
    return util_1.createMethod(Object.assign({ method: {
            args,
            name: 'payoutNominator',
            pallet: 'staking',
        } }, info), options);
}
exports.payoutNominator = payoutNominator;
