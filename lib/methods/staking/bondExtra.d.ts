import { Args, BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '../../util';
export interface StakingBondExtraArgs extends Args {
    /**
     * The maximum amount to bond.
     */
    maxAdditional: number;
}
/**
 * Add some extra amount that have appeared in the stash `free_balance` into
 * the balance up for staking.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export declare function bondExtra(args: StakingBondExtraArgs, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction;
