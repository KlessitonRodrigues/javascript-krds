import React from 'react'

type Props = {
  test: boolean
  render: React.ReactElement
}

const If = ({ test, render }: Props) => (test ? render : null)

export default If
