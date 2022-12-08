import React, { useContext, useState } from 'react'

import { GlobalContext } from '../../providers/global'
import { ExchangeContext } from '../../providers/exchange'
import If from '../../templates/if'
import InputText from '../../templates/input'
import SwitchLang from '../../templates/langSwitch'
import useTranslation from '../../hooks/userTranslation'

import * as s from './styled'
import translation from './translation'
import { newAuthetication, authetication } from './async'

const LoginForm = () => {
  const [globalState, globalDispatch] = useContext(GlobalContext)
  const [, dispatch] = useContext(ExchangeContext)

  const [form, setForm] = useState({ email: '', password: '', feedback: '' })

  const book = useTranslation<typeof translation>(translation)

  function login() {
    if (!(form.email && form.password)) return setForm({ ...form, feedback: book?.feedbackEmptyField || '' })
    authetication(form).then((data) => {
      if (data) {
        dispatch({ type: 'SET_HISTORY', payload: data.history })
        globalDispatch({ type: 'SET_USER', payload: data })
      } else {
        setForm({ ...form, feedback: book?.feedbackUserNotFouded || '' })
      }
    })
  }

  function newUser() {
    if (!(form.email && form.password)) return setForm({ ...form, feedback: book?.feedbackEmptyField || '' })
    newAuthetication(form).then((data) => {
      data
        ? setForm({ ...form, feedback: book?.feedBackNewAccount.replace('$1', data) || '' })
        : setForm({ ...form, feedback: book?.feedBackUserExists || '' })
    })
  }

  return (
    <If
      test={!globalState.isLogged}
      render={
        <s.Container>
          <s.Title>{book?.title}</s.Title>

          <s.Form>
            <s.FloatRight>
              <SwitchLang />
            </s.FloatRight>

            <s.FormTitle>Login</s.FormTitle>

            <s.feedback>{form.feedback}</s.feedback>

            <s.Label>
              {book?.formUser}
              <InputText
                value={form.email}
                onChange={(email) => setForm({ ...form, email })}
                style={{ fontSize: '1.5rem', color: '#1B62CC', paddingTop: '0.5rem' }}
              />
            </s.Label>

            <s.Label>
              {book?.formPassword}
              <InputText
                value={form.password}
                onChange={(password) => setForm({ ...form, password })}
                type="password"
                style={{ fontSize: '1.5rem', color: '#1B62CC', paddingTop: '0.5rem' }}
              />
            </s.Label>

            <s.RowCentered>
              <s.LoginButton type="button" onClick={() => login()}>
                {book?.formButton}
              </s.LoginButton>
              <s.Link onClick={() => newUser()}>{book?.createAccount}</s.Link>
            </s.RowCentered>
          </s.Form>
        </s.Container>
      }
    />
  )
}

export default LoginForm
