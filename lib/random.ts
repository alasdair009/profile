/**
 * linear congruential generator
 */
const LCG_M = 4294967296;
const LCG_A = 22695477;
const LCG_C = 1;

type LCG = {
  m: number;
  a: number;
  c: number;
  seed: number;
};

/**
 * Make a new LCG using the given seed.
 * @param seed - nuber between 1 and {@link LCG_M}
 */
export function makeLCG(seed = 1): LCG {
  return {
    m: LCG_M,
    a: LCG_A,
    c: LCG_C,
    seed,
  };
}

/**
 * Used for default random int requests.
 */
const defaultLCG = makeLCG();

/**
 * Get the next number from the LCG.
 * @param lcg
 */
export function lcgNextRand(lcg = defaultLCG): number {
  lcg.seed = (lcg.a * lcg.seed + lcg.c) % lcg.m;
  return lcg.seed / lcg.m;
}
