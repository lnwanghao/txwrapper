import { Args, BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '../../util';
export interface StakingBondArgs extends Args {
    /**
     * The SS-58 encoded address of the Controller account.
     */
    controller: string;
    /**
     * The number of tokens to bond.
     */
    value: number;
    /**
     * The rewards destination. Can be "Stash", "Staked", or "Controller".
     */
    payee: string;
}
/**
 * Construct a transaction to bond funds and create a Stash account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export declare function bond(args: StakingBondArgs, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction;
