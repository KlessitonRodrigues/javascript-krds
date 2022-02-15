import React from 'react'

type Props = {
  test: boolean
  render: React.ReactElement
  or?: React.ReactElement
}

const If = ({ test, render, or }: Props) => (test ? render : or || null)

export default If
