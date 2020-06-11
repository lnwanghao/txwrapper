import { BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from '../../util';
/**
 * Declare the desire to cease validating or nominating. Does not unbond funds.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export declare function chill(args: {}, info: BaseTxInfo, options: OptionsWithMeta): UnsignedTransaction;
