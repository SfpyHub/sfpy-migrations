import { contract, deploy } from 'ethereum-mars'
import { SfpyRouter, SfpyFactory } from '../build/artifacts'
import { mainnet } from './tokens'

deploy({}, (deployer) => {
	let pools = mainnet()
	const factory = contract('SfpyFactory', SfpyFactory, [deployer])
	const router = contract('SfpyRouter', SfpyRouter, [factory, pools.weth])

	for (const token in pools) {
		factory.createPool(pools[token])
	}	
})

