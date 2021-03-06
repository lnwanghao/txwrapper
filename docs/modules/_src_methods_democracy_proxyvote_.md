[@substrate/txwrapper](../README.md) › [Globals](../globals.md) › ["src/methods/democracy/proxyVote"](_src_methods_democracy_proxyvote_.md)

# Module: "src/methods/democracy/proxyVote"

## Index

### Interfaces

* [DemocracyProxyVoteArgs](../interfaces/_src_methods_democracy_proxyvote_.democracyproxyvoteargs.md)

### Functions

* [proxyVote](_src_methods_democracy_proxyvote_.md#proxyvote)

## Functions

###  proxyVote

▸ **proxyVote**(`args`: [DemocracyProxyVoteArgs](../interfaces/_src_methods_democracy_proxyvote_.democracyproxyvoteargs.md), `info`: [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md), `options`: [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md)): *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*

*Defined in [src/methods/democracy/proxyVote.ts:28](https://github.com/paritytech/txwrapper/blob/2c5feb3/src/methods/democracy/proxyVote.ts#L28)*

Vote in a referendum on behalf of a stash.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`args` | [DemocracyProxyVoteArgs](../interfaces/_src_methods_democracy_proxyvote_.democracyproxyvoteargs.md) | Arguments specific to this method. |
`info` | [BaseTxInfo](../interfaces/_src_util_types_.basetxinfo.md) | Information required to construct the transaction. |
`options` | [OptionsWithMeta](../interfaces/_src_util_types_.optionswithmeta.md) | Registry and metadata used for constructing the method.  |

**Returns:** *[UnsignedTransaction](../interfaces/_src_util_types_.unsignedtransaction.md)*
