import path from 'path';

export const CONTRACTS = 'contracts';
export const TESTS = 'tests';
export const WRAPPERS = 'wrappers';
export const SCRIPTS = 'scripts';
export const TEMP = 'temp';
export const BUILD = 'build';
export const DAPP = 'dapp';

export const WRAPPERS_DIR = path.join(process.cwd(), WRAPPERS);
export const SCRIPTS_DIR = path.join(process.cwd(), SCRIPTS);
export const BUILD_DIR = path.join(process.cwd(), BUILD);
export const DAPP_DIR = path.join(process.cwd(), DAPP);
export const TEMP_DIR = path.join(process.cwd(), TEMP);
export const CONTRACTS_DIR = path.join(process.cwd(), CONTRACTS);
export const TESTS_DIR = path.join(process.cwd(), TESTS);
