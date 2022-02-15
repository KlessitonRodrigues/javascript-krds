import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

import { GlobalContext } from '../../providers/global'
import If from '../if'
import BrazilIcon from '../../assets/svg/Brazil.svg'
import BritainIcon from '../../assets/svg/Britain.svg'

import * as s from './styled'

const SwitchLang = () => {
  const [state, dispatch] = useContext(GlobalContext)
  const router =  useRouter()

  useEffect(() => {
    const localeLang = router?.locale?.toLocaleLowerCase() || ''
    if (localeLang === 'pt-br') {
      dispatch({ type: 'SET_LANG', payload: localeLang })
    }
  }, [])

  function changeLang() {
    let lang = state.lang
    state.lang === 'en-us' ? (lang = 'pt-br') : (lang = 'en-us')
    dispatch({ type: 'SET_LANG', payload: lang })
  }

  return (
    <s.Container onClick={() => changeLang()}>
      <If
        test={state.lang === 'pt-br'}
        render={
          <>
            <BrazilIcon />
            PT-BR
          </>
        }
        or={
          <>
            <BritainIcon />
            EN
          </>
        }
      />
    </s.Container>
  )
}

export default SwitchLang
