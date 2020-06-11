import { Args, BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '../../util';
import { AccountVote } from './types';
export interface DemocracyProxyVoteArgs extends Args {
    refIndex: number;
    /**
     * Vote.
     */
    vote: AccountVote;
}
/**
 * Vote in a referendum on behalf of a stash.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export declare function proxyVote(args: DemocracyProxyVoteArgs, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction;
