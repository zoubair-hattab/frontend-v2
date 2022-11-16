import { Network } from '@balancer-labs/sdk';

import { isMainnet, networkId } from '@/composables/useNetwork';

export const MIN_FIAT_VALUE_POOL_MIGRATION = isMainnet.value ? 100_000 : 1; // 100K USD or $1 for other networks

// Do not display APR values greater than this amount; they are likely to be nonsensical
// These can arise from pools with extremely low balances (e.g., completed LBPs)
export const APR_THRESHOLD = 10_000;

/**
 * For proportional exits from ComposableStable pools the ExactBPTInForTokensOut
 * exit type was removed. Therefore we have to use BPTInForExactTokensOut which
 * makes proportional exits using a user's total BPT balance impossible. In
 * order to 'fix' this we need to subtract a little bit from the bptIn value
 * when calculating the ExactTokensOut. The variable below is that "little bit".
 */
export const SHALLOW_COMPOSABLE_STABLE_BUFFER = 1e9; // EVM scale, so this is 1 Gwei

export type FactoryType =
  | 'oracleWeightedPool'
  | 'weightedPool'
  | 'stablePool'
  | 'managedPool'
  | 'liquidityBootstrappingPool'
  | 'boostedPool'
  | 'composableStablePool';

type PoolMetadata = {
  name: string;
  hasIcon: boolean;
};

export type NamedPools = {
  staBAL: string;
  bbAaveUSD: {
    v1: string;
    v2: string;
  };
  xMatic: {
    v1: string;
    v2: string;
  };
  stMatic: {
    v1: string;
    v2: string;
  };
  mai4: {
    mai4: string;
    maiBbaUsd: string;
  };
  veBAL: string;
};

export type Pools = {
  IdsMap: Partial<NamedPools>;
  Pagination: {
    PerPage: number;
    PerPool: number;
    PerPoolInitial: number;
  };
  DelegateOwner: string;
  ZeroAddress: string;
  DynamicFees: {
    Gauntlet: string[];
  };
  BlockList: string[];
  ExcludedPoolTypes: string[];
  Stable: {
    AllowList: string[];
  };
  Investment: {
    AllowList: string[];
  };
  Factories: Record<string, FactoryType>;
  Stakable: {
    AllowList: string[];
  };
  Metadata: Record<string, PoolMetadata>;
};

const POOLS_GOERLI: Pools = {
  IdsMap: {
    staBAL:
      '0xdcdd4a3d36dec8d57594e89763d069a7e9b223e2000000000000000000000062',
    bbAaveUSD: {
      v1: '0x13acd41c585d7ebb4a9460f7c8f50be60dc080cd00000000000000000000005f',
      v2: '0x3d5981bdd8d3e49eb7bbdc1d2b156a3ee019c18e0000000000000000000001a7',
    },
    veBAL: '0xf8a0623ab66f985effc1c69d05f1af4badb01b00000200000000000000000060',
  },
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  DelegateOwner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  ZeroAddress: '0x0000000000000000000000000000000000000000',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [
    '0x22d398c68030ef6b1c55321cca6e0cecc5c93b2f000200000000000000000678',
  ],
  ExcludedPoolTypes: ['Element', 'AaveLinear', 'Linear', 'ERC4626Linear', 'FX'],
  Stable: {
    AllowList: [
   
    ],
  },
  Investment: {
    AllowList: [],
  },
  Factories: {
   
  },
  Stakable: {
    AllowList: [

    ],
  },
  Metadata: {
    '0x13acd41c585d7ebb4a9460f7c8f50be60dc080cd00000000000000000000005f': {
      name: 'Balancer Boosted Aave USD',
      hasIcon: false,
    },
  },
};

const POOLS_MAINNET: Pools = {
  IdsMap: {
    staBAL:
      '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063',
    bbAaveUSD: {
      v1: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe',
      v2: '0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d',
    },
    veBAL: '0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014',
  },
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  DelegateOwner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  ZeroAddress: '0x0000000000000000000000000000000000000000',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [''],
  ExcludedPoolTypes: [
    'Element',
    'AaveLinear',
    'Linear',
    'ERC4626Linear',
    'Gyro2',
    'Gyro3',
    'FX',
  ],
  Stable: {
    AllowList: [
   
    ],
  },
  Investment: {
    AllowList: [
     
    ],
  },
  Factories: {
 
  },
  Stakable: {
    AllowList: [
      
    ],
  },
  Metadata: {
    '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe': {
      name: 'Balancer Boosted Aave USD',
      hasIcon: true,
    },
    '0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d': {
      name: 'Balancer Boosted Aave USD',
      hasIcon: true,
    },
    '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063': {
      name: 'Balancer Stable USD',
      hasIcon: true,
    },
    '0x3dd0843a028c86e0b760b1a76929d1c5ef93a2dd000200000000000000000249': {
      name: 'AuraBAL Stable Pool',
      hasIcon: false,
    },
  },
};

const POOLS_POLYGON: Pools = {
  IdsMap: {
    xMatic: {
      v1: '0xc17636e36398602dd37bb5d1b3a9008c7629005f0002000000000000000004c4',
      v2: '0xb20fc01d21a50d2c734c4a1262b4404d41fa7bf000000000000000000000075c',
    },
    stMatic: {
      v1: '0xaf5e0b5425de1f5a630a8cb5aa9d97b8141c908d000200000000000000000366',
      v2: '0x8159462d255c1d24915cb51ec361f700174cd99400000000000000000000075d',
    },
    mai4: {
      mai4: '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000012',
      maiBbaUsd:
        '0xb54b2125b711cd183edd3dd09433439d5396165200000000000000000000075e',
    },
  },
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  DelegateOwner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  ZeroAddress: '0x0000000000000000000000000000000000000000',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [''],
  ExcludedPoolTypes: [
    'Element',
    'AaveLinear',
    'Linear',
    'ERC4626Linear',
    'Gyro2',
    'Gyro3',
    'FX',
  ],
  Stable: {
    AllowList: [
  
    ],
  },
  Investment: {
    AllowList: [''],
  },
  Factories: {
 
  },
  Stakable: {
    AllowList: [
   
    ],
  },
  Metadata: {},
};

const POOLS_ARBITRUM: Pools = {
  IdsMap: {},
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  DelegateOwner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  ZeroAddress: '0x0000000000000000000000000000000000000000',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [''],
  ExcludedPoolTypes: ['Element', 'AaveLinear', 'Linear', 'ERC4626Linear', 'FX'],
  Stable: {
    AllowList: [

    ],
  },
  Investment: {
    AllowList: [''],
  },
  Factories: {
 
  },
  Stakable: {
    AllowList: [
    
    ],
  },
  Metadata: {},
};

const POOLS_GENERIC: Pools = {
  IdsMap: {},
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  DelegateOwner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  ZeroAddress: '0x0000000000000000000000000000000000000000',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [''],
  ExcludedPoolTypes: ['Element', 'AaveLinear', 'Linear', 'ERC4626Linear', 'FX'],
  Stable: {
    AllowList: [
   
    ],
  },
  Investment: {
    AllowList: [
  
    ],
  },
  Factories: {
    
  },
  Stakable: {
    AllowList: [],
  },
  Metadata: {
    '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb20000000000000000000000fe': {
      name: 'Balancer Boosted Aave USD',
      hasIcon: true,
    },
    '0x8fd162f338b770f7e879030830cde9173367f3010000000000000000000004d8': {
      name: 'Balancer Boosted Aave USD',
      hasIcon: true,
    },
    '0xd387dfd3a786e7caa06e6cf0c675352c7ffff30400000000000000000000063e': {
      name: 'Balancer Stable USD',
      hasIcon: true,
    },
  },
};

const POOLS_MAP = {
  [Network.GOERLI]: POOLS_GOERLI,
  [Network.MAINNET]: POOLS_MAINNET,
  [Network.POLYGON]: POOLS_POLYGON,
  [Network.ARBITRUM]: POOLS_ARBITRUM,
};

export const POOLS: Pools = POOLS_MAP[networkId.value]
  ? POOLS_MAP[networkId.value]
  : POOLS_GENERIC;
