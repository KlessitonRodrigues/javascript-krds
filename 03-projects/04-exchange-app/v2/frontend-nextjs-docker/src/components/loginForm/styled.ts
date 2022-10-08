import styled from 'styled-components'
import { slideUp } from '../../style/keyframes'

export const Container = styled.div`
  background-color: #000a;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  backdrop-filter: blur(6px);
  padding: 2rem 0.5rem 0;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 3rem;
  color: #fffc;

  @media (min-width: ${(p) => p.theme.screens.lg}) {
    font-size: 4rem;
  }
`

export const Form = styled.form`
  background-color: ${(p) => p.theme.colors.background};
  padding: 2rem 1.5rem;
  margin: 0 2rem;
  border-radius: 8px;
  max-width: 24rem;
  box-shadow: 0 2px 4px #0006;
  animation: ${slideUp} 0.5s linear;
  position: relative;
`

export const FormTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  text-align: center;
  color: ${(p) => p.theme.colors.primary};
`

export const Label = styled.label`
  display: block;
  font-size: 1.25rem;
  margin: 2rem 0 3rem 0;
`

export const LoginButton = styled.button`
  background-color: ${(p) => p.theme.colors.primary};
  padding: 0.5rem 2rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 4px #0005;

  &:hover {
    opacity: 0.9;
  }
`

export const RowCentered = styled.div`
  text-align: center;
`

export const Link = styled.span`
  font-size: 1rem;
  display: block;
  margin-top: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`

export const feedback = styled.span`
  color: #f57b42;
  display: block;
  margin: 0 0 0.5rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
`

export const FloatRight = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`
