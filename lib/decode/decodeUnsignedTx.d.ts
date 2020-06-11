/**
 * @ignore
 */ /** */
import { OptionsWithMeta, TxInfo, UnsignedTransaction } from '../util';
export declare type DecodedUnsignedTx = TxInfo;
/**
 * Parse the transaction information from an unigned transaction offline.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export declare function decodeUnsignedTx(unsigned: UnsignedTransaction, options: OptionsWithMeta): DecodedUnsignedTx;
