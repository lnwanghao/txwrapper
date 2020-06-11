import { BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '../../util';
/**
 * Clear the proxy. Called by the proxy.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export declare function closeProxy(args: {}, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction;
