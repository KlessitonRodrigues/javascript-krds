import React, { useReducer } from 'react'
import axios from 'axios'

import { apiUrl } from '../..'
import Button from '../../templates/button'
import Editor from '../../components/editor'
import { initialState, reducer } from './store'
import { Container, Header, ResponsiveRow } from './styled'

type RestResponse = { success: boolean; msg?: string; data?: any }

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const requestBtn = (
    <Button
      key="0"
      text="request"
      onClick={async () => {
        try {
          const res = await axios.post<RestResponse>(
            `${apiUrl}/api/${state.reqType}`,
            JSON.parse(state.request)
          )
          res.data.success
            ? dispatch({ type: 'SET_RES_EDITOR', payload: JSON.stringify(res.data.data) })
            : dispatch({ type: 'SET_RES_EDITOR_ERROR', payload: res.data.msg })
        } catch (err) {
          dispatch({ type: 'SET_RES_EDITOR_ERROR', payload: 'no end point' })
        }
      }}
    />
  )

  const changeRouteBtn = (
    <Button
      key="1"
      text="change route"
      onClick={() => dispatch({ type: 'CHANGE_REQ_TYPE' })}
    />
  )

  const clearBtn = (
    <Button
      text="clear"
      key="3"
      onClick={() => dispatch({ type: 'CLEAR_RESPONSE' })}
    />
  )

  return (
    <Container>
      <Header>Super Opa Chanllenge</Header>

      <ResponsiveRow>
        <Editor
          value={state.request}
          onChange={(payload) => dispatch({ type: 'SET_REQ_EDITOR', payload })}
          title={'Request at ' + state.reqType}
          buttons={[changeRouteBtn, requestBtn]}
          btnText="request"
        />
        <Editor
          value={state.response}
          onChange={(payload) => dispatch({ type: 'SET_RES_EDITOR', payload })}
          title="Response"
          buttons={[clearBtn]}
          btnText="clear"
          readOnly
        />
      </ResponsiveRow>
    </Container>
  )
}

export default Home
