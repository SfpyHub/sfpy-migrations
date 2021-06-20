import { contract, deploy } from 'ethereum-mars'
import { SfpyRouter, SfpyFactory } from '../build/artifacts'
import { kovan, sfpy } from './tokens'

deploy({}, (deployer) => {
	let pools = kovan()
	const factory = contract('SfpyFactory', SfpyFactory, [deployer])
	const router = contract('SfpyRouter', SfpyRouter, [factory, pools.weth])
	
	pools = {...pools, "sfpy": sfpy()}

	for (const token in pools) {
		factory.createPool(pools[token])
	}
})

