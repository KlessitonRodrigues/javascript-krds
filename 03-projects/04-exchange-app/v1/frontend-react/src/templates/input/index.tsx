import React from 'react'

import * as s from './styled'

type Props = {
  type?: 'number' | 'text' | 'email' | 'password'
  value?: string
  readonly?: boolean
  placeholder?: string
  style?: React.CSSProperties
  onChange?: (value: string) => void
}

const InputText = (props: Props) => (
  <s.Container {...props} onChange={(ev) => props.onChange && props.onChange(ev.target.value)} />
)

export default InputText
