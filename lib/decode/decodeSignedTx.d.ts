/**
 * @ignore
 */ /** */
import { OptionsWithMeta, TxInfo } from '../util';
export declare type DecodedSignedTx = Omit<TxInfo, 'blockHash' | 'blockNumber' | 'genesisHash' | 'specVersion' | 'transactionVersion' | 'version'>;
/**
 * Parse the transaction information from a signed transaction offline.
 *
 * @param unsigned - The JSON representing the unsigned transaction.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export declare function decodeSignedTx(signedTx: string, options: OptionsWithMeta): DecodedSignedTx;
