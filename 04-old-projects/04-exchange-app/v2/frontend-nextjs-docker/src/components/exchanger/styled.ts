import styled, { keyframes } from 'styled-components'
import { slideLeft } from '../../style/keyframes'

export const Container = styled.div`
  background-color: ${(p) => p.theme.colors.surface};
  padding: 0.5rem;
  width: 100%;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 8px;
  box-shadow: 0px 2px 2px #2224;
  padding: 0.5rem;
  animation: ${slideLeft} 0.3s linear;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const rotateRight = keyframes`
  0%, 40% { transform: rotate(0deg); }
  60%, 100% { transform: rotate(360deg); }
`

export const Rotate = styled.span`
  line-height: 0;
  animation: 10s ${rotateRight} linear infinite;
`

export const NumberField = styled.span`
  margin: 0 0.25rem;
`
export const CurrencyField = styled.span`
  font-weight: 700;
  color: ${(p) => p.theme.colors.primaryVariant};
`
