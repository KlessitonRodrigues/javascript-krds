import React from 'react'

import * as s from './styled'

type Props = {
  children: React.ReactNode
}

const Panel = ({ children }: Props) => <s.Container>{children}</s.Container>

export default Panel
