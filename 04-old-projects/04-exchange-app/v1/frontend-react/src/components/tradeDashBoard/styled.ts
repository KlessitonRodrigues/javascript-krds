import styled from 'styled-components'

export const Container = styled.div``

export const ValueField = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
`

export const Label = styled.span`
  min-width: 2.5rem;
`

export const InputContainer = styled.div`
  margin-left: 0.5rem;
`

export const Exchangers = styled.div`
  display: grid;
  align-items: flex-start;
  align-content: flex-start;
  padding: 0.25rem;
  grid-template-columns: 1fr;
  row-gap: 1rem;
  column-gap: 1rem;
  justify-content: center;
  overflow-y: auto;
  max-height: 35rem;

  @media (min-width: ${(p) => p.theme.screens.lg}) {
    grid-template-columns: 1fr 1fr;
    height: 35rem;
  }
`

export const Hr = styled.hr`
  margin-bottom: 1rem;
  border: 1px solid ${(p) => p.theme.colors.border};
`
