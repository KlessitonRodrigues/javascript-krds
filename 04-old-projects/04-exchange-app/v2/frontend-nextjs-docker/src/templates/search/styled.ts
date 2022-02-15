import styled from 'styled-components'
import { slideLeft } from '../../style/keyframes'

export const Container = styled.div<{ show: boolean }>`
  display: ${(p) => (p.show ? 'flex' : 'none')};
  background-color: #000000DD;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${slideLeft} 0.2s linear;
`

export const Content = styled.div`
  padding: 1rem;
  width: 90%;

  @media (min-width: ${(p) => p.theme.screens.lg}) {
    max-width: 80rem;
  }
`

export const Row = styled.span`
  display: flex;
  align-items: flex-end;
`

export const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;

  min-width: 80%;
  height: 60vh;
  overflow-y: auto;
  margin-top: 2rem;
`

export const Option = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  font-size: 1.25rem;
  border-radius: 4px;
  min-width: 4rem;
  padding: 0.5rem;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  animation: ${slideLeft} 0.2s linear;
`

export const closeBtn = styled.span`
  display: block;
  text-align: right;
  font-size: 3rem;
  font-weight: 700;
  text-align: right;
  line-height: 2rem;
  cursor: pointer;
  color: #FFF;
`
