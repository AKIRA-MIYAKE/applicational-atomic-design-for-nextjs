import { useMemo } from 'react'

export const useIsBrowser: () => boolean = () => {
  const isBrowser = useMemo(() => typeof window !== 'undefined', [])
  return isBrowser
}
