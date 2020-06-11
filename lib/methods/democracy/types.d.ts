import { AllConvictions } from '@polkadot/types/interfaces/democracy/definitions';
import { ArrayElementType } from '@polkadot/types/types';
/**
 * A vote in a referendum
 */
declare type Vote = {
    aye: boolean;
    conviction: ArrayElementType<typeof AllConvictions>;
};
/**
 * A vote in a referendum. Can be one of:
 * - Standard: A standard vote, one-way (approve or reject) with a given amount
 * of conviction.
 * - Split: A split vote with balances given for both ways, and with no
 * conviction, useful for parachains when voting.
 */
export declare type AccountVote = {
    Standard: {
        balance: number;
        vote: Vote;
    };
} | {
    Split: {
        aye: number;
        nay: number;
    };
};
export {};
