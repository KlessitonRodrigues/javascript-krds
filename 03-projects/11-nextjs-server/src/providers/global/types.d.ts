import React from 'react'

declare namespace Store {
  type User = {
    email: string
    accessToken?: string
  }

  type Langs = 'en-us' | 'pt-br'

  type State = {
    user: User
    isLogged: boolean
    lang: Langs
  }

  type Action = { type: 'SET_USER'; payload: User } | { type: 'SET_LANG'; payload: Langs }

  type context = [State, React.Dispatch<Action>]
}
