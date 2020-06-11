import Decorated from '@polkadot/metadata/Decorated';
import { Metadata, TypeRegistry } from '@polkadot/types';
import memoizee from 'memoizee';
/**
 * JSON object of ChainProperties codec from `@polkadot/api`.
 */
export interface ChainProperties {
    ss58Format: number;
    tokenDecimals: number;
    tokenSymbol: string;
}
/**
 * From a metadata hex string (for example returned by RPC), create a Metadata
 * class instance. Metadata decoding is expensive, so this function is
 * memoized.
 *
 * @ignore
 * @param registry - The registry of the metadata.
 * @param metadata - The metadata as hex string.
 */
declare function createMetadataUnmemoized(registry: TypeRegistry, metadataRpc: string): Metadata;
/**
 * @ignore
 */
export declare const createMetadata: typeof createMetadataUnmemoized & memoizee.Memoized<typeof createMetadataUnmemoized>;
/**
 * From a metadata hex string (for example returned by RPC), create a Decorated
 * object.
 *
 * @ignore
 * @param registry - The registry of the metadata.
 * @param metadata - The metadata as hex string.
 */
export declare function createDecorated(registry: TypeRegistry, metadataRpc: string): Decorated;
/**
 * Given a chain name, a spec name, and a spec version, return the
 * corresponding type registry. This function only returns the correct type
 * registry for the following chains:
 * - Kusama,
 * - Polkadot (incl. when running a dev node),
 * - Westend.
 * For other chains, please use `@polkadot/api`s `TypeRegistry` directly:
 * `const registry = new TypeRegistry()`. If needed, you should also register
 * your chain's custom types using `registry.register()`.
 *
 * @see https://github.com/polkadot-js/api/tree/master/packages/types-known
 * @param chainName - The chain to create the type registry for. Returned by
 * RPC `system_chain`.
 * @param specName - The name of the runtime spec. Returned by RPC
 * `state_getRuntimeVersion`.
 * @param specVersion - The spec version of that chain for which we want to
 * create a type registry. Returned by RPC `state_getRuntimeVersion`.
 * @param metadataRpc - If you pass the optional `metadataRpc` argument, then
 * this function will run `registry.setMetadata()`. **Important!** If you don't
 * pass this argument, make sure to call `registry.setMetadata()` yourself!
 */
export declare function getRegistry(chainName: 'Kusama' | 'Polkadot' | 'Polkadot CC1' | 'Westend', specName: 'kusama' | 'polkadot' | 'westend', specVersion: number, metadataRpc?: string): TypeRegistry;
export {};
