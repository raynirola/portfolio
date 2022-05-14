import { FC, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

const Portal: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return createPortal(children, document.getElementById('portal') as Element)
}

export default Portal
