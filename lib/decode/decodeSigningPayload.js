"use strict";
/**
 * @ignore
 */ /** */
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeSigningPayload = void 0;
const util_1 = require("../util");
/**
 * Parse the transaction information from a signing payload.
 *
 * @param signingPayload - The signing payload, in hex.
 * @param options - Runtime-specific data used for decoding the transaction.
 */
function decodeSigningPayload(signingPayload, options) {
    const { metadataRpc, registry } = options;
    registry.setMetadata(util_1.createMetadata(registry, metadataRpc));
    const payload = registry.createType('ExtrinsicPayload', signingPayload, {
        version: util_1.EXTRINSIC_VERSION,
    });
    const methodCall = registry.createType('Call', payload.method);
    const method = util_1.toTxMethod(registry, methodCall);
    return {
        blockHash: payload.blockHash.toHex(),
        eraPeriod: payload.era.asMortalEra.period.toNumber(),
        genesisHash: payload.genesisHash.toHex(),
        metadataRpc,
        method,
        nonce: payload.nonce.toNumber(),
        specVersion: payload.specVersion.toNumber(),
        tip: payload.tip.toNumber(),
        transactionVersion: payload.transactionVersion.toNumber(),
    };
}
exports.decodeSigningPayload = decodeSigningPayload;
