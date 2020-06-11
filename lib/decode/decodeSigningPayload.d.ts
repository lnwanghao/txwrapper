/**
 * @ignore
 */ /** */
import { OptionsWithMeta, TxInfo } from '../util';
export declare type DecodedSigningPayload = Omit<TxInfo, 'address' | 'blockNumber'>;
/**
 * Parse the transaction information from a signing payload.
 *
 * @param signingPayload - The signing payload, in hex.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export declare function decodeSigningPayload(signingPayload: string, options: OptionsWithMeta): DecodedSigningPayload;
