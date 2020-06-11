import { Args, BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '../../util';
export interface StakingWithdrawUnbondedArgs extends Args {
    numSlashingSpans: number;
}
/**
 * Remove any unlocked chunks from the `unlocking` queue from our management.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export declare function withdrawUnbonded(args: StakingWithdrawUnbondedArgs, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction;
