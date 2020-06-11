import { OptionsWithMeta, UnsignedTransaction } from '../util';
import { DecodedSignedTx } from './decodeSignedTx';
import { DecodedSigningPayload } from './decodeSigningPayload';
import { DecodedUnsignedTx } from './decodeUnsignedTx';
/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @param unsignedTx - The data to parse, as an unsigned tx.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export declare function decode(unsignedTx: UnsignedTransaction, options: OptionsWithMeta): DecodedUnsignedTx;
/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @param signedTx - The data to parse, as a signed tx hex string.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export declare function decode(signedTx: string, options: OptionsWithMeta): DecodedSignedTx;
/**
 * Parse the transaction information from a signing payload, an unsigned tx, or a signed tx.
 *
 * @param signingPayload - The data to parse, as a signing payload hex string.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
export declare function decode(signingPayload: string, options: OptionsWithMeta): DecodedSigningPayload;
