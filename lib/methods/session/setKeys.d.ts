import { Args, BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '../../util';
export interface SessionSetKeysArgs extends Args {
    /**
     * The 5 keys to set.
     */
    keys: string[];
    /**
     * Proof (unused for now).
     */
    proof?: string;
}
/**
 * Sets the session key(s) of the function caller to `key`.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export declare function setKeys(args: SessionSetKeysArgs, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction;
