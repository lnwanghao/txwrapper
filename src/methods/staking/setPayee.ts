import {
  Args,
  BaseTxInfo,
  createMethod,
  OptionsWithMeta,
  UnsignedTransaction,
} from '../../util';

export interface StakingSetPayeeArgs extends Args {
  /**
   * The rewards destination. Can be "Stash", "Staked", or "Controller".
   */
  payee: string;
}

/**
 * reset the payee.
 *
 * @param args - Arguments specific to this method.
 * @param info - Information required to construct the transaction.
 * @param options - Registry and metadata used for constructing the method.
 */
export function setPayee(
  args: StakingSetPayeeArgs,
  info: BaseTxInfo,
  options: OptionsWithMeta
): UnsignedTransaction {
  return createMethod(
    {
      method: {
        args,
        name: 'setPayee',
        pallet: 'staking',
      },
      ...info,
    },
    options
  );
}
