import { Args, BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '../../util';
export interface DemocracyActivateProxyArgs extends Args {
    /**
     * Address to set as proxy, SS-58 encoded.
     */
    proxy: string;
}
/**
 * Specify a proxy that is already open to us. Called by the stash.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export declare function activateProxy(args: DemocracyActivateProxyArgs, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction;
