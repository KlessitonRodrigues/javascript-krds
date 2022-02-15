import React, { useState } from 'react'

import * as s from './styled'
import InputText from '../input'

import ExchangeIcon from '../../assets/svg/Exchange.svg'
import SearchIcon from '../../assets/svg/Search.svg'

type Props = {
  show?: boolean
  exception?: string
  options?: string[]
  closeBtn: () => void
  onSelect: (value: string, index: number) => void
}

function includes(target: string, filter: string, exception: string = '') {
  if (!filter) {
    if (target !== exception && (target === 'USD' || target === 'GBP')) return true
    return false
  }
  return target.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
}

const Search = ({ options = [], show = false, exception, closeBtn, onSelect }: Props) => {
  const [filter, setFilter] = useState('')

  const optionsMap = options.map(
    (option, i) =>
      includes(option, filter, exception) && (
        <s.Option
          key={i}
          onClick={() => {
            setFilter('')
            return onSelect(option, i)
          }}
        >
          <ExchangeIcon />
          &#160;
          {option}
        </s.Option>
      )
  )

  return (
    <s.Container show={show}>
      <s.Content className="scroll">
        <s.Row>
          <SearchIcon style={{ marginRight: '0.5rem' }} />
          <InputText
            value={filter}
            placeholder="Search..."
            style={{ fontSize: '2rem', color: '#fff' }}
            onChange={(str) => setFilter(str.toLocaleUpperCase())}
          />
          <s.closeBtn onClick={closeBtn}>&times;</s.closeBtn>
        </s.Row>

        <s.Options>{optionsMap}</s.Options>
      </s.Content>
    </s.Container>
  )
}

export default Search
