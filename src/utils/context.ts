import React, { Dispatch, SetStateAction } from 'react';

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
export function createCtx<A extends Record<string, unknown> | null>() {
  const ctx = React.createContext<A | undefined>(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (c === undefined)
      throw new Error(`useCtx must be inside a Provider with a value`);
    return c;
  }
  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}

export type Update<Type> = {
  [Property in keyof Type as `update${Capitalize<
    string & Property
  >}`]: Dispatch<SetStateAction<Type[Property]>>;
};
