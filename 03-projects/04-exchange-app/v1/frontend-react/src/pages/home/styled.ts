import styled from 'styled-components'

export const Container = styled.div`
  margin: auto 1rem;
  @media (min-width: ${(p) => p.theme.screens.lg}) {
    margin: auto;
    max-width: 80rem;
  }
`

export const flex = styled.div`
  display: grid;
  row-gap: 0.5rem;
  @media (min-width: ${(p) => p.theme.screens.lg}) {
    grid-template-columns: 2fr 1fr;
    column-gap: 0.5rem;
  }
`
