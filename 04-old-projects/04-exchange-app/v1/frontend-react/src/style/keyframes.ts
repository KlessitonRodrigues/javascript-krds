import { keyframes } from 'styled-components'

export const slideLeft = keyframes`
  0% {
    transform: translateX(-4rem);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

export const slideUp = keyframes`
  0% {
    transform: translateY(30rem);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`
