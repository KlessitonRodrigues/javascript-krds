import styled from 'styled-components'

export const Container = styled.div``

export const Row = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
`

export const RowWrapped = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media(max-width: ${({theme})=> theme.screens.md }){
    flex-wrap: wrap;
  }
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
  max-height: 560px;

  @media (min-width: ${(p) => p.theme.screens.lg}) {
    grid-template-columns: 1fr 1fr;
    height: 35rem;
  }
`

export const Hr = styled.hr`
  margin-bottom: 1rem;
  border: 1px solid ${(p) => p.theme.colors.border};
`
