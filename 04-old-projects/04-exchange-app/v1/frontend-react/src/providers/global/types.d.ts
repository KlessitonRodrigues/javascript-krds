import React from 'react'

declare namespace Store {
  type User = {
    email: string
    accessToken?: string
  }

  type State = {
    user: User
    isLogged: boolean
  }

  type Action = { type: 'SET_USER'; payload: User }

  type context = [State, React.Dispatch<Action>]
}
