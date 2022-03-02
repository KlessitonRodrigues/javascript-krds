import React from 'react'

import { Container, TextArea, Title, FloatBottomRight } from './styled'

type Props = {
  title: string
  btnText: string
  readOnly?: boolean
  buttons: React.ReactNode
  value: string
  onChange: (value: string) => void
}

const Editor = ({
  title,
  readOnly,
  buttons,
  value = '...',
  onChange
}: Props) => (
  <Container>
    <Title>{title}</Title>
    <TextArea
      readOnly={readOnly}
      rows={18}
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
    />
    <FloatBottomRight>{buttons}</FloatBottomRight>
  </Container>
)

export default Editor
