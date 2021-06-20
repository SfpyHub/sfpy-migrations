import { contract, deploy } from 'ethereum-mars'
import { Multicall, SfpyRouter, SfpyFactory } from '../build/artifacts'
import { ganache } from './tokens'

deploy({}, (deployer) => {
	const pools = ganache()
	const multicall = contract('Multicall', Multicall)
	const factory = contract('SfpyFactory', SfpyFactory, [deployer])
	const router = contract('SfpyRouter', SfpyRouter, [factory, pools.weth])

	for (const token in pools) {
		factory.createPool(pools[token])
	}
})

