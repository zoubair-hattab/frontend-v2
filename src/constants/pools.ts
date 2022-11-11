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
      '',
    bbAaveUSD: {
      v1: '',
      v2: '',
    },
    veBAL: '',
  },
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  DelegateOwner: '',
  ZeroAddress: '',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [
    '',
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

  },
};

const POOLS_MAINNET: Pools = {
 {
  IdsMap: {
    staBAL:
      '',
    bbAaveUSD: {
      v1: '',
      v2: '',
    },
    veBAL: '',
  },
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  DelegateOwner: '',
  ZeroAddress: '',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [
    '',
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

  },
};

const POOLS_POLYGON: Pools = {
  {
  IdsMap: {
    staBAL:
      '',
    bbAaveUSD: {
      v1: '',
      v2: '',
    },
    veBAL: '',
  },
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  DelegateOwner: '',
  ZeroAddress: '',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [
    '',
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

  },
};
const POOLS_ARBITRUM: Pools = {
  {
  IdsMap: {
    staBAL:
      '',
    bbAaveUSD: {
      v1: '',
      v2: '',
    },
    veBAL: '',
  },
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  DelegateOwner: '',
  ZeroAddress: '',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [
    '',
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

  },
};
const POOLS_GENERIC: Pools = {
{
  IdsMap: {
    staBAL:
      '',
    bbAaveUSD: {
      v1: '',
      v2: '',
    },
    veBAL: '',
  },
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  DelegateOwner: '',
  ZeroAddress: '',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [
    '',
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

  },
};
const POOLS_MAP = {
  [Network.GOERLI]: POOLS_GOERLI,
  [Network.MAINNET]: POOLS_MAINNET,
  [Network.POLYGON]: POOLS_POLYGON,
  [Network.ARBITRUM]: POOLS_ARBITRUM,
};

export const POOLS: Pools = POOLS_MAP[networkId.value]&&POOLS_MAP[networkId.value]
