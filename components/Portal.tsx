import { FC } from 'react'
import { createPortal } from 'react-dom'

const Portal: FC = ({ children }) => {
  return createPortal(children, document.getElementById('portal') as Element)
}

export default Portal
