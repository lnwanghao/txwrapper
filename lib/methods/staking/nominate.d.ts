import { Args, BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '../../util';
export interface StakingNominateArgs extends Args {
    /**
     * The SS-58 encoded addresses of the targets you wish to nominate. A maximum of 16
     * nominations are allowed.
     *
     * Warning: This provides no checks as to whether these targets are actual validators.
     */
    targets: Array<string>;
}
/**
 * Construct a transaction to nominate. This must be called by the _Controller_ account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export declare function nominate(args: StakingNominateArgs, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction;