import styled, { keyframes } from 'styled-components'
import { slideLeft } from '../../style/keyframes'

export const Container = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  box-shadow: 0 1px 4px #0005;
  padding: 0.5rem;
  padding-bottom: 0;
  margin: 0.5rem 0;
  margin-top: 1.5rem;
  border-radius: 4px;
  position: relative;
  animation: ${slideLeft} 0.3s linear;
`

export const Date = styled.span`
  position: absolute;
  bottom: 108%;
  left: 0;
  font-size: 0.8rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1rem auto 3rem auto 1.5rem;
`

export const Currency = styled.span`
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 1.5rem;
  font-weight: 500;
  color: ${(p) => p.theme.colors.primaryVariant};
`

export const Rate = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 0;
`

export const RateNumber = styled.span`
  display: flex;
  align-items: center;
`
