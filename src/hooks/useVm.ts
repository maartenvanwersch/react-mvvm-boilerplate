import { useRef } from 'react'
import { VmRef } from '../types'

/**
 * Create ref to the functional component (It will not re-run on each render)
 * @param VmConstructor
 * @param args context | obj | array
 * @return VmConstructor
 */

export function useVm<ViewModel, A>(VmConstructor: { new(args: A): ViewModel }, args: A): ViewModel {
  let vmRef: VmRef<ViewModel> = useRef(null);
  if (!vmRef.current) {
    vmRef.current = new VmConstructor(args)
  }
  return vmRef.current
}