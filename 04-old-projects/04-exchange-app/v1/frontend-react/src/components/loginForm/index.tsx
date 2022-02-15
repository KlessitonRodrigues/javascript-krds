import React, { useContext, useState } from 'react'

import If from '../../templates/if'
import InputText from '../../templates/input'

import * as s from './styled'
import { newAuthetication, authetication } from './async'
import { GlobalContext } from '../../providers/global'
import { ExchangeContext } from '../../providers/exchange'

const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [feedback, setFeedback] = useState('')
  const [globalState, globalDispatch] = useContext(GlobalContext)
  const [, dispatch] = useContext(ExchangeContext)

  function login() {
    if (!(form.email && form.password)) return setFeedback('Please, inform the email and password!')
    authetication(form).then((data) => {
      if (data) {
        dispatch({ type: 'SET_HISTORY', payload: data.history })
        globalDispatch({ type: 'SET_USER', payload: data })
      } else {
        setFeedback('User not founded!')
      }
    })
  }

  function newUser() {
    if (!(form.email && form.password)) return setFeedback('Please, inform an email and password!')
    newAuthetication(form).then((data) => {
      console.log(data)
      data ? setFeedback(`Your acount ${data} has been created!`) : setFeedback('This user already exists')
    })
  }

  return (
    <If
      test={!globalState.isLogged}
      render={
        <s.Container>
          <s.Title>Currency Exchanger</s.Title>
          <s.Form>
            <s.FormTitle>Login</s.FormTitle>
            <s.feedback>{feedback}</s.feedback>
            <s.Label>
              Email
              <InputText
                value={form.email}
                onChange={(email) => setForm({ ...form, email })}
                style={{ fontSize: '1.5rem', color: '#1B62CC' }}
              />
            </s.Label>
            <s.Label>
              Password
              <InputText
                value={form.password}
                onChange={(password) => setForm({ ...form, password })}
                type="password"
                style={{ fontSize: '1.5rem', color: '#1B62CC' }}
              />
            </s.Label>
            <s.RowCentered>
              <s.LoginButton type="button" onClick={() => login()}>
                Login
              </s.LoginButton>
              <s.Link onClick={() => newUser()}>Create a new account?</s.Link>
            </s.RowCentered>
          </s.Form>
        </s.Container>
      }
    />
  )
}

export default LoginForm
