import { Args, BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '../../util';
export interface StakingSetPayeeArgs extends Args {
    /**
     * The rewards destination. Can be "Stash", "Staked", or "Controller".
     */
    payee: string;
}
/**
 * reset the payee.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export declare function setPayee(args: StakingSetPayeeArgs, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction;
