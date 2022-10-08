import styled from 'styled-components'

export const Container = styled.button<{ active: boolean; disabled: boolean }>`
  border: 2px solid ${(p) => (p.active ? p.theme.colors.primary : '#0000')};
  border-radius: 6px;
  box-shadow: 0 1px 4px #0005;
  background-color: ${(p) => p.theme.colors.buttonColor};
  color: ${(p) => p.theme.colors.primaryVariant};
  margin-left: 0.5rem;
  padding: 0 0.25rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s background-color;

  filter: ${(p) => (p.disabled ? 'grayscale(1)' : '')};
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonColor + '44'};
  }
`

export const Text = styled.span`
  font-weight: 500;
  padding: 0 0.2rem;
`

export const IconContainer = styled.div`
  max-width: 100%;
`
