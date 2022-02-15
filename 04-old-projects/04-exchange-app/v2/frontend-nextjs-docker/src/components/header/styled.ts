import styled from 'styled-components'

export const Container = styled.div`
  color: ${(p) => p.theme.colors.fontColor};
  text-align: center;
  margin: 1rem 0 0;

  @media (min-width: ${(p) => p.theme.screens.lg}) {
    margin: 2rem 0 0.5rem;
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;

  @media (min-width: ${(p) => p.theme.screens.lg}) {
    font-size: 2.5rem;
  }
`

export const User = styled.div`
  display: inline-flex;
  align-items: center;
  text-align: right;
  font-size: 1rem;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
`

export const ResponsiveRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${(p) => p.theme.screens.lg}) {
    justify-content: space-between;
    flex-direction: row;
  }
`
