import styled from 'styled-components'

export const Container = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${(p) => p.theme.colors.primary};
  padding: 0.25rem 0;
  color: ${(p) => p.theme.colors.fontColor};
  font-size: ${(p) => '1rem'};
  font-weight: 700;
  transition: 1s;
`
