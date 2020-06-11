"use strict";
/**
 * @ignore
 */ /** */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signWithAlice = exports.TEST_METHOD_ARGS = exports.getAllMethods = exports.testBaseTxInfo = exports.TEST_OPTIONS = exports.TEST_BASE_TX_INFO = exports.metadataRpc = void 0;
const api_1 = require("@polkadot/api");
const static_1 = __importDefault(require("@polkadot/metadata/Metadata/v11/static"));
exports.metadataRpc = static_1.default;
const Extrinsic_1 = require("@polkadot/types/extrinsic/v4/Extrinsic");
const util_crypto_1 = require("@polkadot/util-crypto");
const methods = __importStar(require("../methods"));
const metadata_1 = require("./metadata");
/**
 * Base tx information common to all tested transactions
 */
exports.TEST_BASE_TX_INFO = {
    address: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F',
    blockHash: '0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582',
    blockNumber: 4302222,
    eraPeriod: 2400,
    genesisHash: '0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636',
    metadataRpc: static_1.default,
    nonce: 2,
    specVersion: 1019,
    tip: 0,
    transactionVersion: 6,
};
/**
 * Use this registry in tests.
 */
exports.TEST_OPTIONS = {
    metadataRpc: static_1.default,
    registry: metadata_1.getRegistry('Kusama', 'kusama', 9999),
};
/**
 * Test helper to test that all base tx information al correctly populated.
 *
 * @param unsigned - Unsigned transaction to test
 */
function testBaseTxInfo(unsigned) {
    ['address', 'blockHash', 'genesisHash'].forEach((key) => expect(unsigned[key]).toBe(exports.TEST_BASE_TX_INFO[key]));
    expect(unsigned.blockNumber).toBe('0x0041a58e');
    expect(unsigned.era).toBe('0xeb58');
    expect(unsigned.nonce).toBe('0x00000002');
    expect(unsigned.specVersion).toBe('0x000003fb');
    expect(unsigned.tip).toBe('0x00000000000000000000000000000000');
    expect(unsigned.transactionVersion).toBe('0x00000006');
    expect(unsigned.version).toBe(4);
}
exports.testBaseTxInfo = testBaseTxInfo;
/**
 * Return all methods available in txwrapper as [pallet, methodName]. Used for
 * testing decodes on all methods.
 */
function getAllMethods() {
    return Object.keys(methods)
        .reduce((acc, pallet) => {
        return acc.concat(Object.keys(methods[pallet]).map((name) => [
            pallet,
            name,
        ]));
    }, [])
        .filter(([pallet, name]) => !(
    // Skipping until Vote has correct JSON serialization in polkadot-api.
    ((pallet === 'democracy' && name === 'proxyVote') ||
        (pallet === 'democracy' && name === 'vote'))))
        .filter(([_, name]) => name === 'transfer');
}
exports.getAllMethods = getAllMethods;
/**
 * Dummy arguments for all methods we're testing.
 */
exports.TEST_METHOD_ARGS = {
    balances: {
        transfer: {
            dest: 'Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s',
            value: 12,
        },
        transferKeepAlive: {
            dest: 'Fy2rsYCoowQBtuFXqLE65ehAY9T6KWcGiNCQAyPDCkfpm4s',
            value: 12,
        },
    },
    democracy: {
        activateProxy: {
            proxy: 'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP',
        },
        closeProxy: {},
        deactivateProxy: {
            proxy: 'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP',
        },
        openProxy: {
            target: 'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP',
        },
        proxyVote: {
            refIndex: 0,
            vote: {
                Standard: {
                    balance: 1234,
                    vote: { aye: true, conviction: 'Locked1x' },
                },
            },
        },
        vote: {
            refIndex: 0,
            vote: {
                Standard: {
                    balance: 1234,
                    vote: { aye: true, conviction: 'Locked1x' },
                },
            },
        },
    },
    session: {
        setKeys: {
            keys: [
                'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F',
                'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP',
                'Fr4NzY1udSFFLzb2R3qxVQkwz9cZraWkyfH4h3mVVk7BK7P',
                'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F',
                'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP',
            ],
            proof: '0x',
        },
    },
    staking: {
        bond: {
            controller: 'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP',
            value: 100,
            payee: 'Staked',
        },
        bondExtra: {
            maxAdditional: 100,
        },
        chill: {},
        nominate: {
            targets: [
                'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP',
                'Fr4NzY1udSFFLzb2R3qxVQkwz9cZraWkyfH4h3mVVk7BK7P',
            ],
        },
        payoutNominator: {
            era: 100,
            validators: [['FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP', 2]],
        },
        payoutValidator: {
            era: 100,
        },
        setController: {
            controller: 'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP',
        },
        setPayee: {
            payee: 'Staked',
        },
        unbond: { value: 100 },
        validate: {
            prefs: { commission: 5 },
        },
        withdrawUnbonded: { numSlashingSpans: 11 },
    },
    system: {
        remark: {
            remark: '0x42194253',
        },
    },
    vesting: {
        vest: {},
        vestOther: {
            target: 'Fr4NzY1udSFFLzb2R3qxVQkwz9cZraWkyfH4h3mVVk7BK7P',
        },
    },
};
/**
 * Sign a payload with seed `//Alice`.
 */
function signWithAlice(signingPayload) {
    return __awaiter(this, void 0, void 0, function* () {
        // We're creating an Alice account that will sign the payload
        // Wait for the promise to resolve async WASM
        yield util_crypto_1.cryptoWaitReady();
        const registry = metadata_1.getRegistry('Kusama', 'kusama', 9999);
        // Use ed25519 because it has deterministic signatures
        const keyring = new api_1.Keyring({ type: 'ed25519' });
        const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });
        const { signature } = registry
            .createType('ExtrinsicPayload', signingPayload, {
            version: Extrinsic_1.TRANSACTION_VERSION,
        })
            .sign(alice);
        return signature;
    });
}
exports.signWithAlice = signWithAlice;
