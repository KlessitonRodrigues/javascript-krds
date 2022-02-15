import React from 'react'

import * as s from './styled'

type Props = {
  title: string
}

const PanelTitle = ({ title }: Props) => <s.Container>{title}</s.Container>

export default PanelTitle
