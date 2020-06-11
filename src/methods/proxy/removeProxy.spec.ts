import {
	C1_TEST_BASE_TX_INFO,
  CC1_TEST_OPTIONS,
  TEST_METHOD_ARGS,
  testBaseTxInfo,
} from '../../util';
import { addProxy } from './addProxy';

describe('proxy::removeProxy', () => {
  it('should work', () => {
    const unsigned = addProxy(
      TEST_METHOD_ARGS.proxy.removeProxy,
      CC1_TEST_BASE_TX_INFO,
      CC1_TEST_OPTIONS
    );

    // testBaseTxInfo(unsigned);
  });
});