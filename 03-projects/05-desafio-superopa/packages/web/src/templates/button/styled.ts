import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.onPrimary};
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px #4446;
  padding: 0.5rem;
  margin-left: 0.5rem;
  font-family: monospace;
  font-weight: bold;
  font-size: 0.8rem;
  cursor: pointer;
  text-transform: capitalize;
  &:active {
    transition: 0.1s background-color;
    background-color: #333;
  }
`
