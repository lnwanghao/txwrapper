import { BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '../../util';
/**
 * Unlock any vested funds of the sender account.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export declare function vest(args: {}, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction;
