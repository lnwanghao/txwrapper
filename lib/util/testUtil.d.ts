/**
 * @ignore
 */ /** */
import metadataRpc from '@polkadot/metadata/Metadata/v11/static';
import { UnsignedTransaction } from './types';
export { metadataRpc };
/**
 * Base tx information common to all tested transactions
 */
export declare const TEST_BASE_TX_INFO: {
    address: string;
    blockHash: string;
    blockNumber: number;
    eraPeriod: number;
    genesisHash: string;
    metadataRpc: string;
    nonce: number;
    specVersion: number;
    tip: number;
    transactionVersion: number;
};
/**
 * Use this registry in tests.
 */
export declare const TEST_OPTIONS: {
    metadataRpc: string;
    registry: import("@polkadot/types").TypeRegistry;
};
/**
 * Test helper to test that all base tx information al correctly populated.
 *
 * @param unsigned - Unsigned transaction to test
 */
export declare function testBaseTxInfo(unsigned: UnsignedTransaction): void;
/**
 * Return all methods available in txwrapper as [pallet, methodName]. Used for
 * testing decodes on all methods.
 */
export declare function getAllMethods(): [string, string][];
/**
 * Dummy arguments for all methods we're testing.
 */
export declare const TEST_METHOD_ARGS: {
    balances: {
        transfer: {
            dest: string;
            value: number;
        };
        transferKeepAlive: {
            dest: string;
            value: number;
        };
    };
    democracy: {
        activateProxy: {
            proxy: string;
        };
        closeProxy: {};
        deactivateProxy: {
            proxy: string;
        };
        openProxy: {
            target: string;
        };
        proxyVote: {
            refIndex: number;
            vote: {
                Standard: {
                    balance: number;
                    vote: {
                        aye: boolean;
                        conviction: string;
                    };
                };
            };
        };
        vote: {
            refIndex: number;
            vote: {
                Standard: {
                    balance: number;
                    vote: {
                        aye: boolean;
                        conviction: string;
                    };
                };
            };
        };
    };
    session: {
        setKeys: {
            keys: string[];
            proof: string;
        };
    };
    staking: {
        bond: {
            controller: string;
            value: number;
            payee: string;
        };
        bondExtra: {
            maxAdditional: number;
        };
        chill: {};
        nominate: {
            targets: string[];
        };
        payoutNominator: {
            era: number;
            validators: [string, number][];
        };
        payoutValidator: {
            era: number;
        };
        setController: {
            controller: string;
        };
        setPayee: {
            payee: string;
        };
        unbond: {
            value: number;
        };
        validate: {
            prefs: {
                commission: number;
            };
        };
        withdrawUnbonded: {
            numSlashingSpans: number;
        };
    };
    system: {
        remark: {
            remark: string;
        };
    };
    vesting: {
        vest: {};
        vestOther: {
            target: string;
        };
    };
};
/**
 * Sign a payload with seed `//Alice`.
 */
export declare function signWithAlice(signingPayload: string): Promise<string>;
