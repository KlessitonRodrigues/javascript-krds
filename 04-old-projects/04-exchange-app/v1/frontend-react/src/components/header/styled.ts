import styled from 'styled-components'

export const Container = styled.div`
  color: ${(p) => p.theme.colors.fontColor};
  font-size: 2.5rem;
  margin: 2rem 0 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${(p) => p.theme.screens.lg}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  font-size: 1rem;

  @media (min-width: ${(p) => p.theme.screens.lg}) {
    font-size: 1.2rem;
  }
`
