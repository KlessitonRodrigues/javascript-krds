import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${(p) => p.theme.colors.background};
`

export const Header = styled.h1`
  font-size: 2rem;
  text-align: center;
  padding-top: 2rem;
  color: ${(p) => p.theme.colors.primary};
  @media (min-width: 768px) {
    text-align: left;
    padding: 2rem;
  }
`

export const ResponsiveRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    max-width: 80%;
    margin: auto;
  }
`
