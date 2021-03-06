import { Args, BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '../../util';
import { AccountVote } from './types';
export interface DemocracyVoteArgs extends Args {
    refIndex: number;
    /**
     * Vote.
     */
    vote: AccountVote;
}
/**
 * Vote in a referendum.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export declare function vote(args: DemocracyVoteArgs, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction;
