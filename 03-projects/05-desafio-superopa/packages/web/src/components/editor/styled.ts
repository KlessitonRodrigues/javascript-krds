import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 1rem;
  position: relative;
`

export const Title = styled.h2`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: ${(p) => p.theme.colors.primary};
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  resize: none;
  font-family: monospace;
  font-weight: bold;
  background-color: ${(p) => p.theme.colors.surface};
  border: 1px solid ${(p) => p.theme.colors.primary};
  border-radius: 0.5rem;
`

export const FloatBottomRight = styled.span`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`
