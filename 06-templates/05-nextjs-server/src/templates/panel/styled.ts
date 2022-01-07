import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(p) => p.theme.colors.surface};
  border-radius: 8px;
  box-shadow: 0 1px 4px #0005;
  padding: 0.5rem 1rem;
  border: 1px solid ${(p) => p.theme.colors.border};
`
