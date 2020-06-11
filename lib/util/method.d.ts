/**
 * @ignore
 */ /** */
import { TypeRegistry } from '@polkadot/types';
import { Call } from '@polkadot/types/interfaces';
import { AnyJson } from '@polkadot/types/types';
import { BaseTxInfo, OptionsWithMeta, UnsignedTransaction } from './types';
export declare type Args = Record<string, AnyJson>;
/**
 * Format used in txwrapper to represent a method.
 */
export interface TxMethod {
    args: Args;
    name: string;
    pallet: string;
}
/**
 * Complete information about a tx
 */
export interface TxInfo extends BaseTxInfo {
    method: TxMethod;
}
/**
 * Helper function to construct an offline method. This function is used in all
 * method in the `methods/` folder.
 *
 * @param info - All info necessary to construct a method. That includes base
 * tx info, as well as method name & arguments.
 */
export declare function createMethod(info: TxInfo, options: OptionsWithMeta): UnsignedTransaction;
/**
 * From a PolkadotJs `Call` type, get a serializable object representing the
 * call.
 *
 * @param registry - The type registry
 * @param method - The method to serialize
 */
export declare function toTxMethod(registry: TypeRegistry, method: Call): TxMethod;
