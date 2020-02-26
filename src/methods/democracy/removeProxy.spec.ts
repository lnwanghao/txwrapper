import {
  TEST_BASE_TX_INFO,
  TEST_METHOD_ARGS,
  testBaseTxInfo
} from '../../util';
import { removeProxy } from './removeProxy';

describe('democracy::removeProxy', () => {
  it('should work', () => {
    const unsigned = removeProxy(
      TEST_METHOD_ARGS.democracy.removeProxy,
      TEST_BASE_TX_INFO
    );

    testBaseTxInfo(unsigned);
    expect(unsigned.method).toBe(
      '0x090e8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48'
    );
  });
});